# 2. Sprint Planning — Sprint 3

> Reconstruido a partir del historial de GitHub el 2026-11-19; el equipo puede corregirlo.

> El repositorio no guarda acta ni video de la Sprint Planning de este sprint: no hay registro de participantes, Planning Poker ni capacidad en horas. Lo que sigue es una **propuesta sin validar**, reconstruida con el catálogo, la rúbrica, las issues y el código. El equipo puede confirmarla o corregirla.

**Sprint:** Sprint 3 — Adopción y cierre del producto · **Milestone:** [Sprint 3](https://github.com/ClxNode/KuyayPet/milestone/3), vence el 27-nov-2026
**Tablero:** [GitHub Project](https://github.com/users/ClxNode/projects/3).

## Calendario real

| Fecha | Qué ocurrió | Fuente |
|---|---|---|
| 28-oct-2026 | Primera actividad: 8 ramas `sprint-3/HU-NN-criterios` con tests de criterios (commits de IchiSieben, 17:21–17:33Z) | git |
| 12-nov-2026 16:17–16:20Z | Se abren los PR [#68](https://github.com/ClxNode/KuyayPet/pull/68)–[#76](https://github.com/ClxNode/KuyayPet/pull/76) y se crean las tareas [#77](https://github.com/ClxNode/KuyayPet/issues/77)–[#87](https://github.com/ClxNode/KuyayPet/issues/87) | GitHub |
| 12-nov-2026 | Exposición: se presenta la **parte (a)** (adopción). La parte (b) queda pendiente | encargo de cierre |
| 12-nov-2026 16:48–17:10Z | Se fusionan los PR de la parte (a) | `prs.json` |
| 19-nov-2026 15:33–15:34Z | Se abren los PR [#88](https://github.com/ClxNode/KuyayPet/pull/88)–[#95](https://github.com/ClxNode/KuyayPet/pull/95) de la parte (b) | GitHub |
| Hasta el 27-nov-2026 | La parte (b) se completa antes de que cierre el milestone | milestone |

Las horas están en UTC (hora de Lima = UTC−5).

## Objetivo propuesto

> **Adopción y cierre del producto.** (a) *Adopción:* un adoptante indica interés en una mascota (“Me gusta”) o propone coordinar su adopción; el responsable recibe la notificación y responde; si acepta el interés se genera el Match y se habilita el chat; el adoptante consulta sus matches y su historial. (b) *Administración y cierre:* el administrador gestiona usuarios, publicaciones y reportes; el usuario consulta la guía de adopción y recupera su contraseña; el producto cierra con pruebas de seguridad, manual de usuario, documentación técnica, despliegue y cierre del proyecto.

## HU del sprint y priorización MoSCoW

| HU | Issue | Prioridad del catálogo | MoSCoW | Justificación | Puntos (propuesta) |
|---|---|---|---|---|---|
| (a) HU-06 — Indicar interés en una mascota | [#6](https://github.com/ClxNode/KuyayPet/issues/6) | Media | **Must** | Crea el interés (`expressInterest`) del que nacen el Match (HU-07) y la notificación al responsable (HU-13): sin “Me gusta” no hay flujo. Prioridad del catálogo: Media. | 3 |
| (a) HU-07 — Recibir un Match por compatibilidad | [#7](https://github.com/ClxNode/KuyayPet/issues/7) | Media | **Must** | La rúbrica pide Match. El Match solo nace cuando el responsable acepta un interés (`answerInterest`), así que depende de HU-06. Prioridad del catálogo: Media. | 8 |
| (a) HU-08 — Comunicarse con el responsable de la mascota | [#8](https://github.com/ClxNode/KuyayPet/issues/8) | Alta | **Must** | Prioridad Alta en el catálogo; la rúbrica pide chat. | 8 |
| (a) HU-09 — Chat entre usuarios interesados en la misma mascota | [#9](https://github.com/ClxNode/KuyayPet/issues/9) | Baja | **Could** | Prioridad Baja; la rúbrica pide chat y ya lo cubre HU-08. El flujo principal no depende de ella. | 5 |
| (a) HU-10 — Coordinar posible adopción | [#10](https://github.com/ClxNode/KuyayPet/issues/10) | Alta | **Must** | Prioridad Alta; es la rúbrica de solicitudes, aceptación/rechazo y estados. | 5 |
| (a) HU-13 — Notificación de interés en mascota | [#13](https://github.com/ClxNode/KuyayPet/issues/13) | Media | **Must** | La rúbrica pide notificaciones; es el aviso al responsable de un “Me gusta” (HU-06) o de una solicitud (HU-10). Prioridad del catálogo: Media. | 3 |
| (a) HU-18 — Historial de mascotas de interés | [#18](https://github.com/ClxNode/KuyayPet/issues/18) | Baja | **Should** | El catálogo la marca Baja, pero la rúbrica nombra “historial”: sube a Should. Se baja a Could si el sprint se aprieta. | 5 |
| (a) HU-20 — Visualización de compatibilidades (Mis Matches) | [#20](https://github.com/ClxNode/KuyayPet/issues/20) | Media | **Should** | Ordena por compatibilidad; el flujo de adopción funciona sin esta vista. Prioridad del catálogo: Media. | 5 |
| (b) HU-14 — Consulta de información sobre adopción | [#14](https://github.com/ClxNode/KuyayPet/issues/14) | Baja | **Could** | Prioridad Baja y fuera de la rúbrica de cierre; informativa e independiente. | 2 |
| (b) HU-15 — Recuperación de contraseña | [#15](https://github.com/ClxNode/KuyayPet/issues/15) | Media | **Must** | La rúbrica de cierre la nombra de forma explícita; el catálogo la marca Media. | 3 |
| (b) HU-22 — Gestionar usuarios | [#22](https://github.com/ClxNode/KuyayPet/issues/22) | Alta | **Must** | Prioridad Alta; es administración y moderación de la rúbrica de cierre. | 5 |
| (b) HU-23 — Revisar publicaciones de mascotas | [#23](https://github.com/ClxNode/KuyayPet/issues/23) | Alta | **Must** | Prioridad Alta; es el paso previo a aprobar o rechazar (HU-24). | 5 |
| (b) HU-24 — Aprobar o rechazar publicaciones de mascotas | [#24](https://github.com/ClxNode/KuyayPet/issues/24) | Alta | **Must** | Prioridad Alta; sin aprobación una mascota registrada (HU-11) no se muestra a los adoptantes (`isAvailable` exige `approval: 'aprobada'`). | 5 |
| (b) HU-25 — Desactivar cuentas de usuarios | [#25](https://github.com/ClxNode/KuyayPet/issues/25) | Media | **Should** | Prioridad Media; rúbrica de administración. La reutiliza HU-26. | 5 |
| (b) HU-26 — Gestionar información inapropiada en la plataforma | [#26](https://github.com/ClxNode/KuyayPet/issues/26) | Media | **Should** | Prioridad Media; moderación de la rúbrica de cierre. | 3 |
| Pruebas de seguridad (`tests/seguridad`, SEG-01 a SEG-13) | PR por abrir | — | **Must** | La rúbrica de cierre pide pruebas funcionales, de integración y de seguridad | — |
| Manual de usuario, documentación técnica, despliegue, cierre del proyecto | — | — | **Must** | Entregables de cierre de la rúbrica: [manual de usuario](../../docs/manual-usuario.md) · [documentación técnica](../../docs/documentacion-tecnica.md) · [despliegue](../../docs/despliegue.md) · [pruebas](../../docs/pruebas.md) · [cierre del proyecto](../../docs/cierre-proyecto.md) | — |
| Resto del backlog | — | — | **Won't** | No queda backlog fuera de las 26 HU: 3 en el Sprint 1, 8 en el Sprint 2 y 15 en este sprint | — |

**Total propuesto:** 70 puntos = 42 (parte a) + 28 (parte b). Regla de puntos: ver [readme](../readme.md#6-métricas).

## Capacidad

No registrada por el equipo (ni horas ni días disponibles por persona). Referencias observables:

- 7 integrantes con acceso al repositorio.
- Velocity propuesta de referencia: 13 (Sprint 1) y 41 (Sprint 2), calculada con los mismos puntos propuestos.
- El compromiso propuesto de este sprint (70) equivale a 1,7 veces el Sprint 2. La parte (a) (42) es comparable al Sprint 2 (41); la parte (b) (28) se suma además de los entregables sin puntos (seguridad, manual, documentación, despliegue, cierre).

## Dependencias

Verificadas contra los criterios de aceptación y el código (`Codigo_Repositorio/kuyaypet-web/src`). “Prerrequisito” = no se puede cumplir el criterio sin la otra HU.

| HU | Depende de | Tipo | Evidencia en el código o en los criterios |
|---|---|---|---|
| HU-06 | HU-02 | Prerrequisito | El deck recorre las mascotas disponibles. |
| HU-07 | **HU-06** | Prerrequisito | `answerInterest` crea el Match a partir de un `Interest`, que crea `expressInterest` al dar “Me gusta” (`services/match.ts`). Aceptar una solicitud de HU-10 (`respondAdoption`) **no** crea Match. |
| HU-07 | HU-13 | Ninguna / blanda | El responsable acepta o rechaza desde su panel (`OwnerHome.tsx`); la notificación solo lo avisa. |
| HU-08 | HU-07 o HU-10 | Prerrequisito | `ensureDirectThread` se llama desde `answerInterest` y desde `requestAdoption`; sin hilo, el perfil muestra “El chat se habilita con el Match” (`PetProfile.tsx`). |
| HU-09 | HU-01, HU-03 | Prerrequisito | Sesión (criterio 6) y perfil de mascota. Independiente del resto. |
| HU-10 | HU-03, HU-19 | Prerrequisito | Se entra desde el perfil; `validateAdoption` exige mascota `disponible`. |
| HU-10 | HU-13 | **Sentido inverso** | HU-10 **emite** la notificación (`notify` en `requestAdoption`); el responsable ve las solicitudes con `useAdoptionsForOwner`, sin necesitar HU-13. |
| HU-13 | **HU-06 y HU-10** | Prerrequisito | El criterio 1 nombra “Me interesa” y “Solicitar adopción” como disparadores. |
| HU-18 | HU-06 | Prerrequisito | `useHistory` lista las interacciones `like` y `superlike` (no `dislike`). |
| HU-18 | HU-19, HU-10, HU-26 | Parcial | “Adoptada” (HU-19); “En proceso” sale de las solicitudes (HU-10); “Retirada” solo la produce HU-26 (`hidePublicationFromReport`). |
| HU-20 | Preferencias (cuestionario), HU-19, HU-24 | Prerrequisito | La lista ordenada usa `computeMatch(user.profile, pet)` y `isAvailable` (`disponible` y `aprobada`). |
| HU-20 | HU-07 | Blanda | Comparten pantalla `/matches`; solo el bloque “Interés mutuo” usa los Matches. |
| HU-23 | HU-11 | Prerrequisito | Revisa las publicaciones que registra el responsable. |
| HU-24 | HU-11, HU-23 | Prerrequisito | HU-11 crea la publicación `pendiente`; sin aprobación (`approvePublication`) no es `disponible` para los adoptantes. |
| HU-25 | HU-22 | Prerrequisito | Lista y detalle de usuarios; `setUserActive`. El inicio de sesión rechaza cuentas inactivas (`auth.ts`). |
| HU-26 | **HU-25** | Prerrequisito | `deactivateUserFromReport` reutiliza `setUserActive`. |
| HU-15, HU-22 | HU-01 | Prerrequisito | Cuentas registradas. |
| HU-14 | — | Ninguna | Informativa. |

## Tareas

Creadas el 12-nov-2026 16:19Z por IchiSieben como issues `tipo:tarea` + `sprint-3`, en el milestone Sprint 3. Detalle y estado real: [5.Tablero_Asignacion_Tareas](../5.Tablero_Asignacion_Tareas/readme.md).

| Issue | Tarea | HU |
|---|---|---|
| [#77](https://github.com/ClxNode/KuyayPet/issues/77) | Confirmar alcance, estimaciones y carryover del Sprint 3 | Sprint 3 |
| [#78](https://github.com/ClxNode/KuyayPet/issues/78) | HU-06: probar "Me gusta" y "No me gusta", la confirmación y el paso a la siguiente mascota | HU-06 |
| [#79](https://github.com/ClxNode/KuyayPet/issues/79) | HU-07: probar que el Match aparezca en Mis Matches, abra el chat y no se genere si el responsable rechaza | HU-07 |
| [#80](https://github.com/ClxNode/KuyayPet/issues/80) | HU-08: probar el chat con el responsable, el orden de los mensajes y "Finalizar conversación" | HU-08 |
| [#81](https://github.com/ClxNode/KuyayPet/issues/81) | HU-09: probar el chat grupal de la mascota en pantalla dividida (remitente, hora e historial) | HU-09 |
| [#82](https://github.com/ClxNode/KuyayPet/issues/82) | HU-10: probar la solicitud de adopción (fecha y hora) y que el adoptante vea si fue aceptada o rechazada | HU-10 |
| [#83](https://github.com/ClxNode/KuyayPet/issues/83) | HU-13: probar la campana de notificaciones, el contador y leídas/no leídas | HU-13 |
| [#84](https://github.com/ClxNode/KuyayPet/issues/84) | HU-18: probar el historial de interés con foto, fecha y estado actual de cada mascota | HU-18 |
| [#85](https://github.com/ClxNode/KuyayPet/issues/85) | HU-20: probar Mis Matches: orden por compatibilidad, tarjeta, criterios y lista vacía | HU-20 |
| [#86](https://github.com/ClxNode/KuyayPet/issues/86) | Revisar adaptación a computadora y móvil de solicitudes, chat y notificaciones | HU-10, HU-08, HU-13 |
| [#87](https://github.com/ClxNode/KuyayPet/issues/87) | Preparar la demo del Sprint 3: solicitar adopción, el responsable acepta o rechaza, Match/chat e historial | HU-10, HU-07, HU-08, HU-13, HU-18 |

Para la parte (b) no se crearon tareas; el trabajo se sigue en los PR #88–#95, y en las secciones de `docs/` y en `tests/seguridad` cuando se abran sus PR.

## Riesgos

| Riesgo | Qué muestran los datos | Estado al 19-nov |
|---|---|---|
| Responsables sin asignar | De las 15 HU, solo HU-06 y HU-07 (ClxNode) y HU-13 (IchiSieben) tienen asignado; de las 11 tareas, 2 (#78 y #79) y solo después de cerrarse | Sin resolver |
| Validación manual pendiente | Las casillas “Validado por” de [7.Pruebas](../7.Pruebas/readme.md) están sin marcar | Pendiente |
| Chat y respuestas simulados | HU-08 criterios 4 y 7 son respuestas de plantilla; HU-09 criterio 2 solo en pantalla dividida | Documentado en 7.Pruebas |
| Criterios con brecha | HU-07 criterio 5 (foto y nombre, no especie, edad ni ubicación); HU-13 criterio 1 (sin correo) | Decisión pendiente: implementar o ajustar el criterio |
| Issues cerrados antes de que su PR se fusione | #13 se cerró el 29-oct y su PR #73 se fusionó el 12-nov; los 7 issues de la parte (b) se cerraron el 12-nov con los PR #88–#94 abiertos el 19-nov | Se explica en el burndown |
| PR sin revisión efectiva | #74, #75 y #76 sin revisión; #72 y #73 solo con comentario | Ver [6.Repositorio_Codigo](../6.Repositorio_Codigo/readme.md) |
| Producción desactualizada | La versión publicada es `v0.3.1-sprint2`, anterior a las fusiones del 12-nov | Pendiente (despliegue, parte b) |
| Plazo de la parte (b) | 8 días entre el 19-nov y el cierre del milestone; faltan además PR de seguridad y de los 5 documentos | En curso |
| Carpeta `Sprint_03` vacía | Siete de sus ocho `.md` estaban vacíos al fusionarse los PR del 12-nov | Resuelto con este cierre |

## Definition of Done

Se mantiene la de los sprints anteriores: una HU se marca *Terminada* solo cuando sus criterios están implementados y probados, el responsable la validó, existe evidencia en `Sprint_03/7.Pruebas` y el equipo revisó el resultado.
