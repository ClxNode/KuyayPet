# Sprint 1 — Inicio del recorrido del usuario

[← Volver a la presentación](../readme.md) · [Sprint 2 →](../Sprint_02/readme.md)

> Índice del Sprint 1. Enlaza los documentos que escribió el equipo; no los reemplaza. Donde falta un dato real se marca `✋ Pendiente` para completarlo en la reunión de cierre.

## Índice del Sprint 1

### Artefactos de Scrum

| Artefacto | Documento |
|---|---|
| Product Backlog Item (HU del sprint, criterios, estimación) | [1.Product_Backlog_Item](./1.Product_Backlog_Item/readme.md) |
| Sprint Backlog (tareas, responsables, estados) | [5.Tablero_Asignacion_Tareas](./5.Tablero_Asignacion_Tareas/readme.md) · [GitHub Project — vista *Sprint 1*](https://github.com/users/ClxNode/projects/3) |
| Incremento (código) | [6.Repositorio_Codigo](./6.Repositorio_Codigo/readme.md) · [`Codigo_Repositorio/`](../Codigo_Repositorio/readme.md) (llega a `main` con el PR [#35](https://github.com/ClxNode/KuyayPet/pull/35)) |

### Eventos de Scrum

| Evento | Documento |
|---|---|
| Sprint Planning (15-oct) | [2.Sprint_Planning](./2.Sprint_Planning/readme.md) |
| Daily Scrum (15 y 16-oct) | [3.Daily_Scrum](./3.Daily_Scrum/readme.md) · [enlace a Drive del equipo](./7.Pruebas/DailyScrum.md) *(archivo agregado en `main`)* |
| Sprint Retrospective | [4.Sprint_Retrospective](./4.Sprint_Retrospective/readme.md) |
| Sprint Review | ✋ Pendiente: se realiza en el video de cierre (escena 1 del guion) |

### Documentos de Ingeniería de Software

| Documento | Enlace |
|---|---|
| Catálogo de las 26 HU | [docs/historias-de-usuario.md](../docs/historias-de-usuario.md) |
| Arquitectura y ADR "sin backend en el MVP" | [docs/arquitectura.md](../docs/arquitectura.md) |
| Modelo entidad-relación (derivado del prototipo) | [docs/modelo-datos.md](../docs/modelo-datos.md) |
| Pruebas y evidencias | [7.Pruebas](./7.Pruebas/readme.md) |
| Cómo trabajamos con GitHub | [CONTRIBUTING.md](../CONTRIBUTING.md) |

## 1. Información general

| Campo | Valor |
|---|---|
| Proyecto | KuyayPet — plataforma de adopción de mascotas |
| Sprint | Sprint 1 — Semana 9 |
| Periodo planificado | 15–16 de octubre de 2026 (milestone [Sprint 1](https://github.com/ClxNode/KuyayPet/milestone/1) vence el 30-oct) |
| Equipo | DevBrad, Dylan Quispe, IchiSieben, Joseph-L-Q, kevinesty, Gael Milla y Juan Vidal |

## 2. Sprint Goal

> Permitir que el usuario inicie el recorrido en KuyayPet: registrarse, consultar mascotas disponibles y revisar el perfil de una mascota.

*(Tomado de [1.Product_Backlog_Item](./1.Product_Backlog_Item/readme.md).)*

## 3. Priorización (MoSCoW)

El equipo priorizó con la prioridad del catálogo (Alta / Media / Baja). La equivalencia MoSCoW de esta tabla es una lectura de esa decisión, no una decisión nueva:

| Ítem | Prioridad del catálogo | MoSCoW | Justificación |
|---|---|---|---|
| HU-01 — Registro de usuario | Alta | Must | Sin cuenta no hay recorrido: es la puerta de entrada de los tres roles |
| HU-02 — Visualización de mascotas disponibles | Alta | Must | Es el valor central del producto: ver qué mascotas buscan hogar |
| HU-03 — Ver perfil de una mascota | Alta | Must | Completa la decisión del adoptante; depende de HU-02 |
| HU-11 — Registrar mascota | Media | Won't (este sprint) | Se reemplazó por datos de prueba identificados como tales ([Planning](./2.Sprint_Planning/readme.md#alcance-y-dependencias)) |
| HU-04 a HU-26 (salvo HU-11) | — | Won't (este sprint) | Fuera del compromiso del Sprint 1 |

## 4. Compromisos del sprint

| HU | Issue | Puntos propuestos* | Tareas | Estado de validación | Evidencia |
|---|---|---|---|---|---|
| HU-01 | [#1](https://github.com/ClxNode/KuyayPet/issues/1) | 5 | [#28](https://github.com/ClxNode/KuyayPet/issues/28), [#29](https://github.com/ClxNode/KuyayPet/issues/29) | Pruebas manuales pendientes · ejecución automatizada 28-oct | [7.Pruebas › HU-01](./7.Pruebas/readme.md#hu-01--registro-de-usuario) |
| HU-02 | [#2](https://github.com/ClxNode/KuyayPet/issues/2) | 5 | [#30](https://github.com/ClxNode/KuyayPet/issues/30), [#31](https://github.com/ClxNode/KuyayPet/issues/31), [#33](https://github.com/ClxNode/KuyayPet/issues/33) | Pruebas manuales pendientes · ejecución automatizada 28-oct con 2 incidencias | [7.Pruebas › HU-02](./7.Pruebas/readme.md#hu-02--pruebas-funcionales-visualización-de-mascotas-disponibles) |
| HU-03 | [#3](https://github.com/ClxNode/KuyayPet/issues/3) | 3 | [#32](https://github.com/ClxNode/KuyayPet/issues/32) ✅, [#33](https://github.com/ClxNode/KuyayPet/issues/33) | Criterios 1-2 aprobados (16-oct) · criterio 3 pendiente (#33) | [7.Pruebas › HU-03](./7.Pruebas/readme.md#hu-03--ver-perfil-de-una-mascota) |
| Coordinación | [#27](https://github.com/ClxNode/KuyayPet/issues/27), [#34](https://github.com/ClxNode/KuyayPet/issues/34) | — | — | Abiertas | — |

\* Los puntos son la propuesta inicial del [Product Backlog Item](./1.Product_Backlog_Item/readme.md#priorización-y-estimación) (13 en total), "pendientes de validar en el Sprint Planning". No hay registro de que se hayan acordado.

> **Implementada ≠ terminada.** Las tres HU están implementadas en el prototipo v0.3, pero una HU solo pasa a *Terminado* con la validación de su responsable y la evidencia en `7.Pruebas`.

## 5. Métricas

### Velocity

| Sprint | Puntos comprometidos | Puntos terminados | Velocity |
|---|---|---|---|
| Sprint 1 | ✋ Pendiente (propuesta: 13) | ✋ Pendiente | ✋ Pendiente |

> ✋ Pendiente: al cerrar el sprint, sumar los puntos acordados de las HU que el equipo mueva a *Terminado* en la escena 1 del video.

### Burndown

> ✋ Pendiente: el equipo no registró puntos restantes por día durante el sprint, así que no se puede reconstruir un burndown sin inventarlo. A partir del Sprint 2 se puede llevar desde el Project (campo de puntos por HU).

## 6. Riesgos identificados

Del [Sprint Planning](./2.Sprint_Planning/readme.md#riesgos):

- Acceso de colaboradores con invitación pendiente.
- Disponibilidad de datos de prueba para HU-02 y HU-03.
- Tiempo insuficiente para las tres HU en dos días.

Observado al preparar el cierre (28-oct): el código del prototipo todavía no está en `main` (PR #35 sin fusionar), y la mayoría de las pruebas manuales siguen sin ejecutar.

## 7. Retrospectiva (resumen)

Del [documento de retrospectiva](./4.Sprint_Retrospective/readme.md), marcado por el equipo como propuesta:

- **Salió bien:** HU priorizadas con criterios de aceptación; reparto de responsabilidades.
- **Fue difícil:** accesos a GitHub, dependencia HU-02 → HU-03, estimar el tiempo disponible.
- **Acción de mejora:** confirmar accesos al inicio del sprint y revisar a diario tareas y bloqueos (responsable propuesto: Juan Vidal).

> ✋ Pendiente: validar la retrospectiva con las observaciones reales del equipo.

## 8. Definition of Done

Del [Sprint Planning](./2.Sprint_Planning/readme.md#definition-of-done-propuesta): una HU se marca *Hecho* únicamente cuando sus criterios de aceptación están implementados y probados, el equipo revisó el resultado y existe evidencia verificable.

## 9. Evidencias

| Evidencia | Dónde |
|---|---|
| Capturas HU-03 (tarea #32) | [7.Pruebas/evidencias/](./7.Pruebas/evidencias/) |
| Capturas HU-01 y HU-02 (ejecución automatizada) | [7.Pruebas/evidencias/HU-01](./7.Pruebas/evidencias/HU-01/) · [HU-02](./7.Pruebas/evidencias/HU-02/) |
| Videos por HU (HU-01, 02, 03) | ✋ Pendiente: subir a Drive y pegar enlace |
| Prototipo desplegado | https://firebrick-cod-910257.hostingersite.com/ |
| Video de cierre del sprint | ✋ Pendiente: enlace al video del equipo |

## 10. Carryover al Sprint 2

> ✋ Pendiente: se decide en la escena 1 del video. Toda HU que no tenga su validación completa en `7.Pruebas` pasa al Sprint 2 y se anota aquí con el motivo.
