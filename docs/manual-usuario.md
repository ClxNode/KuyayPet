# Manual de usuario — KuyayPet

[← Volver a la presentación](../readme.md) · [Documentación técnica](./documentacion-tecnica.md) · [Historias de usuario](./historias-de-usuario.md)

- **Aplicación:** https://firebrick-cod-910257.hostingersite.com/
- **Manual dentro de la aplicación:** https://firebrick-cod-910257.hostingersite.com/manual/
- **Versión desplegada al 19-nov-2026:** `v0.3.1-sprint2`. Incluye lo de los Sprints 1 y 2; **no incluye** los arreglos del Sprint 3. Ver [despliegue](./despliegue.md).

Este manual explica, por rol, cómo realizar las tareas principales. Las capturas son las evidencias de las pruebas automatizadas (`Sprint_0N/7.Pruebas/evidencias/HU-NN/`), tomadas en pantalla de celular (390×844).

> **Capturas de la parte (b) del Sprint 3** (HU-14, 15, 22 a 26): están en `Sprint_03/7.Pruebas/evidencias/` y llegan con el PR [#95](https://github.com/ClxNode/KuyayPet/pull/95), que sigue abierto al 19-nov. Los enlaces a esas imágenes se ven rotos hasta que se fusione.

## 0. Antes de empezar

KuyayPet es un **prototipo sin servidor**: los datos (cuentas, mascotas, chats) se guardan en el navegador que uses. Lo que registres en un equipo no lo ve nadie en otro.

**Cuentas de demostración.** Son datos públicos de prueba, no personas reales.

| Rol | Cómo entrar |
|---|---|
| Adoptante | En la pantalla de inicio, botón **Adoptante** (bajo "Probar la demo como…"), o `adoptante@kuyaypet.pe` |
| Responsable | En la pantalla de inicio, botón **Responsable**, o `responsable@kuyaypet.pe` |
| Administrador | Iniciar sesión con `admin@kuyaypet.pe` y la contraseña `kuyay2026` |

La contraseña de las tres cuentas de demostración es `kuyay2026`. En escritorio aparece además el **modo presentador** (tour guiado, cambio de rol y pantalla dividida con adoptante y responsable lado a lado).

**Qué es simulado.** (1) Las respuestas del responsable en el chat son mensajes de plantilla, no hay una persona al otro lado (HU-08 criterios 4 y 7). (2) El correo de recuperación de contraseña no se envía: se lee en una "bandeja de correo simulada" dentro de la propia aplicación (HU-15). (3) "Continuar con Google" no verifica la identidad. Detalle en [pruebas](./pruebas.md#31-fuera-de-alcance-por-no-haber-backend).

## 1. Visitante (sin cuenta)

### 1.1. Crear una cuenta (HU-01)

1. En la pantalla de inicio, pulsa **Crear cuenta**.
2. Completa nombre, correo y contraseña (mínimo 8 caracteres) y repítela.
3. Pulsa **Registrarse**. Si falta un dato, el correo no tiene formato válido, ya está registrado o la contraseña es corta, aparece un aviso y no se crea la cuenta.
4. Al terminar, se abre el cuestionario de preferencias (ver 2.1).

| Campos obligatorios | Correo duplicado | Cuenta creada |
|---|---|---|
| ![Campos obligatorios](../Sprint_01/7.Pruebas/evidencias/HU-01/P-HU-01-01-campos-obligatorios.png) | ![Correo duplicado](../Sprint_01/7.Pruebas/evidencias/HU-01/P-HU-01-03-correo-duplicado.png) | ![Cuenta creada](../Sprint_01/7.Pruebas/evidencias/HU-01/P-HU-01-04-cuenta-creada.png) |

### 1.2. Recuperar la contraseña (HU-15)

1. En **Iniciar sesión**, pulsa la opción de recuperar contraseña.
2. Escribe tu correo y pulsa **Enviar enlace de recuperación**.
3. Abre **la bandeja de entrada simulada**, copia el código de 6 dígitos (o pulsa "Usar código") y escribe una contraseña nueva de al menos 8 caracteres, dos veces.
4. Pulsa **Cambiar contraseña** e inicia sesión con la nueva.

![Bandeja simulada](../Sprint_03/7.Pruebas/evidencias/HU-15/P-HU-15-02-bandeja-simulada.png)

### 1.3. Guía de adopción responsable (HU-14)

La guía es pública y se abre desde **Perfil → Guía de adopción** o desde un perfil de mascota. Tiene categorías desplegables y un buscador ("Buscar en la guía").

![Centro informativo](../Sprint_03/7.Pruebas/evidencias/HU-14/P-HU-14-01-centro-informativo.png)

## 2. Adoptante

Barra inferior: **Descubrir**, **Buscar**, **Matches**, **Chats**, **Perfil**.

### 2.1. Indicar tus preferencias

Tras el registro, el cuestionario (varios pasos con **Continuar**) define qué tan compatible es cada mascota contigo. Termina con **Ver mis mascotas compatibles**. Puedes cambiarlas después en **Perfil → Mis preferencias**.

### 2.2. Ver mascotas y su perfil (HU-02, HU-03)

1. En **Descubrir** se ve una pila de tarjetas; en **Buscar**, la lista de mascotas disponibles.
2. Toca una mascota para abrir su perfil: foto, nombre, especie, raza, edad, ubicación e información adicional. Las mascotas adoptadas o en revisión no aparecen como disponibles.

| Lista de disponibles | Perfil detallado |
|---|---|
| ![Lista](../Sprint_01/7.Pruebas/evidencias/HU-02/P-06-lista-disponibles.png) | ![Perfil](../Sprint_01/7.Pruebas/evidencias/HU-03/P-HU-03-01-perfil-detallado.png) |

### 2.3. Filtrar y buscar por cercanía (HU-04, HU-05)

1. En **Buscar**, abre los filtros, elige especie u otras opciones y pulsa aplicar. Los filtros se combinan.
2. Para cercanía, indica tu ubicación y el radio en km; los resultados muestran la distancia. La vista **Mapa** muestra marcadores dentro del radio.
3. Para volver a ver todo, limpia los filtros.

| Filtros | Resultados | Radio en km |
|---|---|---|
| ![Filtros](../Sprint_02/7.Pruebas/evidencias/HU-04/P-HU-04-01-opciones-de-filtrado.png) | ![Varios filtros](../Sprint_02/7.Pruebas/evidencias/HU-04/P-HU-04-04-varios-filtros.png) | ![Radio](../Sprint_02/7.Pruebas/evidencias/HU-05/P-HU-05-02-radio-en-km.png) |

### 2.4. Guardar favoritos (HU-17)

Toca el corazón de una mascota para guardarla; vuelve a tocarlo para quitarla. La lista está en **Perfil → Favoritos** y se conserva al volver a iniciar sesión.

![Lista de favoritos](../Sprint_02/7.Pruebas/evidencias/HU-17/P-HU-17-04-lista-de-favoritos.png)

### 2.5. Indicar interés y obtener un Match (HU-06, HU-07, HU-20)

1. En **Descubrir** o en el perfil de una mascota, pulsa **Me gusta** o **No me gusta**. Aparece una confirmación con el nombre de la mascota y puedes seguir con la siguiente.
2. El responsable recibe el aviso y decide. Si acepta, aparece **¡Es un Match!** y recibes una notificación.
3. En **Matches** ves tus mascotas compatibles ordenadas de mayor a menor compatibilidad, con los criterios de compatibilidad. Si no hay, el sistema te invita a editar tus preferencias.

| Me gusta / No me gusta | Match | Mis Matches |
|---|---|---|
| ![Opciones](../Sprint_03/7.Pruebas/evidencias/HU-06/P-HU-06-01-opciones-me-gusta-no-me-gusta.png) | ![Notificación de Match](../Sprint_03/7.Pruebas/evidencias/HU-07/P-HU-07-03-notificacion-de-match.png) | ![Matches](../Sprint_03/7.Pruebas/evidencias/HU-20/P-HU-20-01-mis-matches-compatibles.png) |

### 2.6. Conversar con el responsable (HU-08, HU-09)

1. Tras un Match, pulsa **Continuar al chat**, o abre **Chats**. El chat identifica la mascota.
2. Escribe en el campo **Mensaje** y pulsa **Enviar**; no se puede enviar un mensaje vacío. La respuesta del responsable es simulada.
3. También puedes unirte al **chat grupal de una mascota** para conversar con otros interesados.
4. El responsable o tú pueden finalizar la conversación; el historial se conserva.

| Chat abierto | Mensaje enviado | Chat grupal |
|---|---|---|
| ![Chat](../Sprint_03/7.Pruebas/evidencias/HU-08/P-HU-08-02-chat-abierto-con-responsable.png) | ![Enviado](../Sprint_03/7.Pruebas/evidencias/HU-08/P-HU-08-03-mensaje-enviado.png) | ![Grupal](../Sprint_03/7.Pruebas/evidencias/HU-09/P-HU-09-01-unirme-al-chat-de-la-mascota.png) |

### 2.7. Coordinar la adopción (HU-10)

1. Desde el chat, pulsa **Coordinar adopción**.
2. Propón fecha y hora y pulsa **Enviar solicitud**. Aparece **¡Solicitud enviada!** y el estado queda *pendiente*.
3. Cuando el responsable responda, verás la solicitud aceptada o rechazada.

![Formulario de solicitud](../Sprint_03/7.Pruebas/evidencias/HU-10/P-HU-10-02-formulario-de-solicitud.png)

### 2.8. Historial de interés (HU-18)

**Perfil → Historial de interés** lista las mascotas a las que diste "Me gusta", con foto, nombre, fecha y estado actual (disponible, adoptada o retirada).

![Historial](../Sprint_03/7.Pruebas/evidencias/HU-18/P-HU-18-03-foto-nombre-fecha-y-estado.png)

### 2.9. Cerrar sesión (HU-21)

**Perfil → Cerrar sesión** y confirma. Vuelves a la pantalla de inicio de sesión y las páginas privadas dejan de abrirse.

![Confirmación de cierre](../Sprint_02/7.Pruebas/evidencias/HU-21/P-HU-21-02-confirmacion.png)

## 3. Responsable de mascotas

Barra inferior: **Mis mascotas**, **Chats**, **Avisos**, **Perfil**.

### 3.1. Registrar una mascota (HU-11, HU-16)

1. En **Mis mascotas**, pulsa el botón de nueva mascota.
2. Completa los tres pasos (datos, características, fotos y etiquetas). Se aceptan solo imágenes; otros formatos se rechazan con "Formato no permitido".
3. Revisa la vista previa y confirma. La mascota queda **En revisión** y no es visible para los adoptantes hasta que el administrador la apruebe.

| Formulario | Mascota registrada | Formato no permitido |
|---|---|---|
| ![Formulario](../Sprint_02/7.Pruebas/evidencias/HU-11/P-HU-11-01-formulario-de-registro.png) | ![Registrada](../Sprint_02/7.Pruebas/evidencias/HU-11/P-HU-11-03-mascota-registrada.png) | ![Formato](../Sprint_02/7.Pruebas/evidencias/HU-16/P-HU-16-04-formato-no-permitido.png) |

> HU-11 criterio 6 figura como **No cumple** en la [matriz de trazabilidad](./matriz-trazabilidad.md): la mascota recién registrada queda *En revisión* y no aparece de inmediato como disponible.

### 3.2. Editar una mascota propia (HU-12)

Abre la mascota desde **Mis mascotas**, modifica los datos y pulsa **Guardar cambios** (o cancela para descartar). Solo puedes editar mascotas que registraste tú.

![Formulario prellenado](../Sprint_02/7.Pruebas/evidencias/HU-12/P-HU-12-01-formulario-prellenado.png)

### 3.3. Recibir avisos y responder interés (HU-13, HU-07)

1. **Avisos** (campana) muestra el contador de no leídas y la lista de leídas y no leídas.
2. Al tocar un aviso de interés se abre el perfil del adoptante.
3. En **Mis mascotas** puedes aceptar el interés (se crea el Match) o rechazarlo. También respondes las solicitudes de adopción (HU-10).

| Aviso con contador | Perfil del adoptante |
|---|---|
| ![Campana](../Sprint_03/7.Pruebas/evidencias/HU-13/P-HU-13-02-campana-con-contador.png) | ![Perfil adoptante](../Sprint_03/7.Pruebas/evidencias/HU-13/P-HU-13-03-redirige-al-perfil-del-adoptante.png) |

### 3.4. Marcar una mascota como adoptada (HU-19)

En **Mis mascotas**, pulsa **Marcar como adoptada** y confirma. La mascota pasa a *Adoptada*, deja de aparecer como disponible y no admite nuevas solicitudes.

![Estado adoptada](../Sprint_02/7.Pruebas/evidencias/HU-19/P-HU-19-04-estado-adoptada.png)

## 4. Administrador

Barra inferior: **Panel**, **Avisos**, **Perfil**. El panel tiene secciones de usuarios, publicaciones y reportes. Estas funciones corresponden a la parte (b) del Sprint 3 (PR abiertos #88–#94 al 19-nov).

### 4.1. Gestionar usuarios (HU-22) y desactivar cuentas (HU-25)

1. **Usuarios** lista las cuentas; busca por nombre o correo.
2. Abre una cuenta para ver su información y estado, y edítala con **Guardar cambios**.
3. **Desactivar usuario** pide confirmación. La cuenta desactivada no puede iniciar sesión; **Reactivar usuario** la habilita de nuevo. Si ya está inactiva, el sistema lo informa.

| Lista de usuarios | Confirmar desactivación | Login bloqueado |
|---|---|---|
| ![Usuarios](../Sprint_03/7.Pruebas/evidencias/HU-22/P-HU-22-01-lista-usuarios.png) | ![Confirmar](../Sprint_03/7.Pruebas/evidencias/HU-25/P-HU-25-03-confirmar-desactivacion.png) | ![Bloqueado](../Sprint_03/7.Pruebas/evidencias/HU-25/P-HU-25-05-login-bloqueado.png) |

### 4.2. Revisar publicaciones (HU-23) y aprobar o rechazar (HU-24)

1. **Publicaciones** lista las mascotas; filtra por estado.
2. Abre una para ver sus datos y características; puedes editarla y guardar.
3. **Aprobar** (con confirmación): pasa a *Aprobada* y es visible para los adoptantes.
4. **Rechazar**: exige escribir el **motivo del rechazo**; pasa a *Rechazada* y el responsable ve el estado.

| Lista | Confirmar aprobación | Motivo de rechazo |
|---|---|---|
| ![Publicaciones](../Sprint_03/7.Pruebas/evidencias/HU-23/P-HU-23-01-lista-publicaciones.png) | ![Aprobar](../Sprint_03/7.Pruebas/evidencias/HU-24/P-HU-24-03-confirmar-aprobacion.png) | ![Rechazo](../Sprint_03/7.Pruebas/evidencias/HU-24/P-HU-24-05-motivo-rechazo.png) |

### 4.3. Atender reportes (HU-26)

1. **Reportes** lista las denuncias; abre una.
2. Para retirar contenido inapropiado: **Ocultar** la publicación reportada (sale de Descubrir y queda rechazada) o **Desactivar** la cuenta responsable.
3. Si no procede, **Descartar reporte** con una nota de resolución.
4. Un usuario sin rol de administrador no puede abrir estas pantallas.

| Publicación ocultada | Adoptante sin acceso |
|---|---|
| ![Ocultada](../Sprint_03/7.Pruebas/evidencias/HU-26/P-HU-26-01a-publicacion-ocultada.png) | ![Rechazado](../Sprint_03/7.Pruebas/evidencias/HU-26/P-HU-26-02-adoptante-rechazado.png) |

## 5. Si algo no funciona

- **No veo mis datos:** los datos están en este navegador. Si borras los datos del sitio o cambias de navegador, empiezas con los datos de demostración.
- **Reiniciar la demo:** en escritorio, el panel de presentador tiene la opción de reiniciar.
- **Una cuenta no entra:** puede estar desactivada por el administrador (aviso "cuenta desactivada").
- **La aplicación no se actualiza:** al ser una aplicación instalable (PWA), recarga la página una vez más para tomar la versión nueva.
