# 🐾 KuyayPet — Plataforma de Adopción Responsable de Mascotas

<p align="center">
  <strong>Conecta corazones, transforma vidas.</strong><br>
  Una oportunidad para cada mascota, un nuevo hogar para cada historia.
</p>

---

## 📌 1. Descripción del proyecto

**KuyayPet** es una plataforma digital orientada a facilitar el proceso de adopción responsable de mascotas, conectando a personas interesadas en adoptar con los responsables de animales que buscan un nuevo hogar.

El proyecto busca centralizar la información de las mascotas, mejorar su visibilidad y facilitar la comunicación entre adoptantes y responsables mediante funcionalidades de búsqueda, filtros, compatibilidad, favoritos, coincidencias (*Match*) y chat.

El desarrollo del proyecto se organiza mediante prácticas de **Scrum**, gestión de historias de usuario y control de versiones con **Git y GitHub**, promoviendo el trabajo colaborativo, la entrega incremental y la mejora continua.

### 🎯 Objetivo general

Desarrollar una plataforma que facilite la búsqueda, evaluación y coordinación de adopciones de mascotas mediante herramientas digitales que mejoren la interacción entre adoptantes y responsables.

### 💡 Problema que aborda

La información sobre mascotas en adopción puede encontrarse dispersa en diferentes medios digitales, dificultando la búsqueda de opciones adecuadas y la comunicación entre las personas involucradas.

KuyayPet propone centralizar este proceso en una plataforma que facilite el acceso a la información y contribuya a una adopción más organizada y responsable.

---

## ✨ 2. Funcionalidades principales

| Módulo | Descripción |
|---|---|
| 👤 Gestión de usuarios | Registro, inicio de sesión, recuperación de contraseña y cierre de sesión. |
| 🐶 Catálogo de mascotas | Visualización de mascotas disponibles y consulta de sus perfiles. |
| 🔎 Búsqueda y filtros | Búsqueda por preferencias y ubicación geográfica. |
| ❤️ Interacción | Acciones de Like/Dislike, favoritos e historial de interés. |
| 💚 Compatibilidad | Generación y consulta de coincidencias o *Matches*. |
| 💬 Comunicación | Chat entre adoptantes y responsables, y chat entre usuarios interesados en una mascota. |
| 📅 Coordinación de adopción | Envío y seguimiento de solicitudes para coordinar una posible adopción. |
| 📷 Publicaciones | Registro, edición y gestión de información y fotografías de mascotas. |
| 🔔 Notificaciones | Avisos cuando un adoptante muestra interés en una mascota. |
| 🛡️ Administración | Gestión de usuarios, revisión de publicaciones, aprobación o rechazo y control de contenido. |
| 📚 Guía de adopción | Información centralizada sobre requisitos, recomendaciones y adopción responsable. |

*Nota: las funcionalidades descritas corresponden al alcance funcional definido para el proyecto; su implementación y validación se registran conforme avanza el desarrollo.*

---

## 🧩 3. Metodología de trabajo: Scrum

El equipo utiliza Scrum como marco de trabajo para organizar el desarrollo de KuyayPet en iteraciones denominadas **Sprints**.

Cada Sprint permite seleccionar historias de usuario, asignar responsabilidades, implementar funcionalidades, revisar resultados e identificar mejoras para el siguiente ciclo.

### Roles de Scrum

| Rol | Responsabilidad |
|---|---|
| Product Owner | Prioriza el Product Backlog y vela por el valor entregado al usuario. |
| Scrum Master | Facilita el proceso Scrum, identifica impedimentos y promueve la mejora continua. |
| Developers | Diseñan, implementan, integran y prueban las funcionalidades del producto. |

**Integrantes y asignación de roles:** completar con los nombres reales del equipo.

---

## 📋 4. Product Backlog

El Product Backlog contiene las historias de usuario que representan las funcionalidades y necesidades del sistema.

Cada historia se identifica mediante un código `HU`, una descripción, una prioridad y sus correspondientes criterios de aceptación.

### Historias de usuario priorizadas

| ID | Historia o funcionalidad | Prioridad |
|---|---|---|
| HU-01 | Registro de usuario | Alta |
| HU-02 | Visualización de mascotas disponibles | Alta |
| HU-03 | Perfil detallado de una mascota | Alta |
| HU-04 | Filtros según preferencias | Alta |
| HU-05 | Búsqueda de mascotas cercanas | Media |
| HU-06 | Indicar Like/Dislike | Media |
| HU-07 | Recibir un Match | Media |
| HU-08 | Chat con el responsable | Alta |
| HU-09 | Chat entre usuarios interesados | Baja |
| HU-10 | Coordinar una posible adopción | Alta |
| HU-11 | Registrar una mascota | Media |
| HU-12 | Editar información de una mascota | Alta |
| HU-13 | Notificación de interés | Media |
| HU-14 | Consultar información sobre adopción | Baja |
| HU-15 | Recuperar contraseña | Media |
| HU-16 | Registrar fotografías y etiquetas | Media |
| HU-17 | Guardar mascotas favoritas | Media |
| HU-18 | Consultar historial de interés | Baja |
| HU-19 | Marcar una mascota como adoptada | Media |
| HU-20 | Visualizar Matches | Media |
| HU-21 | Cerrar sesión de forma segura | Alta |
| HU-22 | Gestionar cuentas de usuarios | Alta |
| HU-23 | Revisar publicaciones de mascotas | Alta |
| HU-24 | Aprobar o rechazar publicaciones | Alta |
| HU-25 | Desactivar cuentas de usuarios | Media |
| HU-26 | Gestionar información inapropiada | Media |

**Fuente de los requisitos:** documento *Lista de Historias de Usuario – KuyayPet*.

### Formato de un Product Backlog Item (PBI)

Cada PBI puede documentarse con los siguientes campos:

- **ID:** código de la historia de usuario.
- **Título:** nombre de la funcionalidad.
- **Descripción:** necesidad del usuario.
- **Prioridad:** alta, media o baja.
- **Criterios de aceptación:** condiciones que debe cumplir la funcionalidad.
- **Estimación:** esfuerzo previsto por el equipo.
- **Responsable:** persona encargada de su desarrollo.
- **Estado:** pendiente, en progreso, en revisión o terminado.

#### Ejemplo de PBI

**PBI: HU-02 — Visualización de mascotas disponibles**

> Como adoptante, quiero visualizar las mascotas disponibles para conocer las opciones de adopción.

**Criterios de aceptación:**

- Mostrar únicamente mascotas disponibles para adopción.
- Presentar fotografía, nombre, especie, edad y ubicación.
- Permitir acceder al perfil detallado de una mascota.
- Mostrar un mensaje informativo cuando no existan mascotas disponibles.
- Adaptar la visualización a computadoras y dispositivos móviles.

**Prioridad:** Alta.

**Estado:** Por actualizar según el avance real del equipo.

---

## 🎯 5. Sprint Planning y técnica de priorización

La planificación del Sprint permite definir qué historias se desarrollarán, qué objetivo se busca alcanzar y cómo se organizará el trabajo.

### Técnica de priorización: MoSCoW

Se propone utilizar la técnica **MoSCoW**, complementada con las prioridades alta, media y baja registradas en las historias de usuario.

| Categoría | Significado | Aplicación en KuyayPet |
|---|---|---|
| Must Have | Imprescindible | Registro, catálogo de mascotas y acceso a perfiles. |
| Should Have | Importante | Filtros, edición de publicaciones y coordinación de adopciones. |
| Could Have | Deseable | Funcionalidades complementarias como favoritos e historial. |
| Won't Have (this Sprint) | Fuera del Sprint actual | Funcionalidades que no se abordarán en la iteración seleccionada. |

La categoría asignada a cada historia deberá confirmarse durante la planificación. Las prioridades originales del Product Backlog no se sustituyen automáticamente por MoSCoW.

### Objetivo del Sprint

Entregar un incremento funcional de KuyayPet que permita a los usuarios acceder a la plataforma, explorar mascotas disponibles y consultar su información básica.

### Ejemplo de planificación inicial

| Historia | Prioridad original | Resultado esperado |
|---|---|---|
| HU-01 | Alta | Registro de usuario validado. |
| HU-02 | Alta | Catálogo de mascotas disponibles. |
| HU-03 | Alta | Visualización del perfil de mascota. |
| HU-04 | Alta | Filtrado de mascotas según preferencias. |

**Duración del Sprint:** definir en la planificación del equipo.

**Sprint:** completar número y fechas reales.

**Criterio de selección:** disponibilidad del equipo, dependencias técnicas, esfuerzo estimado y valor para el usuario.

### Definition of Done (DoD)

Una historia de usuario podrá considerarse terminada cuando:

- [ ] Cumpla sus criterios de aceptación.
- [ ] Su implementación haya sido revisada.
- [ ] Se hayan ejecutado las pruebas correspondientes.
- [ ] No presente errores críticos conocidos.
- [ ] Los cambios estén integrados en la rama principal mediante el proceso acordado.
- [ ] La documentación y las evidencias necesarias estén actualizadas.

---

## 🔄 6. Daily Scrum

El Daily Scrum es una reunión breve de seguimiento que permite inspeccionar el progreso hacia el objetivo del Sprint y adaptar el plan de trabajo.

### Preguntas de seguimiento

Cada integrante comunica:

1. ¿Qué avancé desde la última reunión?
2. ¿Qué realizaré a continuación?
3. ¿Tengo algún impedimento que dificulte mi trabajo?

### Registro del Daily Scrum

| Fecha | Integrante | Avance realizado | Próxima actividad | Impedimentos |
|---|---|---|---|---|
| DD/MM/AAAA | Integrante 1 | Por completar | Por completar | Por completar |
| DD/MM/AAAA | Integrante 2 | Por completar | Por completar | Por completar |
| DD/MM/AAAA | Integrante 3 | Por completar | Por completar | Por completar |

**Frecuencia propuesta:** diaria durante los días de trabajo del Sprint.

**Resultado esperado:** mantener al equipo coordinado, identificar bloqueos tempranamente y facilitar el cumplimiento del objetivo del Sprint.

---

## 🗂️ 7. Tablero de asignación de tareas

El equipo utilizará un tablero para visualizar el estado de las historias de usuario y las tareas técnicas asociadas.

### Estados del tablero

- **Por hacer:** actividades pendientes.
- **En progreso:** actividades que se están desarrollando.
- **En revisión:** actividades que requieren revisión de código o validación.
- **Terminado:** actividades que cumplen la Definition of Done.

### Plantilla de asignación

| ID | Actividad | Responsable | Prioridad | Estado |
|---|---|---|---|---|
| T-01 | Implementar registro de usuario | Por asignar | Alta | Por hacer |
| T-02 | Desarrollar catálogo de mascotas | Por asignar | Alta | Por hacer |
| T-03 | Implementar perfil de mascota | Por asignar | Alta | Por hacer |
| T-04 | Desarrollar filtros de búsqueda | Por asignar | Alta | Por hacer |
| T-05 | Elaborar pruebas funcionales | Por asignar | Alta | Por hacer |
| T-06 | Documentar y registrar evidencias | Por asignar | Media | Por hacer |

Las actividades son una propuesta inicial. Deben actualizarse con las tareas reales, los responsables y el estado de avance del equipo.

**Tablero del proyecto:** [Agregar enlace al tablero de KuyayPet].

---

## 💻 8. Repositorio de código con Git y GitHub

Git permite gestionar el historial de cambios del código, mientras que GitHub facilita el almacenamiento remoto, la colaboración y la revisión del trabajo.

### Flujo de trabajo propuesto

1. Clonar el repositorio.
2. Crear una rama para la tarea asignada.
3. Implementar la funcionalidad.
4. Realizar pruebas locales.
5. Registrar los cambios mediante commits.
6. Subir la rama al repositorio remoto.
7. Crear un Pull Request para revisión.
8. Integrar los cambios después de la aprobación.

### Convención de ramas

| Tipo | Ejemplo |
|---|---|
| Funcionalidad | `feature/HU-02-catalogo-mascotas` |
| Corrección | `fix/HU-01-validacion-registro` |
| Documentación | `docs/readme-scrum` |
| Pruebas | `test/HU-03-perfil-mascota` |

### Convención de commits

Se recomienda utilizar mensajes claros y descriptivos:

```bash
feat: agregar catalogo de mascotas disponibles
fix: validar campos del registro de usuario
test: agregar pruebas del perfil de mascota
docs: actualizar README del proyecto
refactor: reorganizar componentes de mascotas
```

### Comandos básicos

```bash
# Clonar el repositorio
git clone URL_DEL_REPOSITORIO

# Entrar al proyecto
cd NOMBRE_DEL_REPOSITORIO

# Crear una rama
git switch -c feature/HU-02-catalogo-mascotas

# Revisar los cambios
git status

# Preparar los archivos
git add .

# Registrar los cambios
git commit -m "feat: agregar catalogo de mascotas"

# Subir la rama
git push -u origin feature/HU-02-catalogo-mascotas
```

**Nota:** `URL_DEL_REPOSITORIO` y `NOMBRE_DEL_REPOSITORIO` son valores de ejemplo que deben sustituirse por los datos reales del repositorio.

### Buenas prácticas

- Evitar desarrollar directamente sobre la rama principal.
- Asociar las tareas y Pull Requests con sus historias de usuario.
- Utilizar commits pequeños y descriptivos.
- Revisar los cambios antes de integrarlos.
- No subir contraseñas, tokens ni credenciales.
- Mantener actualizada la documentación del proyecto.

---

## 🧪 9. Pruebas y validación

Las pruebas permiten comprobar que las funcionalidades implementadas cumplen los criterios de aceptación definidos en las historias de usuario.

### Tipos de pruebas

| Tipo de prueba | Aplicación en KuyayPet |
|---|---|
| Pruebas funcionales | Validar el registro, el catálogo y los perfiles de mascotas. |
| Pruebas de validación | Comprobar campos obligatorios y formatos de datos. |
| Pruebas de integración | Verificar la interacción entre módulos relacionados. |
| Pruebas de navegación | Comprobar el acceso correcto entre pantallas. |
| Pruebas de comunicación | Validar el envío y la visualización de mensajes del chat. |
| Pruebas de regresión | Verificar que los cambios no afecten funcionalidades existentes. |

### Matriz de casos de prueba

| ID | Funcionalidad | Escenario | Resultado esperado |
|---|---|---|---|
| CP-01 | Registro | Ingresar datos válidos | La cuenta se registra correctamente. |
| CP-02 | Registro | Dejar campos obligatorios vacíos | El sistema muestra los errores correspondientes. |
| CP-03 | Catálogo | Consultar mascotas disponibles | Se muestran las mascotas disponibles. |
| CP-04 | Perfil | Seleccionar una mascota | Se muestra su información detallada. |
| CP-05 | Filtros | Aplicar preferencias | Se muestran resultados que cumplen los criterios. |
| CP-06 | Favoritos | Guardar una mascota | La mascota aparece en favoritos. |
| CP-07 | Chat | Enviar un mensaje válido | El mensaje se registra y aparece en la conversación. |
| CP-08 | Adopción | Consultar una mascota adoptada | No aparece como disponible para nuevas solicitudes. |

Los resultados de cada caso de prueba deben registrarse como **Aprobado**, **Fallido** o **Pendiente**, según la ejecución real.

---

## 🎥 10. Evidencias y pruebas en video

Los videos documentarán la ejecución real de las funcionalidades, mostrando las acciones realizadas y sus resultados.

Cada evidencia debe relacionarse con una historia de usuario o un conjunto de criterios de aceptación.

### Registro de evidencias

| ID | Evidencia | Historia relacionada | Enlace |
|---|---|---|---|
| EV-01 | Demostración del registro de usuario | HU-01 | Por agregar |
| EV-02 | Visualización del catálogo y perfil de mascota | HU-02, HU-03 | Por agregar |
| EV-03 | Aplicación de filtros de búsqueda | HU-04 | Por agregar |
| EV-04 | Interacción Like/Dislike y Match | HU-06, HU-07 | Por agregar |
| EV-05 | Comunicación mediante chat | HU-08, HU-09 | Por agregar |
| EV-06 | Registro y edición de publicaciones | HU-11, HU-12 | Por agregar |
| EV-07 | Coordinación de una adopción | HU-10 | Por agregar |
| EV-08 | Validación final de funcionalidades | Historias del Sprint | Por agregar |

### Recomendaciones para grabar las evidencias

1. Presentar brevemente la funcionalidad que se va a probar.
2. Indicar la historia de usuario correspondiente.
3. Ejecutar el escenario de prueba paso a paso.
4. Mostrar el resultado obtenido en pantalla.
5. Verificar si el resultado cumple el criterio de aceptación.
6. Guardar el video y añadir su enlace al repositorio.

**Ubicación sugerida para las evidencias:**

```text
evidencias/
├── sprint-01/
│   ├── EV-01-registro.mp4
│   ├── EV-02-catalogo.mp4
│   └── EV-03-filtros.mp4
└── sprint-02/
    └── ...
```

Los videos pueden alojarse en GitHub, Google Drive u otro servicio accesible para el equipo. Si se utiliza un enlace externo, se debe verificar que las personas evaluadoras tengan permisos de visualización.

---

## 🔁 11. Sprint Retrospective

La retrospectiva permite reflexionar sobre el proceso de trabajo y definir acciones concretas para mejorar el siguiente Sprint.

### Preguntas para la retrospectiva

- ¿Qué salió bien durante el Sprint?
- ¿Qué dificultades o impedimentos encontramos?
- ¿Qué debemos mejorar en la comunicación y coordinación?
- ¿Qué acciones concretas aplicaremos en el próximo Sprint?

### Registro de la retrospectiva

| Aspecto | Descripción |
|---|---|
| Sprint evaluado | Por completar |
| Aspectos positivos | Por registrar durante la reunión |
| Dificultades encontradas | Por registrar durante la reunión |
| Oportunidades de mejora | Por registrar durante la reunión |
| Acciones de mejora | Por acordar con el equipo |
| Responsable de seguimiento | Por asignar |

### Ejemplo de acción de mejora

**Problema identificado:** dificultades para integrar cambios realizados por diferentes integrantes.

**Acción propuesta:** trabajar con ramas independientes, realizar Pull Requests y revisar los cambios antes de integrarlos.

**Responsable:** equipo de desarrollo.

**Seguimiento:** comprobar su efectividad en el siguiente Sprint.

*El ejemplo anterior es una propuesta; la retrospectiva definitiva debe reflejar lo que realmente ocurrió.*

---

## 📈 12. Seguimiento del proyecto

Para mantener la trazabilidad del trabajo, se recomienda registrar los siguientes indicadores:

- Historias de usuario seleccionadas para cada Sprint.
- Historias terminadas frente a las planificadas.
- Tareas pendientes y bloqueadas.
- Casos de prueba ejecutados y aprobados.
- Pull Requests revisados e integrados.
- Acciones de mejora acordadas en las retrospectivas.

Estos indicadores permiten evaluar el progreso del proyecto y tomar decisiones sobre la planificación de las siguientes iteraciones.

---

## 📁 13. Estructura sugerida del repositorio

La siguiente estructura es una propuesta que deberá adaptarse a la organización real del código:

```text
KuyayPet/
├── README.md
├── docs/
│   ├── historias-de-usuario.md
│   ├── product-backlog.md
│   ├── sprint-planning.md
│   ├── daily-scrum.md
│   ├── asignacion-tareas.md
│   └── retrospectivas.md
├── src/
│   └── ...
├── tests/
│   └── ...
└── evidencias/
    ├── sprint-01/
    └── sprint-02/
```

---

## 🐾 14. Impacto esperado

KuyayPet busca contribuir a una experiencia de adopción más accesible, organizada y transparente mediante:

- La centralización de información sobre mascotas disponibles.
- La facilidad para encontrar mascotas según las preferencias del adoptante.
- La mejora de la comunicación entre adoptantes y responsables.
- El seguimiento de las interacciones y solicitudes de adopción.
- La promoción de información útil para una adopción responsable.

---

## 👥 15. Equipo del proyecto

| Integrante | Rol Scrum | Responsabilidades |
|---|---|---|
| Integrante 1 | Product Owner | Por definir |
| Integrante 2 | Scrum Master | Por definir |
| Integrante 3 | Developer | Por definir |
| Integrante 4 | Developer | Por definir |

Actualizar esta tabla con los nombres, roles y responsabilidades reales del equipo.

---

## 📚 16. Documentación relacionada

- Lista de historias de usuario de KuyayPet.
- Product Backlog actualizado.
- Registros de Sprint Planning.
- Registros de Daily Scrum.
- Tablero de asignación de tareas.
- Evidencias de pruebas en video.
- Registros de Sprint Retrospective.
- Repositorio de código y Pull Requests.

Añadir los enlaces correspondientes cuando los documentos y recursos estén disponibles.

---

<p align="center">
  🐾 <strong>KuyayPet</strong><br>
  <em>Una conexión puede cambiar dos vidas: la de una mascota y la de su nueva familia.</em>
</p>
