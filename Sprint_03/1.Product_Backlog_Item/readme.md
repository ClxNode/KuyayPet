# 1. Product Backlog Item — Sprint 3

Historias del Sprint 3 (parte (a) adopción y parte (b) administración y cierre). El enunciado y los criterios de aceptación están copiados **sin cambios** de la *Lista de Historias de Usuario KuyayPet* del equipo; el rol y la prioridad vienen de las etiquetas de cada issue. Los puntos y el MoSCoW son una **propuesta** (el equipo no los registró). Las issues de GitHub traen menos criterios que el documento del equipo (2 o 3 frente a 4–9); aquí van todos.

**Sprint 3** · **HU:** 15 · **Criterios:** 93 · **Puntos propuestos:** 70 (42 + 28) · **Estado:** parte (a) cerrada en GitHub con validación pendiente; parte (b) en curso al 19-nov

## Objetivo del Sprint 3

**Adopción y cierre del producto.** (a) *Adopción:* un adoptante indica interés en una mascota (“Me gusta”) o propone coordinar su adopción; el responsable recibe la notificación y responde; si acepta el interés se genera el Match y se habilita el chat; el adoptante consulta sus matches y su historial. (b) *Administración y cierre:* el administrador gestiona usuarios, publicaciones y reportes; el usuario consulta la guía de adopción y recupera su contraseña; el producto cierra con pruebas de seguridad, manual de usuario, documentación técnica, despliegue y cierre del proyecto.

## Resumen

| HU | Parte | Rol | Prioridad | MoSCoW | Puntos | Criterios | Ruta en el prototipo | Issue | PR |
|---|---|---|---|---|---|---|---|---|---|
| HU-06 | a | Adoptante | Media | Must | 3 | 5 | `/descubrir` | [#6](https://github.com/ClxNode/KuyayPet/issues/6) | [#68](https://github.com/ClxNode/KuyayPet/pull/68) |
| HU-07 | a | Adoptante | Media | Must | 8 | 8 | `/matches` | [#7](https://github.com/ClxNode/KuyayPet/issues/7) | [#69](https://github.com/ClxNode/KuyayPet/pull/69) |
| HU-08 | a | Adoptante | Alta | Must | 8 | 9 | `/chats/:id` | [#8](https://github.com/ClxNode/KuyayPet/issues/8) | [#70](https://github.com/ClxNode/KuyayPet/pull/70) |
| HU-09 | a | Usuario común | Baja | Could | 5 | 7 | `/mascota/:id` | [#9](https://github.com/ClxNode/KuyayPet/issues/9) | [#71](https://github.com/ClxNode/KuyayPet/pull/71) |
| HU-10 | a | Adoptante | Alta | Must | 5 | 7 | `/coordinar/:petId` | [#10](https://github.com/ClxNode/KuyayPet/issues/10) | [#72](https://github.com/ClxNode/KuyayPet/pull/72) |
| HU-13 | a | Responsable de mascota | Media | Must | 3 | 5 | `/notificaciones` | [#13](https://github.com/ClxNode/KuyayPet/issues/13) | [#73](https://github.com/ClxNode/KuyayPet/pull/73) |
| HU-18 | a | Adoptante | Baja | Should | 5 | 7 | `/historial` | [#18](https://github.com/ClxNode/KuyayPet/issues/18) | [#74](https://github.com/ClxNode/KuyayPet/pull/74) |
| HU-20 | a | Adoptante | Media | Should | 5 | 7 | `/matches` | [#20](https://github.com/ClxNode/KuyayPet/issues/20) | [#75](https://github.com/ClxNode/KuyayPet/pull/75) |
| HU-14 | b | Usuario común | Baja | Could | 2 | 4 | `/guia` | [#14](https://github.com/ClxNode/KuyayPet/issues/14) | [#88](https://github.com/ClxNode/KuyayPet/pull/88) |
| HU-15 | b | Usuario común | Media | Must | 3 | 5 | `/recuperar` | [#15](https://github.com/ClxNode/KuyayPet/issues/15) | [#89](https://github.com/ClxNode/KuyayPet/pull/89) |
| HU-22 | b | Administrador | Alta | Must | 5 | 7 | `/admin/usuarios` | [#22](https://github.com/ClxNode/KuyayPet/issues/22) | [#90](https://github.com/ClxNode/KuyayPet/pull/90) |
| HU-23 | b | Administrador | Alta | Must | 5 | 6 | `/admin/publicaciones` | [#23](https://github.com/ClxNode/KuyayPet/issues/23) | [#91](https://github.com/ClxNode/KuyayPet/pull/91) |
| HU-24 | b | Administrador | Alta | Must | 5 | 7 | `/admin` | [#24](https://github.com/ClxNode/KuyayPet/issues/24) | [#92](https://github.com/ClxNode/KuyayPet/pull/92) |
| HU-25 | b | Administrador | Media | Should | 5 | 7 | `/admin/usuarios` | [#25](https://github.com/ClxNode/KuyayPet/issues/25) | [#93](https://github.com/ClxNode/KuyayPet/pull/93) |
| HU-26 | b | Administrador | Media | Should | 3 | 2 | `/admin/reportes` | [#26](https://github.com/ClxNode/KuyayPet/issues/26) | [#94](https://github.com/ClxNode/KuyayPet/pull/94) |

# Parte (a) — Adopción

## HU-06 — Indicar interés en una mascota

**Issue:** [#6](https://github.com/ClxNode/KuyayPet/issues/6) · **Rol:** Adoptante · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Must · **Puntos (propuesta):** 3 · **Responsable:** ClxNode

**Estado:** issue cerrado el 12-nov 20:05:41Z por ClxNode; PR [#68](https://github.com/ClxNode/KuyayPet/pull/68) fusionado.

Como adoptante, quiero indicar si una mascota me gusta o no me gusta, para expresar rápidamente mi interés por ella.

**Criterios de aceptación (5):**

1. **Dado** que el adoptante está visualizando una mascota disponible, **cuando** observa su información, **entonces** el sistema debe mostrar las opciones "Me gusta" y "No me gusta".

2. **Dado** que el adoptante está visualizando una mascota, **cuando** selecciona la opción "Me gusta", **entonces** el sistema debe registrar su interés por esa mascota.

3. **Dado** que el adoptante está visualizando una mascota, **cuando** selecciona la opción "No me gusta", **entonces** el sistema debe registrar que no está interesado en esa mascota.

4. **Dado** que el adoptante seleccionó una de las opciones, **cuando** el sistema registra su elección, **entonces** debe mostrar una confirmación visual de la opción seleccionada.

5. **Dado** que el adoptante ya indicó su preferencia sobre una mascota, **cuando** finaliza la acción, **entonces** el sistema debe permitirle continuar visualizando otra mascota disponible.

**Prototipo:** pantalla `/descubrir` · captura del criterio 1: [P-HU-06-01](../7.Pruebas/readme.md#hu-06--indicar-interés-en-una-mascota)

**Dependencias:** HU-02 (lista de mascotas disponibles que recorre el deck). Es **prerrequisito** de HU-07, HU-13 y HU-18.

**Observación:** Sin observaciones en la ejecución automatizada.

## HU-07 — Recibir un Match por compatibilidad

**Issue:** [#7](https://github.com/ClxNode/KuyayPet/issues/7) · **Rol:** Adoptante · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Must · **Puntos (propuesta):** 8 · **Responsable:** ClxNode

**Estado:** issue cerrado el 12-nov 20:07:45Z por ClxNode; PR [#69](https://github.com/ClxNode/KuyayPet/pull/69) fusionado.

Como adoptante, quiero recibir un Match cuando exista interés compatible, para saber que puedo continuar con el proceso de contacto.

**Criterios de aceptación (8):**

1. El sistema debe permitir identificar cuando existe un interés compatible entre el adoptante y una mascota.

2. **Dado** que el adoptante ha indicado que está interesado en una mascota, **cuando** el responsable también manifieste interés en continuar con el proceso, **entonces** el sistema debe generar un Match.

3. **Dado** que existe un Match entre el adoptante y una mascota, **cuando** se genere la coincidencia, **entonces** el sistema debe notificar al adoptante que se ha producido un Match.

4. **Dado** que el adoptante recibe una notificación de Match, **cuando** acceda a la sección de coincidencias, **entonces** debe poder visualizar la mascota con la que obtuvo el Match.

5. El sistema debe mostrar información básica de la mascota asociada al Match.

6. **Dado** que el adoptante tiene un Match activo, **cuando** seleccione la coincidencia, **entonces** el sistema debe permitirle continuar con el proceso de contacto con el responsable.

7. El Match debe quedar registrado en la cuenta del adoptante para que pueda consultarlo posteriormente.

8. **Dado** que no existe interés compatible, **cuando** el adoptante revise sus posibles coincidencias, **entonces** el sistema no debe generar un Match.

**Prototipo:** pantalla `/matches` · captura del criterio 1: [P-HU-07-01](../7.Pruebas/readme.md#hu-07--recibir-un-match-por-compatibilidad)

**Dependencias:** **HU-06** (el interés que el responsable acepta). La notificación (HU-13) no es prerrequisito: el responsable responde desde su panel (`OwnerHome`). Usa el servicio de notificaciones para avisar al adoptante.

**Observación:** Criterio 5: la entrada del Match muestra foto y nombre, no especie, edad ni ubicación (ver [7.Pruebas](../7.Pruebas/readme.md#hu-07--recibir-un-match-por-compatibilidad)).

## HU-08 — Comunicarse con el responsable de la mascota

**Issue:** [#8](https://github.com/ClxNode/KuyayPet/issues/8) · **Rol:** Adoptante · **Prioridad del catálogo:** Alta · **MoSCoW propuesto:** Must · **Puntos (propuesta):** 8 · **Responsable:** por asignar

**Estado:** issue cerrado el 12-nov 20:11:09Z por ClxNode; PR [#70](https://github.com/ClxNode/KuyayPet/pull/70) fusionado.

Como adoptante, quiero comunicarme mediante un chat con el responsable de una mascota, para solicitar información y coordinar una posible adopción.

**Criterios de aceptación (9):**

1. El sistema debe permitir al adoptante iniciar una conversación con el responsable de una mascota.

2. **Dado** que el adoptante ha seleccionado una mascota en adopción, **cuando** presione la opción de iniciar chat, **entonces** el sistema debe abrir una conversación con el responsable de dicha mascota.

3. **Dado** que existe una conversación entre el adoptante y el responsable, **cuando** el adoptante envíe un mensaje, **entonces** el sistema debe registrar y mostrar el mensaje dentro del chat.

4. **Dado** que el responsable ha enviado un mensaje, **cuando** el adoptante ingrese a la conversación, **entonces** debe poder visualizar el mensaje recibido.

5. **Dado** que el adoptante se encuentra dentro del chat, **cuando** consulte la conversación, **entonces** el sistema debe identificar la mascota relacionada con dicha conversación.

6. El sistema debe mostrar los mensajes enviados y recibidos en orden cronológico.

7. **Dado** que el adoptante necesita información adicional sobre la mascota, **cuando** envíe una consulta mediante el chat, **entonces** el responsable debe poder recibirla y responderla.

8. El adoptante debe poder consultar posteriormente el historial de la conversación para continuar la coordinación de la posible adopción.

9. **Dado** que la adopción ya no continuará, **cuando** la conversación sea finalizada, **entonces** el sistema debe conservar el historial de mensajes para su consulta posterior.

**Prototipo:** pantalla `/chats/:id` · captura del criterio 1: [P-HU-08-01](../7.Pruebas/readme.md#hu-08--comunicarse-con-el-responsable)

**Dependencias:** **HU-07 o HU-10**: el chat directo se crea con el Match o con la solicitud de coordinación (`ensureDirectThread`). El botón del perfil de mascota dice “El chat se habilita con el Match” mientras no exista el hilo (`PetProfile.tsx`).

**Observación:** Criterios 4 y 7 simulados: la respuesta del responsable es una plantilla automática.

## HU-09 — Chat entre usuarios interesados en la misma mascota

**Issue:** [#9](https://github.com/ClxNode/KuyayPet/issues/9) · **Rol:** Usuario común · **Prioridad del catálogo:** Baja · **MoSCoW propuesto:** Could · **Puntos (propuesta):** 5 · **Responsable:** por asignar

**Estado:** issue cerrado el 12-nov 20:11:10Z por ClxNode; PR [#71](https://github.com/ClxNode/KuyayPet/pull/71) fusionado.

Como usuario común, quiero comunicarme mediante chat con otros usuarios interesados en la misma mascota, para conversar sobre ello y compartir experiencias o detalles del proceso de adopción.

**Criterios de aceptación (7):**

1. **Dado** que el usuario se encuentra en el perfil de una mascota, **cuando** selecciona la opción "Unirme al chat de la mascota" o "Iniciar chat", **entonces** el sistema debe abrir la ventana o sección del chat vinculada a esa mascota.

2. **Dado** que el usuario ingresa al chat de la mascota, **cuando** escribe un mensaje y selecciona la opción "Enviar", **entonces** el sistema debe registrar y mostrar el mensaje en tiempo real a los demás usuarios en el chat.

3. **Dado** que otros usuarios interesados escriben en el chat, **cuando** el usuario está activo en la conversación, **entonces** el sistema debe mostrar los nuevos mensajes indicando el nombre del remitente y la hora de envío.

4. **Dado** que el usuario ingresa por primera vez al chat de una mascota, **cuando** carga la pantalla, **entonces** el sistema debe mostrar el historial de mensajes previos de la conversación.

5. **Dado** que no hay mensajes previos en el chat de la mascota, **cuando** el usuario ingresa, **entonces** el sistema debe mostrar un mensaje indicando que no hay mensajes anteriores e invitar a iniciar la conversación.

6. **Dado** que el usuario no tiene una sesión activa en la plataforma, **cuando** intenta acceder al chat de una mascota, **entonces** el sistema debe solicitarle iniciar sesión antes de permitirle enviar o ver mensajes.

7. **Dado** que un usuario ingresa un mensaje vacío o compuesto solo por espacios, **cuando** intenta presionar "Enviar", **entonces** el sistema debe mantener deshabilitado el botón de envío y no procesar el mensaje.

**Prototipo:** pantalla `/mascota/:id` · captura del criterio 1: [P-HU-09-01](../7.Pruebas/readme.md#hu-09--chat-entre-usuarios-interesados)

**Dependencias:** HU-01 (sesión, criterio 6) y HU-03 (perfil de mascota donde está el botón). Independiente de HU-06, HU-07 y HU-10.

**Observación:** Criterio 2 (entrega a otros usuarios) solo se demuestra con dos sesiones en pantalla dividida, en el mismo navegador.

## HU-10 — Coordinar posible adopción

**Issue:** [#10](https://github.com/ClxNode/KuyayPet/issues/10) · **Rol:** Adoptante · **Prioridad del catálogo:** Alta · **MoSCoW propuesto:** Must · **Puntos (propuesta):** 5 · **Responsable:** por asignar

**Estado:** issue cerrado el 12-nov 20:11:12Z por ClxNode; PR [#72](https://github.com/ClxNode/KuyayPet/pull/72) fusionado.

Como adoptante, quiero coordinar una posible adopción con el responsable, para continuar con el proceso.

**Criterios de aceptación (7):**

1. **Dado** que el adoptante está visualizando las mascotas disponibles, **cuando** selecciona una mascota para continuar con el proceso de adopción, **entonces** el sistema debe mostrar la opción para coordinar la posible adopción.

2. **Dado** que el adoptante ha seleccionado una mascota, **cuando** solicita coordinar la posible adopción con el responsable, **entonces** el sistema debe permitir enviar una solicitud de coordinación.

3. **Dado** que el adoptante desea coordinar la adopción, **cuando** ingresa una fecha y hora propuesta, **entonces** el sistema debe permitir registrar la fecha y hora para continuar con el proceso.

4. **Dado** que el adoptante ha enviado una solicitud de coordinación, **cuando** la solicitud es registrada correctamente, **entonces** el responsable debe poder recibir la solicitud del adoptante.

5. **Dado** que el adoptante ha enviado una solicitud de coordinación, **cuando** consulta el estado de la solicitud, **entonces** el sistema debe mostrar el estado actual de la solicitud de adopción.

6. **Dado** que el responsable ha respondido a la solicitud de adopción, **cuando** el adoptante consulta su solicitud, **entonces** el sistema debe mostrar si la solicitud fue aceptada o rechazada.

7. **Dado** que el adoptante ha completado correctamente los datos de la solicitud, **cuando** selecciona la opción "Enviar solicitud", **entonces** el sistema debe mostrar un mensaje de confirmación indicando que la solicitud fue enviada.

**Prototipo:** pantalla `/coordinar/:petId` · captura del criterio 1: [P-HU-10-01](../7.Pruebas/readme.md#hu-10--coordinar-posible-adopción)

**Dependencias:** HU-03 (acceso desde el perfil) y HU-19 (`validateAdoption` exige mascota `disponible`). **Emite** la notificación de HU-13 y usa el servicio de chat de HU-08; no depende de HU-13: el responsable ve las solicitudes en su panel (`useAdoptionsForOwner`). Aceptar una solicitud **no** crea un Match.

**Observación:** Sin observaciones en la ejecución automatizada.

## HU-13 — Notificación de interés en mascota

**Issue:** [#13](https://github.com/ClxNode/KuyayPet/issues/13) · **Rol:** Responsable de mascota · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Must · **Puntos (propuesta):** 3 · **Responsable:** IchiSieben

**Estado:** issue cerrado el 29-oct 16:52:00Z por ClxNode; PR [#73](https://github.com/ClxNode/KuyayPet/pull/73) fusionado.

Como responsable de mascota, quiero recibir una notificación cuando un adoptante muestre interés en mi mascota, para poder responderle a tiempo y coordinar el proceso de adopción.

**Criterios de aceptación (5):**

1. **Dado** que un adoptante presiona el botón de "Me interesa" o "Solicitar adopción", **cuando** la acción se procesa correctamente, **entonces** el sistema debe enviar inmediatamente una notificación (en la plataforma y/o correo) al responsable de la mascota.

2. **Dado** que el responsable se encuentra navegado en la plataforma, **cuando** recibe una nueva notificación, **entonces** el sistema debe mostrar un indicador visual (icono de campana con contador o emergente) en la barra superior de navegación.

3. **Dado** que el responsable selecciona la notificación recibida, **cuando** hace clic sobre ella, **entonces** el sistema debe redirigirlo directamente al perfil del adoptante interesado o al chat asignado a esa solicitud.

4. **Dado** que el responsable accede a su centro de notificaciones, **cuando** visualiza la lista, **entonces** el sistema debe mostrar el nombre del adoptante, la mascota de interés, la fecha y hora de la interacción, distinguiendo entre notificaciones leídas y no leídas.

5. **Dado** que el responsable marca una notificación como leída, **cuando** actualiza la lista, **entonces** el sistema debe actualizar el contador de notificaciones pendientes en el icono de la barra superior.

**Prototipo:** pantalla `/notificaciones` · captura del criterio 1: [P-HU-13-01](../7.Pruebas/readme.md#hu-13--notificación-de-interés-en-mascota)

**Dependencias:** **HU-06 y HU-10**: el criterio 1 nombra ambos disparadores (“Me interesa” y “Solicitar adopción”). HU-11 (el responsable es dueño de mascotas).

**Observación:** Criterio 1: el prototipo notifica solo en la plataforma, sin correo (el criterio dice “en la plataforma y/o correo”). Etiquetada `sprint-2` en GitHub aunque se probó y entregó en este sprint.

## HU-18 — Historial de mascotas de interés

**Issue:** [#18](https://github.com/ClxNode/KuyayPet/issues/18) · **Rol:** Adoptante · **Prioridad del catálogo:** Baja · **MoSCoW propuesto:** Should · **Puntos (propuesta):** 5 · **Responsable:** por asignar

**Estado:** issue cerrado el 12-nov 23:55:39Z por ClxNode; PR [#74](https://github.com/ClxNode/KuyayPet/pull/74) fusionado.

Como adoptante, quiero consultar mi historial de mascotas que indiqué que me gustan, para volver a revisar mis opciones de interés y conocer su estado actual.

**Criterios de aceptación (7):**

1. **Dado** que el adoptante ha iniciado sesión, **cuando** ingresa a su perfil, **entonces** el sistema debe mostrar la opción "Historial de interés".

2. **Dado** que el adoptante indicó anteriormente que una mascota le gusta, **cuando** consulta su historial, **entonces** el sistema debe mostrar dicha mascota.

3. **Dado** que existen varias mascotas en el historial, **cuando** se presenta la lista, **entonces** cada registro debe mostrar fotografía, nombre, fecha de interacción y estado actual.

4. **Dado** que una mascota del historial continúa disponible, **cuando** el adoptante la selecciona, **entonces** el sistema debe mostrar su perfil completo.

5. **Dado** que una mascota del historial ya fue adoptada, **cuando** el adoptante consulta el registro, **entonces** el sistema debe mostrarla con el estado "Adoptada".

6. **Dado** que una mascota fue retirada de la plataforma, **cuando** aparece en el historial, **entonces** el sistema debe indicar que su perfil ya no está disponible.

7. **Dado** que el adoptante nunca indicó interés en una mascota, **cuando** consulta esta sección, **entonces** el sistema debe mostrar un mensaje informativo indicando que su historial está vacío.

**Prototipo:** pantalla `/historial` · captura del criterio 1: [P-HU-18-01](../7.Pruebas/readme.md#hu-18--historial-de-mascotas-de-interés)

**Dependencias:** **HU-06** (lista las interacciones `like`/`superlike`), HU-19 (estado “Adoptada”), HU-10 (“En proceso” sale de las solicitudes) y HU-26 (el estado “Retirada” solo lo produce `hidePublicationFromReport`; la prueba usa una mascota ya retirada en los datos de ejemplo).

**Observación:** Incluye una corrección de código: insignia de estado actual en el historial (#74).

## HU-20 — Visualización de compatibilidades (Mis Matches)

**Issue:** [#20](https://github.com/ClxNode/KuyayPet/issues/20) · **Rol:** Adoptante · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Should · **Puntos (propuesta):** 5 · **Responsable:** por asignar

**Estado:** issue cerrado el 12-nov 23:55:40Z por ClxNode; PR [#75](https://github.com/ClxNode/KuyayPet/pull/75) fusionado.

Como adoptante, quiero visualizar mis matches, para revisar las mascotas con las que tengo mayor compatibilidad y tomar una mejor decisión de adopción.

**Criterios de aceptación (7):**

1. **Dado** que el adoptante ha iniciado sesión y completado sus preferencias, **cuando** ingresa a la sección "Mis Matches", **entonces** el sistema debe mostrar las mascotas compatibles.

2. **Dado** que existen varias mascotas compatibles, **cuando** se muestran los resultados, **entonces** deben ordenarse desde la mayor hasta la menor compatibilidad.

3. **Dado** que se muestra una mascota compatible, **cuando** el adoptante visualiza su tarjeta, **entonces** el sistema debe presentar su fotografía, información básica y nivel de compatibilidad.

4. **Dado** que el adoptante selecciona una mascota, **cuando** ingresa a su perfil, **entonces** el sistema debe mostrar los criterios principales que originaron la compatibilidad.

5. **Dado** que una mascota compatible deja de estar disponible, **cuando** el adoptante consulta sus matches, **entonces** el sistema debe actualizar o retirar dicha opción.

6. **Dado** que no existen mascotas compatibles, **cuando** el adoptante ingresa a la sección, **entonces** el sistema debe mostrar un mensaje informativo y permitirle modificar sus preferencias.

7. **Dado** que el adoptante todavía no completó sus preferencias, **cuando** intenta consultar sus matches, **entonces** el sistema debe solicitarle completar la información necesaria.

**Prototipo:** pantalla `/matches` · captura del criterio 1: [P-HU-20-01](../7.Pruebas/readme.md#hu-20--visualización-de-compatibilidades)

**Dependencias:** Preferencias del adoptante (el cuestionario `Onboarding` lleva `data-hu="HU-20"`) y HU-19/HU-24 (`isAvailable` exige `disponible` y `aprobada`). La lista ordenada se calcula con `computeMatch(user.profile, pet)`, no con la tabla de Matches; solo el bloque “Interés mutuo” de la misma pantalla usa HU-07.

**Observación:** Sin observaciones en la ejecución automatizada.

# Parte (b) — Administración y cierre

## HU-14 — Consulta de información sobre adopción

**Issue:** [#14](https://github.com/ClxNode/KuyayPet/issues/14) · **Rol:** Usuario común · **Prioridad del catálogo:** Baja · **MoSCoW propuesto:** Could · **Puntos (propuesta):** 2 · **Responsable:** por asignar

**Estado:** issue cerrado el 12-nov 23:55:36Z por ClxNode; PR [#88](https://github.com/ClxNode/KuyayPet/pull/88) **abierto, sin fusionar al 19-nov**.

Como usuario común, quiero consultar información sobre adopción en una sola plataforma, para evitar realizar búsquedas manuales en diferentes medios y conocer los requisitos del proceso.

**Criterios de aceptación (4):**

1. **Dado** que el usuario se encuentra en la barra de navegación principal, **cuando** selecciona la sección "Sobre nosotros" o "Guía de Adopción", **entonces** el sistema debe mostrar un centro informativo centralizado con preguntas frecuentes, requisitos y consejos de adopción responsable.

2. **Dado** que el usuario navega por la sección informativa, **cuando** selecciona una categoría o pregunta específica (ej. "Requisitos para adoptar" o "¿Cómo preparar mi hogar?"), **entonces** el sistema debe desplegar el contenido detallado correspondiente de forma clara.

3. **Dado** que el usuario se encuentra dentro del perfil de una mascota específica, **cuando** presiona sobre el enlace o icono de "Información sobre el proceso de adopción", **entonces** el sistema debe redirigirlo a la guía explicativa sin perder el contexto de su navegación.

4. **Dado** que el usuario utiliza el buscador dentro de la sección de información, **cuando** ingresa palabras clave (ej. "vacunas", "contrato", "seguimiento"), **entonces** el sistema debe filtrar y mostrar los artículos o preguntas relacionadas con dichas palabras.

**Prototipo:** pantalla `/guia`

**Dependencias:** Ninguna técnica. El criterio 3 enlaza desde el perfil de mascota (HU-03).

**Observación:** PR de criterios #88 agrega la pestaña “Guía” a la barra principal (`AppLayout.tsx`).

## HU-15 — Recuperación de contraseña

**Issue:** [#15](https://github.com/ClxNode/KuyayPet/issues/15) · **Rol:** Usuario común · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Must · **Puntos (propuesta):** 3 · **Responsable:** por asignar

**Estado:** issue cerrado el 12-nov 23:55:39Z por ClxNode; PR [#89](https://github.com/ClxNode/KuyayPet/pull/89) **abierto, sin fusionar al 19-nov**.

Como usuario común, quiero recuperar mi contraseña, para volver a acceder a mi cuenta en caso de olvido o pérdida de credenciales.

**Criterios de aceptación (5):**

1. **Dado** que el usuario se encuentra en la pantalla de "Iniciar sesión", **cuando** selecciona la opción "¿Olvidaste tu contraseña?", **entonces** el sistema debe mostrar la vista para ingresar el correo electrónico registrado.

2. **Dado** que el usuario ingresa un correo registrado y presiona "Enviar enlace de recuperación", **cuando** el correo existe en la base de datos, **entonces** el sistema debe enviar un enlace/código de restablecimiento e informar en pantalla que las instrucciones fueron enviadas.

3. **Dado** que el usuario ingresa un correo electrónico que no está registrado o no cumple con el formato válido, **cuando** presiona "Enviar enlace de recuperación", **entonces** el sistema debe mostrar un mensaje de error solicitando revisar el correo ingresado.

4. **Dado** que el usuario accede al enlace recibido en su correo, **cuando** carga la pantalla de restablecimiento, **entonces** el sistema debe permitirle ingresar y confirmar su nueva contraseña con los criterios de seguridad mínimos.

5. **Dado** que el usuario confirma la nueva contraseña de forma exitosa, **cuando** el cambio es procesado, **entonces** el sistema debe mostrar un mensaje de confirmación y redirigir al usuario al formulario de "Iniciar sesión" con sus nuevas credenciales.

**Prototipo:** pantalla `/recuperar`

**Dependencias:** HU-01 (cuentas registradas) y la pantalla de inicio de sesión (criterio 1).

**Observación:** Pendiente de fusión (PR #89).

## HU-22 — Gestionar usuarios

**Issue:** [#22](https://github.com/ClxNode/KuyayPet/issues/22) · **Rol:** Administrador · **Prioridad del catálogo:** Alta · **MoSCoW propuesto:** Must · **Puntos (propuesta):** 5 · **Responsable:** por asignar

**Estado:** issue cerrado el 12-nov 23:55:41Z por ClxNode; PR [#90](https://github.com/ClxNode/KuyayPet/pull/90) **abierto, sin fusionar al 19-nov**.

Como administrador de la plataforma, quiero gestionar las cuentas de los usuarios registrados, para mantener un control adecuado de los usuarios de KuyayPet.

**Criterios de aceptación (7):**

1. **Dado** que el administrador ha iniciado sesión, **cuando** accede al módulo de usuarios, **entonces** el sistema debe mostrar la lista de usuarios registrados.

2. **Dado** que el administrador visualiza la lista de usuarios, **cuando** selecciona un usuario, **entonces** el sistema debe mostrar su información registrada.

3. **Dado** que el administrador visualiza la información de un usuario, **cuando** selecciona la opción de editar, **entonces** el sistema debe permitir modificar sus datos.

4. **Dado** que el administrador ha realizado cambios en los datos de un usuario, **cuando** selecciona la opción “Guardar cambios”, **entonces** el sistema debe actualizar la información del usuario.

5. **Dado** que el administrador desea desactivar una cuenta, **cuando** selecciona la opción “Desactivar usuario” y confirma la acción, **entonces** el sistema debe cambiar el estado de la cuenta a inactivo.

6. **Dado** que una cuenta ha sido desactivada, **cuando** el usuario intenta acceder a KuyayPet, **entonces** el sistema no debe permitirle iniciar sesión.

7. **Dado** que el administrador realiza correctamente una modificación o desactivación, **cuando** finaliza la operación, **entonces** el sistema debe mostrar un mensaje de confirmación.

**Prototipo:** pantalla `/admin/usuarios`

**Dependencias:** HU-01 (cuentas). Comparte la lista de usuarios y `setUserActive` con HU-25 (criterios 5 y 6 de HU-22 son los de HU-25).

**Observación:** Pendiente de fusión (PR #90).

## HU-23 — Revisar publicaciones de mascotas

**Issue:** [#23](https://github.com/ClxNode/KuyayPet/issues/23) · **Rol:** Administrador · **Prioridad del catálogo:** Alta · **MoSCoW propuesto:** Must · **Puntos (propuesta):** 5 · **Responsable:** por asignar

**Estado:** issue cerrado el 12-nov 23:55:41Z por ClxNode; PR [#91](https://github.com/ClxNode/KuyayPet/pull/91) **abierto, sin fusionar al 19-nov**.

Como administrador de la plataforma, quiero revisar las publicaciones de mascotas, para mantener información adecuada y actualizada en KuyayPet.

**Criterios de aceptación (6):**

1. **Dado** que el administrador ha iniciado sesión, **cuando** accede al módulo de publicaciones de mascotas, **entonces** el sistema debe mostrar la lista de publicaciones registradas.

2. **Dado** que el administrador visualiza la lista de publicaciones, **cuando** selecciona una mascota, **entonces** el sistema debe mostrar la información registrada de la mascota.

3. **Dado** que el administrador visualiza una publicación, **cuando** revisa su información, **entonces** debe poder identificar los datos y características de la mascota.

4. **Dado** que una publicación contiene información que necesita ser actualizada, **cuando** el administrador selecciona la opción correspondiente, **entonces** el sistema debe permitir modificar la información de la publicación.

5. **Dado** que el administrador ha realizado cambios en una publicación, **cuando** selecciona “Guardar cambios”, **entonces** el sistema debe actualizar la información de la mascota.

6. **Dado** que la información de una publicación ha sido actualizada correctamente, **cuando** finaliza la operación, **entonces** el sistema debe mostrar un mensaje de confirmación.

**Prototipo:** pantalla `/admin/publicaciones`

**Dependencias:** HU-11 (las publicaciones que se revisan). Es prerrequisito de HU-24.

**Observación:** PR de criterios #91 agrega los datos de la mascota al detalle (`AdminPublicationDetail.tsx`).

## HU-24 — Aprobar o rechazar publicaciones de mascotas

**Issue:** [#24](https://github.com/ClxNode/KuyayPet/issues/24) · **Rol:** Administrador · **Prioridad del catálogo:** Alta · **MoSCoW propuesto:** Must · **Puntos (propuesta):** 5 · **Responsable:** por asignar

**Estado:** issue cerrado el 12-nov 23:55:42Z por ClxNode; PR [#92](https://github.com/ClxNode/KuyayPet/pull/92) **abierto, sin fusionar al 19-nov**.

Como administrador de la plataforma, quiero aprobar o rechazar publicaciones de mascotas, para controlar las publicaciones que se muestran disponibles para adopción.

**Criterios de aceptación (7):**

1. **Dado** que el administrador ha iniciado sesión, **cuando** accede al módulo de publicaciones, **entonces** el sistema debe mostrar las publicaciones pendientes de revisión.

2. **Dado** que el administrador visualiza las publicaciones pendientes, **cuando** selecciona una publicación, **entonces** el sistema debe mostrar la información registrada de la mascota.

3. **Dado** que el administrador revisa una publicación, **cuando** selecciona la opción “Aprobar”, **entonces** el sistema debe solicitar la confirmación de la aprobación.

4. **Dado** que el administrador confirma la aprobación, **cuando** finaliza la operación, **entonces** el sistema debe cambiar el estado de la publicación a “Aprobada”.

5. **Dado** que el administrador revisa una publicación, **cuando** selecciona la opción “Rechazar”, **entonces** el sistema debe permitir indicar el motivo del rechazo.

6. **Dado** que el administrador confirma el rechazo, **cuando** finaliza la operación, **entonces** el sistema debe cambiar el estado de la publicación a “Rechazada”.

7. **Dado** que una publicación ha sido aprobada o rechazada correctamente, **cuando** el sistema actualiza su estado, **entonces** debe mostrar un mensaje de confirmación.

**Prototipo:** pantalla `/admin`

**Dependencias:** HU-11 (crea la publicación `pendiente`) y HU-23 (detalle). Aguas abajo condiciona a todo el catálogo: HU-02, HU-04, HU-05, HU-06 y HU-20.

**Observación:** Pendiente de fusión (PR #92).

## HU-25 — Desactivar cuentas de usuarios

**Issue:** [#25](https://github.com/ClxNode/KuyayPet/issues/25) · **Rol:** Administrador · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Should · **Puntos (propuesta):** 5 · **Responsable:** por asignar

**Estado:** issue cerrado el 12-nov 23:55:43Z por ClxNode; PR [#93](https://github.com/ClxNode/KuyayPet/pull/93) **abierto, sin fusionar al 19-nov**.

Como administrador de la plataforma, quiero desactivar cuentas de usuarios que incumplan las condiciones de uso, para mantener un entorno seguro en KuyayPet.

**Criterios de aceptación (7):**

1. **Dado** que el administrador ha iniciado sesión, **cuando** accede al módulo de usuarios, **entonces** el sistema debe mostrar la lista de usuarios registrados.

2. **Dado** que el administrador visualiza la lista de usuarios, **cuando** selecciona un usuario, **entonces** el sistema debe mostrar la información de su cuenta y su estado actual.

3. **Dado** que el administrador ha seleccionado una cuenta activa, **cuando** selecciona la opción “Desactivar usuario”, **entonces** el sistema debe solicitar la confirmación de la acción.

4. **Dado** que el administrador confirma la desactivación, **cuando** finaliza la operación, **entonces** el sistema debe cambiar el estado de la cuenta a “Inactiva”.

5. **Dado** que una cuenta se encuentra inactiva, **cuando** el usuario intenta iniciar sesión, **entonces** el sistema no debe permitirle acceder a la plataforma.

6. **Dado** que la cuenta ha sido desactivada correctamente, **cuando** termina la operación, **entonces** el sistema debe mostrar un mensaje de confirmación.

7. **Dado** que el administrador intenta desactivar una cuenta que ya está inactiva, **cuando** selecciona la opción correspondiente, **entonces** el sistema debe informar que la cuenta ya se encuentra [inactiva].

**Prototipo:** pantalla `/admin/usuarios`

**Dependencias:** HU-22 (lista y detalle de usuarios) y HU-01 (el inicio de sesión rechaza cuentas inactivas, `auth.ts`).

**Observación:** PR de criterios #93 agrega el aviso “La cuenta ya está inactiva” (`AdminUserDetail.tsx`).

Nota: en el texto extraído del PDF del equipo, el criterio 7 termina en “ya se encuentra”; se completó con “inactiva” entre corchetes (coincide con el aviso “La cuenta ya está inactiva” del PR #93).

## HU-26 — Gestionar información inapropiada en la plataforma

**Issue:** [#26](https://github.com/ClxNode/KuyayPet/issues/26) · **Rol:** Administrador · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Should · **Puntos (propuesta):** 3 · **Responsable:** por asignar

**Estado:** issue cerrado el 12-nov 23:55:44Z por ClxNode; PR [#94](https://github.com/ClxNode/KuyayPet/pull/94) **abierto, sin fusionar al 19-nov**.

Como administrador, quiero gestionar la información inapropiada publicada en la plataforma, para mantener un entorno seguro y confiable.

**Criterios de aceptación (2):**

1. **Dado** que identifico información inapropiada, **cuando** la retiro, **entonces** la información deja de mostrarse a los usuarios.

2. **Dado** que no tengo rol de administrador, **cuando** intento retirar información de otro usuario, **entonces** el sistema no me lo permite.

**Prototipo:** pantalla `/admin/reportes`

**Dependencias:** **HU-25** (`deactivateUserFromReport` reutiliza `setUserActive`) y HU-24/HU-11 (publicaciones que se ocultan). Alimenta el estado “Retirada” de HU-18.

**Observación:** Pendiente de fusión (PR #94). El PDF del equipo solo trae la fila del catálogo; los 2 criterios son los de la issue, marcados allí como propuesta.

## Dependencias entre las HU del sprint

Resumen de las dependencias verificadas contra los criterios y el código (detalle en [2.Sprint_Planning](../2.Sprint_Planning/readme.md#dependencias)).

```
HU-06 ──► HU-07 ──► HU-08 ◄── HU-10
  │
  ├──► HU-13 ◄── HU-10        (HU-13 la disparan HU-06 y HU-10)
  └──► HU-18                  (lista los "Me gusta")
HU-11 ──► HU-23 ──► HU-24 ──► (catálogo visible para HU-02, 04, 05, 06, 20)
HU-22 ──► HU-25 ──► HU-26 ──► (estado "Retirada" de HU-18)
```
