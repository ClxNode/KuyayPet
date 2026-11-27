| KuyayPet · Gestión de Cambios | ANÁLISIS DE IMPACTO | Código: FOR-GC-002 · Versión: 1.0 · Procedimiento: PRO-GC-001 |
|---|---|---|

| Actividad del proceso | Responsable |
|---|---|
| Evaluar impacto | Analista de Impacto |

Este análisis es un borrador preparado por el Solicitante a partir de la auditoría UX y del análisis de integración del 26/11/2026. No hay Analista de Impacto designado ni firma. Las cifras de horas son estimaciones; no hay horas registradas.

## A. DATOS DEL ANÁLISIS

| Campo | Valor |
|---|---|
| N.º de solicitud | SC-2026-004 |
| Fecha del análisis | 26/11/2026 (borrador documental) |
| Analista(s) de Impacto | Pendiente de designación por el Gestor de Cambios (no el Solicitante) |
| Línea base usada | Producción v1.0.1 con las 26 HU y sus criterios de aceptación; Sprint 3 (23/11–06/12/2026); suite de 130 pruebas Playwright; Lighthouse del 26/11/2026 (móvil 90 · 100 · 100 · 100; escritorio 97 · 100 · 100 · 100). |
| Iteración del análisis | 1.ª, borrador no firmado |

## B. IMPACTO POR DIMENSIÓN (matriz de niveles, PRO-GC-001 sección 3.3)

| Dimensión | Línea base actual | Impacto estimado | Nivel (Bajo / Medio / Alto) |
|---|---|---|---|
| Alcance | 26 HU con criterios de aceptación vigentes. | No agrega ni elimina HU ni cambia criterios. Lo que los cambiaría (UX-26, UX-27 y, si aplica, UX-03) queda fuera y se registra. | Bajo |
| Cronograma | Sprint 3 del 23/11 al 06/12/2026; entrega final 06/12/2026. | Cabe en el Sprint 3 según el Solicitante; ninguna HU cambia de sprint y no se mueve la fecha final. Supuesto: la holgura del Sprint 3 no consta en los documentos revisados; el Analista debe confirmarla. | Bajo |
| Costos | Sin esfuerzo comprometido para este cambio. | Estimación de 18 a 20 h-persona (integración ~6 h, correcciones ~8 a 10 h, verificación y despliegue ~4 h) × S/ 25 = S/ 450 a S/ 500 referencial. Gasto directo S/ 0. Entra en «de 9 a 24 h-persona». | Medio |
| Calidad | Suite de 130 pruebas e2e; accesibilidad 100 en Lighthouse de v1.0.1. | Requiere pruebas automatizadas nuevas y afecta la accesibilidad (contraste, áreas táctiles) y el rendimiento (el paquete crece). No rebaja ningún criterio. | Medio |

## C. RIESGOS DEL CAMBIO

| Riesgo | Probabilidad | Impacto | Respuesta propuesta | Estado al 26/11/2026 |
|---|---|---|---|---|
| Regresiones en las 26 HU por la integración (13 archivos con conflicto). | Media | Alta | Correr la suite completa de 130 pruebas más las nuevas; publicar la vista previa `/v2/` antes de promover. | Pendiente de ejecución. |
| Se pierden selectores de prueba en la integración (por ejemplo «Finalizar conversación», «Quitar foto», `edit-photo`, `data-hu`, `data-tour`). | Media | Alta | Regenerar el inventario de selectores y compararlo antes y después. | Pendiente de ejecución. |
| El rendimiento empeora (el paquete crece). | Media | Media | Medir Lighthouse antes y después; la línea base es móvil 90 y escritorio 97. | Línea base medida; falta la medición posterior. |
| El tiempo no alcanza para la exposición del 27/11/2026. | Alta | Media | Despliegue en dos pasos: primero `/v2/`; la raíz no cambia salvo que todo esté en verde. | Ver estado de despliegue en el README. |
| El equipo no conoce el diseño nuevo y lo mantiene mal. | Media | Baja | Documento de diseño `docs/v05-design.md`. | Pendiente. |
| Se confunde la vista previa o el código listo con una decisión del Comité. | Media | Media | Pedir decisión formal; no considerar aprobado hasta el FOR-GC-003. | Decisión del Comité pendiente. |

## D. ALTERNATIVAS EVALUADAS (incluye «no hacer el cambio»)

| Alternativa | Esfuerzo (h-persona) | Ventajas / desventajas |
|---|---|---|
| A. Integrar v0.5 y corregir severidad 3 y 4 más los de severidad 2 de costo bajo | 18 a 20 (estimación) | Resuelve los 3 de severidad 3 y une las dos líneas de trabajo. Más horas y más riesgo de regresión; necesita pruebas nuevas. |
| B. Solo corregir los 3 de severidad 3 sobre el diseño actual | ~6 (estimación) | Menor esfuerzo y menor riesgo. Deja el rediseño sin integrar y los de severidad 2 sin atender. |
| C. Rediseñar desde cero | Más de 40 (estimación) | Descartada: supera el umbral Alto (24 h) y el riesgo es alto frente al 06/12/2026. |
| D. No hacer el cambio | 0 | Sin esfuerzo ni riesgo. Los 3 problemas de severidad 3 siguen en producción. |

Observación del Solicitante: se propone la alternativa A porque es la única que resuelve los 3 de severidad 3 y deja un solo código base. Es una opinión del Solicitante, no la recomendación del análisis.

## E. CONCLUSIÓN DEL ANÁLISIS

| Campo | Valor |
|---|---|
| Esfuerzo total estimado | 18 a 20 h-persona (estimación; no hay horas registradas) |
| Costo referencial | S/ 450 a S/ 500 referencial; gasto directo S/ 0 |
| Nivel de impacto global (el mayor de B) | ☐ Bajo     ☒ Medio (preliminar)     ☐ Alto |
| Quórum requerido para decidir | Comité completo; mayoría 2 de 3 (PRO-GC-001 3.4). El Solicitante no es miembro del Comité. Plazo: siguiente sesión semanal. Opción: sesión extraordinaria dentro de 24 h si el Gestor considera en riesgo la entrega del sprint (PRO-GC-001 1.6). |
| Decisión del Comité | Pendiente de decisión |
| Recomendación | ☐ Aprobar     ☐ Aprobar con condiciones     ☐ Rechazar. Pendiente: lo firma el Analista designado. |
| Sustento de la recomendación | Pendiente: lo firma el Analista designado. Elementos para el Analista: alcance y cronograma en nivel Bajo; costos y calidad en nivel Medio; el cambio no modifica criterios de aceptación; el beneficio está respaldado por la auditoría (UX-01, UX-02, UX-03). Falta confirmar la holgura del Sprint 3 y ejecutar las pruebas. |
| Firma del Analista de Impacto | Pendiente de firma |
| Fecha | Pendiente de firma |
