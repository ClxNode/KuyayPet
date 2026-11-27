# Guion de exposición — SC-2026-003 «Finalizar conversación» (2 minutos)

Duración objetivo: 2:00. Lectura en voz alta, ritmo normal. Todo lo que se dice sale de GitHub, del código y de las pruebas del 26/11/2026.

## Enlaces exactos

| Qué | Dónde |
|---|---|
| Producción | https://firebrick-cod-910257.hostingersite.com/ |
| PR #70 | https://github.com/ClxNode/KuyayPet/pull/70 |
| Issue #8 | https://github.com/ClxNode/KuyayPet/issues/8 |
| Expediente en GitHub | https://github.com/ClxNode/KuyayPet/tree/main/docs/gestion-cambios/SC-2026-003 |
| Presentación | https://firebrick-cod-910257.hostingersite.com/cambios/ (se publica esta noche) |
| Video antes/después | https://drive.google.com/open?id=18Ntw9svQuHgiRIzolP-RiwCyiPZbBYA4 |

Comprobado en producción: 2026-11-26 23:35 (Lima), Playwright contra https://firebrick-cod-910257.hostingersite.com/ (v1.0.1): HU-08 6/6 + smoke 3/3; flujo manual automatizado: semilla con el adoptante abriendo el chat, respuesta de despedida a «ya no podré adoptar», «Finalizar conversación» → envío deshabilitado y 5 mensajes conservados

## Bloques

### 0:00 – 0:25 Qué pidió el cambio

«La solicitud SC-2026-003 sale de la historia HU-08, comunicarse con el responsable de la mascota. Esa historia dice que al finalizar la conversación se conserva el historial. Pero en la app no había cómo finalizar una conversación. Pedimos un botón para cerrarla, con confirmación, que conserve los mensajes y bloquee el envío. Es el PR número 70, del 12 de noviembre.»

### 0:25 – 0:45 Antes

Mostrar `capturas/antes-1-chat-sin-opcion-de-cerrar.png` o la columna «Antes» de la comparativa.

«Antes: el encabezado del chat solo tenía "Coordinar". No había forma de cerrar y el envío siempre estaba habilitado.»

### 0:45 – 1:15 Después (demo en vivo)

«Después, lo hacemos en la app.»

Clics exactos en producción:

1. En la pantalla inicial (splash), elegir **Adoptante** (cuenta demo Valeria).
2. Pestaña **Chats**.
3. Abrir **Otto · Patricia Salazar**.
4. En el encabezado, tocar el icono **⊗ «Finalizar conversación»**, junto a «Coordinar».
5. Aparece el diálogo **«¿Finalizar la conversación?»**. Tocar **Finalizar**.
6. Se ve el aviso «Esta conversación fue finalizada. Puedes consultar el historial, pero ya no enviar mensajes.» y el campo de texto y Enviar quedan deshabilitados.
7. Volver con la flecha y **reabrir** el chat: el historial sigue completo.

Frase: «El historial se conserva y ya no se puede enviar. El botón lo ve solo el adoptante y solo en chats directos; el chat grupal no cambia.»

Tip: si producción ya se usó en ese navegador, el chat puede estar finalizado desde antes. Reiniciar con el panel del presentador, o borrar los datos del sitio (en Chrome: «Borrar datos del sitio») y recargar.

### 1:15 – 1:40 Cómo se verificó

«Lo verificamos hoy, 26 de noviembre, ejecutando las pruebas. Vitest: 45 de 45. Playwright, suite completa: 130 de 130, en 5,3 minutos, sin fallos y sin pruebas inestables. Las seis pruebas de HU-08 pasaron: c2, c3, c5, c6, c8 y c9. También pasaron las de seguridad de chat, SEG-13 y SEG-08, y el chat grupal de HU-09.»

### 1:40 – 2:00 Qué falta firmar

«Esto prueba que el cambio funciona. No es una decisión del Comité. El PR tuvo una revisión de código, que no es lo mismo. Falta la decisión del Comité, con Dylan Quispe, Joseph Lombardi y Juan Huapalla, las firmas del Solicitante y del Analista de Impacto, y el cierre del Gestor. Por eso el estado es: implementada y verificada; pendiente de firmas del Comité.»

## Ruta de respaldo sin internet

Si no hay conexión o producción no responde:

1. Abrir la presentación desde archivo: `presentacion-cambios/index.html` (doble clic, sin servidor).
2. Mostrar la comparativa `docs/gestion-cambios/SC-2026-003/capturas/comparativa-antes-despues.png`.
3. Seguir los bloques con las capturas individuales de `capturas/`: `antes-1`, `despues-1`, `despues-2`, `despues-3`.
4. Para la verificación y las firmas pendientes, abrir `docs/gestion-cambios/SC-2026-003/expediente-SC-2026-003.pdf` (FOR-GC-004 sección C y README).
5. El video antes/después, si se descargó: `SC-2026-003-antes-despues.mp4`.

## Si preguntan

- **¿Por qué ya está en producción si no hay decisión?** Porque se integró antes de existir el registro formal. Este expediente lo regulariza y la decisión queda al Comité.
- **¿Y el defecto del chat de ejemplo?** Se corrige en el PR #102, abierto, sin solicitud de cambio, porque no cambia criterios de aceptación (PRO-GC-001, 1.2).
- **¿Cuántas horas costó?** No hay horas registradas en GitHub. El 8 h-persona del procedimiento es una estimación.
