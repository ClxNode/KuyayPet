# 4. Sprint Retrospective — Sprint 3

> Reconstruido a partir del historial de GitHub el 2026-11-19; el equipo puede corregirlo.

**Proyecto:** KuyayPet
**Sprint:** Sprint 3 — Adopción y cierre del producto
**Fecha de la reconstrucción:** 19 de noviembre de 2026

> El equipo no escribió esta retrospectiva ni hay registro de una reunión. Todo lo de abajo son **hechos verificables en GitHub**; no se atribuyen opiniones ni sentimientos a nadie. Las acciones son **propuestas** para que el equipo las confirme o las cambie. Parte (a): sprint cerrado en GitHub el 12-nov. Parte (b): **pendiente al 19-nov**; se completa antes de que cierre el milestone (27-nov), y esta retrospectiva se amplía entonces. Las horas están en UTC (hora de Lima = UTC−5).

## 4.1. Bien

- **Pruebas por criterio de la parte (a).** Las 8 HU tienen un test por criterio (`tests/criterios`) y una ejecución automatizada del 28-oct: 8 de 8 specs pasaron y los 55 criterios tienen captura, más un video por HU ([7.Pruebas](../7.Pruebas/readme.md)).
- **Correcciones de código al cotejar criterios.** Los PR [#70](https://github.com/ClxNode/KuyayPet/pull/70) (acción “Finalizar conversación”), [#72](https://github.com/ClxNode/KuyayPet/pull/72) (el formulario de coordinar se reinicia al cambiar de mascota) y [#74](https://github.com/ClxNode/KuyayPet/pull/74) (insignia de estado actual en el historial) incluyen cambios de código además de tests.
- **Integración de la parte (a).** Los 9 PR ([#68](https://github.com/ClxNode/KuyayPet/pull/68)–[#76](https://github.com/ClxNode/KuyayPet/pull/76)) están fusionados en `main`, por 4 cuentas distintas (ClxNode, kevinesty, VALTOm07, Joseph-L-Q).
- **Integración de la parte (b).** El 19-nov el equipo revisó y fusionó los 9 PR de la parte (b) entre las 16:26 y las 16:48 UTC: [#88](https://github.com/ClxNode/KuyayPet/pull/88) a [#95](https://github.com/ClxNode/KuyayPet/pull/95) y [#99](https://github.com/ClxNode/KuyayPet/pull/99), por 5 cuentas distintas (BeyondNate, Dylan200-7, kevinesty, VALTOm07, ClxNode). Con ello `main` quedó con el mismo `src/` y `tests/` que producción `v1.0.0`.
- **Milestone.** Al 19-nov los 11 issues de tarea y los 15 de HU del milestone Sprint 3 figuran cerrados.

## 4.2. Mejorar

- **Fusiones el día de la exposición.** Los 9 PR de la parte (a) se fusionaron el 12-nov, el mismo día de la exposición, entre las 16:48Z y las 17:00Z (11:48 a 12:00 en Lima), más [#67](https://github.com/ClxNode/KuyayPet/pull/67) a las 17:10Z. Las ramas con el trabajo existían desde el 28-oct (commits de 17:21Z a 18:50Z); los PR se abrieron el 12-nov a las 16:17Z. No hay en los datos la hora de la exposición.
- **Cierre de issues por cambio de estado en el tablero.** Cada cierre va precedido (≤2 s) de un cambio de estado en el Project hecho por la misma cuenta.
  - 29-oct: 9 issues en 25 segundos (16:51:43Z a 16:52:08Z), entre ellos #13 de este sprint, cuyo PR se fusionó 14 días después.
  - 12-nov: las 11 tareas #77–#87 en 13 segundos (19:35:21Z a 19:35:33Z); #6 y #7 a las 20:05Z y 20:07Z; #8, #9 y #10 a las 20:11Z; y #14, #15, #18, #20 y #22–#26 en 8 segundos (23:55:36Z a 23:55:44Z).
  - Los 7 issues de la parte (b) se cerraron el 12-nov; sus PR se abrieron el 19-nov y se fusionaron ese mismo día.
- **Responsables.** Solo HU-06 y HU-07 (ClxNode, asignadas el 12-nov 16:44Z) y HU-13 (IchiSieben, asignada el 29-oct 16:55Z, después de cerrarse) tienen asignado; las otras 5 HU de la parte (a) y las 7 de la parte (b) no. De las 11 tareas, solo #78 y #79 tienen asignado, desde las 20:04Z del 12-nov, después de cerrarse (19:35Z).
- **Revisión de los PR.** [#74](https://github.com/ClxNode/KuyayPet/pull/74), [#75](https://github.com/ClxNode/KuyayPet/pull/75) y [#76](https://github.com/ClxNode/KuyayPet/pull/76) no tienen revisiones; [#72](https://github.com/ClxNode/KuyayPet/pull/72) y [#73](https://github.com/ClxNode/KuyayPet/pull/73) solo tienen un comentario; en los 4 PR con aprobación, quien aprobó fue quien fusionó. En la parte (b), 8 de los 9 PR tienen una aprobación de la misma cuenta que los fusionó y [#89](https://github.com/ClxNode/KuyayPet/pull/89) no tiene revisión. Todos los PR del sprint tienen el mismo autor (IchiSieben).
- **PR fusionados sin commit propio.** [#74](https://github.com/ClxNode/KuyayPet/pull/74) y [#75](https://github.com/ClxNode/KuyayPet/pull/75) figuran fusionados, pero su contenido entró con [#76](https://github.com/ClxNode/KuyayPet/pull/76) (`15fddb7`, 3 segundos antes).
- **Conflicto en la fusión del PR #65 (29-oct, cierre del Sprint 2).** El 29-oct 05:13Z se fusionó `main` dentro de la rama del PR [#65](https://github.com/ClxNode/KuyayPet/pull/65) (commit `9ac0a87`, Joseph-L-Q), con dos aprobaciones del mismo usuario a las 05:11Z y 05:14Z, y el PR se fusionó a las 05:14Z. Al reproducir esa fusión con git (`git merge-tree`) sale **sin conflictos**; el registro de GitHub no muestra un conflicto, solo la fusión de `main` en la rama.
- **Carpeta `Sprint_03` vacía.** Cuando se fusionaron los PR del 12-nov, 7 de sus 8 `.md` seguían vacíos (1 a 5 bytes); `7.Pruebas/readme.md` llegó con [#76](https://github.com/ClxNode/KuyayPet/pull/76) a las 17:00Z. Con el último commit de `main` de ese día (`8973b20`, 17:10Z) los 7 seguían vacíos.
- **Etiqueta de sprint.** HU-13 tiene la etiqueta `sprint-2` (puesta por kevinesty el 29-oct 16:45Z) y se entregó en este sprint.
- **Calendario.** La parte (b) se abrió a PR el 19-nov, 7 días después de la exposición y 8 antes del cierre del milestone; se fusionó ese mismo día.

## 4.3. Acciones (propuestas, a confirmar por el equipo)

| Acción | Responsable | Plazo |
|---|---|---|
| Asignar responsable en el issue de cada HU y tarea al planificar, antes de empezar | por asignar | Sprint 3, parte (b) |
| Cerrar el issue de una HU solo después de fusionar su PR y de que su responsable marque “Validado por” en 7.Pruebas | por asignar | Antes del 27-nov |
| Que el revisor de cada PR sea una cuenta distinta del autor y del que fusiona | por asignar | Parte (b) |
| Llenar cada sección de `Sprint_03` mientras se trabaja, no al cierre; revisar que no queden archivos vacíos antes de la exposición | por asignar | Antes del 27-nov |
| Fusionar los PR antes del día de la exposición | por asignar | Próximas entregas |
| Corregir la etiqueta de sprint de HU-13 | por asignar | Antes del 27-nov |
| Completar la parte (b): PR #88–#95 y #99 (pruebas de seguridad), manual, documentación técnica, despliegue y cierre; y ampliar esta retrospectiva | por asignar | PR fusionados el 19-nov; queda ampliar esta retrospectiva |

## 4.4. Resultado de la parte (b) al 19-nov

Fusiones y revisiones: ver 4.1 y [6.Repositorio_Codigo](../6.Repositorio_Codigo/readme.md). Pruebas de seguridad: PR #99 fusionado; resultado en [pruebas](../../docs/pruebas.md). Despliegue: [despliegue](../../docs/despliegue.md). No se redactan opiniones del equipo sobre el resultado.
