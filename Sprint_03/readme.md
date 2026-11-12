# Sprint 3 — Adopción: conectar adoptantes con responsables

[← Sprint 2](../Sprint_02/readme.md) · [Volver a la presentación](../readme.md)

> Índice del Sprint 3. Lo que dice **Propuesta** se confirma en la Sprint Planning; lo marcado `✋` lo completa el equipo.

## Índice del Sprint 3

### Artefactos de Scrum

| Artefacto | Documento |
|---|---|
| Product Backlog Item (HU candidatas, criterios) | [1.Product_Backlog_Item](./1.Product_Backlog_Item/readme.md) — *Propuesta* |
| Sprint Backlog (tareas #77–#87) | [5.Tablero_Asignacion_Tareas](./5.Tablero_Asignacion_Tareas/readme.md) · [GitHub Project — vista *Sprint 3*](https://github.com/users/ClxNode/projects/3/views/4) |
| Incremento (código) | [6.Repositorio_Codigo](./6.Repositorio_Codigo/readme.md) — ✋ Pendiente · [`Codigo_Repositorio/`](../Codigo_Repositorio/readme.md) |

### Eventos de Scrum

| Evento | Documento |
|---|---|
| Sprint Planning | [2.Sprint_Planning](./2.Sprint_Planning/readme.md) — *Propuesta, se valida en la planning* |
| Daily Scrum | [3.Daily_Scrum](./3.Daily_Scrum/readme.md) (un bloque por integrante, se edita desde la web) |
| Sprint Review | ✋ Pendiente (27-nov) |
| Sprint Retrospective | [4.Sprint_Retrospective](./4.Sprint_Retrospective/readme.md) — ✋ Pendiente |

### Documentos de Ingeniería de Software

| Documento | Enlace |
|---|---|
| Arquitectura y ADR | [docs/arquitectura.md](../docs/arquitectura.md) |
| Modelo entidad-relación | [docs/modelo-datos.md](../docs/modelo-datos.md) |
| Plan de pruebas y evidencias | [7.Pruebas](./7.Pruebas/readme.md) |
| Cómo trabajamos con GitHub | [CONTRIBUTING.md](../CONTRIBUTING.md) |

## 1. Información general

| Campo | Valor |
|---|---|
| Sprint | Sprint 3 |
| Cierre | 27 de noviembre de 2026 (milestone [Sprint 3](https://github.com/ClxNode/KuyayPet/milestone/3)) |
| Tablero | [GitHub Project](https://github.com/users/ClxNode/projects/3) — vista [*Sprint 3*](https://github.com/users/ClxNode/projects/3/views/4) · vista [*Product Backlog*](https://github.com/users/ClxNode/projects/3/views/5) |
| Equipo | DevBrad, Dylan Quispe, IchiSieben, Joseph-L-Q, kevinesty, Gael Milla y Juan Vidal |
| Video de cierre del Sprint 2 y planning del Sprint 3 | ✋ Pendiente: enlace de Drive |

## 2. Continuidad con el Sprint 2

- El [Sprint 2](../Sprint_02/readme.md) cerró el catálogo: registro, edición y fotos de mascotas, filtros, cercanía y favoritos. El Sprint 3 parte de ahí: con el catálogo disponible, se trabaja el contacto entre adoptantes y responsables.
- Los PR del Sprint 3 (#68–#76) siguen abiertos; ninguno está fusionado a `main` (ver [6.Repositorio_Codigo](./6.Repositorio_Codigo/readme.md)).

> ✋ Pendiente: carryover decidido en la planning (qué HU del Sprint 2 pasan al Sprint 3 y por qué).

## 3. Sprint Goal (propuesto)

> **Adopción: conectar adoptantes con responsables:** un adoptante indica interés en una mascota y solicita adoptarla; el responsable acepta o rechaza; si hay Match se abre el chat; y el adoptante consulta su historial.

## 4. Priorización MoSCoW (propuesta)

| Ítem | MoSCoW | Justificación |
|---|---|---|
| HU-10 Coordinar posible adopción · HU-07 Match · HU-08 Chat con el responsable · HU-13 Notificación de interés | Must | Forman el flujo central del sprint: solicitar adopción → el responsable acepta o rechaza → Match y chat |
| HU-06 Me gusta / No me gusta · HU-20 Mis Matches · HU-18 Historial de interés | Should | Alimentan y ordenan el flujo, pero la demo se sostiene sin ellas |
| HU-09 Chat entre usuarios interesados | Could | Comunicación entre adoptantes; el flujo principal no depende de ella |
| Resto del backlog | Won't (este sprint) | Sprint 4 y posteriores |

Detalle y estado real en el prototipo: [2.Sprint_Planning](./2.Sprint_Planning/readme.md#hu-candidatas-y-priorización-moscow).

## 5. Compromisos del sprint

| HU | Issue | Puntos | Tarea | Responsable | Estado | Evidencia |
|---|---|---|---|---|---|---|
| HU-06 | [#6](https://github.com/ClxNode/KuyayPet/issues/6) | ✋ | [#78](https://github.com/ClxNode/KuyayPet/issues/78) | ✋ | Pendiente | [7.Pruebas › HU-06](./7.Pruebas/readme.md#hu-06--indicar-interés-en-una-mascota) |
| HU-07 | [#7](https://github.com/ClxNode/KuyayPet/issues/7) | ✋ | [#79](https://github.com/ClxNode/KuyayPet/issues/79) | ✋ | Pendiente | [7.Pruebas › HU-07](./7.Pruebas/readme.md#hu-07--recibir-un-match-por-compatibilidad) |
| HU-08 | [#8](https://github.com/ClxNode/KuyayPet/issues/8) | ✋ | [#80](https://github.com/ClxNode/KuyayPet/issues/80) | ✋ | Pendiente | [7.Pruebas › HU-08](./7.Pruebas/readme.md#hu-08--comunicarse-con-el-responsable) |
| HU-09 | [#9](https://github.com/ClxNode/KuyayPet/issues/9) | ✋ | [#81](https://github.com/ClxNode/KuyayPet/issues/81) | ✋ | Pendiente | [7.Pruebas › HU-09](./7.Pruebas/readme.md#hu-09--chat-entre-usuarios-interesados) |
| HU-10 | [#10](https://github.com/ClxNode/KuyayPet/issues/10) | ✋ | [#82](https://github.com/ClxNode/KuyayPet/issues/82) | ✋ | Pendiente | [7.Pruebas › HU-10](./7.Pruebas/readme.md#hu-10--coordinar-posible-adopción) |
| HU-13 | [#13](https://github.com/ClxNode/KuyayPet/issues/13) | ✋ | [#83](https://github.com/ClxNode/KuyayPet/issues/83) | ✋ | Pendiente | [7.Pruebas › HU-13](./7.Pruebas/readme.md#hu-13--notificación-de-interés-en-mascota) |
| HU-18 | [#18](https://github.com/ClxNode/KuyayPet/issues/18) | ✋ | [#84](https://github.com/ClxNode/KuyayPet/issues/84) | ✋ | Pendiente | [7.Pruebas › HU-18](./7.Pruebas/readme.md#hu-18--historial-de-mascotas-de-interés) |
| HU-20 | [#20](https://github.com/ClxNode/KuyayPet/issues/20) | ✋ | [#85](https://github.com/ClxNode/KuyayPet/issues/85) | ✋ | Pendiente | [7.Pruebas › HU-20](./7.Pruebas/readme.md#hu-20--visualización-de-compatibilidades) |

> ✋ Pendiente: borrar de esta tabla las HU que el equipo no comprometa en la planning.

## 6. Métricas

### Velocity

| Sprint | Puntos comprometidos | Puntos terminados | Velocity |
|---|---|---|---|
| Sprint 1 | ✋ | ✋ | ✋ |
| Sprint 2 | ✋ | ✋ | ✋ |
| Sprint 3 | ✋ | ✋ | ✋ |

### Burndown

> ✋ Pendiente: registrar cada semana los puntos restantes (suma de las HU comprometidas que no están en *Terminado*).

| Fecha | Puntos restantes |
|---|---|
| Inicio del sprint | ✋ |
| ✋ | ✋ |
| 27-nov (cierre) | ✋ |

## 7. Riesgos

Ver [2.Sprint_Planning › Riesgos](./2.Sprint_Planning/readme.md#riesgos). Los principales: la validación manual de las HU sigue pendiente, y el chat y las respuestas del responsable son **simulados** en el prototipo (los datos viven en el navegador).

## 8. Retrospectiva (resumen)

> ✋ Pendiente: al cerrar el sprint.

## 9. Definition of Done

Una HU se marca *Terminado* solo cuando sus criterios de aceptación están implementados y probados, su responsable la validó, la evidencia está en `Sprint_03/7.Pruebas/evidencias/HU-NN/` y el equipo revisó el resultado.

## 10. Evidencias

| Evidencia | Dónde |
|---|---|
| Capturas por HU (55 criterios, ejecución automatizada del 28-oct) | [7.Pruebas/evidencias/](./7.Pruebas/evidencias/) · [plan y resultados](./7.Pruebas/readme.md) |
| Demo "solicitar adopción → el responsable responde → Match y chat → historial" | ✋ Pendiente: enlace al video (tarea [#87](https://github.com/ClxNode/KuyayPet/issues/87)) |
