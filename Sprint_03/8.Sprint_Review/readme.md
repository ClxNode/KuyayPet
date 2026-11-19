# 8. Sprint Review — Sprint 3

[← Volver al Sprint 3](../readme.md)

> El equipo no registró un acta de la Sprint Review. Este documento reúne lo que consta en el repositorio y en GitHub al 19-nov-2026; no atribuye frases a nadie. La parte (b) se fusionó el 19-nov; el milestone vence el 27-nov.

**Sprint:** Sprint 3 — Adopción y cierre del producto · **Fechas:** primera actividad el 28-oct-2026; exposición del **12-nov-2026** (parte a); cierre del milestone el 27-nov-2026 · Las horas están en UTC (hora de Lima = UTC−5).

## 8.1. Qué se presentó

- **12-nov-2026, exposición del Sprint 3:** parte (a), adopción (HU-06, 07, 08, 09, 10, 13, 18, 20). No consta en el repositorio qué demostró el equipo en vivo ni en qué orden. Sí constan las demostraciones disponibles como evidencia: un video por HU, grabado el 28-oct con la ejecución automatizada (carpeta de [videos en Drive](https://drive.google.com/open?id=1e3GcYnJlez_F5GLwqA6CveFjX5wRCiQV)): [HU-06](https://drive.google.com/open?id=1WqRmsS3Emf5mn9CCLKnQX2xfXYw7Qy4A) · [HU-07](https://drive.google.com/open?id=1712oyfej3erbcjYo1k3kwqtDNjybcoaE) · [HU-08](https://drive.google.com/open?id=1hS08zMhhe20a46qaFN9gbSyFpWvc2xp0) · [HU-09](https://drive.google.com/open?id=1oYzgblc9_SLRhct4rT490oGIsz32NF3u) · [HU-10](https://drive.google.com/open?id=10JRrdCFC1VQZcIM1hQRTHJo7dpEY2yk_) · [HU-13](https://drive.google.com/open?id=1TXfaPvhJoBgY3ZdJgqgP_7z5qD8N_VBa) · [HU-18](https://drive.google.com/open?id=1jf6vImmfBFys79b14p_MZmbtq1fniL7j) · [HU-20](https://drive.google.com/open?id=1H0Sr8HsibmnwgtQ4xyeJTNFJLTqikD0Q).
- **Parte (b), administración y cierre:** no se presentó el 12-nov. El 19-nov el equipo revisó y fusionó sus PR (16:26Z a 16:48Z) y hay videos de evidencia grabados (HU-14: [video](https://drive.google.com/open?id=1FayJBwq8ulmZnEfJkE1d-7AnUHE2LpjD), HU-15, HU-22 a HU-26 en la [carpeta de Drive](https://drive.google.com/open?id=1e3GcYnJlez_F5GLwqA6CveFjX5wRCiQV)). No consta en el repositorio una presentación de esta parte.

## 8.2. Incremento entregado

**Parte (a), en `main` desde el 12-nov (16:48Z a 17:10Z):**

| Qué | Dónde |
|---|---|
| Tests de criterios de las 8 HU (55 criterios) | `Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-06 … HU-20.spec.ts` (PR [#68](https://github.com/ClxNode/KuyayPet/pull/68)–[#75](https://github.com/ClxNode/KuyayPet/pull/75)) |
| Acción “Finalizar conversación” (HU-08) | PR [#70](https://github.com/ClxNode/KuyayPet/pull/70) |
| Reinicio del formulario de coordinar al cambiar de mascota (HU-10) | PR [#72](https://github.com/ClxNode/KuyayPet/pull/72) |
| Insignia de estado actual en el historial (HU-18) | PR [#74](https://github.com/ClxNode/KuyayPet/pull/74) |
| Evidencias: 55 capturas por criterio (más 3 extra) y 8 videos; 8 de 8 specs pasaron en la ejecución del 28-oct | [7.Pruebas](../7.Pruebas/readme.md) · PR [#76](https://github.com/ClxNode/KuyayPet/pull/76) |

Las pantallas de las 8 HU ya estaban en `main` desde el 16-oct (prototipo v0.3); el sprint las verificó contra sus criterios. Dos brechas quedaron documentadas: HU-07 criterio 5 (la entrada del Match muestra foto y nombre, no especie, edad ni ubicación) y HU-13 criterio 1 (notifica solo en la plataforma, sin correo). HU-08 criterios 4 y 7 y HU-09 criterio 2 son simulados o dependen de pantalla dividida.

**Parte (b), en `main` desde el 19-nov (16:26Z a 16:58Z):**

| Qué | Estado |
|---|---|
| HU-14, 15, 22, 23, 24, 25, 26: tests de criterios y 3 cambios de código (pestaña “Guía”, datos de la mascota en el detalle de la publicación, aviso de cuenta ya inactiva) | PR [#88](https://github.com/ClxNode/KuyayPet/pull/88)–[#94](https://github.com/ClxNode/KuyayPet/pull/94), fusionados el 19-nov (16:26Z a 16:41Z) |
| Evidencias de la parte (b) | PR [#95](https://github.com/ClxNode/KuyayPet/pull/95), fusionado el 19-nov (16:47:57Z) |
| Pruebas de seguridad (SEG-01 a SEG-13) | PR [#99](https://github.com/ClxNode/KuyayPet/pull/99), fusionado el 19-nov (16:48:34Z) |
| Manual de usuario, documentación técnica, despliegue, cierre del proyecto | PR [#100](https://github.com/ClxNode/KuyayPet/pull/100), fusionado el 19-nov (16:58:56Z): [manual](../../docs/manual-usuario.md) · [técnica](../../docs/documentacion-tecnica.md) · [despliegue](../../docs/despliegue.md) · [pruebas](../../docs/pruebas.md) · [cierre](../../docs/cierre-proyecto.md) |

## 8.3. Aplicación

- **Producción:** https://firebrick-cod-910257.hostingersite.com/ — en la fecha de la revisión (12-nov) estaba `v0.3.1-sprint2`, que **no incluía** los cambios de este sprint (ni #70, #72 ni #74). Desde el 19-nov-2026 está `v1.0.0`, que sí los incluye.
- **Código:** [`Codigo_Repositorio/`](../../Codigo_Repositorio/readme.md) y [6.Repositorio_Codigo](../6.Repositorio_Codigo/readme.md).

## 8.4. Estado del sprint contra el objetivo

| Medida | Valor al 19-nov |
|---|---|
| Puntos comprometidos (propuesta) | 70 (42 parte a + 28 parte b) |
| Puntos terminados (issue cerrado y PR fusionado) | 70 (42 parte a + 28 parte b) |
| Velocity | 70 de 70 puntos propuestos (Sprint 1: 13; Sprint 2: 41) |
| HU con validación del responsable registrada | 0 de 15 |

Burndown y regla de puntos: [readme del sprint](../readme.md#6-métricas).

## 8.5. Feedback recibido

- **Profesor, exposición del Sprint 3 (12-nov-2026):** “faltaban varias cosas en los sprints: historias de usuario incompletas o cortas, análisis faltantes y secciones sin llenar”.
- Otros comentarios: sin feedback registrado.

**Cómo se atiende en este sprint (hechos al 19-nov):**

| Observación | Qué se hizo | Pendiente |
|---|---|---|
| Historias incompletas o cortas | Las 15 HU del sprint tienen en [1.Product_Backlog_Item](../1.Product_Backlog_Item/readme.md) enunciado, todos sus criterios (93 en total), rol, prioridad, puntos propuestos, ruta del prototipo y dependencias. Las issues de GitHub se completaron el 19-nov con el mismo enunciado y criterios | — |
| Análisis faltantes | Dependencias verificadas contra el código y riesgos en [2.Sprint_Planning](../2.Sprint_Planning/readme.md) | Documentación técnica, pruebas y cierre (parte b) |
| Secciones sin llenar | Los 8 `.md` de `Sprint_03` y `8.Sprint_Review` tienen contenido; las partes que el equipo no escribió están marcadas como reconstruidas | Ampliar la retrospectiva y esta revisión al cierre |

## 8.6. Próximos pasos

Los PR #88 a #95, #99 y #100 ya están fusionados y producción está en `v1.0.0`. Queda marcar las casillas “Validado por” de [7.Pruebas](../7.Pruebas/readme.md) antes del cierre del milestone (27-nov).

## Videos sobre producción v1.0.0

Las 26 HU grabadas contra producción el 19-nov-2026: [carpeta en Drive](https://drive.google.com/open?id=1DwZg8msfjz7JD_FwBBthTni8OjZ835dd). Tabla por HU en [docs/pruebas.md](../../docs/pruebas.md#videos-de-las-26-hu-contra-producción-v100-19-nov-2026).
