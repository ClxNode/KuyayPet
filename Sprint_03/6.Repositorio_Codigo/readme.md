# 6. Repositorio de código — Sprint 3

**Repositorio:** [ClxNode/KuyayPet](https://github.com/ClxNode/KuyayPet) · **Código del prototipo:** [`Codigo_Repositorio/`](../../Codigo_Repositorio/readme.md)

> ✋ Pendiente: enlace al prototipo publicado con el incremento del Sprint 3 (el equipo lo define cuando los PR se fusionen).

## Ramas y Pull Requests del Sprint 3

Todos abiertos contra `main`. A la fecha de este documento **ninguno está fusionado**.

| PR | Rama | HU | Contenido | Estado |
|---|---|---|---|---|
| [#68](https://github.com/ClxNode/KuyayPet/pull/68) | `sprint-3/HU-06-criterios` | HU-06 | Tests de criterios (opciones, "No me gusta", confirmación, siguiente mascota) | Abierto |
| [#69](https://github.com/ClxNode/KuyayPet/pull/69) | `sprint-3/HU-07-criterios` | HU-07 | Tests de criterios (Match visible, información, chat, persistencia, rechazo) | Abierto |
| [#70](https://github.com/ClxNode/KuyayPet/pull/70) | `sprint-3/HU-08-criterios` | HU-08 | Tests de criterios y acción "Finalizar conversación" | Abierto |
| [#71](https://github.com/ClxNode/KuyayPet/pull/71) | `sprint-3/HU-09-criterios` | HU-09 | Tests de criterios del chat grupal de la mascota | Abierto |
| [#72](https://github.com/ClxNode/KuyayPet/pull/72) | `sprint-3/HU-10-criterios` | HU-10 | Tests de criterios c1, c3, c5 y c6; el formulario se reinicia al cambiar de mascota | Abierto |
| [#73](https://github.com/ClxNode/KuyayPet/pull/73) | `sprint-3/HU-13-criterios` | HU-13 | Tests de criterios c2, c4 y c5 (notificación de interés) | Abierto |
| [#74](https://github.com/ClxNode/KuyayPet/pull/74) | `sprint-3/HU-18-criterios` | HU-18 | Insignia de estado actual en el historial y tests de criterios | Abierto |
| [#75](https://github.com/ClxNode/KuyayPet/pull/75) | `sprint-3/HU-20-criterios` | HU-20 | Tests de criterios c1 a c7 (Mis Matches) | Abierto |
| [#76](https://github.com/ClxNode/KuyayPet/pull/76) | `sprint-3/evidencias-automatizadas` | HU-06, 07, 08, 09, 10, 13, 18, 20 | Evidencias automatizadas: captura por criterio y video por HU ([7.Pruebas](../7.Pruebas/readme.md)) | Abierto |

La rama `sprint-3/preparacion` (este documento) sale de `origin/main`.

## Rutas del prototipo para el Sprint 3

| Pantalla | Ruta | HU |
|---|---|---|
| Descubrir | `/descubrir` | HU-06 |
| Mis Matches | `/matches` | HU-07, HU-20 |
| Chat con el responsable | `/chats/:id` (lista en `/chats`) | HU-08 |
| Chat grupal de la mascota | `/mascota/:id` | HU-09 |
| Coordinar adopción | `/coordinar/:petId` | HU-10 |
| Notificaciones | `/notificaciones` | HU-13 |
| Historial de interés | `/historial` | HU-18 |

Fuente: [`src/App.tsx`](../../Codigo_Repositorio/kuyaypet-web/src/App.tsx) y [`src/data/huStatus.ts`](../../Codigo_Repositorio/kuyaypet-web/src/data/huStatus.ts).

## Pruebas

| Qué | Dónde |
|---|---|
| Tests de criterios | `Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-NN.spec.ts` (en los PR #68–#75) |
| Specs de evidencias | `Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-NN.spec.ts` (en el PR #76) |
| Plan, resultados y capturas | [7.Pruebas](../7.Pruebas/readme.md) |

## Cómo correr el prototipo

Ver [`Codigo_Repositorio/readme.md`](../../Codigo_Repositorio/readme.md).
