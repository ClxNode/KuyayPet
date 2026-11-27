/// <reference lib="dom" />
// SC-2026-004 (mejora de UX): pruebas de los hallazgos de severidad 3 (UX-01, UX-02, UX-03).
import { expect, test, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('./');
  await page.evaluate(() => localStorage.clear());
  await page.goto('./');
});

const db = (page: Page) => page.evaluate(() => JSON.parse(localStorage.getItem('kuyaypet-db')!).state);
const toastArea = (page: Page) => page.locator('[aria-live="polite"]');

test('UX-01: las etiquetas inactivas de la barra inferior cumplen contraste AA (>= 4,5:1) y miden >= 12 px', async ({ page }) => {
  await page.getByRole('button', { name: /Adoptante/ }).click();
  await expect(page.locator('[data-tour="deck"] article').first()).toBeVisible();
  const nav = page.getByRole('navigation', { name: 'Navegación principal' });
  const links = nav.getByRole('link');
  expect(await links.count()).toBeGreaterThanOrEqual(5);
  const results = await links.evaluateAll((els) => {
    const parse = (c: string) => {
      const m = c.match(/rgba?\(([^)]+)\)/)!;
      const [r, g, b, a = '1'] = m[1].split(/[ ,/]+/).filter(Boolean);
      return { r: +r, g: +g, b: +b, a: +a };
    };
    const lum = ({ r, g, b }: { r: number; g: number; b: number }) => {
      const f = (v: number) => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    };
    return els.map((el) => {
      // Worst case: background layers composited over the cream of the page.
      let bg = { r: 255, g: 248, b: 238 };
      const chain: Element[] = [];
      for (let n: Element | null = el; n; n = n.parentElement) chain.unshift(n);
      for (const n of chain) {
        const c = parse(getComputedStyle(n).backgroundColor);
        if (c.a > 0) bg = { r: c.r * c.a + bg.r * (1 - c.a), g: c.g * c.a + bg.g * (1 - c.a), b: c.b * c.a + bg.b * (1 - c.a) };
      }
      const cs = getComputedStyle(el);
      const fg = parse(cs.color);
      const [hi, lo] = [lum(fg), lum(bg)].sort((x, y) => y - x);
      return { label: (el.textContent || '').trim(), active: el.getAttribute('aria-current') === 'page', ratio: (hi + 0.05) / (lo + 0.05), size: parseFloat(cs.fontSize) };
    });
  });
  const inactive = results.filter((r) => !r.active);
  expect(inactive.length).toBeGreaterThan(0);
  for (const r of inactive) {
    expect(r.ratio, `contraste de «${r.label}»`).toBeGreaterThanOrEqual(4.5);
    expect(r.size, `tamaño de «${r.label}»`).toBeGreaterThanOrEqual(12);
  }
});

test('UX-02: rechazar un interés tiene botón con texto, toast con «Deshacer» ~5 s, y deshacer lo restaura', async ({ page }) => {
  await page.getByRole('button', { name: /Responsable/ }).click();
  const interests = page.locator('[data-tour="owner-interests"]');
  await expect(interests).toBeVisible();
  const row = interests.locator('li').filter({ has: page.getByRole('button', { name: 'Rechazar' }) }).first();
  await expect(row).toBeVisible();
  const reject = row.getByRole('button', { name: 'Rechazar' });
  await expect(reject).toHaveText(/Rechazar/); // visible text, not icon-only
  expect((await reject.boundingBox())!.height).toBeGreaterThanOrEqual(44);
  const accept = row.getByRole('button', { name: 'Aceptar y hacer Match' });
  await expect(accept).toContainText('Aceptar');
  expect((await accept.boundingBox())!.height).toBeGreaterThanOrEqual(44);

  const pendingBefore = (await db(page)).interests.filter((i: { status: string }) => i.status === 'pendiente').length;
  const rowsBefore = await interests.locator('li').count();
  await reject.click();
  await expect(interests.locator('li')).toHaveCount(rowsBefore - 1);
  const undo = toastArea(page).getByRole('button', { name: 'Deshacer' });
  await expect(undo).toBeVisible();
  expect((await db(page)).interests.filter((i: { status: string }) => i.status === 'pendiente').length).toBe(pendingBefore - 1);

  await page.waitForTimeout(4200); // lasts about 5 s, not the usual 3.8 s
  await expect(undo).toBeVisible();
  await undo.click();
  await expect(interests.locator('li')).toHaveCount(rowsBefore);
  expect((await db(page)).interests.filter((i: { status: string }) => i.status === 'pendiente').length).toBe(pendingBefore);
  await expect(page.getByText('Interés restaurado')).toBeVisible();
});

test('UX-03: descartar y luego «Deshacer» devuelve la tarjeta y no deja rastro en el historial', async ({ page }) => {
  await page.getByRole('button', { name: /Adoptante/ }).click();
  const top = page.locator('[data-tour="top-card"]');
  await expect(top).toBeVisible();
  const first = (await top.getAttribute('aria-label'))!;
  const before = await db(page);

  await expect(page.getByRole('button', { name: 'Deshacer', exact: true }).first()).toBeDisabled(); // nothing to undo yet
  await page.getByRole('button', { name: 'No me gusta', exact: true }).click();
  await expect(top).not.toHaveAttribute('aria-label', first);
  expect((await db(page)).interactions.length).toBe(before.interactions.length + 1);

  await toastArea(page).getByRole('button', { name: 'Deshacer' }).click();
  await expect(top).toHaveAttribute('aria-label', first);
  const after = await db(page);
  expect(after.interactions.length).toBe(before.interactions.length);
  expect(after.interests.length).toBe(before.interests.length);
});

test('UX-03: «Me gusta» sin Match se deshace con el botón secundario y retira el interés del responsable', async ({ page }) => {
  await page.getByRole('button', { name: /Adoptante/ }).click();
  const top = page.locator('[data-tour="top-card"]');
  await expect(top).toBeVisible();
  const first = (await top.getAttribute('aria-label'))!;
  const before = await db(page);

  await page.getByRole('button', { name: 'Me gusta', exact: true }).click();
  await expect(top).not.toHaveAttribute('aria-label', first);
  await expect.poll(async () => (await db(page)).interests.length).toBe(before.interests.length + 1);

  // Secondary undo button under the deck (not the toast action). Fast enough that the owner has not answered yet.
  await page.getByRole('button', { name: 'Deshacer', exact: true }).first().click();
  await expect(top).toHaveAttribute('aria-label', first);
  const after = await db(page);
  if (after.matches.length === before.matches.length) {
    expect(after.interests.length).toBe(before.interests.length);
    expect(after.notifications.length).toBe(before.notifications.length);
  }
});
