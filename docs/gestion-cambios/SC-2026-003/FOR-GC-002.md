| KuyayPet · Gestión de Cambios | ANÁLISIS DE IMPACTO | Código: FOR-GC-002 · Versión: 1.0 · Procedimiento: PRO-GC-001 |
|---|---|---|

| Actividad del proceso | Responsable |
|---|---|
| Evaluar impacto | Analista de Impacto |

Este análisis es un borrador preparado desde GitHub, el código y las pruebas del 26/11/2026. No hay Analista de Impacto designado ni firma.

## A. DATOS DEL ANÁLISIS

| Campo | Valor |
|---|---|
| N.º de solicitud | SC-2026-003 |
| Fecha del análisis | 26/11/2026 (borrador documental) |
| Analista(s) de Impacto | Pendiente de designación por el Gestor de Cambios (no el Solicitante) |
| Línea base usada | HU-08 e Issue #8; `main` en el commit `0e3e33f`, anterior al PR #70. Los criterios de aceptación de HU-08 son c2, c3, c5, c6, c8 y c9. |
| Iteración del análisis | 1.ª, borrador no firmado |

## B. IMPACTO POR DIMENSIÓN (matriz de niveles, PRO-GC-001 sección 3.3)

| Dimensión | Línea base actual | Impacto estimado | Nivel (Bajo / Medio / Alto) |
|---|---|---|---|
| Alcance | HU-08 define consultar el historial tras finalizar (c9), pero no había forma de finalizar. | Agrega una acción y un estado de cierre a 1 HU existente. No agrega HU ni módulo. Entra en «ajusta criterios de aceptación de 1 HU». | Bajo |
| Cronograma | Plan de sprints; la HU-08 está en el Sprint 2 según PRO-GC-001 1.1. | GitHub no registra HU movidas de sprint ni cambio de fechas de sprint. Merge el 12/11/2026; producción v1.0.0 el 19/11/2026, antes de la entrega final del 06/12/2026. | Bajo |
| Costos | Esfuerzo y gasto no informados en el PR. | Estimación de 8 h-persona × S/ 25 = S/ 200 referencial. No hay horas registradas en GitHub. Gasto directo: no se observó ninguno. Entra en «hasta 8 h-persona y S/ 0». | Bajo |
| Calidad | Pruebas e2e por criterio de HU-08. | Requiere pruebas automatizadas nuevas: 6 Playwright. Ejecutadas el 26/11/2026: Playwright 130/130 y Vitest 45/45. No rebaja ningún criterio de calidad. | Medio |

## C. RIESGOS DEL CAMBIO

| Riesgo | Probabilidad | Impacto | Respuesta propuesta | Estado al 26/11/2026 |
|---|---|---|---|---|
| Se oculta o pierde el historial tras finalizar. | Media | Alta | Probar consulta y persistencia después del cierre. | Cubierto: c8 y c9 pasaron (historial igual tras recargar). |
| Se siguen enviando mensajes a un hilo cerrado. | Media | Media | Validar controles deshabilitados y servicio `closeThread`. | Cubierto: c9 verifica envío deshabilitado; `sendMessage` ignora hilos cerrados. |
| El cambio rompe el chat grupal (HU-09) o expone chats ajenos. | Baja | Media | Correr las pruebas relacionadas. | Cubierto: HU-09 c2–c6, SEG-13 y SEG-08 pasaron. |
| Se confunde el merge con pruebas aprobadas o con decisión del Comité. | Media | Media | Pedir ejecución de pruebas y decisión formal. | Pruebas ejecutadas el 26/11/2026. Decisión del Comité pendiente. |
| El cambio se integró antes de la decisión del Comité. | Ocurrió | Media | Regularizar con este expediente; el Comité decide a posteriori. | Abierto. |

## D. ALTERNATIVAS EVALUADAS (incluye «no hacer el cambio»)

| Alternativa | Esfuerzo (h-persona) | Ventajas / desventajas |
|---|---|---|
| A. Agregar el cierre con confirmación y pruebas (realizado en el PR #70) | 8 (estimación) | Cumple c9, conserva el historial y bloquea el envío. Requiere regresión del chat, ya ejecutada. |
| B. Documentar el cierre sin acción en la interfaz | 2 (estimación) | Menor esfuerzo. No resuelve la falta del disparador y c9 sigue sin poder cumplirse desde la app. |
| C. No hacer el cambio | 0 | Sin esfuerzo. La conversación no puede cerrarse y c9 queda incompleto. |
| D. Revertir el PR #70 si el Comité no lo aprueba | No estimado | Vuelve a la línea base `0e3e33f`. Pierde las 6 pruebas y el criterio c9. |

## E. CONCLUSIÓN DEL ANÁLISIS

| Campo | Valor |
|---|---|
| Esfuerzo total estimado | 8 h-persona (estimación; no hay horas registradas en GitHub) |
| Costo referencial | S/ 200 referencial; gasto directo S/ 0 (no se observó gasto) |
| Nivel de impacto global (el mayor de B) | ☐ Bajo     ☒ Medio (preliminar)     ☐ Alto |
| Quórum requerido para decidir | Comité completo; mayoría 2 de 3 (PRO-GC-001 3.4). El Solicitante no es miembro del Comité. |
| Recomendación | ☐ Aprobar     ☐ Aprobar con condiciones     ☐ Rechazar. Casilla pendiente del Analista de Impacto. |
| Sustento de la recomendación | Elementos para el Analista: el beneficio está respaldado por c9 de HU-08; el cambio cabe en la holgura (nivel Bajo en cronograma y costos); no rebaja calidad; las 6 pruebas y la suite completa pasaron. Lo que falta es la decisión formal del Comité. El PR #70 prueba que el cambio existe, no que fue autorizado. |
| Firma del Analista de Impacto | Pendiente de firma |
| Fecha | Pendiente de firma |
