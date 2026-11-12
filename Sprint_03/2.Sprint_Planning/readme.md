# 2. Sprint Planning — Sprint 3

> **Propuesta — se valida en la planning.** Este documento lo preparó IchiSieben (con Claude Code) a partir del prototipo, del catálogo y de las evidencias automatizadas. Las HU, la priorización y las tareas son una propuesta: el equipo las confirma, cambia o descarta en la Sprint Planning y escribe ahí los puntos acordados.

**Sprint:** Sprint 3 · **Cierre:** 27 de noviembre de 2026 (milestone [Sprint 3](https://github.com/ClxNode/KuyayPet/milestone/3))
**Participantes:** DevBrad, Dylan Quispe, IchiSieben, Joseph-L-Q, kevinesty, Gael Milla y Juan Vidal.
**Tablero:** [GitHub Project](https://github.com/users/ClxNode/projects/3) — vista [*Sprint 3*](https://github.com/users/ClxNode/projects/3/views/4) · vista [*Product Backlog*](https://github.com/users/ClxNode/projects/3/views/5).

## Objetivo propuesto

> **Adopción: conectar adoptantes con responsables:** un adoptante indica interés en una mascota y solicita adoptarla; el responsable acepta o rechaza; si hay Match se abre el chat; y el adoptante consulta su historial.

## HU candidatas y priorización MoSCoW

| HU | Issue | Prioridad del catálogo | MoSCoW propuesto | Justificación | Puntos |
|---|---|---|---|---|---|
| HU-10 — Coordinar posible adopción | [#10](https://github.com/ClxNode/KuyayPet/issues/10) | Alta | **Must** | Es la solicitud de adopción: el paso que inicia el flujo central del sprint | ✋ |
| HU-07 — Recibir un Match por compatibilidad | [#7](https://github.com/ClxNode/KuyayPet/issues/7) | Media | **Must** | Resultado de que el responsable acepte: sin Match no hay paso al chat | ✋ |
| HU-08 — Comunicarse con el responsable | [#8](https://github.com/ClxNode/KuyayPet/issues/8) | Alta | **Must** | Es el contacto con el responsable una vez aceptada la solicitud; prioridad Alta en el catálogo | ✋ |
| HU-13 — Notificación de interés en mascota | [#13](https://github.com/ClxNode/KuyayPet/issues/13) | Media | **Must** | Es cómo el responsable se entera de la solicitud para aceptarla o rechazarla | ✋ |
| HU-06 — Indicar interés (Me gusta / No me gusta) | [#6](https://github.com/ClxNode/KuyayPet/issues/6) | Media | **Should** | Genera el interés que alimenta Match y notificación, pero la solicitud de HU-10 también lo inicia | ✋ |
| HU-20 — Visualización de compatibilidades | [#20](https://github.com/ClxNode/KuyayPet/issues/20) | Media | **Should** | Ordena y explica los Matches; el flujo funciona sin esta vista | ✋ |
| HU-18 — Historial de mascotas de interés | [#18](https://github.com/ClxNode/KuyayPet/issues/18) | Baja | **Should** | Cierra el recorrido de la demo ("historial"); el catálogo la marca Baja, por lo que **baja a Could** si el sprint se aprieta | ✋ |
| HU-09 — Chat entre usuarios interesados | [#9](https://github.com/ClxNode/KuyayPet/issues/9) | Baja | **Could** | Comunicación entre adoptantes; el flujo principal no depende de ella | ✋ |
| Resto del backlog (las HU que el equipo no comprometa) | — | — | **Won't (este sprint)** | Corresponden al Sprint 4 y posteriores | — |

> ✋ Pendiente: Planning Poker de las HU elegidas y escribir aquí los puntos acordados.

## Estado real en el prototipo y qué falta para *Terminado*

"Implementada" significa que existe la pantalla y una prueba automática que la recorre (según [`src/data/huStatus.ts`](../../Codigo_Repositorio/kuyaypet-web/src/data/huStatus.ts) y la [tabla de trazabilidad](../../Codigo_Repositorio/readme.md#trazabilidad-de-las-26-hu)). **No** significa terminada.

Los tests de criterios (`tests/criterios/HU-NN.spec.ts`) de estas HU viajan en los PR [#68](https://github.com/ClxNode/KuyayPet/pull/68)–[#75](https://github.com/ClxNode/KuyayPet/pull/75) y los de evidencias (`tests/evidencias/HU-NN.spec.ts`) en el PR [#76](https://github.com/ClxNode/KuyayPet/pull/76); **ninguno está fusionado todavía**.

| HU | Ruta en el prototipo | Tests | Qué cubre hoy | Qué falta para *Terminado* |
|---|---|---|---|---|
| HU-06 | `/descubrir` (Descubrir) | `tests/criterios/HU-06.spec.ts` ([#68](https://github.com/ClxNode/KuyayPet/pull/68)) · `tests/evidencias/HU-06.spec.ts` ([#76](https://github.com/ClxNode/KuyayPet/pull/76)) | Opciones "Me gusta" y "No me gusta", registro de cada una, confirmación visual y paso a la siguiente mascota | Validación del responsable contra los 5 criterios; PR #68 sin fusionar |
| HU-07 | `/matches` (Mis Matches) | `tests/criterios/HU-07.spec.ts` ([#69](https://github.com/ClxNode/KuyayPet/pull/69)) · `tests/evidencias/HU-07.spec.ts` ([#76](https://github.com/ClxNode/KuyayPet/pull/76)) | Match visible en Mis Matches, abre el chat, persiste tras recargar y no se genera si el responsable rechaza | Criterio 5: la entrada del Match muestra foto y nombre, **no** especie, edad ni ubicación. Decidir si se agrega o se ajusta el criterio. Validación del responsable |
| HU-08 | `/chats/:id` (chat con el responsable) | `tests/criterios/HU-08.spec.ts` ([#70](https://github.com/ClxNode/KuyayPet/pull/70)) · `tests/evidencias/HU-08.spec.ts` ([#76](https://github.com/ClxNode/KuyayPet/pull/76)) | Chat con el responsable, orden de los mensajes, historial al reabrir y "Finalizar conversación" (acción que agrega el PR #70) | Criterios 4 y 7 son **simulados**: la respuesta del responsable es una plantilla automática, no una persona. Validación del responsable |
| HU-09 | `/mascota/:id` (chat grupal, ej. `/mascota/p01`) | `tests/criterios/HU-09.spec.ts` ([#71](https://github.com/ClxNode/KuyayPet/pull/71)) · `tests/evidencias/HU-09.spec.ts` ([#76](https://github.com/ClxNode/KuyayPet/pull/76)) | Chat grupal de la mascota: remitente y hora, historial, chat vacío, sin sesión y envío deshabilitado con mensaje vacío | Criterio 2 (entrega a otros usuarios) solo se demuestra en pantalla dividida, con dos sesiones en el mismo navegador. Validación del responsable |
| HU-10 | `/coordinar/:petId` (Coordinar) | `tests/criterios/HU-10.spec.ts` ([#72](https://github.com/ClxNode/KuyayPet/pull/72)) · `tests/evidencias/HU-10.spec.ts` ([#76](https://github.com/ClxNode/KuyayPet/pull/76)) | Solicitud con fecha y hora, recepción por el responsable, estado Pendiente, Aceptada o Rechazada y mensaje de confirmación. El formulario se reinicia al cambiar de mascota (PR #72) | Validación del responsable; PR #72 sin fusionar |
| HU-13 | `/notificaciones` (campana con contador) | `tests/criterios/HU-13.spec.ts` ([#73](https://github.com/ClxNode/KuyayPet/pull/73)) · `tests/evidencias/HU-13.spec.ts` ([#76](https://github.com/ClxNode/KuyayPet/pull/76)) | Campana con contador, lista con adoptante, mascota, fecha y hora, leídas y no leídas, y actualización del contador | Criterio 1 pide notificación "en la plataforma y/o correo": el prototipo solo notifica en la plataforma, sin correo. Validación del responsable |
| HU-18 | `/historial` (Historial de interés) | `tests/criterios/HU-18.spec.ts` ([#74](https://github.com/ClxNode/KuyayPet/pull/74)) · `tests/evidencias/HU-18.spec.ts` ([#76](https://github.com/ClxNode/KuyayPet/pull/76)) | Lista con foto, nombre, fecha y estado; perfil de la mascota disponible; adoptada; retirada; historial vacío. El PR #74 agrega la insignia de estado actual | Validación del responsable; PR #74 sin fusionar |
| HU-20 | `/matches` (Mis Matches) | `tests/criterios/HU-20.spec.ts` ([#75](https://github.com/ClxNode/KuyayPet/pull/75)) · `tests/evidencias/HU-20.spec.ts` ([#76](https://github.com/ClxNode/KuyayPet/pull/76)) | Orden por compatibilidad, tarjeta, criterios de compatibilidad, mascota no disponible y lista vacía | Validación del responsable; PR #75 sin fusionar |

Resultado de la ejecución automatizada (28-oct): 8 de 8 specs pasaron, 55 criterios con captura. Detalle por criterio en [7.Pruebas](../7.Pruebas/readme.md). El resultado manual está `✋ por asignar` en todas las HU.

## Tareas propuestas

Creadas como issues `tipo:tarea` + `sprint-3`, sin responsable. Detalle en el [tablero](../5.Tablero_Asignacion_Tareas/readme.md).

| Issue | Tarea | HU |
|---|---|---|
| [#77](https://github.com/ClxNode/KuyayPet/issues/77) | Confirmar alcance, estimaciones y carryover del Sprint 3 | Sprint 3 |
| [#78](https://github.com/ClxNode/KuyayPet/issues/78) | Probar "Me gusta" y "No me gusta", la confirmación y el paso a la siguiente mascota | HU-06 |
| [#79](https://github.com/ClxNode/KuyayPet/issues/79) | Probar que el Match aparezca en Mis Matches, abra el chat y no se genere si el responsable rechaza | HU-07 |
| [#80](https://github.com/ClxNode/KuyayPet/issues/80) | Probar el chat con el responsable, el orden de los mensajes y "Finalizar conversación" | HU-08 |
| [#81](https://github.com/ClxNode/KuyayPet/issues/81) | Probar el chat grupal de la mascota en pantalla dividida (remitente, hora e historial) | HU-09 |
| [#82](https://github.com/ClxNode/KuyayPet/issues/82) | Probar la solicitud de adopción (fecha y hora) y que el adoptante vea si fue aceptada o rechazada | HU-10 |
| [#83](https://github.com/ClxNode/KuyayPet/issues/83) | Probar la campana de notificaciones, el contador y leídas/no leídas | HU-13 |
| [#84](https://github.com/ClxNode/KuyayPet/issues/84) | Probar el historial de interés con foto, fecha y estado actual | HU-18 |
| [#85](https://github.com/ClxNode/KuyayPet/issues/85) | Probar Mis Matches: orden por compatibilidad, tarjeta, criterios y lista vacía | HU-20 |
| [#86](https://github.com/ClxNode/KuyayPet/issues/86) | Revisar adaptación a computadora y móvil de solicitudes, chat y notificaciones | HU-10 / HU-08 / HU-13 |
| [#87](https://github.com/ClxNode/KuyayPet/issues/87) | Preparar la demo del Sprint 3 | HU-10, HU-07, HU-08, HU-13, HU-18 |

## Pull Requests del Sprint 3

Todos abiertos contra `main`; **ninguno fusionado**.

| PR | HU | Contenido |
|---|---|---|
| [#68](https://github.com/ClxNode/KuyayPet/pull/68) | HU-06 | Tests de criterios |
| [#69](https://github.com/ClxNode/KuyayPet/pull/69) | HU-07 | Tests de criterios |
| [#70](https://github.com/ClxNode/KuyayPet/pull/70) | HU-08 | Tests de criterios y acción "Finalizar conversación" |
| [#71](https://github.com/ClxNode/KuyayPet/pull/71) | HU-09 | Tests de criterios del chat grupal |
| [#72](https://github.com/ClxNode/KuyayPet/pull/72) | HU-10 | Tests de criterios; el formulario se reinicia al cambiar de mascota |
| [#73](https://github.com/ClxNode/KuyayPet/pull/73) | HU-13 | Tests de criterios |
| [#74](https://github.com/ClxNode/KuyayPet/pull/74) | HU-18 | Insignia de estado actual en el historial y tests de criterios |
| [#75](https://github.com/ClxNode/KuyayPet/pull/75) | HU-20 | Tests de criterios |
| [#76](https://github.com/ClxNode/KuyayPet/pull/76) | Las 8 HU | Evidencias automatizadas ([7.Pruebas](../7.Pruebas/readme.md)) |

## Alcance y dependencias

- **HU-06 → HU-13 → HU-07.** El "Me gusta" o la solicitud genera la notificación al responsable (HU-13); cuando el responsable acepta se crea el Match (HU-07), que abre el chat (HU-08).
- **HU-10 depende de HU-13** para que el responsable se entere de la solicitud (supuesto, a confirmar en la planning).
- **HU-20 depende de HU-07** (Mis Matches es la misma sección donde aparece el Match) y de HU-19 del Sprint 2 (una mascota adoptada sale de la lista).
- **HU-18 depende de HU-06** (el historial lista lo que recibió "Me gusta") y de HU-19 (estado "Adoptada").
- **Limitación del prototipo:** los datos viven en el navegador ([ADR-K01](../../docs/arquitectura.md#adr-k01--sin-backend-en-el-mvp)). El chat y la respuesta del responsable son simulados; "entre usuarios" (HU-09) solo se demuestra con dos sesiones en el mismo navegador (pantalla dividida), no entre dos celulares.

## Riesgos

| Riesgo | Opciones | Decisión |
|---|---|---|
| Ninguna HU del Sprint 3 está fusionada a `main`: los PR #68–#76 siguen abiertos | Revisar y fusionar en el orden que acuerde el equipo, evidencias (#76) al final | ✋ |
| La validación manual de las 8 HU está pendiente (columna "Resultado manual" `✋ por asignar`) | Asignar un responsable por HU en el [tablero](../5.Tablero_Asignacion_Tareas/readme.md) en la primera semana | ✋ |
| HU-07 criterio 5 y HU-13 criterio 1 no se cumplen del todo en el prototipo (información básica del Match; notificación por correo) | Implementar, o ajustar el criterio y registrar la decisión | ✋ |
| HU-08 criterios 4 y 7 son simulados (no hay una persona al otro lado) | Declararlo en la demo y en la evidencia | ✋ |
| Pocas personas usan Git en consola | Documentos por la web ([CONTRIBUTING.md](../../CONTRIBUTING.md)); ramas y PR solo para evidencias y código | ✋ |

## Definition of Done

Se mantiene la de los sprints anteriores: una HU se marca *Terminado* solo cuando sus criterios de aceptación están implementados y probados, el responsable la validó, existe evidencia en `Sprint_03/7.Pruebas` y el equipo revisó el resultado.
