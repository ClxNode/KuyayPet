# Pruebas — KuyayPet

[← Volver a la presentación](../readme.md) · [Documentación técnica](./documentacion-tecnica.md) · [Matriz de trazabilidad](./matriz-trazabilidad.md) · [Análisis del sistema](./analisis.md)

Plan y resultados de las pruebas del prototipo (Sprint 3, parte b). Las pruebas son automatizadas con **Vitest** (unitarias) y **Playwright** (extremo a extremo, Chromium, viewport móvil 390×844 salvo donde se indica). No hay backend: todas corren contra el build servido con `vite preview` y los datos viven en `localStorage`. Las pruebas por HU de los Sprints 1 a 3 están además documentadas en `Sprint_0N/7.Pruebas`.

**Estado de los PR al 19-nov-2026.** Los specs de criterios de HU-14, 15 y 22–26 están en los PR abiertos [#88](https://github.com/ClxNode/KuyayPet/pull/88)–[#94](https://github.com/ClxNode/KuyayPet/pull/94); sus capturas, en [#95](https://github.com/ClxNode/KuyayPet/pull/95); las pruebas de seguridad, en [#99](https://github.com/ClxNode/KuyayPet/pull/99). Ninguno está fusionado a esta fecha. Los enlaces a archivos que solo existen en esos PR resolverán cuando se fusionen.

## 1. Pruebas funcionales (por historia de usuario)

Cada criterio de aceptación de las 26 HU (166 criterios: 164 del documento del equipo y 2 de HU-26 tomados del issue [#26](https://github.com/ClxNode/KuyayPet/issues/26)) se verifica con dos tipos de spec:

| Tipo | Carpeta (en `Codigo_Repositorio/kuyaypet-web/`) | Qué verifica | Cobertura |
|---|---|---|---|
| Criterios | `tests/criterios/HU-NN.spec.ts` | Un test por criterio que no tenía prueba o cuyo comportamiento se corrigió. Afirma el estado de la interfaz y de los datos persistidos. | HU-02 a HU-21 (18 archivos, en `main`; HU-01 la cubre `smoke.spec.ts`). HU-14, 15 y 22–26 están en los PR abiertos #88–#94. |
| Evidencias | `tests/evidencias/HU-NN.spec.ts` | Recorre los criterios de una HU, toma **una captura por criterio** (`P-HU-NN-0M-*.png`) y graba **un video por HU**. | HU-01 a HU-21 en `main` (sin HU-14 ni HU-15). HU-14, 15 y 22–26 en los PR #88–#94; sus capturas, en el PR #95. |

Las capturas se guardan en `Sprint_0N/7.Pruebas/evidencias/HU-NN/` ([Sprint 1](../Sprint_01/7.Pruebas/readme.md), [Sprint 2](../Sprint_02/7.Pruebas/readme.md), [Sprint 3](../Sprint_03/7.Pruebas/readme.md)). Los videos están en Drive (enlaces en cada `7.Pruebas`).

**Trazabilidad.** La [matriz de trazabilidad](./matriz-trazabilidad.md) cruza cada criterio con su spec, su captura, su PR y su estado. Totales (166 criterios): 162 cumplen, 1 no cumple (HU-11, criterio 6), 3 son simulados (HU-08 criterios 4 y 7; HU-15 criterio 2: respuestas de plantilla del chat y correo de recuperación simulado).

Además, `tests/catalogo.spec.ts`, `tests/desktop.spec.ts` y `tests/map.spec.ts` cubren el catálogo vacío (HU-02), el ancho de pantalla en escritorio (HU-02) y los marcadores del mapa (HU-05). Las pruebas unitarias de Vitest cubren el motor de compatibilidad (`src/lib/match/computeMatch.test.ts`) y los filtros de búsqueda (`src/services/search.test.ts`): 22 pruebas en total.

## 2. Pruebas de integración (flujos entre roles)

Prueban que lo que hace un rol llega al siguiente. Son los specs de la raíz de `tests/`:

| Spec | Flujo entre roles | Qué demuestra |
|---|---|---|
| `smoke.spec.ts` | Registro → cuestionario → deck → Match → chat → coordinar → responsable acepta → administrador aprueba | (1) HU-01: el registro valida campos vacíos, formato de correo, correo duplicado y contraseña corta, y abre el cuestionario. (2) Flujo estrella del adoptante: "Me gusta" con Match garantizado, chat, solicitud de adopción, Mis Matches y perfil. (3) El responsable ve sus notificaciones, cierra sesión, y el administrador entra por el login y ve el panel de pendientes. |
| `split.spec.ts` | Pantalla dividida (1440×920, dos teléfonos en un mismo navegador): adoptante y responsable | El "Me gusta" de la adoptante (Valeria) sobre una mascota de la responsable (Rosa) aparece **sin recargar** en el teléfono del responsable; al aceptarlo, la adoptante recibe la celebración del Match en su propio teléfono. Cada teléfono conserva su sesión. Funciona porque ambos comparten `localStorage` y se avisan con el evento `storage` (ver [análisis](./analisis.md), sección 6). |
| `tour.spec.ts` | Tour guiado del modo presentador (12 pasos, adoptante → responsable → administrador) | Recorre el tour completo tres veces seguidas y el estado final (Matches, solicitudes, intereses y pendientes) es idéntico; al salir, restaura la sesión previa. Con acciones fuera de guion (cambio de rol, navegar a mano) el tour se re-sincroniza y termina igual. Verifica que la ventana de ayuda nunca tape el elemento resaltado. |
| `adopter.spec.ts` | Adoptante con datos de otros roles | HU-04 y HU-05 (filtros y cercanía), HU-09 (chat grupal de una mascota), HU-14 (guía), HU-15 (recuperar contraseña con la bandeja simulada), HU-17 (favoritos) y HU-18 (historial). |
| `owner.spec.ts` | Responsable y adoptante sobre las mismas mascotas | HU-11 y HU-16 (registro de mascota en tres pasos con fotos), HU-12 (editar solo mascotas propias), HU-13 (el interés del adoptante genera una notificación que abre su perfil), HU-19 (marcar como adoptada bloquea nuevas solicitudes y la saca de la lista de disponibles). |
| `admin.spec.ts` | Administrador sobre cuentas y publicaciones | HU-22 (buscar, editar y guardar usuarios), HU-25 (una cuenta desactivada no puede iniciar sesión), HU-23 (filtrar y editar publicaciones) y HU-26 (revisar y descartar reportes). |

## 3. Pruebas de seguridad

Las pruebas viven en `tests/seguridad/control-acceso.spec.ts` y `tests/seguridad/validacion-entradas.spec.ts`, en el PR [#99](https://github.com/ClxNode/KuyayPet/pull/99) (rama `sprint-4/pruebas-seguridad`; el nombre de la rama es histórico: el curso tiene 3 sprints). **Resultado: 13 de 13 pasan (19-nov-2026).**

Alcance: lo que se puede comprobar **desde la interfaz**. Sin servidor, el control de acceso vive en el cliente (`RequireAuth` y `canAccess` en `src/services/auth.ts`); estas pruebas verifican que ese control se cumple al navegar y operar como lo haría un usuario. No son pruebas de intrusión.

| ID | Qué prueba | Cómo | Resultado |
|---|---|---|---|
| SEG-01 | Sin sesión, las rutas privadas redirigen al login | Con el almacenamiento vacío, abre 20 rutas privadas (descubrir, chats, perfil, panel del responsable, panel de administración, etc.) y espera `/login` en cada una | Pasa |
| SEG-02 | El adoptante no entra a rutas del responsable ni del administrador | Como adoptante, abre `/responsable`, `/responsable/nueva`, `/responsable/editar/p01`, `/admin`, `/admin/usuarios`, `/admin/reportes` y `/adoptante/u-owner-10`; espera volver a `/descubrir` | Pasa |
| SEG-03 | El responsable no entra a rutas del adoptante ni del administrador | Como responsable, abre `/descubrir`, `/buscar`, `/favoritos`, `/coordinar/p01`, `/admin`, `/admin/publicaciones`; espera volver a `/responsable` | Pasa |
| SEG-04 | El administrador no entra a rutas del responsable ni del adoptante | Como administrador, abre `/responsable`, `/responsable/nueva`, `/descubrir`, `/favoritos`; espera volver a `/admin` | Pasa |
| SEG-05 | El responsable no edita una mascota ajena | Abre `/responsable/editar/p02` (de otro dueño): ve "Mascota no encontrada", no aparece "Guardar cambios" y los datos persistidos de la mascota no cambian | Pasa |
| SEG-06 | Una cuenta desactivada no inicia sesión | Desactiva la cuenta en los datos persistidos e intenta entrar con las credenciales correctas: aparece el aviso de cuenta desactivada, la URL sigue en `/login` y no se crea sesión | Pasa |
| SEG-07 | Contraseña incorrecta | El mensaje es "Correo o contraseña incorrectos." (no indica cuál dato falló) y no se abre sesión | Pasa |
| SEG-08 | HTML en un mensaje de chat | Envía `<img src=x onerror=...><script>...</script>`: se muestra como texto, no hay `<img>` ni diálogo, y la variable de control `window.__xss` no se define | Pasa |
| SEG-09 | HTML en el nombre de una mascota | Guarda el mismo texto como nombre: el encabezado del perfil lo muestra como texto y no se ejecuta código | Pasa |
| SEG-10 | Archivos que no son imagen | Sube `notas.txt`, `logo.svg` (con `onload`) y `setup.exe` en la edición de una mascota: los tres se rechazan con "Formato no permitido" y la cantidad de fotos no cambia | Pasa |
| SEG-11 | Validación del registro | Correo inválido, contraseña corta (mensaje de 8 caracteres) y correo duplicado: ninguno crea cuenta ni abre sesión | Pasa |
| SEG-12 | Cuenta desactivada con sesión abierta | Con la sesión abierta, otra pestaña (el administrador) desactiva la cuenta; al recargar, la app lleva a `/login` y cierra la sesión | Pasa |
| SEG-13 | Chat directo ajeno | Un responsable que no es miembro abre `/chats/t-001`: ve "Conversación no encontrada" y no aparecen los mensajes ni el campo de envío | Pasa |

**Dos arreglos de código en el mismo PR** (commit `6ff474a`), que corrigen los puntos 5 y 6 de la sección 6 del [análisis](./analisis.md):

1. `RequireAuth` cierra la sesión si la cuenta fue desactivada mientras estaba abierta (antes solo se bloqueaba el inicio de sesión). Prueba: SEG-12.
2. Un chat directo solo lo abren sus dos miembros; los chats grupales siguen abiertos a los usuarios con sesión (HU-09). Prueba: SEG-13.

### 3.1. Fuera de alcance por no haber backend

Estos puntos **no se pueden probar ni corregir** con un prototipo sin servidor. Se deducen de leer el código (no se ejecutó ninguna prueba de intrusión) y están detallados con archivo y línea en el [análisis del sistema, sección 6](./analisis.md):

- **Servicios sin chequeo de rol.** Aprobar publicaciones, desactivar cuentas, responder solicitudes, marcar adoptada y moderar reportes no verifican quién llama; quien use la consola del navegador salta las restricciones de las pantallas.
- **Datos en `localStorage` editables.** Usuarios, mascotas, chats y reportes (incluido el propio rol) pueden leerse y modificarse desde las herramientas del navegador. Las pruebas SEG-06 y SEG-12 usan esa propiedad para simular la acción del administrador.
- **Contraseñas en texto plano** en el almacenamiento y comparación directa.
- **Acceso sin credenciales por diseño de la demo:** el selector "Probar la demo como…" de la pantalla de inicio y el parámetro `?as=admin` fijan la sesión sin contraseña. No se encontró una condición que los desactive en producción.
- **Acceso a recursos ajenos por URL** distintos de los chats directos: perfiles de mascotas pendientes y escritura en hilos grupales.
- **Correo y Google simulados:** el código de recuperación queda visible en el almacenamiento; "Continuar con Google" no verifica ningún token.
- **Un solo dispositivo:** la demostración multirol funciona solo en el mismo navegador.
- **Privacidad y cuota:** las fotos subidas se guardan como data URL en el navegador; no se midió el límite de `localStorage`.

Trabajo futuro para cada punto: [cierre del proyecto](./cierre-proyecto.md#6-trabajo-futuro).

## 4. Cómo correr las pruebas

Desde `Codigo_Repositorio/kuyaypet-web/`, con Node.js 20 o superior y `npm ci` ya ejecutado.

```bash
# Unitarias (22 pruebas de Vitest)
npm test

# Extremo a extremo: compilar, servir y correr
npm run build
npx vite preview --port 4199 --strictPort                        # terminal 1
BASE_URL=http://localhost:4199/ npx playwright test --workers=1  # terminal 2
```

- `--workers=1` es necesario: los specs comparten el `localStorage` del servidor de vista previa y dependen del orden de las animaciones.
- Se usa el puerto 4199 porque el 4173 (el predeterminado de `playwright.config.ts`) puede estar ocupado por otra aplicación. Si `BASE_URL` no se define, Playwright levanta el servidor en el 4173.
- Para ejecutar solo un grupo: `BASE_URL=http://localhost:4199/ npx playwright test tests/seguridad --workers=1`.

**Evidencias (capturas y video por HU).** El proyecto `evidencias` de Playwright solo existe con `EVIDENCIAS=1`:

```bash
EVIDENCIAS=1 BASE_URL=http://localhost:4199/ npx playwright test --project=evidencias --workers=1 tests/evidencias/HU-06.spec.ts

# o, con conversión a mp4 si hay ffmpeg:
EVIDENCIAS_DIR=../../Sprint_03/7.Pruebas/evidencias VIDEOS_DIR=<carpeta fuera del repo> \
BASE_URL=http://localhost:4199/ node scripts/record-hu.mjs 06 07 08
```

`EVIDENCIAS_DIR` define dónde se guardan las capturas (por defecto `test-results/evidencias-capturas`) y `VIDEOS_DIR` dónde quedan los videos (por defecto `test-results/videos-hu`, fuera de git).

## 5. Resultados

Datos de la ejecución completa del 19-nov-2026 sobre `main` más los PR #88–#95 y #99, integrados en una copia local de prueba:

- Vitest: 22 de 22.
- Playwright: 130 pruebas. En la primera corrida pasaron 129; HU-04 criterio 9 quedó colgada una vez durante 9,9 minutos por el entorno y pasó 3 de 3 al repetirla.

### Resultados contra producción (v1.0.0)

Ejecución del 19-nov-2026 contra https://firebrick-cod-910257.hostingersite.com/ (`v1.0.0`):

- Playwright: 130 pruebas; 129 pasaron a la primera. HU-12 criterio 2 falló por `net::ERR_TIMED_OUT` al cargar la página (un problema de red, no de una aserción) y pasó 5 de 5 al repetirla.
- Antes del despliegue, sobre el mismo código en local: Vitest 22 de 22 y Playwright 130 de 130.
- Videos de v1.0.0: enlace en la carpeta de Drive de videos-hu.

### Videos de las 26 HU contra producción (v1.0.0, 19-nov-2026)

Grabados con `scripts/record-hu.mjs` y `BASE_URL` de producción: 26 de 26 specs de evidencias pasan (HU-06 se repitió una vez por un timeout de clic). Carpeta: [videos-hu/v1.0.0-2026-11-19](https://drive.google.com/open?id=1DwZg8msfjz7JD_FwBBthTni8OjZ835dd).

| HU | Sprint | Video |
|---|---|---|
| HU-01 | 1 | [HU-01.mp4](https://drive.google.com/open?id=1xjKHr5Mlw5ZQJYgQC9hNcwLueH3OR1Nb) |
| HU-02 | 1 | [HU-02.mp4](https://drive.google.com/open?id=1sPPeCLB5rIPuae-2tbualx8nQ9uE0YIw) |
| HU-03 | 1 | [HU-03.mp4](https://drive.google.com/open?id=1uTBLDdsk1qlJe9J4wt5GiRr-N__XaWty) |
| HU-04 | 2 | [HU-04.mp4](https://drive.google.com/open?id=1oM-ZD-BnCb3hUZ2PgiC2f-cyirkWxSII) |
| HU-05 | 2 | [HU-05.mp4](https://drive.google.com/open?id=1M9mGtZy2XpGot4m8WAoIRXh16_lC7z3x) |
| HU-06 | 3 | [HU-06.mp4](https://drive.google.com/open?id=1l1vVuJ4DW2vqNqx6CH7lxrdolW7m0PdG) |
| HU-07 | 3 | [HU-07.mp4](https://drive.google.com/open?id=1Tq09-6R0sPJ0l13nw1Bgsewjed28RXqZ) |
| HU-08 | 3 | [HU-08.mp4](https://drive.google.com/open?id=1gugqix6aMw9e0D2qAA8nbiWNZMLnlzam) |
| HU-09 | 3 | [HU-09.mp4](https://drive.google.com/open?id=1UrzFWtNN5BDVC9vumctO2-bjyjykSssZ) |
| HU-10 | 3 | [HU-10.mp4](https://drive.google.com/open?id=12R619hy_97ngZy4Z95RBSFFWawujI3Ls) |
| HU-11 | 2 | [HU-11.mp4](https://drive.google.com/open?id=168TRWXukFJ79AJR2Q-5ySAn4M6PHdxAi) |
| HU-12 | 2 | [HU-12.mp4](https://drive.google.com/open?id=1V1yj8dgvJXtjCSWRAJVBHkHRCxMtYOGx) |
| HU-13 | 3 | [HU-13.mp4](https://drive.google.com/open?id=16fs-cVvcdyFmBcutV2fzVw2YuoJ8Knpq) |
| HU-14 | 3 | [HU-14.mp4](https://drive.google.com/open?id=10Sf6O6khM3uKVEpjUdUAwGi-S5jpF_HZ) |
| HU-15 | 3 | [HU-15.mp4](https://drive.google.com/open?id=1H3gR0hYcU3ogumf7S1udZuGJvANXYho3) |
| HU-16 | 2 | [HU-16.mp4](https://drive.google.com/open?id=1blM2NuWZnjxECLSo17RrayYYoZYGUB5Z) |
| HU-17 | 2 | [HU-17.mp4](https://drive.google.com/open?id=1Nas3SzOrf2b_I40G0nPsO1uIiQgDZNgY) |
| HU-18 | 3 | [HU-18.mp4](https://drive.google.com/open?id=19BpEevx7ysxJ6NrxvS2NWknloc0Es2y5) |
| HU-19 | 2 | [HU-19.mp4](https://drive.google.com/open?id=1Y-S-eA6iQ-jYAyK9fBDAax8IJIMTGFpX) |
| HU-20 | 3 | [HU-20.mp4](https://drive.google.com/open?id=1JrBm4O4qEbsRebl-Mh7hVfTd9rtU9C6C) |
| HU-21 | 2 | [HU-21.mp4](https://drive.google.com/open?id=1dTQYfebQALlz3ggP-DplpowNR_w4uY0i) |
| HU-22 | 3 | [HU-22.mp4](https://drive.google.com/open?id=1MAMeTewgsyXS9an4zTElqIStLgFm2iGF) |
| HU-23 | 3 | [HU-23.mp4](https://drive.google.com/open?id=1TykaNO73VGxy4XezMDCaudqN374ssQye) |
| HU-24 | 3 | [HU-24.mp4](https://drive.google.com/open?id=1K5gWa8dacyffus-Ms6orBOYCMByw43lG) |
| HU-25 | 3 | [HU-25.mp4](https://drive.google.com/open?id=1d4BhZB6dh04OaeR4oulB53FHs9u4zViQ) |
| HU-26 | 3 | [HU-26.mp4](https://drive.google.com/open?id=1kok3Bn_0KLma5w4BpYQr_M9u_jhXFbnL) |
