# 6. Repositorio de código — Sprint 2

https://firebrick-cod-910257.hostingersite.com/#/login
codigo en el enlace

> Los dos renglones de arriba los escribió el equipo (commit del 29-oct). El resto se reconstruyó el 2026-11-19 a partir del historial de GitHub; el equipo puede corregirlo.

## 1. Repositorio e incremento

| Campo | Valor |
|---|---|
| Repositorio | [ClxNode/KuyayPet](https://github.com/ClxNode/KuyayPet), rama `main` |
| Código de la aplicación | [`Codigo_Repositorio/kuyaypet-web/`](../../Codigo_Repositorio/kuyaypet-web/) (React + Vite + Zustand; los datos viven en el navegador, sin backend: [ADR-K01](../../docs/arquitectura.md#adr-k01--sin-backend-en-el-mvp)) |
| Aplicación desplegada | https://firebrick-cod-910257.hostingersite.com/ (versión `v0.3.1-sprint2`, que no incluye los arreglos del Sprint 3; el repositorio no tiene tags de Git) |
| Trazabilidad HU a pantalla y test | [Codigo_Repositorio/readme.md](../../Codigo_Repositorio/readme.md#trazabilidad-de-las-26-hu) |

## 2. Ramas

Cada HU o tarea tuvo su rama, con el nombre `sprint-2/<HU>-<descripción>` (las del carryover del Sprint 1 usan `sprint-1/…`). La integración previa se hizo en la rama `sprint-2/integracion`, que no se publicó como PR; los PR salieron de las ramas individuales. Las ramas están en la columna «Rama» de las tablas.

## 3. Pull requests

Fechas en hora de Lima (UTC−5). «Revisión» lista las revisiones tal como están en GitHub; en #35, #47, #48, #49, #54 y #66 la revisión se registró después de la fusión. En #64 no hay revisión registrada. Todos los PR de código y tests los abrió IchiSieben; las revisiones y fusiones las hicieron los demás integrantes.

### 3.1. PR del Sprint 2

| PR | HU | Rama | Autor (apertura) | Revisión (usuario, estado, fecha) | Fusionó | Fecha de fusión | Archivos |
|---|---|---|---|---|---|---|---|
| [#35](https://github.com/ClxNode/KuyayPet/pull/35) | Las 26 HU (prototipo v0.3) | `feature/prototipo-v0.3` | IchiSieben (16-oct 14:04) | Joseph-L-Q (APPROVED, 28-oct 23:39) | ClxNode | 28-oct 23:11 | Prototipo completo en `Codigo_Repositorio/kuyaypet-web/` (la API de GitHub lista solo 100 de sus archivos) |
| [#47](https://github.com/ClxNode/KuyayPet/pull/47) | Preparación del Sprint 2 | `sprint-2/preparacion` | IchiSieben (28-oct 10:50) | Joseph-L-Q (APPROVED, 28-oct 23:40) | ClxNode | 28-oct 23:11 | Docs, plantillas de PR y de tarea, `CONTRIBUTING.md`, `docs/arquitectura.md`, `docs/modelo-datos.md`, `Sprint_01/` y `Sprint_02/` (la API lista solo 100 archivos) |
| [#48](https://github.com/ClxNode/KuyayPet/pull/48) | HU-16 | `sprint-2/HU-16-fotos-etiquetas-edicion` | IchiSieben (28-oct 12:01) | ClxNode (APPROVED, 28-oct 23:42) | ClxNode | 28-oct 23:33 | `src/data/petTags.ts`, `src/screens/owner/EditPet.tsx`, `src/screens/owner/NewPet.tsx`, `src/services/media.ts`, `src/services/publications.ts`, `tests/owner.spec.ts` |
| [#49](https://github.com/ClxNode/KuyayPet/pull/49) | HU-12 | `sprint-2/HU-12-test-mascota-ajena` | IchiSieben (28-oct 12:07) | ClxNode (APPROVED, 28-oct 23:43) | ClxNode | 28-oct 23:34 | `tests/owner.spec.ts` |
| [#50](https://github.com/ClxNode/KuyayPet/pull/50) | HU-19 | `sprint-2/HU-19-test-adoptada-fuera-catalogo` | IchiSieben (28-oct 12:18) | BeyondNate (APPROVED, 28-oct 23:46) | BeyondNate | 28-oct 23:46 | `tests/owner.spec.ts` |
| [#51](https://github.com/ClxNode/KuyayPet/pull/51) | HU-05 | `sprint-2/HU-05-mensaje-sin-cercanas` | IchiSieben (28-oct 12:18) | BeyondNate (APPROVED, 28-oct 23:48) | BeyondNate | 28-oct 23:49 | `tests/adopter.spec.ts` |
| [#54](https://github.com/ClxNode/KuyayPet/pull/54) | Configuración (service worker) | `sprint-2/chore-sw-denylist-previews` | IchiSieben (28-oct 13:01) | ClxNode (APPROVED, 28-oct 23:41) | ClxNode | 28-oct 23:11 | `vite.config.ts` |
| [#57](https://github.com/ClxNode/KuyayPet/pull/57) | HU-04 | `sprint-2/HU-04-test-filtros-completo` | IchiSieben (28-oct 13:02) | VALTOm07 (APPROVED, 28-oct 23:57) | VALTOm07 | 28-oct 23:55 | `tests/criterios/HU-04.spec.ts` |
| [#58](https://github.com/ClxNode/KuyayPet/pull/58) | HU-05 | `sprint-2/HU-05-test-distancia-en-tarjeta` | IchiSieben (28-oct 13:02) | VALTOm07 (APPROVED, 29-oct 00:00) | VALTOm07 | 29-oct 00:00 | `tests/criterios/HU-05.spec.ts` |
| [#59](https://github.com/ClxNode/KuyayPet/pull/59) | HU-11 | `sprint-2/HU-11-test-confirmacion` | IchiSieben (28-oct 13:02) | Dylan200-7 (APPROVED, 29-oct 00:03) | Dylan200-7 | 29-oct 00:03 | `tests/criterios/HU-11.spec.ts` |
| [#60](https://github.com/ClxNode/KuyayPet/pull/60) | HU-12 | `sprint-2/HU-12-guardar-muestra-perfil` | IchiSieben (28-oct 13:02) | Dylan200-7 (APPROVED, 29-oct 00:04) | Dylan200-7 | 29-oct 00:04 | `src/screens/owner/EditPet.tsx`, `tests/criterios/HU-12.spec.ts`, `tests/owner.spec.ts` |
| [#61](https://github.com/ClxNode/KuyayPet/pull/61) | HU-16 | `sprint-2/HU-16-test-registro-a-catalogo` | IchiSieben (28-oct 13:03) | Dylan200-7 (APPROVED, 29-oct 00:06) | Dylan200-7 | 29-oct 00:06 | `tests/criterios/HU-16.spec.ts`, `tests/owner.spec.ts` |
| [#62](https://github.com/ClxNode/KuyayPet/pull/62) | HU-17 | `sprint-2/HU-17-test-favoritos` | IchiSieben (28-oct 13:03) | Joseph-L-Q (APPROVED, 29-oct 00:08) | Joseph-L-Q | 29-oct 00:09 | `tests/criterios/HU-17.spec.ts` |
| [#63](https://github.com/ClxNode/KuyayPet/pull/63) | HU-19 | `sprint-2/HU-19-test-estado-adoptada` | IchiSieben (28-oct 13:03) | Joseph-L-Q (APPROVED, 29-oct 00:09) | Joseph-L-Q | 29-oct 00:09 | `tests/criterios/HU-19.spec.ts` |
| [#64](https://github.com/ClxNode/KuyayPet/pull/64) | HU-21 | `sprint-2/HU-21-cierre-sesion-completo` | IchiSieben (28-oct 13:03) | sin revisión registrada | Joseph-L-Q | 29-oct 00:14 | `src/screens/Profile.tsx`, `src/services/auth.ts`, `tests/criterios/HU-21.spec.ts` |
| [#65](https://github.com/ClxNode/KuyayPet/pull/65) | HU-04, 05, 11, 12, 16, 17, 19, 21 (y HU-01 a 03) | `sprint-2/evidencias-automatizadas` | IchiSieben (28-oct 13:35) | Joseph-L-Q (APPROVED, 29-oct 00:11), Joseph-L-Q (APPROVED, 29-oct 00:14) | Joseph-L-Q | 29-oct 00:14 | 87 archivos: 14 de código y tests (`tests/evidencias/*.spec.ts`, `tests/criterios/HU-21.spec.ts`, `Profile.tsx`, `auth.ts`), 61 capturas en `Sprint_02/7.Pruebas/evidencias/`, 11 en `Sprint_01/` y el `readme.md` de `7.Pruebas` |
| [#66](https://github.com/ClxNode/KuyayPet/pull/66) | Configuración (service worker) | `sprint-2/chore-sw-guia` | IchiSieben (28-oct 22:27) | ClxNode (APPROVED, 28-oct 23:42) | ClxNode | 28-oct 23:11 | `vite.config.ts` |

### 3.2. PR del carryover del Sprint 1 (HU-02 y HU-03), fusionados en la ventana del Sprint 2

| PR | HU | Rama | Autor (apertura) | Revisión (usuario, estado, fecha) | Fusionó | Fecha de fusión | Archivos |
|---|---|---|---|---|---|---|---|
| [#52](https://github.com/ClxNode/KuyayPet/pull/52) | HU-02 (Sprint 1) | `sprint-1/HU-02-mensaje-sin-disponibles` | IchiSieben (28-oct 12:18) | BeyondNate (COMMENTED, 28-oct 23:49), BeyondNate (APPROVED, 28-oct 23:57) | BeyondNate | 28-oct 23:49 | `src/screens/Browse.tsx`, `tests/adopter.spec.ts`, `tests/evidencias/HU-02.spec.ts` |
| [#53](https://github.com/ClxNode/KuyayPet/pull/53) | HU-02 (Sprint 1) | `sprint-1/HU-02-escritorio-sin-marco` | IchiSieben (28-oct 12:21) | kevinesty (APPROVED, 28-oct 23:50), kevinesty (APPROVED, 29-oct 00:21) | kevinesty | 28-oct 23:50 | `src/components/ui/index.tsx`, `src/screens/Browse.tsx`, `src/screens/PetProfile.tsx`, `src/shell/AppLayout.tsx`, `src/shell/DeviceFrame.tsx`, `src/shell/PresenterPanel.tsx`, `tests/desktop.spec.ts` |
| [#55](https://github.com/ClxNode/KuyayPet/pull/55) | HU-02 (Sprint 1) | `sprint-1/HU-02-test-edad` | IchiSieben (28-oct 13:02) | kevinesty (APPROVED, 28-oct 23:51) | kevinesty | 28-oct 23:52 | `tests/criterios/HU-02.spec.ts` |
| [#56](https://github.com/ClxNode/KuyayPet/pull/56) | HU-03 (Sprint 1) | `sprint-1/HU-03-test-detalle-completo` | IchiSieben (28-oct 13:02) | kevinesty (APPROVED, 28-oct 23:53), kevinesty (APPROVED, 29-oct 00:42) | kevinesty | 28-oct 23:53 | `tests/criterios/HU-03.spec.ts` |
| [#67](https://github.com/ClxNode/KuyayPet/pull/67) | HU-03 (Sprint 1) | `sprint-1/HU-03-responsive` | kevinesty (29-oct 00:55) | kevinesty (COMMENTED, 29-oct 00:57), VALTOm07 (APPROVED, 29-oct 01:39) | ClxNode | 12-nov 12:10 | 3 imágenes `.jpg` en `Sprint_01/7.Pruebas/evidencias/HU-03/` |

## 4. Archivos por HU

Los archivos salen del commit de cada rama (`git log`): la lista de archivos que entrega la API de GitHub para #48 a #64 es la misma de #35 (100 archivos, truncada), porque esas ramas se abrieron antes de fusionar #35, y no sirve para separar el aporte de cada PR.

| HU | PR | Código | Tests | Evidencias |
|---|---|---|---|---|
| HU-04 | #57, #65 | — | `tests/criterios/HU-04.spec.ts`, `tests/evidencias/HU-04.spec.ts` | [`evidencias/HU-04/`](../7.Pruebas/evidencias/HU-04/) |
| HU-05 | #51, #58, #65 | — | `tests/adopter.spec.ts`, `tests/criterios/HU-05.spec.ts`, `tests/evidencias/HU-05.spec.ts` | [`evidencias/HU-05/`](../7.Pruebas/evidencias/HU-05/) |
| HU-11 | #59, #65 | — | `tests/criterios/HU-11.spec.ts`, `tests/evidencias/HU-11.spec.ts` | [`evidencias/HU-11/`](../7.Pruebas/evidencias/HU-11/) |
| HU-12 | #49, #60, #65 | `src/screens/owner/EditPet.tsx` | `tests/owner.spec.ts`, `tests/criterios/HU-12.spec.ts`, `tests/evidencias/HU-12.spec.ts` | [`evidencias/HU-12/`](../7.Pruebas/evidencias/HU-12/) |
| HU-16 | #48, #61, #65 | `src/data/petTags.ts`, `src/screens/owner/EditPet.tsx`, `src/screens/owner/NewPet.tsx`, `src/services/media.ts`, `src/services/publications.ts` | `tests/owner.spec.ts`, `tests/criterios/HU-16.spec.ts`, `tests/evidencias/HU-16.spec.ts` | [`evidencias/HU-16/`](../7.Pruebas/evidencias/HU-16/) |
| HU-17 | #62, #65 | — | `tests/criterios/HU-17.spec.ts`, `tests/evidencias/HU-17.spec.ts` | [`evidencias/HU-17/`](../7.Pruebas/evidencias/HU-17/) |
| HU-19 | #50, #63, #65 | — | `tests/owner.spec.ts`, `tests/criterios/HU-19.spec.ts`, `tests/evidencias/HU-19.spec.ts` | [`evidencias/HU-19/`](../7.Pruebas/evidencias/HU-19/) |
| HU-21 | #64, #65 | `src/screens/Profile.tsx`, `src/services/auth.ts` | `tests/criterios/HU-21.spec.ts`, `tests/evidencias/HU-21.spec.ts` | [`evidencias/HU-21/`](../7.Pruebas/evidencias/HU-21/) |

Las pantallas de cada HU vienen del prototipo v0.3 (PR #35). Los PR #54 y #66 solo tocan `vite.config.ts` (service worker).

## 5. Resumen de integración

- 17 PR del Sprint 2 y 5 del carryover del Sprint 1, todos fusionados: 21 el 28-oct entre las 23:11 y las 23:57 o el 29-oct entre las 00:00 y las 00:14 (hora de Lima), y #67 el 12-nov a las 12:10.
- Fusionaron: ClxNode (#35, #47, #48, #49, #54, #66, #67), BeyondNate (#50, #51, #52), kevinesty (#53, #55, #56), VALTOm07 (#57, #58), Dylan200-7 (#59, #60, #61) y Joseph-L-Q (#62, #63, #64, #65).
- Suite de pruebas al cierre de la ejecución automatizada del 28-oct: 54 de 54 en verde y 8 de 8 specs de evidencias (según [7.Pruebas](../7.Pruebas/readme.md#ejecución-automatizada-complementa-las-pruebas-manuales)).
