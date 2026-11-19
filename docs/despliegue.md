# Despliegue — KuyayPet

[← Volver a la presentación](../readme.md) · [Documentación técnica](./documentacion-tecnica.md)

KuyayPet es un sitio estático: el build (`dist/`) se sube a un hosting sin ejecutar código en servidor. Este documento resume el procedimiento usado y cómo revertirlo. No contiene credenciales ni identificadores de cuenta.

## 1. Estado de producción

| Dato | Valor |
|---|---|
| URL | https://firebrick-cod-910257.hostingersite.com/ |
| Versión desplegada al 19-nov-2026 | `v0.3.1-sprint2` |
| Qué incluye | Sprints 1 y 2 |
| Qué **no** incluye | Los arreglos del Sprint 3 (por ejemplo, #70, #72 y #74 de la parte a, los PR #88–#94 de la parte b y los arreglos del PR #99), porque son posteriores al despliegue |
| Espejo | https://ichisieben.github.io/kuyaypet/ (GitHub Pages, se publica con cada push a `main` del repositorio espejo) |
| Manual dentro de la app | https://firebrick-cod-910257.hostingersite.com/manual/ |

**De dónde se construye.** La producción se construye desde el repositorio `IchiSieben/kuyaypet`, un espejo del código con el mismo `src/` que `Codigo_Repositorio/kuyaypet-web/` del repositorio del grupo (la comparación de `src`, `tests`, `public` y configuraciones, hecha el 28-oct, no encontró diferencias). El tag `v0.3.1-sprint2` está en ese repositorio.

## 2. Qué hay en el sitio

La raíz del sitio sirve la aplicación. Además hay carpetas que **no deben borrarse ni pisarse** al desplegar la raíz:

| Ruta | Contenido |
|---|---|
| `/` | Aplicación (`v0.3.1-sprint2`) |
| `/next/` | Vista previa de la versión de interfaz v0.4 |
| `/next2/` | Vista previa de la versión de interfaz v0.5 |
| `/manual/` | Manual empaquetado en la aplicación |
| `/guia-sprint2/` | Guía visual del Sprint 2 |

## 3. Procedimiento de publicación

Se usa la API de hosting de Hostinger (conector MCP) para generar una URL de subida y se sube **archivo por archivo** con el protocolo TUS. No se usa el despliegue de archivo comprimido completo, porque **reemplaza el sitio entero** y borraría `/next/`, `/next2/`, `/manual/` y `/guia-sprint2/`.

1. **Compilar** desde la rama que corresponde (ver nota abajo), con el archivo `.env.production` local: `npm ci` y `npm run build`. Correr el build después del último cambio: `tsc -b` también compila `tests/` y un error de tipos en un spec lo rompe.
2. **Verificar el build** en local con `npx vite preview` y la suite de Playwright (ver [pruebas](./pruebas.md#4-cómo-correr-las-pruebas)).
3. **Generar la URL de subida** con la operación de la API de hosting (credenciales en variables de entorno; nunca en el repositorio).
4. **Subir `dist/` archivo por archivo (TUS) con `curl`**, no con `urllib` de Python (el Python de Windows rechaza la cadena de certificados de los servidores de archivos). Reglas del script de subida:
   - se rechaza cualquier ruta que empiece por `next/` o `next2/`;
   - se reintenta cada archivo (hasta 4 veces);
   - **`index.html` y `sw.js` (y el manifiesto) se suben al final**, para que un fallo a mitad de camino nunca deje la página apuntando a archivos que aún no existen.
5. **Purgar la CDN después de subir `sw.js`.** La CDN guarda `sw.js` 7 días (`max-age=604800`); sin la purga, los navegadores siguen recibiendo el service worker anterior. Se purga con la operación de limpieza de caché de la API de hosting (alcance CDN) y se comprueba pidiendo `/sw.js` **sin** parámetros de consulta.
6. **Borrar el archivo temporal de credenciales** de la subida.
7. **Verificar en producción:** la suite de Playwright contra la URL pública (en el despliegue de `v0.3.1-sprint2`: 54 de 54) y que `/next/`, `/next2/` y `/manual/` sigan intactas.

**Nota de rama.** El service worker de la raíz excluye por `denylist` las carpetas `/manual/`, `/next/`, `/next2/` y `/guia-sprint2/`. Esa exclusión está en la rama `hotfix/sw-guia-sprint2` del repositorio espejo. Para tocar la raíz hay que construir desde la rama que contenga esa exclusión; construir desde otra puede cambiar los nombres de los archivos generados y dejar el sitio mezclado.

## 4. Reversión

- **Solo el service worker** (si un `sw.js` nuevo causa problemas): volver a subir la copia guardada del `sw.js` de `v0.3.1-sprint2` como `sw.js` y purgar la CDN.
- **Todo el sitio:** repetir el procedimiento de la sección 3 con el build anterior (existe una copia comprimida de `dist/` del despliegue anterior en el respaldo del propietario). Mientras no se suba `index.html`, el sitio sigue sirviendo la versión previa.
- **Una vista previa** (`/next/`, `/next2/`): se vuelve a publicar con `VITE_BASE` apuntando a su carpeta y un `.htaccess` propio; nunca por el despliegue completo.
- Borrar archivos del hosting es **irreversible** y lo ejecuta el propietario del sitio desde el panel del hosting, no el procedimiento automatizado.

## 5. Lecciones del despliegue

- La CDN cachea `sw.js` 7 días: purgar siempre tras subirlo. Mejora pendiente: indicar `Cache-Control: no-cache` para `sw.js` en el `.htaccess` de la raíz, si el propietario lo autoriza.
- Un service worker con alcance en la raíz captura las subcarpetas de vista previa en navegadores que ya abrieron la raíz; por eso las carpetas están en su `denylist` y las vistas previas se revisan en una ventana de incógnito.
- Con `HashRouter` y base relativa (`base: './'`) el mismo build funciona en la raíz del hosting y en GitHub Pages.

## 6. Estado final de producción

<!-- ESTADO_PRODUCCION -->
