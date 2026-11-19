# Sprint 3 (parte b: administración y cierre) — Pruebas

Parte (b) del Sprint 3 «Adopción y cierre del producto». La parte (a) está en [readme.md](./readme.md). Las ramas se llaman `sprint-4/*` por historia: renombrarlas cerraría los PR.

La validación humana es una casilla por HU, debajo de cada video.

## Ejecución automatizada

Videos de todas las HU en Drive: [carpeta videos-hu](https://drive.google.com/open?id=1e3GcYnJlez_F5GLwqA6CveFjX5wRCiQV) (`Gdrive:02-Proyectos/produccion/kuyaypet/videos-hu/`).

Fecha: 2026-10-28. Las capturas y videos salen de specs Playwright (`Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-NN.spec.ts`) que asertan cada criterio.

### HU-14 — Consulta de información sobre adopción

Comando (desde `Codigo_Repositorio/kuyaypet-web`, con `vite preview` en el puerto indicado):

```bash
EVIDENCIAS_DIR=../../Sprint_03/7.Pruebas/evidencias VIDEOS_DIR=<carpeta-videos>/Sprint_03 BASE_URL=http://localhost:4203/ node scripts/record-hu.mjs 14
```

| Criterio | Captura | Resultado automatizado | Ejecución |
|---|---|---|---|
| 1 | [P-HU-14-01-centro-informativo](evidencias/HU-14/P-HU-14-01-centro-informativo.png) | Desde la barra principal, «Guía» abre el centro informativo con requisitos, preguntas frecuentes y consejos. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 2 | [P-HU-14-02-categoria-desplegada](evidencias/HU-14/P-HU-14-02-categoria-desplegada.png) | «Preparar tu hogar» se despliega con su contenido detallado y oculta el de otra categoría. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 3 | [P-HU-14-03-guia-desde-mascota](evidencias/HU-14/P-HU-14-03-guia-desde-mascota.png) | El enlace del perfil de la mascota abre la guía y «Volver» regresa al perfil. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 4 | [P-HU-14-04-buscador-contrato](evidencias/HU-14/P-HU-14-04-buscador-contrato.png) | Buscar «contrato» muestra «Seguimiento post-adopción» y oculta las demás categorías; «vacunas» filtra igual. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |

Video: [HU-14.mp4 en Drive](https://drive.google.com/open?id=1FayJBwq8ulmZnEfJkE1d-7AnUHE2LpjD)

- [ ] Validado por por asignar (la HU no tiene responsable en su issue)

### HU-15 — Recuperación de contraseña

Comando (desde `Codigo_Repositorio/kuyaypet-web`, con `vite preview` en el puerto indicado):

```bash
EVIDENCIAS_DIR=../../Sprint_03/7.Pruebas/evidencias VIDEOS_DIR=<carpeta-videos>/Sprint_03 BASE_URL=http://localhost:4203/ node scripts/record-hu.mjs 15
```

| Criterio | Captura | Resultado automatizado | Ejecución |
|---|---|---|---|
| 1 | [P-HU-15-01-vista-correo](evidencias/HU-15/P-HU-15-01-vista-correo.png) | «¿Olvidaste tu contraseña?» abre la vista para ingresar el correo. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 2 (Simulado) | [P-HU-15-02-bandeja-simulada](evidencias/HU-15/P-HU-15-02-bandeja-simulada.png) | Correo registrado: se muestra la bandeja de correo simulada dentro de la app; no se envía ningún correo real. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 3 | [P-HU-15-03a-correo-no-registrado](evidencias/HU-15/P-HU-15-03a-correo-no-registrado.png) | Correo no registrado: «No encontramos una cuenta con ese correo.» | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 3 | [P-HU-15-03b-formato-invalido](evidencias/HU-15/P-HU-15-03b-formato-invalido.png) | Correo con formato inválido: mensaje de «formato válido». | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 4 | [P-HU-15-04a-minimo-8-caracteres](evidencias/HU-15/P-HU-15-04a-minimo-8-caracteres.png) | Contraseña de menos de 8 caracteres: error y no avanza. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 4 | [P-HU-15-04b-no-coinciden](evidencias/HU-15/P-HU-15-04b-no-coinciden.png) | Confirmación distinta: error «no coinciden». | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 5 | [P-HU-15-05-contrasena-actualizada](evidencias/HU-15/P-HU-15-05-contrasena-actualizada.png) | Mensaje «Contraseña actualizada», redirección a «Iniciar sesión» e ingreso con la nueva contraseña. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |

Video: [HU-15.mp4 en Drive](https://drive.google.com/open?id=1jd6YwpPXVuIRODZgbCQHVhgmRE4nNBH4)

- [ ] Validado por por asignar (la HU no tiene responsable en su issue)

### HU-22 — Gestionar usuarios

Comando (desde `Codigo_Repositorio/kuyaypet-web`, con `vite preview` en el puerto indicado):

```bash
EVIDENCIAS_DIR=../../Sprint_03/7.Pruebas/evidencias VIDEOS_DIR=<carpeta-videos>/Sprint_03 BASE_URL=http://localhost:4203/ node scripts/record-hu.mjs 22
```

| Criterio | Captura | Resultado automatizado | Ejecución |
|---|---|---|---|
| 1 | [P-HU-22-01-lista-usuarios](evidencias/HU-22/P-HU-22-01-lista-usuarios.png) | El módulo de usuarios lista los usuarios registrados. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 2 | [P-HU-22-02-informacion-usuario](evidencias/HU-22/P-HU-22-02-informacion-usuario.png) | Al seleccionar un usuario se muestra su información. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 3 | [P-HU-22-03-campos-editables](evidencias/HU-22/P-HU-22-03-campos-editables.png) | Los campos Nombre y Distrito son editables. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 4 | [P-HU-22-04-datos-persistidos](evidencias/HU-22/P-HU-22-04-datos-persistidos.png) | Tras guardar y recargar, los datos modificados persisten. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 5 | [P-HU-22-05-cuenta-inactiva](evidencias/HU-22/P-HU-22-05-cuenta-inactiva.png) | «Desactivar usuario» pide confirmación y deja la cuenta en estado Inactiva. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 6 | [P-HU-22-06-login-bloqueado](evidencias/HU-22/P-HU-22-06-login-bloqueado.png) | La cuenta desactivada no puede iniciar sesión. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 7 | [P-HU-22-07a-mensaje-edicion](evidencias/HU-22/P-HU-22-07a-mensaje-edicion.png) | Mensaje «Cambios guardados» tras editar. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 7 | [P-HU-22-07b-mensaje-desactivacion](evidencias/HU-22/P-HU-22-07b-mensaje-desactivacion.png) | Mensaje «fue desactivado» tras desactivar. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |

Video: [HU-22.mp4 en Drive](https://drive.google.com/open?id=1RIhlsLFuK_z2x2BWHeI1aXOUWR41zn_Y)

- [ ] Validado por por asignar (la HU no tiene responsable en su issue)

### HU-23 — Revisar publicaciones de mascotas

Comando (desde `Codigo_Repositorio/kuyaypet-web`, con `vite preview` en el puerto indicado):

```bash
EVIDENCIAS_DIR=../../Sprint_03/7.Pruebas/evidencias VIDEOS_DIR=<carpeta-videos>/Sprint_03 BASE_URL=http://localhost:4203/ node scripts/record-hu.mjs 23
```

| Criterio | Captura | Resultado automatizado | Ejecución |
|---|---|---|---|
| 1 | [P-HU-23-01-lista-publicaciones](evidencias/HU-23/P-HU-23-01-lista-publicaciones.png) | El módulo de publicaciones lista las publicaciones registradas. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 2 | [P-HU-23-02-detalle-publicacion](evidencias/HU-23/P-HU-23-02-detalle-publicacion.png) | Al seleccionar una mascota se muestra su información registrada. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 3 | [P-HU-23-03-datos-caracteristicas](evidencias/HU-23/P-HU-23-03-datos-caracteristicas.png) | El detalle muestra especie, edad, sexo, tamaño, distrito y salud. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 4 | [P-HU-23-04-campos-editables](evidencias/HU-23/P-HU-23-04-campos-editables.png) | «Sobre mí» y «Raza» son editables. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 5 | [P-HU-23-05-cambios-persistidos](evidencias/HU-23/P-HU-23-05-cambios-persistidos.png) | Tras guardar y recargar, los cambios persisten y se ven en la lista. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 6 | [P-HU-23-06-mensaje-confirmacion](evidencias/HU-23/P-HU-23-06-mensaje-confirmacion.png) | Mensaje «Cambios guardados» al actualizar. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |

Video: [HU-23.mp4 en Drive](https://drive.google.com/open?id=1SCUFOdsUiVHxRLo3bru4Iku0Z2_oOqrD)

- [X] Validado por kevinesty 

### HU-24 — Aprobar o rechazar publicaciones

Comando (desde `Codigo_Repositorio/kuyaypet-web`, con `vite preview` en el puerto indicado):

```bash
EVIDENCIAS_DIR=../../Sprint_03/7.Pruebas/evidencias VIDEOS_DIR=<carpeta-videos>/Sprint_03 BASE_URL=http://localhost:4203/ node scripts/record-hu.mjs 24
```

| Criterio | Captura | Resultado automatizado | Ejecución |
|---|---|---|---|
| 1 | [P-HU-24-01-pendientes-de-revision](evidencias/HU-24/P-HU-24-01-pendientes-de-revision.png) | El panel muestra las publicaciones pendientes de revisión. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 2 | [P-HU-24-02-informacion-mascota](evidencias/HU-24/P-HU-24-02-informacion-mascota.png) | Al seleccionar una pendiente se abre la información de la mascota. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 3 | [P-HU-24-03-confirmar-aprobacion](evidencias/HU-24/P-HU-24-03-confirmar-aprobacion.png) | «Aprobar» solicita confirmación (¿Aprobar a Salem?); cancelar la deja pendiente. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 4 | [P-HU-24-04-estado-aprobada](evidencias/HU-24/P-HU-24-04-estado-aprobada.png) | Confirmada la aprobación, el estado queda «Aprobada». | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 5 | [P-HU-24-05-motivo-rechazo](evidencias/HU-24/P-HU-24-05-motivo-rechazo.png) | «Rechazar» permite indicar el motivo y lo exige. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 6 | [P-HU-24-06-estado-rechazada](evidencias/HU-24/P-HU-24-06-estado-rechazada.png) | Confirmado el rechazo, el estado queda «Rechazada» con su motivo. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 7 | [P-HU-24-07a-mensaje-aprobada](evidencias/HU-24/P-HU-24-07a-mensaje-aprobada.png) | Mensaje de confirmación al aprobar. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 7 | [P-HU-24-07b-mensaje-rechazada](evidencias/HU-24/P-HU-24-07b-mensaje-rechazada.png) | Mensaje de confirmación al rechazar. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |

Video: [HU-24.mp4 en Drive](https://drive.google.com/open?id=1YP7kkHNERC0KNHOCnfOQif9c6WOTo080)

- [ ] Validado por por asignar (la HU no tiene responsable en su issue)

### HU-25 — Desactivar cuentas de usuarios

Comando (desde `Codigo_Repositorio/kuyaypet-web`, con `vite preview` en el puerto indicado):

```bash
EVIDENCIAS_DIR=../../Sprint_03/7.Pruebas/evidencias VIDEOS_DIR=<carpeta-videos>/Sprint_03 BASE_URL=http://localhost:4203/ node scripts/record-hu.mjs 25
```

| Criterio | Captura | Resultado automatizado | Ejecución |
|---|---|---|---|
| 1 | [P-HU-25-01-lista-usuarios](evidencias/HU-25/P-HU-25-01-lista-usuarios.png) | El módulo de usuarios lista los usuarios registrados. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 2 | [P-HU-25-02-informacion-y-estado](evidencias/HU-25/P-HU-25-02-informacion-y-estado.png) | Al seleccionar un usuario se muestra su cuenta y su estado actual. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 3 | [P-HU-25-03-confirmar-desactivacion](evidencias/HU-25/P-HU-25-03-confirmar-desactivacion.png) | «Desactivar usuario» solicita confirmación. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 4 | [P-HU-25-04-estado-inactiva](evidencias/HU-25/P-HU-25-04-estado-inactiva.png) | Confirmada la acción, el estado pasa a «Inactiva». | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 5 | [P-HU-25-05-login-bloqueado](evidencias/HU-25/P-HU-25-05-login-bloqueado.png) | La cuenta inactiva no puede iniciar sesión. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 6 | [P-HU-25-06-mensaje-desactivado](evidencias/HU-25/P-HU-25-06-mensaje-desactivado.png) | Mensaje «fue desactivado» al terminar. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 7 | [P-HU-25-07-cuenta-ya-inactiva](evidencias/HU-25/P-HU-25-07-cuenta-ya-inactiva.png) | Una cuenta ya inactiva informa «La cuenta ya está inactiva» y no ofrece desactivar. El criterio está truncado en el PDF («…ya se encuentra»). | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |

Video: [HU-25.mp4 en Drive](https://drive.google.com/open?id=1B11QmebfOXgPh8g4X95LqsiWsow3eVqG)

- [ ] Validado por por asignar (la HU no tiene responsable en su issue)

### HU-26 — Gestionar información inapropiada (criterios del issue #26; el PDF no incluye HU-26)

Comando (desde `Codigo_Repositorio/kuyaypet-web`, con `vite preview` en el puerto indicado):

```bash
EVIDENCIAS_DIR=../../Sprint_03/7.Pruebas/evidencias VIDEOS_DIR=<carpeta-videos>/Sprint_03 BASE_URL=http://localhost:4203/ node scripts/record-hu.mjs 26
```

| Criterio | Captura | Resultado automatizado | Ejecución |
|---|---|---|---|
| 1 (issue) | [P-HU-26-01a-publicacion-ocultada](evidencias/HU-26/P-HU-26-01a-publicacion-ocultada.png) | «Ocultar publicación» desde un reporte lo deja Resuelto. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 1 (issue) | [P-HU-26-01b-cuenta-desactivada](evidencias/HU-26/P-HU-26-01b-cuenta-desactivada.png) | «Desactivar cuenta» desde un reporte lo deja Resuelto. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 1 (issue) | [P-HU-26-01c-publicacion-oculta-en-buscar](evidencias/HU-26/P-HU-26-01c-publicacion-oculta-en-buscar.png) | El adoptante ya no ve la publicación oculta en /buscar; la cuenta desactivada no inicia sesión. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |
| 2 (issue) | [P-HU-26-02-adoptante-rechazado](evidencias/HU-26/P-HU-26-02-adoptante-rechazado.png) | Un usuario sin rol admin es redirigido y no ve las acciones de retiro. | ✅ Pasa (spec de evidencias, 28-oct; `tests/criterios` re-ejecutado en verde el 19-nov) |

Video: [HU-26.mp4 en Drive](https://drive.google.com/open?id=1fy1FNGqc460AXRTDZNmisBMl1oHKQ4lP)

- [ ] Validado por por asignar (la HU no tiene responsable en su issue)
