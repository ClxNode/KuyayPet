# 1. Product Backlog Item — Sprint 2

> Historias del Sprint 2 según las etiquetas `sprint-2`, el [GitHub Project](https://github.com/users/ClxNode/projects/3) y el [planning](../2.Sprint_Planning/readme.md). El enunciado, el rol y la prioridad vienen del [catálogo](../../docs/historias-de-usuario.md) y de cada issue. Los criterios de aceptación listados se copiaron **tal cual** de los issues de GitHub, donde están marcados como *propuesta, pendiente de validar con el equipo*; el documento del equipo (`Lista_Historias_de_Usuario_KuyayPet`) trae más criterios por HU y se indica cuántos. Los puntos son una **propuesta** (el equipo no registró puntos): regla única para todo el proyecto, Fibonacci por número de criterios del documento del equipo (≤4: 2 · 5: 3 · 6–7: 5 · ≥8: 8, un escalón más por complejidad técnica extra).

**Sprint 2** · **Estado general:** Terminado en GitHub (las 8 HU tienen el issue cerrado el 29-oct-2026, entre 11:51 y 11:52 hora de Lima) · **Validación de los responsables:** pendiente (casilla por HU en [7.Pruebas](../7.Pruebas/readme.md))

## Objetivo del Sprint 2 (propuesto el 28-oct; el equipo no registró otro)

Mascotas — catálogo: un responsable publica y edita una mascota con fotos, y un adoptante la encuentra con búsqueda, filtros y cercanía, y la guarda en favoritos.

## HU-11 — Registrar mascota

**Issue:** [#11](https://github.com/ClxNode/KuyayPet/issues/11) · **Rol:** Responsable de mascota · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Must · **Estado:** Terminado (issue cerrado el 29-oct-2026)

Yo como responsable de una mascota, deseo registrar una mascota en la plataforma, para ponerla a disposición de posibles adoptantes.

Criterios de aceptación (propuesta, pendiente de validar con el equipo):

1. **Dado** que completo el formulario de registro con los datos obligatorios, **cuando** guardo el registro, **entonces** la mascota queda registrada en la plataforma.

2. **Dado** que falta algún dato obligatorio, **cuando** intento guardar el registro, **entonces** el sistema indica qué falta y no registra la mascota.


**Puntos (propuesta, no registrados por el equipo):** 5 — 6 criterios

**Responsable en GitHub:** Dylan200-7 · **Tarea de prueba:** #38 · **Criterios:** 2 en el issue, 6 en el documento del equipo · **Evidencia:** [7.Pruebas › HU-11](../7.Pruebas/readme.md#hu-11--registrar-mascota) · [video](https://drive.google.com/open?id=1X5hKHtWa7i57dCZn2AQmbuLjYDjLJ7_Y)


## HU-16 — Registro visual y etiquetado de mascotas

**Issue:** [#16](https://github.com/ClxNode/KuyayPet/issues/16) · **Rol:** Responsable de mascota · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Must · **Estado:** Terminado (issue cerrado el 29-oct-2026)

Yo como responsable de una mascota, deseo agregar imágenes y etiquetas a las mascotas que registro, para que los adoptantes las identifiquen mejor.

Criterios de aceptación (propuesta, pendiente de validar con el equipo):

1. **Dado** que estoy registrando o editando una mascota, **cuando** agrego una imagen, **entonces** la imagen se muestra en el perfil de la mascota.

2. **Dado** que estoy registrando o editando una mascota, **cuando** agrego etiquetas, **entonces** las etiquetas se muestran asociadas a la mascota.


**Puntos (propuesta, no registrados por el equipo):** 5 — 7 criterios

**Responsable en GitHub:** ClxNode y Dylan200-7 · **Tarea de prueba:** #39 · **Criterios:** 2 en el issue, 7 en el documento del equipo · **Evidencia:** [7.Pruebas › HU-16](../7.Pruebas/readme.md#hu-16--registro-visual-y-etiquetado-de-mascotas) · [video](https://drive.google.com/open?id=1QReoI9Af1EnyTJt9StRAZFVa3SW8EMYf)


## HU-12 — Editar información textual de una mascota

**Issue:** [#12](https://github.com/ClxNode/KuyayPet/issues/12) · **Rol:** Responsable de mascota · **Prioridad del catálogo:** Alta · **MoSCoW propuesto:** Must · **Estado:** Terminado (issue cerrado el 29-oct-2026)

Yo como responsable de una mascota, deseo editar la información textual de una mascota que registré, para mantener sus datos actualizados.

Criterios de aceptación (propuesta, pendiente de validar con el equipo):

1. **Dado** que soy el responsable de una mascota registrada, **cuando** edito su información textual y guardo, **entonces** el perfil muestra la información actualizada.

2. **Dado** que una mascota no fue registrada por mí, **cuando** intento editar su información, **entonces** el sistema no me lo permite.


**Puntos (propuesta, no registrados por el equipo):** 3 — 5 criterios

**Responsable en GitHub:** ClxNode y Dylan200-7 · **Tarea de prueba:** #40 · **Criterios:** 2 en el issue, 5 en el documento del equipo · **Evidencia:** [7.Pruebas › HU-12](../7.Pruebas/readme.md#hu-12--editar-información-textual-de-una-mascota) · [video](https://drive.google.com/open?id=1YofEckGlVM9WaueYJpg1RZy2jBHdcVX_)


## HU-04 — Filtrar mascotas según preferencias

**Issue:** [#4](https://github.com/ClxNode/KuyayPet/issues/4) · **Rol:** Adoptante · **Prioridad del catálogo:** Alta · **MoSCoW propuesto:** Must · **Estado:** Terminado (issue cerrado el 29-oct-2026)

Yo como adoptante, deseo filtrar las mascotas según mis preferencias, para encontrar más rápido las mascotas que se ajustan a lo que busco.

Criterios de aceptación (propuesta, pendiente de validar con el equipo):

1. **Dado** que estoy viendo la lista de mascotas disponibles, **cuando** aplico uno o más filtros, **entonces** la lista muestra solo las mascotas que cumplen esos filtros.

2. **Dado** que ningún resultado cumple los filtros aplicados, **cuando** aplico los filtros, **entonces** el sistema muestra un mensaje indicando que no hay resultados.

3. **Dado** que tengo filtros aplicados, **cuando** los elimino, **entonces** la lista vuelve a mostrar todas las mascotas disponibles.


**Puntos (propuesta, no registrados por el equipo):** 8 — 10 criterios

**Responsable en GitHub:** VALTOm07 · **Tarea de prueba:** #41 · **Criterios:** 3 en el issue, 10 en el documento del equipo · **Evidencia:** [7.Pruebas › HU-04](../7.Pruebas/readme.md#hu-04--filtrar-mascotas-según-preferencias) · [video](https://drive.google.com/open?id=1IAINNZ9lwW3DTfBVuiWuAUj-_iJUhLqp)


## HU-05 — Búsqueda de mascotas cercanas

**Issue:** [#5](https://github.com/ClxNode/KuyayPet/issues/5) · **Rol:** Adoptante · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Should · **Estado:** Terminado (issue cerrado el 29-oct-2026)

Yo como adoptante, deseo buscar mascotas cercanas a mi ubicación, para encontrar opciones de adopción a las que pueda acceder con facilidad.

Criterios de aceptación (propuesta, pendiente de validar con el equipo):

1. **Dado** que indico mi ubicación, **cuando** realizo la búsqueda de mascotas cercanas, **entonces** el sistema muestra mascotas disponibles cercanas a esa ubicación.

2. **Dado** que no hay mascotas disponibles cerca de la ubicación indicada, **cuando** realizo la búsqueda, **entonces** el sistema muestra un mensaje indicando que no hay resultados.


**Puntos (propuesta, no registrados por el equipo):** 5 — 5 criterios + 1 escalón por mapa y cálculo de distancia

**Responsable en GitHub:** VALTOm07 y kevinesty · **Tarea de prueba:** #42 · **Criterios:** 2 en el issue, 5 en el documento del equipo · **Evidencia:** [7.Pruebas › HU-05](../7.Pruebas/readme.md#hu-05--búsqueda-de-mascotas-cercanas) · [video](https://drive.google.com/open?id=1z6kJwMQXLgTfaewwNrzeJDjXkZxaiMsL)


## HU-17 — Guardado de mascotas favoritas

**Issue:** [#17](https://github.com/ClxNode/KuyayPet/issues/17) · **Rol:** Adoptante · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Should · **Estado:** Terminado (issue cerrado el 29-oct-2026)

Yo como adoptante, deseo guardar mascotas como favoritas, para volver a consultarlas fácilmente.

Criterios de aceptación (propuesta, pendiente de validar con el equipo):

1. **Dado** que estoy viendo una mascota, **cuando** la marco como favorita, **entonces** la mascota aparece en mi lista de favoritas.

2. **Dado** que una mascota está en mi lista de favoritas, **cuando** la quito de favoritas, **entonces** deja de aparecer en la lista.


**Puntos (propuesta, no registrados por el equipo):** 5 — 7 criterios

**Responsable en GitHub:** Joseph-L-Q · **Tarea de prueba:** #43 · **Criterios:** 2 en el issue, 7 en el documento del equipo · **Evidencia:** [7.Pruebas › HU-17](../7.Pruebas/readme.md#hu-17--guardado-de-mascotas-favoritas) · [video](https://drive.google.com/open?id=1oHoT7boVjNjQ9hfIk-SFmaFrxnN3mc0G)


## HU-19 — Actualización de mascota como adoptada

**Issue:** [#19](https://github.com/ClxNode/KuyayPet/issues/19) · **Rol:** Responsable de mascota · **Prioridad del catálogo:** Media · **MoSCoW propuesto:** Could · **Estado:** Terminado (issue cerrado el 29-oct-2026)

Yo como responsable de una mascota, deseo marcar una mascota como adoptada, para que deje de mostrarse como disponible.

Criterios de aceptación (propuesta, pendiente de validar con el equipo):

1. **Dado** que soy responsable de una mascota disponible, **cuando** la marco como adoptada, **entonces** su estado cambia a adoptada.

2. **Dado** que una mascota está marcada como adoptada, **cuando** un adoptante consulta la lista de mascotas disponibles, **entonces** esa mascota no aparece en la lista.


**Puntos (propuesta, no registrados por el equipo):** 5 — 7 criterios

**Responsable en GitHub:** BeyondNate y Joseph-L-Q · **Tarea de prueba:** #44 · **Criterios:** 2 en el issue, 7 en el documento del equipo · **Evidencia:** [7.Pruebas › HU-19](../7.Pruebas/readme.md#hu-19--actualización-de-mascota-como-adoptada) · [video](https://drive.google.com/open?id=172Zik0A35ssFVT-zQDYMOBR0bdzPcMD6)


## HU-21 — Cierre seguro de sesión

**Issue:** [#21](https://github.com/ClxNode/KuyayPet/issues/21) · **Rol:** Usuario común · **Prioridad del catálogo:** Alta · **MoSCoW propuesto:** no clasificada en la planning propuesta (el issue lleva la etiqueta `sprint-2` y su PR [#64](https://github.com/ClxNode/KuyayPet/pull/64) se abrió el 28-oct) · **Estado:** Terminado (issue cerrado el 29-oct-2026)

Yo como usuario común, deseo cerrar mi sesión de forma segura, para proteger mi cuenta, en especial en dispositivos compartidos.

Criterios de aceptación (propuesta, pendiente de validar con el equipo):

1. **Dado** que tengo una sesión iniciada, **cuando** elijo cerrar sesión, **entonces** la sesión se cierra y vuelvo a una pantalla pública.

2. **Dado** que cerré mi sesión, **cuando** intento acceder a una sección que requiere sesión, **entonces** el sistema me pide iniciar sesión de nuevo.


**Puntos (propuesta, no registrados por el equipo):** 5 — 7 criterios

**Responsable en GitHub:** ClxNode · **Criterios:** 2 en el issue, 7 en el documento del equipo · **Evidencia:** [7.Pruebas › HU-21](../7.Pruebas/readme.md#hu-21--cierre-seguro-de-sesión-capturas-por-criterio) · [video](https://drive.google.com/open?id=1--3qDfrOgcItQb3HPJwBEUX3cjAFtRu_)

## Carryover del Sprint 1

HU-01, HU-02 y HU-03 conservan sus enunciados y criterios en el [Product Backlog Item del Sprint 1](../../Sprint_01/1.Product_Backlog_Item/readme.md) (puntos propuestos: HU-01 = 5, HU-02 = 5, HU-03 = 3; total 13).

En GitHub siguen en el milestone Sprint 1 (sin etiqueta `sprint-2`) y sus issues #1, #2 y #3 se cerraron el 28-oct-2026 a las 16:37 (hora de Lima). Lo que pasó al Sprint 2 fue su validación y su evidencia: PR #52, #53, #55 y #56 (fusionados el 28-oct entre 23:46 y 23:53 hora de Lima), commits del equipo en `Sprint_01/7.Pruebas` el 29-oct y PR #67 (fusionado el 12-nov). El equipo no dejó un registro de la decisión de pasar estas HU al Sprint 2 ni de su motivo.
