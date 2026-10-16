
# 6. Repositorio de código

El código fuente de **KuyayPet** se gestiona mediante Git y GitHub, lo que permite organizar los archivos del proyecto, registrar cambios y revisar las contribuciones del equipo.

**Repositorio principal:** [ClxNode/KuyayPet](https://github.com/ClxNode/KuyayPet)

## Código del prototipo

- **Carpeta del código:** [`Codigo_Repositorio/kuyaypet-web/`](../../Codigo_Repositorio/kuyaypet-web/) — instrucciones en [`Codigo_Repositorio/readme.md`](../../Codigo_Repositorio/readme.md).
- **Pull request:** [#35 — Prototipo v0.3 — implementación de referencia de las 26 HU](https://github.com/ClxNode/KuyayPet/pull/35) (pendiente de revisión; no cierra las HU).
- **Estado:** HU-01, HU-02 y HU-03 están implementadas en el prototipo y pendientes de validación por sus responsables en [`7.Pruebas`](../7.Pruebas/readme.md).

## Historias de usuario del Sprint 1

| Código | Historia de usuario | Prioridad |
|---|---|---|
| HU-01 | Registro de usuario | Alta |
| HU-02 | Visualización de mascotas disponibles para adopción | Alta |
| HU-03 | Ver perfil de una mascota | Alta |

## Implementación y revisión

### HU-01 — Registro de usuario

- **Objetivo:** Permitir que los usuarios creen una cuenta en KuyayPet.
- **Archivos de implementación:** Por identificar en el repositorio.
- **Revisión:** Verificar los campos obligatorios, el formato del correo electrónico, la contraseña y la prevención de cuentas duplicadas.
- **Estado:** Pendiente de verificar.

### HU-02 — Visualización de mascotas disponibles para adopción

- **Objetivo:** Mostrar las mascotas disponibles con su fotografía, nombre, especie, edad y ubicación.
- **Archivos de implementación:** Por identificar en el repositorio.
- **Revisión:** Comprobar que se muestren únicamente las mascotas disponibles y que exista un mensaje cuando no haya resultados.
- **Estado:** Pendiente de verificar.

### HU-03 — Ver perfil de una mascota

- **Objetivo:** Permitir que los adoptantes consulten la información detallada de una mascota seleccionada.
- **Archivos de implementación:** Por identificar en el repositorio.
- **Revisión:** Comprobar que el perfil corresponda a la mascota seleccionada y que los datos opcionales se manejen correctamente.
- **Estado:** Pendiente de verificar.

## Datos de prueba

Para verificar las historias HU-02 y HU-03, se propone utilizar registros de prueba de mascotas con información ficticia claramente identificada.

| Campo | Ejemplo de dato de prueba |
|---|---|
| Nombre | Luna |
| Especie | Perro |
| Raza | Mestiza |
| Edad | 2 años |
| Ubicación | Lima, Perú |
| Disponibilidad | Disponible para adopción |
| Fotografía | Imagen de prueba identificada para el prototipo |

**Consideraciones:**

- Los datos anteriores son un ejemplo ilustrativo, no registros cuya existencia se haya verificado en la aplicación.
- Los registros de prueba permiten comprobar la visualización y navegación entre historias.
- Estos datos no constituyen evidencia de que HU-11 esté implementada.
- Antes de documentar una prueba como exitosa, se debe ejecutar y registrar el resultado observado.

## Evidencias

Las evidencias deben agregarse conforme se realicen las actividades de desarrollo y revisión.

| Evidencia | Descripción | Estado |
|---|---|---|
| Repositorio GitHub | Código fuente y archivos del proyecto | [Revisar repositorio](https://github.com/ClxNode/KuyayPet) |
| Commit | Registro de cambios relacionados con HU-01, HU-02 o HU-03 | Pendiente de identificar |
| Pull Request | Revisión e integración de cambios, si corresponde | Pendiente de verificar |
| Pruebas funcionales | Resultados de los casos de prueba ejecutados | Pendiente de ejecutar o documentar |
| Capturas de pantalla | Evidencia visual de las funcionalidades probadas | Pendiente de recopilar |
| Video de demostración | Recorrido por las funcionalidades que realmente funcionen | Pendiente de grabar |

## Criterios de revisión del código

Antes de considerar una historia de usuario terminada, se debe comprobar lo siguiente:

1. El código correspondiente está disponible en el repositorio.
2. La funcionalidad cumple los criterios de aceptación de la historia.
3. Se ejecutaron las pruebas funcionales correspondientes y se registraron sus resultados.
4. Los cambios fueron revisados e integrados según el flujo de trabajo del equipo.
5. Existe evidencia verificable de la funcionalidad implementada.

**Conclusión:** El repositorio de GitHub constituye el punto central para organizar el código y documentar el desarrollo de KuyayPet. Los enlaces específicos a archivos, commits y pull requests se incorporarán cuando se identifiquen los cambios correspondientes a cada historia de usuario.
