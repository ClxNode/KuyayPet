# 1. Product Backlog Item — Sprint 3

> **Propuesta — se valida en la planning.** Historias candidatas del [planning propuesto](../2.Sprint_Planning/readme.md). El enunciado y los criterios de aceptación se copiaron **tal cual** de la *Lista de Historias de Usuario KuyayPet* del equipo; el rol y la prioridad vienen del [catálogo](../../docs/historias-de-usuario.md).

**Sprint 3** · **Estado general:** Pendiente

## Objetivo del Sprint 3 (propuesto)

Adopción: conectar adoptantes con responsables — un adoptante indica interés y solicita adoptar; el responsable acepta o rechaza; si hay Match se abre el chat; y el adoptante consulta su historial.

## HU-06 — Indicar interés en una mascota

**Issue:** [#6](https://github.com/ClxNode/KuyayPet/issues/6) · **Rol:** Adoptante · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Should · **Estado:** Pendiente

Como adoptante, quiero indicar si una mascota me gusta o no me gusta, para expresar rápidamente mi interés por ella.

Criterios de aceptación:

1. **Dado** que el adoptante está visualizando una mascota disponible, **cuando** observa su información, **entonces** el sistema debe mostrar las opciones "Me gusta" y "No me gusta".

2. **Dado** que el adoptante está visualizando una mascota, **cuando** selecciona la opción "Me gusta", **entonces** el sistema debe registrar su interés por esa mascota.

3. **Dado** que el adoptante está visualizando una mascota, **cuando** selecciona la opción "No me gusta", **entonces** el sistema debe registrar que no está interesado en esa mascota.

4. **Dado** que el adoptante seleccionó una de las opciones, **cuando** el sistema registra su elección, **entonces** debe mostrar una confirmación visual de la opción seleccionada.

5. **Dado** que el adoptante ya indicó su preferencia sobre una mascota, **cuando** finaliza la acción, **entonces** el sistema debe permitirle continuar visualizando otra mascota disponible.

**Puntos:** ✋ Pendiente (Planning Poker)

## HU-07 — Recibir un Match por compatibilidad

**Issue:** [#7](https://github.com/ClxNode/KuyayPet/issues/7) · **Rol:** Adoptante · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Must · **Estado:** Pendiente

Como adoptante, quiero recibir un Match cuando exista interés compatible, para saber que puedo continuar con el proceso de contacto.

Criterios de aceptación:

1. El sistema debe permitir identificar cuando existe un interés compatible entre el adoptante y una mascota.

2. **Dado** que el adoptante ha indicado que está interesado en una mascota, **cuando** el responsable también manifieste interés en continuar con el proceso, **entonces** el sistema debe generar un Match.

3. **Dado** que existe un Match entre el adoptante y una mascota, **cuando** se genere la coincidencia, **entonces** el sistema debe notificar al adoptante que se ha producido un Match.

4. **Dado** que el adoptante recibe una notificación de Match, **cuando** acceda a la sección de coincidencias, **entonces** debe poder visualizar la mascota con la que obtuvo el Match.

5. El sistema debe mostrar información básica de la mascota asociada al Match.

6. **Dado** que el adoptante tiene un Match activo, **cuando** seleccione la coincidencia, **entonces** el sistema debe permitirle continuar con el proceso de contacto con el responsable.

7. El Match debe quedar registrado en la cuenta del adoptante para que pueda consultarlo posteriormente.

8. **Dado** que no existe interés compatible, **cuando** el adoptante revise sus posibles coincidencias, **entonces** el sistema no debe generar un Match.

**Puntos:** ✋ Pendiente (Planning Poker)

## HU-08 — Comunicarse con el responsable de la mascota

**Issue:** [#8](https://github.com/ClxNode/KuyayPet/issues/8) · **Rol:** Adoptante · **Prioridad del catálogo:** Alta · **MoSCoW propuesto:** Must · **Estado:** Pendiente

Como adoptante, quiero comunicarme mediante un chat con el responsable de una mascota, para solicitar información y coordinar una posible adopción.

Criterios de aceptación:

1. El sistema debe permitir al adoptante iniciar una conversación con el responsable de una mascota.

2. **Dado** que el adoptante ha seleccionado una mascota en adopción, **cuando** presione la opción de iniciar chat, **entonces** el sistema debe abrir una conversación con el responsable de dicha mascota.

3. **Dado** que existe una conversación entre el adoptante y el responsable, **cuando** el adoptante envíe un mensaje, **entonces** el sistema debe registrar y mostrar el mensaje dentro del chat.

4. **Dado** que el responsable ha enviado un mensaje, **cuando** el adoptante ingrese a la conversación, **entonces** debe poder visualizar el mensaje recibido.

5. **Dado** que el adoptante se encuentra dentro del chat, **cuando** consulte la conversación, **entonces** el sistema debe identificar la mascota relacionada con dicha conversación.

6. El sistema debe mostrar los mensajes enviados y recibidos en orden cronológico.

7. **Dado** que el adoptante necesita información adicional sobre la mascota, **cuando** envíe una consulta mediante el chat, **entonces** el responsable debe poder recibirla y responderla.

8. El adoptante debe poder consultar posteriormente el historial de la conversación para continuar la coordinación de la posible adopción.

9. **Dado** que la adopción ya no continuará, **cuando** la conversación sea finalizada, **entonces** el sistema debe conservar el historial de mensajes para su consulta posterior.

**Puntos:** ✋ Pendiente (Planning Poker)

## HU-09 — Chat entre usuarios interesados en la misma mascota

**Issue:** [#9](https://github.com/ClxNode/KuyayPet/issues/9) · **Rol:** Usuario común · **Prioridad del catálogo:** Baja · **MoSCoW propuesto:** Could · **Estado:** Pendiente

Como usuario común, quiero comunicarme mediante chat con otros usuarios interesados en la misma mascota, para conversar sobre ello y compartir experiencias o detalles del proceso de adopción.

Criterios de aceptación:

1. **Dado** que el usuario se encuentra en el perfil de una mascota, **cuando** selecciona la opción "Unirme al chat de la mascota" o "Iniciar chat", **entonces** el sistema debe abrir la ventana o sección del chat vinculada a esa mascota.

2. **Dado** que el usuario ingresa al chat de la mascota, **cuando** escribe un mensaje y selecciona la opción "Enviar", **entonces** el sistema debe registrar y mostrar el mensaje en tiempo real a los demás usuarios en el chat.

3. **Dado** que otros usuarios interesados escriben en el chat, **cuando** el usuario está activo en la conversación, **entonces** el sistema debe mostrar los nuevos mensajes indicando el nombre del remitente y la hora de envío.

4. **Dado** que el usuario ingresa por primera vez al chat de una mascota, **cuando** carga la pantalla, **entonces** el sistema debe mostrar el historial de mensajes previos de la conversación.

5. **Dado** que no hay mensajes previos en el chat de la mascota, **cuando** el usuario ingresa, **entonces** el sistema debe mostrar un mensaje indicando que no hay mensajes anteriores e invitar a iniciar la conversación.

6. **Dado** que el usuario no tiene una sesión activa en la plataforma, **cuando** intenta acceder al chat de una mascota, **entonces** el sistema debe solicitarle iniciar sesión antes de permitirle enviar o ver mensajes.

7. **Dado** que un usuario ingresa un mensaje vacío o compuesto solo por espacios, **cuando** intenta presionar "Enviar", **entonces** el sistema debe mantener deshabilitado el botón de envío y no procesar el mensaje.

**Puntos:** ✋ Pendiente (Planning Poker)

## HU-10 — Coordinar posible adopción

**Issue:** [#10](https://github.com/ClxNode/KuyayPet/issues/10) · **Rol:** Adoptante · **Prioridad del catálogo:** Alta · **MoSCoW propuesto:** Must · **Estado:** Pendiente

Como adoptante, quiero coordinar una posible adopción con el responsable, para continuar con el proceso.

Criterios de aceptación:

1. **Dado** que el adoptante está visualizando las mascotas disponibles, **cuando** selecciona una mascota para continuar con el proceso de adopción, **entonces** el sistema debe mostrar la opción para coordinar la posible adopción.

2. **Dado** que el adoptante ha seleccionado una mascota, **cuando** solicita coordinar la posible adopción con el responsable, **entonces** el sistema debe permitir enviar una solicitud de coordinación.

3. **Dado** que el adoptante desea coordinar la adopción, **cuando** ingresa una fecha y hora propuesta, **entonces** el sistema debe permitir registrar la fecha y hora para continuar con el proceso.

4. **Dado** que el adoptante ha enviado una solicitud de coordinación, **cuando** la solicitud es registrada correctamente, **entonces** el responsable debe poder recibir la solicitud del adoptante.

5. **Dado** que el adoptante ha enviado una solicitud de coordinación, **cuando** consulta el estado de la solicitud, **entonces** el sistema debe mostrar el estado actual de la solicitud de adopción.

6. **Dado** que el responsable ha respondido a la solicitud de adopción, **cuando** el adoptante consulta su solicitud, **entonces** el sistema debe mostrar si la solicitud fue aceptada o rechazada.

7. **Dado** que el adoptante ha completado correctamente los datos de la solicitud, **cuando** selecciona la opción "Enviar solicitud", **entonces** el sistema debe mostrar un mensaje de confirmación indicando que la solicitud fue enviada.

**Puntos:** ✋ Pendiente (Planning Poker)

## HU-13 — Notificación de interés en mascota

**Issue:** [#13](https://github.com/ClxNode/KuyayPet/issues/13) · **Rol:** Responsable de mascota · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Must · **Estado:** Pendiente

Como responsable de mascota, quiero recibir una notificación cuando un adoptante muestre interés en mi mascota, para poder responderle a tiempo y coordinar el proceso de adopción.

Criterios de aceptación:

1. **Dado** que un adoptante presiona el botón de "Me interesa" o "Solicitar adopción", **cuando** la acción se procesa correctamente, **entonces** el sistema debe enviar inmediatamente una notificación (en la plataforma y/o correo) al responsable de la mascota.

2. **Dado** que el responsable se encuentra navegado en la plataforma, **cuando** recibe una nueva notificación, **entonces** el sistema debe mostrar un indicador visual (icono de campana con contador o emergente) en la barra superior de navegación.

3. **Dado** que el responsable selecciona la notificación recibida, **cuando** hace clic sobre ella, **entonces** el sistema debe redirigirlo directamente al perfil del adoptante interesado o al chat asignado a esa solicitud.

4. **Dado** que el responsable accede a su centro de notificaciones, **cuando** visualiza la lista, **entonces** el sistema debe mostrar el nombre del adoptante, la mascota de interés, la fecha y hora de la interacción, distinguiendo entre notificaciones leídas y no leídas.

5. **Dado** que el responsable marca una notificación como leída, **cuando** actualiza la lista, **entonces** el sistema debe actualizar el contador de notificaciones pendientes en el icono de la barra superior.

**Puntos:** ✋ Pendiente (Planning Poker)

## HU-18 — Historial de mascotas de interés

**Issue:** [#18](https://github.com/ClxNode/KuyayPet/issues/18) · **Rol:** Adoptante · **Prioridad del catálogo:** Baja · **MoSCoW propuesto:** Should · **Estado:** Pendiente

Como adoptante, quiero consultar mi historial de mascotas que indiqué que me gustan, para volver a revisar mis opciones de interés y conocer su estado actual.

Criterios de aceptación:

1. **Dado** que el adoptante ha iniciado sesión, **cuando** ingresa a su perfil, **entonces** el sistema debe mostrar la opción "Historial de interés".

2. **Dado** que el adoptante indicó anteriormente que una mascota le gusta, **cuando** consulta su historial, **entonces** el sistema debe mostrar dicha mascota.

3. **Dado** que existen varias mascotas en el historial, **cuando** se presenta la lista, **entonces** cada registro debe mostrar fotografía, nombre, fecha de interacción y estado actual.

4. **Dado** que una mascota del historial continúa disponible, **cuando** el adoptante la selecciona, **entonces** el sistema debe mostrar su perfil completo.

5. **Dado** que una mascota del historial ya fue adoptada, **cuando** el adoptante consulta el registro, **entonces** el sistema debe mostrarla con el estado "Adoptada".

6. **Dado** que una mascota fue retirada de la plataforma, **cuando** aparece en el historial, **entonces** el sistema debe indicar que su perfil ya no está disponible.

7. **Dado** que el adoptante nunca indicó interés en una mascota, **cuando** consulta esta sección, **entonces** el sistema debe mostrar un mensaje informativo indicando que su historial está vacío.

**Puntos:** ✋ Pendiente (Planning Poker)

## HU-20 — Visualización de compatibilidades

**Issue:** [#20](https://github.com/ClxNode/KuyayPet/issues/20) · **Rol:** Adoptante · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Should · **Estado:** Pendiente

Como adoptante, quiero visualizar mis matches, para revisar las mascotas con las que tengo mayor compatibilidad y tomar una mejor decisión de adopción.

Criterios de aceptación:

1. **Dado** que el adoptante ha iniciado sesión y completado sus preferencias, **cuando** ingresa a la sección "Mis Matches", **entonces** el sistema debe mostrar las mascotas compatibles.

2. **Dado** que existen varias mascotas compatibles, **cuando** se muestran los resultados, **entonces** deben ordenarse desde la mayor hasta la menor compatibilidad.

3. **Dado** que se muestra una mascota compatible, **cuando** el adoptante visualiza su tarjeta, **entonces** el sistema debe presentar su fotografía, información básica y nivel de compatibilidad.

4. **Dado** que el adoptante selecciona una mascota, **cuando** ingresa a su perfil, **entonces** el sistema debe mostrar los criterios principales que originaron la compatibilidad.

5. **Dado** que una mascota compatible deja de estar disponible, **cuando** el adoptante consulta sus matches, **entonces** el sistema debe actualizar o retirar dicha opción.

6. **Dado** que no existen mascotas compatibles, **cuando** el adoptante ingresa a la sección, **entonces** el sistema debe mostrar un mensaje informativo y permitirle modificar sus preferencias.

7. **Dado** que el adoptante todavía no completó sus preferencias, **cuando** intenta consultar sus matches, **entonces** el sistema debe solicitarle completar la información necesaria.

**Puntos:** ✋ Pendiente (Planning Poker)
