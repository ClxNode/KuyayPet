// Ephemeral UI state (not persisted): toasts, confirm dialog, match celebration, typing indicators.
import { create } from 'zustand';

export interface Toast {
  id: number;
  title: string;
  body?: string;
  emoji?: string;
  tone?: 'info' | 'success' | 'error';
  onClick?: () => void;
  /** Non-blocking secondary action, e.g. «Deshacer» (UX-02, UX-03). Dismisses the toast when pressed. */
  action?: { label: string; onClick: () => void };
  /** ms before it closes by itself. Default 3800; errors 8000 (UX-09). Paused while hovered or focused. */
  duration?: number;
  /** `bottom` (default) sits above the tab bar, in thumb reach; `top` sits under the header, for screens whose bottom is the main control row. */
  placement?: 'bottom' | 'top';
}

export const toastDuration = (t: Pick<Toast, 'duration' | 'tone'>) => t.duration ?? (t.tone === 'error' ? 8000 : 3800);

export interface ConfirmOptions {
  title: string;
  body?: string;
  emoji?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
}

interface UiState {
  toasts: Toast[];
  confirmState: (ConfirmOptions & { resolve: (ok: boolean) => void }) | null;
  celebrationMatchId: string | null;
  typing: Record<string, boolean>;
  presenterOpen: boolean;
  tourStep: number | null;
  /** Bumped on every (re)start so the tour re-enters step 0 even if it was already there. */
  tourRun: number;
  /** Presenter/tour: force this pet to be the next card in the deck. */
  pinnedPetId: string | null;
  pushToast: (t: Omit<Toast, 'id'>) => void;
  dismissToast: (id: number) => void;
  closeConfirm: (ok: boolean) => void;
}

let toastId = 0;

export const useUi = create<UiState>()((set, get) => ({
  toasts: [],
  confirmState: null,
  celebrationMatchId: null,
  typing: {},
  presenterOpen: true,
  tourStep: null,
  tourRun: 0,
  pinnedPetId: null,
  pushToast: (t) => {
    const id = ++toastId;
    set((s) => ({ toasts: [...s.toasts.slice(-2), { ...t, id }] }));
  },
  dismissToast: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
  closeConfirm: (ok) => {
    const c = get().confirmState;
    set({ confirmState: null });
    c?.resolve(ok);
  },
}));

export const toast = (t: Omit<Toast, 'id'>) => useUi.getState().pushToast(t);

export function confirm(opts: ConfirmOptions): Promise<boolean> {
  return new Promise((resolve) => useUi.setState({ confirmState: { ...opts, resolve } }));
}
