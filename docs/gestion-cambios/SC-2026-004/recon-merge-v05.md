# Recon: v0.5-ui → final/sc003 (2026-11-26)
- merge-base 898a9f6; v0.5 27 commits, main 74. `git merge-tree final/sc003 v0.5-ui`: 13 conflict files (11 code, 18 hunks).
- Conflicts: components/ui/index.tsx; shell/{AppLayout (guía tab HU-14, unframed), DeviceFrame (UNFRAMED_ROUTES HU-02), PresenterPanel (open/onOpenChange)}; screens/{Browse (HU-04 empty msg, data-hu grid), PetProfile (desktop 2-col), chat/ChatThread (Finalizar conversación, closed, privacy guard), owner/EditPet (HU-16 photos/tags, data-testid edit-photo), History (HU-18 badges), admin/AdminPublicationDetail (HU-23), admin/AdminUserDetail (HU-25)}; HANDOFF.md, ESTADO_CLASE.md.
- Resolution order: ui/index → shell → Browse/PetProfile → ChatThread → EditPet → History → admin → docs. Keep main logic + v0.5 markup.
- Selector risk: Finalizar conversación/Finalizar, Quitar foto, edit-photo, link Guía, heading "Guía de adopción responsable", Adoptada, /Vacunas y salud/, HU-04 empty text, data-testid device-frame; data-hu/data-tour must survive.
- vite.config auto-merges (v0.5 adds base VITE_BASE||'./'; main denylist). No new deps.
