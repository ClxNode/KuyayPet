# Sprint 2 — Mascotas: catálogo

[← Sprint 1](../Sprint_01/readme.md) · [Volver a la presentación](../readme.md)

> Índice del Sprint 2. Lo que dice **Propuesta** se confirma en la Sprint Planning del video; lo marcado `✋` lo completa el equipo.

## Índice del Sprint 2

### Artefactos de Scrum

| Artefacto | Documento |
|---|---|
| Product Backlog Item (HU candidatas, criterios) | [1.Product_Backlog_Item](./1.Product_Backlog_Item/readme.md) — *Propuesta* |
| Sprint Backlog (tareas #37–#46) | [5.Tablero_Asignacion_Tareas](./5.Tablero_Asignacion_Tareas/readme.md) · [GitHub Project — vista *Sprint 2*](https://github.com/users/ClxNode/projects/3) |
| Incremento (código) | [6.Repositorio_Codigo](./6.Repositorio_Codigo/readme.md) — ✋ Pendiente · [`Codigo_Repositorio/`](../Codigo_Repositorio/readme.md) |

### Eventos de Scrum

| Evento | Documento |
|---|---|
| Sprint Planning | [2.Sprint_Planning](./2.Sprint_Planning/readme.md) — *Propuesta, se valida en la planning del video* |
| Daily Scrum | [3.Daily_Scrum](./3.Daily_Scrum/readme.md) (un bloque por integrante, se edita desde la web) |
| Sprint Review | ✋ Pendiente (20-nov) |
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
| Sprint | Sprint 2 |
| Cierre | 20 de noviembre de 2026 (milestone [Sprint 2](https://github.com/ClxNode/KuyayPet/milestone/2)) |
| Equipo | DevBrad, Dylan Quispe, IchiSieben, Joseph-L-Q, kevinesty, Gael Milla y Juan Vidal |
| Video de cierre del Sprint 1 y planning del Sprint 2 | ✋ Pendiente: enlace de Drive |

## 2. Continuidad con el Sprint 1

- El prototipo v0.3 entra a `main` con el PR [#35](https://github.com/ClxNode/KuyayPet/pull/35) (escena 2 del video).
- HU-01, HU-02 y HU-03 están implementadas, pero su validación manual no está completa ([estado](../Sprint_01/readme.md#4-compromisos-del-sprint)).

> ✋ Pendiente: carryover decidido en la escena 1 (qué HU pasan al Sprint 2 y por qué).

## 3. Sprint Goal (propuesto)

> **Mascotas — catálogo:** un responsable publica y edita una mascota con fotos, y un adoptante la encuentra con búsqueda, filtros y cercanía, y la guarda en favoritos.

## 4. Priorización MoSCoW (propuesta)

| Ítem | MoSCoW | Justificación |
|---|---|---|
| HU-11 Registrar mascota · HU-16 Fotos y etiquetas · HU-12 Editar · HU-04 Filtros | Must | Núcleo de la rúbrica del Sprint 2 y de su demo |
| HU-05 Cercanía · HU-17 Favoritos | Should | Piden la rúbrica, pero la demo se sostiene sin ellas |
| HU-19 Marcar como adoptada | Could | Cierra el ciclo de la publicación; no lo pide la rúbrica en este sprint |
| Carryover HU-01..03 | Must (si pasan) | Compromiso del Sprint 1 pendiente de validación |
| Resto del backlog | Won't (este sprint) | Sprints 3 y 4 de la rúbrica |

Detalle y estado real en el prototipo: [2.Sprint_Planning](./2.Sprint_Planning/readme.md#hu-candidatas-y-priorización-moscow).

## 5. Compromisos del sprint

| HU | Issue | Puntos | Tarea | Responsable | Estado | Evidencia |
|---|---|---|---|---|---|---|
| HU-11 | [#11](https://github.com/ClxNode/KuyayPet/issues/11) | ✋ | [#38](https://github.com/ClxNode/KuyayPet/issues/38) | ✋ | Pendiente | [7.Pruebas › HU-11](./7.Pruebas/readme.md#hu-11--registrar-mascota) |
| HU-16 | [#16](https://github.com/ClxNode/KuyayPet/issues/16) | ✋ | [#39](https://github.com/ClxNode/KuyayPet/issues/39) | ✋ | Pendiente | [7.Pruebas › HU-16](./7.Pruebas/readme.md#hu-16--registro-visual-y-etiquetado-de-mascotas) |
| HU-12 | [#12](https://github.com/ClxNode/KuyayPet/issues/12) | ✋ | [#40](https://github.com/ClxNode/KuyayPet/issues/40) | ✋ | Pendiente | [7.Pruebas › HU-12](./7.Pruebas/readme.md#hu-12--editar-información-textual-de-una-mascota) |
| HU-04 | [#4](https://github.com/ClxNode/KuyayPet/issues/4) | ✋ | [#41](https://github.com/ClxNode/KuyayPet/issues/41) | ✋ | Pendiente | [7.Pruebas › HU-04](./7.Pruebas/readme.md#hu-04--filtrar-mascotas-según-preferencias) |
| HU-05 | [#5](https://github.com/ClxNode/KuyayPet/issues/5) | ✋ | [#42](https://github.com/ClxNode/KuyayPet/issues/42) | ✋ | Pendiente | [7.Pruebas › HU-05](./7.Pruebas/readme.md#hu-05--búsqueda-de-mascotas-cercanas) |
| HU-17 | [#17](https://github.com/ClxNode/KuyayPet/issues/17) | ✋ | [#43](https://github.com/ClxNode/KuyayPet/issues/43) | ✋ | Pendiente | [7.Pruebas › HU-17](./7.Pruebas/readme.md#hu-17--guardado-de-mascotas-favoritas) |
| HU-19 | [#19](https://github.com/ClxNode/KuyayPet/issues/19) | ✋ | [#44](https://github.com/ClxNode/KuyayPet/issues/44) | ✋ | Pendiente | [7.Pruebas › HU-19](./7.Pruebas/readme.md#hu-19--actualización-de-mascota-como-adoptada) |

> ✋ Pendiente: borrar de esta tabla las HU que el equipo no comprometa en la planning.

## 6. Métricas

### Velocity

| Sprint | Puntos comprometidos | Puntos terminados | Velocity |
|---|---|---|---|
| Sprint 1 | ✋ | ✋ | ✋ |
| Sprint 2 | ✋ | ✋ | ✋ |

### Burndown

> ✋ Pendiente: registrar cada semana los puntos restantes (suma de las HU comprometidas que no están en *Terminado*).

| Fecha | Puntos restantes |
|---|---|
| Inicio del sprint | ✋ |
| ✋ | ✋ |
| 20-nov (cierre) | ✋ |

## 7. Riesgos

Ver [2.Sprint_Planning › Riesgos](./2.Sprint_Planning/readme.md#riesgos). El principal: **4 sprints en la rúbrica y 3 milestones** en el repositorio (crear "Sprint 4" o fusionar con el Sprint 3).

> ✋ Pendiente: decisión dicha en la escena 5 del video.

## 8. Retrospectiva (resumen)

> ✋ Pendiente: al cerrar el sprint.

## 9. Definition of Done

Una HU se marca *Terminado* solo cuando sus criterios de aceptación están implementados y probados, su responsable la validó, la evidencia está en `Sprint_02/7.Pruebas/evidencias/HU-NN/` y el equipo revisó el resultado.

## 10. Evidencias

| Evidencia | Dónde |
|---|---|
| Capturas por HU | [7.Pruebas/evidencias/](./7.Pruebas/evidencias/) |
| Demo "un responsable publica y otro usuario la encuentra" | ✋ Pendiente: enlace al video (tarea [#46](https://github.com/ClxNode/KuyayPet/issues/46)) |
