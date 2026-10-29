# Código del repositorio — KuyayPet

Esta carpeta contiene el **prototipo v0.3** de KuyayPet, una implementación de referencia de las 26 historias de usuario del catálogo ([docs/historias-de-usuario.md](../docs/historias-de-usuario.md)).

- **Código:** [`kuyaypet-web/`](./kuyaypet-web/)
- **Origen:** repositorio [IchiSieben/kuyaypet](https://github.com/IchiSieben/kuyaypet), tag `v0.3-fase1` (la versión desplegada).
- **Despliegue:** https://firebrick-cod-910257.hostingersite.com/#/

> **Implementada no es lo mismo que terminada.** Que una HU esté implementada en el prototipo significa que existe código y una prueba automática que la ejercita. Una HU se considera **terminada** recién cuando su responsable la prueba contra sus criterios de aceptación y registra la evidencia en `Sprint_0N/7.Pruebas`. Hasta entonces, su estado Scrum sigue siendo *pendiente de validación por el equipo*.

## Stack

Vite · React 18 · TypeScript (modo estricto) · Tailwind CSS · Framer Motion · Zustand (estado persistido en `localStorage`) · React Router (rutas con `#/`) · Leaflet (mapa) · PWA · Vitest (pruebas unitarias) · Playwright (pruebas de extremo a extremo).

No hay backend: todos los datos viven en el navegador. Las decisiones de diseño están en [`kuyaypet-web/docs/decisiones.md`](./kuyaypet-web/docs/decisiones.md) y el motor de compatibilidad en [`kuyaypet-web/docs/motor_match.md`](./kuyaypet-web/docs/motor_match.md).

## Cómo correrlo en local

Requiere Node.js 20 o superior (verificado con Node 22.14).

```bash
cd Codigo_Repositorio/kuyaypet-web
npm ci
npm run dev          # servidor de desarrollo en http://localhost:5173
```

## Cómo construirlo y probarlo

```bash
npm run build        # compila TypeScript y genera dist/
npm test             # Vitest: motor de compatibilidad y búsqueda
npm run test:e2e     # Playwright: levanta `vite preview` en el puerto 4173 y recorre las HU
```

Si el puerto 4173 ya está ocupado por otra aplicación, Playwright reutiliza ese servidor y las pruebas fallan. En ese caso, sirve el build en otro puerto y apunta las pruebas a él:

```bash
npx vite preview --port 4199 --strictPort
BASE_URL=http://localhost:4199/ npx playwright test
```

### Evidencias por HU (capturas y video)

Los specs de `tests/evidencias/` graban un video por HU y guardan una captura por caso de prueba. No forman parte de `npm run test:e2e`: solo corren con el script.

```bash
npx vite preview --port 4199 --strictPort    # en otra terminal
EVIDENCIAS_DIR=../../Sprint_01/7.Pruebas/evidencias VIDEOS_DIR=<carpeta fuera del repo>   BASE_URL=http://localhost:4199/ node scripts/record-hu.mjs 01 02 03
```

Deja `HU-NN.webm` (y `HU-NN.mp4` si `ffmpeg` está instalado) en `VIDEOS_DIR`, y las capturas en `EVIDENCIAS_DIR/HU-NN/`.

El build genera `dist/`, que se sube tal cual a un hosting estático (las rutas con `#/` no necesitan reescritura en el servidor).

## Cuentas demo

Contraseña común: `kuyay2026`.

| Rol | Correo |
|---|---|
| Adoptante | `adoptante@kuyaypet.pe` |
| Responsable de mascota | `responsable@kuyaypet.pe` |
| Administrador | `admin@kuyaypet.pe` |

También se puede entrar con los botones “Probar la demo como…” de la pantalla inicial. Las personas, albergues y mascotas son ficticios; el origen de las imágenes está en [`kuyaypet-web/CREDITS.md`](./kuyaypet-web/CREDITS.md).

## Trazabilidad de las 26 HU

La ruta proviene de [`src/data/huStatus.ts`](./kuyaypet-web/src/data/huStatus.ts). La columna de pruebas indica el test de Playwright (`kuyaypet-web/tests/`) que ejercita la HU; cuando no hay un test dedicado, se indica el flujo que la recorre.

| HU | Pantalla / ruta | Test Playwright | Estado Scrum |
|---|---|---|---|
| HU-01 — Registro de usuario | `/registro` | `smoke.spec.ts` › HU-01 registro | Implementada en prototipo, pendiente de validación por el equipo |
| HU-02 — Visualización de mascotas disponibles | `/buscar` | Sin test dedicado; recorrida en `adopter.spec.ts` › HU-04 y HU-05 | Implementada en prototipo, pendiente de validación por el equipo |
| HU-03 — Ver perfil de una mascota | `/mascota/p01` | Sin test dedicado; recorrida en `adopter.spec.ts` › HU-09, HU-14, HU-18 | Implementada en prototipo, pendiente de validación por el equipo |
| HU-04 — Filtrar mascotas según preferencias | `/buscar` | `adopter.spec.ts` › HU-04 y HU-05 | Implementada en prototipo, pendiente de validación por el equipo |
| HU-05 — Búsqueda de mascotas cercanas | `/buscar` | `adopter.spec.ts` › HU-04 y HU-05 · `map.spec.ts` › HU-05 mapa | Implementada en prototipo, pendiente de validación por el equipo |
| HU-06 — Indicar interés (Like / Dislike) | `/descubrir` | Sin test dedicado; recorrida en `smoke.spec.ts` › Flujo estrella | Implementada en prototipo, pendiente de validación por el equipo |
| HU-07 — Recibir un Match por compatibilidad | `/matches` | Sin test dedicado; recorrida en `smoke.spec.ts` › Flujo estrella | Implementada en prototipo, pendiente de validación por el equipo |
| HU-08 — Comunicarse con el responsable | `/chats` | Sin test dedicado; recorrida en `smoke.spec.ts` › Flujo estrella | Implementada en prototipo, pendiente de validación por el equipo |
| HU-09 — Chat entre interesados en la misma mascota | `/mascota/p01` | `adopter.spec.ts` › HU-09 | Implementada en prototipo, pendiente de validación por el equipo |
| HU-10 — Coordinar posible adopción | `/coordinar/p01` | Sin test dedicado; recorrida en `smoke.spec.ts` › Flujo estrella | Implementada en prototipo, pendiente de validación por el equipo |
| HU-11 — Registrar mascota | `/responsable/nueva` | `owner.spec.ts` › HU-11/16 registrar mascota | Implementada en prototipo, pendiente de validación por el equipo |
| HU-12 — Editar información textual de una mascota | `/responsable` | `owner.spec.ts` › HU-12 | Implementada en prototipo, pendiente de validación por el equipo |
| HU-13 — Notificación de interés en mascota | `/notificaciones` | `owner.spec.ts` › HU-13 | Implementada en prototipo, pendiente de validación por el equipo |
| HU-14 — Consulta de información sobre adopción | `/guia` | `adopter.spec.ts` › HU-14 | Implementada en prototipo, pendiente de validación por el equipo |
| HU-15 — Recuperación de contraseña | `/recuperar` | `adopter.spec.ts` › HU-15 | Implementada en prototipo, pendiente de validación por el equipo |
| HU-16 — Registro visual y etiquetado | `/responsable/nueva` | `owner.spec.ts` › HU-11/16 registrar mascota | Implementada en prototipo, pendiente de validación por el equipo |
| HU-17 — Guardado de mascotas favoritas | `/favoritos` | `adopter.spec.ts` › HU-17 | Implementada en prototipo, pendiente de validación por el equipo |
| HU-18 — Historial de mascotas de interés | `/historial` | `adopter.spec.ts` › HU-18 | Implementada en prototipo, pendiente de validación por el equipo |
| HU-19 — Actualización de mascota como adoptada | `/responsable` | `owner.spec.ts` › HU-19 | Implementada en prototipo, pendiente de validación por el equipo |
| HU-20 — Visualización de compatibilidades / Matches | `/matches` | Sin test dedicado; recorrida en `smoke.spec.ts` › HU-01 (cuestionario) y Flujo estrella | Implementada en prototipo, pendiente de validación por el equipo |
| HU-21 — Cierre seguro de sesión | `/perfil` | Sin test dedicado; el cierre de sesión es un paso de `admin.spec.ts` › HU-25 y `owner.spec.ts` › HU-13 | Implementada en prototipo, pendiente de validación por el equipo |
| HU-22 — Gestionar usuarios | `/admin/usuarios` | `admin.spec.ts` › HU-22 | Implementada en prototipo, pendiente de validación por el equipo |
| HU-23 — Revisar publicaciones de mascotas | `/admin/publicaciones` | `admin.spec.ts` › HU-23 | Implementada en prototipo, pendiente de validación por el equipo |
| HU-24 — Aprobar o rechazar publicaciones | `/admin` | Sin test dedicado; recorrida en `smoke.spec.ts` › Responsable… admin aprueba | Implementada en prototipo, pendiente de validación por el equipo |
| HU-25 — Desactivar cuentas de usuarios | `/admin/usuarios` | `admin.spec.ts` › HU-25 | Implementada en prototipo, pendiente de validación por el equipo |
| HU-26 — Gestionar información inapropiada | `/admin/reportes` | `admin.spec.ts` › HU-26 | Implementada en prototipo, pendiente de validación por el equipo |

## Qué es real y qué es simulado

- **Real (en el navegador):** registro e inicio de sesión con validaciones, cuestionario y motor de compatibilidad, Match, chat persistente, solicitudes de adopción y moderación.
- **Simulado:** la respuesta de los responsables, “Continuar con Google”, el envío de correos y las notificaciones push.
