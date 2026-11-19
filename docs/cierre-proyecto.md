# Cierre del proyecto — KuyayPet

[← Volver a la presentación](../readme.md) · [Sprint 3](../Sprint_03/readme.md) · [Pruebas](./pruebas.md) · [Despliegue](./despliegue.md)

> Estado al **19-nov-2026**. Los hechos salen de GitHub (`ClxNode/KuyayPet`), del repositorio y de los documentos de cada sprint. Lo que se marca como propuesta o reconstruido no fue registrado por el equipo en su momento.

## 1. Resumen

KuyayPet es un prototipo web de adopción de mascotas (adoptante, responsable y administrador) construido en tres sprints para el curso de Ingeniería de Software (UPCH, 2026-2). Es una aplicación React sin servidor: los datos viven en el navegador. Quedan documentados 26 historias de usuario, su análisis, arquitectura y modelo de datos, el plan y los resultados de pruebas, el manual de usuario y el procedimiento de despliegue.

- **Aplicación:** https://firebrick-cod-910257.hostingersite.com/ (versión `v1.0.0`, desplegada el 19-nov-2026; ver [despliegue](./despliegue.md)).
- **Código:** [`Codigo_Repositorio/`](../Codigo_Repositorio/readme.md).

## 2. Historias de usuario

| Sprint | HU | Estado al 19-nov |
|---|---|---|
| Sprint 1 | HU-01, 02, 03 | Terminadas y fusionadas (issues cerrados el 28-oct) |
| Sprint 2 | HU-04, 05, 11, 12, 16, 17, 19, 21 | Terminadas y fusionadas (issues cerrados el 29-oct) |
| Sprint 3 (a) adopción | HU-06, 07, 08, 09, 10, 13, 18, 20 | Terminadas y fusionadas (PR #68–#76, 12-nov) |
| Sprint 3 (b) administración y cierre | HU-14, 15, 22, 23, 24, 25, 26 | Código y pruebas en los PR abiertos [#88](https://github.com/ClxNode/KuyayPet/pull/88)–[#94](https://github.com/ClxNode/KuyayPet/pull/94); capturas en [#95](https://github.com/ClxNode/KuyayPet/pull/95). Sin fusionar al 19-nov |

**Total: 26 HU. 19 terminadas y fusionadas; 7 de la parte (b) en PR abiertos.** Los issues de las 7 HU de la parte (b) figuran cerrados desde el 12-nov, pero se cuentan como terminadas solo cuando su PR se fusiona (definición de [Sprint 3](../Sprint_03/readme.md#6-métricas)). La casilla "Validado por" del responsable de cada HU sigue pendiente en las 15 HU del Sprint 3.

Las ramas `sprint-4/*` conservan ese nombre por historia (renombrarlas cerraría sus PR); el curso tiene 3 sprints.

## 3. Criterios de aceptación y pruebas

Fuente: [matriz de trazabilidad](./matriz-trazabilidad.md).

| Resultado | Criterios |
|---|---|
| Cumple | 162 |
| No cumple | 1 (HU-11 criterio 6: la mascota registrada queda *En revisión* y no aparece de inmediato como disponible) |
| Simulado | 3 (HU-08 criterios 4 y 7; HU-15 criterio 2) |
| **Total** | **166** (164 del documento del equipo y 2 de HU-26 tomados de su issue) |

Pruebas ([detalle y comandos](./pruebas.md)):

- **Funcionales:** un spec de criterios y uno de evidencias por HU (captura por criterio y video por HU).
- **Integración entre roles:** `smoke`, `split` (pantalla dividida adoptante–responsable), `tour`, `adopter`, `owner` y `admin`.
- **Seguridad:** 13 pruebas (SEG-01 a SEG-13) en el PR [#99](https://github.com/ClxNode/KuyayPet/pull/99); 13 de 13 pasan. El PR incluye dos arreglos: cierre de sesión de una cuenta desactivada y chats directos solo para sus miembros.
- **Ejecución completa del 19-nov** (`main` más #88–#95 y #99): 22 de 22 en Vitest y 130 pruebas de Playwright (129 en la primera corrida; una se colgó por el entorno y pasó al repetirla). Resultados finales en [pruebas](./pruebas.md#5-resultados).

## 4. Velocity por sprint

El equipo no registró puntos. Los valores son una **propuesta** (`kuyaypet-tools/datos/puntos.json`): escala de Fibonacci según el número de criterios de la HU (hasta 4: 2; 5: 3; 6 a 7: 5; 8 o más: 8) y un escalón más si hay complejidad técnica extra. HU-26 cuenta los 2 criterios de su issue. Velocity = puntos de las HU terminadas en el sprint.

| Sprint | HU | Puntos propuestos | Velocity |
|---|---|---|---|
| Sprint 1 | HU-01, 02, 03 (5 + 5 + 3) | 13 | 13 |
| Sprint 2 | HU-04, 05, 11, 12, 16, 17, 19, 21 (8 + 5 + 5 + 3 + 5 + 5 + 5 + 5) | 41 | 41 |
| Sprint 3 | (a) 8 HU: 42 · (b) 7 HU: 28 | 70 | **42 al 19-nov** (parte a); 70 si se fusionan #88–#94 |
| **Total** | 26 HU | **124** | 96 al 19-nov |

Burndown del Sprint 3 con fechas reales de cierre: [Sprint 3, sección 6](../Sprint_03/readme.md#6-métricas).

## 5. Lecciones

**Escritas por el equipo (retrospectivas de los Sprints 1 y 2):**

- Definir las pruebas de cada criterio **durante** el desarrollo y no al cierre, y registrar las evidencias conforme se completan ([Sprint 1](../Sprint_01/4.Sprint_Retrospective/readme.md), [Sprint 2](../Sprint_02/4.Sprint_Retrospective/readme.md)).
- Mantener el tablero actualizado, con responsables y estados reales, y desglosar cada HU en tareas.
- Revisar los PR de manera oportuna y fortalecer la revisión de código antes de integrar.
- Planificar considerando también pruebas, integración y documentación, no solo implementación.
- Verificar que cada HU cumpla sus criterios antes de marcarla como terminada.

**Reconstruidas a partir de GitHub el 19-nov-2026 (retrospectiva del [Sprint 3](../Sprint_03/4.Sprint_Retrospective/readme.md); el equipo puede corregirlas):**

- Los 9 PR de la parte (a) se fusionaron el 12-nov, día de la exposición, aunque las ramas existían desde el 28-oct.
- Cinco de ocho HU de la parte (a) y las siete de la parte (b) no tienen responsable asignado; solo HU-06, HU-07 y HU-13 lo tienen.
- Varios issues se cerraron antes de fusionar su PR (los 7 de la parte b, el 12-nov); la definición de terminada usada aquí exige ambas cosas.
- Todos los PR del sprint tienen el mismo autor; en los PR con aprobación, quien aprobó fue quien fusionó.
- La carpeta `Sprint_03` estaba vacía cuando se fusionaron los PR del 12-nov. La observación del profesor en la exposición apunta en la misma dirección: "faltaban varias cosas en los sprints: historias de usuario incompletas o cortas, análisis faltantes y secciones sin llenar".

**Técnicas, del despliegue y las pruebas:**

- La CDN del hosting guarda `sw.js` 7 días: hay que purgarla tras subirlo.
- Un despliegue completo de archivo comprimido reemplaza todo el sitio; se publica archivo por archivo para conservar las vistas previas.
- `tsc -b` compila también `tests/`: un error de tipos en un spec rompe el build.
- Las pruebas de extremo a extremo deben correr con un solo worker, porque comparten el `localStorage` del servidor de vista previa.

## 6. Trabajo futuro

Las limitaciones vienen del hecho de no tener servidor ([análisis, sección 6](./analisis.md); [pruebas, 3.1](./pruebas.md#31-fuera-de-alcance-por-no-haber-backend)). El paso natural es un backend:

| Prioridad | Trabajo | Resuelve |
|---|---|---|
| Alta | **Autenticación con hash de contraseña** (argon2 o bcrypt) y sesiones revocables en servidor | Contraseñas en texto plano; sesiones de cuentas desactivadas |
| Alta | **Autorización en servidor**: cada operación compara el rol y el dueño del recurso | Servicios sin chequeo de rol; acceso a recursos ajenos por URL |
| Alta | **Retirar del build de producción** el selector "Probar la demo como…" y el parámetro `?as=` | Acceso sin credenciales |
| Media | Base de datos compartida (reemplaza `localStorage`) y almacenamiento de imágenes en un servicio de archivos | Datos por navegador; cuota y privacidad de las fotos |
| Media | **Chat en tiempo real** (WebSocket o similar) y notificaciones push | Respuestas simuladas; la demostración multirol solo en un mismo equipo |
| Media | **Correo real** (servicio transaccional) y OAuth verificado en servidor | Recuperación de contraseña y Google simulados |
| Baja | Botón "Reportar" en perfiles de usuario y en el chat; reglas de estado coherentes (por ejemplo, que `markAdopted` cierre solicitudes) | Reportes de usuario y mensaje no creables; estados que ningún criterio prevé |
| Baja | Mostrar especie, edad y ubicación en la entrada del Match (HU-07 criterio 5) y notificar también por correo (HU-13 criterio 1) | Brechas documentadas del Sprint 3 |
| Baja | Resolver HU-11 criterio 6 | Único criterio que no cumple |

## 7. Estado final de producción

- **Versión:** `IchiSieben/kuyaypet@v1.0.0` (tag sobre el commit `26ea3b7`; el `package.json` dice 1.0.0 desde `d5ccad0`, mismo bundle). Bundle principal `assets/index-BXqdrcgB.js`.
- **Desde:** 19-nov-2026.
- **Contenido:** el `main` del grupo (Sprints 1 a 3, parte a) **más** lo de los PR #88–#95 y #99, que en `ClxNode/KuyayPet` siguen abiertos sin fusionar. Producción va por delante del `main` del grupo hasta que el equipo los fusione.
- **Versión anterior:** `v0.3.1-sprint2` (bundle `index-DQQidj1w.js`). Se guardó copia de su `index.html`, `sw.js` y `manifest.webmanifest`; revertir es volver a subir esos 3 archivos y purgar la CDN (los assets de la versión anterior siguen en el servidor).
- **Procedimiento usado:** `npm run build`; subida parcial archivo por archivo por TUS con la API pública de Hostinger (credenciales de subida temporales generadas con un token de API guardado en variable de entorno, nunca en el repositorio); 235 archivos, con `manifest.webmanifest`, `sw.js` e `index.html` al final. `/next/`, `/next2/` y `/guia-sprint2/` no se tocan; `/manual/` se actualiza con el build. Purga de la CDN por la API después de subir `sw.js`.
- **Verificación:** los 235 archivos se comprobaron contra el servidor. 7 imágenes se sirven con otro tamaño por la optimización del servidor y `robots.txt` lo reescribe Hostinger en el dominio temporal.
- **Incidente:** durante unos minutos el bundle principal respondió 404 por una subida de prueba fallida; se volvió a subir y se verificó.
- **Suite contra producción:** ver [pruebas](./pruebas.md#resultados-contra-producción-v100).
