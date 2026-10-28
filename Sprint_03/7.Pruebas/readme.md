

## Ejecución automatizada (complementa las pruebas manuales)

> Esta sección **no reemplaza** las pruebas manuales: cada responsable sigue validando su HU. Aquí solo se registra lo que observó una ejecución automática con Playwright.

- **Fecha de ejecución:** 2026-10-28
- **Rama:** `sprint-3/evidencias-automatizadas` (basada en `sprint-3/integracion`, con las correcciones de criterios de los Sprints 1 a 3)
- **Viewport:** móvil 390×844 (iPhone 13, Chromium); HU-09 usa 1440×920 porque el criterio 2 solo se puede mostrar en pantalla dividida
- **Specs:** `Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-NN.spec.ts`

**Comando** (desde `Codigo_Repositorio/kuyaypet-web`, con el build servido en otra terminal):

```bash
npm run build
npx vite preview --port 4202 --strictPort          # terminal 1
EVIDENCIAS_DIR=../../Sprint_03/7.Pruebas/evidencias \
VIDEOS_DIR=<carpeta fuera del repo> \
BASE_URL=http://localhost:4202/ node scripts/record-hu.mjs 06 07 08 09 10 13 18 20   # terminal 2
```

**Resultado:** 8 de 8 specs pasaron; 55 criterios con una captura cada uno (más 3 capturas extra). Las capturas `antes-`/`despues-` de las correcciones de criterios se conservan. Suite normal (`npx playwright test --workers=1`): 95/95.

Notas: HU-08 criterios 4 y 7 son **Simulado** (respuestas de plantilla, no hay una persona al otro lado). HU-09 criterio 2 (entrega a otros usuarios) solo se demuestra en pantalla dividida, con dos sesiones en el mismo navegador.

### HU-06 — Indicar interés en una mascota

Comando: `... node scripts/record-hu.mjs 06` · Fecha: 2026-10-28 · Duración del video: 13 s

| Criterio | Captura | Resultado automatizado | Resultado manual |
|---|---|---|---|
| 1. Opciones "Me gusta" y "No me gusta" | [P-HU-06-01](evidencias/HU-06/P-HU-06-01-opciones-me-gusta-no-me-gusta.png) | Ambos botones visibles sobre la mascota disponible del deck | ✋ por asignar |
| 2. "Me gusta" registra el interés | [P-HU-06-02](evidencias/HU-06/P-HU-06-02-me-gusta-registrado.png) | Se agrega una interacción `like` de la mascota y un interés para el responsable; aparece "Te gusta <nombre>" | ✋ por asignar |
| 3. "No me gusta" registra el desinterés | [P-HU-06-03](evidencias/HU-06/P-HU-06-03-no-me-gusta-registrado.png) | Se agrega una interacción `dislike` y no se crea interés (el responsable no es notificado) | ✋ por asignar |
| 4. Confirmación visual | [P-HU-06-04](evidencias/HU-06/P-HU-06-04-confirmacion-visual.png) | Aviso con el nombre de la mascota tras elegir | ✋ por asignar |
| 5. Continuar con otra mascota | [P-HU-06-05](evidencias/HU-06/P-HU-06-05-siguiente-mascota.png) | Cambia la tarjeta superior y los botones siguen disponibles | ✋ por asignar |

Video: ✋ Pendiente: subir a Drive (videos-hu/Sprint_03/HU-06.mp4)

### HU-07 — Recibir un Match por compatibilidad

Comando: `... node scripts/record-hu.mjs 07` · Fecha: 2026-10-28 · Duración del video: 15 s

| Criterio | Captura | Resultado automatizado | Resultado manual |
|---|---|---|---|
| 1. Identificar interés compatible | [P-HU-07-01](evidencias/HU-07/P-HU-07-01-interes-compatible-identificado.png) | El responsable ve el interés de la adoptante con su porcentaje de compatibilidad | ✋ por asignar |
| 2. Responsable acepta y se genera el Match | [P-HU-07-02](evidencias/HU-07/P-HU-07-02-responsable-acepta-genera-match.png) | Aceptar por la interfaz del responsable crea exactamente un Match nuevo (Luna) | ✋ por asignar |
| 3. Notificación de Match al adoptante | [P-HU-07-03](evidencias/HU-07/P-HU-07-03-notificacion-de-match.png) | Notificación "¡Es un Match con Luna!" en el centro de notificaciones | ✋ por asignar |
| 4. Ver la mascota en coincidencias | [P-HU-07-04](evidencias/HU-07/P-HU-07-04-match-en-coincidencias.png) | Luna aparece en "Interés mutuo" de Mis Matches | ✋ por asignar |
| 5. Información básica de la mascota | [P-HU-07-05](evidencias/HU-07/P-HU-07-05-info-basica.png) | La entrada del Match muestra foto y nombre (no muestra especie, edad ni ubicación) | ✋ por asignar |
| 6. Seleccionar el Match continúa el contacto | [P-HU-07-06](evidencias/HU-07/P-HU-07-06-match-abre-chat.png) | Abre el chat con el responsable, con el mensaje de Match | ✋ por asignar |
| 7. Match registrado en la cuenta | [P-HU-07-07](evidencias/HU-07/P-HU-07-07-match-registrado-en-la-cuenta.png) | Sigue visible tras recargar y tras cerrar e iniciar sesión de nuevo | ✋ por asignar |
| 8. Sin interés compatible no hay Match | [P-HU-07-08](evidencias/HU-07/P-HU-07-08-rechazo-sin-match.png) | Tras rechazar el interés en Lucas no existe Match de esa mascota; el total de Matches no cambia | ✋ por asignar |

Video: ✋ Pendiente: subir a Drive (videos-hu/Sprint_03/HU-07.mp4)

### HU-08 — Comunicarse con el responsable

Comando: `... node scripts/record-hu.mjs 08` · Fecha: 2026-10-28 · Duración del video: 17 s

| Criterio | Captura | Resultado automatizado | Resultado manual |
|---|---|---|---|
| 1. Poder iniciar una conversación | [P-HU-08-01](evidencias/HU-08/P-HU-08-01-opcion-iniciar-chat.png) | El perfil de la mascota ofrece "Chatear" | ✋ por asignar |
| 2. "Chatear" abre la conversación | [P-HU-08-02](evidencias/HU-08/P-HU-08-02-chat-abierto-con-responsable.png) | Abre el chat con el responsable de la mascota | ✋ por asignar |
| 3. Enviar y ver un mensaje | [P-HU-08-03](evidencias/HU-08/P-HU-08-03-mensaje-enviado.png) | El mensaje se muestra y queda guardado con el remitente correcto | ✋ por asignar |
| 4. Ver el mensaje recibido (**Simulado**) | [P-HU-08-04](evidencias/HU-08/P-HU-08-04-mensaje-recibido-simulado.png) | Se ve el mensaje del responsable; la respuesta es una plantilla automática, no una persona | ✋ por asignar |
| 5. Identificar la mascota del chat | [P-HU-08-05](evidencias/HU-08/P-HU-08-05-chat-identifica-mascota.png) | Cabecera con foto y nombre de la mascota; la lista de chats muestra "Otto · Patricia Salazar" | ✋ por asignar |
| 6. Orden cronológico | [P-HU-08-06](evidencias/HU-08/P-HU-08-06-orden-cronologico.png) | Los mensajes enviados y recibidos aparecen en el mismo orden que sus fechas guardadas | ✋ por asignar |
| 7. Consulta respondida por el responsable (**Simulado**) | [P-HU-08-07](evidencias/HU-08/P-HU-08-07-consulta-y-respuesta-simulada.png) | La consulta recibe respuesta de plantilla; no hay respuesta humana | ✋ por asignar |
| 8. Consultar el historial después | [P-HU-08-08](evidencias/HU-08/P-HU-08-08-historial-reabierto.png) | Tras recargar y reabrir desde la lista, todos los mensajes siguen | ✋ por asignar |
| 9. Finalizar conserva el historial | [P-HU-08-09](evidencias/HU-08/P-HU-08-09-conversacion-finalizada-con-historial.png) | Conversación finalizada con el chat deshabilitado; los mensajes se conservan tras recargar | ✋ por asignar |

Video: ✋ Pendiente: subir a Drive (videos-hu/Sprint_03/HU-08.mp4)

### HU-09 — Chat entre usuarios interesados

Comando: `... node scripts/record-hu.mjs 09` · Fecha: 2026-10-28 · Duración del video: 17 s

| Criterio | Captura | Resultado automatizado | Resultado manual |
|---|---|---|---|
| 1. "Unirme al chat de la mascota" | [P-HU-09-01](evidencias/HU-09/P-HU-09-01-unirme-al-chat-de-la-mascota.png) | Abre el chat grupal vinculado a la mascota ("Grupo de Porotopo") | ✋ por asignar |
| 2. Mensaje en tiempo real a los demás | [P-HU-09-02](evidencias/HU-09/P-HU-09-02-mensaje-llega-a-otro-usuario.png) | Solo en pantalla dividida (dos teléfonos): el mensaje de Valeria aparece en el teléfono de Rosa sin recargar | ✋ por asignar |
| 3. Nombre del remitente y hora | [P-HU-09-03](evidencias/HU-09/P-HU-09-03-remitente-y-hora-en-tiempo-real.png) | El mensaje de otro usuario se muestra con su nombre y hora, en vivo en pantalla dividida (captura extra: [historial](evidencias/HU-09/P-HU-09-03a-remitente-y-hora-historial.png)) | ✋ por asignar |
| 4. Historial en la primera entrada | [P-HU-09-04](evidencias/HU-09/P-HU-09-04-historial-primera-vez.png) | Se muestran los 5 mensajes previos | ✋ por asignar |
| 5. Chat sin mensajes previos | [P-HU-09-05](evidencias/HU-09/P-HU-09-05-chat-vacio-invita-a-conversar.png) | Mensaje "Todavía no hay mensajes. ¡Rompe el hielo!" | ✋ por asignar |
| 6. Sin sesión pide iniciar sesión | [P-HU-09-06](evidencias/HU-09/P-HU-09-06-sin-sesion-pide-login.png) | Redirige al inicio de sesión sin mostrar mensajes | ✋ por asignar |
| 7. Mensaje vacío o con espacios | [P-HU-09-07](evidencias/HU-09/P-HU-09-07-enviar-deshabilitado-mensaje-vacio.png) | "Enviar" deshabilitado con campo vacío y con solo espacios; no se agrega ningún mensaje | ✋ por asignar |

Video: ✋ Pendiente: subir a Drive (videos-hu/Sprint_03/HU-09.mp4)

### HU-10 — Coordinar posible adopción

Comando: `... node scripts/record-hu.mjs 10` · Fecha: 2026-10-28 · Duración del video: 16 s

| Criterio | Captura | Resultado automatizado | Resultado manual |
|---|---|---|---|
| 1. Opción de coordinar | [P-HU-10-01](evidencias/HU-10/P-HU-10-01-opcion-coordinar.png) | El perfil de una mascota disponible muestra "Coordinar" | ✋ por asignar |
| 2. Enviar una solicitud de coordinación | [P-HU-10-02](evidencias/HU-10/P-HU-10-02-formulario-de-solicitud.png) | Formulario "Coordinar adopción" con "Enviar solicitud" habilitado | ✋ por asignar |
| 3. Registrar fecha y hora | [P-HU-10-03](evidencias/HU-10/P-HU-10-03-fecha-y-hora-propuestas.png) | La fecha y hora ingresadas (15:30) son las guardadas en la solicitud | ✋ por asignar |
| 4. El responsable recibe la solicitud | [P-HU-10-04](evidencias/HU-10/P-HU-10-04-responsable-recibe-solicitud.png) | Las solicitudes aparecen en "Solicitudes de adopción" del responsable | ✋ por asignar |
| 5. Ver el estado de la solicitud | [P-HU-10-05](evidencias/HU-10/P-HU-10-05-estado-pendiente.png) | "Estado: Pendiente" en la confirmación y en el perfil de la mascota | ✋ por asignar |
| 6. Ver si fue aceptada o rechazada | [P-HU-10-06a](evidencias/HU-10/P-HU-10-06a-respuesta-aceptada.png) | Tras responder el responsable, el perfil muestra "Aceptada" ([captura 06b](evidencias/HU-10/P-HU-10-06b-respuesta-rechazada.png): "Rechazada") | ✋ por asignar |
| 7. Mensaje de confirmación | [P-HU-10-07](evidencias/HU-10/P-HU-10-07-confirmacion-solicitud-enviada.png) | Mensaje "¡Solicitud enviada!" | ✋ por asignar |

Video: ✋ Pendiente: subir a Drive (videos-hu/Sprint_03/HU-10.mp4)

### HU-13 — Notificación de interés en mascota

Comando: `... node scripts/record-hu.mjs 13` · Fecha: 2026-10-28 · Duración del video: 10 s

| Criterio | Captura | Resultado automatizado | Resultado manual |
|---|---|---|---|
| 1. Notificación inmediata al responsable | [P-HU-13-01](evidencias/HU-13/P-HU-13-01-notificacion-al-responsable.png) | Al dar "Me gusta" la adoptante, el responsable recibe una notificación más (solo en la plataforma, sin correo) | ✋ por asignar |
| 2. Campana con contador | [P-HU-13-02](evidencias/HU-13/P-HU-13-02-campana-con-contador.png) | La campana pasa de 2 a 3 sin leer | ✋ por asignar |
| 3. Redirige al perfil del adoptante | [P-HU-13-03](evidencias/HU-13/P-HU-13-03-redirige-al-perfil-del-adoptante.png) | Al abrir la notificación se llega al perfil de la adoptante | ✋ por asignar |
| 4. Lista con datos y leídas/no leídas | [P-HU-13-04](evidencias/HU-13/P-HU-13-04-lista-leidas-y-no-leidas.png) | Muestra adoptante, mascota, fecha y hora; 3 sin leer y 1 leída | ✋ por asignar |
| 5. Marcar como leída actualiza el contador | [P-HU-13-05a](evidencias/HU-13/P-HU-13-05a-contador-tras-leer-una.png) | El contador baja a 1 al leer una ([marcar todo](evidencias/HU-13/P-HU-13-05b-contador-tras-leer-todo.png): sin contador, "Estás al día") | ✋ por asignar |

Video: ✋ Pendiente: subir a Drive (videos-hu/Sprint_03/HU-13.mp4)

### HU-18 — Historial de mascotas de interés

Comando: `... node scripts/record-hu.mjs 18` · Fecha: 2026-10-28 · Duración del video: 11 s

| Criterio | Captura | Resultado automatizado | Resultado manual |
|---|---|---|---|
| 1. Opción "Historial de interés" | [P-HU-18-01](evidencias/HU-18/P-HU-18-01-opcion-historial-de-interes.png) | Visible en el perfil y lleva a `#/historial` | ✋ por asignar |
| 2. Mascota con "Me gusta" en el historial | [P-HU-18-02](evidencias/HU-18/P-HU-18-02-mascota-con-me-gusta-en-historial.png) | Porotopo aparece tras darle "Me gusta" | ✋ por asignar |
| 3. Foto, nombre, fecha y estado | [P-HU-18-03](evidencias/HU-18/P-HU-18-03-foto-nombre-fecha-y-estado.png) | 6 registros, todos con foto y fecha, y su estado (Disponible, Adoptada, Retirada, No disponible) | ✋ por asignar |
| 4. Mascota disponible abre su perfil completo | [P-HU-18-04](evidencias/HU-18/P-HU-18-04-perfil-completo-de-mascota-disponible.png) | Otto abre su perfil completo | ✋ por asignar |
| 5. Mascota adoptada | [P-HU-18-05](evidencias/HU-18/P-HU-18-05-estado-adoptada.png) | Rocky con estado "Adoptada" | ✋ por asignar |
| 6. Mascota retirada | [P-HU-18-06](evidencias/HU-18/P-HU-18-06-perfil-retirado-no-disponible.png) | Tomasa indica "Este perfil ya no está disponible" y no es enlace | ✋ por asignar |
| 7. Historial vacío | [P-HU-18-07](evidencias/HU-18/P-HU-18-07-historial-vacio.png) | Mensaje "Todavía no tienes historial" | ✋ por asignar |

Video: ✋ Pendiente: subir a Drive (videos-hu/Sprint_03/HU-18.mp4)

### HU-20 — Visualización de compatibilidades

Comando: `... node scripts/record-hu.mjs 20` · Fecha: 2026-10-28 · Duración del video: 11 s

| Criterio | Captura | Resultado automatizado | Resultado manual |
|---|---|---|---|
| 1. Mis Matches muestra compatibles | [P-HU-20-01](evidencias/HU-20/P-HU-20-01-mis-matches-compatibles.png) | Lista de mascotas con porcentaje | ✋ por asignar |
| 2. Orden de mayor a menor | [P-HU-20-02](evidencias/HU-20/P-HU-20-02-orden-de-mayor-a-menor.png) | Los porcentajes están en orden descendente | ✋ por asignar |
| 3. Tarjeta con foto, info y compatibilidad | [P-HU-20-03](evidencias/HU-20/P-HU-20-03-tarjeta-foto-info-y-compatibilidad.png) | Foto, especie · raza · tamaño, porcentaje y "Coincide contigo porque" | ✋ por asignar |
| 4. Criterios en el perfil | [P-HU-20-04](evidencias/HU-20/P-HU-20-04-criterios-de-compatibilidad.png) | Bloque "¿Por qué hacemos match?" con puntajes por criterio | ✋ por asignar |
| 5. Mascota no disponible sale de la lista | [P-HU-20-05](evidencias/HU-20/P-HU-20-05-mascota-no-disponible-sale-de-matches.png) | Tras marcarla adoptada ya no aparece en Mis Matches | ✋ por asignar |
| 6. Sin compatibles: mensaje y editar preferencias | [P-HU-20-06](evidencias/HU-20/P-HU-20-06-sin-compatibles-editar-preferencias.png) | Mensaje "No encontramos mascotas compatibles" y botón "Editar preferencias" (lleva al cuestionario) | ✋ por asignar |
| 7. Sin preferencias completas | [P-HU-20-07](evidencias/HU-20/P-HU-20-07-sin-preferencias-pide-completarlas.png) | Mensaje "Completa tus preferencias", sin tarjetas; el botón lleva al cuestionario | ✋ por asignar |

Video: ✋ Pendiente: subir a Drive (videos-hu/Sprint_03/HU-20.mp4)
