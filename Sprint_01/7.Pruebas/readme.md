# 7. Pruebas — Sprint 1

Cada responsable registra aquí la prueba de su historia de usuario contra los criterios de aceptación. Los estados se cambian a `Aprobado` o `Fallido` solo después de ejecutar la prueba y observar el resultado; no se registran resultados anticipados.

El código a probar es el prototipo v0.3 en [`Codigo_Repositorio/kuyaypet-web/`](../../Codigo_Repositorio/kuyaypet-web/), desplegado en https://firebrick-cod-910257.hostingersite.com/#/. Las pruebas automáticas del prototipo no reemplazan esta validación manual.

## Índice

| HU | Responsables | Estado |
|---|---|---|
| [HU-01 — Registro de usuario](#hu-01--registro-de-usuario) | Dylan Quispe · Joseph-L-Q | Pendiente |
| [HU-02 — Visualización de mascotas disponibles](#hu-02--pruebas-funcionales-visualización-de-mascotas-disponibles) | Gael Milla (datos de prueba) · DevBrad · kevinesty | Pendiente |
| [HU-03 — Ver perfil de una mascota](#hu-03--ver-perfil-de-una-mascota) | IchiSieben · kevinesty | Pendiente |

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

- **Responsables:** IchiSieben (perfil y consistencia) · kevinesty (adaptación a computadora y móvil)
- **Fecha planificada:** 16 de octubre de 2026
- **Estado:** Pendiente de ejecución

### Criterios de aceptación a verificar

> Propuesta, pendiente de validar con el equipo (ver issue de la HU).

| ID | Criterio | Resultado observado | Estado |
|---|---|---|---|
| P-HU-03-01 | Al seleccionar una mascota se muestra el perfil que le corresponde | Por completar | Pendiente |
| P-HU-03-02 | Sin datos opcionales, el perfil se muestra sin errores ni campos inconsistentes | Por completar | Pendiente |
| P-HU-03-03 | El perfil se ve legible en computadora y en móvil | Por completar | Pendiente |

### Evidencias

**Enlaces a evidencias:** Por completar.

### Incidencias encontradas

| ID | Descripción de la incidencia | Acción correctiva | Estado |
|---|---|---|---|
| — | Sin incidencias registradas hasta ejecutar las pruebas | — | Pendiente de validación |
