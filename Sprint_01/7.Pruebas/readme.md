# 7. Pruebas — Sprint 1

Cada responsable registra aquí la prueba de su historia de usuario contra los criterios de aceptación. Los estados se cambian a `Aprobado` o `Fallido` solo después de ejecutar la prueba y observar el resultado; no se registran resultados anticipados.

El código a probar es el prototipo v0.3 en [`Codigo_Repositorio/kuyaypet-web/`](../../Codigo_Repositorio/kuyaypet-web/), desplegado en https://firebrick-cod-910257.hostingersite.com/#/. Las pruebas automáticas del prototipo no reemplazan esta validación manual.

## Índice

| HU | Responsables | Estado |
|---|---|---|
| [HU-01 — Registro de usuario](#hu-01--registro-de-usuario) | Dylan Quispe · Joseph-L-Q | Pendiente |
| [HU-02 — Visualización de mascotas disponibles](#hu-02--pruebas-funcionales-visualización-de-mascotas-disponibles) | Gael Milla (datos de prueba) · DevBrad · kevinesty | Pendiente |
| [HU-03 — Ver perfil de una mascota](#hu-03--ver-perfil-de-una-mascota) | IchiSieben · kevinesty | Criterios 1-2 aprobados · criterio 3 pendiente (#33) |

## HU-01 — Registro de usuario

- **Responsables:** Dylan Quispe (requisitos y criterios) · Joseph-L-Q (ejecución de pruebas)
- **Fecha planificada:** 16 de octubre de 2026
- **Estado:** Pendiente de ejecución

### Criterios de aceptación a verificar

> Propuesta, pendiente de validar con el equipo (ver issue de la HU).

| ID | Criterio | Resultado observado | Estado |
|---|---|---|---|
| P-HU-01-01 | Campos obligatorios vacíos: el sistema indica qué falta y no crea la cuenta | Por completar | Pendiente |
| P-HU-01-02 | Correo con formato inválido o contraseña que no cumple requisitos: se muestra el error y no se crea la cuenta | Por completar | Pendiente |
| P-HU-01-03 | Correo ya registrado: se informa y no se crea una cuenta duplicada | Por completar | Pendiente |
| P-HU-01-04 | Datos válidos: se crea la cuenta y se confirma el registro | Por completar | Pendiente |

### Evidencias

**Enlaces a evidencias:** Por completar.

### Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | Sin incidencias registradas hasta ejecutar las pruebas | — | Pendiente de validación |

## HU-02 — Pruebas funcionales: Visualización de mascotas disponibles

### 1. Información general

- **Proyecto:** KuyayPet
- **Sprint:** Sprint 1 — Semana 9
- **Historia de usuario:** HU-02
- **Responsable propuesto:** DevBrad
- **Fecha planificada:** 16 de octubre de 2026
- **Estado:** Pendiente de ejecución

### 2. Objetivo

Verificar que la funcionalidad de visualización de mascotas de KuyayPet permita consultar las mascotas disponibles para adopción, mostrando correctamente sus datos principales y su disponibilidad.

También se comprobará que el sistema presente un mensaje informativo cuando no existan mascotas disponibles.

### 3. Historia de usuario

**Como** adoptante, quiero visualizar las mascotas disponibles para adopción, para conocer las opciones y seleccionar las de mi interés.

### 4. Criterios de aceptación

La funcionalidad deberá cumplir los siguientes criterios:

1. Mostrar una lista de mascotas disponibles para adopción.
2. Mostrar la fotografía, el nombre, la especie, la edad y la ubicación de cada mascota.
3. Permitir consultar la información detallada de una mascota seleccionada.
4. Mostrar únicamente mascotas disponibles para adopción.
5. Presentar los datos registrados por el responsable de la mascota.
6. Mostrar un mensaje informativo cuando no existan mascotas disponibles.
7. Adaptar correctamente la visualización a computadoras y dispositivos móviles.

### 5. Casos de prueba

#### P-06: Lista de mascotas disponibles

**Objetivo:** Comprobar que el sistema muestre únicamente las mascotas disponibles para adopción.

- **Procedimiento:**
  1. Ingresar a la sección de mascotas disponibles.
  2. Revisar las mascotas mostradas.
  3. Comparar los registros visibles con su estado de disponibilidad.
- **Resultado esperado:** El sistema muestra únicamente las mascotas disponibles para adopción.
- **Resultado observado:** Por completar después de ejecutar la prueba.
- **Estado:** Pendiente.

#### P-07: Verificación de campos visibles

**Objetivo:** Comprobar que cada mascota muestre sus datos principales.

- **Procedimiento:**
  1. Abrir la lista de mascotas disponibles.
  2. Seleccionar una mascota para revisar sus datos.
  3. Verificar la fotografía, el nombre, la especie, la edad y la ubicación.
- **Resultado esperado:** Se muestran correctamente todos los campos requeridos.
- **Resultado observado:** Por completar después de ejecutar la prueba.
- **Estado:** Pendiente.

#### P-08: Lista sin mascotas disponibles

**Objetivo:** Verificar el comportamiento del sistema cuando no existan mascotas disponibles para adopción.

- **Procedimiento:**
  1. Preparar un escenario de prueba sin mascotas disponibles.
  2. Ingresar a la sección de mascotas.
  3. Observar el mensaje presentado por el sistema.
- **Resultado esperado:** Se muestra un mensaje informativo indicando que no hay mascotas disponibles.
- **Resultado observado:** Por completar después de ejecutar la prueba.
- **Estado:** Pendiente.

#### P-09: Adaptación a computadora y dispositivos móviles

**Objetivo:** Comprobar que la lista de mascotas se visualice correctamente en diferentes tamaños de pantalla.

- **Procedimiento:**
  1. Abrir la sección de mascotas desde una computadora.
  2. Revisar la distribución de los elementos.
  3. Abrir la misma sección desde un dispositivo móvil o mediante las herramientas de visualización adaptable del navegador.
  4. Comprobar que los campos sean legibles y accesibles.
- **Resultado esperado:** La lista se adapta correctamente a ambos tipos de pantalla.
- **Resultado observado:** Por completar después de ejecutar la prueba.
- **Estado:** Pendiente.

### 6. Registro de resultados

| ID | Caso de prueba | Resultado esperado | Resultado observado | Estado |
|---|---|---|---|---|
| P-06 | Lista de mascotas disponibles | Solo se muestran mascotas disponibles | Por completar | Pendiente |
| P-07 | Campos visibles | Se muestran los cinco campos requeridos | Por completar | Pendiente |
| P-08 | Lista sin mascotas disponibles | Se muestra un mensaje informativo | Por completar | Pendiente |
| P-09 | Adaptación de pantalla | La lista se adapta a computadora y móvil | Por completar | Pendiente |

**Nota:** Los estados deberán actualizarse a `Aprobado` o `Fallido` únicamente después de ejecutar cada prueba y comprobar su resultado.

### 7. Datos de prueba

Para ejecutar las pruebas se podrán utilizar registros de mascotas identificados como datos de prueba.

Se recomienda considerar los siguientes escenarios:

- Mascotas disponibles para adopción.
- Mascotas registradas que no estén disponibles.
- Una lista sin mascotas disponibles.
- Registros con fotografía y todos los campos requeridos.

Los datos de prueba deben identificarse claramente y no deben presentarse como evidencia de que otras historias de usuario ya fueron implementadas.

### 8. Evidencias

Después de ejecutar las pruebas, se deberán incorporar evidencias que permitan verificar los resultados.

- **P-06:** Captura de la lista de mascotas disponibles.
- **P-07:** Captura de los campos visibles de una mascota.
- **P-08:** Captura del mensaje mostrado cuando no hay mascotas disponibles.
- **P-09:** Capturas de la visualización en computadora y móvil.

**Enlaces a evidencias:** Por completar.

### 9. Incidencias encontradas

Registrar los errores o comportamientos inesperados detectados durante la ejecución.

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | Sin incidencias registradas hasta ejecutar las pruebas | — | Pendiente de validación |

### 10. Conclusión

La ejecución de estos casos de prueba permitirá verificar si la funcionalidad HU-02 cumple con los criterios de aceptación establecidos para el Sprint 1 de KuyayPet.

La historia de usuario se considerará validada cuando las pruebas correspondientes hayan sido ejecutadas, los resultados sean satisfactorios y existan evidencias verificables.

**Estado final:** Pendiente de ejecución y validación.

## HU-03 — Ver perfil de una mascota

- **Responsables:** IchiSieben (perfil y consistencia, tarea #32) · kevinesty (adaptación a computadora y móvil, tarea #33)
- **Fecha de ejecución:** 16 de octubre de 2026
- **Ejecutada por:** IchiSieben
- **Versión probada:** prototipo v0.3 (`Codigo_Repositorio/kuyaypet-web`, rama `feature/prototipo-v0.3`), servido localmente con `vite preview`
- **Estado:** Criterios 1 y 2 aprobados · criterio 3 pendiente (tarea #33)

### Qué se probó

Con la cuenta demo de adoptante se abrió `/buscar`, se seleccionó la tarjeta de cada mascota y se comparó lo mostrado en la tarjeta con su perfil. Se eligieron tres mascotas de los datos semilla (`src/data/seed/pets.json`) que cubren los casos de datos opcionales (`story` = "Mi historia", `specialCare` = "Cuidados especiales"):

| Mascota | Datos opcionales en la semilla |
|---|---|
| `p01` Porotopo | Historia y cuidados especiales |
| `p02` Max | Solo historia |
| `p03` Toby | Ninguno |

La verificación se automatizó con Playwright (`verify-hu03.spec.ts`, conservado por IchiSieben en su repositorio de herramientas `kuyaypet-scrum-tools` junto con los pasos para repetirla) en un viewport de 390×844. Para cada mascota se registraron los textos de la tarjeta y del perfil, los errores de consola y las capturas.

### Criterios de aceptación verificados

> Propuesta, pendiente de validar con el equipo (ver issue #3).

| ID | Criterio | Resultado observado | Estado |
|---|---|---|---|
| P-HU-03-01 | Al seleccionar una mascota se muestra el perfil que le corresponde | Las tres tarjetas abren `#/mascota/p01`, `#/mascota/p02` y `#/mascota/p03`, con el nombre correcto. Nombre, especie · raza y edad del perfil coinciden con la tarjeta; el distrito del perfil agrega ", Lima · a N km" | Aprobado |
| P-HU-03-02 | Sin datos opcionales, el perfil se muestra sin errores ni campos inconsistentes | "Mi historia" aparece solo en p01 y p02; "Cuidados especiales" solo en p01. En p03 no aparecen encabezados vacíos. No hay textos `undefined`, `null` ni `NaN`, y no hay errores de consola en ninguna de las tres | Aprobado |
| P-HU-03-03 | El perfil se ve legible en computadora y en móvil | No se ejecutó en esta tarea: se probó solo en móvil (390×844). La revisión en computadora corresponde a la tarea #33 (kevinesty) | Pendiente |

### Datos observados

| Mascota | Tarjeta (nombre · especie y raza · edad · distrito) | Perfil (nombre · especie y raza · edad · distrito) |
|---|---|---|
| p01 | Porotopo · Perro · Schnauzer · 5 años · San Miguel | Porotopo · Perro · Schnauzer · 5 años · San Miguel, Lima · a 8.3 km |
| p02 | Max · Perro · Schnauzer · 3 meses · Cercado de Lima | Max · Perro · Schnauzer · 3 meses · Cercado de Lima, Lima · a 9.0 km |
| p03 | Toby · Perro · Cocker Spaniel · 6 meses · San Miguel | Toby · Perro · Cocker Spaniel · 6 meses · San Miguel, Lima · a 7.8 km |

### Evidencias

| Mascota | Tarjeta | Perfil | Secciones opcionales |
|---|---|---|---|
| p01 | [tarjeta](evidencias/HU-03-p01-tarjeta.png) | [perfil](evidencias/HU-03-p01-perfil.png) | [detalle](evidencias/HU-03-p01-perfil-detalle.png) |
| p02 | [tarjeta](evidencias/HU-03-p02-tarjeta.png) | [perfil](evidencias/HU-03-p02-perfil.png) | [detalle](evidencias/HU-03-p02-perfil-detalle.png) |
| p03 | [tarjeta](evidencias/HU-03-p03-tarjeta.png) | [perfil](evidencias/HU-03-p03-perfil.png) | [detalle](evidencias/HU-03-p03-perfil-detalle.png) |

### Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | Ninguna en los criterios 1 y 2 | — | — |

## Ejecución automatizada (complementa las pruebas manuales)

> Esta sección **no reemplaza** los planes de prueba de arriba ni cambia sus estados: cada responsable sigue validando su HU y marcando `Aprobado` o `Fallido`. Aquí solo se registra lo que observó una ejecución automática con Playwright, para que sirva de evidencia de apoyo.

- **Fecha de ejecución:** 28 de octubre de 2026, 10:38 (hora de Lima)
- **Ejecutada por:** IchiSieben (con Claude Code), en la rama `sprint-2/preparacion`
- **Versión probada:** prototipo v0.3 (`Codigo_Repositorio/kuyaypet-web`), `npm run build` + `vite preview` local en el puerto 4199
- **Viewport:** móvil 390×844 (iPhone 13, Chromium); P-09 agrega una ventana de computadora de 1280×800
- **Specs:** [`tests/evidencias/HU-01.spec.ts`](../../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-01.spec.ts), [`HU-02.spec.ts`](../../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-02.spec.ts), [`HU-03.spec.ts`](../../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-03.spec.ts)

**Comando** (desde `Codigo_Repositorio/kuyaypet-web`, con el build servido en otra terminal):

```bash
npm run build
npx vite preview --port 4199 --strictPort          # terminal 1
EVIDENCIAS_DIR=../../Sprint_01/7.Pruebas/evidencias \
VIDEOS_DIR=<carpeta fuera del repo> \
BASE_URL=http://localhost:4199/ node scripts/record-hu.mjs 01 02 03   # terminal 2
```

**Resultado:** 3 de 3 specs pasaron (HU-01 8,3 s · HU-02 9,5 s · HU-03 13,2 s). La suite habitual (`npm run test:e2e`) sigue en 21/21 y `npm test` en 22/22: el proyecto `evidencias` solo existe cuando se corre `record-hu.mjs`.

### HU-01 — capturas por caso

| Caso | Qué hizo la prueba | Resultado observado | Captura |
|---|---|---|---|
| P-HU-01-01 | Pulsar "Registrarse" con todo vacío | Alerta que indica que los campos son obligatorios; no se crea la cuenta | [P-HU-01-01](evidencias/HU-01/P-HU-01-01-campos-obligatorios.png) |
| P-HU-01-02 | Correo `ana@` | Alerta de formato de correo inválido | [P-HU-01-02a](evidencias/HU-01/P-HU-01-02a-correo-invalido.png) |
| P-HU-01-02 | Contraseña de 3 caracteres | Alerta que exige al menos 8 caracteres | [P-HU-01-02b](evidencias/HU-01/P-HU-01-02b-contrasena-corta.png) |
| P-HU-01-03 | Correo ya registrado (`adoptante@kuyaypet.pe`) | Alerta "ya está registrado"; al final de la prueba sigue habiendo **una sola** cuenta con ese correo | [P-HU-01-03](evidencias/HU-01/P-HU-01-03-correo-duplicado.png) |
| P-HU-01-04 | Datos válidos (Ana Prueba, `ana.prueba@correo.com`) | Mensaje "¡Cuenta creada con éxito!" y paso al cuestionario; la cuenta queda guardada en el navegador con la sesión iniciada | [P-HU-01-04](evidencias/HU-01/P-HU-01-04-cuenta-creada.png) |

### HU-02 — capturas por caso (plan de DevBrad)

| Caso | Qué hizo la prueba | Resultado observado | Captura |
|---|---|---|---|
| P-06 | Comparar las tarjetas de `/buscar` con los datos guardados | 34 tarjetas = las 34 mascotas con estado "disponible" y publicación aprobada; las 6 restantes no aparecen (2 adoptadas, 1 retirada, 2 en revisión y 1 rechazada) | [P-06](evidencias/HU-02/P-06-lista-disponibles.png) |
| P-07 | Revisar la primera tarjeta contra sus datos | Muestra foto, nombre, especie · raza, edad y distrito, y coinciden con lo registrado | [P-07](evidencias/HU-02/P-07-campos-visibles.png) |
| P-08 | Escenario preparado: todas las mascotas marcadas como adoptadas | No aparece ninguna tarjeta y se muestra un mensaje informativo (ver incidencia I-01) | [P-08](evidencias/HU-02/P-08-sin-mascotas-disponibles.png) |
| P-09 | Lista en 390×844 y en 1280×800 | En móvil, grilla de 2 columnas legible. En computadora la app se muestra dentro de un marco de teléfono, con el panel de presentador al lado (ver incidencia I-02) | [móvil](evidencias/HU-02/P-09-movil-390x844.png) · [computadora](evidencias/HU-02/P-09-computadora-1280x800.png) |

### Incidencias observadas en la ejecución automatizada

| ID | Descripción | Acción correctiva propuesta | Estado |
|---|---|---|---|
| I-01 (HU-02, P-08) | Sin mascotas disponibles y **sin filtros aplicados**, el título dice "No hay mascotas que cumplan estos criterios. Prueba con otros filtros." El subtítulo sí es pertinente ("Vuelve pronto: los albergues publican nuevas mascotas cada semana."). El criterio pide "un mensaje informativo": hay mensaje, pero el texto principal habla de filtros | Mostrar "No hay mascotas disponibles por ahora" cuando no hay filtros activos | ✋ Pendiente: DevBrad decide si es Aprobado con observación o Fallido |
| I-02 (HU-02, P-09) | En computadora no hay un diseño de escritorio: la app se ve dentro de un marco de teléfono (decisión de diseño del prototipo para presentar en clase) | Ninguna, si el equipo acepta el marco como "adaptación a computadora" | ✋ Pendiente: kevinesty lo valida en la tarea #33 |

### Videos por HU

Un video por HU grabado por la misma ejecución (móvil, 390×844): `HU-01.mp4` (8 s), `HU-02.mp4` (10 s), `HU-03.mp4` (14 s, recorrido de p01, p02 y p03 de la tarea #32). No se suben a git por su peso.

> ✋ Pendiente: subir videos a Drive y pegar enlace.
