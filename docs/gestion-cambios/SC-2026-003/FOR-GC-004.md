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
| N.º de solicitud | SC-2026-003 |
| Responsable de Implementación | Autor del PR: @IchiSieben. Responsable formal no designado (el Comité no ha decidido). |
| Sprint | Rama `sprint-3/HU-08-criterios` |
| Fecha compromiso | No consta. Merge documentado: 12/11/2026. |

### A. TAREAS DE IMPLEMENTACIÓN

| N.º | Tarea | Responsable | Fecha plan | Fecha real | Estado |
|---|---|---|---|---|---|
| 1 | Agregar «Finalizar conversación» con diálogo de confirmación y aviso de cierre en `ChatThread.tsx` | @IchiSieben | No consta | Commit `e358a9b` del 28/10/2026; integrado el 12/11/2026 | Integrado (PR #70) |
| 2 | Impedir envíos al cerrar: `closeThread`, `closedAt`, `sendMessage` ignora hilos cerrados, respuesta simulada suprimida | @IchiSieben | No consta | Commit `e358a9b` del 28/10/2026; integrado el 12/11/2026 | Integrado (PR #70) |
| 3 | Agregar 6 pruebas Playwright de HU-08 (c2, c3, c5, c6, c8, c9) y 8 evidencias PNG | @IchiSieben | No consta | Commit `e358a9b` del 28/10/2026; integrado el 12/11/2026 | Integrado (PR #70) |
| 4 | Ejecutar Vitest y la suite Playwright completa sobre `main` más el PR #102 | No consta | No consta | 26/11/2026 | Completada: 45/45 y 130/130 |
| 5 | Armar este expediente y las capturas antes/después | No consta | No consta | 26/11/2026 | Completada |
| 6 | Decisión del Comité, firmas y cierre administrativo | Comité y Gestor de Cambios | Sin fecha | — | Pendiente |

## B. DOCUMENTOS DEL PROYECTO ACTUALIZADOS (Responsable de Implementación)

| Documento | Versión anterior | Versión nueva | Cambio realizado |
|---|---|---|---|
| `src/screens/chat/ChatThread.tsx` | `0e3e33f`: sin opción de finalizar | `74f23ed` | Botón ⊗ con `aria-label` «Finalizar conversación», diálogo «¿Finalizar la conversación?», aviso de cierre, campo de texto y Enviar deshabilitados |
| `src/services/chat.ts` | `0e3e33f`: sin `closeThread` | `74f23ed` | `closeThread` asigna `closedAt`; `sendMessage` ignora hilos cerrados; no se genera respuesta simulada si el hilo está cerrado |
| `src/types/index.ts` | `0e3e33f`: sin `closedAt` | `74f23ed` | Campo opcional `closedAt?` en `ChatThread` |
| `tests/criterios/HU-08.spec.ts` | `0e3e33f`: sin esos casos | `74f23ed` | 6 pruebas Playwright: c2, c3, c5, c6, c8, c9 |
| `Sprint_03/7.Pruebas/evidencias/HU-08/` | Sin evidencias | `74f23ed` | 8 capturas PNG |
| Product Backlog, cronograma de sprints, Sprint Backlog, ADR | — | — | No se registró actualización por este cambio. No verificado en este expediente. |

Todas las rutas de código van bajo `Codigo_Repositorio/kuyaypet-web/`.

## C. VERIFICACIÓN DE LA IMPLEMENTACIÓN (Gestor de Cambios)

Verificación por ejecución del 26/11/2026: build local de `main` más el PR #102, Chromium, viewport 390×844, `--workers=1`. Resultado de la suite completa: Vitest 45/45; Playwright 130/130 en 5,3 min, 0 fallidas, 0 inestables. Registro de ejecución: registro local (no está en el repositorio).

La verificación la hace el Gestor de Cambios. Lo que sigue es el resultado de la ejecución; la firma del Gestor sigue pendiente.

| Verif. N.º / fecha | Criterio de verificación | Evidencia revisada | Resultado |
|---|---|---|---|
| 1 – 26/11/2026 | V1. Cierre confirmado | Prueba c9 «al finalizar se conserva el historial» (botón, diálogo, aviso). Capturas `despues-1-chat-con-boton-finalizar.png`, `despues-2-dialogo-confirmacion.png`, `despues-3-chat-finalizado-envio-deshabilitado.png`. | Conforme |
| 1 – 26/11/2026 | V2. Historial intacto | Pruebas c8 «historial consultable después», c6 «orden cronológico» y c9 (historial igual tras recargar). Captura `despues-4-historial-reabierto.png` (mismo archivo que `despues-3`). | Conforme |
| 1 – 26/11/2026 | V3. Envío bloqueado | Prueba c9 (campo y Enviar deshabilitados). Capturas `despues-3-chat-finalizado-envio-deshabilitado.png` y, como contraste, `antes-2-envio-siempre-habilitado.png`. | Conforme |
| 1 – 26/11/2026 | V4. Pruebas reproducibles | Vitest 45/45 y Playwright 130/130; HU-08 c2, c3, c5, c6, c8, c9 pasaron; SEG-13, SEG-08, HU-07 c6, HU-09 c2–c6 y «Flujo estrella» pasaron. Registro local de la ejecución. | Conforme |
| 1 – 26/11/2026 | V5. Documentación | Este expediente: FOR-GC-001 a FOR-GC-004, registro de solicitudes, capturas y PDF. | Conforme (ver reserva en observaciones) |
| 1 – 26/11/2026 | V6. Aprobación formal | Decisión del Comité y firmas. | Pendiente de firma |

### Compuerta C4 «¿Conforme?»

| Condición de PRO-GC-001 3.1 | Estado |
|---|---|
| (a) Todos los criterios de verificación «Conforme» | Los criterios V1 a V5 son Conforme por ejecución. V6 es el criterio de aprobación formal y está pendiente de firma. |
| (b) 100 % de las pruebas pasa sin regresiones | Sí: Vitest 45/45 y Playwright 130/130. |
| (c) Sección B completa | Completa para el código. La actualización de backlog, cronograma y ADR no se verificó. |
| (d) Se cumplieron las condiciones del Comité | No se puede confirmar: el Comité no ha decidido ni fijado condiciones. |

Resultado técnico: conforme por ejecución. Conformidad administrativa: pendiente de las firmas del Comité. La solicitud no pasa a «Cerrada» hasta entonces.

### C. OBSERVACIONES DE LA VERIFICACIÓN

| Campo | Valor |
|---|---|
| Observaciones devueltas a implementación | Ninguna sobre el código. Pendientes administrativos: decisión del Comité, firmas, y confirmar si el Product Backlog, cronograma y ADR requieren actualización. |
| Reserva sobre V5 | La documentación de esta SC existe, pero está sin firmas. |
| Nota sobre las capturas | `despues-3` y `despues-4` son el mismo archivo: reabrir el chat finalizado muestra la misma pantalla. |
| Defecto relacionado, fuera de la SC | El chat de ejemplo tenía roles cruzados y la respuesta simulada era genérica. Se corrige en el PR #102 (https://github.com/ClxNode/KuyayPet/pull/102, commit `ea028f8`, abierto, sin integrar; revisor sugerido VALTOm07). No cambia criterios de aceptación, por eso se maneja en el Sprint Backlog y no como SC (PRO-GC-001 1.2). Las pruebas de hoy se corrieron con el PR #102 aplicado. |

## D. HISTORIAL DE LA SOLICITUD (trazabilidad paso a paso)

| Fecha | Actividad del proceso | Ejecutado por | Resultado |
|---|---|---|---|
| 16/10/2026 | Registrar antecedente | GitHub / Issue #8 | HU-08 «Comunicarse con el responsable de la mascota» documentada; c9 por implementar |
| 28/10/2026 | Implementar el cambio | @IchiSieben | Commit `e358a9b` (autoría) en la rama `sprint-3/HU-08-criterios` |
| 12/11/2026 | Registrar solicitud (apertura del PR #70) | @IchiSieben | PR #70 abierto a las 16:17 UTC; «HU-08: tests de criterios y acción «Finalizar conversación»» |
| 12/11/2026 | Revisar código | VALTOm07 | Revisión aprobada a las 16:54 UTC. Es revisión de código, no decisión del Comité. |
| 12/11/2026 | Integrar rama en `main` | VALTOm07 | Merge a las 17:00 UTC (merge commit `74f23ed`; padre anterior `0e3e33f`) |
| 12/11/2026 | Cerrar el Issue #8 | GitHub | Issue #8 cerrado a las 20:11 UTC |
| 19/11/2026 | Desplegar a producción | IchiSieben (v1.0.0, despliegue parcial) | Producción https://firebrick-cod-910257.hostingersite.com/ ; tag v1.0.0 en IchiSieben/kuyaypet |
| 26/11/2026 | Desplegar arreglo relacionado (#102, sin SC) | IchiSieben (v1.0.1, despliegue parcial, 40 archivos verificados por hash) | HU-08 6/6 y smoke 3/3 contra producción; «Finalizar conversación» comprobado |
| 20/11/2026 | Documentar en el procedimiento | PRO-GC-001 v1.0 | SC-2026-003 se documenta con elementos pendientes: sin análisis firmado, decisión ni cierre |
| 26/11/2026 | Verificar implementación (por ejecución) | Registro de ejecución local | Vitest 45/45; Playwright 130/130; evidencia antes/después; expediente armado; PR #102 abierto por el defecto relacionado |
| Pendiente | Decidir sobre el cambio | Comité de Control de Cambios | Pendiente de decisión del Comité |
| Pendiente | Firmas y cierre | Solicitante, Analista y Gestor de Cambios | Pendiente de firma |

## E. CIERRE (Gestor de Cambios)

| Campo | Valor |
|---|---|
| Fecha de cierre | Pendiente: el cierre administrativo requiere la decisión del Comité y las firmas |
| Estado final | Implementada y verificada; pendiente de firmas del Comité |
| Duración total | No calculable: la solicitud no está cerrada. Referencia técnica, que no es duración de la SC: Issue #8 abierto el 16/10/2026 y cerrado el 12/11/2026 (27 días calendario). |
| Ubicación de la evidencia | https://github.com/ClxNode/KuyayPet/pull/70 · https://github.com/ClxNode/KuyayPet/issues/8 · https://github.com/ClxNode/KuyayPet/tree/main/docs/gestion-cambios/SC-2026-003 · registro local de la suite del 26/11/2026 · Video: https://drive.google.com/open?id=18Ntw9svQuHgiRIzolP-RiwCyiPZbBYA4 |
| Lección aprendida (propuesta, sin ratificar) | Registrar la aprobación del cambio antes del merge y enlazar en un mismo expediente el criterio de aceptación, el PR, el resultado de las pruebas y la conformidad. |
| Firma del Gestor de Cambios | Pendiente de firma (Joseph Lombardi) |
| Conformidad del Solicitante | Pendiente de firma (IchiSieben) |
