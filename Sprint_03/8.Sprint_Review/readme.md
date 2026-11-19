# 8. Sprint Review — Sprint 3

[← Volver al Sprint 3](../readme.md)

> El equipo no registró un acta de la Sprint Review. Este documento reúne lo que consta en el repositorio y en GitHub al 19-nov-2026; no atribuye frases a nadie. La parte (b) sigue en curso y su revisión se completa al cierre del milestone (27-nov).

**Sprint:** Sprint 3 — Adopción y cierre del producto · **Fechas:** primera actividad el 28-oct-2026; exposición del **12-nov-2026** (parte a); cierre del milestone el 27-nov-2026 · Las horas están en UTC (hora de Lima = UTC−5).

## 8.1. Qué se presentó

- **12-nov-2026, exposición del Sprint 3:** parte (a), adopción (HU-06, 07, 08, 09, 10, 13, 18, 20). No consta en el repositorio qué demostró el equipo en vivo ni en qué orden. Sí constan las demostraciones disponibles como evidencia: un video por HU, grabado el 28-oct con la ejecución automatizada (carpeta de [videos en Drive](https://drive.google.com/open?id=1e3GcYnJlez_F5GLwqA6CveFjX5wRCiQV)): [HU-06](https://drive.google.com/open?id=1WqRmsS3Emf5mn9CCLKnQX2xfXYw7Qy4A) · [HU-07](https://drive.google.com/open?id=1712oyfej3erbcjYo1k3kwqtDNjybcoaE) · [HU-08](https://drive.google.com/open?id=1hS08zMhhe20a46qaFN9gbSyFpWvc2xp0) · [HU-09](https://drive.google.com/open?id=1oYzgblc9_SLRhct4rT490oGIsz32NF3u) · [HU-10](https://drive.google.com/open?id=10JRrdCFC1VQZcIM1hQRTHJo7dpEY2yk_) · [HU-13](https://drive.google.com/open?id=1TXfaPvhJoBgY3ZdJgqgP_7z5qD8N_VBa) · [HU-18](https://drive.google.com/open?id=1jf6vImmfBFys79b14p_MZmbtq1fniL7j) · [HU-20](https://drive.google.com/open?id=1H0Sr8HsibmnwgtQ4xyeJTNFJLTqikD0Q).
- **Parte (b), administración y cierre:** no se presentó el 12-nov. Se completa antes del 27-nov; al 19-nov hay PR abiertos y videos de evidencia grabados (HU-14: [video](https://drive.google.com/open?id=1FayJBwq8ulmZnEfJkE1d-7AnUHE2LpjD), HU-15, HU-22 a HU-26 en la [carpeta de Drive](https://drive.google.com/open?id=1e3GcYnJlez_F5GLwqA6CveFjX5wRCiQV)), pero nada fusionado. Pendiente al 19-nov.

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

**Parte (b), pendiente al 19-nov:**

| Qué | Estado |
|---|---|
| HU-14, 15, 22, 23, 24, 25, 26: tests de criterios y 3 cambios de código (pestaña “Guía”, datos de la mascota en el detalle de la publicación, aviso de cuenta ya inactiva) | PR [#88](https://github.com/ClxNode/KuyayPet/pull/88)–[#94](https://github.com/ClxNode/KuyayPet/pull/94), abiertos |
| Evidencias de la parte (b) | PR [#95](https://github.com/ClxNode/KuyayPet/pull/95), abierto |
| Pruebas de seguridad (SEG-01 a SEG-13) | PR por abrir |
| Manual de usuario, documentación técnica, despliegue, cierre del proyecto | En redacción: [manual](../../docs/manual-usuario.md) · [técnica](../../docs/documentacion-tecnica.md) · [despliegue](../../docs/despliegue.md) · [pruebas](../../docs/pruebas.md) · [cierre](../../docs/cierre-proyecto.md) |

## 8.3. Aplicación

- **Producción:** https://firebrick-cod-910257.hostingersite.com/ — versión `v0.3.1-sprint2`. **No incluye** los cambios de este sprint (las fusiones del 12-nov son posteriores): ni #70, #72 ni #74.
- **Código:** [`Codigo_Repositorio/`](../../Codigo_Repositorio/readme.md) y [6.Repositorio_Codigo](../6.Repositorio_Codigo/readme.md).

## 8.4. Estado del sprint contra el objetivo

| Medida | Valor al 19-nov |
|---|---|
| Puntos comprometidos (propuesta) | 70 (42 parte a + 28 parte b) |
| Puntos terminados (issue cerrado y PR fusionado) | 42 (parte a) |
| Velocity | parcial 42; final pendiente al 27-nov (Sprint 1: 13; Sprint 2: 41) |
| HU con validación del responsable registrada | 0 de 15 |

Burndown y regla de puntos: [readme del sprint](../readme.md#6-métricas).

## 8.5. Feedback recibido

- **Profesor, exposición del Sprint 3 (12-nov-2026):** “faltaban varias cosas en los sprints: historias de usuario incompletas o cortas, análisis faltantes y secciones sin llenar”.
- Otros comentarios: sin feedback registrado.

**Cómo se atiende en este sprint (hechos al 19-nov):**

| Observación | Qué se hizo | Pendiente |
|---|---|---|
| Historias incompletas o cortas | Las 15 HU del sprint tienen en [1.Product_Backlog_Item](../1.Product_Backlog_Item/readme.md) enunciado, todos sus criterios (93 en total), rol, prioridad, puntos propuestos, ruta del prototipo y dependencias. Las issues de GitHub siguen con 2 o 3 criterios | Actualizar las issues |
| Análisis faltantes | Dependencias verificadas contra el código y riesgos en [2.Sprint_Planning](../2.Sprint_Planning/readme.md) | Documentación técnica, pruebas y cierre (parte b) |
| Secciones sin llenar | Los 8 `.md` de `Sprint_03` y `8.Sprint_Review` tienen contenido; las partes que el equipo no escribió están marcadas como reconstruidas | Ampliar la retrospectiva y esta revisión al cierre |

## 8.6. Próximos pasos

Fusionar los PR #88 a #95, abrir y fusionar el PR de pruebas de seguridad, publicar los 5 documentos de `docs/`, desplegar, marcar las casillas “Validado por”, y actualizar el velocity y el burndown al cerrar el milestone.
