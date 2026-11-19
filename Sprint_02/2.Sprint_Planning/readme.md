# 2. Sprint Planning — Sprint 2

> **Propuesta — se valida en la planning del video.** Este documento lo preparó IchiSieben (con Claude Code) el 28-oct a partir del prototipo y del catálogo. Las HU, la priorización y las tareas son una propuesta: el equipo las confirma, cambia o descarta en la Sprint Planning (escena 5 del guion) y escribe ahí los puntos acordados.

**Sprint:** Sprint 2 · **Cierre:** 29 de noviembre de 2026 (milestone [Sprint 2](https://github.com/ClxNode/KuyayPet/milestone/2))
**Participantes:** DevBrad, Dylan Quispe, IchiSieben, Joseph-L-Q, kevinesty, Gael Milla y Juan Vidal.

## Objetivo propuesto

> **Mascotas — catálogo:** un responsable publica y edita una mascota con fotos, y un adoptante la encuentra con búsqueda, filtros y cercanía, y la guarda en favoritos.

Corresponde a lo que la rúbrica pide para el Sprint 2 (registro y edición de mascotas, catálogo con fotos, búsqueda y filtros, favoritos y ubicación, integración) y a su demo: *un responsable publica y otro usuario la encuentra*.

## HU candidatas y priorización MoSCoW

| HU | Issue | Prioridad del catálogo | MoSCoW propuesto | Justificación | Puntos |
|---|---|---|---|---|---|
| HU-11 — Registrar mascota | [#11](https://github.com/ClxNode/KuyayPet/issues/11) | Media | **Must** | Sin publicación no hay catálogo ni demo ("un responsable publica") | 5 (propuesta) |
| HU-16 — Registro visual y etiquetado | [#16](https://github.com/ClxNode/KuyayPet/issues/16) | Media | **Must** | La rúbrica pide "catálogo con fotos"; las fotos se cargan en el mismo formulario de HU-11 | 5 (propuesta) |
| HU-12 — Editar información textual | [#12](https://github.com/ClxNode/KuyayPet/issues/12) | Alta | **Must** | La rúbrica pide "registro y edición"; prioridad Alta en el catálogo | 3 (propuesta) |
| HU-04 — Filtrar mascotas | [#4](https://github.com/ClxNode/KuyayPet/issues/4) | Alta | **Must** | "Búsqueda y filtros" de la rúbrica; es como el adoptante "encuentra" la mascota en la demo | 8 (propuesta) |
| HU-05 — Búsqueda de mascotas cercanas | [#5](https://github.com/ClxNode/KuyayPet/issues/5) | Media | **Should** | La rúbrica pide "ubicación"; la demo se puede hacer solo con filtros si no alcanza | 5 (propuesta) |
| HU-17 — Guardado de favoritas | [#17](https://github.com/ClxNode/KuyayPet/issues/17) | Media | **Should** | La rúbrica pide "favoritos"; no bloquea el flujo publicar → encontrar | 5 (propuesta) |
| HU-19 — Marcar como adoptada | [#19](https://github.com/ClxNode/KuyayPet/issues/19) | Media | **Could** | Cierra el ciclo de vida de la publicación, pero la rúbrica no la pide en este sprint | 5 (propuesta) |
| HU-21 — Cierre seguro de sesión | [#21](https://github.com/ClxNode/KuyayPet/issues/21) | Alta | No clasificada | No figuraba en la planning propuesta; el issue lleva la etiqueta `sprint-2` y su PR [#64](https://github.com/ClxNode/KuyayPet/pull/64) se abrió el 28-oct | 5 (propuesta) |
| Carryover HU-01, HU-02, HU-03 | [#1](https://github.com/ClxNode/KuyayPet/issues/1), [#2](https://github.com/ClxNode/KuyayPet/issues/2), [#3](https://github.com/ClxNode/KuyayPet/issues/3) | Alta | **Must** (si pasan al Sprint 2) | Eran el compromiso del Sprint 1 y ya están implementadas: lo que falta es la validación de sus responsables. Se confirma en la escena 1 | 13 (propuesta del Sprint 1: 5 + 5 + 3); no cuentan en la velocity del Sprint 2 |
| Resto del backlog (HU-06…HU-10, HU-13…HU-15, HU-18, HU-20…HU-26) | — | — | **Won't (este sprint)** | Corresponden al Sprint 3 de la rúbrica (partes a y b) | — |

> **Puntos.** El equipo no registró puntos. Los de la tabla son una propuesta única para todo el proyecto: Fibonacci según el número de criterios del documento del equipo (≤4: 2 · 5: 3 · 6–7: 5 · ≥8: 8, un escalón más por complejidad técnica extra; HU-05 lleva el escalón por mapa y cálculo de distancia). El Daily del 28-oct menciona un Planning Poker, pero no dejó los puntos acordados. Total de las 7 HU planificadas: 36; con HU-21: 41.

> **Capacidad.** No registrada por el equipo (ni en horas ni en puntos). Equipo de 7 integrantes. El inicio del sprint tampoco está registrado: el primer rastro en GitHub es del 28-oct-2026 (tareas #37 a #46 asignadas al milestone a las 10:43, hora de Lima) y el milestone vence el 20-nov-2026.

> **Fecha de cierre.** El milestone de GitHub y la Retrospective dicen 20-nov-2026. La línea «Cierre: 29 de noviembre» de arriba y la del Daily (28-nov) las escribió el equipo y no coinciden con el milestone.

## Estado real en el prototipo y qué falta para *Terminado*

> Estado al 28-oct, antes de la ejecución automatizada y de los PR #48 a #66. El estado actual está en [7.Pruebas](../7.Pruebas/readme.md).

"Implementada" significa que existe la pantalla y una prueba automática que la recorre (según [`src/data/huStatus.ts`](../../Codigo_Repositorio/kuyaypet-web/src/data/huStatus.ts) y la [tabla de trazabilidad](../../Codigo_Repositorio/readme.md#trazabilidad-de-las-26-hu)). **No** significa terminada.

| HU | Ruta en el prototipo | Test que la ejerce | Qué cubre hoy el test | Qué falta para *Terminado* |
|---|---|---|---|---|
| HU-11 | `/responsable/nueva` | `owner.spec.ts` › HU-11/16 registrar mascota | Formulario de 3 pasos: alerta si faltan datos, publicación con datos completos; la mascota aparece "En revisión" en el panel del responsable | Validación del responsable contra los 2 criterios + evidencia en `7.Pruebas` |
| HU-16 | `/responsable/nueva` | `owner.spec.ts` › HU-11/16 registrar mascota | Rechazo de un archivo que no es imagen, vista previa de la foto y selección de una etiqueta **dentro del formulario** | Comprobar que foto y etiquetas **se ven en el perfil** (el test no lo verifica). Además, la pantalla de edición (`EditPet.tsx`) solo cambia textos: la parte "o editando" de los criterios **no está implementada** en el prototipo. Decidir si se implementa o si se ajusta el criterio + evidencia |
| HU-12 | `/responsable` (editar en `/responsable/editar/:id`) | `owner.spec.ts` › HU-12 | Edición de nombre y descripción de una mascota propia; el panel muestra el nombre nuevo | Probar el criterio 2 (no poder editar una mascota ajena): el código lo impide, pero ningún test lo ejercita + evidencia |
| HU-04 | `/buscar` | `adopter.spec.ts` › HU-04 y HU-05 | Filtro por especie, mensaje sin resultados, limpiar filtros restaura la lista | Validación del responsable + evidencia |
| HU-05 | `/buscar` (vista Lista y Mapa) | `adopter.spec.ts` › HU-04 y HU-05 · `map.spec.ts` › HU-05 mapa | Búsqueda por distrito y radio; marcadores dentro del radio en el mapa | Probar el criterio 2 (mensaje sin mascotas cercanas): el test reduce el radio pero no verifica el mensaje + evidencia |
| HU-17 | `/favoritos` | `adopter.spec.ts` › HU-17 | Agregar desde `/buscar` y quitar desde `/favoritos` | Validación del responsable + evidencia |
| HU-19 | `/responsable` | `owner.spec.ts` › HU-19 | Marcar como adoptada muestra "Adoptada 🎉" | Probar el criterio 2 (que no aparezca en la lista de disponibles) + evidencia. La [ejecución automatizada de HU-02 (P-06)](../../Sprint_01/7.Pruebas/readme.md#hu-02--capturas-por-caso-plan-de-devbrad) ya muestra que las adoptadas de la semilla no se listan |
| HU-01 | `/registro` | `smoke.spec.ts` › HU-01 · `tests/evidencias/HU-01.spec.ts` | Los 4 casos P-HU-01, con capturas del 28-oct | Prueba manual de Joseph-L-Q (#29) y estado en `Sprint_01/7.Pruebas` |
| HU-02 | `/buscar` | `tests/evidencias/HU-02.spec.ts` | P-06 a P-09, con capturas del 28-oct y 2 incidencias | Prueba manual de DevBrad (#31), decisión sobre las incidencias I-01 e I-02 |
| HU-03 | `/mascota/:id` | `verify-hu03.spec.ts` (tarea #32) | Criterios 1 y 2 aprobados el 16-oct | Criterio 3 en computadora (kevinesty, #33) |

## Tareas propuestas

Creadas como issues `tipo:tarea` + `sprint-2`, sin responsable. Estado en GitHub al 19-nov-2026: #45 y #46 cerradas (12-nov, 15:08 hora de Lima); #37 a #44 siguen abiertas y sin responsable, aunque el [tablero del equipo](../5.Tablero_Asignacion_Tareas/readme.md) las marca Terminado y con responsable. Detalle en el [tablero](../5.Tablero_Asignacion_Tareas/readme.md).

| Issue | Tarea | HU |
|---|---|---|
| [#37](https://github.com/ClxNode/KuyayPet/issues/37) | Confirmar alcance, estimaciones y carryover del Sprint 2 | Sprint 2 |
| [#38](https://github.com/ClxNode/KuyayPet/issues/38) | Probar el registro de una mascota con datos completos y con datos faltantes | HU-11 |
| [#39](https://github.com/ClxNode/KuyayPet/issues/39) | Verificar que las fotos y etiquetas se muestren en el perfil de la mascota | HU-16 |
| [#40](https://github.com/ClxNode/KuyayPet/issues/40) | Probar la edición de una mascota propia y el bloqueo de una ajena | HU-12 |
| [#41](https://github.com/ClxNode/KuyayPet/issues/41) | Probar filtros, resultado vacío y limpieza de filtros | HU-04 |
| [#42](https://github.com/ClxNode/KuyayPet/issues/42) | Probar la búsqueda por cercanía y el mensaje sin resultados | HU-05 |
| [#43](https://github.com/ClxNode/KuyayPet/issues/43) | Probar agregar y quitar mascotas de favoritos | HU-17 |
| [#44](https://github.com/ClxNode/KuyayPet/issues/44) | Probar marcar como adoptada y que deje de aparecer como disponible | HU-19 |
| [#45](https://github.com/ClxNode/KuyayPet/issues/45) | Revisar adaptación a computadora y móvil de registro, catálogo y favoritos | HU-11 / HU-04 / HU-17 |
| [#46](https://github.com/ClxNode/KuyayPet/issues/46) | Preparar la demo del Sprint 2: un responsable publica y otro usuario la encuentra | HU-11, HU-24, HU-04, HU-05, HU-03, HU-17 |

Las HU quedaron con la etiqueta `sprint-2` y en el GitHub Project con Sprint = «Sprint 2» (HU-04, 05, 11, 12, 13, 16, 17, 19 y 21); ninguna tiene milestone. HU-13 llevó la etiqueta `sprint-2`, pero se probó y entregó en el Sprint 3 (PR #73).

## Alcance y dependencias

- **HU-11 → HU-24.** En el prototipo, una mascota recién publicada queda "En revisión" y solo aparece a los adoptantes cuando un admin la aprueba (HU-24, decisión ADR-05 del prototipo). La demo necesita ese paso aunque HU-24 se entregue en la parte b del Sprint 3 («Adopción y cierre del producto»).
- **HU-16 depende de HU-11 y HU-12** (las fotos se cargan al registrar o editar).
- **HU-04 y HU-05 dependen de HU-02** (actúan sobre la misma lista).
- **Limitación del prototipo:** los datos viven en el navegador ([ADR-K01](../../docs/arquitectura.md#adr-k01--sin-backend-en-el-mvp)). "Un responsable publica y otro usuario la encuentra" funciona en el mismo navegador (cambiando de cuenta o con la pantalla dividida), no entre dos celulares.

## Riesgos

| Riesgo | Opciones | Resultado |
|---|---|---|
| **El curso tiene 3 sprints y el trabajo restante es grande** (Sprint 3 vence el 27-nov, una semana después del Sprint 2) | Concentrar en el Sprint 3 los bloques pendientes: solicitudes, Match, chat, notificaciones, historial (parte a) y administración, moderación, recuperación de contraseña, pruebas, despliegue y manual (parte b, «Adopción y cierre del producto») | HU-14, 15 y 22 a 26 pasan al Sprint 3, parte b. |
| Validación manual pendiente de las HU del Sprint 1 | Terminar el carryover en la primera semana, antes de abrir HU nuevas | Parcialmente resuelto: issues #1 a #3 cerrados el 28-oct; PR #52, #53, #55, #56 (28-oct) y #67 (12-nov); commits del equipo en `Sprint_01/7.Pruebas` el 29-oct. |
| Pocas personas usan Git en consola | Documentos por la web ([CONTRIBUTING.md](../../CONTRIBUTING.md)); ramas y PR solo para evidencias y código | Se cumplió en parte: el 29-oct seis integrantes distintos de IchiSieben hicieron commits en `main` sobre documentos; los PR de código y tests los abrió IchiSieben. |
| El código del prototipo aún no está en `main` | Fusionar el PR [#35](https://github.com/ClxNode/KuyayPet/pull/35) en la escena 2 | Resuelto: #35 fusionado por ClxNode el 28-oct-2026 a las 23:11 (hora de Lima). |

## Definition of Done

Se mantiene la del Sprint 1: una HU se marca *Terminado* solo cuando sus criterios de aceptación están implementados y probados, el responsable la validó, existe evidencia en `Sprint_02/7.Pruebas` y el equipo revisó el resultado.
