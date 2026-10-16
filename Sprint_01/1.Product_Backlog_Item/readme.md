
# 1. Product Backlog Item

**Sprint 1 — Semana 9**  
**Periodo de trabajo restante propuesto:** 15–16 de octubre de 2026  
**Estado general:** Pendiente / por validar

## Objetivo del producto

Facilitar el encuentro entre personas interesadas en adoptar y mascotas disponibles para adopción.

## Objetivo del Sprint 1

Permitir que el usuario inicie el recorrido en KuyayPet: registrarse, consultar mascotas disponibles y revisar el perfil de una mascota.

## HU-01 — Registro de usuario

**Como** usuario común, **quiero** registrarme en KuyayPet, **para** poder acceder a la plataforma.  
**Prioridad:** Alta. **Estado:** Pendiente.

Criterios de aceptación:

1. El registro solicita nombre, correo electrónico y contraseña.
2. Si uno o más campos están vacíos, indica que son obligatorios.
3. Valida el formato del correo electrónico.
4. Exige una contraseña de al menos 8 caracteres.
5. No permite crear otra cuenta con un correo ya registrado.
6. Con datos válidos, crea la cuenta y muestra una confirmación.
7. Si algún dato es inválido, muestra un mensaje que indica el error.

## HU-02 — Visualización de mascotas disponibles para adopción

**Como** adoptante, **quiero** visualizar las mascotas disponibles para adopción, **para** conocer las opciones y seleccionar las de mi interés.  
**Prioridad:** Alta. **Estado:** Pendiente.

Criterios de aceptación:

1. La sección muestra una lista de mascotas disponibles.
2. Cada mascota muestra fotografía, nombre, especie, edad y ubicación.
3. Al seleccionar una mascota, permite consultar su información detallada.
4. Solo muestra mascotas disponibles para adopción.
5. Muestra los datos registrados por el responsable.
6. Si no hay mascotas disponibles, muestra un mensaje informativo.
7. La lista se visualiza correctamente y se adapta a computadora y móvil.

**Dependencia / dato necesario:** para desarrollar y probar esta historia se necesitan mascotas registradas. Si HU-11 no está en el Sprint 1, usar datos de prueba identificados como tales.

## HU-03 — Ver perfil de una mascota

**Como** adoptante, **quiero** ver el perfil de una mascota, **para** conocer información detallada sobre ella.  
**Prioridad:** Alta. **Estado:** Pendiente.

Criterios de aceptación:

1. Al elegir “Ver perfil” de una mascota disponible, muestra su perfil detallado.
2. El perfil muestra fotografía, nombre, especie, raza, edad y ubicación.
3. Si existe información adicional, la muestra.
4. Los datos corresponden a los registrados por el responsable.
5. Si no existe información adicional, muestra solo la información disponible y no genera errores.

**Dependencia propuesta:** HU-03 requiere una mascota disponible que se pueda seleccionar desde HU-02. Confirmar esta dependencia con el equipo.

## Priorización y estimación

Las historias de usuario fueron priorizadas según su importancia para el producto. La estimación se realizará mediante la técnica **Planning Poker**, considerando la complejidad, el esfuerzo y las dependencias de cada historia.

- **HU-01:** Registro de usuario — 5 puntos.
- **HU-02:** Visualización de mascotas disponibles para adopción — 5 puntos.
- **HU-03:** Ver perfil de una mascota — 3 puntos.

**Total estimado: 13 puntos de historia.**

> **Nota:** Los puntos son una propuesta inicial y deberán ser validados y acordados por el equipo durante el Sprint Planning.
## Fuera del Sprint 1

HU-04 a HU-26 no forman parte del compromiso de este sprint, salvo que el equipo revise su capacidad y acuerde cambiar el alcance.

---
