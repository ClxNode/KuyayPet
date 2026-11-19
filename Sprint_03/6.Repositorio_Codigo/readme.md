# 6. Repositorio de código — Sprint 3

**Repositorio principal:** [ClxNode/KuyayPet](https://github.com/ClxNode/KuyayPet) · **Código del prototipo:** [`Codigo_Repositorio/`](../../Codigo_Repositorio/readme.md)

> Reconstruido a partir del historial de GitHub el 2026-11-19; el equipo puede corregirlo.

Datos de `prs.json` y de la API de GitHub al 19-nov-2026. Las horas están en UTC (hora de Lima = UTC−5). El autor de los 18 PR de este sprint (#68–#76, #88–#95 y #99) es IchiSieben.

## Estado del incremento

- **Parte (a):** los 9 PR de la parte (a) ([#68](https://github.com/ClxNode/KuyayPet/pull/68)–[#76](https://github.com/ClxNode/KuyayPet/pull/76)) están fusionados en `main`; `main` termina en el commit `8973b20` (12-nov 17:10Z).
- **Parte (b):** los PR [#88](https://github.com/ClxNode/KuyayPet/pull/88)–[#95](https://github.com/ClxNode/KuyayPet/pull/95) y [#99](https://github.com/ClxNode/KuyayPet/pull/99) se abrieron contra `main` el 19-nov (#99 a las 16:10Z) y se fusionaron ese día entre las 16:26Z y las 16:48Z; los documentos de cierre entraron con [#100](https://github.com/ClxNode/KuyayPet/pull/100) (16:58Z). `src/` y `tests/` de `main` son idénticos a los de producción `v1.0.0`.
- **Prototipo publicado:** https://firebrick-cod-910257.hostingersite.com/ — versión `v1.0.0`, desplegada el 19-nov-2026 (hasta esa fecha estuvo `v0.3.1-sprint2`, anterior a las fusiones del 12-nov).

## Qué implementa cada HU y qué tocó el sprint

Las pantallas y servicios de las HU de la parte (a) ya existían en `main` desde el 16-oct (commit `f7c8312`). Los PR del sprint agregan tests, evidencias y tres correcciones de código.

| HU | Implementación (ya en `main`) | Archivos tocados por el PR del sprint |
|---|---|---|
| HU-06 | `screens/Discover.tsx`, `services/match.ts` | `tests/criterios/HU-06.spec.ts` |
| HU-07 | `services/match.ts`, `screens/Matches.tsx`, `screens/owner/OwnerHome.tsx` | `tests/criterios/HU-07.spec.ts` |
| HU-08 | `screens/chat/ChatList.tsx`, `screens/chat/ChatThread.tsx`, `services/chat.ts` | **Código:** `ChatThread.tsx` (+28 −6), `services/chat.ts` (+7), `types/index.ts` (+1); `tests/criterios/HU-08.spec.ts` |
| HU-09 | `screens/PetProfile.tsx`, `services/chat.ts` | `tests/criterios/HU-09.spec.ts` |
| HU-10 | `screens/Coordinate.tsx`, `services/adoptions.ts` | **Código:** `screens/Coordinate.tsx` (+5); `tests/criterios/HU-10.spec.ts` |
| HU-13 | `screens/Notifications.tsx`, `services/notifications.ts`, `screens/AdopterProfileView.tsx` | `tests/criterios/HU-13.spec.ts` |
| HU-18 | `screens/History.tsx`, `services/match.ts` | **Código:** `screens/History.tsx` (+18 −6); `tests/criterios/HU-18.spec.ts` |
| HU-20 | `screens/Matches.tsx`, `screens/Onboarding.tsx` | `tests/criterios/HU-20.spec.ts` |
| HU-14 | `screens/Guide.tsx` | PR #88: **código:** `shell/AppLayout.tsx` (pestaña “Guía”); `tests/criterios/HU-14.spec.ts` |
| HU-15 | `screens/auth/Recover.tsx`, `services/auth.ts` | PR #89: `tests/criterios/HU-15.spec.ts` |
| HU-22 | `screens/admin/AdminUsers.tsx` | PR #90: `tests/criterios/HU-22.spec.ts` |
| HU-23 | `screens/admin/AdminPublications.tsx`, `AdminPublicationDetail.tsx`, `services/moderation.ts` | PR #91: **código:** `AdminPublicationDetail.tsx`; `tests/criterios/HU-23.spec.ts` |
| HU-24 | `screens/admin/AdminPublications.tsx`, `services/moderation.ts` | PR #92: `tests/criterios/HU-24.spec.ts` |
| HU-25 | `screens/admin/AdminUserDetail.tsx`, `services/moderation.ts` | PR #93: **código:** `AdminUserDetail.tsx` (aviso de cuenta ya inactiva); `tests/criterios/HU-25.spec.ts` |
| HU-26 | `screens/admin/AdminReports.tsx`, `AdminReportDetail.tsx`, `services/moderation.ts` | PR #94: `tests/criterios/HU-26.spec.ts` |

Rutas: [`src/App.tsx`](../../Codigo_Repositorio/kuyaypet-web/src/App.tsx) y [`src/data/huStatus.ts`](../../Codigo_Repositorio/kuyaypet-web/src/data/huStatus.ts).

## Pull requests de la parte (a)

| PR | Rama | HU | Contenido | Revisión | Fusionado por | Fecha de fusión | Archivos (+/−) |
|---|---|---|---|---|---|---|---|
| [#68](https://github.com/ClxNode/KuyayPet/pull/68) | `sprint-3/HU-06-criterios` | HU-06 | Tests de criterios c1, c3, c4, c5 | ClxNode: APPROVED (12-nov 16:48:41Z) | ClxNode | 12-nov 16:48:53Z | 7 (+75 −0) |
| [#69](https://github.com/ClxNode/KuyayPet/pull/69) | `sprint-3/HU-07-criterios` | HU-07 | Tests de criterios c4–c8 | ClxNode: APPROVED (16:49:39Z) | ClxNode | 12-nov 16:49:46Z | 6 (+118 −0) |
| [#70](https://github.com/ClxNode/KuyayPet/pull/70) | `sprint-3/HU-08-criterios` | HU-08 | Tests de criterios y acción “Finalizar conversación” | VALTOm07: APPROVED (16:54:49Z) | VALTOm07 | 12-nov 17:00:08Z | 12 (+155 −6) |
| [#71](https://github.com/ClxNode/KuyayPet/pull/71) | `sprint-3/HU-09-criterios` | HU-09 | Tests de criterios c2–c6 del chat grupal | VALTOm07: APPROVED (16:56:57Z) | VALTOm07 | 12-nov 17:00:18Z | 6 (+106 −0) |
| [#72](https://github.com/ClxNode/KuyayPet/pull/72) | `sprint-3/HU-10-criterios` | HU-10 | Tests de criterios c1, c3, c5, c6; el formulario se reinicia al cambiar de mascota | kevinesty: COMMENTED (16:51:02Z) | kevinesty | 12-nov 16:51:11Z | 8 (+102 −0) |
| [#73](https://github.com/ClxNode/KuyayPet/pull/73) | `sprint-3/HU-13-criterios` | HU-13 | Tests de criterios c2, c4, c5 | kevinesty: COMMENTED (16:51:27Z) | kevinesty | 12-nov 16:51:33Z | 6 (+74 −0) |
| [#74](https://github.com/ClxNode/KuyayPet/pull/74) | `sprint-3/HU-18-criterios` | HU-18 | Insignia de estado actual en el historial y tests de criterios | sin revisiones | Joseph-L-Q | 12-nov 17:00:51Z | 9 (+118 −6) |
| [#75](https://github.com/ClxNode/KuyayPet/pull/75) | `sprint-3/HU-20-criterios` | HU-20 | Tests de criterios c1–c7 | sin revisiones | Joseph-L-Q | 12-nov 17:00:51Z | 8 (+96 −0) |
| [#76](https://github.com/ClxNode/KuyayPet/pull/76) | `sprint-3/evidencias-automatizadas` | las 8 HU de la parte (a) | Evidencias automatizadas: capturas por criterio y video por HU; `7.Pruebas` | sin revisiones | Joseph-L-Q | 12-nov 17:00:49Z | 130 (+1745 −12) |

Fuera de la lista del sprint pero fusionado el mismo día: [#67](https://github.com/ClxNode/KuyayPet/pull/67) (evidencias de HU-03, autor kevinesty, aprobado por VALTOm07 el 29-oct 06:39Z), fusionado por ClxNode el 12-nov 17:10:24Z.

Notas verificadas con git:

- Los PR [#74](https://github.com/ClxNode/KuyayPet/pull/74) y [#75](https://github.com/ClxNode/KuyayPet/pull/75) figuran como fusionados a las 17:00:51Z por Joseph-L-Q, pero `main` no tiene commit de fusión para ellos: sus ramas ya habían entrado a `main` con el PR [#76](https://github.com/ClxNode/KuyayPet/pull/76) (commit `15fddb7`, 17:00:48Z).
- Los 4 PR con aprobación ([#68](https://github.com/ClxNode/KuyayPet/pull/68)–[#71](https://github.com/ClxNode/KuyayPet/pull/71)) fueron fusionados por la misma cuenta que los aprobó. Los PR [#72](https://github.com/ClxNode/KuyayPet/pull/72) y [#73](https://github.com/ClxNode/KuyayPet/pull/73) tienen solo un comentario de kevinesty, que también los fusionó. [#74](https://github.com/ClxNode/KuyayPet/pull/74)–[#76](https://github.com/ClxNode/KuyayPet/pull/76) no tienen revisión registrada.
- El PR [#76](https://github.com/ClxNode/KuyayPet/pull/76) tiene 130 archivos (la lista de `prs.json` se corta en 100).

## Pull requests de la parte (b)

Las ramas de la parte (b) se llaman `sprint-4/…` por historia: el curso tiene 3 sprints y renombrarlas cerraría los PR. Todas pertenecen al Sprint 3 y al milestone Sprint 3.

| PR | Rama | HU | Contenido | Autor | Revisión | Fusionado por | Fecha de fusión | Archivos (+/−) |
|---|---|---|---|---|---|---|---|---|
| [#88](https://github.com/ClxNode/KuyayPet/pull/88) | `sprint-4/HU-14-criterios` | HU-14 | Pestaña “Guía” en la barra principal y tests c1, c2, c4 | IchiSieben | BeyondNate: APPROVED (16:26:04Z) | BeyondNate | 19-nov 16:26:16Z | 9 (+65 −2) |
| [#89](https://github.com/ClxNode/KuyayPet/pull/89) | `sprint-4/HU-15-criterios` | HU-15 | Tests c3, c4, c5 de recuperación de contraseña | IchiSieben | sin revisiones | Dylan200-7 | 19-nov 16:33:56Z | 4 (+57 −0) |
| [#90](https://github.com/ClxNode/KuyayPet/pull/90) | `sprint-4/HU-22-criterios` | HU-22 | Tests c4 y c7 de gestionar usuarios | IchiSieben | BeyondNate: APPROVED (16:37:41Z) | BeyondNate | 19-nov 16:37:58Z | 3 (+49 −0) |
| [#91](https://github.com/ClxNode/KuyayPet/pull/91) | `sprint-4/HU-23-criterios` | HU-23 | Datos de la mascota en el detalle de la publicación y tests | IchiSieben | kevinesty: APPROVED (16:38:12Z) | kevinesty | 19-nov 16:38:29Z | 5 (+73 −0) |
| [#92](https://github.com/ClxNode/KuyayPet/pull/92) | `sprint-4/HU-24-criterios` | HU-24 | Tests c2–c7 (aprobar y rechazar) | IchiSieben | VALTOm07: APPROVED (16:39:58Z) | VALTOm07 | 19-nov 16:40:06Z | 8 (+101 −0) |
| [#93](https://github.com/ClxNode/KuyayPet/pull/93) | `sprint-4/HU-25-criterios` | HU-25 | Aviso “La cuenta ya está inactiva” y tests c5–c7 | IchiSieben | ClxNode: APPROVED (16:40:38Z) | ClxNode | 19-nov 16:40:46Z | 6 (+69 −0) |
| [#94](https://github.com/ClxNode/KuyayPet/pull/94) | `sprint-4/HU-26-criterios` | HU-26 | Tests c1–c2 (ocultar publicación, desactivar cuenta, rechazo a no administrador) | IchiSieben | BeyondNate: APPROVED (16:41:12Z) | BeyondNate | 19-nov 16:41:21Z | 6 (+77 −0) |
| [#95](https://github.com/ClxNode/KuyayPet/pull/95) | `sprint-4/evidencias-automatizadas` | HU-14, 15, 22–26 | Specs de evidencias, capturas y `7.Pruebas/administracion-y-cierre.md`; incluye los commits de los 7 PR anteriores | IchiSieben | ClxNode: APPROVED (16:47:47Z) | ClxNode | 19-nov 16:47:57Z | 93 (+1166 −2) |
| [#99](https://github.com/ClxNode/KuyayPet/pull/99) | `sprint-4/pruebas-seguridad` | — | Pruebas de seguridad SEG-01 a SEG-13 y dos arreglos de control de acceso | IchiSieben | BeyondNate: APPROVED (16:48:22Z) | BeyondNate | 19-nov 16:48:34Z | 4 (+241 −2) |

Notas de la parte (b), con datos de `prs.json`:

- Los 9 PR se fusionaron el 19-nov entre las 16:26:16Z y las 16:48:34Z, con 5 fusionadores distintos: BeyondNate (#88, #90, #94, #99), ClxNode (#93, #95), Dylan200-7 (#89), kevinesty (#91) y VALTOm07 (#92).
- Ocho de los 9 PR tienen una revisión APPROVED, y en cada uno la cuenta que aprobó es la que fusionó. El PR #89 no tiene revisión registrada. Los revisores sugeridos en las descripciones de los PR no siempre coinciden con quien revisó; aquí figura quien lo hizo en GitHub.
- El PR #95 (93 archivos) depende de los 7 PR de código y se fusionó después de ellos (16:47:57Z); el PR #99 se fusionó a las 16:48:34Z.
- Además se fusionaron el 19-nov los PR de documentación [#96](https://github.com/ClxNode/KuyayPet/pull/96), [#97](https://github.com/ClxNode/KuyayPet/pull/97), [#98](https://github.com/ClxNode/KuyayPet/pull/98) y [#100](https://github.com/ClxNode/KuyayPet/pull/100) (autor y fusionador IchiSieben, sin revisión). El #100 contiene [manual de usuario](../../docs/manual-usuario.md), [documentación técnica](../../docs/documentacion-tecnica.md), [despliegue](../../docs/despliegue.md), [pruebas](../../docs/pruebas.md) y [cierre del proyecto](../../docs/cierre-proyecto.md).

## Pruebas

| Qué | Dónde |
|---|---|
| Tests de criterios | `Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-NN.spec.ts` |
| Specs de evidencias | `Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-NN.spec.ts` |
| Plan, resultados y capturas | [7.Pruebas](../7.Pruebas/readme.md) |

## Cómo correr el prototipo

Ver [`Codigo_Repositorio/readme.md`](../../Codigo_Repositorio/readme.md).
