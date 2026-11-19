# Documentación técnica — KuyayPet

[← Volver a la presentación](../readme.md) · [Código](../Codigo_Repositorio/readme.md)

Este documento resume cómo está construido el prototipo, cómo instalarlo, correrlo, probarlo y desplegarlo. Para el detalle, ver los documentos enlazados al final.

**Qué es y qué no es.** KuyayPet es un prototipo **sin servidor**: toda la lógica y los datos viven en el navegador (estado persistido en `localStorage`, clave `kuyaypet-db`). Esa decisión está en el ADR-K01 de [arquitectura](./arquitectura.md). Sus consecuencias (sin autorización en servidor, chat y correo simulados, datos por navegador) están en el [análisis](./analisis.md), sección 6.

## 1. Stack

Versiones tomadas de `Codigo_Repositorio/kuyaypet-web/package.json`.

| Capa | Tecnología |
|---|---|
| Lenguaje y base | TypeScript 5.7 (modo estricto), React 18.3, Vite 6 |
| Rutas | React Router 6 (`HashRouter`: rutas con `#/`, sirve en cualquier carpeta del hosting) |
| Estado | Zustand 5 con persistencia en `localStorage` |
| Estilos y movimiento | Tailwind CSS 3.4, Framer Motion 11, canvas-confetti, lucide-react, fuentes Nunito, Baloo 2 y Caveat (`@fontsource`) |
| Mapa | Leaflet 1.9 y react-leaflet 4.2 con teselas de OpenStreetMap |
| Otros | `qrcode.react` (QR del panel de presentador), PWA con `vite-plugin-pwa` (actualización automática) |
| Pruebas | Vitest 3 (unitarias), Playwright 1.63 (extremo a extremo) |
| Herramientas | `tsx` (scripts de semilla e imágenes), `marked` y `sharp` (manual y recursos) |

Requiere **Node.js 20 o superior** (verificado con Node 22).

## 2. Estructura de carpetas

Repositorio del grupo (`ClxNode/KuyayPet`):

```text
.
├── readme.md                 Presentación del proyecto
├── CONTRIBUTING.md           Cómo trabaja el equipo (ramas, commits, PR)
├── Sprint_01/ … Sprint_03/   Documentos de Scrum (8 secciones por sprint)
├── docs/                     Documentación de ingeniería (este documento y sus vecinos)
├── historias-de-usuario/     Fuentes de las 26 HU
├── assets/                   Imágenes del readme (banner, diagramas)
└── Codigo_Repositorio/
    └── kuyaypet-web/         La aplicación
```

La aplicación (`Codigo_Repositorio/kuyaypet-web/`):

```text
kuyaypet-web/
├── src/
│   ├── App.tsx, main.tsx, index.css
│   ├── components/   brand/ · ui/ · MatchCelebration.tsx · PetCard.tsx · PetMap.tsx
│   ├── data/         seed/ (datos sintéticos en JSON) · districts.ts · huStatus.ts · petTags.ts
│   ├── lib/          match/ (motor de compatibilidad) · useCountUp.ts
│   ├── screens/      admin/ · auth/ · chat/ · owner/ · una pantalla por flujo
│   ├── services/     reglas de negocio y store (único acceso a los datos)
│   ├── shell/        AppLayout · RequireAuth · SplitStage · Tour · PresenterPanel · DeviceFrame
│   └── types/        modelo de dominio compartido
├── tests/            specs de Playwright: raíz (integración) · criterios/ · evidencias/ (· seguridad/, PR #99)
├── scripts/          seed.ts · fetch-images.ts · manual.mjs · record-hu.mjs
├── public/           favicon, íconos PWA, imágenes, manual/ (manual empaquetado en la app)
├── data/             team.json (pantalla "Equipo KuyayPet")
├── docs/             decisiones.md · historias_usuario.md · motor_match.md
├── playwright.config.ts · vite.config.ts · tailwind.config.js · tsconfig*.json
└── package.json
```

Regla de capas: las **pantallas** solo llaman a **servicios**; los servicios son los únicos que importan el store; el motor de compatibilidad (`src/lib/match/`) no depende de React ni del reloj. Detalle en [arquitectura](./arquitectura.md).

## 3. Instalar, correr, probar y compilar

Desde `Codigo_Repositorio/kuyaypet-web/`:

| Comando | Qué hace |
|---|---|
| `npm ci` | Instala las dependencias del `package-lock.json` |
| `npm run dev` | Servidor de desarrollo (Vite, escucha en la red local; por defecto `http://localhost:5173`) |
| `npm test` | Pruebas unitarias con Vitest (22) |
| `npm run build` | `tsc -b` y `vite build`; genera `dist/`. `tsc -b` también compila `tests/`, por lo que un error de tipos en un spec rompe el build |
| `npm run preview` | Sirve `dist/` (para las pruebas de extremo a extremo y revisión local) |
| `npm run test:e2e` | Playwright; ver cómo correrlo con servidor propio en [pruebas](./pruebas.md#4-cómo-correr-las-pruebas) |
| `npm run seed` · `npm run images` | Regeneran los datos sintéticos y las imágenes de la semilla |
| `npm run manual` | Genera el manual empaquetado en `public/manual/` |

Variables de entorno de compilación (todas opcionales): `VITE_BASE` (carpeta de despliegue, por ejemplo para una vista previa en una subcarpeta), `VITE_PUBLIC_URL` (URL que codifica el QR del panel de presentador cuando se abre desde `localhost`) y `VITE_GOOGLE_CLIENT_ID` (sin ella, "Continuar con Google" usa un selector simulado). No se guardan credenciales en el repositorio.

## 4. Pruebas

Tres niveles: funcionales por criterio de cada HU, de integración entre roles y de seguridad. Plan, tabla SEG-01 a SEG-13, qué queda fuera de alcance y resultados: [pruebas](./pruebas.md). Trazabilidad criterio a criterio: [matriz de trazabilidad](./matriz-trazabilidad.md).

## 5. Despliegue

La aplicación es un sitio **estático** (`dist/`) con rutas relativas, publicado en Hostinger en https://firebrick-cod-910257.hostingersite.com/ y espejado en GitHub Pages. La versión desplegada al 19-nov-2026 es `v1.0.0`. Procedimiento, cuidados con el service worker y la CDN y cómo revertir: [despliegue](./despliegue.md).

## 6. Mantenimiento y límites conocidos

- Los datos de demostración se regeneran con **Reiniciar demo** (panel de presentador) o borrando los datos del sitio.
- El service worker de la PWA está en la raíz del sitio; cualquier subcarpeta de vista previa debe excluirse de su alcance (ver [despliegue](./despliegue.md)).
- Lista de limitaciones por falta de backend y trabajo futuro: [análisis](./analisis.md), sección 6, y [cierre del proyecto](./cierre-proyecto.md#6-trabajo-futuro).

## 7. Documentos relacionados

| Documento | Contenido |
|---|---|
| [arquitectura.md](./arquitectura.md) | Vista general, componentes, ADR |
| [modelo-datos.md](./modelo-datos.md) | Modelo entidad-relación |
| [analisis.md](./analisis.md) | Actores, reglas de negocio, estados, flujos y riesgos |
| [pruebas.md](./pruebas.md) | Plan y resultados de pruebas |
| [historias-de-usuario.md](./historias-de-usuario.md) | Catálogo de las 26 HU con criterios |
| [despliegue.md](./despliegue.md) | Publicación y reversión |
| [manual-usuario.md](./manual-usuario.md) | Manual por rol |
| [cierre-proyecto.md](./cierre-proyecto.md) | Resumen final |
