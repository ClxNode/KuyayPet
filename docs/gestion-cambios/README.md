# Gestión de cambios de KuyayPet

## Resumen en simple

- **Cambio 1 — Cerrar una conversación ([SC-2026-003](SC-2026-003/README.md)).** Quien quiere adoptar ahora puede finalizar el chat con el responsable de la mascota: la conversación queda guardada para leerla, pero ya no se pueden enviar mensajes.
- **Cambio 2 — Interfaz más clara ([SC-2026-004](SC-2026-004/README.md)).** Botones con texto para aceptar o rechazar un interés, opción de deshacer un descarte y mensajes de error junto a cada campo, entre otras mejoras.

| Cambio | Pedido | Analizado | Hecho | Comprobado | Decisión del Comité |
|---|---|---|---|---|---|
| 1 · Cerrar una conversación | ✔ | ✔ | ✔ | ✔ | Pendiente |
| 2 · Interfaz más clara | ✔ | ✔ | ✔ | ✔ | Pendiente |

Los dos están en la app publicada. El Cambio 2 se publicó antes de tener la decisión del Comité; se registra como una desviación del procedimiento y se pide regularizarlo. Las firmas de los formatos siguen pendientes.

Presentación para exponerlos: https://firebrick-cod-910257.hostingersite.com/cambios/ (detalle técnico en https://firebrick-cod-910257.hostingersite.com/cambios/detalle/).

Esta carpeta reúne los expedientes de solicitudes de cambio (SC) del proyecto, tramitados según el procedimiento **PRO-GC-001 – Gestión de Cambios del proyecto KuyayPet**.

El PDF `PRO-GC-001_Gestion_de_Cambios_KuyayPet.pdf` (v1.0, 20/11/2026) es el entregable del equipo. Define el flujo de 9 actividades, los roles, la matriz de niveles de impacto, el quórum del Comité y los cuatro formatos. No se copia aquí; esta carpeta aplica sus formatos con los mismos campos y secciones.

## Contenido

| Archivo | Qué es |
|---|---|
| [registro-solicitudes.md](registro-solicitudes.md) | Registro de solicitudes de cambio (PRO-GC-001, 5.1). |
| [SC-2026-003/](SC-2026-003/README.md) | Expediente de «Finalizar conversación en el chat (HU-08)». |
| [SC-2026-004/](SC-2026-004/README.md) | Expediente de «Mejora de experiencia de usuario» (auditoría UX, rediseño v0.5 + v1.0, en producción v1.1.1). |

## Cómo se organiza un expediente

Cada solicitud tiene una carpeta `SC-AAAA-NNN/` con:

| Archivo | Formato | Quién lo llena |
|---|---|---|
| `README.md` | Resumen, antes/después, estado, enlaces y firmas pendientes | Gestor de Cambios |
| `FOR-GC-001.md` | Solicitud de cambio (secciones A–E) | Solicitante y Gestor |
| `FOR-GC-002.md` | Análisis de impacto (secciones A–E) | Analista de Impacto |
| `FOR-GC-003.md` | Registro de la decisión (secciones A–E) | Comité de Control de Cambios y Gestor |
| `FOR-GC-004.md` | Seguimiento y cierre del cambio (secciones A–E) | Responsable de Implementación y Gestor |
| `capturas/` | Evidencia visual | — |
| `expediente-SC-xxxx-nnn.pdf` | Todo lo anterior en un solo PDF | — |

## Regla de este repositorio

Ningún voto, firma, aprobación ni decisión se escribe por otra persona. Mientras no exista el acto real, la celda dice «Pendiente de firma» o «Pendiente de decisión del Comité».

Una aprobación de revisión de código en GitHub (Pull Request) no es una decisión del Comité de Control de Cambios.
