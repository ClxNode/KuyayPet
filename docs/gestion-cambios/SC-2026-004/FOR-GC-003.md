| KuyayPet · Gestión de Cambios | REGISTRO DE LA DECISIÓN | Código: FOR-GC-003 · Versión: 1.0 · Procedimiento: PRO-GC-001 |
|---|---|---|

| Actividad del proceso | Responsable |
|---|---|
| Decidir sobre el cambio | Comité de Control de Cambios |
| Comunicar decisión | Gestor de Cambios |
| Registrar motivo de rechazo | Gestor de Cambios |

El Comité no ha decidido. Este formato queda con todos los actos pendientes. El cambio ya está en producción como v1.1.0 (ver la desviación en FOR-GC-004 C y D).

## A. DATOS DE LA SESIÓN

| Campo | Valor |
|---|---|
| N.º de solicitud | SC-2026-004 |
| Fecha de la sesión | Pendiente: no hay sesión del Comité registrada |
| Modalidad | Pendiente |
| Nivel de impacto (FOR-GC-002) | Medio (preliminar) |
| Quórum requerido | Comité completo; mayoría 2 de 3 (PRO-GC-001 3.4) |
| Quórum alcanzado | Pendiente |

## B. PARTICIPANTES Y VOTACIÓN (Comité de Control de Cambios)

| Nombre | Rol en el Comité | Voto (A favor / En contra / Abstención) | Firma |
|---|---|---|---|
| Dylan Quispe | Patrocinador | Pendiente de firma | Pendiente de firma |
| Joseph Lombardi | Líder del proyecto (Gestor de Cambios) | Pendiente de firma | Pendiente de firma |
| Juan Huapalla | Docente asesor | Pendiente de firma | Pendiente de firma |
| IchiSieben | Invitado sin voto (Solicitante) | Sin voto | Pendiente de firma (conformidad en FOR-GC-001 E) |

## C. DECISIÓN

| Campo | Valor |
|---|---|
| Decisión | ☐ Aprobado     ☐ Rechazado     ☐ Devuelto para ampliar análisis. **Pendiente de decisión del Comité.** |
| Fundamento de la decisión | Pendiente de decisión del Comité. Nota: el PR de código [#104](https://github.com/ClxNode/KuyayPet/pull/104) del repositorio del grupo está abierto y sin integrar; no hay revisión registrada en este expediente. Una revisión de código no sustituye la decisión del Comité. |
| Evidencia considerada | Material disponible para el Comité: FOR-GC-001 y FOR-GC-002; auditoría UX (30 hallazgos); comparativas antes/después (`capturas/comparativas/`); Vitest 51/51 y Playwright 134/134 en tres contextos (local, vista previa `/v2/` y producción); Lighthouse antes y después (ver FOR-GC-004 C). |
| Condiciones o puntos a ampliar | Pendiente de decisión del Comité. |
| Regularización de la desviación | Pendiente de decisión del Comité. Si aprueba: se cierra la solicitud. Si rechaza: se revierte a v1.0.1 con el procedimiento de FOR-GC-004 C (observaciones). |

## D. ASIGNACIÓN (solo si la decisión es «Aprobado»)

| Campo | Valor |
|---|---|
| Responsable de Implementación | Pendiente de decisión del Comité |
| Sprint destino | Pendiente de decisión del Comité (el cambio ya está en producción; el Sprint 3 es del 23/11 al 06/12/2026) |
| Fecha compromiso | Pendiente de decisión del Comité |
| Criterios de verificación | Propuestos, pendientes de ratificación por el Comité: (V1) los 3 hallazgos de severidad 3 (UX-01, UX-02, UX-03) corregidos; (V2) ningún criterio de aceptación de las HU cambia; (V3) suite de pruebas al 100 % (Vitest y Playwright); (V4) Lighthouse sin empeorar la accesibilidad; (V5) vista previa `/v2/` antes de tocar la raíz; (V6) documentación completa; (V7) aprobación formal. Resultado de cada uno en FOR-GC-004 C. |

## E. COMUNICACIÓN DE LA DECISIÓN (Gestor de Cambios)

| Campo | Valor |
|---|---|
| Fecha de comunicación | Pendiente: no hay decisión que comunicar |
| Medio | Pendiente |
| Destinatarios | Por comunicar: Solicitante, Analista, equipo KuyayPet y Comité |
| Motivo del rechazo (solo si es «Rechazado») | No aplica: no hay decisión |
| Registro actualizado | Registro de solicitudes: SC-2026-004 como «Implementada y en producción; pendiente de decisión del Comité». |
| Firma del Gestor de Cambios | Pendiente de firma (Joseph Lombardi) |
