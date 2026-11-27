// Simulated owner replies (no backend). Deterministic keyword rules, checked in a fixed order:
// the first rule that matches wins, so "Hola, ya no podré adoptar" is a farewell, not a greeting.
import type { Pet } from '@/types';

export type ReplyKind = 'despedida' | 'visita' | 'mascota' | 'saludo' | 'general';

const RULES: { kind: ReplyKind; re: RegExp }[] = [
  {
    kind: 'despedida',
    re: /(ya no|no podr[eé]|no voy a poder|cancel|desist|me arrepent|cambi[eé] de opini[oó]n|adi[oó]s|chau|chao|hasta luego|nos vemos|gracias por todo)/,
  },
  { kind: 'visita', re: /(visita|conocer|coordinar|cu[aá]ndo|fecha|\bhora|direcci[oó]n|d[oó]nde|s[aá]bado|domingo)/ },
  {
    kind: 'mascota',
    re: /(vacuna|esteriliz|castra|desparasit|salud|veterinari|edad|años|meses|tama[ñn]o|grande|peque|car[aá]cter|juega|come|ni[ñn]|gato|perro|otra mascota|raza|energ)/,
  },
  { kind: 'saludo', re: /^[\s¿¡]*(hola|buen[oa]s?|hey|qu[eé] tal|saludos)\b/ },
];

/** Matches in lower case, so "YA NO PODRÉ" and "ya no podré" get the same reply. */
export function classifyMessage(text: string): ReplyKind {
  const t = text.toLowerCase();
  return RULES.find((r) => r.re.test(t))?.kind ?? 'general';
}

export function replyFor(text: string, pet: Pick<Pet, 'name' | 'sex'> | undefined): string {
  const name = pet?.name ?? 'la mascota';
  const o = pet?.sex === 'macho' ? 'o' : 'a';
  switch (classifyMessage(text)) {
    case 'despedida':
      return `Entiendo, gracias por avisarme. Si más adelante quieres volver a intentarlo, ${name} y yo estaremos por aquí. ¡Cuídate! 💛`;
    case 'visita':
      return `¡Claro! Puedes usar el botón “Coordinar adopción” y proponer fecha y hora. Los sábados en la mañana me acomodan muy bien para que conozcas a ${name} 🐾`;
    case 'mascota':
      return `${name} tiene sus vacunas al día y está desparasitad${o}. Todo lo demás (edad, tamaño y carácter) está en su perfil; si quieres, te cuento cómo es su día a día 📋`;
    case 'saludo':
      return `¡Hola! Qué bueno que te interese ${name} 😊 ¿Qué te gustaría saber?`;
    default:
      return `Gracias por tu mensaje. Si tienes alguna pregunta sobre ${name} o quieres coordinar una visita, escríbeme por aquí 🐾`;
  }
}
