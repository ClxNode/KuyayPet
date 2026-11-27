// UX-02 / UX-03: inverse operations in the service layer. The store needs `location` and `localStorage`, which node lacks.
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import type { User } from '@/types';

type Match = typeof import('./match');
type Store = typeof import('./store');
let m: Match;
let store: Store;

beforeAll(async () => {
  const mem = new Map<string, string>();
  vi.stubGlobal('location', { search: '' });
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => mem.get(k) ?? null,
    setItem: (k: string, v: string) => void mem.set(k, v),
    removeItem: (k: string) => void mem.delete(k),
  });
  store = await import('./store');
  m = await import('./match');
});

const adopterOf = (): User => store.db.get().users.find((u) => u.id === 'u-adopter-demo')!;
// A pet whose owner answers by hand (the demo owner), so no random auto-answer timer is armed.
const petOf = () => store.db.get().pets.find((p) => p.ownerId === 'u-owner-demo' && p.status === 'disponible')!;

beforeEach(() => {
  store.db.reset();
});

describe('undoSwipe', () => {
  it('reverts a discard: the interaction disappears and the pet can be seen again', () => {
    const pet = petOf();
    const before = store.db.get().interactions.length;
    const receipt = m.recordSwipe(adopterOf(), pet.id, 'dislike')!;
    expect(m.seenPetIds('u-adopter-demo').has(pet.id)).toBe(true);
    expect(m.undoSwipe(receipt)).toEqual({ ok: true });
    expect(store.db.get().interactions.length).toBe(before);
    expect(m.seenPetIds('u-adopter-demo').has(pet.id)).toBe(false);
  });

  it('reverts a like without Match: interest and owner notification are removed', () => {
    const pet = petOf();
    const s0 = store.db.get();
    const receipt = m.recordSwipe(adopterOf(), pet.id, 'like')!;
    expect(receipt.interestId).toBeTruthy();
    expect(store.db.get().interests.length).toBe(s0.interests.length + 1);
    expect(store.db.get().notifications.length).toBe(s0.notifications.length + 1);
    expect(m.undoSwipe(receipt)).toEqual({ ok: true });
    const s1 = store.db.get();
    expect(s1.interests.length).toBe(s0.interests.length);
    expect(s1.notifications.length).toBe(s0.notifications.length);
    expect(s1.interactions.length).toBe(s0.interactions.length);
  });

  it('refuses to undo a like the owner already accepted (Match exists)', () => {
    const pet = petOf();
    const receipt = m.recordSwipe(adopterOf(), pet.id, 'like')!;
    m.answerInterest(receipt.interestId!, true);
    const matches = store.db.get().matches.length;
    expect(m.undoSwipe(receipt)).toEqual({ ok: false, reason: 'match' });
    expect(store.db.get().matches.length).toBe(matches);
    expect(store.db.get().interests.some((i) => i.id === receipt.interestId)).toBe(true);
  });

  it('is idempotent: a second undo reports the swipe as missing', () => {
    const receipt = m.recordSwipe(adopterOf(), petOf().id, 'dislike')!;
    m.undoSwipe(receipt);
    expect(m.undoSwipe(receipt)).toEqual({ ok: false, reason: 'missing' });
  });

  it('does not delete an interest that existed before the swipe', () => {
    const pet = petOf();
    m.expressInterest(adopterOf(), pet.id); // e.g. from the pet profile
    const n = store.db.get().interests.length;
    const receipt = m.recordSwipe(adopterOf(), pet.id, 'like')!;
    expect(receipt.interestId).toBeUndefined();
    m.undoSwipe(receipt);
    expect(store.db.get().interests.length).toBe(n);
  });
});

describe('undoRejectInterest', () => {
  it('puts a rejected interest back to pending, and refuses an accepted one', () => {
    const pet = petOf();
    const r1 = m.recordSwipe(adopterOf(), pet.id, 'like')!;
    m.answerInterest(r1.interestId!, false);
    expect(store.db.get().interests.find((i) => i.id === r1.interestId)?.status).toBe('rechazado');
    expect(m.undoRejectInterest(r1.interestId!)).toBe(true);
    const back = store.db.get().interests.find((i) => i.id === r1.interestId)!;
    expect(back.status).toBe('pendiente');
    expect(back.answeredAt).toBeUndefined();
    m.answerInterest(r1.interestId!, true);
    expect(m.undoRejectInterest(r1.interestId!)).toBe(false);
  });
});
