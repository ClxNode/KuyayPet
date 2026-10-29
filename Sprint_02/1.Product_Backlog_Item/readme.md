# 1. Product Backlog Item — Sprint 2

> **Propuesta — se valida en la planning del video.** Historias candidatas del [planning propuesto](../2.Sprint_Planning/readme.md). El enunciado, el rol y la prioridad vienen del [catálogo](../../docs/historias-de-usuario.md) y de cada issue; los criterios de aceptación se copiaron **tal cual** de los issues de GitHub, donde están marcados como *propuesta, pendiente de validar con el equipo* (el catálogo no trae criterios).

**Sprint 2** · **Estado general:** Pendiente

## Objetivo del Sprint 2 (propuesto)

Mascotas — catálogo: un responsable publica y edita una mascota con fotos, y un adoptante la encuentra con búsqueda, filtros y cercanía, y la guarda en favoritos.

## HU-11 — Registrar mascota

**Issue:** [#11](https://github.com/ClxNode/KuyayPet/issues/11) · **Rol:** Responsable de mascota · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Must · **Estado:** Pendiente

Yo como responsable de una mascota, deseo registrar una mascota en la plataforma, para ponerla a disposición de posibles adoptantes.

Criterios de aceptación (propuesta, pendiente de validar con el equipo):

1. **Dado** que completo el formulario de registro con los datos obligatorios, **cuando** guardo el registro, **entonces** la mascota queda registrada en la plataforma.
2. **Dado** que falta algún dato obligatorio, **cuando** intento guardar el registro, **entonces** el sistema indica qué falta y no registra la mascota.

**Puntos:** ✋ Pendiente (Planning Poker)

## HU-16 — Registro visual y etiquetado de mascotas

**Issue:** [#16](https://github.com/ClxNode/KuyayPet/issues/16) · **Rol:** Responsable de mascota · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Must · **Estado:** Pendiente

Yo como responsable de una mascota, deseo agregar imágenes y etiquetas a las mascotas que registro, para que los adoptantes las identifiquen mejor.

Criterios de aceptación (propuesta, pendiente de validar con el equipo):

1. **Dado** que estoy registrando o editando una mascota, **cuando** agrego una imagen, **entonces** la imagen se muestra en el perfil de la mascota.
2. **Dado** que estoy registrando o editando una mascota, **cuando** agrego etiquetas, **entonces** las etiquetas se muestran asociadas a la mascota.

**Puntos:** ✋ Pendiente (Planning Poker)

## HU-12 — Editar información textual de una mascota

**Issue:** [#12](https://github.com/ClxNode/KuyayPet/issues/12) · **Rol:** Responsable de mascota · **Prioridad del catálogo:** Alta · **MoSCoW propuesto:** Must · **Estado:** Pendiente

Yo como responsable de una mascota, deseo editar la información textual de una mascota que registré, para mantener sus datos actualizados.

Criterios de aceptación (propuesta, pendiente de validar con el equipo):

1. **Dado** que soy el responsable de una mascota registrada, **cuando** edito su información textual y guardo, **entonces** el perfil muestra la información actualizada.
2. **Dado** que una mascota no fue registrada por mí, **cuando** intento editar su información, **entonces** el sistema no me lo permite.

**Puntos:** ✋ Pendiente (Planning Poker)

## HU-04 — Filtrar mascotas según preferencias

**Issue:** [#4](https://github.com/ClxNode/KuyayPet/issues/4) · **Rol:** Adoptante · **Prioridad del catálogo:** Alta · **MoSCoW propuesto:** Must · **Estado:** Pendiente

Yo como adoptante, deseo filtrar las mascotas según mis preferencias, para encontrar más rápido las mascotas que se ajustan a lo que busco.

Criterios de aceptación (propuesta, pendiente de validar con el equipo):

1. **Dado** que estoy viendo la lista de mascotas disponibles, **cuando** aplico uno o más filtros, **entonces** la lista muestra solo las mascotas que cumplen esos filtros.
2. **Dado** que ningún resultado cumple los filtros aplicados, **cuando** aplico los filtros, **entonces** el sistema muestra un mensaje indicando que no hay resultados.
3. **Dado** que tengo filtros aplicados, **cuando** los elimino, **entonces** la lista vuelve a mostrar todas las mascotas disponibles.

**Puntos:** ✋ Pendiente (Planning Poker)

## HU-05 — Búsqueda de mascotas cercanas

**Issue:** [#5](https://github.com/ClxNode/KuyayPet/issues/5) · **Rol:** Adoptante · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Should · **Estado:** Pendiente

Yo como adoptante, deseo buscar mascotas cercanas a mi ubicación, para encontrar opciones de adopción a las que pueda acceder con facilidad.

Criterios de aceptación (propuesta, pendiente de validar con el equipo):

1. **Dado** que indico mi ubicación, **cuando** realizo la búsqueda de mascotas cercanas, **entonces** el sistema muestra mascotas disponibles cercanas a esa ubicación.
2. **Dado** que no hay mascotas disponibles cerca de la ubicación indicada, **cuando** realizo la búsqueda, **entonces** el sistema muestra un mensaje indicando que no hay resultados.

**Puntos:** ✋ Pendiente (Planning Poker)

## HU-17 — Guardado de mascotas favoritas

**Issue:** [#17](https://github.com/ClxNode/KuyayPet/issues/17) · **Rol:** Adoptante · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Should · **Estado:** Pendiente

Yo como adoptante, deseo guardar mascotas como favoritas, para volver a consultarlas fácilmente.

Criterios de aceptación (propuesta, pendiente de validar con el equipo):

1. **Dado** que estoy viendo una mascota, **cuando** la marco como favorita, **entonces** la mascota aparece en mi lista de favoritas.
2. **Dado** que una mascota está en mi lista de favoritas, **cuando** la quito de favoritas, **entonces** deja de aparecer en la lista.

**Puntos:** ✋ Pendiente (Planning Poker)

## HU-19 — Actualización de mascota como adoptada

**Issue:** [#19](https://github.com/ClxNode/KuyayPet/issues/19) · **Rol:** Responsable de mascota · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Could · **Estado:** Pendiente

Yo como responsable de una mascota, deseo marcar una mascota como adoptada, para que deje de mostrarse como disponible.

Criterios de aceptación (propuesta, pendiente de validar con el equipo):

1. **Dado** que soy responsable de una mascota disponible, **cuando** la marco como adoptada, **entonces** su estado cambia a adoptada.
2. **Dado** que una mascota está marcada como adoptada, **cuando** un adoptante consulta la lista de mascotas disponibles, **entonces** esa mascota no aparece en la lista.

**Puntos:** ✋ Pendiente (Planning Poker)

## Carryover del Sprint 1

HU-01, HU-02 y HU-03 conservan sus enunciados y criterios en el [Product Backlog Item del Sprint 1](../../Sprint_01/1.Product_Backlog_Item/readme.md). Si el equipo las pasa al Sprint 2 en la escena 1 del video, se listan aquí con el motivo.

> ✋ Pendiente: HU de carryover y motivo.
