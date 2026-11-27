// Interacciones + Match (UML). A like creates an Interest; a Match exists only when the owner accepts (HU-07).
// In the demo the owner's answer is SIMULATED: autoAcceptProbability + 2–6 s delay, or forced by the presenter.
import type { Interest, InteractionKind, Match, User } from '@/types';
import { computeMatch } from '@/lib/match';
import { db, nowIso, uid, useDb } from './store';
import { notify } from './notifications';
import { ensureDirectThread, postMessage } from './chat';
import { useUi } from './ui';

/** What a swipe created, so it can be reverted exactly (UX-03). `interestId` is set only if this swipe created the Interest. */
export interface SwipeReceipt {
  interactionId: string;
  petId: string;
  kind: InteractionKind;
  interestId?: string;
}

export function recordSwipe(adopter: User, petId: string, kind: InteractionKind): SwipeReceipt | undefined {
  const pet = db.get().pets.find((p) => p.id === petId);
  if (!pet) return;
  const interactionId = uid('i');
  db.set((s) => ({
    interactions: [...s.interactions, { id: interactionId, adopterId: adopter.id, petId, kind, createdAt: nowIso() }],
  }));
  const receipt: SwipeReceipt = { interactionId, petId, kind };
  if (kind === 'dislike') return receipt;
  const existed = db.get().interests.some((i) => i.adopterId === adopter.id && i.petId === petId);
  const interest = expressInterest(adopter, petId, kind === 'superlike');
  if (interest && !existed) receipt.interestId = interest.id;
  return receipt;
}

export type UndoSwipeResult = { ok: true } | { ok: false; reason: 'match' | 'missing' };

/**
 * Inverse of recordSwipe (UX-03). A discard, or a like the owner has not accepted, is fully reverted: the
 * interaction, the Interest this swipe created and the owner's "interés" notification disappear.
 * A like that already produced a Match is NOT undone (the chat, notifications and Match exist): it returns `reason: 'match'`.
 */
export function undoSwipe(receipt: SwipeReceipt): UndoSwipeResult {
  const s = db.get();
  if (!s.interactions.some((i) => i.id === receipt.interactionId)) return { ok: false, reason: 'missing' };
  const interest = receipt.interestId ? s.interests.find((i) => i.id === receipt.interestId) : undefined;
  if (interest?.status === 'aceptado') return { ok: false, reason: 'match' };
  db.set((st) => ({
    interactions: st.interactions.filter((i) => i.id !== receipt.interactionId),
    interests: interest ? st.interests.filter((i) => i.id !== interest.id) : st.interests,
    notifications: interest
      ? st.notifications.filter((n) => !(n.kind === 'interes' && n.userId === interest.ownerId && n.actorId === interest.adopterId && n.petId === interest.petId))
      : st.notifications,
  }));
  return { ok: true };
}

export function expressInterest(adopter: User, petId: string, isSuper = false): Interest | undefined {
  const s = db.get();
  const pet = s.pets.find((p) => p.id === petId);
  if (!pet) return;
  const already = s.interests.find((i) => i.adopterId === adopter.id && i.petId === petId);
  if (already) return already;
  const score = adopter.profile ? computeMatch(adopter.profile, pet, { ignoreRadius: true }).score : 0;
  const interest: Interest = {
    id: uid('int'),
    adopterId: adopter.id,
    petId,
    ownerId: pet.ownerId,
    status: 'pendiente',
    super: isSuper,
    score,
    createdAt: nowIso(),
  };
  db.set((st) => ({ interests: [...st.interests, interest] }));
  notify(
    {
      userId: pet.ownerId,
      kind: 'interes',
      title: isSuper ? `⭐ ${adopter.name} te dio un Súper Kuyay` : `${adopter.name} está interesad@ en ${pet.name}`.replace('@', 'o/a'),
      body: `Compatibilidad ${score}%. Acepta para hacer Match y abrir el chat.`,
      link: `/adoptante/${adopter.id}?petId=${petId}`,
      actorId: adopter.id,
      petId,
    },
    { toastIfCurrent: false },
  );
  simulateOwnerAnswer(interest);
  return interest;
}

function simulateOwnerAnswer(interest: Interest) {
  const s = db.get();
  const owner = s.users.find((u) => u.id === interest.ownerId);
  // The demo owner answers by hand (that's part of the tour), unless the presenter forces a match.
  const guaranteed = s.demo.guaranteedMatch;
  if (!guaranteed && owner?.id === 'u-owner-demo') return;
  const p = owner?.autoAcceptProbability ?? 0.6;
  const accept = guaranteed || Math.random() < p + (interest.super ? 0.2 : 0) + (interest.score >= 80 ? 0.1 : 0);
  if (guaranteed) db.set((st) => ({ demo: { ...st.demo, guaranteedMatch: false } }));
  const delay = guaranteed ? 1200 : 2000 + Math.random() * 4000;
  setTimeout(() => answerInterest(interest.id, accept), delay);
}

export function answerInterest(interestId: string, accept: boolean): Match | undefined {
  const s = db.get();
  const interest = s.interests.find((i) => i.id === interestId);
  if (!interest || interest.status !== 'pendiente') return;
  db.set((st) => ({
    interests: st.interests.map((i) => (i.id === interestId ? { ...i, status: accept ? 'aceptado' : 'rechazado', answeredAt: nowIso() } : i)),
  }));
  if (!accept) return;
  const pet = s.pets.find((p) => p.id === interest.petId);
  const owner = s.users.find((u) => u.id === interest.ownerId);
  const match: Match = {
    id: uid('mt'),
    adopterId: interest.adopterId,
    petId: interest.petId,
    ownerId: interest.ownerId,
    score: interest.score,
    createdAt: nowIso(),
    seen: false,
  };
  db.set((st) => ({ matches: [...st.matches, match] }));
  const thread = ensureDirectThread(interest.petId, interest.adopterId, interest.ownerId);
  postMessage(thread.id, 'system', `🎉 ¡Es un Match! ${owner?.name ?? 'El responsable'} aceptó tu interés en ${pet?.name}.`, true);
  postMessage(thread.id, interest.ownerId, `¡Hola! Vi que te interesa ${pet?.name} 😊 Cuéntame un poco de ti y de tu hogar.`);
  notify(
    { userId: interest.adopterId, kind: 'match', title: `¡Es un Match con ${pet?.name}!`, body: 'Ya puedes chatear con su responsable.', link: `/chats/${thread.id}`, petId: pet?.id, actorId: owner?.id },
    { toastIfCurrent: false },
  );
  if (db.get().sessionUserId === interest.adopterId) useUi.setState({ celebrationMatchId: match.id });
  return match;
}

/** Inverse of `answerInterest(id, false)` (UX-02): a rejection can be taken back; an acceptance cannot (it created a Match). */
export function undoRejectInterest(interestId: string): boolean {
  const interest = db.get().interests.find((i) => i.id === interestId);
  if (!interest || interest.status !== 'rechazado') return false;
  db.set((st) => ({
    interests: st.interests.map((i) => {
      if (i.id !== interestId) return i;
      const { answeredAt: _omit, ...rest } = i;
      return { ...rest, status: 'pendiente' as const };
    }),
  }));
  return true;
}

export function useMatchesFor(adopterId: string | undefined): Match[] {
  return useDb((s) => s.matches).filter((m) => m.adopterId === adopterId);
}

export function useMatchById(id: string | null): Match | undefined {
  return useDb((s) => s.matches.find((m) => m.id === id));
}

export function useInterestsForOwner(ownerId: string | undefined): Interest[] {
  return useDb((s) => s.interests).filter((i) => i.ownerId === ownerId);
}

export function seenPetIds(adopterId: string): Set<string> {
  return new Set(db.get().interactions.filter((i) => i.adopterId === adopterId).map((i) => i.petId));
}

export function setGuaranteedMatch(on: boolean) {
  db.set((s) => ({ demo: { ...s.demo, guaranteedMatch: on } }));
}

/* Favoritos + Historial (HU-17, HU-18) */
export function useFavorites(adopterId: string | undefined) {
  return useDb((s) => s.favorites).filter((f) => f.adopterId === adopterId);
}

export function useIsFavorite(adopterId: string | undefined, petId: string) {
  return useDb((s) => s.favorites.some((f) => f.adopterId === adopterId && f.petId === petId));
}

export function toggleFavorite(adopterId: string, petId: string): boolean {
  const exists = db.get().favorites.some((f) => f.adopterId === adopterId && f.petId === petId);
  db.set((s) => ({
    favorites: exists
      ? s.favorites.filter((f) => !(f.adopterId === adopterId && f.petId === petId))
      : [...s.favorites, { adopterId, petId, createdAt: nowIso() }],
  }));
  return !exists;
}

export function useHistory(adopterId: string | undefined) {
  return useDb((s) => s.interactions).filter((i) => i.adopterId === adopterId && i.kind !== 'dislike');
}
