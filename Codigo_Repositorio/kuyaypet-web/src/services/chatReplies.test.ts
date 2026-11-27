import { describe, expect, it } from 'vitest';
import { classifyMessage, replyFor } from './chatReplies';

const luna = { name: 'Luna', sex: 'hembra' as const };
const toby = { name: 'Toby', sex: 'macho' as const };

describe('classifyMessage (simulated owner replies)', () => {
  it.each([
    ['Disculpa, ya no podré adoptar', 'despedida'],
    ['Hola, ya no podré adoptar', 'despedida'],
    ['Quiero cancelar la solicitud', 'despedida'],
    ['Gracias por todo, chau', 'despedida'],
    ['Hola', 'saludo'],
    ['Buenas tardes', 'saludo'],
    ['¿Qué tal?', 'saludo'],
    ['Qué tal, me gustaría coordinar una visita', 'visita'],
    ['¿Cuándo puedo ir a conocerla?', 'visita'],
    ['¿Me pasas la dirección?', 'visita'],
    ['¿A qué hora te acomoda?', 'visita'],
    ['¿Tiene sus vacunas?', 'mascota'],
    ['¿Se lleva bien con gatos?', 'mascota'],
    ['¿Cuántos años tiene?', 'mascota'],
    ['Ahora tengo una duda sobre sus vacunas', 'mascota'],
    ['Me encantó su foto', 'general'],
    ['', 'general'],
  ])('%s → %s', (text, kind) => {
    expect(classifyMessage(text)).toBe(kind);
  });

  it('is case-insensitive', () => {
    expect(classifyMessage('YA NO PODRÉ ADOPTAR')).toBe('despedida');
  });
});

describe('replyFor', () => {
  it('answers a cancellation with a farewell, not with a question about the home', () => {
    const r = replyFor('Disculpa, ya no podré adoptar', luna);
    expect(r).toMatch(/gracias por avisarme/i);
    expect(r).not.toMatch(/hogar/i);
  });

  it('is deterministic: same message, same reply', () => {
    expect(replyFor('¿Cuándo la visito?', luna)).toBe(replyFor('¿Cuándo la visito?', luna));
  });

  it('names the pet and agrees with its sex', () => {
    expect(replyFor('¿Está vacunada?', luna)).toContain('desparasitada');
    expect(replyFor('¿Está vacunado?', toby)).toContain('desparasitado');
    expect(replyFor('Hola', toby)).toContain('Toby');
  });

  it('points visit questions to "Coordinar adopción"', () => {
    expect(replyFor('Me gustaría coordinar una visita', luna)).toContain('Coordinar adopción');
  });

  it('falls back to a neutral reply without a pet', () => {
    expect(replyFor('Me encantó', undefined)).toContain('la mascota');
  });
});
