# SC-2026-004 — Mejora de experiencia de usuario

**Estado:** Implementada, verificada y en producción (v1.1.1); pendiente de decisión y firmas del Comité.
**Nivel de impacto (preliminar):** Medio, según FOR-GC-002.
**Decisión del Comité:** Pendiente de decisión del Comité.
**Estado de despliegue:** Promovida a producción como v1.1.0 el 27-nov-2026 y corregida a v1.1.1 el mismo día (desviación: sin decisión del Comité).

## Qué se pidió

Integrar el rediseño visual v0.5 (rama `v0.5-ui`) con la versión 1.0.1 de producción y corregir los problemas de la auditoría UX del 26/11/2026.

- Situación: producción v1.0.1 funciona con las 26 HU. El rediseño v0.5 nunca se integró con el trabajo de los Sprints 1 a 3.
- Auditoría con las 10 heurísticas de Nielsen: 30 problemas. Severidad 4: 0. Severidad 3: 3. Severidad 2: 18. Severidad 1: 9.
- Los tres de severidad 3: UX-01 (contraste 2,61:1), UX-02 (aceptar o rechazar con iconos y sin aviso), UX-03 (sin «Deshacer» en Descubrir).
- Cambio: integrar v0.5 conservando lógica, criterios y selectores de prueba; corregir severidad 3 y 4 y los de severidad 2 de costo bajo. Ningún criterio de aceptación cambia; lo que lo exigiría se deja fuera y se registra.
- Tipo: Calidad. Alcance y cronograma sin cambio. Costos: 18 a 20 h-persona estimadas (S/ 450 a S/ 500 referencial; gasto directo S/ 0).

## Política y estado administrativo

Según PRO-GC-001 (1.6), ningún cambio de calidad entra al Sprint Backlog sin una SC aprobada en FOR-GC-003. **Esta solicitud no está aprobada.**

- **Desviación:** el cambio se promovió a producción el 27/11/2026, antes de la decisión del Comité, por indicación del Solicitante y condicionada a que las pruebas pasaran al 100 %. Se publicó primero en `/v2/` (134/134) y después en la raíz (134/134). El Comité debe regularizarla: si aprueba, se cierra la solicitud; si rechaza, se revierte a v1.0.1 con `python deploy_tus.py ../revert-v1.0.1 --only index.html sw.js` y purga de la CDN (los assets antiguos siguen en el servidor). Lección aprendida en FOR-GC-004 C.
- No hay revisión de completitud del Gestor, Analista designado, sesión del Comité, votos ni firmas. FOR-GC-003 y FOR-GC-004 existen con esas celdas en «Pendiente de firma» y «Pendiente de decisión del Comité».
- Decisión posible: siguiente sesión semanal del Comité, o sesión extraordinaria dentro de 24 h si el Gestor considera en riesgo la entrega del sprint (opción, no hecho).

## Qué se hizo

Resultado por hallazgo (30): 12 corregidos, 5 parciales, 5 ya resueltos por v0.5, 8 no abordados o fuera de alcance. Los tres de severidad 3 están corregidos: UX-01 (contraste), UX-02 (aceptar y rechazar con texto y «Deshacer») y UX-03 («Deshacer» en Descubrir). Ningún criterio de aceptación cambió y no se modificó ningún test existente. Detalle y commits en FOR-GC-004 A y B.

## Antes y después

Mismas pantallas y viewport (móvil 390×844; escritorio 1440×900). «Antes» es producción v1.0.1; «después» es producción v1.1.0.

![Descubrir · menú inferior](capturas/comparativas/comparativa-adoptante-descubrir-movil.png)

*Descubrir · menú inferior: UX-01 contraste 12 px · UX-03 «Deshacer» · UX-15.*

![Panel del responsable](capturas/comparativas/comparativa-responsable-panel-movil.png)

*Panel del responsable: UX-02 «Rechazar» y «Aceptar y hacer Match» con texto.*

![Descubrir · aviso al descartar](capturas/comparativas/comparativa-adoptante-descubrir-toast-descarte-movil.png)

*Descubrir · aviso al descartar: UX-03 «Deshacer» · UX-15 aviso sin tapar controles.*

![Buscar · filtros](capturas/comparativas/comparativa-adoptante-buscar-filtros-movil.png)

*Buscar · filtros: UX-10 ayuda de edad en meses.*

![Buscar · sin resultados](capturas/comparativas/comparativa-adoptante-buscar-vacio-movil.png)

*Buscar · sin resultados: UX-12 estado vacío con «Quitar filtros».*

![Registro · errores](capturas/comparativas/comparativa-anon-registro-errores-movil.png)

*Registro · errores: UX-07 mensaje bajo cada campo · UX-19 color de error.*

![Registrar mascota · errores](capturas/comparativas/comparativa-responsable-nueva-errores-movil.png)

*Registrar mascota · errores: UX-08 mensaje bajo cada campo inválido.*

![Tour de inicio](capturas/comparativas/comparativa-anon-tour-inicio-movil.png)

*Tour de inicio: UX-05 sin insignia «HU-xx» ni «Tinder».*

![Notificaciones](capturas/comparativas/comparativa-adoptante-notificaciones-movil.png)

*Notificaciones: UX-16 nombran mascota y responsable.*

![Chat](capturas/comparativas/comparativa-adoptante-chat-movil.png)

*Chat: UX-18 «Finalizar» con texto · UX-17 zona táctil.*

![Pantalla de inicio](capturas/comparativas/comparativa-anon-splash-movil.png)

*Pantalla de inicio: UX-01 texto secundario con contraste AA.*

![Perfil de mascota · aviso de favorito](capturas/comparativas/comparativa-adoptante-mascota-toast-favorito-movil.png)

*Perfil de mascota · aviso de favorito: UX-15 avisos abajo, sobre el menú.*

![Descubrir · escritorio (1440×900)](capturas/comparativas/comparativa-adoptante-descubrir-escritorio.png)

*Descubrir · escritorio (1440×900): UX-01 · UX-03 · UX-15.*

![Panel del responsable · escritorio (1440×900)](capturas/comparativas/comparativa-responsable-panel-escritorio.png)

*Panel del responsable · escritorio (1440×900): UX-02 · UX-01 · UX-19.*


## Cómo se verificó

| Contexto | Vitest | Playwright |
|---|---|---|
| Local | 51/51 | 134/134 (130 previas + 4 nuevas) |
| Vista previa `/v2/` (27/11) | — | 1.ª corrida 133/134 (HU-01 registro, intermitente; pasó 2/2 sola); 2.ª corrida 134/134 en 7,6 min |
| Producción, raíz, v1.1.0 | — | 134/134 en 7,9 min |
| Vista previa `/v2/`, v1.1.1 | — | 135/135 en 7,8 min (134 + prueba de la barra inferior) |
| Producción, raíz, v1.1.1 | — | 135/135 en 7,9 min |

Lighthouse 12 (Chromium headless, raíz de producción):

| | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|
| Móvil, antes (v1.0.1, 26/11; 1 corrida) | 90 | 100 | 100 | 100 |
| Móvil, después (v1.1.0, 27/11; 3 corridas) | 81 / 96 / 95 (mediana 95) | 100 | 100 | 100 |
| Escritorio, antes | 97 | 100 | 100 | 100 |
| Escritorio, después | 100 | 100 | 100 | 100 |

La medición «antes» es de una sola corrida y el rendimiento móvil varía mucho (la primera corrida «después» tuvo TBT de 650 ms y las otras 150 a 170 ms); la comparación de rendimiento es indicativa. Accesibilidad, buenas prácticas y SEO se mantienen en 100. Esto prueba que el cambio funciona; no sustituye la decisión del Comité.

## Observaciones

Observación hallada al preparar las comparativas: en v1.1.0 la etiqueta «Perfil» del menú inferior del adoptante quedaba recortada (marco de escritorio y móviles de 360–390 px; ver `adoptante-descubrir-escritorio` en las comparativas, que muestran v1.1.0). Era una regresión de UX-01 (etiquetas a 12 px). **Corregida en v1.1.1 (27/11/2026): cada pestaña ocupa una fracción igual del ancho de la barra; prueba nueva en `tests/ux` que falla contra v1.1.0 y pasa con el arreglo (commits `83a8ec6`, `50d767b` en IchiSieben; `0372203` en el PR #104). Suite contra `/v2/` y contra la raíz con v1.1.1: 135/135.**

### Fuera de la SC

Cuatro avatares de responsables (`img/people/u-owner-02.webp`, `-06`, `-07`, `-12`) devuelven 404 en v1.0.1 y en v1.1.0 (la carpeta tiene 17 imágenes). Defecto previo hallado al tomar las capturas; no lo causa este cambio.

## Enlaces

| Qué | Dónde |
|---|---|
| Auditoría UX (30 hallazgos) | [auditoria-ux.md](auditoria-ux.md) |
| Análisis de integración v0.5 | `recon-merge-v05.md` (mismo directorio que la auditoría) |
| Vista previa del rediseño v0.5 | https://firebrick-cod-910257.hostingersite.com/next2/ |
| Vista previa de la integración | https://firebrick-cod-910257.hostingersite.com/v2/ (publicada, 134/134) |
| Producción (v1.1.1 desde el 27/11/2026; antes v1.1.0 y v1.0.1) | https://firebrick-cod-910257.hostingersite.com/ |
| Registro de solicitudes | [registro-solicitudes.md](registro-solicitudes.md) |
| Expediente en PDF | [expediente-SC-2026-004.pdf](expediente-SC-2026-004.pdf) |
| Rama | `sprint-3/SC-2026-004-mejora-ux` en IchiSieben/kuyaypet (hoy `main`, etiquetas `v1.1.0` y `v1.1.1`) |
| PR | [#104](https://github.com/ClxNode/KuyayPet/pull/104) (abierto, sin integrar; depende del #102; revisor sugerido Dylan200-7) |
| Solicitud relacionada (misma pantalla de chat) | SC-2026-003 |

## Formatos

[FOR-GC-001 Solicitud](FOR-GC-001.md) · [FOR-GC-002 Análisis de impacto](FOR-GC-002.md) · [FOR-GC-003 Decisión](FOR-GC-003.md) · [FOR-GC-004 Seguimiento y cierre](FOR-GC-004.md)

## Firmas pendientes

| Persona | Rol | Qué firma o decide |
|---|---|---|
| IchiSieben | Solicitante | FOR-GC-001 E (firma del Solicitante); FOR-GC-004 E (conformidad del Solicitante) |
| Joseph Lombardi | Líder del proyecto – Gestor de Cambios | FOR-GC-001 D y E; FOR-GC-003 voto y E; FOR-GC-004 C y E |
| Dylan Quispe | Patrocinador | FOR-GC-003: voto y firma |
| Juan Huapalla | Docente asesor | FOR-GC-003: voto y firma |
| Analista de Impacto (lo designa el Gestor; no puede ser el Solicitante) | Analista | FOR-GC-002 E |

Todas estas celdas dicen «Pendiente de firma», «Pendiente de designación» o «Pendiente de decisión del Comité» en los formatos.
