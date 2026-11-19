# 8. Sprint Review — Sprint 2

[← Índice del Sprint 2](../readme.md)

> Reconstruido a partir del historial de GitHub el 2026-11-19; el equipo puede corregirlo.

## 1. Información general

| Campo | Valor |
|---|---|
| Sprint | Sprint 2 — Mascotas: catálogo |
| Cierre del sprint | 20-nov-2026 (milestone [Sprint 2](https://github.com/ClxNode/KuyayPet/milestone/2)) |
| Fecha y asistentes de la Review | No registrados por el equipo. En GitHub, la tarea [#46](https://github.com/ClxNode/KuyayPet/issues/46) («Preparar la demo del Sprint 2: un responsable publica una mascota y otro usuario la encuentra») se cerró el 12-nov-2026 a las 15:08 (hora de Lima) |
| Sprint Goal (propuesto) | Un responsable publica y edita una mascota con fotos, y un adoptante la encuentra con búsqueda, filtros y cercanía, y la guarda en favoritos |
| Aplicación | https://firebrick-cod-910257.hostingersite.com/ |

## 2. Qué se demostró

Cada HU se demuestra con su ejecución de pruebas, capturas por criterio y un video. No hay un video de la demo conjunta de #46 en el repositorio. Los videos son de la ejecución automatizada del 28-oct-2026 (viewport móvil 390×844), no de una exposición en vivo.

| HU | Qué muestra | Video | Capturas |
|---|---|---|---|
| HU-11 Registrar mascota | Formulario de 3 pasos, alerta de campos obligatorios, aviso «¡Mascota registrada!»; la mascota queda «En revisión» hasta que un administrador la aprueba | [HU-11.mp4](https://drive.google.com/open?id=1X5hKHtWa7i57dCZn2AQmbuLjYDjLJ7_Y) | [HU-11](../7.Pruebas/evidencias/HU-11/) |
| HU-16 Fotos y etiquetas | Fotos (máximo 4), vista previa, rechazo de formato no permitido, etiquetas; foto y etiqueta visibles en el perfil; edición de fotos y etiquetas | [HU-16.mp4](https://drive.google.com/open?id=1QReoI9Af1EnyTJt9StRAZFVa3SW8EMYf) | [HU-16](../7.Pruebas/evidencias/HU-16/) |
| HU-12 Editar información | Formulario prellenado, guardado con aviso, cancelar, nombre vacío, perfil público actualizado; no se edita una mascota ajena | [HU-12.mp4](https://drive.google.com/open?id=1YofEckGlVM9WaueYJpg1RZy2jBHdcVX_) | [HU-12](../7.Pruebas/evidencias/HU-12/) |
| HU-04 Filtros | Especie, sexo, varios filtros, sin coincidencias, limpiar filtros, perfil desde resultados | [HU-04.mp4](https://drive.google.com/open?id=1IAINNZ9lwW3DTfBVuiWuAUj-_iJUhLqp) | [HU-04](../7.Pruebas/evidencias/HU-04/) |
| HU-05 Cercanía | Distrito, radio en km, resultados con distancia, mensaje sin mascotas cercanas | [HU-05.mp4](https://drive.google.com/open?id=1z6kJwMQXLgTfaewwNrzeJDjXkZxaiMsL) | [HU-05](../7.Pruebas/evidencias/HU-05/) |
| HU-17 Favoritos | Agregar, quitar, lista, persistencia tras cerrar sesión, favorito adoptado | [HU-17.mp4](https://drive.google.com/open?id=1oHoT7boVjNjQ9hfIk-SFmaFrxnN3mc0G) | [HU-17](../7.Pruebas/evidencias/HU-17/) |
| HU-19 Marcar como adoptada | Opción, confirmación, estado «Adoptada», sale de las disponibles, solicitud bloqueada | [HU-19.mp4](https://drive.google.com/open?id=172Zik0A35ssFVT-zQDYMOBR0bdzPcMD6) | [HU-19](../7.Pruebas/evidencias/HU-19/) |
| HU-21 Cierre de sesión | Confirmación, redirección, página privada pide credenciales, cierre por inactividad, aviso y reintento si falla | [HU-21.mp4](https://drive.google.com/open?id=1--3qDfrOgcItQb3HPJwBEUX3cjAFtRu_) | [HU-21](../7.Pruebas/evidencias/HU-21/) |

Todos los videos: [carpeta en Drive](https://drive.google.com/open?id=1e3GcYnJlez_F5GLwqA6CveFjX5wRCiQV). Resultados detallados: [7.Pruebas](../7.Pruebas/readme.md).

## 3. Incremento entregado

- Las 8 HU del sprint (HU-04, 05, 11, 12, 16, 17, 19 y 21) con el issue cerrado el 29-oct-2026 (11:51 a 11:52, hora de Lima).
- Puntos propuestos (el equipo no registró puntos): 41, ver [velocity y burndown](../readme.md#6-métricas).
- Código y tests: 17 PR del sprint fusionados el 28-oct y 29-oct ([6.Repositorio_Codigo](../6.Repositorio_Codigo/readme.md)), incluido el prototipo v0.3 (#35).
- Aplicación desplegada en la dirección de arriba, en la versión `v0.3.1-sprint2`.

### Qué no quedó completo

- La validación manual de cada HU por su responsable: no hay casillas marcadas en [7.Pruebas](../7.Pruebas/readme.md).
- Las tareas #37 a #44 siguen abiertas en GitHub, aunque el tablero del equipo las marca Terminado ([5.Tablero](../5.Tablero_Asignacion_Tareas/readme.md#57-verificación-contra-github-reconstruida)).
- HU-11, criterio 6: el texto dice que la mascota queda disponible para adopción; el prototipo la deja «En revisión» hasta que un administrador la aprueba (decisión ADR-05). Se documentó como comportamiento observado.
- HU-19, criterio 6: la parte del historial del adoptante no se verificó en la ejecución de evidencias (sí en Favoritos).
- HU-13 tenía la etiqueta `sprint-2`, pero se entregó en el Sprint 3.

## 4. Feedback recibido

Sin feedback registrado del profesor ni de otros interesados para el Sprint 2.

La observación conocida del profesor, hecha en la exposición del Sprint 3 (12-nov-2026), fue que «faltaban varias cosas en los sprints: historias de usuario incompletas o cortas, análisis faltantes y secciones sin llenar». Este documento y el resto de `Sprint_02/` se completaron a partir de esa observación.

## 5. Ajustes al backlog tras la Review

No hay ajustes registrados por el equipo. Lo pendiente del curso (HU-06 a HU-10, 13, 14, 15, 18, 20 y 22 a 26) está en el Sprint 3.
