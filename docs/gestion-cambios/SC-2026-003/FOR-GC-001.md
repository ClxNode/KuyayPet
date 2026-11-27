| KuyayPet · Gestión de Cambios | SOLICITUD DE CAMBIO | Código: FOR-GC-001 · Versión: 1.0 · Procedimiento: PRO-GC-001 |
|---|---|---|

| Actividad del proceso | Responsable |
|---|---|
| Registrar solicitud de cambio | Solicitante |
| Revisar completitud de la solicitud | Gestor de Cambios |
| Devolver para completar información | Gestor de Cambios |

## A. DATOS DE LA SOLICITUD (Solicitante)

| Campo | Valor |
|---|---|
| N.º de solicitud | SC-2026-003 |
| Fecha de registro | 12/11/2026 (fecha de apertura del PR #70). Este expediente regulariza el registro el 26/11/2026. |
| Solicitante | @IchiSieben (autor del PR #70) |
| Rol en el proyecto | Proponente técnico en GitHub |
| Sprint en curso | Rama `sprint-3/HU-08-criterios`. PRO-GC-001 1.1 ubica HU-08 en el Sprint 2 (09/11–22/11/2026); el nombre de la rama dice sprint-3. |
| Prioridad sugerida | Media (sugerida; no oficial) |
| Título del cambio | Completar el cierre de conversación y conservar el historial — HU-08 / PR #70 |
| Fecha en que se requiere | Integrado en `main` el 12/11/2026. Puesto en producción en v1.0.0 el 19/11/2026. |

## B. TIPO DE CAMBIO

Tipo: ☒ Alcance     ☐ Cronograma     ☐ Costos     ☒ Calidad

## C. DESCRIPCIÓN DEL CAMBIO (Solicitante)

| Campo | Valor |
|---|---|
| Situación actual | HU-08 «Comunicarse con el responsable de la mascota» contempla consultar el historial tras finalizar el chat (criterio c9), pero antes del cambio no existía un disparador para cerrar una conversación. El envío siempre estaba habilitado. |
| Cambio propuesto | Agregar «Finalizar conversación» con confirmación: botón ⊗ en el encabezado del chat, junto a «Coordinar» (`aria-label` «Finalizar conversación»); diálogo «¿Finalizar la conversación?» con el botón «Finalizar». Al cerrar se conserva el historial, se muestra el aviso «Esta conversación fue finalizada. Puedes consultar el historial, pero ya no enviar mensajes.» y se deshabilitan el campo de texto y Enviar. Se agregan `closeThread` y `closedAt` y 6 pruebas Playwright (c2, c3, c5, c6, c8, c9). Solo el adoptante ve el botón y solo en chats directos; el chat grupal (HU-09) no cambia. |
| Justificación y beneficio esperado | Completa el criterio c9 de HU-08 y da trazabilidad a una conversación terminada. Beneficia al adoptante: puede cerrar la conversación y evita envíos posteriores al cierre. |
| Elementos afectados (HU, pantallas, documentos) | HU-08 / Issue #8. Pantalla de conversación. Archivos bajo `Codigo_Repositorio/kuyaypet-web/`: `src/screens/chat/ChatThread.tsx`, `src/services/chat.ts`, `src/types/index.ts` (`closedAt?` en `ChatThread`), `tests/criterios/HU-08.spec.ts`. Evidencias PNG en `Sprint_03/7.Pruebas/evidencias/HU-08/` (8 archivos). |
| Evidencia adjunta | Issue #8: https://github.com/ClxNode/KuyayPet/issues/8 · PR #70: https://github.com/ClxNode/KuyayPet/pull/70 (commit `e358a9b`, merge `74f23ed`) · Capturas antes/después en [`capturas/`](capturas/) · Video: https://drive.google.com/open?id=18Ntw9svQuHgiRIzolP-RiwCyiPZbBYA4 |

## D. REVISIÓN DE COMPLETITUD (Gestor de Cambios)

Los criterios se contrastaron con GitHub, el código y el Registro de solicitudes. La revisión formal es del Gestor de Cambios y sigue pendiente de su firma.

| Criterio de completitud | Cumple (Sí/No) | Observación |
|---|---|---|
| 1. Las secciones A, B y C están llenas. | Sí | Datos sustentados en Issue #8 y PR #70. |
| 2. El cambio propuesto dice qué se agrega, modifica o elimina (no solo el problema). | Sí | Indica la acción nueva, el aviso, el bloqueo de envío y los archivos tocados. |
| 3. La justificación indica el beneficio esperado y a quién afecta. | Sí | Completa c9; beneficia al adoptante. |
| 4. Se identifican las HU, pantallas o documentos afectados. | Sí | HU-08, pantalla de conversación y 4 archivos de código. |
| 5. Se adjunta al menos una evidencia (acta, captura, correo, métrica). | Sí | Issue #8, PR #70, capturas antes/después y registro de pruebas del 26/11/2026. |
| 6. No duplica una solicitud abierta en el Registro de solicitudes de cambio. | Sí | El [Registro](../registro-solicitudes.md) no tiene otra SC sobre HU-08. |

### D. RESULTADO DE LA REVISIÓN (Gestor de Cambios)

| Campo | Valor |
|---|---|
| Resultado | ☐ Completa: pasa a evaluación de impacto     ☐ Incompleta: se devuelve al Solicitante. Casilla pendiente de firma del Gestor. Los 6 criterios se cumplen según las fuentes. |
| Revisado por | Pendiente de firma (Joseph Lombardi, Gestor de Cambios) |
| Fecha de revisión | Pendiente de firma |
| Analista(s) de Impacto asignado(s) | Pendiente de designación por el Gestor de Cambios (no puede ser el Solicitante) |
| Plazo para el análisis | Pendiente |

## E. CONFORMIDAD

| Firma del Solicitante | Firma del Gestor de Cambios |
|---|---|
| Pendiente de firma (IchiSieben) | Pendiente de firma (Joseph Lombardi) |
