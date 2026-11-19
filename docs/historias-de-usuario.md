# 📋 Historias de usuario — KuyayPet

[← Volver a la presentación](../readme.md)

Este documento reúne las **26 historias de usuario** del proyecto con todos sus criterios de aceptación, tal como los redactó el equipo en la *Lista de historias de usuario – KuyayPet* [1]. Los criterios se copian sin reescribir y se numeran `c1…cN` en el orden del documento del equipo.

> Generado por `kuyaypet-tools/gen_historias.py` a partir de `kuyaypet-tools/datos/hu_full.json`; los datos de sprint, PR y estado salen del volcado de GitHub del 2026-11-19. No se edita a mano.

## Cómo leer este documento

- **Prioridad del documento:** Alta / Media / Baja, tal como figura en la lista del equipo.
- **MoSCoW:** regla aplicada una sola vez a todo el proyecto — Alta → Must, Media → Should, Baja → Could. Es una equivalencia, no una decisión nueva del equipo.
- **Puntos propuestos:** el equipo no registró puntos. Son una *propuesta* de `kuyaypet-tools/datos/puntos.json`. Regla: Propuesta (no registrada por el equipo): Fibonacci por número de criterios del documento del equipo — ≤4: 2 · 5: 3 · 6–7: 5 · ≥8: 8 — y un escalón más cuando hay complejidad técnica extra. HU-26 cuenta los 2 criterios de su issue (no está en el PDF). Sprint 1 coincide con los 13 puntos propuestos en Sprint_01.
- **Sprint:** el sprint en que la HU se probó y entregó (HU-13 llevaba la etiqueta `sprint-2` en GitHub, pero se entregó en el Sprint 3: PR #73).
- **Estado:** *Terminada* = tiene PR fusionados (según `datos/prs.json`) y el issue cerrado. Los PR de código de HU-14, 15 y 22–26 (#88–#94) y las evidencias (#95) se fusionaron el 2026-11-19.
- **Tests:** los specs de `tests/criterios/` y `tests/evidencias/` de HU-14, 15 y 22–26 (Sprint 3, parte b) existen solo en las ramas remotas indicadas; no están en `main`.

## Índice

| HU | Título | Rol | Prioridad | MoSCoW | Puntos (propuesta) | Sprint | Estado |
|:--|:--|:--|:--:|:--:|:--:|:--:|:--|
| [HU-01](#hu-01) | Registro de usuario | Usuario común | Alta | Must | 5 | 1 | Terminada |
| [HU-02](#hu-02) | Visualización de mascotas disponibles para adopción | Adoptante | Alta | Must | 5 | 1 | Terminada |
| [HU-03](#hu-03) | Ver perfil de una mascota | Adoptante | Alta | Must | 3 | 1 | Terminada |
| [HU-04](#hu-04) | Filtrar mascotas según preferencias | Adoptante | Alta | Must | 8 | 2 | Terminada |
| [HU-05](#hu-05) | Búsqueda de mascotas cercanas | Adoptante | Media | Should | 5 | 2 | Terminada |
| [HU-06](#hu-06) | Indicar interés en una mascota (Like / Dislike) | Adoptante | Media | Should | 3 | 3 | Terminada |
| [HU-07](#hu-07) | Recibir un Match por compatibilidad | Adoptante | Media | Should | 8 | 3 | Terminada |
| [HU-08](#hu-08) | Comunicarse con el responsable de la mascota | Adoptante | Alta | Must | 8 | 3 | Terminada |
| [HU-09](#hu-09) | Chat entre usuarios interesados en la misma mascota | Usuario común | Baja | Could | 5 | 3 | Terminada |
| [HU-10](#hu-10) | Coordinar posible adopción | Adoptante | Alta | Must | 5 | 3 | Terminada |
| [HU-11](#hu-11) | Registrar mascota | Responsable de mascota | Media | Should | 5 | 2 | Terminada |
| [HU-12](#hu-12) | Editar información textual de una mascota | Responsable de mascota | Alta | Must | 3 | 2 | Terminada |
| [HU-13](#hu-13) | Notificación de interés en mascota | Responsable de mascota | Media | Should | 3 | 3 | Terminada |
| [HU-14](#hu-14) | Consulta de información sobre adopción | Usuario común | Baja | Could | 2 | 3 | Terminada |
| [HU-15](#hu-15) | Recuperación de contraseña | Usuario común | Media | Should | 3 | 3 | Terminada |
| [HU-16](#hu-16) | Registro visual y etiquetado de mascotas | Responsable de mascota | Media | Should | 5 | 2 | Terminada |
| [HU-17](#hu-17) | Guardado de mascotas favoritas | Adoptante | Media | Should | 5 | 2 | Terminada |
| [HU-18](#hu-18) | Historial de mascotas de interés | Adoptante | Baja | Could | 5 | 3 | Terminada |
| [HU-19](#hu-19) | Actualización de mascota como adoptada | Responsable de mascota | Media | Should | 5 | 2 | Terminada |
| [HU-20](#hu-20) | Visualización de compatibilidades / Matches | Adoptante | Media | Should | 5 | 3 | Terminada |
| [HU-21](#hu-21) | Cierre seguro de sesión | Usuario común | Alta | Must | 5 | 2 | Terminada |
| [HU-22](#hu-22) | Gestionar usuarios | Administrador | Alta | Must | 5 | 3 | Terminada |
| [HU-23](#hu-23) | Revisar publicaciones de mascotas | Administrador | Alta | Must | 5 | 3 | Terminada |
| [HU-24](#hu-24) | Aprobar o rechazar publicaciones de mascotas | Administrador | Alta | Must | 5 | 3 | Terminada |
| [HU-25](#hu-25) | Desactivar cuentas de usuarios | Administrador | Media | Should | 5 | 3 | Terminada |
| [HU-26](#hu-26) | Gestionar información inapropiada en la plataforma | Administrador | Media | Should | 3 | 3 | Terminada |

- Sprint 1: 13 puntos propuestos
- Sprint 2: 41 puntos propuestos
- Sprint 3: 70 puntos propuestos

<a id="hu-01"></a>

## HU-01 — Registro de usuario

**Enunciado**

- **Como** usuario común
- **Quiero** registrarme en KuyayPet
- **Para** poder acceder a la plataforma

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el usuario se encuentra en la pantalla de registro, CUANDO desea crear una cuenta, ENTONCES el sistema debe solicitar nombre, correo electrónico y contraseña.
2. **c2** — DADO que el usuario se encuentra completando el formulario de registro, CUANDO intenta registrarse dejando uno o más campos vacíos, ENTONCES el sistema debe indicar que todos los campos son obligatorios.
3. **c3** — DADO que el usuario se encuentra completando el formulario de registro, CUANDO ingresa su correo electrónico, ENTONCES el sistema debe validar que tenga un formato válido.
4. **c4** — DADO que el usuario se encuentra completando el formulario de registro, CUANDO ingresa una contraseña, ENTONCES el sistema debe validar que tenga como mínimo 8 caracteres.
5. **c5** — DADO que ya existe una cuenta asociada al correo ingresado, CUANDO el usuario intenta registrarse con ese mismo correo, ENTONCES el sistema no debe permitir crear una nueva cuenta.
6. **c6** — DADO que el usuario ha completado correctamente todos los datos requeridos, CUANDO selecciona la opción de registrarse, ENTONCES el sistema debe crear la cuenta y mostrar un mensaje de confirmación.
7. **c7** — DADO que el usuario está completando el formulario de registro, CUANDO ingresa algún dato inválido, ENTONCES el sistema debe mostrar un mensaje indicando el error.

| Dato | Valor |
|:--|:--|
| Rol | Usuario común |
| Prioridad del documento | Alta |
| MoSCoW | Must |
| Puntos (propuesta) | 5 (7 criterios) |
| Sprint | 1 |
| Ruta en la app | `/registro` (según `src/App.tsx`) |
| Issue | [#1](https://github.com/ClxNode/KuyayPet/issues/1) (cerrado) |
| Tests | [`tests/evidencias/HU-01.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-01.spec.ts)<br>[`tests/smoke.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/smoke.spec.ts) |
| Evidencias | [`Sprint_01/7.Pruebas/evidencias/HU-01/`](../Sprint_01/7.Pruebas/evidencias/HU-01/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>Evidencias: [#65](https://github.com/ClxNode/KuyayPet/pull/65) |
| Estado | Terminada |

<a id="hu-02"></a>

## HU-02 — Visualización de mascotas disponibles para adopción

**Enunciado**

- **Como** Adoptante
- **Quiero** visualizar las mascotas disponibles para adopción
- **Para** Conocer las opciones de mascotas y seleccionar una de mis interès

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el sistema cuenta con mascotas registradas y disponibles para adopción, CUANDO el adoptante ingresa a la sección de mascotas, ENTONCES el sistema debe mostrar una lista de mascotas disponibles para adopción.
2. **c2** — DADO que existen mascotas disponibles, CUANDO el adoptante visualiza la lista, ENTONCES cada mascota debe mostrar fotografía, nombre, especie, edad y ubicación.
3. **c3** — DADO que se muestra una mascota disponible, CUANDO el adoptante la selecciona, ENTONCES el sistema debe permitir consultar su información detallada.
4. **c4** — DADO que existen mascotas con diferentes estados de disponibilidad, CUANDO el adoptante ingresa a la sección, ENTONCES el sistema debe mostrar únicamente las mascotas disponibles para adopción.
5. **c5** — DADO que una mascota tiene información registrada, CUANDO el adoptante la visualiza, ENTONCES el sistema debe mostrar los datos registrados por el responsable.
6. **c6** — DADO que no existen mascotas disponibles, CUANDO el adoptante ingresa a la sección, ENTONCES el sistema debe mostrar un mensaje informativo.
7. **c7** — DADO que el adoptante utiliza una computadora o dispositivo móvil, CUANDO ingresa a la sección de mascotas, ENTONCES la lista debe visualizarse correctamente y adaptarse al tamaño de la pantalla.

| Dato | Valor |
|:--|:--|
| Rol | Adoptante |
| Prioridad del documento | Alta |
| MoSCoW | Must |
| Puntos (propuesta) | 5 (7 criterios) |
| Sprint | 1 |
| Ruta en la app | `/buscar` (según `src/App.tsx`) |
| Issue | [#2](https://github.com/ClxNode/KuyayPet/issues/2) (cerrado) |
| Tests | [`tests/criterios/HU-02.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-02.spec.ts)<br>[`tests/evidencias/HU-02.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-02.spec.ts)<br>[`tests/adopter.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/adopter.spec.ts)<br>[`tests/catalogo.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/catalogo.spec.ts)<br>[`tests/desktop.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/desktop.spec.ts)<br>[`tests/owner.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/owner.spec.ts) |
| Evidencias | [`Sprint_01/7.Pruebas/evidencias/HU-02/`](../Sprint_01/7.Pruebas/evidencias/HU-02/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#52](https://github.com/ClxNode/KuyayPet/pull/52) (HU-02: mensaje informativo cuando no hay mascotas disponibles (I-01))<br>[#53](https://github.com/ClxNode/KuyayPet/pull/53) (HU-02: catálogo y perfil usan el ancho de la pantalla en escritorio)<br>[#55](https://github.com/ClxNode/KuyayPet/pull/55) (HU-02: test del criterio 2 (la tarjeta muestra la edad))<br>Evidencias: [#65](https://github.com/ClxNode/KuyayPet/pull/65) |
| Estado | Terminada |

<a id="hu-03"></a>

## HU-03 — Ver perfil de una mascota

**Enunciado**

- **Como** Adoptante
- **Quiero** ver el perfil de una mascota
- **Para** conocer información detallada sobre ella

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el sistema muestra una mascota disponible, CUANDO el adoptante selecciona la opción “Ver perfil”, ENTONCES el sistema debe mostrar el perfil detallado de la mascota.
2. **c2** — DADO que el perfil de una mascota está disponible, CUANDO el adoptante ingresa al perfil, ENTONCES debe visualizar su fotografía, nombre, especie, raza, edad y ubicación.
3. **c3** — DADO que la mascota tiene información adicional registrada, CUANDO el adoptante consulta su perfil, ENTONCES el sistema debe mostrar dicha información.
4. **c4** — DADO que el adoptante se encuentra en el perfil de una mascota, CUANDO revisa la información, ENTONCES los datos mostrados deben corresponder a los registrados por el responsable de la mascota.
5. **c5** — DADO que el perfil de la mascota no contiene información adicional, CUANDO el adoptante lo consulta, ENTONCES el sistema debe mostrar únicamente la información disponible sin generar errores.

| Dato | Valor |
|:--|:--|
| Rol | Adoptante |
| Prioridad del documento | Alta |
| MoSCoW | Must |
| Puntos (propuesta) | 3 (5 criterios) |
| Sprint | 1 |
| Ruta en la app | `/mascota/:id` (según `src/App.tsx`) |
| Issue | [#3](https://github.com/ClxNode/KuyayPet/issues/3) (cerrado) |
| Tests | [`tests/criterios/HU-03.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-03.spec.ts)<br>[`tests/evidencias/HU-03.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-03.spec.ts)<br>[`tests/adopter.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/adopter.spec.ts)<br>[`tests/desktop.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/desktop.spec.ts)<br>[`tests/smoke.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/smoke.spec.ts) |
| Evidencias | [`Sprint_01/7.Pruebas/evidencias/HU-03/`](../Sprint_01/7.Pruebas/evidencias/HU-03/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#56](https://github.com/ClxNode/KuyayPet/pull/56) (HU-03: tests de los criterios 2, 3 y 4 (perfil completo))<br>[#67](https://github.com/ClxNode/KuyayPet/pull/67) (Añado imagenes para el HU_03)<br>Evidencias: [#65](https://github.com/ClxNode/KuyayPet/pull/65) |
| Estado | Terminada |

<a id="hu-04"></a>

## HU-04 — Filtrar mascotas según preferencias

**Enunciado**

- **Como** Adoptante
- **Quiero** Filtrar las mascotas según mis preferencias
- **Para** Encontrar opciones que se ajusten mejor a lo que busco

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el sistema muestra las mascotas disponibles, CUANDO el adoptante selecciona la opción “Filtros”, ENTONCES el sistema debe mostrar las opciones de filtrado disponibles.
2. **c2** — DADO que el adoptante se encuentra en la sección de filtros, CUANDO selecciona una o más preferencias, ENTONCES el sistema debe permitir seleccionar dichos criterios antes de aplicarlos.
3. **c3** — DADO que el adoptante ha seleccionado un filtro, CUANDO selecciona la opción “Aplicar filtros”, ENTONCES el sistema debe actualizar la lista de mascotas mostrando únicamente aquellas que cumplen con el criterio seleccionado.
4. **c4** — DADO que el adoptante selecciona varios filtros, CUANDO los aplica, ENTONCES el sistema debe mostrar las mascotas que cumplan con los criterios seleccionados.
5. **c5** — DADO que existen mascotas que cumplen con los filtros seleccionados, CUANDO se muestran los resultados, ENTONCES el sistema debe permitir al adoptante visualizar las mascotas encontradas.
6. **c6** — DADO que no existen mascotas que coincidan con los filtros seleccionados, CUANDO el adoptante aplica los filtros, ENTONCES el sistema debe informar que no se encontraron mascotas que cumplan con los criterios.
7. **c7** — DADO que el adoptante ha aplicado filtros, CUANDO modifica alguno de los criterios, ENTONCES el sistema debe actualizar los resultados de acuerdo con las nuevas preferencias.
8. **c8** — DADO que el adoptante ha aplicado uno o más filtros, CUANDO selecciona la opción “Limpiar filtros”, ENTONCES el sistema debe eliminar los criterios seleccionados y mostrar nuevamente las mascotas disponibles.
9. **c9** — DADO que el adoptante ha aplicado filtros, CUANDO selecciona una mascota de los resultados, ENTONCES el sistema debe permitirle acceder al perfil de dicha mascota.
10. **c10** — DADO que el adoptante ingresa nuevamente a la sección de mascotas después de haber limpiado los filtros, CUANDO visualiza la lista, ENTONCES el sistema debe mostrar las mascotas disponibles sin restricciones de filtrado.

| Dato | Valor |
|:--|:--|
| Rol | Adoptante |
| Prioridad del documento | Alta |
| MoSCoW | Must |
| Puntos (propuesta) | 8 (10 criterios) |
| Sprint | 2 |
| Ruta en la app | `/buscar` (según `src/App.tsx`) |
| Issue | [#4](https://github.com/ClxNode/KuyayPet/issues/4) (cerrado) |
| Tests | [`tests/criterios/HU-04.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-04.spec.ts)<br>[`tests/evidencias/HU-04.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-04.spec.ts)<br>[`tests/adopter.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/adopter.spec.ts) |
| Evidencias | [`Sprint_02/7.Pruebas/evidencias/HU-04/`](../Sprint_02/7.Pruebas/evidencias/HU-04/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#57](https://github.com/ClxNode/KuyayPet/pull/57) (HU-04: tests de los criterios 5, 9 y 10 (filtros))<br>Evidencias: [#65](https://github.com/ClxNode/KuyayPet/pull/65) |
| Estado | Terminada |

<a id="hu-05"></a>

## HU-05 — Búsqueda de mascotas cercanas

**Enunciado**

- **Como** Adoptante
- **Quiero** buscar mascotas cercanas a mi ubicación
- **Para** encontrar opciones de adopción accesibles geográficamente

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el adoptante se encuentra en la sección de búsqueda de mascotas, CUANDO ingresa su ubicación, ENTONCES el sistema debe permitir registrar o seleccionar una ubicación para realizar la búsqueda.
2. **c2** — DADO que el adoptante ha ingresado su ubicación, CUANDO selecciona un radio de búsqueda, ENTONCES el sistema debe permitir establecer una distancia en kilómetros.
3. **c3** — DADO que el adoptante ha ingresado una ubicación y un radio de búsqueda, CUANDO selecciona la opción “Buscar”, ENTONCES el sistema debe mostrar las mascotas disponibles dentro del área seleccionada.
4. **c4** — DADO que existen mascotas disponibles dentro del radio seleccionado, CUANDO se muestran los resultados, ENTONCES el sistema debe mostrar la información básica de cada mascota y su distancia aproximada.
5. **c5** — DADO que no existen mascotas disponibles dentro del radio seleccionado, CUANDO el adoptante realiza la búsqueda, ENTONCES el sistema debe mostrar un mensaje indicando que no se encontraron mascotas cercanas.

| Dato | Valor |
|:--|:--|
| Rol | Adoptante |
| Prioridad del documento | Media |
| MoSCoW | Should |
| Puntos (propuesta) | 5 (5 criterios; +1 escalón por mapa y cálculo de distancia) |
| Sprint | 2 |
| Ruta en la app | `/buscar` (según `src/App.tsx`) |
| Issue | [#5](https://github.com/ClxNode/KuyayPet/issues/5) (cerrado) |
| Tests | [`tests/criterios/HU-05.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-05.spec.ts)<br>[`tests/evidencias/HU-05.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-05.spec.ts)<br>[`tests/adopter.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/adopter.spec.ts)<br>[`tests/map.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/map.spec.ts) |
| Evidencias | [`Sprint_02/7.Pruebas/evidencias/HU-05/`](../Sprint_02/7.Pruebas/evidencias/HU-05/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#51](https://github.com/ClxNode/KuyayPet/pull/51) (HU-05: test del mensaje cuando no hay mascotas cercanas)<br>[#58](https://github.com/ClxNode/KuyayPet/pull/58) (HU-05: test del criterio 4 (distancia en la tarjeta))<br>Evidencias: [#65](https://github.com/ClxNode/KuyayPet/pull/65) |
| Estado | Terminada |

<a id="hu-06"></a>

## HU-06 — Indicar interés en una mascota (Like / Dislike)

**Enunciado**

- **Como** adoptante
- **Quiero** indicar si una mascota me gusta o no me gusta
- **Para** expresar rápidamente mi interés por ella

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el adoptante está visualizando una mascota disponible, CUANDO observa su información, ENTONCES el sistema debe mostrar las opciones “Me gusta” y “No me gusta”.
2. **c2** — DADO que el adoptante está visualizando una mascota, CUANDO selecciona la opción “Me gusta”, ENTONCES el sistema debe registrar su interés por esa mascota.
3. **c3** — DADO que el adoptante está visualizando una mascota, CUANDO selecciona la opción “No me gusta”, ENTONCES el sistema debe registrar que no está interesado en esa mascota.
4. **c4** — DADO que el adoptante seleccionó una de las opciones, CUANDO el sistema registra su elección, ENTONCES debe mostrar una confirmación visual de la opción seleccionada.
5. **c5** — DADO que el adoptante ya indicó su preferencia sobre una mascota, CUANDO finaliza la acción, ENTONCES el sistema debe permitirle continuar visualizando otra mascota disponible.

| Dato | Valor |
|:--|:--|
| Rol | Adoptante |
| Prioridad del documento | Media |
| MoSCoW | Should |
| Puntos (propuesta) | 3 (5 criterios) |
| Sprint | 3 |
| Ruta en la app | `/descubrir` (según `src/App.tsx`) |
| Issue | [#6](https://github.com/ClxNode/KuyayPet/issues/6) (cerrado) |
| Tests | [`tests/criterios/HU-06.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-06.spec.ts)<br>[`tests/evidencias/HU-06.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-06.spec.ts)<br>[`tests/smoke.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/smoke.spec.ts) |
| Evidencias | [`Sprint_03/7.Pruebas/evidencias/HU-06/`](../Sprint_03/7.Pruebas/evidencias/HU-06/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#68](https://github.com/ClxNode/KuyayPet/pull/68) (HU-06: tests de criterios (opciones, "No me gusta", confirmación, siguiente mascota))<br>Evidencias: [#76](https://github.com/ClxNode/KuyayPet/pull/76) |
| Estado | Terminada |

<a id="hu-07"></a>

## HU-07 — Recibir un Match por compatibilidad

**Enunciado**

- **Como** Adoptante
- **Quiero** Recibir un Match cuando exista interés compatible
- **Para** Saber que puedo continuar con el proceso de contacto.

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — El sistema debe permitir identificar cuando existe un interés compatible entre el adoptante y una mascota.
2. **c2** — Dado que el adoptante ha indicado que está interesado en una mascota, cuando el responsable también manifieste interés en continuar con el proceso, entonces el sistema debe generar un Match.
3. **c3** — Dado que existe un Match entre el adoptante y una mascota, cuando se genere la coincidencia, entonces el sistema debe notificar al adoptante que se ha producido un Match.
4. **c4** — Dado que el adoptante recibe una notificación de Match, cuando acceda a la sección de coincidencias, entonces debe poder visualizar la mascota con la que obtuvo el Match.
5. **c5** — El sistema debe mostrar información básica de la mascota asociada al Match.
6. **c6** — Dado que el adoptante tiene un Match activo, cuando seleccione la coincidencia, entonces el sistema debe permitirle continuar con el proceso de contacto con el responsable.
7. **c7** — El Match debe quedar registrado en la cuenta del adoptante para que pueda consultarlo posteriormente.
8. **c8** — Dado que no existe interés compatible, cuando el adoptante revise sus posibles coincidencias, entonces el sistema no debe generar un Match. .

| Dato | Valor |
|:--|:--|
| Rol | Adoptante |
| Prioridad del documento | Media |
| MoSCoW | Should |
| Puntos (propuesta) | 8 (8 criterios) |
| Sprint | 3 |
| Ruta en la app | `/matches` (según `src/App.tsx`) |
| Issue | [#7](https://github.com/ClxNode/KuyayPet/issues/7) (cerrado) |
| Tests | [`tests/criterios/HU-07.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-07.spec.ts)<br>[`tests/evidencias/HU-07.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-07.spec.ts)<br>[`tests/smoke.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/smoke.spec.ts) |
| Evidencias | [`Sprint_03/7.Pruebas/evidencias/HU-07/`](../Sprint_03/7.Pruebas/evidencias/HU-07/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#69](https://github.com/ClxNode/KuyayPet/pull/69) (HU-07: tests de criterios (Match visible, información, chat, persistencia, rechazo))<br>Evidencias: [#76](https://github.com/ClxNode/KuyayPet/pull/76) |
| Estado | Terminada |

<a id="hu-08"></a>

## HU-08 — Comunicarse con el responsable de la mascota

**Enunciado**

- **Como** Adoptante
- **Quiero** Comunicarme mediante un chat con el responsable de una mascota
- **Para** Solicitar información y coordinar una posible adopción.

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — El sistema debe permitir al adoptante iniciar una conversación con el responsable de una mascota.
2. **c2** — Dado que el adoptante ha seleccionado una mascota en adopción, cuando presione la opción de iniciar chat, entonces el sistema debe abrir una conversación con el responsable de dicha mascota.
3. **c3** — Dado que existe una conversación entre el adoptante y el responsable, cuando el adoptante envíe un mensaje, entonces el sistema debe registrar y mostrar el mensaje dentro del chat.
4. **c4** — Dado que el responsable ha enviado un mensaje, cuando el adoptante ingrese a la conversación, entonces debe poder visualizar el mensaje recibido.
5. **c5** — Dado que el adoptante se encuentra dentro del chat, cuando consulte la conversación, entonces el sistema debe identificar la mascota relacionada con dicha conversación.
6. **c6** — El sistema debe mostrar los mensajes enviados y recibidos en orden cronológico.
7. **c7** — Dado que el adoptante necesita información adicional sobre la mascota, cuando envíe una consulta mediante el chat, entonces el responsable debe poder recibirla y responderla.
8. **c8** — El adoptante debe poder consultar posteriormente el historial de la conversación para continuar la coordinación de la posible adopción.
9. **c9** — Dado que la adopción ya no continuará, cuando la conversación sea finalizada, entonces el sistema debe conservar el historial de mensajes para su consulta posterior.

| Dato | Valor |
|:--|:--|
| Rol | Adoptante |
| Prioridad del documento | Alta |
| MoSCoW | Must |
| Puntos (propuesta) | 8 (9 criterios) |
| Sprint | 3 |
| Ruta en la app | `/chats`, `/chats/:id` (según `src/App.tsx`) |
| Issue | [#8](https://github.com/ClxNode/KuyayPet/issues/8) (cerrado) |
| Tests | [`tests/criterios/HU-08.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-08.spec.ts)<br>[`tests/evidencias/HU-08.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-08.spec.ts)<br>[`tests/smoke.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/smoke.spec.ts) |
| Evidencias | [`Sprint_03/7.Pruebas/evidencias/HU-08/`](../Sprint_03/7.Pruebas/evidencias/HU-08/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#70](https://github.com/ClxNode/KuyayPet/pull/70) (HU-08: tests de criterios y acción "Finalizar conversación")<br>Evidencias: [#76](https://github.com/ClxNode/KuyayPet/pull/76) |
| Estado | Terminada |

<a id="hu-09"></a>

## HU-09 — Chat entre usuarios interesados en la misma mascota

**Enunciado**

- **Como** Usuario común
- **Quiero** Comunicarme mediante chat con otros usuarios interesados en la misma mascota
- **Para** Conversar sobre ello y compartir experiencias o detalles del proceso de adopción

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el usuario se encuentra en el perfil de una mascota, CUANDO selecciona la opción "Unirme al chat de la mascota" o "Iniciar chat", ENTONCES el sistema debe abrir la ventana o sección del chat vinculada a esa mascota.
2. **c2** — DADO que el usuario ingresa al chat de la mascota, CUANDO escribe un mensaje y selecciona la opción "Enviar", ENTONCES el sistema debe registrar y mostrar el mensaje en tiempo real a los demás usuarios en el chat.
3. **c3** — DADO que otros usuarios interesados escriben en el chat, CUANDO el usuario está activo en la conversación, ENTONCES el sistema debe mostrar los nuevos mensajes indicando el nombre del remitente y la hora de envío.
4. **c4** — DADO que el usuario ingresa por primera vez al chat de una mascota, CUANDO carga la pantalla, ENTONCES el sistema debe mostrar el historial de mensajes previos de la conversación.
5. **c5** — DADO que no hay mensajes previos en el chat de la mascota, CUANDO el usuario ingresa, ENTONCES el sistema debe mostrar un mensaje indicando que no hay mensajes anteriores e invitar a iniciar la conversación.
6. **c6** — DADO que el usuario no tiene una sesión activa en la plataforma, CUANDO intenta acceder al chat de una mascota, ENTONCES el sistema debe solicitarle iniciar sesión antes de permitirle enviar o ver mensajes.
7. **c7** — DADO que un usuario ingresa un mensaje vacío o compuesto solo por espacios, CUANDO intenta presionar "Enviar", ENTONCES el sistema debe mantener deshabilitado el botón de envío y no procesar el mensaje.

| Dato | Valor |
|:--|:--|
| Rol | Usuario común |
| Prioridad del documento | Baja |
| MoSCoW | Could |
| Puntos (propuesta) | 5 (7 criterios) |
| Sprint | 3 |
| Ruta en la app | `/mascota/:id` (según `src/App.tsx`) |
| Issue | [#9](https://github.com/ClxNode/KuyayPet/issues/9) (cerrado) |
| Tests | [`tests/criterios/HU-09.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-09.spec.ts)<br>[`tests/evidencias/HU-09.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-09.spec.ts)<br>[`tests/adopter.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/adopter.spec.ts) |
| Evidencias | [`Sprint_03/7.Pruebas/evidencias/HU-09/`](../Sprint_03/7.Pruebas/evidencias/HU-09/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#71](https://github.com/ClxNode/KuyayPet/pull/71) (HU-09: tests de criterios del chat grupal de la mascota)<br>Evidencias: [#76](https://github.com/ClxNode/KuyayPet/pull/76) |
| Estado | Terminada |

<a id="hu-10"></a>

## HU-10 — Coordinar posible adopción

**Enunciado**

- **Como** adoptante
- **Quiero** coordinar una posible adopción con el responsable
- **Para** Continuar con el proceso

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el adoptante está visualizando las mascotas disponibles, CUANDO selecciona una mascota para continuar con el proceso de adopción, ENTONCES el sistema debe mostrar la opción para coordinar la posible adopción.
2. **c2** — DADO que el adoptante ha seleccionado una mascota, CUANDO solicita coordinar la posible adopción con el responsable, ENTONCES el sistema debe permitir enviar una solicitud de coordinación.
3. **c3** — DADO que el adoptante desea coordinar la adopción, CUANDO ingresa una fecha y hora propuesta, ENTONCES el sistema debe permitir registrar la fecha y hora para continuar con el proceso.
4. **c4** — DADO que el adoptante ha enviado una solicitud de coordinación, CUANDO la solicitud es registrada correctamente, ENTONCES el responsable debe poder recibir la solicitud del adoptante.
5. **c5** — DADO que el adoptante ha enviado una solicitud de coordinación, CUANDO consulta el estado de la solicitud, ENTONCES el sistema debe mostrar el estado actual de la solicitud de adopción.
6. **c6** — DADO que el responsable ha respondido a la solicitud de adopción, CUANDO el adoptante consulta su solicitud, ENTONCES el sistema debe mostrar si la solicitud fue aceptada o rechazada.
7. **c7** — DADO que el adoptante ha completado correctamente los datos de la solicitud, CUANDO selecciona la opción “Enviar solicitud”, ENTONCES el sistema debe mostrar un mensaje de confirmación indicando que la solicitud fue enviada.

| Dato | Valor |
|:--|:--|
| Rol | Adoptante |
| Prioridad del documento | Alta |
| MoSCoW | Must |
| Puntos (propuesta) | 5 (7 criterios) |
| Sprint | 3 |
| Ruta en la app | `/coordinar/:petId` (según `src/App.tsx`) |
| Issue | [#10](https://github.com/ClxNode/KuyayPet/issues/10) (cerrado) |
| Tests | [`tests/criterios/HU-10.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-10.spec.ts)<br>[`tests/evidencias/HU-10.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-10.spec.ts)<br>[`tests/smoke.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/smoke.spec.ts) |
| Evidencias | [`Sprint_03/7.Pruebas/evidencias/HU-10/`](../Sprint_03/7.Pruebas/evidencias/HU-10/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#72](https://github.com/ClxNode/KuyayPet/pull/72) (HU-10: tests de criterios c1, c3, c5 y c6 (coordinar posible adopción))<br>Evidencias: [#76](https://github.com/ClxNode/KuyayPet/pull/76) |
| Estado | Terminada |

<a id="hu-11"></a>

## HU-11 — Registrar mascota

**Enunciado**

- **Como** responsable de mascota
- **Quiero** registrar una mascota
- **Para** ponerla disponible en adopción

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el responsable ha iniciado sesión en KuyayPet, CUANDO selecciona la opción “Registrar mascota”, ENTONCES el sistema debe mostrar el formulario de registro.
2. **c2** — DADO que el responsable se encuentra en el formulario de registro, CUANDO ingresa los datos de la mascota, ENTONCES el sistema debe permitir completar el registro.
3. **c3** — DADO que el responsable ha ingresado todos los datos obligatorios, CUANDO selecciona la opción “Registrar mascota”, ENTONCES el sistema debe registrar la mascota.
4. **c4** — DADO que la mascota ha sido registrada correctamente, CUANDO finaliza el registro, ENTONCES el sistema debe mostrar un mensaje de confirmación.
5. **c5** — DADO que el responsable intenta registrar una mascota sin completar los campos obligatorios, CUANDO selecciona “Registrar mascota”, ENTONCES el sistema debe indicar los campos que debe completar.
6. **c6** — DADO que la mascota ha sido registrada correctamente, CUANDO el registro finaliza, ENTONCES la mascota debe quedar disponible para adopción.

| Dato | Valor |
|:--|:--|
| Rol | Responsable de mascota |
| Prioridad del documento | Media |
| MoSCoW | Should |
| Puntos (propuesta) | 5 (6 criterios) |
| Sprint | 2 |
| Ruta en la app | `/responsable/nueva` (según `src/App.tsx`) |
| Issue | [#11](https://github.com/ClxNode/KuyayPet/issues/11) (cerrado) |
| Tests | [`tests/criterios/HU-11.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-11.spec.ts)<br>[`tests/evidencias/HU-11.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-11.spec.ts)<br>[`tests/owner.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/owner.spec.ts) |
| Evidencias | [`Sprint_02/7.Pruebas/evidencias/HU-11/`](../Sprint_02/7.Pruebas/evidencias/HU-11/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#59](https://github.com/ClxNode/KuyayPet/pull/59) (HU-11: tests de criterio c4 (mensaje de confirmación) y c6 (En revisión hasta aprobación))<br>Evidencias: [#65](https://github.com/ClxNode/KuyayPet/pull/65) |
| Estado | Terminada |

<a id="hu-12"></a>

## HU-12 — Editar información textual de una mascota

**Enunciado**

- **Como** responsable de mascota
- **Quiero** Editar la información textual de una mascota registrada
- **Para** Que los adoptantes puedan conocerla mejor y mantener sus datos actualizados

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el responsable se encuentra en la lista o perfil de sus mascotas registradas, CUANDO selecciona la opción "Editar información", ENTONCES el sistema debe desplegar el formulario de edición prellenado con los datos actuales de la mascota.
2. **c2** — DADO que el responsable modifica uno o más campos de texto (nombre, descripción, raza, edad, historia o cuidados especiales), CUANDO selecciona la opción "Guardar cambios", ENTONCES el sistema debe actualizar la información y mostrar un mensaje de confirmación ("Cambios guardados con éxito").
3. **c3** — DADO que el responsable realiza cambios en el formulario, CUANDO selecciona la opción "Cancelar", ENTONCES el sistema debe descartar las modificaciones y volver a la pantalla anterior sin alterar los datos originales.
4. **c4** — DADO que el responsable deja un campo obligatorio vacío (por ejemplo, el nombre de la mascota), CUANDO intenta presionar "Guardar cambios", ENTONCES el sistema debe destacar el campo requerido y mostrar un mensaje de error impidiendo el guardado.
5. **c5** — DADO que el responsable confirma la actualización de datos, CUANDO se redirige al perfil público de la mascota, ENTONCES el sistema debe mostrar la información textual reflejando inmediatamente los nuevos datos guardados.

| Dato | Valor |
|:--|:--|
| Rol | Responsable de mascota |
| Prioridad del documento | Alta |
| MoSCoW | Must |
| Puntos (propuesta) | 3 (5 criterios) |
| Sprint | 2 |
| Ruta en la app | `/responsable/editar/:id` (según `src/App.tsx`) |
| Issue | [#12](https://github.com/ClxNode/KuyayPet/issues/12) (cerrado) |
| Tests | [`tests/criterios/HU-12.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-12.spec.ts)<br>[`tests/evidencias/HU-12.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-12.spec.ts)<br>[`tests/owner.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/owner.spec.ts) |
| Evidencias | [`Sprint_02/7.Pruebas/evidencias/HU-12/`](../Sprint_02/7.Pruebas/evidencias/HU-12/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#49](https://github.com/ClxNode/KuyayPet/pull/49) (HU-12: test del criterio "no puedo editar una mascota que no registré")<br>[#60](https://github.com/ClxNode/KuyayPet/pull/60) (HU-12: tras guardar, mostrar el perfil público de la mascota con los datos nuevos)<br>Evidencias: [#65](https://github.com/ClxNode/KuyayPet/pull/65) |
| Estado | Terminada |

<a id="hu-13"></a>

## HU-13 — Notificación de interés en mascota

**Enunciado**

- **Como** Responsable de mascota
- **Quiero** Recibir una notificación cuando un adoptante muestre interés en mi mascota
- **Para** Poder responderle a tiempo y coordinar el proceso de adopción

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que un adoptante presiona el botón de "Me interesa" o "Solicitar adopción", CUANDO la acción se procesa correctamente, ENTONCES el sistema debe enviar inmediatamente una notificación (en la plataforma y/o correo) al responsable de la mascota.
2. **c2** — DADO que el responsable se encuentra navegado en la plataforma, CUANDO recibe una nueva notificación, ENTONCES el sistema debe mostrar un indicador visual (icono de campana con contador o emergente) en la barra superior de navegación.
3. **c3** — DADO que el responsable selecciona la notificación recibida, CUANDO hace clic sobre ella, ENTONCES el sistema debe redirigirlo directamente al perfil del adoptante interesado o al chat asignado a esa solicitud.
4. **c4** — DADO que el responsable accede a su centro de notificaciones, CUANDO visualiza la lista, ENTONCES el sistema debe mostrar el nombre del adoptante, la mascota de interés, la fecha y hora de la interacción, distinguiendo entre notificaciones leídas y no leídas.
5. **c5** — DADO que el responsable marca una notificación como leída, CUANDO actualiza la lista, ENTONCES el sistema debe actualizar el contador de notificaciones pendientes en el icono de la barra superior.

| Dato | Valor |
|:--|:--|
| Rol | Responsable de mascota |
| Prioridad del documento | Media |
| MoSCoW | Should |
| Puntos (propuesta) | 3 (5 criterios) |
| Sprint | 3 |
| Ruta en la app | `/notificaciones`, `/adoptante/:id` (según `src/App.tsx`) |
| Issue | [#13](https://github.com/ClxNode/KuyayPet/issues/13) (cerrado) |
| Tests | [`tests/criterios/HU-13.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-13.spec.ts)<br>[`tests/evidencias/HU-13.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-13.spec.ts)<br>[`tests/owner.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/owner.spec.ts)<br>[`tests/smoke.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/smoke.spec.ts) |
| Evidencias | [`Sprint_03/7.Pruebas/evidencias/HU-13/`](../Sprint_03/7.Pruebas/evidencias/HU-13/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#73](https://github.com/ClxNode/KuyayPet/pull/73) (HU-13: tests de criterios c2, c4 y c5 (notificación de interés))<br>Evidencias: [#76](https://github.com/ClxNode/KuyayPet/pull/76) |
| Estado | Terminada |

<a id="hu-14"></a>

## HU-14 — Consulta de información sobre adopción

**Enunciado**

- **Como** Usuario común
- **Quiero** Consultar información sobre adopción en una sola plataforma
- **Para** Evitar realizar búsquedas manuales en diferentes medios y conocer los requisitos del proceso

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el usuario se encuentra en la barra de navegación principal, CUANDO selecciona la sección "Sobre nosotros" o "Guía de Adopción", ENTONCES el sistema debe mostrar un centro informativo centralizado con preguntas frecuentes, requisitos y consejos de adopción responsable.
2. **c2** — DADO que el usuario navega por la sección informativa, CUANDO selecciona una categoría o pregunta específica (ej. "Requisitos para adoptar" o "¿Cómo preparar mi hogar?"), ENTONCES el sistema debe desplegar el contenido detallado correspondiente de forma clara.
3. **c3** — DADO que el usuario se encuentra dentro del perfil de una mascota específica, CUANDO presiona sobre el enlace o icono de "Información sobre el proceso de adopción", ENTONCES el sistema debe redirigirlo a la guía explicativa sin perder el contexto de su navegación.
4. **c4** — DADO que el usuario utiliza el buscador dentro de la sección de información, CUANDO ingresa palabras clave (ej. "vacunas", "contrato", "seguimiento"), ENTONCES el sistema debe filtrar y mostrar los artículos o preguntas relacionadas con dichas palabras.

| Dato | Valor |
|:--|:--|
| Rol | Usuario común |
| Prioridad del documento | Baja |
| MoSCoW | Could |
| Puntos (propuesta) | 2 (4 criterios) |
| Sprint | 3 |
| Ruta en la app | `/guia` (según `src/App.tsx`) |
| Issue | [#14](https://github.com/ClxNode/KuyayPet/issues/14) (cerrado) |
| Tests | [`tests/criterios/HU-14.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-14.spec.ts)<br>[`tests/evidencias/HU-14.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-14.spec.ts)<br>[`tests/adopter.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/adopter.spec.ts) |
| Evidencias | [`Sprint_03/7.Pruebas/evidencias/HU-14/`](../Sprint_03/7.Pruebas/evidencias/HU-14/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#88](https://github.com/ClxNode/KuyayPet/pull/88) (HU-14: criterios 1, 2 y 4 de la guía de adopción (tests + acceso desde la barra principal))<br>Evidencias: [#95](https://github.com/ClxNode/KuyayPet/pull/95) |
| Estado | Terminada |

<a id="hu-15"></a>

## HU-15 — Recuperación de contraseña

**Enunciado**

- **Como** Usuario común
- **Quiero** Recuperar mi contraseña
- **Para** Volver a acceder a mi cuenta en caso de olvido o pérdida de credenciales

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el usuario se encuentra en la pantalla de "Iniciar sesión", CUANDO selecciona la opción "¿Olvidaste tu contraseña?", ENTONCES el sistema debe mostrar la vista para ingresar el correo electrónico registrado.
2. **c2** — DADO que el usuario ingresa un correo registrado y presiona "Enviar enlace de recuperación", CUANDO el correo existe en la base de datos, ENTONCES el sistema debe enviar un enlace/código de restablecimiento e informar en pantalla que las instrucciones fueron enviadas.
3. **c3** — DADO que el usuario ingresa un correo electrónico que no está registrado o no cumple con el formato válido, CUANDO presiona "Enviar enlace de recuperación", ENTONCES el sistema debe mostrar un mensaje de error solicitando revisar el correo ingresado.
4. **c4** — DADO que el usuario accede al enlace recibido en su correo, CUANDO carga la pantalla de restablecimiento, ENTONCES el sistema debe permitirle ingresar y confirmar su nueva contraseña con los criterios de seguridad mínimos.
5. **c5** — DADO que el usuario confirma la nueva contraseña de forma exitosa, CUANDO el cambio es procesado, ENTONCES el sistema debe mostrar un mensaje de confirmación y redirigir al usuario al formulario de "Iniciar sesión" con sus nuevas credenciales.

| Dato | Valor |
|:--|:--|
| Rol | Usuario común |
| Prioridad del documento | Media |
| MoSCoW | Should |
| Puntos (propuesta) | 3 (5 criterios) |
| Sprint | 3 |
| Ruta en la app | `/recuperar` (según `src/App.tsx`) |
| Issue | [#15](https://github.com/ClxNode/KuyayPet/issues/15) (cerrado) |
| Tests | [`tests/criterios/HU-15.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-15.spec.ts)<br>[`tests/evidencias/HU-15.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-15.spec.ts)<br>[`tests/adopter.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/adopter.spec.ts) |
| Evidencias | [`Sprint_03/7.Pruebas/evidencias/HU-15/`](../Sprint_03/7.Pruebas/evidencias/HU-15/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#89](https://github.com/ClxNode/KuyayPet/pull/89) (HU-15: tests de criterios 3, 4 y 5 de recuperación de contraseña)<br>Evidencias: [#95](https://github.com/ClxNode/KuyayPet/pull/95) |
| Estado | Terminada |

<a id="hu-16"></a>

## HU-16 — Registro visual y etiquetado de mascotas

**Enunciado**

- **Como** Responsable de mascota
- **Quiero** Agregar información visual, fotografías y una mascota para mostrarla a los posibles adoptantes
- **Para** Presentar claramente a la mascota y aumentar sus posibilidades de encontrar un hogar

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el responsable ha iniciado sesión, CUANDO ingresa a la opción de registrar una mascota, ENTONCES el sistema debe mostrar un formulario para ingresar sus datos y fotografías.
2. **c2** — DADO que el responsable está completando el formulario, CUANDO intenta registrar la mascota sin llenar los campos obligatorios, ENTONCES el sistema debe indicar cuáles faltan.
3. **c3** — DADO que el responsable desea agregar una fotografía, CUANDO selecciona un archivo válido, ENTONCES el sistema debe mostrar una vista previa de la imagen.
4. **c4** — DADO que el archivo seleccionado no corresponde a un formato de imagen permitido, CUANDO el responsable intenta cargarlo, ENTONCES el sistema debe mostrar un mensaje de error.
5. **c5** — DADO que el responsable registra la mascota, CUANDO selecciona sus características, ENTONCES el sistema debe permitir agregar etiquetas como especie, edad, tamaño, sexo y personalidad.
6. **c6** — DADO que los datos obligatorios fueron completados correctamente, CUANDO el responsable selecciona “Publicar mascota”, ENTONCES el sistema debe guardar la información y mostrar un mensaje de confirmación.
7. **c7** — DADO que la mascota fue publicada correctamente, CUANDO un adoptante ingresa a la sección de mascotas, ENTONCES debe poder visualizar su fotografía, datos y etiquetas.

| Dato | Valor |
|:--|:--|
| Rol | Responsable de mascota |
| Prioridad del documento | Media |
| MoSCoW | Should |
| Puntos (propuesta) | 5 (7 criterios) |
| Sprint | 2 |
| Ruta en la app | `/responsable/nueva`, `/responsable/editar/:id` (según `src/App.tsx`) |
| Issue | [#16](https://github.com/ClxNode/KuyayPet/issues/16) (cerrado) |
| Tests | [`tests/criterios/HU-16.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-16.spec.ts)<br>[`tests/evidencias/HU-16.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-16.spec.ts)<br>[`tests/owner.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/owner.spec.ts) |
| Evidencias | [`Sprint_02/7.Pruebas/evidencias/HU-16/`](../Sprint_02/7.Pruebas/evidencias/HU-16/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#48](https://github.com/ClxNode/KuyayPet/pull/48) (HU-16: agregar y quitar fotos y etiquetas al editar una mascota)<br>[#61](https://github.com/ClxNode/KuyayPet/pull/61) (HU-16: tests de criterio c5, c6 y c7 (registro, aprobación y catálogo))<br>Evidencias: [#65](https://github.com/ClxNode/KuyayPet/pull/65) |
| Estado | Terminada |

<a id="hu-17"></a>

## HU-17 — Guardado de mascotas favoritas

**Enunciado**

- **Como** Adoptante
- **Quiero** Guardar mascotas como favoritas
- **Para** Poder revisarlas posteriormente y comparar mis opciones de adopción

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el adoptante ha iniciado sesión, CUANDO visualiza una mascota disponible, ENTONCES el sistema debe mostrar una opción para agregarla a favoritos.
2. **c2** — DADO que una mascota todavía no se encuentra en favoritos, CUANDO el adoptante selecciona el ícono de corazón, ENTONCES el sistema debe guardarla en su lista.
3. **c3** — DADO que la mascota fue agregada correctamente, CUANDO finaliza la acción, ENTONCES el sistema debe mostrar una confirmación visual.
4. **c4** — DADO que el adoptante tiene mascotas guardadas, CUANDO ingresa a la sección “Favoritos”, ENTONCES el sistema debe mostrar todas las mascotas seleccionadas.
5. **c5** — DADO que una mascota ya se encuentra en favoritos, CUANDO el adoptante vuelve a seleccionar el ícono de corazón, ENTONCES el sistema debe permitir retirarla de la lista.
6. **c6** — DADO que el adoptante cierra sesión y vuelve a ingresar, CUANDO consulta sus favoritos, ENTONCES las mascotas guardadas deben conservarse.
7. **c7** — DADO que una mascota favorita deja de estar disponible, CUANDO el adoptante revisa su lista, ENTONCES el sistema debe mostrar su estado actualizado.

| Dato | Valor |
|:--|:--|
| Rol | Adoptante |
| Prioridad del documento | Media |
| MoSCoW | Should |
| Puntos (propuesta) | 5 (7 criterios) |
| Sprint | 2 |
| Ruta en la app | `/favoritos` (según `src/App.tsx`) |
| Issue | [#17](https://github.com/ClxNode/KuyayPet/issues/17) (cerrado) |
| Tests | [`tests/criterios/HU-17.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-17.spec.ts)<br>[`tests/evidencias/HU-17.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-17.spec.ts)<br>[`tests/adopter.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/adopter.spec.ts) |
| Evidencias | [`Sprint_02/7.Pruebas/evidencias/HU-17/`](../Sprint_02/7.Pruebas/evidencias/HU-17/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#62](https://github.com/ClxNode/KuyayPet/pull/62) (HU-17: tests de criterios de favoritos (c3, c6, c7))<br>Evidencias: [#65](https://github.com/ClxNode/KuyayPet/pull/65) |
| Estado | Terminada |

<a id="hu-18"></a>

## HU-18 — Historial de mascotas de interés

**Enunciado**

- **Como** Adoptante
- **Quiero** Consultar mi historial de mascotas que indiqué que me gustan
- **Para** Volver a revisar mis opciones de interés y conocer su estado actual

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el adoptante ha iniciado sesión, CUANDO ingresa a su perfil, ENTONCES el sistema debe mostrar la opción “Historial de interés”.
2. **c2** — DADO que el adoptante indicó anteriormente que una mascota le gusta, CUANDO consulta su historial, ENTONCES el sistema debe mostrar dicha mascota.
3. **c3** — DADO que existen varias mascotas en el historial, CUANDO se presenta la lista, ENTONCES cada registro debe mostrar fotografía, nombre, fecha de interacción y estado actual.
4. **c4** — DADO que una mascota del historial continúa disponible, CUANDO el adoptante la selecciona, ENTONCES el sistema debe mostrar su perfil completo.
5. **c5** — DADO que una mascota del historial ya fue adoptada, CUANDO el adoptante consulta el registro, ENTONCES el sistema debe mostrarla con el estado “Adoptada”.
6. **c6** — DADO que una mascota fue retirada de la plataforma, CUANDO aparece en el historial, ENTONCES el sistema debe indicar que su perfil ya no está disponible.
7. **c7** — DADO que el adoptante nunca indicó interés en una mascota, CUANDO consulta esta sección, ENTONCES el sistema debe mostrar un mensaje informativo indicando que su historial está vacío. -

| Dato | Valor |
|:--|:--|
| Rol | Adoptante |
| Prioridad del documento | Baja |
| MoSCoW | Could |
| Puntos (propuesta) | 5 (7 criterios) |
| Sprint | 3 |
| Ruta en la app | `/historial` (según `src/App.tsx`) |
| Issue | [#18](https://github.com/ClxNode/KuyayPet/issues/18) (cerrado) |
| Tests | [`tests/criterios/HU-18.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-18.spec.ts)<br>[`tests/evidencias/HU-18.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-18.spec.ts)<br>[`tests/adopter.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/adopter.spec.ts) |
| Evidencias | [`Sprint_03/7.Pruebas/evidencias/HU-18/`](../Sprint_03/7.Pruebas/evidencias/HU-18/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#74](https://github.com/ClxNode/KuyayPet/pull/74) (HU-18: el historial muestra el estado actual de cada mascota y tests de criterios)<br>Evidencias: [#76](https://github.com/ClxNode/KuyayPet/pull/76) |
| Estado | Terminada |

<a id="hu-19"></a>

## HU-19 — Actualización de mascota como adoptada

**Enunciado**

- **Como** Responsable de mascota
- **Quiero** Marcar una mascota como adoptada
- **Para** Dejar de mostrarla como disponible y evitar nuevas solicitudes de adopción

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el responsable ha iniciado sesión, CUANDO ingresa a la sección “Mis publicaciones”, ENTONCES el sistema debe mostrar las mascotas que tiene registradas.
2. **c2** — DADO que una mascota continúa disponible, CUANDO el responsable ingresa a su publicación, ENTONCES el sistema debe mostrar la opción “Marcar como adoptada”.
3. **c3** — DADO que el responsable selecciona “Marcar como adoptada”, CUANDO realiza la acción, ENTONCES el sistema debe solicitar una confirmación.
4. **c4** — DADO que el responsable confirma la acción, CUANDO el sistema procesa el cambio, ENTONCES el estado de la mascota debe actualizarse a “Adoptada”.
5. **c5** — DADO que una mascota fue marcada como adoptada, CUANDO los adoptantes consultan las mascotas disponibles, ENTONCES esta ya no debe aparecer entre las opciones de adopción.
6. **c6** — DADO que un adoptante había guardado esa mascota, CUANDO revisa sus favoritos o historial, ENTONCES el sistema debe mostrarla con el estado “Adoptada”.
7. **c7** — DADO que la mascota ya fue adoptada, CUANDO un usuario intenta enviar una solicitud, ENTONCES el sistema debe impedir la acción y mostrar un mensaje informativo.

| Dato | Valor |
|:--|:--|
| Rol | Responsable de mascota |
| Prioridad del documento | Media |
| MoSCoW | Should |
| Puntos (propuesta) | 5 (7 criterios) |
| Sprint | 2 |
| Ruta en la app | `/responsable` (según `src/App.tsx`) |
| Issue | [#19](https://github.com/ClxNode/KuyayPet/issues/19) (cerrado) |
| Tests | [`tests/criterios/HU-19.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-19.spec.ts)<br>[`tests/evidencias/HU-19.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-19.spec.ts)<br>[`tests/owner.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/owner.spec.ts) |
| Evidencias | [`Sprint_02/7.Pruebas/evidencias/HU-19/`](../Sprint_02/7.Pruebas/evidencias/HU-19/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#50](https://github.com/ClxNode/KuyayPet/pull/50) (HU-19: test de que una mascota adoptada sale del catálogo)<br>[#63](https://github.com/ClxNode/KuyayPet/pull/63) (HU-19: tests de criterios de estado Adoptada (c6, c7))<br>Evidencias: [#65](https://github.com/ClxNode/KuyayPet/pull/65) |
| Estado | Terminada |

<a id="hu-20"></a>

## HU-20 — Visualización de compatibilidades / Matches

**Enunciado**

- **Como** Adoptante
- **Quiero** Visualizar mis matches
- **Para** Revisar las mascotas con las que tengo mayor compatibilidad y tomar una mejor decisión de adopción

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el adoptante ha iniciado sesión y completado sus preferencias, CUANDO ingresa a la sección “Mis Matches”, ENTONCES el sistema debe mostrar las mascotas compatibles.
2. **c2** — DADO que existen varias mascotas compatibles, CUANDO se muestran los resultados, ENTONCES deben ordenarse desde la mayor hasta la menor compatibilidad.
3. **c3** — DADO que se muestra una mascota compatible, CUANDO el adoptante visualiza su tarjeta, ENTONCES el sistema debe presentar su fotografía, información básica y nivel de compatibilidad.
4. **c4** — DADO que el adoptante selecciona una mascota, CUANDO ingresa a su perfil, ENTONCES el sistema debe mostrar los criterios principales que originaron la compatibilidad.
5. **c5** — DADO que una mascota compatible deja de estar disponible, CUANDO el adoptante consulta sus matches, ENTONCES el sistema debe actualizar o retirar dicha opción.
6. **c6** — DADO que no existen mascotas compatibles, CUANDO el adoptante ingresa a la sección, ENTONCES el sistema debe mostrar un mensaje informativo y permitirle modificar sus preferencias.
7. **c7** — DADO que el adoptante todavía no completó sus preferencias, CUANDO intenta consultar sus matches, ENTONCES el sistema debe solicitarle completar la información necesaria.

| Dato | Valor |
|:--|:--|
| Rol | Adoptante |
| Prioridad del documento | Media |
| MoSCoW | Should |
| Puntos (propuesta) | 5 (7 criterios) |
| Sprint | 3 |
| Ruta en la app | `/matches` (según `src/App.tsx`) |
| Issue | [#20](https://github.com/ClxNode/KuyayPet/issues/20) (cerrado) |
| Tests | [`tests/criterios/HU-20.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-20.spec.ts)<br>[`tests/evidencias/HU-20.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-20.spec.ts)<br>[`tests/smoke.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/smoke.spec.ts) |
| Evidencias | [`Sprint_03/7.Pruebas/evidencias/HU-20/`](../Sprint_03/7.Pruebas/evidencias/HU-20/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#75](https://github.com/ClxNode/KuyayPet/pull/75) (HU-20: tests de criterios c1 a c7 (Mis Matches))<br>Evidencias: [#76](https://github.com/ClxNode/KuyayPet/pull/76) |
| Estado | Terminada |

<a id="hu-21"></a>

## HU-21 — Cierre seguro de sesión

**Enunciado**

- **Como** Usuario
- **Quiero** Cerrar sesión
- **Para** Proteger el acceso a mi cuenta y evitar que otras personas utilicen mi información

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el usuario ha iniciado sesión, CUANDO accede al menú de su perfil, ENTONCES el sistema debe mostrar la opción “Cerrar sesión”.
2. **c2** — DADO que el usuario selecciona “Cerrar sesión”, CUANDO confirma la acción, ENTONCES el sistema debe finalizar su sesión activa.
3. **c3** — DADO que la sesión fue cerrada correctamente, CUANDO termina el proceso, ENTONCES el sistema debe redirigir al usuario a la pantalla de inicio o inicio de sesión.
4. **c4** — DADO que el usuario ya cerró sesión, CUANDO intenta regresar a una página privada mediante el navegador, ENTONCES el sistema debe solicitar nuevamente sus credenciales.
5. **c5** — DADO que la sesión se encuentra cerrada, CUANDO otra persona utiliza el mismo dispositivo, ENTONCES no debe poder acceder a los datos personales del usuario anterior.
6. **c6** — DADO que la cuenta permanece inactiva durante el tiempo de seguridad establecido, CUANDO se supera ese periodo, ENTONCES el sistema debe cerrar la sesión automáticamente.
7. **c7** — DADO que ocurre un error al intentar cerrar sesión, CUANDO el sistema no puede completar el proceso, ENTONCES debe informar al usuario y permitirle volver a intentarlo.

| Dato | Valor |
|:--|:--|
| Rol | Usuario común |
| Prioridad del documento | Alta |
| MoSCoW | Must |
| Puntos (propuesta) | 5 (7 criterios) |
| Sprint | 2 |
| Ruta en la app | `/perfil` (según `src/App.tsx`) |
| Issue | [#21](https://github.com/ClxNode/KuyayPet/issues/21) (cerrado) |
| Tests | [`tests/criterios/HU-21.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-21.spec.ts)<br>[`tests/evidencias/HU-21.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-21.spec.ts) |
| Evidencias | [`Sprint_02/7.Pruebas/evidencias/HU-21/`](../Sprint_02/7.Pruebas/evidencias/HU-21/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#64](https://github.com/ClxNode/KuyayPet/pull/64) (HU-21: cierre de sesión completo (c5, c6, c7))<br>Evidencias: [#65](https://github.com/ClxNode/KuyayPet/pull/65) |
| Estado | Terminada |

<a id="hu-22"></a>

## HU-22 — Gestionar usuarios

**Enunciado**

- **Como** administrador de la plataforma
- **Quiero** gestionar las cuentas de los usuarios registrados
- **Para** mantener un control adecuado de los usuarios de KuyayPet

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el administrador ha iniciado sesión, CUANDO accede al módulo de usuarios, ENTONCES el sistema debe mostrar la lista de usuarios registrados.
2. **c2** — DADO que el administrador visualiza la lista de usuarios, CUANDO selecciona un usuario, ENTONCES el sistema debe mostrar su información registrada.
3. **c3** — DADO que el administrador visualiza la información de un usuario, CUANDO selecciona la opción de editar, ENTONCES el sistema debe permitir modificar sus datos.
4. **c4** — DADO que el administrador ha realizado cambios en los datos de un usuario, CUANDO selecciona la opción “Guardar cambios”, ENTONCES el sistema debe actualizar la información del usuario.
5. **c5** — DADO que el administrador desea desactivar una cuenta, CUANDO selecciona la opción “Desactivar usuario” y confirma la acción, ENTONCES el sistema debe cambiar el estado de la cuenta a inactivo.
6. **c6** — DADO que una cuenta ha sido desactivada, CUANDO el usuario intenta acceder a KuyayPet, ENTONCES el sistema no debe permitirle iniciar sesión.
7. **c7** — DADO que el administrador realiza correctamente una modificación o desactivación, CUANDO finaliza la operación, ENTONCES el sistema debe mostrar un mensaje de confirmación.

| Dato | Valor |
|:--|:--|
| Rol | Administrador |
| Prioridad del documento | Alta |
| MoSCoW | Must |
| Puntos (propuesta) | 5 (7 criterios) |
| Sprint | 3 |
| Ruta en la app | `/admin/usuarios`, `/admin/usuarios/:id` (según `src/App.tsx`) |
| Issue | [#22](https://github.com/ClxNode/KuyayPet/issues/22) (cerrado) |
| Tests | [`tests/criterios/HU-22.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-22.spec.ts)<br>[`tests/evidencias/HU-22.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-22.spec.ts)<br>[`tests/admin.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/admin.spec.ts) |
| Evidencias | [`Sprint_03/7.Pruebas/evidencias/HU-22/`](../Sprint_03/7.Pruebas/evidencias/HU-22/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#90](https://github.com/ClxNode/KuyayPet/pull/90) (HU-22: tests de criterios 4 y 7 de gestionar usuarios)<br>Evidencias: [#95](https://github.com/ClxNode/KuyayPet/pull/95) |
| Estado | Terminada |

<a id="hu-23"></a>

## HU-23 — Revisar publicaciones de mascotas

**Enunciado**

- **Como** administrador de la plataforma
- **Quiero** revisar las publicaciones de mascotas
- **Para** mantener información adecuada y actualizada en KuyayPet

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el administrador ha iniciado sesión, CUANDO accede al módulo de publicaciones de mascotas, ENTONCES el sistema debe mostrar la lista de publicaciones registradas.
2. **c2** — DADO que el administrador visualiza la lista de publicaciones, CUANDO selecciona una mascota, ENTONCES el sistema debe mostrar la información registrada de la mascota.
3. **c3** — DADO que el administrador visualiza una publicación, CUANDO revisa su información, ENTONCES debe poder identificar los datos y características de la mascota.
4. **c4** — DADO que una publicación contiene información que necesita ser actualizada, CUANDO el administrador selecciona la opción correspondiente, ENTONCES el sistema debe permitir modificar la información de la publicación.
5. **c5** — DADO que el administrador ha realizado cambios en una publicación, CUANDO selecciona “Guardar cambios”, ENTONCES el sistema debe actualizar la información de la mascota.
6. **c6** — DADO que la información de una publicación ha sido actualizada correctamente, CUANDO finaliza la operación, ENTONCES el sistema debe mostrar un mensaje de confirmación.

| Dato | Valor |
|:--|:--|
| Rol | Administrador |
| Prioridad del documento | Alta |
| MoSCoW | Must |
| Puntos (propuesta) | 5 (6 criterios) |
| Sprint | 3 |
| Ruta en la app | `/admin/publicaciones`, `/admin/publicaciones/:id` (según `src/App.tsx`) |
| Issue | [#23](https://github.com/ClxNode/KuyayPet/issues/23) (cerrado) |
| Tests | [`tests/criterios/HU-23.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-23.spec.ts)<br>[`tests/evidencias/HU-23.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-23.spec.ts)<br>[`tests/admin.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/admin.spec.ts) |
| Evidencias | [`Sprint_03/7.Pruebas/evidencias/HU-23/`](../Sprint_03/7.Pruebas/evidencias/HU-23/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#91](https://github.com/ClxNode/KuyayPet/pull/91) (HU-23: el detalle de la publicación muestra los datos de la mascota (c3) y test de persistencia (c5))<br>Evidencias: [#95](https://github.com/ClxNode/KuyayPet/pull/95) |
| Estado | Terminada |

<a id="hu-24"></a>

## HU-24 — Aprobar o rechazar publicaciones de mascotas

**Enunciado**

- **Como** administrador de la plataforma
- **Quiero** aprobar o rechazar publicaciones de mascotas
- **Para** controlar las publicaciones que se muestran disponibles para adopción

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

1. **c1** — DADO que el administrador ha iniciado sesión, CUANDO accede al módulo de publicaciones, ENTONCES el sistema debe mostrar las publicaciones pendientes de revisión.
2. **c2** — DADO que el administrador visualiza las publicaciones pendientes, CUANDO selecciona una publicación, ENTONCES el sistema debe mostrar la información registrada de la mascota.
3. **c3** — DADO que el administrador revisa una publicación, CUANDO selecciona la opción “Aprobar”, ENTONCES el sistema debe solicitar la confirmación de la aprobación.
4. **c4** — DADO que el administrador confirma la aprobación, CUANDO finaliza la operación, ENTONCES el sistema debe cambiar el estado de la publicación a “Aprobada”.
5. **c5** — DADO que el administrador revisa una publicación, CUANDO selecciona la opción “Rechazar”, ENTONCES el sistema debe permitir indicar el motivo del rechazo.
6. **c6** — DADO que el administrador confirma el rechazo, CUANDO finaliza la operación, ENTONCES el sistema debe cambiar el estado de la publicación a “Rechazada”.
7. **c7** — DADO que una publicación ha sido aprobada o rechazada correctamente, CUANDO el sistema actualiza su estado, ENTONCES debe mostrar un mensaje de confirmación.

| Dato | Valor |
|:--|:--|
| Rol | Administrador |
| Prioridad del documento | Alta |
| MoSCoW | Must |
| Puntos (propuesta) | 5 (7 criterios) |
| Sprint | 3 |
| Ruta en la app | `/admin/publicaciones/:id` (según `src/App.tsx`) |
| Issue | [#24](https://github.com/ClxNode/KuyayPet/issues/24) (cerrado) |
| Tests | [`tests/criterios/HU-24.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-24.spec.ts)<br>[`tests/evidencias/HU-24.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-24.spec.ts)<br>[`tests/smoke.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/smoke.spec.ts) |
| Evidencias | [`Sprint_03/7.Pruebas/evidencias/HU-24/`](../Sprint_03/7.Pruebas/evidencias/HU-24/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#92](https://github.com/ClxNode/KuyayPet/pull/92) (HU-24: tests de los criterios c2–c7 (aprobar o rechazar publicaciones))<br>Evidencias: [#95](https://github.com/ClxNode/KuyayPet/pull/95) |
| Estado | Terminada |

<a id="hu-25"></a>

## HU-25 — Desactivar cuentas de usuarios

**Enunciado**

- **Como** administrador de la plataforma
- **Quiero** desactivar cuentas de usuarios que incumplan las condiciones de uso
- **Para** mantener un entorno seguro en KuyayPet

**Criterios de aceptación** — fuente: PDF del equipo (docs-fuente/Lista_Historias_de_Usuario_KuyayPet.md)

> El último criterio está truncado en el PDF del equipo (termina en «ya se encuentra»); se copia tal cual.

1. **c1** — DADO que el administrador ha iniciado sesión, CUANDO accede al módulo de usuarios, ENTONCES el sistema debe mostrar la lista de usuarios registrados.
2. **c2** — DADO que el administrador visualiza la lista de usuarios, CUANDO selecciona un usuario, ENTONCES el sistema debe mostrar la información de su cuenta y su estado actual.
3. **c3** — DADO que el administrador ha seleccionado una cuenta activa, CUANDO selecciona la opción “Desactivar usuario”, ENTONCES el sistema debe solicitar la confirmación de la acción.
4. **c4** — DADO que el administrador confirma la desactivación, CUANDO finaliza la operación, ENTONCES el sistema debe cambiar el estado de la cuenta a “Inactiva”.
5. **c5** — DADO que una cuenta se encuentra inactiva, CUANDO el usuario intenta iniciar sesión, ENTONCES el sistema no debe permitirle acceder a la plataforma.
6. **c6** — DADO que la cuenta ha sido desactivada correctamente, CUANDO termina la operación, ENTONCES el sistema debe mostrar un mensaje de confirmación.
7. **c7** — DADO que el administrador intenta desactivar una cuenta que ya está inactiva, CUANDO selecciona la opción correspondiente, ENTONCES el sistema debe informar que la cuenta ya se encuentra

| Dato | Valor |
|:--|:--|
| Rol | Administrador |
| Prioridad del documento | Media |
| MoSCoW | Should |
| Puntos (propuesta) | 5 (7 criterios) |
| Sprint | 3 |
| Ruta en la app | `/admin/usuarios/:id` (según `src/App.tsx`) |
| Issue | [#25](https://github.com/ClxNode/KuyayPet/issues/25) (cerrado) |
| Tests | [`tests/criterios/HU-25.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-25.spec.ts)<br>[`tests/evidencias/HU-25.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-25.spec.ts)<br>[`tests/admin.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/admin.spec.ts) |
| Evidencias | [`Sprint_03/7.Pruebas/evidencias/HU-25/`](../Sprint_03/7.Pruebas/evidencias/HU-25/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#93](https://github.com/ClxNode/KuyayPet/pull/93) (HU-25: aviso "La cuenta ya está inactiva" y tests de c5–c7)<br>Evidencias: [#95](https://github.com/ClxNode/KuyayPet/pull/95) |
| Estado | Terminada |

<a id="hu-26"></a>

## HU-26 — Gestionar información inapropiada en la plataforma

**Enunciado**

- **Como** administrador de la plataforma
- **Quiero** revisar y gestionar información inapropiada publicada en la plataforma
- **Para** mantener la calidad de la información de KuyayPet

**Criterios de aceptación** — fuente: issue #26

> El PDF no trae la sección HU-26: enunciado del resumen del PDF; criterios del issue #26, marcados «propuesta, pendiente de validar con el equipo».

1. **c1** — Dado que identifico información inapropiada, cuando la retiro, entonces la información deja de mostrarse a los usuarios.
2. **c2** — Dado que no tengo rol de administrador, cuando intento retirar información de otro usuario, entonces el sistema no me lo permite.

| Dato | Valor |
|:--|:--|
| Rol | Administrador |
| Prioridad del documento | Media |
| MoSCoW | Should |
| Puntos (propuesta) | 3 (2 criterios; +1 escalón por tres acciones de moderación sobre dos tipos de objeto (publicación y cuenta)) |
| Sprint | 3 |
| Ruta en la app | `/admin/reportes`, `/admin/reportes/:id` (según `src/App.tsx`) |
| Issue | [#26](https://github.com/ClxNode/KuyayPet/issues/26) (cerrado) |
| Tests | [`tests/criterios/HU-26.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/criterios/HU-26.spec.ts)<br>[`tests/evidencias/HU-26.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/evidencias/HU-26.spec.ts)<br>[`tests/admin.spec.ts`](../Codigo_Repositorio/kuyaypet-web/tests/admin.spec.ts) |
| Evidencias | [`Sprint_03/7.Pruebas/evidencias/HU-26/`](../Sprint_03/7.Pruebas/evidencias/HU-26/) |
| PR | [#35](https://github.com/ClxNode/KuyayPet/pull/35) (Prototipo v0.3, implementación de referencia de las 26 HU)<br>[#94](https://github.com/ClxNode/KuyayPet/pull/94) (HU-26: tests de los criterios c1–c2 (gestionar información inapropiada))<br>Evidencias: [#95](https://github.com/ClxNode/KuyayPet/pull/95) |
| Estado | Terminada |

## 📚 Referencia

[1] *Lista de historias de usuario – KuyayPet*, documento interno del proyecto de Ingeniería de Software, Universidad Peruana Cayetano Heredia, 2026.
