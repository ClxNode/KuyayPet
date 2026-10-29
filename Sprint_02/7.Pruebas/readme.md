# 7. Pruebas — Sprint 2

> **Propuesta — se valida en la planning del video.** Plan de pruebas por HU candidata, con el mismo formato que usó DevBrad en el [Sprint 1](../../Sprint_01/7.Pruebas/readme.md#hu-02--pruebas-funcionales-visualización-de-mascotas-disponibles). Los casos se derivan de los criterios del [Product Backlog Item](../1.Product_Backlog_Item/readme.md) y siguen la numeración del Sprint 1 (P-06…P-09). Cada responsable ejecuta sus casos y recién entonces escribe el resultado observado y cambia el estado a `Aprobado` o `Fallido`.

El código a probar es el prototipo v0.3 en [`Codigo_Repositorio/kuyaypet-web/`](../../Codigo_Repositorio/kuyaypet-web/), desplegado en https://firebrick-cod-910257.hostingersite.com/ (abrirlo en una ventana de incógnito). Capturas: `evidencias/HU-NN/P-NN-descripcion.png`.

## Índice

| HU | Tarea | Casos | Responsable | Estado |
|---|---|---|---|---|
| [HU-11 — Registrar mascota](#hu-11--registrar-mascota) | [#38](https://github.com/ClxNode/KuyayPet/issues/38) | P-10 a P-11 | ✋ | Pendiente |
| [HU-16 — Registro visual y etiquetado de mascotas](#hu-16--registro-visual-y-etiquetado-de-mascotas) | [#39](https://github.com/ClxNode/KuyayPet/issues/39) | P-12 a P-13 | ✋ | Pendiente |
| [HU-12 — Editar información textual de una mascota](#hu-12--editar-información-textual-de-una-mascota) | [#40](https://github.com/ClxNode/KuyayPet/issues/40) | P-14 a P-15 | ✋ | Pendiente |
| [HU-04 — Filtrar mascotas según preferencias](#hu-04--filtrar-mascotas-según-preferencias) | [#41](https://github.com/ClxNode/KuyayPet/issues/41) | P-16 a P-18 | ✋ | Pendiente |
| [HU-05 — Búsqueda de mascotas cercanas](#hu-05--búsqueda-de-mascotas-cercanas) | [#42](https://github.com/ClxNode/KuyayPet/issues/42) | P-19 a P-20 | ✋ | Pendiente |
| [HU-17 — Guardado de mascotas favoritas](#hu-17--guardado-de-mascotas-favoritas) | [#43](https://github.com/ClxNode/KuyayPet/issues/43) | P-21 a P-22 | ✋ | Pendiente |
| [HU-19 — Actualización de mascota como adoptada](#hu-19--actualización-de-mascota-como-adoptada) | [#44](https://github.com/ClxNode/KuyayPet/issues/44) | P-23 a P-24 | ✋ | Pendiente |

## HU-11 — Registrar mascota

### 1. Información general

- **Proyecto:** KuyayPet
- **Sprint:** Sprint 2
- **Historia de usuario:** HU-11 ([#11](https://github.com/ClxNode/KuyayPet/issues/11)) · tarea [#38](https://github.com/ClxNode/KuyayPet/issues/38)
- **Responsable:** ✋ Pendiente (se asigna en la planning)
- **Fecha planificada:** ✋ Pendiente
- **Estado:** Pendiente de ejecución

### 2. Objetivo

Verificar que un responsable pueda registrar una mascota en KuyayPet y que el sistema impida registrarla si faltan datos obligatorios.

### 3. Historia de usuario

Yo como responsable de una mascota, deseo registrar una mascota en la plataforma, para ponerla a disposición de posibles adoptantes.

### 4. Criterios de aceptación

> Propuesta, pendiente de validar con el equipo (ver el issue de la HU).

1. **Dado** que completo el formulario de registro con los datos obligatorios, **cuando** guardo el registro, **entonces** la mascota queda registrada en la plataforma.

### 5. Casos de prueba

#### P-10: Registro con datos obligatorios completos

**Objetivo:** Comprobar que la mascota queda registrada al guardar el formulario completo.

- **Procedimiento:**
  1. Ingresar con la cuenta demo de responsable (`responsable@kuyaypet.pe` / `kuyay2026`, o el botón “Probar la demo como… Responsable”).
  2. Abrir **Registrar** (`/responsable/nueva`).
  3. Completar nombre, raza, edad y distrito; continuar.
  4. Agregar al menos una foto; continuar.
  5. Completar la descripción y pulsar **Publicar mascota** → **Publicar**.
  6. Revisar el panel del responsable.
- **Resultado esperado:** La mascota aparece en el panel del responsable con los datos ingresados.
- **Resultado observado:** ✋
- **Estado:** Pendiente.

#### P-11: Datos obligatorios faltantes

**Objetivo:** Comprobar que el sistema indica qué falta y no registra la mascota.

- **Procedimiento:**
  1. Ingresar con la cuenta demo de responsable.
  2. Abrir **Registrar**.
  3. Pulsar **Continuar** sin completar los campos.
  4. Revisar el panel del responsable.
- **Resultado esperado:** Se muestra un mensaje que indica los datos faltantes y no se crea ninguna mascota nueva.
- **Resultado observado:** ✋
- **Estado:** Pendiente.

### 6. Registro de resultados

| ID | Caso de prueba | Resultado esperado | Resultado observado | Estado |
|---|---|---|---|---|
| P-10 | Registro con datos obligatorios completos | La mascota aparece en el panel del responsable con los datos ingresados. | ✋ | Pendiente |
| P-11 | Datos obligatorios faltantes | Se muestra un mensaje que indica los datos faltantes y no se crea ninguna mascota nueva. | ✋ | Pendiente |

**Nota:** Los estados se actualizan a `Aprobado` o `Fallido` únicamente después de ejecutar cada prueba y comprobar su resultado.

### 7. Datos de prueba

Las mascotas registradas quedan **En revisión** hasta que un administrador las aprueba (HU-24); para este plan basta con que aparezcan en el panel del responsable.

### 8. Evidencias

Guardar las capturas en `evidencias/HU-11/`:

- **P-10:** captura del resultado de “registro con datos obligatorios completos”.
- **P-11:** captura del resultado de “datos obligatorios faltantes”.

**Enlaces a evidencias:** ✋ Pendiente.

### 9. Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | Sin incidencias registradas hasta ejecutar las pruebas | — | Pendiente de validación |

### 10. Conclusión

HU-11 se considerará validada cuando sus casos se hayan ejecutado, los resultados sean satisfactorios y existan evidencias verificables.

**Estado final:** Pendiente de ejecución y validación.

## HU-16 — Registro visual y etiquetado de mascotas

### 1. Información general

- **Proyecto:** KuyayPet
- **Sprint:** Sprint 2
- **Historia de usuario:** HU-16 ([#16](https://github.com/ClxNode/KuyayPet/issues/16)) · tarea [#39](https://github.com/ClxNode/KuyayPet/issues/39)
- **Responsable:** ✋ Pendiente (se asigna en la planning)
- **Fecha planificada:** ✋ Pendiente
- **Estado:** Pendiente de ejecución

### 2. Objetivo

Verificar que las imágenes y etiquetas que agrega el responsable se muestren en el perfil de la mascota.

### 3. Historia de usuario

Yo como responsable de una mascota, deseo agregar imágenes y etiquetas a las mascotas que registro, para que los adoptantes las identifiquen mejor.

### 4. Criterios de aceptación

> Propuesta, pendiente de validar con el equipo (ver el issue de la HU).

1. **Dado** que estoy registrando o editando una mascota, **cuando** agrego una imagen, **entonces** la imagen se muestra en el perfil de la mascota.

### 5. Casos de prueba

#### P-12: Imagen visible en el perfil

**Objetivo:** Comprobar que una imagen agregada al registrar o editar se muestra en el perfil.

- **Procedimiento:**
  1. Ingresar con la cuenta demo de responsable.
  2. Registrar una mascota (como en P-10) agregando una foto de prueba.
  3. Abrir el perfil de esa mascota.
  4. Abrir la edición de esa mascota y comprobar si permite agregar otra foto.
- **Resultado esperado:** La imagen agregada se muestra en el perfil de la mascota, tanto al registrar como al editar.
- **Resultado observado:** ✋
- **Estado:** Pendiente.

#### P-13: Etiquetas visibles en el perfil

**Objetivo:** Comprobar que las etiquetas seleccionadas quedan asociadas a la mascota.

- **Procedimiento:**
  1. Ingresar con la cuenta demo de responsable.
  2. Al registrar la mascota, seleccionar dos etiquetas de personalidad (por ejemplo, “Cariñoso/a”).
  3. Publicarla y abrir su perfil.
  4. Abrir la edición de esa mascota y comprobar si permite cambiar las etiquetas.
- **Resultado esperado:** Las etiquetas elegidas aparecen en el perfil de la mascota, tanto al registrar como al editar.
- **Resultado observado:** ✋
- **Estado:** Pendiente.

### 6. Registro de resultados

| ID | Caso de prueba | Resultado esperado | Resultado observado | Estado |
|---|---|---|---|---|
| P-12 | Imagen visible en el perfil | La imagen agregada se muestra en el perfil de la mascota, tanto al registrar como al editar. | ✋ | Pendiente |
| P-13 | Etiquetas visibles en el perfil | Las etiquetas elegidas aparecen en el perfil de la mascota, tanto al registrar como al editar. | ✋ | Pendiente |

**Nota:** Los estados se actualizan a `Aprobado` o `Fallido` únicamente después de ejecutar cada prueba y comprobar su resultado.

### 7. Datos de prueba

Usar imágenes propias o libres de derechos, identificadas como datos de prueba. No usar fotos de personas. Revisión previa del código (28-oct): la pantalla de edición del prototipo (`EditPet.tsx`) solo cambia textos; no tiene campos de fotos ni de etiquetas, así que la parte “o editando” de los dos criterios probablemente resulte `Fallido`. Confirmarlo al ejecutar.

### 8. Evidencias

Guardar las capturas en `evidencias/HU-16/`:

- **P-12:** captura del resultado de “imagen visible en el perfil”.
- **P-13:** captura del resultado de “etiquetas visibles en el perfil”.

**Enlaces a evidencias:** ✋ Pendiente.

### 9. Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | Sin incidencias registradas hasta ejecutar las pruebas | — | Pendiente de validación |

### 10. Conclusión

HU-16 se considerará validada cuando sus casos se hayan ejecutado, los resultados sean satisfactorios y existan evidencias verificables.

**Estado final:** Pendiente de ejecución y validación.

## HU-12 — Editar información textual de una mascota

### 1. Información general

- **Proyecto:** KuyayPet
- **Sprint:** Sprint 2
- **Historia de usuario:** HU-12 ([#12](https://github.com/ClxNode/KuyayPet/issues/12)) · tarea [#40](https://github.com/ClxNode/KuyayPet/issues/40)
- **Responsable:** ✋ Pendiente (se asigna en la planning)
- **Fecha planificada:** ✋ Pendiente
- **Estado:** Pendiente de ejecución

### 2. Objetivo

Verificar que un responsable pueda editar la información textual de sus mascotas y no la de mascotas de otros responsables.

### 3. Historia de usuario

Yo como responsable de una mascota, deseo editar la información textual de una mascota que registré, para mantener sus datos actualizados.

### 4. Criterios de aceptación

> Propuesta, pendiente de validar con el equipo (ver el issue de la HU).

1. **Dado** que soy el responsable de una mascota registrada, **cuando** edito su información textual y guardo, **entonces** el perfil muestra la información actualizada.

### 5. Casos de prueba

#### P-14: Edición de una mascota propia

**Objetivo:** Comprobar que el perfil muestra la información actualizada después de guardar.

- **Procedimiento:**
  1. Ingresar con la cuenta demo de responsable (dueña de Porotopo, `p01`).
  2. En el panel, abrir la edición de Porotopo.
  3. Cambiar el nombre y la descripción y pulsar **Guardar cambios**.
  4. Abrir el perfil de la mascota.
- **Resultado esperado:** El perfil muestra el nombre y la descripción nuevos.
- **Resultado observado:** ✋
- **Estado:** Pendiente.

#### P-15: Intento de editar una mascota ajena

**Objetivo:** Comprobar que el sistema no permite editar una mascota registrada por otra persona.

- **Procedimiento:**
  1. Ingresar con la cuenta demo de responsable.
  2. Escribir en la barra de direcciones la ruta de edición de una mascota de otro responsable: `#/responsable/editar/p02` (Max).
  3. Observar la pantalla.
- **Resultado esperado:** El sistema no muestra el formulario de edición de esa mascota.
- **Resultado observado:** ✋
- **Estado:** Pendiente.

### 6. Registro de resultados

| ID | Caso de prueba | Resultado esperado | Resultado observado | Estado |
|---|---|---|---|---|
| P-14 | Edición de una mascota propia | El perfil muestra el nombre y la descripción nuevos. | ✋ | Pendiente |
| P-15 | Intento de editar una mascota ajena | El sistema no muestra el formulario de edición de esa mascota. | ✋ | Pendiente |

**Nota:** Los estados se actualizan a `Aprobado` o `Fallido` únicamente después de ejecutar cada prueba y comprobar su resultado.

### 7. Datos de prueba

Porotopo (`p01`) pertenece a la cuenta demo de responsable; Max (`p02`) pertenece a otro responsable de los datos semilla.

### 8. Evidencias

Guardar las capturas en `evidencias/HU-12/`:

- **P-14:** captura del resultado de “edición de una mascota propia”.
- **P-15:** captura del resultado de “intento de editar una mascota ajena”.

**Enlaces a evidencias:** ✋ Pendiente.

### 9. Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | Sin incidencias registradas hasta ejecutar las pruebas | — | Pendiente de validación |

### 10. Conclusión

HU-12 se considerará validada cuando sus casos se hayan ejecutado, los resultados sean satisfactorios y existan evidencias verificables.

**Estado final:** Pendiente de ejecución y validación.

## HU-04 — Filtrar mascotas según preferencias

### 1. Información general

- **Proyecto:** KuyayPet
- **Sprint:** Sprint 2
- **Historia de usuario:** HU-04 ([#4](https://github.com/ClxNode/KuyayPet/issues/4)) · tarea [#41](https://github.com/ClxNode/KuyayPet/issues/41)
- **Responsable:** ✋ Pendiente (se asigna en la planning)
- **Fecha planificada:** ✋ Pendiente
- **Estado:** Pendiente de ejecución

### 2. Objetivo

Verificar que el adoptante pueda filtrar las mascotas disponibles según sus preferencias.

### 3. Historia de usuario

Yo como adoptante, deseo filtrar las mascotas según mis preferencias, para encontrar más rápido las mascotas que se ajustan a lo que busco.

### 4. Criterios de aceptación

> Propuesta, pendiente de validar con el equipo (ver el issue de la HU).

1. **Dado** que estoy viendo la lista de mascotas disponibles, **cuando** aplico uno o más filtros, **entonces** la lista muestra solo las mascotas que cumplen esos filtros.

### 5. Casos de prueba

#### P-16: Aplicar uno o más filtros

**Objetivo:** Comprobar que la lista muestra solo las mascotas que cumplen los filtros.

- **Procedimiento:**
  1. Ingresar con la cuenta demo de adoptante (`adoptante@kuyaypet.pe` / `kuyay2026`, o el botón “Probar la demo como… Adoptante”).
  2. Abrir **Buscar** (`/buscar`) y anotar cuántas mascotas aparecen.
  3. Pulsar **Filtros**, elegir una especie (por ejemplo, Gato) y **Aplicar filtros**.
  4. Revisar las tarjetas.
- **Resultado esperado:** Todas las tarjetas cumplen el filtro y hay menos resultados que al inicio.
- **Resultado observado:** ✋
- **Estado:** Pendiente.

#### P-17: Filtros sin resultados

**Objetivo:** Comprobar el mensaje cuando ningún resultado cumple los filtros.

- **Procedimiento:**
  1. Con el filtro anterior, abrir **Filtros** y poner una edad mínima muy alta (por ejemplo, 9999 meses).
  2. Pulsar **Aplicar filtros**.
- **Resultado esperado:** Se muestra un mensaje indicando que no hay resultados.
- **Resultado observado:** ✋
- **Estado:** Pendiente.

#### P-18: Eliminar los filtros

**Objetivo:** Comprobar que la lista vuelve a mostrar todas las mascotas disponibles.

- **Procedimiento:**
  1. Abrir **Filtros** y pulsar **Limpiar filtros**.
  2. Contar las mascotas.
- **Resultado esperado:** Aparece el mismo número de mascotas que antes de filtrar.
- **Resultado observado:** ✋
- **Estado:** Pendiente.

### 6. Registro de resultados

| ID | Caso de prueba | Resultado esperado | Resultado observado | Estado |
|---|---|---|---|---|
| P-16 | Aplicar uno o más filtros | Todas las tarjetas cumplen el filtro y hay menos resultados que al inicio. | ✋ | Pendiente |
| P-17 | Filtros sin resultados | Se muestra un mensaje indicando que no hay resultados. | ✋ | Pendiente |
| P-18 | Eliminar los filtros | Aparece el mismo número de mascotas que antes de filtrar. | ✋ | Pendiente |

**Nota:** Los estados se actualizan a `Aprobado` o `Fallido` únicamente después de ejecutar cada prueba y comprobar su resultado.

### 7. Datos de prueba

Datos semilla del prototipo (40 mascotas sintéticas, 34 disponibles).

### 8. Evidencias

Guardar las capturas en `evidencias/HU-04/`:

- **P-16:** captura del resultado de “aplicar uno o más filtros”.
- **P-17:** captura del resultado de “filtros sin resultados”.
- **P-18:** captura del resultado de “eliminar los filtros”.

**Enlaces a evidencias:** ✋ Pendiente.

### 9. Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | Sin incidencias registradas hasta ejecutar las pruebas | — | Pendiente de validación |

### 10. Conclusión

HU-04 se considerará validada cuando sus casos se hayan ejecutado, los resultados sean satisfactorios y existan evidencias verificables.

**Estado final:** Pendiente de ejecución y validación.

## HU-05 — Búsqueda de mascotas cercanas

### 1. Información general

- **Proyecto:** KuyayPet
- **Sprint:** Sprint 2
- **Historia de usuario:** HU-05 ([#5](https://github.com/ClxNode/KuyayPet/issues/5)) · tarea [#42](https://github.com/ClxNode/KuyayPet/issues/42)
- **Responsable:** ✋ Pendiente (se asigna en la planning)
- **Fecha planificada:** ✋ Pendiente
- **Estado:** Pendiente de ejecución

### 2. Objetivo

Verificar que el adoptante pueda buscar mascotas disponibles cercanas a una ubicación.

### 3. Historia de usuario

Yo como adoptante, deseo buscar mascotas cercanas a mi ubicación, para encontrar opciones de adopción a las que pueda acceder con facilidad.

### 4. Criterios de aceptación

> Propuesta, pendiente de validar con el equipo (ver el issue de la HU).

1. **Dado** que indico mi ubicación, **cuando** realizo la búsqueda de mascotas cercanas, **entonces** el sistema muestra mascotas disponibles cercanas a esa ubicación.

### 5. Casos de prueba

#### P-19: Búsqueda de mascotas cercanas

**Objetivo:** Comprobar que se muestran mascotas disponibles cercanas a la ubicación indicada.

- **Procedimiento:**
  1. Ingresar con la cuenta demo de adoptante (`adoptante@kuyaypet.pe` / `kuyay2026`, o el botón “Probar la demo como… Adoptante”).
  2. Abrir **Buscar**.
  3. En “Buscar por cercanía”, elegir un distrito (por ejemplo, Miraflores) y un radio de 20 km; pulsar **Buscar**.
  4. Revisar las tarjetas y, si se desea, la vista **Mapa**.
- **Resultado esperado:** Se muestran mascotas disponibles con su distancia, todas dentro del radio indicado.
- **Resultado observado:** ✋
- **Estado:** Pendiente.

#### P-20: Sin mascotas cercanas

**Objetivo:** Comprobar el mensaje cuando no hay mascotas cerca de la ubicación.

- **Procedimiento:**
  1. Elegir un distrito y bajar el radio al mínimo (1 km); pulsar **Buscar**.
  2. Si todavía aparecen mascotas, probar otro distrito hasta obtener cero resultados.
- **Resultado esperado:** Se muestra un mensaje indicando que no hay resultados cercanos.
- **Resultado observado:** ✋
- **Estado:** Pendiente.

### 6. Registro de resultados

| ID | Caso de prueba | Resultado esperado | Resultado observado | Estado |
|---|---|---|---|---|
| P-19 | Búsqueda de mascotas cercanas | Se muestran mascotas disponibles con su distancia, todas dentro del radio indicado. | ✋ | Pendiente |
| P-20 | Sin mascotas cercanas | Se muestra un mensaje indicando que no hay resultados cercanos. | ✋ | Pendiente |

**Nota:** Los estados se actualizan a `Aprobado` o `Fallido` únicamente después de ejecutar cada prueba y comprobar su resultado.

### 7. Datos de prueba

Datos semilla del prototipo. “Usar mi ubicación actual” depende del permiso del navegador; para que la prueba sea repetible, usar la lista de distritos.

### 8. Evidencias

Guardar las capturas en `evidencias/HU-05/`:

- **P-19:** captura del resultado de “búsqueda de mascotas cercanas”.
- **P-20:** captura del resultado de “sin mascotas cercanas”.

**Enlaces a evidencias:** ✋ Pendiente.

### 9. Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | Sin incidencias registradas hasta ejecutar las pruebas | — | Pendiente de validación |

### 10. Conclusión

HU-05 se considerará validada cuando sus casos se hayan ejecutado, los resultados sean satisfactorios y existan evidencias verificables.

**Estado final:** Pendiente de ejecución y validación.

## HU-17 — Guardado de mascotas favoritas

### 1. Información general

- **Proyecto:** KuyayPet
- **Sprint:** Sprint 2
- **Historia de usuario:** HU-17 ([#17](https://github.com/ClxNode/KuyayPet/issues/17)) · tarea [#43](https://github.com/ClxNode/KuyayPet/issues/43)
- **Responsable:** ✋ Pendiente (se asigna en la planning)
- **Fecha planificada:** ✋ Pendiente
- **Estado:** Pendiente de ejecución

### 2. Objetivo

Verificar que el adoptante pueda guardar mascotas como favoritas y quitarlas.

### 3. Historia de usuario

Yo como adoptante, deseo guardar mascotas como favoritas, para volver a consultarlas fácilmente.

### 4. Criterios de aceptación

> Propuesta, pendiente de validar con el equipo (ver el issue de la HU).

1. **Dado** que estoy viendo una mascota, **cuando** la marco como favorita, **entonces** la mascota aparece en mi lista de favoritas.

### 5. Casos de prueba

#### P-21: Marcar una mascota como favorita

**Objetivo:** Comprobar que la mascota aparece en la lista de favoritas.

- **Procedimiento:**
  1. Ingresar con la cuenta demo de adoptante (`adoptante@kuyaypet.pe` / `kuyay2026`, o el botón “Probar la demo como… Adoptante”).
  2. Abrir **Favoritos** desde el perfil y anotar cuántas hay.
  3. Ir a **Buscar** y pulsar el corazón de una mascota que no esté en favoritos.
  4. Volver a **Favoritos**.
- **Resultado esperado:** La mascota aparece en la lista y el total aumentó en uno.
- **Resultado observado:** ✋
- **Estado:** Pendiente.

#### P-22: Quitar una mascota de favoritas

**Objetivo:** Comprobar que deja de aparecer en la lista.

- **Procedimiento:**
  1. En **Favoritos**, quitar la mascota agregada en P-21.
  2. Revisar la lista.
- **Resultado esperado:** La mascota ya no aparece y el total vuelve al valor inicial.
- **Resultado observado:** ✋
- **Estado:** Pendiente.

### 6. Registro de resultados

| ID | Caso de prueba | Resultado esperado | Resultado observado | Estado |
|---|---|---|---|---|
| P-21 | Marcar una mascota como favorita | La mascota aparece en la lista y el total aumentó en uno. | ✋ | Pendiente |
| P-22 | Quitar una mascota de favoritas | La mascota ya no aparece y el total vuelve al valor inicial. | ✋ | Pendiente |

**Nota:** Los estados se actualizan a `Aprobado` o `Fallido` únicamente después de ejecutar cada prueba y comprobar su resultado.

### 7. Datos de prueba

Datos semilla del prototipo.

### 8. Evidencias

Guardar las capturas en `evidencias/HU-17/`:

- **P-21:** captura del resultado de “marcar una mascota como favorita”.
- **P-22:** captura del resultado de “quitar una mascota de favoritas”.

**Enlaces a evidencias:** ✋ Pendiente.

### 9. Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | Sin incidencias registradas hasta ejecutar las pruebas | — | Pendiente de validación |

### 10. Conclusión

HU-17 se considerará validada cuando sus casos se hayan ejecutado, los resultados sean satisfactorios y existan evidencias verificables.

**Estado final:** Pendiente de ejecución y validación.

## HU-19 — Actualización de mascota como adoptada

### 1. Información general

- **Proyecto:** KuyayPet
- **Sprint:** Sprint 2
- **Historia de usuario:** HU-19 ([#19](https://github.com/ClxNode/KuyayPet/issues/19)) · tarea [#44](https://github.com/ClxNode/KuyayPet/issues/44)
- **Responsable:** ✋ Pendiente (se asigna en la planning)
- **Fecha planificada:** ✋ Pendiente
- **Estado:** Pendiente de ejecución

### 2. Objetivo

Verificar que el responsable pueda marcar una mascota como adoptada y que deje de mostrarse como disponible.

### 3. Historia de usuario

Yo como responsable de una mascota, deseo marcar una mascota como adoptada, para que deje de mostrarse como disponible.

### 4. Criterios de aceptación

> Propuesta, pendiente de validar con el equipo (ver el issue de la HU).

1. **Dado** que soy responsable de una mascota disponible, **cuando** la marco como adoptada, **entonces** su estado cambia a adoptada.

### 5. Casos de prueba

#### P-23: Marcar como adoptada

**Objetivo:** Comprobar que el estado de la mascota cambia a adoptada.

- **Procedimiento:**
  1. Ingresar con la cuenta demo de responsable.
  2. En el panel, pulsar **Marcar como adoptada** en una mascota disponible y confirmar.
  3. Anotar el nombre de la mascota.
- **Resultado esperado:** La mascota muestra el estado adoptada en el panel del responsable.
- **Resultado observado:** ✋
- **Estado:** Pendiente.

#### P-24: La mascota adoptada no aparece como disponible

**Objetivo:** Comprobar que un adoptante ya no la ve en la lista de disponibles.

- **Procedimiento:**
  1. Cerrar sesión e ingresar con la cuenta demo de adoptante en el **mismo navegador** (los datos del prototipo son locales).
  2. Abrir **Buscar** y buscar la mascota de P-23.
- **Resultado esperado:** La mascota marcada como adoptada no aparece en la lista de disponibles.
- **Resultado observado:** ✋
- **Estado:** Pendiente.

### 6. Registro de resultados

| ID | Caso de prueba | Resultado esperado | Resultado observado | Estado |
|---|---|---|---|---|
| P-23 | Marcar como adoptada | La mascota muestra el estado adoptada en el panel del responsable. | ✋ | Pendiente |
| P-24 | La mascota adoptada no aparece como disponible | La mascota marcada como adoptada no aparece en la lista de disponibles. | ✋ | Pendiente |

**Nota:** Los estados se actualizan a `Aprobado` o `Fallido` únicamente después de ejecutar cada prueba y comprobar su resultado.

### 7. Datos de prueba

Hacer P-23 y P-24 en el mismo navegador: el prototipo guarda los datos en el navegador ([ADR-K01](../../docs/arquitectura.md#adr-k01--sin-backend-en-el-mvp)). Para volver a los datos iniciales: **Reiniciar demo** en el modo presentador.

### 8. Evidencias

Guardar las capturas en `evidencias/HU-19/`:

- **P-23:** captura del resultado de “marcar como adoptada”.
- **P-24:** captura del resultado de “la mascota adoptada no aparece como disponible”.

**Enlaces a evidencias:** ✋ Pendiente.

### 9. Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | Sin incidencias registradas hasta ejecutar las pruebas | — | Pendiente de validación |

### 10. Conclusión

HU-19 se considerará validada cuando sus casos se hayan ejecutado, los resultados sean satisfactorios y existan evidencias verificables.

**Estado final:** Pendiente de ejecución y validación.
