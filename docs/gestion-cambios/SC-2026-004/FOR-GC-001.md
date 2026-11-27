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
| N.º de solicitud | SC-2026-004 |
| Fecha de registro | 26/11/2026 |
| Solicitante | IchiSieben (Yoichi Palacios) |
| Rol en el proyecto | Desarrollador – prototipo y despliegue |
| Sprint en curso | Sprint 3 (23/11–06/12/2026, según PRO-GC-001 1.1). Rama `sprint-3/SC-2026-004-mejora-ux`. |
| Prioridad sugerida | Media (sugerida; no oficial) |
| Título del cambio | Mejora de experiencia de usuario: integrar el rediseño v0.5 con la versión 1.0 y corregir los problemas de la auditoría UX |
| Fecha en que se requiere | Antes de la exposición del 27/11/2026, si el Comité alcanza a decidir. Límite: entrega final del 06/12/2026. |

## B. TIPO DE CAMBIO

Tipo: ☐ Alcance     ☐ Cronograma     ☐ Costos     ☒ Calidad (usabilidad, accesibilidad)

Alcance: no se agrega ni se elimina ninguna HU y no cambia ningún criterio de aceptación. Cronograma: cabe en el Sprint 3 y ninguna HU cambia de sprint. Costos: se estiman horas (ver FOR-GC-002); no hay gasto directo.

## C. DESCRIPCIÓN DEL CAMBIO (Solicitante)

| Campo | Valor |
|---|---|
| Situación actual | Producción v1.0.1 (https://firebrick-cod-910257.hostingersite.com/) funciona con las 26 HU. El rediseño visual de la rama `v0.5-ui` (publicado como vista previa en `/next2/` el 16/10/2026: primitivas de diseño, movimiento, contraste AA en 32 rutas, Lighthouse escritorio 100/100/100/100) nunca se integró con el trabajo funcional de los Sprints 1 a 3. Una auditoría de UX con las 10 heurísticas de Nielsen (26/11/2026) halló 30 problemas: 0 de severidad 4, 3 de severidad 3, 18 de severidad 2 y 9 de severidad 1. Los tres de severidad 3 son: UX-01 (contraste 2,61:1 en etiquetas de navegación y texto secundario), UX-02 (el responsable acepta o rechaza un interés con botones de solo icono y sin aviso) y UX-03 (no se puede deshacer un descarte en Descubrir). Lighthouse de producción v1.0.1 (26/11/2026): móvil rendimiento 90 · accesibilidad 100 · buenas prácticas 100 · SEO 100; escritorio 97 · 100 · 100 · 100. |
| Cambio propuesto | 1) Integrar `v0.5-ui` sobre v1.0.1: se conserva toda la lógica, los criterios de aceptación y los selectores de prueba; se adopta el marcado y el estilo de v0.5. 2) Corregir los hallazgos de severidad 3 y 4 y los de severidad 2 de costo bajo (auditoría 4.1 y 4.2). 3) Ningún criterio de aceptación de ninguna HU cambia. Lo que lo exigiría queda fuera y se registra (por ejemplo, UX-26 «Retirar interés» si HU-18 lo define como solo lectura, y UX-27 «saltar preguntas» por HU-20). UX-03 «Deshacer» se aplica solo si la redacción de HU-06 lo permite (por verificar). 4) Publicar primero una vista previa en `/v2/`; la raíz solo se cambia si todas las pruebas pasan. |
| Justificación y beneficio esperado | Corrige problemas de accesibilidad (contraste AA) y de prevención de errores (aceptar o rechazar sin texto ni aviso, descarte irreversible) que hoy están en producción. Une dos líneas de trabajo que divergieron (27 commits de v0.5 frente a 74 de `main` desde el ancestro común `898a9f6`). Beneficia a los tres roles: adoptante, responsable y administrador. |
| Elementos afectados (HU, pantallas, documentos) | Sin HU nuevas ni criterios modificados. Pantallas: shell y navegación, Descubrir, Buscar, perfil de mascota, chat, panel del responsable, editar mascota, Historial, detalle de publicación y de usuario del administrador, toasts. Archivos con conflicto de integración (13; 18 fragmentos): `components/ui/index.tsx`, `shell/AppLayout`, `shell/DeviceFrame`, `shell/PresenterPanel`, `screens/Browse`, `screens/PetProfile`, `screens/chat/ChatThread`, `screens/owner/EditPet`, `screens/History`, `screens/admin/AdminPublicationDetail`, `screens/admin/AdminUserDetail`, `HANDOFF.md`, `ESTADO_CLASE.md`. Documentos: `docs/v05-design.md` (nuevo), pruebas e2e nuevas. |
| Evidencia adjunta | Auditoría UX: [auditoria-ux.md](auditoria-ux.md) (30 hallazgos, con IDs UX-01 a UX-30) · Análisis de integración: `recon-merge-v05.md` (mismo directorio que la auditoría) · Vista previa del rediseño: https://firebrick-cod-910257.hostingersite.com/next2/ · Vista previa de la integración: https://firebrick-cod-910257.hostingersite.com/v2/ (publicada, 134/134) · Rama `sprint-3/SC-2026-004-mejora-ux` · PR [#104](https://github.com/ClxNode/KuyayPet/pull/104) (abierto, sin integrar; depende del #102; revisor sugerido Dylan200-7) · Lighthouse de v1.0.1 del 26/11/2026 (cifras en «Situación actual»). |

## D. REVISIÓN DE COMPLETITUD (Gestor de Cambios)

Los criterios se contrastaron con los documentos del expediente. La revisión formal es del Gestor de Cambios y sigue pendiente.

| Criterio de completitud | Cumple (Sí/No) | Observación |
|---|---|---|
| 1. Las secciones A, B y C están llenas. | Pendiente de revisión del Gestor de Cambios (Joseph Lombardi) | Verificación factual: las tres secciones tienen contenido en todos los campos. |
| 2. El cambio propuesto dice qué se agrega, modifica o elimina (no solo el problema). | Pendiente de revisión del Gestor de Cambios (Joseph Lombardi) | Verificación factual: indica integración, correcciones por ID de hallazgo, exclusiones y despliegue en dos pasos. |
| 3. La justificación indica el beneficio esperado y a quién afecta. | Pendiente de revisión del Gestor de Cambios (Joseph Lombardi) | Verificación factual: nombra la accesibilidad y la prevención de errores, y los tres roles. |
| 4. Se identifican las HU, pantallas o documentos afectados. | Pendiente de revisión del Gestor de Cambios (Joseph Lombardi) | Verificación factual: ninguna HU cambia de criterios; se listan pantallas, 13 archivos y documentos. |
| 5. Se adjunta al menos una evidencia (acta, captura, correo, métrica). | Pendiente de revisión del Gestor de Cambios (Joseph Lombardi) | Verificación factual: auditoría con 137 capturas «antes», métricas Lighthouse y vista previa `/next2/`. |
| 6. No duplica una solicitud abierta en el Registro de solicitudes de cambio. | Pendiente de revisión del Gestor de Cambios (Joseph Lombardi) | No se contrastó con el Registro. Nota: SC-2026-003 (HU-08) está abierta y toca la pantalla del chat, que esta solicitud también modifica (UX-18). Son cambios distintos. |

### D. RESULTADO DE LA REVISIÓN (Gestor de Cambios)

| Campo | Valor |
|---|---|
| Resultado | ☐ Completa: pasa a evaluación de impacto     ☐ Incompleta: se devuelve al Solicitante. Casilla pendiente del Gestor de Cambios. |
| Revisado por | Pendiente de firma (Joseph Lombardi, Gestor de Cambios) |
| Fecha de revisión | Pendiente de firma |
| Analista(s) de Impacto asignado(s) | Pendiente de designación por el Gestor de Cambios (no puede ser el Solicitante) |
| Plazo para el análisis | Pendiente |

## E. CONFORMIDAD

| Firma del Solicitante | Firma del Gestor de Cambios |
|---|---|
| Pendiente de firma (IchiSieben) | Pendiente de firma (Joseph Lombardi) |
