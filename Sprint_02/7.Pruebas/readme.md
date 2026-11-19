# 7. Pruebas — Sprint 2

> Plan de pruebas por HU, con el mismo formato que usó DevBrad en el [Sprint 1](../../Sprint_01/7.Pruebas/readme.md#hu-02--pruebas-funcionales-visualización-de-mascotas-disponibles). Los casos se derivan de los criterios del [Product Backlog Item](../1.Product_Backlog_Item/readme.md) y siguen la numeración del Sprint 1 (P-06…P-09). Los resultados y estados de P-10 a P-24 salen de la **ejecución automatizada del 28-oct-2026** (sección final); no hay ejecución manual registrada. Cada HU tiene una casilla `Validado por <usuario>` (el responsable según el issue) que sigue sin marcar.

El código a probar es el prototipo v0.3 en [`Codigo_Repositorio/kuyaypet-web/`](../../Codigo_Repositorio/kuyaypet-web/), desplegado en https://firebrick-cod-910257.hostingersite.com/ (abrirlo en una ventana de incógnito). Capturas: `evidencias/HU-NN/P-NN-descripcion.png`.

## Índice

| HU | Tarea | Casos | Responsable | Estado |
|---|---|---|---|---|
| [HU-11 — Registrar mascota](#hu-11--registrar-mascota) | [#38](https://github.com/ClxNode/KuyayPet/issues/38) | P-10 a P-11 | Dylan200-7 | Ejecutado (automatizado); validación pendiente |
| [HU-16 — Registro visual y etiquetado de mascotas](#hu-16--registro-visual-y-etiquetado-de-mascotas) | [#39](https://github.com/ClxNode/KuyayPet/issues/39) | P-12 a P-13 | ClxNode y Dylan200-7 | Ejecutado (automatizado); validación pendiente |
| [HU-12 — Editar información textual de una mascota](#hu-12--editar-información-textual-de-una-mascota) | [#40](https://github.com/ClxNode/KuyayPet/issues/40) | P-14 a P-15 | ClxNode y Dylan200-7 | Ejecutado (automatizado); validación pendiente |
| [HU-04 — Filtrar mascotas según preferencias](#hu-04--filtrar-mascotas-según-preferencias) | [#41](https://github.com/ClxNode/KuyayPet/issues/41) | P-16 a P-18 | VALTOm07 | Ejecutado (automatizado); validación pendiente |
| [HU-05 — Búsqueda de mascotas cercanas](#hu-05--búsqueda-de-mascotas-cercanas) | [#42](https://github.com/ClxNode/KuyayPet/issues/42) | P-19 a P-20 | VALTOm07 y kevinesty | Ejecutado (automatizado); validación pendiente |
| [HU-17 — Guardado de mascotas favoritas](#hu-17--guardado-de-mascotas-favoritas) | [#43](https://github.com/ClxNode/KuyayPet/issues/43) | P-21 a P-22 | Joseph-L-Q | Ejecutado (automatizado); validación pendiente |
| [HU-19 — Actualización de mascota como adoptada](#hu-19--actualización-de-mascota-como-adoptada) | [#44](https://github.com/ClxNode/KuyayPet/issues/44) | P-23 a P-24 | BeyondNate y Joseph-L-Q | Ejecutado (automatizado); validación pendiente |

## HU-11 — Registrar mascota

### 1. Información general

- **Proyecto:** KuyayPet
- **Sprint:** Sprint 2
- **Historia de usuario:** HU-11 ([#11](https://github.com/ClxNode/KuyayPet/issues/11)) · tarea [#38](https://github.com/ClxNode/KuyayPet/issues/38)
- **Responsable:** Dylan200-7 (asignados en el issue de la HU en GitHub)
- **Fecha planificada:** 29-oct-2026 (fecha límite de la HU en el GitHub Project)
- **Estado:** Ejecutado con pruebas automatizadas el 28-oct-2026; validación del responsable pendiente

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
- **Resultado observado:** ejecución automatizada del 28-oct-2026 (HU-11, criterios 1 a 3): «Registrar» abre el formulario de 3 pasos, se completan los datos y la mascota aparece en «Mis publicaciones». Captura: [P-HU-11-03](evidencias/HU-11/P-HU-11-03-mascota-registrada.png).
- **Estado:** Aprobado (automatizado).

#### P-11: Datos obligatorios faltantes

**Objetivo:** Comprobar que el sistema indica qué falta y no registra la mascota.

- **Procedimiento:**
  1. Ingresar con la cuenta demo de responsable.
  2. Abrir **Registrar**.
  3. Pulsar **Continuar** sin completar los campos.
  4. Revisar el panel del responsable.
- **Resultado esperado:** Se muestra un mensaje que indica los datos faltantes y no se crea ninguna mascota nueva.
- **Resultado observado:** ejecución automatizada del 28-oct-2026 (HU-11, criterio 5): sin datos, «Continuar» muestra una alerta con lo que falta. Captura: [P-HU-11-05](evidencias/HU-11/P-HU-11-05-campos-obligatorios.png). La prueba verifica la alerta; no cuenta las mascotas del panel.
- **Estado:** Aprobado parcial (automatizado).

### 6. Registro de resultados

| ID | Caso de prueba | Resultado esperado | Resultado observado | Estado |
|---|---|---|---|---|
| P-10 | Registro con datos obligatorios completos | La mascota aparece en el panel del responsable con los datos ingresados. | Ver el resultado del caso arriba y la sección «Ejecución automatizada» | Aprobado (automatizado) |
| P-11 | Datos obligatorios faltantes | Se muestra un mensaje que indica los datos faltantes y no se crea ninguna mascota nueva. | Ver el resultado del caso arriba y la sección «Ejecución automatizada» | Aprobado parcial (automatizado) |

**Nota:** Los estados salen de la ejecución automatizada del 28-oct-2026 (sección «Ejecución automatizada», al final). No hay ejecución manual registrada.

### 7. Datos de prueba

Las mascotas registradas quedan **En revisión** hasta que un administrador las aprueba (HU-24); para este plan basta con que aparezcan en el panel del responsable.

### 8. Evidencias

Guardar las capturas en `evidencias/HU-11/`:

- **P-10:** captura del resultado de “registro con datos obligatorios completos”.
- **P-11:** captura del resultado de “datos obligatorios faltantes”.

**Enlaces a evidencias:** Capturas en [`evidencias/HU-11/`](evidencias/HU-11/) y video [HU-11.mp4](https://drive.google.com/open?id=1X5hKHtWa7i57dCZn2AQmbuLjYDjLJ7_Y). Detalle por criterio en la sección «Ejecución automatizada».

### 9. Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | Observación: el criterio 6 del documento del equipo («disponible para adopción») difiere del comportamiento del prototipo: la mascota queda «En revisión» hasta que un administrador la aprueba (ADR-05). | Se documentó como comportamiento observado (captura P-HU-11-06). | Registrada |

### 10. Conclusión

HU-11 se considerará validada cuando sus casos se hayan ejecutado, los resultados sean satisfactorios y existan evidencias verificables.

**Estado final:** ejecución automatizada aprobada el 28-oct-2026 (PR [#65](https://github.com/ClxNode/KuyayPet/pull/65)); validación del responsable pendiente.

- [ ] Validado por Dylan200-7

## HU-16 — Registro visual y etiquetado de mascotas

### 1. Información general

- **Proyecto:** KuyayPet
- **Sprint:** Sprint 2
- **Historia de usuario:** HU-16 ([#16](https://github.com/ClxNode/KuyayPet/issues/16)) · tarea [#39](https://github.com/ClxNode/KuyayPet/issues/39)
- **Responsable:** ClxNode y Dylan200-7 (asignados en el issue de la HU en GitHub)
- **Fecha planificada:** 29-oct-2026 (fecha límite de la HU en el GitHub Project)
- **Estado:** Ejecutado con pruebas automatizadas el 28-oct-2026; validación del responsable pendiente

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
- **Resultado observado:** ejecución automatizada del 28-oct-2026 (HU-16, criterios 3 y 7, y prueba de edición de `owner.spec.ts`): la vista previa se muestra al registrar; tras la aprobación del administrador el perfil muestra la foto; al editar se agrega y se quita una foto y el perfil conserva 2 fotos. Capturas: [P-HU-16-07b](evidencias/HU-16/P-HU-16-07b-perfil-con-foto-y-etiqueta.png), [antes-editar](evidencias/HU-16/antes-editar.png), [despues-editar](evidencias/HU-16/despues-editar.png).
- **Estado:** Aprobado (automatizado).

#### P-13: Etiquetas visibles en el perfil

**Objetivo:** Comprobar que las etiquetas seleccionadas quedan asociadas a la mascota.

- **Procedimiento:**
  1. Ingresar con la cuenta demo de responsable.
  2. Al registrar la mascota, seleccionar dos etiquetas de personalidad (por ejemplo, “Cariñoso/a”).
  3. Publicarla y abrir su perfil.
  4. Abrir la edición de esa mascota y comprobar si permite cambiar las etiquetas.
- **Resultado esperado:** Las etiquetas elegidas aparecen en el perfil de la mascota, tanto al registrar como al editar.
- **Resultado observado:** ejecución automatizada del 28-oct-2026 (HU-16, criterios 5 y 7, y prueba de edición): la etiqueta «Cariñoso/a» queda seleccionada y se ve en el perfil; al editar se quita «Sociable», se agrega «Juguetón/a» y el perfil la muestra. Capturas: [P-HU-16-05](evidencias/HU-16/P-HU-16-05-etiqueta-elegida.png), [despues-perfil](evidencias/HU-16/despues-perfil.png).
- **Estado:** Aprobado (automatizado).

### 6. Registro de resultados

| ID | Caso de prueba | Resultado esperado | Resultado observado | Estado |
|---|---|---|---|---|
| P-12 | Imagen visible en el perfil | La imagen agregada se muestra en el perfil de la mascota, tanto al registrar como al editar. | Ver el resultado del caso arriba y la sección «Ejecución automatizada» | Aprobado (automatizado) |
| P-13 | Etiquetas visibles en el perfil | Las etiquetas elegidas aparecen en el perfil de la mascota, tanto al registrar como al editar. | Ver el resultado del caso arriba y la sección «Ejecución automatizada» | Aprobado (automatizado) |

**Nota:** Los estados salen de la ejecución automatizada del 28-oct-2026 (sección «Ejecución automatizada», al final). No hay ejecución manual registrada.

### 7. Datos de prueba

Usar imágenes propias o libres de derechos, identificadas como datos de prueba. No usar fotos de personas. Revisión previa del código (28-oct): la pantalla de edición del prototipo (`EditPet.tsx`) solo cambia textos; no tiene campos de fotos ni de etiquetas, así que la parte “o editando” de los dos criterios probablemente resulte `Fallido`. Confirmarlo al ejecutar.

### 8. Evidencias

Guardar las capturas en `evidencias/HU-16/`:

- **P-12:** captura del resultado de “imagen visible en el perfil”.
- **P-13:** captura del resultado de “etiquetas visibles en el perfil”.

**Enlaces a evidencias:** Capturas en [`evidencias/HU-16/`](evidencias/HU-16/) y video [HU-16.mp4](https://drive.google.com/open?id=1QReoI9Af1EnyTJt9StRAZFVa3SW8EMYf). Detalle por criterio en la sección «Ejecución automatizada».

### 9. Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | La pantalla de edición solo cambiaba textos (revisión del 28-oct). | Corregido en el PR [#48](https://github.com/ClxNode/KuyayPet/pull/48): fotos y etiquetas editables; probado en `owner.spec.ts`. | Resuelta |

### 10. Conclusión

HU-16 se considerará validada cuando sus casos se hayan ejecutado, los resultados sean satisfactorios y existan evidencias verificables.

**Estado final:** ejecución automatizada aprobada el 28-oct-2026 (PR [#65](https://github.com/ClxNode/KuyayPet/pull/65)); validación del responsable pendiente.

- [ ] Validado por ClxNode y Dylan200-7

## HU-12 — Editar información textual de una mascota

### 1. Información general

- **Proyecto:** KuyayPet
- **Sprint:** Sprint 2
- **Historia de usuario:** HU-12 ([#12](https://github.com/ClxNode/KuyayPet/issues/12)) · tarea [#40](https://github.com/ClxNode/KuyayPet/issues/40)
- **Responsable:** ClxNode y Dylan200-7 (asignados en el issue de la HU en GitHub)
- **Fecha planificada:** 29-oct-2026 (fecha límite de la HU en el GitHub Project)
- **Estado:** Ejecutado con pruebas automatizadas el 28-oct-2026; validación del responsable pendiente

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
- **Resultado observado:** ejecución automatizada del 28-oct-2026 (HU-12, criterios 1, 2 y 5): el formulario viene prellenado, aparece «Cambios guardados con éxito» y se abre el perfil público con el nombre y la descripción nuevos. Captura: [P-HU-12-05](evidencias/HU-12/P-HU-12-05-perfil-publico-actualizado.png).
- **Estado:** Aprobado (automatizado).

#### P-15: Intento de editar una mascota ajena

**Objetivo:** Comprobar que el sistema no permite editar una mascota registrada por otra persona.

- **Procedimiento:**
  1. Ingresar con la cuenta demo de responsable.
  2. Escribir en la barra de direcciones la ruta de edición de una mascota de otro responsable: `#/responsable/editar/p02` (Max).
  3. Observar la pantalla.
- **Resultado esperado:** El sistema no muestra el formulario de edición de esa mascota.
- **Resultado observado:** ejecución automatizada del 28-oct-2026 (prueba «HU-12 no permite editar una mascota que no registré», PR #49): `#/responsable/editar/p02` muestra «Mascota no encontrada», sin formulario ni botón «Guardar cambios», y los datos de la mascota no cambian. Captura: [despues-mascota-ajena-bloqueada](evidencias/HU-12/despues-mascota-ajena-bloqueada.png).
- **Estado:** Aprobado (automatizado).

### 6. Registro de resultados

| ID | Caso de prueba | Resultado esperado | Resultado observado | Estado |
|---|---|---|---|---|
| P-14 | Edición de una mascota propia | El perfil muestra el nombre y la descripción nuevos. | Ver el resultado del caso arriba y la sección «Ejecución automatizada» | Aprobado (automatizado) |
| P-15 | Intento de editar una mascota ajena | El sistema no muestra el formulario de edición de esa mascota. | Ver el resultado del caso arriba y la sección «Ejecución automatizada» | Aprobado (automatizado) |

**Nota:** Los estados salen de la ejecución automatizada del 28-oct-2026 (sección «Ejecución automatizada», al final). No hay ejecución manual registrada.

### 7. Datos de prueba

Porotopo (`p01`) pertenece a la cuenta demo de responsable; Max (`p02`) pertenece a otro responsable de los datos semilla.

### 8. Evidencias

Guardar las capturas en `evidencias/HU-12/`:

- **P-14:** captura del resultado de “edición de una mascota propia”.
- **P-15:** captura del resultado de “intento de editar una mascota ajena”.

**Enlaces a evidencias:** Capturas en [`evidencias/HU-12/`](evidencias/HU-12/) y video [HU-12.mp4](https://drive.google.com/open?id=1YofEckGlVM9WaueYJpg1RZy2jBHdcVX_). Detalle por criterio en la sección «Ejecución automatizada».

### 9. Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | El criterio de la mascota ajena no tenía prueba. | Prueba agregada en el PR [#49](https://github.com/ClxNode/KuyayPet/pull/49). | Resuelta |

### 10. Conclusión

HU-12 se considerará validada cuando sus casos se hayan ejecutado, los resultados sean satisfactorios y existan evidencias verificables.

**Estado final:** ejecución automatizada aprobada el 28-oct-2026 (PR [#65](https://github.com/ClxNode/KuyayPet/pull/65)); validación del responsable pendiente.

- [ ] Validado por ClxNode y Dylan200-7

## HU-04 — Filtrar mascotas según preferencias

### 1. Información general

- **Proyecto:** KuyayPet
- **Sprint:** Sprint 2
- **Historia de usuario:** HU-04 ([#4](https://github.com/ClxNode/KuyayPet/issues/4)) · tarea [#41](https://github.com/ClxNode/KuyayPet/issues/41)
- **Responsable:** VALTOm07 (asignados en el issue de la HU en GitHub)
- **Fecha planificada:** 29-oct-2026 (fecha límite de la HU en el GitHub Project)
- **Estado:** Ejecutado con pruebas automatizadas el 28-oct-2026; validación del responsable pendiente

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
- **Resultado observado:** ejecución automatizada del 28-oct-2026 (HU-04, criterios 3 a 5): con «Gato» solo se ven gatos y el número de tarjetas coincide con los gatos disponibles; con Gato + Hembra el contador dice «Filtros (2)». Captura: [P-HU-04-03](evidencias/HU-04/P-HU-04-03-aplicar-filtro-especie.png).
- **Estado:** Aprobado (automatizado).

#### P-17: Filtros sin resultados

**Objetivo:** Comprobar el mensaje cuando ningún resultado cumple los filtros.

- **Procedimiento:**
  1. Con el filtro anterior, abrir **Filtros** y poner una edad mínima muy alta (por ejemplo, 9999 meses).
  2. Pulsar **Aplicar filtros**.
- **Resultado esperado:** Se muestra un mensaje indicando que no hay resultados.
- **Resultado observado:** ejecución automatizada del 28-oct-2026 (HU-04, criterio 6): con edad mínima 9999 se muestra «No hay mascotas que cumplan estos criterios». Captura: [P-HU-04-06](evidencias/HU-04/P-HU-04-06-sin-coincidencias.png).
- **Estado:** Aprobado (automatizado).

#### P-18: Eliminar los filtros

**Objetivo:** Comprobar que la lista vuelve a mostrar todas las mascotas disponibles.

- **Procedimiento:**
  1. Abrir **Filtros** y pulsar **Limpiar filtros**.
  2. Contar las mascotas.
- **Resultado esperado:** Aparece el mismo número de mascotas que antes de filtrar.
- **Resultado observado:** ejecución automatizada del 28-oct-2026 (HU-04, criterios 8 y 10): «Limpiar filtros» devuelve la lista completa y desaparece el contador; al volver a /buscar la lista sigue sin restricciones. Capturas: [P-HU-04-08](evidencias/HU-04/P-HU-04-08-limpiar-filtros.png), [P-HU-04-10](evidencias/HU-04/P-HU-04-10-vuelta-sin-restricciones.png).
- **Estado:** Aprobado (automatizado).

### 6. Registro de resultados

| ID | Caso de prueba | Resultado esperado | Resultado observado | Estado |
|---|---|---|---|---|
| P-16 | Aplicar uno o más filtros | Todas las tarjetas cumplen el filtro y hay menos resultados que al inicio. | Ver el resultado del caso arriba y la sección «Ejecución automatizada» | Aprobado (automatizado) |
| P-17 | Filtros sin resultados | Se muestra un mensaje indicando que no hay resultados. | Ver el resultado del caso arriba y la sección «Ejecución automatizada» | Aprobado (automatizado) |
| P-18 | Eliminar los filtros | Aparece el mismo número de mascotas que antes de filtrar. | Ver el resultado del caso arriba y la sección «Ejecución automatizada» | Aprobado (automatizado) |

**Nota:** Los estados salen de la ejecución automatizada del 28-oct-2026 (sección «Ejecución automatizada», al final). No hay ejecución manual registrada.

### 7. Datos de prueba

Datos semilla del prototipo (40 mascotas sintéticas, 34 disponibles).

### 8. Evidencias

Guardar las capturas en `evidencias/HU-04/`:

- **P-16:** captura del resultado de “aplicar uno o más filtros”.
- **P-17:** captura del resultado de “filtros sin resultados”.
- **P-18:** captura del resultado de “eliminar los filtros”.

**Enlaces a evidencias:** Capturas en [`evidencias/HU-04/`](evidencias/HU-04/) y video [HU-04.mp4](https://drive.google.com/open?id=1IAINNZ9lwW3DTfBVuiWuAUj-_iJUhLqp). Detalle por criterio en la sección «Ejecución automatizada».

### 9. Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | Sin incidencias en la ejecución automatizada | — | — |

### 10. Conclusión

HU-04 se considerará validada cuando sus casos se hayan ejecutado, los resultados sean satisfactorios y existan evidencias verificables.

**Estado final:** ejecución automatizada aprobada el 28-oct-2026 (PR [#65](https://github.com/ClxNode/KuyayPet/pull/65)); validación del responsable pendiente.

- [ ] Validado por VALTOm07

## HU-05 — Búsqueda de mascotas cercanas

### 1. Información general

- **Proyecto:** KuyayPet
- **Sprint:** Sprint 2
- **Historia de usuario:** HU-05 ([#5](https://github.com/ClxNode/KuyayPet/issues/5)) · tarea [#42](https://github.com/ClxNode/KuyayPet/issues/42)
- **Responsable:** VALTOm07 y kevinesty (asignados en el issue de la HU en GitHub)
- **Fecha planificada:** 29-oct-2026 (fecha límite de la HU en el GitHub Project)
- **Estado:** Ejecutado con pruebas automatizadas el 28-oct-2026; validación del responsable pendiente

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
- **Resultado observado:** ejecución automatizada del 28-oct-2026 (HU-05, criterios 1 a 4, y `map.spec.ts`): con Miraflores y radio de 5 km se muestra «Mostrando mascotas cerca de Miraflores»; cada tarjeta trae foto, nombre y distancia, todas dentro del radio. La prueba usó 5 km, no 20 km. Captura: [P-HU-05-04](evidencias/HU-05/P-HU-05-04-informacion-y-distancia.png).
- **Estado:** Aprobado (automatizado).

#### P-20: Sin mascotas cercanas

**Objetivo:** Comprobar el mensaje cuando no hay mascotas cerca de la ubicación.

- **Procedimiento:**
  1. Elegir un distrito y bajar el radio al mínimo (1 km); pulsar **Buscar**.
  2. Si todavía aparecen mascotas, probar otro distrito hasta obtener cero resultados.
- **Resultado esperado:** Se muestra un mensaje indicando que no hay resultados cercanos.
- **Resultado observado:** ejecución automatizada del 28-oct-2026 (HU-05, criterio 5, PR #51): San Isidro a 1 km muestra «No se encontraron mascotas cercanas». Captura: [P-HU-05-05](evidencias/HU-05/P-HU-05-05-sin-mascotas-cercanas.png).
- **Estado:** Aprobado (automatizado).

### 6. Registro de resultados

| ID | Caso de prueba | Resultado esperado | Resultado observado | Estado |
|---|---|---|---|---|
| P-19 | Búsqueda de mascotas cercanas | Se muestran mascotas disponibles con su distancia, todas dentro del radio indicado. | Ver el resultado del caso arriba y la sección «Ejecución automatizada» | Aprobado (automatizado) |
| P-20 | Sin mascotas cercanas | Se muestra un mensaje indicando que no hay resultados cercanos. | Ver el resultado del caso arriba y la sección «Ejecución automatizada» | Aprobado (automatizado) |

**Nota:** Los estados salen de la ejecución automatizada del 28-oct-2026 (sección «Ejecución automatizada», al final). No hay ejecución manual registrada.

### 7. Datos de prueba

Datos semilla del prototipo. “Usar mi ubicación actual” depende del permiso del navegador; para que la prueba sea repetible, usar la lista de distritos.

### 8. Evidencias

Guardar las capturas en `evidencias/HU-05/`:

- **P-19:** captura del resultado de “búsqueda de mascotas cercanas”.
- **P-20:** captura del resultado de “sin mascotas cercanas”.

**Enlaces a evidencias:** Capturas en [`evidencias/HU-05/`](evidencias/HU-05/) y video [HU-05.mp4](https://drive.google.com/open?id=1z6kJwMQXLgTfaewwNrzeJDjXkZxaiMsL). Detalle por criterio en la sección «Ejecución automatizada».

### 9. Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | Sin incidencias en la ejecución automatizada | — | — |

### 10. Conclusión

HU-05 se considerará validada cuando sus casos se hayan ejecutado, los resultados sean satisfactorios y existan evidencias verificables.

**Estado final:** ejecución automatizada aprobada el 28-oct-2026 (PR [#65](https://github.com/ClxNode/KuyayPet/pull/65)); validación del responsable pendiente.

- [ ] Validado por VALTOm07 y kevinesty

## HU-17 — Guardado de mascotas favoritas

### 1. Información general

- **Proyecto:** KuyayPet
- **Sprint:** Sprint 2
- **Historia de usuario:** HU-17 ([#17](https://github.com/ClxNode/KuyayPet/issues/17)) · tarea [#43](https://github.com/ClxNode/KuyayPet/issues/43)
- **Responsable:** Joseph-L-Q (asignados en el issue de la HU en GitHub)
- **Fecha planificada:** 29-oct-2026 (fecha límite de la HU en el GitHub Project)
- **Estado:** Ejecutado con pruebas automatizadas el 28-oct-2026; validación del responsable pendiente

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
- **Resultado observado:** ejecución automatizada del 28-oct-2026 (HU-17, criterios 2 a 4): el corazón queda activo, aparece el aviso «está en tus favoritos» y la lista de Favoritos tiene una tarjeta más. Capturas: [P-HU-17-03](evidencias/HU-17/P-HU-17-03-confirmacion-visual.png), [P-HU-17-04](evidencias/HU-17/P-HU-17-04-lista-de-favoritos.png).
- **Estado:** Aprobado (automatizado).

#### P-22: Quitar una mascota de favoritas

**Objetivo:** Comprobar que deja de aparecer en la lista.

- **Procedimiento:**
  1. En **Favoritos**, quitar la mascota agregada en P-21.
  2. Revisar la lista.
- **Resultado esperado:** La mascota ya no aparece y el total vuelve al valor inicial.
- **Resultado observado:** ejecución automatizada del 28-oct-2026 (HU-17, criterio 5): el corazón activo retira la mascota de la lista. Captura: [P-HU-17-05](evidencias/HU-17/P-HU-17-05-quitar-de-favoritos.png).
- **Estado:** Aprobado (automatizado).

### 6. Registro de resultados

| ID | Caso de prueba | Resultado esperado | Resultado observado | Estado |
|---|---|---|---|---|
| P-21 | Marcar una mascota como favorita | La mascota aparece en la lista y el total aumentó en uno. | Ver el resultado del caso arriba y la sección «Ejecución automatizada» | Aprobado (automatizado) |
| P-22 | Quitar una mascota de favoritas | La mascota ya no aparece y el total vuelve al valor inicial. | Ver el resultado del caso arriba y la sección «Ejecución automatizada» | Aprobado (automatizado) |

**Nota:** Los estados salen de la ejecución automatizada del 28-oct-2026 (sección «Ejecución automatizada», al final). No hay ejecución manual registrada.

### 7. Datos de prueba

Datos semilla del prototipo.

### 8. Evidencias

Guardar las capturas en `evidencias/HU-17/`:

- **P-21:** captura del resultado de “marcar una mascota como favorita”.
- **P-22:** captura del resultado de “quitar una mascota de favoritas”.

**Enlaces a evidencias:** Capturas en [`evidencias/HU-17/`](evidencias/HU-17/) y video [HU-17.mp4](https://drive.google.com/open?id=1oHoT7boVjNjQ9hfIk-SFmaFrxnN3mc0G). Detalle por criterio en la sección «Ejecución automatizada».

### 9. Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | Sin incidencias en la ejecución automatizada | — | — |

### 10. Conclusión

HU-17 se considerará validada cuando sus casos se hayan ejecutado, los resultados sean satisfactorios y existan evidencias verificables.

**Estado final:** ejecución automatizada aprobada el 28-oct-2026 (PR [#65](https://github.com/ClxNode/KuyayPet/pull/65)); validación del responsable pendiente.

- [ ] Validado por Joseph-L-Q

## HU-19 — Actualización de mascota como adoptada

### 1. Información general

- **Proyecto:** KuyayPet
- **Sprint:** Sprint 2
- **Historia de usuario:** HU-19 ([#19](https://github.com/ClxNode/KuyayPet/issues/19)) · tarea [#44](https://github.com/ClxNode/KuyayPet/issues/44)
- **Responsable:** BeyondNate y Joseph-L-Q (asignados en el issue de la HU en GitHub)
- **Fecha planificada:** 29-oct-2026 (fecha límite de la HU en el GitHub Project)
- **Estado:** Ejecutado con pruebas automatizadas el 28-oct-2026; validación del responsable pendiente

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
- **Resultado observado:** ejecución automatizada del 28-oct-2026 (HU-19, criterios 2 a 4): «Marcar como adoptada» abre el diálogo de confirmación y, al confirmar, la tarjeta muestra «Adoptada 🎉». Captura: [P-HU-19-04](evidencias/HU-19/P-HU-19-04-estado-adoptada.png).
- **Estado:** Aprobado (automatizado).

#### P-24: La mascota adoptada no aparece como disponible

**Objetivo:** Comprobar que un adoptante ya no la ve en la lista de disponibles.

- **Procedimiento:**
  1. Cerrar sesión e ingresar con la cuenta demo de adoptante en el **mismo navegador** (los datos del prototipo son locales).
  2. Abrir **Buscar** y buscar la mascota de P-23.
- **Resultado esperado:** La mascota marcada como adoptada no aparece en la lista de disponibles.
- **Resultado observado:** ejecución automatizada del 28-oct-2026 (HU-19, criterio 5, PR #50): un adoptante ya no ve la mascota en /buscar. Capturas: [P-HU-19-05](evidencias/HU-19/P-HU-19-05-no-aparece-como-disponible.png), [despues-catalogo-sin-p01](evidencias/HU-19/despues-catalogo-sin-p01.png).
- **Estado:** Aprobado (automatizado).

### 6. Registro de resultados

| ID | Caso de prueba | Resultado esperado | Resultado observado | Estado |
|---|---|---|---|---|
| P-23 | Marcar como adoptada | La mascota muestra el estado adoptada en el panel del responsable. | Ver el resultado del caso arriba y la sección «Ejecución automatizada» | Aprobado (automatizado) |
| P-24 | La mascota adoptada no aparece como disponible | La mascota marcada como adoptada no aparece en la lista de disponibles. | Ver el resultado del caso arriba y la sección «Ejecución automatizada» | Aprobado (automatizado) |

**Nota:** Los estados salen de la ejecución automatizada del 28-oct-2026 (sección «Ejecución automatizada», al final). No hay ejecución manual registrada.

### 7. Datos de prueba

Hacer P-23 y P-24 en el mismo navegador: el prototipo guarda los datos en el navegador ([ADR-K01](../../docs/arquitectura.md#adr-k01--sin-backend-en-el-mvp)). Para volver a los datos iniciales: **Reiniciar demo** en el modo presentador.

### 8. Evidencias

Guardar las capturas en `evidencias/HU-19/`:

- **P-23:** captura del resultado de “marcar como adoptada”.
- **P-24:** captura del resultado de “la mascota adoptada no aparece como disponible”.

**Enlaces a evidencias:** Capturas en [`evidencias/HU-19/`](evidencias/HU-19/) y video [HU-19.mp4](https://drive.google.com/open?id=172Zik0A35ssFVT-zQDYMOBR0bdzPcMD6). Detalle por criterio en la sección «Ejecución automatizada».

### 9. Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | El criterio 6 (historial) no se aserta en la ejecución de evidencias: la mascota no figura en el historial del adoptante demo; sí se verificó en Favoritos. Existe una prueba de criterios para el historial en `tests/criterios/HU-19.spec.ts` (PR #63). | Sin acción; queda para la validación del responsable. | Registrada |

### 10. Conclusión

HU-19 se considerará validada cuando sus casos se hayan ejecutado, los resultados sean satisfactorios y existan evidencias verificables.

**Estado final:** ejecución automatizada aprobada el 28-oct-2026 (PR [#65](https://github.com/ClxNode/KuyayPet/pull/65)); validación del responsable pendiente.

- [ ] Validado por BeyondNate y Joseph-L-Q

## Ejecución automatizada (complementa las pruebas manuales)

Videos de todas las HU en Drive: [carpeta videos-hu](https://drive.google.com/open?id=1e3GcYnJlez_F5GLwqA6CveFjX5wRCiQV) (`Gdrive:02-Proyectos/produccion/kuyaypet/videos-hu/`).

> Esta sección es la base de los estados de P-10 a P-24: los resultados son de una ejecución automática con Playwright, no de una prueba manual. La validación humana de cada HU queda en su casilla `Validado por`. Las capturas se nombran `P-HU-NN-<n>-<descripción>`, con `<n>` = número del criterio de aceptación del PDF de historias de usuario.

- **Fecha de ejecución:** 28 de octubre de 2026
- **Ejecutada por:** IchiSieben (con Claude Code), rama `sprint-2/evidencias-automatizadas` (base `sprint-2/integracion`)
- **Versión probada:** prototipo v0.3 con las correcciones del Sprint 2 (`npm run build` + `vite preview` local, puerto 4201)
- **Viewport:** móvil 390×844 (iPhone 13, Chromium)

**Comando** (desde `Codigo_Repositorio/kuyaypet-web`, con el build servido en otra terminal):

```bash
npm run build
npx vite preview --port 4201 --strictPort          # terminal 1
EVIDENCIAS_DIR=../../Sprint_02/7.Pruebas/evidencias \
VIDEOS_DIR=<carpeta fuera del repo> \
BASE_URL=http://localhost:4201/ node scripts/record-hu.mjs 04 05 11 12 16 17 19 21   # terminal 2
```

**Resultado:** 8 de 8 specs pasaron; la suite habitual (`npx playwright test --workers=1`) sigue en verde (54/54). Criterio sin asertar por completo: HU-19 c6, parte de historial (la mascota del escenario no figura en el historial del adoptante demo; sí se asertó en Favoritos).

### HU-04 — Filtrar mascotas según preferencias (capturas por criterio)

Spec: [`tests/evidencias/HU-04.spec.ts`](../../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-04.spec.ts) · Comando: `node scripts/record-hu.mjs 04` (comando completo arriba) · Fecha: 2026-10-28 · Duración del video: 21 s

| Criterio | Captura | Resultado automatizado | Resultado manual |
|---|---|---|---|
| 1. Opciones de filtrado | [captura](evidencias/HU-04/P-HU-04-01-opciones-de-filtrado.png) | «Filtros» abre especie, raza, edad, sexo y tamaño | Sin ejecución manual registrada; ver la casilla de la HU |
| 2. Seleccionar antes de aplicar | [captura](evidencias/HU-04/P-HU-04-02-seleccion-antes-de-aplicar.png) | Con «Gato» marcado, la lista no cambia hasta «Aplicar filtros» | Sin ejecución manual registrada; ver la casilla de la HU |
| 3. Aplicar filtro | [captura](evidencias/HU-04/P-HU-04-03-aplicar-filtro-especie.png) | Solo gatos; el número de tarjetas es igual al de gatos disponibles del store | Sin ejecución manual registrada; ver la casilla de la HU |
| 4. Varios filtros | [captura](evidencias/HU-04/P-HU-04-04-varios-filtros.png) | Gato + Hembra: «Filtros (2)» y solo las que cumplen ambos | Sin ejecución manual registrada; ver la casilla de la HU |
| 5. Ver las encontradas | [captura](evidencias/HU-04/P-HU-04-05-mascotas-encontradas.png) | Tarjetas de los resultados visibles | Sin ejecución manual registrada; ver la casilla de la HU |
| 6. Sin coincidencias | [captura](evidencias/HU-04/P-HU-04-06-sin-coincidencias.png) | Edad mínima 9999: mensaje «No hay mascotas que cumplan estos criterios» | Sin ejecución manual registrada; ver la casilla de la HU |
| 7. Modificar criterios | [captura](evidencias/HU-04/P-HU-04-07-modificar-criterios.png) | Cambia Gato por Perro: la lista se actualiza (solo perros hembra) | Sin ejecución manual registrada; ver la casilla de la HU |
| 8. Limpiar filtros | [captura](evidencias/HU-04/P-HU-04-08-limpiar-filtros.png) | Vuelve la lista completa y desaparece el contador de filtros | Sin ejecución manual registrada; ver la casilla de la HU |
| 9. Perfil desde resultados | [captura](evidencias/HU-04/P-HU-04-09-perfil-desde-resultados.png) | Desde la lista filtrada se abre el perfil de la mascota elegida | Sin ejecución manual registrada; ver la casilla de la HU |
| 10. Volver sin filtros | [captura](evidencias/HU-04/P-HU-04-10-vuelta-sin-restricciones.png) | Al salir y volver a /buscar la lista está completa y sin filtros | Sin ejecución manual registrada; ver la casilla de la HU |

Video: [HU-04.mp4 en Drive](https://drive.google.com/open?id=1IAINNZ9lwW3DTfBVuiWuAUj-_iJUhLqp)

### HU-05 — Búsqueda de mascotas cercanas (capturas por criterio)

Spec: [`tests/evidencias/HU-05.spec.ts`](../../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-05.spec.ts) · Comando: `node scripts/record-hu.mjs 05` (comando completo arriba) · Fecha: 2026-10-28 · Duración del video: 8 s

| Criterio | Captura | Resultado automatizado | Resultado manual |
|---|---|---|---|
| 1. Ubicación | [captura](evidencias/HU-05/P-HU-05-01-ubicacion-elegida.png) | Se elige el distrito Miraflores | Sin ejecución manual registrada; ver la casilla de la HU |
| 2. Radio en km | [captura](evidencias/HU-05/P-HU-05-02-radio-en-km.png) | El control permite fijar 5 km | Sin ejecución manual registrada; ver la casilla de la HU |
| 3. Buscar | [captura](evidencias/HU-05/P-HU-05-03-resultados-en-el-area.png) | «Mostrando mascotas cerca de Miraflores» con resultados | Sin ejecución manual registrada; ver la casilla de la HU |
| 4. Información y distancia | [captura](evidencias/HU-05/P-HU-05-04-informacion-y-distancia.png) | Cada tarjeta muestra foto, nombre y distancia («a N km»), todas dentro de 5 km | Sin ejecución manual registrada; ver la casilla de la HU |
| 5. Sin cercanas | [captura](evidencias/HU-05/P-HU-05-05-sin-mascotas-cercanas.png) | San Isidro a 1 km: «No se encontraron mascotas cercanas» | Sin ejecución manual registrada; ver la casilla de la HU |

Video: [HU-05.mp4 en Drive](https://drive.google.com/open?id=1z6kJwMQXLgTfaewwNrzeJDjXkZxaiMsL)

### HU-11 — Registrar mascota (capturas por criterio)

Spec: [`tests/evidencias/HU-11.spec.ts`](../../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-11.spec.ts) · Comando: `node scripts/record-hu.mjs 11` (comando completo arriba) · Fecha: 2026-10-28 · Duración del video: 11 s

| Criterio | Captura | Resultado automatizado | Resultado manual |
|---|---|---|---|
| 1. Formulario de registro | [captura](evidencias/HU-11/P-HU-11-01-formulario-de-registro.png) | «Registrar» abre el formulario | Sin ejecución manual registrada; ver la casilla de la HU |
| 2. Ingresar los datos | [captura 1](evidencias/HU-11/P-HU-11-02a-datos-paso-1.png) · [captura 2](evidencias/HU-11/P-HU-11-02b-datos-paso-3.png) | El asistente de 3 pasos permite completar los datos (pasos 1 y 3) | Sin ejecución manual registrada; ver la casilla de la HU |
| 3. Registrar | [captura](evidencias/HU-11/P-HU-11-03-mascota-registrada.png) | La mascota aparece en «Mis publicaciones» | Sin ejecución manual registrada; ver la casilla de la HU |
| 4. Mensaje de confirmación | [captura](evidencias/HU-11/P-HU-11-04-mensaje-de-confirmacion.png) | Aviso «¡Mascota registrada!» | Sin ejecución manual registrada; ver la casilla de la HU |
| 5. Campos obligatorios | [captura](evidencias/HU-11/P-HU-11-05-campos-obligatorios.png) | Sin datos, «Continuar» muestra una alerta con lo que falta | Sin ejecución manual registrada; ver la casilla de la HU |
| 6. Disponible para adopción (comportamiento observado) | [captura](evidencias/HU-11/P-HU-11-06-en-revision-no-visible.png) | La mascota queda «En revisión» y un adoptante **no** la ve en /buscar hasta que el admin la apruebe (ADR-05); difiere del texto literal del criterio | Sin ejecución manual registrada; ver la casilla de la HU |

Video: [HU-11.mp4 en Drive](https://drive.google.com/open?id=1X5hKHtWa7i57dCZn2AQmbuLjYDjLJ7_Y)

### HU-12 — Editar información textual (capturas por criterio)

Spec: [`tests/evidencias/HU-12.spec.ts`](../../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-12.spec.ts) · Comando: `node scripts/record-hu.mjs 12` (comando completo arriba) · Fecha: 2026-10-28 · Duración del video: 10 s

| Criterio | Captura | Resultado automatizado | Resultado manual |
|---|---|---|---|
| 1. Formulario prellenado | [captura](evidencias/HU-12/P-HU-12-01-formulario-prellenado.png) | «Editar información» abre el formulario con nombre, raza, descripción e historia de Porotopo | Sin ejecución manual registrada; ver la casilla de la HU |
| 2. Guardar y confirmar | [captura](evidencias/HU-12/P-HU-12-02-cambios-guardados.png) | Aviso «Cambios guardados con éxito» | Sin ejecución manual registrada; ver la casilla de la HU |
| 3. Cancelar | [captura](evidencias/HU-12/P-HU-12-03-cancelar-descarta-cambios.png) | Vuelve al panel sin guardar; el nombre original se conserva | Sin ejecución manual registrada; ver la casilla de la HU |
| 4. Campo obligatorio vacío | [captura](evidencias/HU-12/P-HU-12-04-campo-obligatorio-vacio.png) | Nombre vacío: campo resaltado, «El nombre no puede estar vacío» y no se guarda | Sin ejecución manual registrada; ver la casilla de la HU |
| 5. Perfil público actualizado | [captura](evidencias/HU-12/P-HU-12-05-perfil-publico-actualizado.png) | Tras guardar se abre el perfil público con el nombre y la descripción nuevos | Sin ejecución manual registrada; ver la casilla de la HU |

Video: [HU-12.mp4 en Drive](https://drive.google.com/open?id=1YofEckGlVM9WaueYJpg1RZy2jBHdcVX_)

### HU-16 — Registro visual y etiquetado (capturas por criterio)

Spec: [`tests/evidencias/HU-16.spec.ts`](../../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-16.spec.ts) · Comando: `node scripts/record-hu.mjs 16` (comando completo arriba) · Fecha: 2026-10-28 · Duración del video: 14 s

| Criterio | Captura | Resultado automatizado | Resultado manual |
|---|---|---|---|
| 1. Formulario con fotos | [captura](evidencias/HU-16/P-HU-16-01-formulario-con-fotos.png) | El paso 2 pide «Fotos (máximo 4)» | Sin ejecución manual registrada; ver la casilla de la HU |
| 2. Campos faltantes | [captura](evidencias/HU-16/P-HU-16-02-campos-faltantes.png) | Alerta que indica qué falta | Sin ejecución manual registrada; ver la casilla de la HU |
| 3. Vista previa | [captura](evidencias/HU-16/P-HU-16-03-vista-previa.png) | Un PNG válido muestra su vista previa | Sin ejecución manual registrada; ver la casilla de la HU |
| 4. Formato no permitido | [captura](evidencias/HU-16/P-HU-16-04-formato-no-permitido.png) | Un `.txt` muestra «Formato no permitido» | Sin ejecución manual registrada; ver la casilla de la HU |
| 5. Etiquetas | [captura](evidencias/HU-16/P-HU-16-05-etiqueta-elegida.png) | «Cariñoso/a» queda seleccionada (`aria-pressed`) | Sin ejecución manual registrada; ver la casilla de la HU |
| 6. Confirmación al publicar | [captura](evidencias/HU-16/P-HU-16-06-mensaje-de-confirmacion.png) | Aviso «¡Mascota registrada!» y la mascota aparece en la lista | Sin ejecución manual registrada; ver la casilla de la HU |
| 7. Visible para adoptantes | [captura 1](evidencias/HU-16/P-HU-16-07a-en-catalogo.png) · [captura 2](evidencias/HU-16/P-HU-16-07b-perfil-con-foto-y-etiqueta.png) | Tras la aprobación del admin, el adoptante ve la foto en /buscar y, en el perfil, la foto y la etiqueta | Sin ejecución manual registrada; ver la casilla de la HU |

Video: [HU-16.mp4 en Drive](https://drive.google.com/open?id=1QReoI9Af1EnyTJt9StRAZFVa3SW8EMYf)

### HU-17 — Guardado de mascotas favoritas (capturas por criterio)

Spec: [`tests/evidencias/HU-17.spec.ts`](../../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-17.spec.ts) · Comando: `node scripts/record-hu.mjs 17` (comando completo arriba) · Fecha: 2026-10-28 · Duración del video: 12 s

| Criterio | Captura | Resultado automatizado | Resultado manual |
|---|---|---|---|
| 1. Opción de favorito | [captura](evidencias/HU-17/P-HU-17-01-opcion-de-favorito.png) | Cada tarjeta disponible tiene el corazón «Agregar a favoritos» | Sin ejecución manual registrada; ver la casilla de la HU |
| 2. Guardar | [captura](evidencias/HU-17/P-HU-17-02-corazon-guardado.png) | El corazón queda activo («Quitar … de favoritos») | Sin ejecución manual registrada; ver la casilla de la HU |
| 3. Confirmación visual | [captura](evidencias/HU-17/P-HU-17-03-confirmacion-visual.png) | Aviso «<nombre> está en tus favoritos» y corazón relleno | Sin ejecución manual registrada; ver la casilla de la HU |
| 4. Sección Favoritos | [captura](evidencias/HU-17/P-HU-17-04-lista-de-favoritos.png) | La lista tiene una tarjeta más, con la mascota guardada | Sin ejecución manual registrada; ver la casilla de la HU |
| 5. Quitar | [captura](evidencias/HU-17/P-HU-17-05-quitar-de-favoritos.png) | El corazón activo la retira de la lista | Sin ejecución manual registrada; ver la casilla de la HU |
| 6. Persistencia | [captura](evidencias/HU-17/P-HU-17-06-favoritos-tras-relogin.png) | Tras cerrar sesión y volver a entrar se conservan las mismas mascotas | Sin ejecución manual registrada; ver la casilla de la HU |
| 7. Estado actualizado | [captura](evidencias/HU-17/P-HU-17-07-favorito-adoptada.png) | Un favorito marcado como adoptado muestra «Adoptada 🎉» | Sin ejecución manual registrada; ver la casilla de la HU |

Video: [HU-17.mp4 en Drive](https://drive.google.com/open?id=1oHoT7boVjNjQ9hfIk-SFmaFrxnN3mc0G)

### HU-19 — Actualización de mascota como adoptada (capturas por criterio)

Spec: [`tests/evidencias/HU-19.spec.ts`](../../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-19.spec.ts) · Comando: `node scripts/record-hu.mjs 19` (comando completo arriba) · Fecha: 2026-10-28 · Duración del video: 15 s

| Criterio | Captura | Resultado automatizado | Resultado manual |
|---|---|---|---|
| 1. Mis publicaciones | [captura](evidencias/HU-19/P-HU-19-01-mis-publicaciones.png) | El panel lista las mascotas del responsable | Sin ejecución manual registrada; ver la casilla de la HU |
| 2. Opción | [captura](evidencias/HU-19/P-HU-19-02-opcion-marcar-adoptada.png) | Las disponibles muestran «Marcar como adoptada» | Sin ejecución manual registrada; ver la casilla de la HU |
| 3. Confirmación | [captura](evidencias/HU-19/P-HU-19-03-confirmacion.png) | Diálogo «¿Marcar como adoptada?» | Sin ejecución manual registrada; ver la casilla de la HU |
| 4. Estado Adoptada | [captura](evidencias/HU-19/P-HU-19-04-estado-adoptada.png) | Tras confirmar la tarjeta muestra «Adoptada 🎉» | Sin ejecución manual registrada; ver la casilla de la HU |
| 5. No aparece como disponible | [captura](evidencias/HU-19/P-HU-19-05-no-aparece-como-disponible.png) | Un adoptante ya no ve la mascota en /buscar | Sin ejecución manual registrada; ver la casilla de la HU |
| 6. Favoritos / historial | [captura](evidencias/HU-19/P-HU-19-06a-favoritos-adoptada.png) | Escenario preparado (un favorito marcado como adoptado en el store): «Adoptada 🎉» en Favoritos. El historial no se asertó: la mascota no figuraba en el historial del adoptante demo | Sin ejecución manual registrada; ver la casilla de la HU |
| 7. Solicitud bloqueada | [captura](evidencias/HU-19/P-HU-19-07-solicitud-bloqueada.png) | El perfil dice que ya encontró un hogar, sin botones «Me gusta» ni «Coordinar» | Sin ejecución manual registrada; ver la casilla de la HU |

Video: [HU-19.mp4 en Drive](https://drive.google.com/open?id=172Zik0A35ssFVT-zQDYMOBR0bdzPcMD6)

### HU-21 — Cierre seguro de sesión (capturas por criterio)

Spec: [`tests/evidencias/HU-21.spec.ts`](../../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-21.spec.ts) · Comando: `node scripts/record-hu.mjs 21` (comando completo arriba) · Fecha: 2026-10-28 · Duración del video: 26 s

| Criterio | Captura | Resultado automatizado | Resultado manual |
|---|---|---|---|
| 1. Opción Cerrar sesión | [captura](evidencias/HU-21/P-HU-21-01-opcion-cerrar-sesion.png) | Visible en Perfil | Sin ejecución manual registrada; ver la casilla de la HU |
| 2. Confirmar y cerrar | [captura](evidencias/HU-21/P-HU-21-02-confirmacion.png) | Diálogo de confirmación; al confirmar termina la sesión | Sin ejecución manual registrada; ver la casilla de la HU |
| 3. Redirección | [captura](evidencias/HU-21/P-HU-21-03-redireccion-al-inicio-de-sesion.png) | Lleva a la pantalla de inicio de sesión | Sin ejecución manual registrada; ver la casilla de la HU |
| 4. Página privada | [captura](evidencias/HU-21/P-HU-21-04-pagina-privada-pide-credenciales.png) | `#/favoritos` redirige a inicio de sesión | Sin ejecución manual registrada; ver la casilla de la HU |
| 5. Sin datos residuales | [captura](evidencias/HU-21/P-HU-21-05-sin-sesion-residual.png) | `sessionUserId` nulo en el almacenamiento, también tras recargar. Nota: el resto del store sigue en localStorage (ver auditoría) | Sin ejecución manual registrada; ver la casilla de la HU |
| 6. Inactividad | [captura](evidencias/HU-21/P-HU-21-06-cierre-por-inactividad.png) | Con reloj simulado: a 14 min sigue; a 16 min cierra y avisa «Sesión cerrada por inactividad» | Sin ejecución manual registrada; ver la casilla de la HU |
| 7. Error al cerrar | [captura 1](evidencias/HU-21/P-HU-21-07a-error-al-cerrar.png) · [captura 2](evidencias/HU-21/P-HU-21-07b-reintento-exitoso.png) | Con un fallo de almacenamiento inyectado: «No se pudo cerrar sesión. Intenta de nuevo.», la sesión sigue activa; el reintento cierra | Sin ejecución manual registrada; ver la casilla de la HU |

Video: [HU-21.mp4 en Drive](https://drive.google.com/open?id=1--3qDfrOgcItQb3HPJwBEUX3cjAFtRu_)

- [ ] Validado por ClxNode (HU-21, responsable según el issue [#21](https://github.com/ClxNode/KuyayPet/issues/21))
