| KuyayPet · Gestión de Cambios | SEGUIMIENTO Y CIERRE DEL CAMBIO | Código: FOR-GC-004 · Versión: 1.0 · Procedimiento: PRO-GC-001 |
|---|---|---|

| Actividad del proceso | Responsable |
|---|---|
| Planificar e implementar el cambio | Responsable de Implementación |
| Actualizar documentos del proyecto | Responsable de Implementación |
| Verificar implementación | Gestor de Cambios |
| Cerrar solicitud y registrar evidencia | Gestor de Cambios |

## A. PLAN DE IMPLEMENTACIÓN (Responsable de Implementación)

| Campo | Valor |
|---|---|
| N.º de solicitud | SC-2026-004 |
| Responsable de Implementación | Autor de los commits: IchiSieben. Responsable formal no designado (el Comité no ha decidido). |
| Sprint | Sprint 3 (23/11–06/12/2026). Rama `sprint-3/SC-2026-004-mejora-ux` en IchiSieben/kuyaypet, hoy `main` y etiquetas `v1.1.0` y `v1.1.1`. |
| Fecha compromiso | No consta. |

### A. TAREAS DE IMPLEMENTACIÓN

| N.º | Tarea | Responsable | Fecha plan | Fecha real | Estado |
|---|---|---|---|---|---|
| 1 | Auditoría UX con las 10 heurísticas de Nielsen (30 hallazgos: 0/3/18/9) y registro de la solicitud | IchiSieben | No consta | 26/11/2026 | Completada |
| 2 | Integrar el rediseño `v0.5-ui` (merge `9787ce9`), estabilizar la tarjeta del responsable (`2aa18e5`) y regenerar el inventario de selectores (`535ead1`) | IchiSieben | No consta | 26/11/2026 | Completada |
| 3 | UX-01 y UX-19: contraste AA, menú de 12 px, insignias y avisos (`182a296`) | IchiSieben | No consta | 27/11/2026 | Completada |
| 4 | UX-02: «Rechazar» y «Aceptar y hacer Match» con texto y aviso «Deshacer» (`8aa0574`) | IchiSieben | No consta | 27/11/2026 | Completada |
| 5 | UX-03: «Deshacer» en Descubrir y operación inversa `undoSwipe` (`defa967`) | IchiSieben | No consta | 27/11/2026 | Completada |
| 6 | UX-05, 07, 08, 09/15, 10, 11/12/13, 16, 17 y 18 (`90966f3`, `1ff6256`, `1218463`, `26f67a6`, `76ceaba`, `4c570f7`, `3463082`, `47a6dad`; detalle en el informe de implementación) | IchiSieben | No consta | 27/11/2026 | Completada; parciales y no hechos en la sección B |
| 7 | Pruebas Playwright nuevas `tests/ux/SC-2026-004.spec.ts` (`931bc9a`) y versión 1.1.0 (`c24ba18`) | IchiSieben | No consta | 27/11/2026 | Completada |
| 8 | Publicar la vista previa `/v2/` y correr la suite completa contra ella | IchiSieben | No consta | 27/11/2026 | Completada: 134/134 en la 2.ª corrida |
| 9 | Promover a la raíz como v1.1.0 (39 archivos verificados por sha256, CDN purgada) y correr la suite contra producción | IchiSieben | No consta | 27/11/2026 | Completada: 134/134. **Sin decisión del Comité (desviación)** |
| 10 | Capturas antes/después, comparativas y este expediente | IchiSieben | No consta | 27/11/2026 | Completada |
| 11 | Corregir la regresión de la barra inferior («Perfil» recortada) como v1.1.1: `/v2/` primero, luego la raíz | IchiSieben | No consta | 27/11/2026 | Completada: 135/135 en `/v2/` y 135/135 en la raíz |
| 11 | Decisión del Comité, firmas y cierre administrativo | Comité y Gestor de Cambios | Sin fecha | — | Pendiente |

## B. DOCUMENTOS DEL PROYECTO ACTUALIZADOS (Responsable de Implementación)

| Documento | Versión anterior | Versión nueva | Cambio realizado |
|---|---|---|---|
| Código de la aplicación (`Codigo_Repositorio/kuyaypet-web/src/`) | v1.0.1 (`7dd75a4`) | v1.1.0 (`c24ba18`) | Rediseño v0.5 integrado. Completos: UX-01, 02, 03, 05, 07, 09, 11, 12, 15, 16, 18 y 19. Parciales: UX-08, 10, 13, 17 y 20. Ya resueltos por v0.5: UX-04, 21, 22, 23 y 29 |
| `tailwind.config.js` e `index.css` | Sin tokens `cocoa-600` ni `coral-700` | v1.1.0 | Tokens de texto con contraste AA; la paleta no cambia |
| `src/services/match.ts` | Sin operaciones inversas | v1.1.0 | `undoSwipe` y `undoRejectInterest` |
| `tests/ux/SC-2026-004.spec.ts` y `undo.test.ts` | No existían | v1.1.0 | 4 pruebas Playwright nuevas (134 en total) y 6 de Vitest nuevas (51 en total). No se modificó ni debilitó ningún test existente |
| Inventario de selectores | Anterior al merge | `535ead1` | Regenerado desde los tests de `main` |
| Product Backlog, cronograma de sprints, Sprint Backlog, ADR | — | — | No se registró actualización por este cambio. No verificado en este expediente. |

Hallazgos no abordados o fuera de alcance (informe de implementación): UX-06, 25, 28 y 30 (severidad 1, no abordados); UX-14 (costo M, queda propuesto); UX-24 (costo L); UX-26 y UX-27 (cambiarían criterios de HU-18 y HU-20).

## C. VERIFICACIÓN DE LA IMPLEMENTACIÓN (Gestor de Cambios)

Verificación por ejecución el 27/11/2026, Chromium, viewport 390×844, `--workers=1`, en tres contextos: (1) local: Vitest 51/51 y Playwright 134/134; (2) vista previa https://firebrick-cod-910257.hostingersite.com/v2/: 1.ª corrida 133/134 (HU-01 registro: no apareció el aviso «8 caracteres»; falla intermitente, pasó 2/2 al repetirla sola) y 2.ª corrida completa 134/134 en 7,6 min; (3) producción (raíz) ya con v1.1.0: 134/134 en 7,9 min. Los registros de ejecución están en la máquina de verificación (no están en el repositorio).

La verificación formal la hace el Gestor de Cambios. Lo que sigue es el resultado de la ejecución; la firma del Gestor sigue pendiente.

| Verif. N.º / fecha | Criterio de verificación (propuesto en FOR-GC-003 D) | Evidencia revisada | Resultado |
|---|---|---|---|
| 1 – 27/11/2026 | V1. Hallazgos de severidad 3 corregidos | UX-01: prueba de contraste computado ≥ 4,5:1 y tamaño ≥ 12 px. UX-02: prueba de «Rechazar» con «Deshacer». UX-03: prueba de descarte con «Deshacer». Comparativas `comparativa-adoptante-descubrir-movil.png`, `comparativa-responsable-panel-movil.png` y `comparativa-adoptante-descubrir-toast-descarte-movil.png`. | Conforme |
| 1 – 27/11/2026 | V2. Ningún criterio de aceptación cambia | Informe de implementación: ningún test existente modificado ni debilitado; lo que cambiaría criterios (UX-26, UX-27 y los selectores de HU-05, HU-11 y HU-16) quedó fuera o parcial. Las 130 pruebas previas pasan sin cambios. | Conforme |
| 1 – 27/11/2026 | V3. Suite al 100 % | Vitest 51/51; Playwright 134/134 en local, en `/v2/` (2.ª corrida) y en producción. Reserva: una corrida contra `/v2/` dio 133/134 por una falla intermitente en HU-01 que pasó 2/2 al repetirse sola. | Conforme (con la reserva indicada) |
| 1 – 27/11/2026 | V4. Lighthouse sin empeorar la accesibilidad | Accesibilidad 100 antes y después, en móvil y escritorio; buenas prácticas y SEO 100 en ambos. Rendimiento móvil: antes 90 (1 medición), después 81 / 96 / 95 (mediana 95). Ver tabla siguiente. | Conforme |
| 1 – 27/11/2026 | V5. Vista previa antes de la raíz | `/v2/` publicada y probada (134/134) antes de promover a la raíz. | Conforme |
| 1 – 27/11/2026 | V6. Documentación | Este expediente: FOR-GC-001 a FOR-GC-004, auditoría, registro, comparativas y PDF. | Conforme (ver reserva en observaciones) |
| 1 – 27/11/2026 | V7. Aprobación formal | Decisión del Comité y firmas. | Pendiente de firma |

### Compuerta C4 «¿Conforme?»

| Condición de PRO-GC-001 3.1 | Estado |
|---|---|
| (a) Todos los criterios de verificación «Conforme» | V1 a V6 son Conforme por ejecución. V7 es el criterio de aprobación formal y está pendiente de firma. |
| (b) 100 % de las pruebas pasa sin regresiones | Sí: Vitest 51/51 y Playwright 134/134 (3 contextos), con la reserva de la corrida intermitente en `/v2/`. |
| (c) Sección B completa | Completa para el código. La actualización de backlog, cronograma y ADR no se verificó. |
| (d) Se cumplieron las condiciones del Comité | No se puede confirmar: el Comité no ha decidido ni fijado condiciones. |

Resultado técnico: conforme por ejecución. Conformidad administrativa: pendiente de las firmas del Comité. La solicitud no pasa a «Cerrada» hasta entonces.

### Lighthouse (Lighthouse 12, Chromium headless, raíz de producción)

| Medición | Rendimiento | Accesibilidad | Buenas prácticas | SEO | Detalle |
|---|---|---|---|---|---|
| Móvil, antes (v1.0.1, 26/11) | 90 | 100 | 100 | 100 | 1 sola corrida; LCP 2,6 s; TBT 270 ms |
| Móvil, después (v1.1.0, 27/11) | 81 / 96 / 95 (mediana 95) | 100 | 100 | 100 | 3 corridas; la 1.ª con TBT 650 ms, las otras 150–170 ms |
| Escritorio, antes | 97 | 100 | 100 | 100 | LCP 0,5 s; TBT 150 ms |
| Escritorio, después | 100 | 100 | 100 | 100 | LCP 0,5 s; TBT 70 ms |

Cautela: «antes» es una sola corrida por formato y el rendimiento móvil varía mucho entre corridas, así que esa comparación es indicativa, no concluyente. Lo estable es que accesibilidad, buenas prácticas y SEO no bajaron.

### C. OBSERVACIONES DE LA VERIFICACIÓN

| Campo | Valor |
|---|---|
| Observaciones devueltas a implementación | Ninguna sobre el código. Pendientes administrativos: decisión del Comité, firmas, y confirmar si el Product Backlog, cronograma y ADR requieren actualización. |
| **Desviación de procedimiento** | El cambio se promovió a producción el 27/11/2026 **sin decisión del Comité**, por indicación del Solicitante y condicionada a que las pruebas pasaran al 100 %. Según PRO-GC-001 (1.6), ningún cambio de calidad entra al Sprint Backlog sin una SC aprobada en FOR-GC-003. El Comité debe regularizarlo: si **aprueba**, se cierra la solicitud; si **rechaza**, se revierte a v1.0.1 con `python deploy_tus.py ../revert-v1.0.1 --only index.html sw.js` más la purga de la CDN (los assets antiguos siguen en el servidor). |
| Lección aprendida (propuesta, sin ratificar) | La vista previa `/v2/` ya daba al Comité la evidencia necesaria; promover a la raíz debió esperar la decisión. Es el mismo patrón de SC-2026-003 (cambio integrado antes de decidir). Registrar la aprobación antes de promover. |
| Reserva sobre V6 | La documentación existe, pero está sin firmas. |
| Defecto previo, fuera de la SC | Cuatro avatares de responsables (`img/people/u-owner-02.webp`, `-06`, `-07` y `-12`) devuelven 404 tanto en v1.0.1 como en v1.1.0: la carpeta `img/people` solo tiene 17 imágenes. Se halló al tomar las capturas. No lo causa este cambio; se maneja en el Sprint Backlog, no como SC (PRO-GC-001 1.2). |
| Observación, corregida en v1.1.1 | En escritorio (marco de teléfono), con las etiquetas del menú inferior de 12 px, la etiqueta «Perfil» queda recortada en el borde derecho (visible en `capturas/antes`/`despues` `adoptante-descubrir-escritorio.png`, producción v1.1.0). Se detectó al preparar las comparativas; era una regresión de UX-01. Corregida en v1.1.1 (27/11/2026): cada pestaña ocupa una fracción igual del ancho de la barra; prueba nueva en `tests/ux` que falla contra v1.1.0 y pasa con el arreglo (commits `83a8ec6`, `50d767b` en IchiSieben; `0372203` en el PR #104). Suite contra `/v2/` y contra la raíz con v1.1.1: 135/135. |
| Código en el repositorio del grupo | PR [#104](https://github.com/ClxNode/KuyayPet/pull/104): abierto, **sin integrar**, depende del PR #102; revisor sugerido Dylan200-7. |

## D. HISTORIAL DE LA SOLICITUD (trazabilidad paso a paso)

| Fecha | Actividad del proceso | Ejecutado por | Resultado |
|---|---|---|---|
| 16/10/2026 | Registrar antecedente: rediseño v0.5 | IchiSieben | Vista previa publicada en `/next2/`; nunca se integró con el trabajo funcional |
| 26/11/2026 | Auditoría UX y registro de la solicitud | IchiSieben | 30 hallazgos (0/3/18/9); línea base Lighthouse de v1.0.1; SC-2026-004 registrada, «en análisis» |
| 26/11/2026 | Integrar v0.5 y regenerar selectores | IchiSieben | Commits `9787ce9`, `2aa18e5`, `535ead1` |
| 27/11/2026 | Implementar correcciones UX y pruebas nuevas | IchiSieben | Commits `26f67a6` a `931bc9a` y versión `c24ba18`; Vitest 51/51 y Playwright 134/134 en local |
| 27/11/2026 | Publicar la vista previa `/v2/` y probarla | IchiSieben | 1.ª corrida 133/134 (falla intermitente en HU-01); 2.ª corrida 134/134 |
| 27/11/2026 | Promover a producción como v1.1.0 | IchiSieben | 39 archivos verificados por sha256, CDN purgada, suite 134/134 en la raíz. **Sin decisión del Comité (desviación)** |
| 27/11/2026 | Abrir el PR #104 en el repositorio del grupo | IchiSieben | Abierto, sin integrar |
| 27/11/2026 | Corregir «Perfil» recortada y publicar v1.1.1 (`/v2/` → raíz) | IchiSieben | 135/135 en `/v2/` y en la raíz; commit `0372203` añadido al PR #104 |
| Pendiente | Decidir sobre el cambio | Comité de Control de Cambios | Pendiente de decisión del Comité |
| Pendiente | Firmas y cierre | Solicitante, Analista y Gestor de Cambios | Pendiente de firma |

## E. CIERRE (Gestor de Cambios)

| Campo | Valor |
|---|---|
| Fecha de cierre | Pendiente: el cierre administrativo requiere la decisión del Comité y las firmas |
| Estado final | Implementada, verificada y en producción (v1.1.1); pendiente de decisión y firmas del Comité |
| Duración total | No calculable: la solicitud no está cerrada |
| Ubicación de la evidencia | PR [#104](https://github.com/ClxNode/KuyayPet/pull/104) · rama `sprint-3/SC-2026-004-mejora-ux` y etiquetas `v1.1.0`/`v1.1.1` en IchiSieben/kuyaypet · vista previa https://firebrick-cod-910257.hostingersite.com/v2/ · producción https://firebrick-cod-910257.hostingersite.com/ · registros locales de las suites del 27/11/2026 |
| Lección aprendida (propuesta, sin ratificar) | Ver «C. Observaciones»: esperar la decisión del Comité antes de promover a producción. |
| Firma del Gestor de Cambios | Pendiente de firma (Joseph Lombardi) |
| Conformidad del Solicitante | Pendiente de firma (IchiSieben) |
