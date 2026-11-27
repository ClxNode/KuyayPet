# Auditoría de UX del prototipo KuyayPet (SC-2026-004)

Evaluación heurística con los 10 principios de Nielsen sobre la PWA KuyayPet v1.0.1, con apoyo de mediciones automáticas de contraste, áreas táctiles y foco visible.

## 1. Método

| Aspecto | Detalle |
|---|---|
| Fecha | 26 de noviembre de 2026 |
| Build auditado | Producción v1.0.1, servida localmente en `http://localhost:4199/` (HashRouter, cuentas demo Adoptante / Responsable / Admin) |
| Referencia | Rediseño no integrado v0.5 (`https://firebrick-cod-910257.hostingersite.com/next2/`), usado solo para la columna «¿Lo resuelve v0.5?» |
| Viewports | Móvil 390×844 @2x (`isMobile`, `hasTouch`, `serviceWorkers: 'block'`, locale `es-PE`) y escritorio 1440×900 |
| Herramienta | Playwright (Chromium) con el script reutilizable `kuyaypet-tools/sc004_capturas.cjs`. 137 archivos en `capturas/antes/` más `_metricas.json` con los datos crudos. Los mismos nombres se reutilizarán para las imágenes «después» |
| Pantallas | 4 roles (anónimo, adoptante, responsable, admin) × 2 viewports: splash, tour, login (con error), registro (vacío y con errores), recuperar, guía, créditos, onboarding, Descubrir, Buscar (filtros, vacío, mapa), perfil de mascota, Matches, Chats, hilo, Coordinar, Favoritos, Historial, Perfil, Notificaciones, panel del responsable, nueva mascota (con errores), editar, perfil del adoptante, dashboard admin, usuarios, detalle, publicaciones, detalle, reportes, detalle. Estados de feedback: toast tras «Me gusta», tras descartar, tras favorito, tras guardar y tras login fallido |
| Accesibilidad | `axe-core` / `@axe-core/playwright` no están en `node_modules`. Se midió en página: (a) contraste WCAG (fórmula de luminancia relativa, color de texto frente a fondo compuesto por capas; umbral 4,5:1, o 3:1 si el texto es grande); (b) áreas táctiles menores de 44×44 px CSS; (c) foco visible recorriendo con Tab los primeros 10 elementos de cada rol |
| Cobertura de las mediciones | 40 pantallas móviles medidas: 39 tienen al menos un objetivo táctil menor de 44 px (incluye enlaces en línea, que la norma exceptúa) y 34 tienen al menos un texto bajo AA. El contraste solo mira nodos de texto: placeholders e iconos se estiman por el mismo token de color. Los fondos con degradado o imagen quedan aproximados |
| Revisión de v0.5 | Comparación visual de capturas móviles (390 px) y de escritorio de las pantallas principales. Lo que no se vio cambiar se marca «no». La columna puede subestimar mejoras que existan en pantallas no capturadas |
| Código | `src/screens/`, `src/shell/`, `src/services/ui.ts`, `tailwind.config.js` y `index.css` consultados solo para confirmar evidencia (p. ej. los tokens de color y la duración de los toasts) |

**Escala de severidad (Nielsen):** 0 sin problema · 1 cosmético · 2 menor · 3 mayor (prioridad alta) · 4 catastrófico. No se encontró ningún problema de severidad 4: el prototipo funciona y los flujos centrales se completan.

**Mapeo de accesibilidad:** Nielsen no tiene una heurística propia de accesibilidad. Aquí se clasifica bajo H7 (flexibilidad y eficiencia de uso, que incluye adaptarse a usuarios distintos) cuando afecta el uso, y bajo H8 cuando es legibilidad visual.

**Aciertos que conviene conservar:** foco visible global (`:focus-visible` con anillo terracota y separación; los 10 primeros elementos de cada rol muestran anillo); confirmaciones previas en acciones destructivas del admin y en solicitudes de visita; explicación de compatibilidad («¿Por qué hacemos match?»); jerarquía de la guía con buscador; `lang="es-PE"`; `useReducedMotion` en el splash; etiquetas accesibles (`aria-label`) en prácticamente todos los botones de icono.

## 2. Resumen por heurística

| Heurística | Hallazgos | Sev. máx. | IDs |
|---|---|---|---|
| H1 Visibilidad del estado del sistema | 3 | 2 | UX-13, UX-15, UX-27 |
| H2 Coincidencia con el mundo real | 5 | 2 | UX-05, UX-10, UX-14, UX-16, UX-22 |
| H3 Control y libertad del usuario | 2 | 3 | UX-03, UX-26 |
| H4 Consistencia y estándares | 4 | 2 | UX-06, UX-18, UX-23, UX-30 |
| H5 Prevención de errores | 2 | 3 | UX-02, UX-24 |
| H6 Reconocimiento antes que recuerdo | 2 | 2 | UX-11, UX-28 |
| H7 Flexibilidad y eficiencia (incluye accesibilidad) | 6 | 3 | UX-01, UX-17, UX-19, UX-20, UX-24, UX-29 |
| H8 Estética y diseño minimalista | 3 | 2 | UX-04, UX-12, UX-21 |
| H9 Ayudar a reconocer y recuperarse de errores | 3 | 2 | UX-07, UX-08, UX-09 |
| H10 Ayuda y documentación | 0 | 0 | El tour, la guía con buscador y el manual cubren bien la ayuda. No hay hallazgos propios (ver UX-05 por la jerga interna) |

Distribución por severidad: **4 → 0 · 3 → 3 · 2 → 18 · 1 → 9** (30 hallazgos).

## 3. Hallazgos

Convenciones: las imágenes están en `capturas/antes/`. «Móvil» se refiere al archivo `-movil.png` y «escritorio» al `-escritorio.png` con el mismo prefijo. «S/M/L» es el costo estimado (S: horas, M: 1–2 días, L: más de 2 días). Ninguna propuesta cambia criterios de aceptación, salvo donde se marca «fuera de alcance».

---

### UX-01 · Texto secundario y navegación inactiva con contraste insuficiente
- **Pantallas:** todas las del shell (barra inferior), Chats, Notificaciones, perfil de mascota, Perfil, Créditos
- **Captura:** [adoptante-descubrir-movil](capturas/antes/adoptante-descubrir-movil.png), [adoptante-chat-movil](capturas/antes/adoptante-chat-movil.png), [adoptante-notificaciones-movil](capturas/antes/adoptante-notificaciones-movil.png)
- **Heurística:** H7 Flexibilidad y eficiencia de uso (accesibilidad)
- **Severidad:** 3
- **Evidencia:** el token `cocoa-300` (`#B89A8B`) se usa como color de texto sobre blanco o crema. Medido: **2,61:1** en las etiquetas inactivas de la barra inferior (Descubrir, Buscar, Matches, Chats, Guía, Perfil, Avisos; 11 px, fallan en 7 a 10 de las 40 pantallas según la etiqueta), **2,61:1** en las horas y fechas de chat y notificaciones, en «Edad / Sexo / Tamaño» del perfil de mascota y en «Coincide contigo porque:»; **2,48:1** en «La sesión se cierra sola tras 15 min de inactividad». AA exige 4,5:1. Es la navegación principal y está a tamaño 11 px.
- **Propuesta:** no usar `cocoa-300` para texto; subir a `cocoa-500` (`#8A6553`, unos 5,3:1 sobre blanco) las etiquetas inactivas y los textos secundarios, y reservar `cocoa-300` para bordes e iconos decorativos. Subir las etiquetas del nav a 12 px.
- **Costo:** S (cambio de clases y de un token)
- **¿Lo resuelve v0.5?:** parcial (las etiquetas del nav y las horas de chat se ven más oscuras; no se midió el valor exacto)

### UX-02 · Aceptar o rechazar un interés con iconos sin texto, sin confirmación y sin aviso al rechazar
- **Pantallas:** panel del responsable («Interesados en tus mascotas»)
- **Captura:** [responsable-panel-movil](capturas/antes/responsable-panel-movil.png)
- **Heurística:** H5 Prevención de errores
- **Severidad:** 3
- **Evidencia:** el responsable decide con dos botones circulares de 38×38 px («✕» y «✓»), separados unos 12 px, sin etiqueta visible. En `OwnerHome.tsx`, `accept()` crea el Match de inmediato; el rechazo llama a `answerInterest(id, false)` sin confirmación ni toast. Un toque equivocado es irreversible y silencioso (al rechazar la tarjeta simplemente desaparece). Las solicitudes de visita de justo debajo sí usan botones con texto y confirmación, así que el patrón es inconsistente dentro de la misma pantalla.
- **Propuesta:** botones con texto («Rechazar» / «Aceptar y hacer Match») igual que las solicitudes de visita, área táctil mínima de 44 px, y toast con «Deshacer» durante 5 s tras rechazar (o confirmación previa, como las visitas).
- **Costo:** S
- **¿Lo resuelve v0.5?:** no (mismos iconos circulares)

### UX-03 · Descartar o dar «Me gusta» en Descubrir no se puede deshacer
- **Pantallas:** Descubrir, perfil de mascota
- **Captura:** [adoptante-descubrir-toast-descarte-movil](capturas/antes/adoptante-descubrir-toast-descarte-movil.png), [adoptante-descubrir-toast-like-movil](capturas/antes/adoptante-descubrir-toast-like-movil.png)
- **Heurística:** H3 Control y libertad del usuario
- **Severidad:** 3
- **Evidencia:** el toast tras descartar dice «No te mostraremos a X de nuevo» y no ofrece salida. La tarjeta se anima fuera y el botón ✕ (64 px) está pegado al de «Me gusta», de modo que un deslizamiento o toque accidental descarta definitivamente una mascota (`recordSwipe` + `seenPetIds`). El único «reintento» aparece cuando se acaba la baraja («Volver a cargar»). En apps de swipe el «deshacer» es la expectativa estándar.
- **Propuesta:** acción «Deshacer» en el toast durante 5 s y botón secundario de retroceso (icono ↶) en Descubrir. Se resuelve en el front con una operación inversa en el store. Verificar con la redacción de HU-06 que el criterio habla de «no volver a mostrar», no de «inmediato e irreversible».
- **Costo:** M
- **¿Lo resuelve v0.5?:** no

### UX-04 · Splash: el logo ocupa un tercio de la pantalla y la entrada de demostración queda bajo el pliegue
- **Pantallas:** splash
- **Captura:** [anon-splash-movil](capturas/antes/anon-splash-movil.png), [anon-splash-fin-movil](capturas/antes/anon-splash-fin-movil.png)
- **Heurística:** H8 Estética y diseño minimalista
- **Severidad:** 2
- **Evidencia:** a 390×844 el logo (288 px de ancho) más las tres líneas de eslogan ocupan unos 270 px CSS. El bloque «Probar la demo como…» (la entrada más útil para quien evalúa) aparece cortado y hay que desplazarse para ver los tres roles. Hay ocho acciones en una pantalla: Crear cuenta, Iniciar sesión, Tour, tres roles, Guía, Manual y Créditos.
- **Propuesta:** reducir el logo a unos 160 px y quitar una de las líneas de eslogan; así los tres roles caben sin desplazar. Mover Guía, Manual y Créditos a un pie compacto de una sola línea.
- **Costo:** S
- **¿Lo resuelve v0.5?:** sí (en `splash-m` los tres roles se ven completos sin desplazar)

### UX-05 · Jerga interna visible para el usuario: códigos «HU-xx» y «Tinder para adoptar»
- **Pantallas:** tour guiado, panel presentador (escritorio)
- **Captura:** [anon-tour-inicio-movil](capturas/antes/anon-tour-inicio-movil.png), [adoptante-descubrir-escritorio](capturas/antes/adoptante-descubrir-escritorio.png)
- **Heurística:** H2 Coincidencia entre el sistema y el mundo real
- **Severidad:** 2
- **Evidencia:** el primer paso del tour (que el splash promociona como «¿Primera vez?») muestra la insignia «HU-01» y el texto «Aquí se crea la cuenta (HU-01)…». El mismo tour compara el producto con «Tinder para adoptar». En escritorio el panel lateral lista «HU-01 … HU-07» y «Fase 1 en curso». Son términos de gestión del proyecto, no de adopción.
- **Propuesta:** ocultar la insignia HU-xx del tour para el usuario final (dejarla solo con `?presentador`) y reformular el copy sin marca ajena. El panel lateral queda para modo presentador.
- **Costo:** S
- **¿Lo resuelve v0.5?:** no (el panel de historias sigue en `admin-dash-d`)

### UX-06 · Tres eslóganes distintos compiten en la primera pantalla
- **Pantallas:** splash (móvil y escritorio)
- **Captura:** [anon-splash-movil](capturas/antes/anon-splash-movil.png), [adoptante-descubrir-escritorio](capturas/antes/adoptante-descubrir-escritorio.png)
- **Heurística:** H4 Consistencia y estándares
- **Severidad:** 1
- **Evidencia:** «Conecta · Comparte · Socializa» (imagen del logo), «Plataforma de conexión y adopción de mascotas», «Conecta corazones, cambia vidas» y, en el marco de escritorio, «Adopta · Conecta · Transforma ♥». «Conecta» se repite en tres. El lector no sabe cuál es el mensaje.
- **Propuesta:** dejar un solo eslogan (el manuscrito grande) y una sola descripción; unificar el del marco de escritorio.
- **Costo:** S
- **¿Lo resuelve v0.5?:** no

### UX-07 · Registro: un error genérico y todos los campos en rojo
- **Pantallas:** registro, login
- **Captura:** [anon-registro-errores-movil](capturas/antes/anon-registro-errores-movil.png), [anon-login-error-toast-movil](capturas/antes/anon-login-error-toast-movil.png)
- **Heurística:** H9 Ayudar a reconocer, diagnosticar y recuperarse de errores
- **Severidad:** 2
- **Evidencia:** al pulsar «Registrarse» con el formulario vacío, los cuatro campos se marcan en rojo y aparece un único bloque «Todos los campos son obligatorios.» debajo del último campo. No hay mensaje por campo (formato de correo, mínimo 8 caracteres, coincidencia de contraseñas) y los campos no explican su regla antes de fallar (solo el placeholder «Mínimo 8 caracteres»). En el login, ambos campos quedan rojos aunque solo uno sea el problema. El texto de error mide 4,0:1.
- **Propuesta:** mensaje bajo cada campo con `aria-describedby`, foco automático en el primer campo inválido, y validación al salir del campo. Mantener el aviso general solo como resumen.
- **Costo:** S
- **¿Lo resuelve v0.5?:** no (mismo bloque único)

### UX-08 · «Registrar mascota»: errores sin texto por campo y resumen fuera de la vista
- **Pantallas:** nueva mascota (responsable)
- **Captura:** [responsable-nueva-errores-movil](capturas/antes/responsable-nueva-errores-movil.png)
- **Heurística:** H9 Ayudar a reconocer y recuperarse de errores
- **Severidad:** 2
- **Evidencia:** al pulsar «Continuar» sin datos, los campos Nombre, Raza y Distrito tienen un anillo rojo, pero ninguno dice qué falta. El resumen («Completa los campos obligatorios: Nombre, Raza, Distrito.») queda al pie del paso, y el toast de error desaparece a los 3,8 s. Además, Perro, Macho, Mediano y «6 meses» llegan preseleccionados, de modo que una publicación puede enviarse con datos que el responsable nunca eligió.
- **Propuesta:** texto bajo cada campo inválido y scroll al primero; no preseleccionar sexo, tamaño y edad (o marcarlos «sin elegir»), manteniendo `Continuar` habilitado para no cambiar el flujo.
- **Costo:** M
- **¿Lo resuelve v0.5?:** no

### UX-09 · Mensajes de error y avisos que desaparecen a los 3,8 s
- **Pantallas:** todas las que usan toast
- **Captura:** [anon-login-error-toast-movil](capturas/antes/anon-login-error-toast-movil.png)
- **Heurística:** H9 Ayudar a reconocer y recuperarse de errores
- **Severidad:** 2
- **Evidencia:** `services/ui.ts` descarta cada toast con `setTimeout(…, 3800)` sin pausar al enfocar o pasar el cursor. El toast «Faltan datos obligatorios» lista campos, y un lector de pantalla o una persona lenta no llega a leerlo. Solo se muestran los últimos 3.
- **Propuesta:** los toasts de error (`tone: 'error'`) quedan hasta que se cierren o hasta 8 s, con botón de cierre, y todos se pausan con hover/foco.
- **Costo:** S
- **¿Lo resuelve v0.5?:** no

### UX-10 · Edades solo en meses en filtros y formularios
- **Pantallas:** filtros de Buscar, nueva mascota, editar
- **Captura:** [adoptante-buscar-filtros-movil](capturas/antes/adoptante-buscar-filtros-movil.png), [responsable-nueva-errores-movil](capturas/antes/responsable-nueva-errores-movil.png), [responsable-editar-movil](capturas/antes/responsable-editar-movil.png)
- **Heurística:** H2 Coincidencia entre el sistema y el mundo real
- **Severidad:** 2
- **Evidencia:** el filtro dice «Edad (en meses)» con «Mín. / Máx.»; el formulario pide «Edad en meses *» y en edición muestra «67». En las tarjetas, en cambio, la edad se lee «5 años» o «3 meses». Quien busca un perro de «hasta 5 años» tiene que escribir 60.
- **Propuesta:** campo de edad con selector de unidad (años / meses) que convierte a meses internamente. Datos y criterios no cambian.
- **Costo:** S
- **¿Lo resuelve v0.5?:** no

### UX-11 · Buscar: el botón «Filtros (1)» se parte en dos líneas y los filtros activos no se ven
- **Pantallas:** Buscar
- **Captura:** [adoptante-buscar-vacio-movil](capturas/antes/adoptante-buscar-vacio-movil.png), [adoptante-mapa-movil](capturas/antes/adoptante-mapa-movil.png)
- **Heurística:** H6 Reconocimiento antes que recuerdo
- **Severidad:** 2
- **Evidencia:** con un filtro activo, el botón se convierte en «Filtros / (1)» en dos líneas dentro de un ancho de 95 px, y el título «Mascotas disponibles» lo empuja. No se ve qué filtro está aplicado (hay que reabrir la hoja). Lo mismo ocurre en «Limpiar ubicación», que también se parte.
- **Propuesta:** `whitespace-nowrap` en ambos botones y una fila de chips con los filtros activos («Edad mín. 300», «Perro») cada uno con su «×».
- **Costo:** S
- **¿Lo resuelve v0.5?:** parcial (el botón se movió bajo la tarjeta y entra en una línea; sigue sin mostrar los filtros aplicados)

### UX-12 · Buscar: el estado vacío no ofrece salida y repite un mensaje irrelevante
- **Pantallas:** Buscar (sin resultados)
- **Captura:** [adoptante-buscar-vacio-movil](capturas/antes/adoptante-buscar-vacio-movil.png)
- **Heurística:** H8 Estética y diseño minimalista
- **Severidad:** 2
- **Evidencia:** el texto principal dice «Prueba con otros filtros», pero no hay botón «Limpiar filtros» (existe solo dentro de la hoja). El segundo párrafo, «Vuelve pronto: los albergues publican nuevas mascotas cada semana», no corresponde a un filtro demasiado estricto. El icono ocupa unos 60 px sobre fondo vacío y la tarjeta de «Buscar por cercanía» sigue ocupando la mitad superior.
- **Propuesta:** acción «Quitar filtros» en el estado vacío y texto distinto según haya filtros o no (`activeCount > 0`).
- **Costo:** S
- **¿Lo resuelve v0.5?:** no

### UX-13 · Buscar: la tarjeta de búsqueda por cercanía empuja la lista bajo el pliegue
- **Pantallas:** Buscar (móvil y escritorio)
- **Captura:** [adoptante-buscar-movil](capturas/antes/adoptante-buscar-movil.png), [adoptante-buscar-escritorio](capturas/antes/adoptante-buscar-escritorio.png)
- **Heurística:** H1 Visibilidad del estado del sistema
- **Severidad:** 2
- **Evidencia:** en 390×844 la primera mascota asoma tras 490 px de cabecera, título y tarjeta de cercanía (unos 58 % de la pantalla). No hay contador de resultados («34 mascotas»), así que no se sabe cuántas hay. En escritorio la tarjeta se estira a 1070 px con el control deslizante y el botón «Buscar» a todo el ancho.
- **Propuesta:** tarjeta plegable (cerrada por defecto, abierta si hay ubicación), contador de resultados junto a «Filtros» y ancho máximo en escritorio.
- **Costo:** S
- **¿Lo resuelve v0.5?:** parcial (agrega «34 mascotas» y reubica Filtros; la tarjeta sigue abierta y ocupando el mismo espacio)

### UX-14 · Perfil de mascota: cuatro botones fijos de peso similar en la barra inferior
- **Pantallas:** perfil de mascota
- **Captura:** [adoptante-mascota-movil](capturas/antes/adoptante-mascota-movil.png), [adoptante-mascota-escritorio](capturas/antes/adoptante-mascota-escritorio.png)
- **Heurística:** H2 Coincidencia entre el sistema y el mundo real
- **Severidad:** 2
- **Evidencia:** la barra fija inferior apila «No me gusta», «Me gusta», «Contactar» y «Coordinar» en dos filas de 48 px (unos 110 px, el 13 % de 844 y siempre superpuestos al contenido). Son cuatro acciones con peso casi igual, y «Contactar» y «Coordinar» son pasos más avanzados que «Me gusta». Debajo queda poco espacio para leer la explicación de compatibilidad.
- **Propuesta:** una sola fila: «Me gusta» como principal, «Contactar» como secundaria y «Coordinar» detrás de «Contactar» o de un menú «Más». «No me gusta» como icono.
- **Costo:** M
- **¿Lo resuelve v0.5?:** parcial (colores más oscuros; mantiene las cuatro acciones apiladas)

### UX-15 · Los toasts tapan los controles superiores justo cuando el usuario los necesita
- **Pantallas:** perfil de mascota, Descubrir, editar mascota
- **Captura:** [adoptante-mascota-toast-favorito-movil](capturas/antes/adoptante-mascota-toast-favorito-movil.png), [responsable-editar-toast-guardado-movil](capturas/antes/responsable-editar-toast-guardado-movil.png), [adoptante-descubrir-toast-like-movil](capturas/antes/adoptante-descubrir-toast-like-movil.png)
- **Heurística:** H1 Visibilidad del estado del sistema
- **Severidad:** 2
- **Evidencia:** el contenedor de toasts está fijo en `top-3` a todo el ancho. En el perfil de mascota cubre los botones «Volver», «Reportar» y «Favorito» y hasta el estado del corazón recién pulsado; al guardar la edición de una mascota la app navega al perfil y el toast «Cambios guardados con éxito» queda encima de la foto. En Descubrir el toast de «Te gusta Rufo» de tres líneas cubre el título «Descubre».
- **Propuesta:** mostrar los toasts en la parte inferior sobre la barra de navegación (zona de pulgar), con ancho máximo y sin cubrir los controles superiores.
- **Costo:** S
- **¿Lo resuelve v0.5?:** no (el toast de bienvenida sigue en la parte superior, véase `descubrir-m` de v0.5)

### UX-16 · Notificaciones genéricas: no dicen qué mascota ni quién
- **Pantallas:** notificaciones (adoptante, responsable, admin)
- **Captura:** [adoptante-notificaciones-movil](capturas/antes/adoptante-notificaciones-movil.png)
- **Heurística:** H2 Coincidencia entre el sistema y el mundo real
- **Severidad:** 2
- **Evidencia:** «Hiciste match con una mascota. ¡Escríbele!» y «Tienes un mensaje sin leer en tus chats» no nombran a la mascota ni a la persona. El avatar es una «K» para todos los tipos. «¡Escríbele!» sin saber a quién obliga a abrir Chats a ciegas.
- **Propuesta:** título con el nombre («¡Match con Otto!»), foto de la mascota como avatar y enlace directo al chat correspondiente. Es copy y datos que ya existen en el store.
- **Costo:** S
- **¿Lo resuelve v0.5?:** no (mismo texto)

### UX-17 · Objetivos táctiles menores de 44 px en acciones frecuentes
- **Pantallas:** Buscar, Favoritos, perfil de mascota, editar, login, filtros, admin
- **Captura:** [adoptante-buscar-movil](capturas/antes/adoptante-buscar-movil.png), [responsable-editar-movil](capturas/antes/responsable-editar-movil.png), [admin-dashboard-movil](capturas/antes/admin-dashboard-movil.png)
- **Heurística:** H7 Flexibilidad y eficiencia de uso (accesibilidad)
- **Severidad:** 2
- **Evidencia (móvil, valores medidos):** corazón de favorito 34×34 (tarjetas de Buscar, Favoritos, perfil); «Volver» 85×32; campana 40×40 (presente en toda pantalla con cabecera); «Rechazar/Aceptar» del responsable 38×38; chips de filtro de especie, sexo y tamaño 30 px de alto; pestañas del admin (Resumen, Usuarios, Publicaciones, Reportes) 32 px de alto; «Mostrar contraseña» 34×20; «Quitar foto» 22×22 (por debajo incluso del mínimo AA de 24 px); puntos del carrusel 8×8 y «Zoom» del mapa 30×30; «Finalizar conversación» 36×36. Los enlaces en línea («¿Olvidaste tu contraseña?», 19 px) cuentan como excepción pero conviene separarlos.
- **Propuesta:** clase utilitaria `touch-target` con `min-h-11 min-w-11` (padding o `::after` expandido) para botones de icono y chips; los puntos del carrusel se pueden dejar visualmente pequeños con zona táctil ampliada.
- **Costo:** M
- **¿Lo resuelve v0.5?:** no (los controles se ven del mismo tamaño)

### UX-18 · Chat: «Finalizar conversación» es un icono ambiguo y faltan separadores de fecha
- **Pantallas:** hilo de chat
- **Captura:** [adoptante-chat-movil](capturas/antes/adoptante-chat-movil.png)
- **Heurística:** H4 Consistencia y estándares
- **Severidad:** 2
- **Evidencia:** junto a «Coordinar» hay un icono de «X» en círculo sin texto (el `aria-label` «Finalizar conversación» solo lo lee un lector de pantalla). Una «X» en esa posición se lee como «cerrar la pantalla», cuando en realidad cierra la conversación para ambos. Los mensajes se ordenan sin separadores por día (solo «17 set., 12:00 p. m.» repetido en cada burbuja) y las horas miden 2,61:1.
- **Propuesta:** icono con texto breve («Finalizar») o dentro de un menú «⋮»; separadores de día «Jueves, 17 de setiembre» y una sola hora por burbuja.
- **Costo:** S
- **¿Lo resuelve v0.5?:** parcial (agrega separadores de día y horas más oscuras; esa versión no tiene todavía el botón «Finalizar»)

### UX-19 · Colores de estado sin contraste suficiente (blanco sobre coral y sobre verde)
- **Pantallas:** insignias de conteo, botones «Aprobar», «Marcar como adoptada», errores, asteriscos de obligatorio
- **Captura:** [admin-dashboard-movil](capturas/antes/admin-dashboard-movil.png), [anon-registro-errores-movil](capturas/antes/anon-registro-errores-movil.png), [responsable-panel-movil](capturas/antes/responsable-panel-movil.png)
- **Heurística:** H7 Flexibilidad y eficiencia de uso (accesibilidad)
- **Severidad:** 2
- **Evidencia:** blanco sobre coral `#E4555F` = **3,64:1** (conteos «2» de la campana y de «Chats», 11–12 px); asterisco «*» coral sobre crema = **3,46:1**; blanco sobre sage `#4F8A65` = **4,07:1** en «Aprobar» y «Marcar como adoptada» (14 px en negrita, que no cuenta como texto grande); rojo del mensaje de error sobre rosa = **4,0:1**; rótulo «mascota» en la insignia de reportes = 4,0:1.
- **Propuesta:** usar `coral-600` (`#C9404A`, ≈ 4,9:1 con blanco) y `sage-600` (`#3F7353`, ≈ 5,6:1) para fondos con texto blanco, y un coral más oscuro para texto de error y asteriscos.
- **Costo:** S
- **¿Lo resuelve v0.5?:** parcial («Me gusta» y «Coordinar» usan tonos más oscuros; las insignias de conteo siguen en coral claro)

### UX-20 · Placeholders con contraste bajo que sustituyen la ayuda
- **Pantallas:** login, registro, recuperar, coordinar, buscar en la guía
- **Captura:** [anon-login-movil](capturas/antes/anon-login-movil.png), [adoptante-coordinar-movil](capturas/antes/adoptante-coordinar-movil.png), [adoptante-guia-movil](capturas/antes/adoptante-guia-movil.png)
- **Heurística:** H7 Flexibilidad y eficiencia de uso (accesibilidad)
- **Severidad:** 1
- **Evidencia:** `.input` usa `placeholder:text-cocoa-300` (≈ 2,6:1). La regla del formato de la contraseña («Mínimo 8 caracteres») y el ejemplo de lugar («Ej. Parque Kennedy…») viven solo en el placeholder y desaparecen al escribir. En la guía el placeholder se corta: «Buscar (ej. vacunas, contrato, seguimient…».
- **Propuesta:** placeholder en `cocoa-400`/`cocoa-500`, y reglas del campo en texto de ayuda bajo la etiqueta. Acortar el placeholder de la guía.
- **Costo:** S
- **¿Lo resuelve v0.5?:** no

### UX-21 · Admin: la cabecera «Panel de administración» y las pestañas consumen un quinto de la pantalla y la última queda cortada
- **Pantallas:** dashboard, usuarios, publicaciones, reportes y sus detalles (móvil)
- **Captura:** [admin-dashboard-movil](capturas/antes/admin-dashboard-movil.png), [admin-usuario-movil](capturas/antes/admin-usuario-movil.png), [admin-reporte-movil](capturas/antes/admin-reporte-movil.png)
- **Heurística:** H8 Estética y diseño minimalista
- **Severidad:** 2
- **Evidencia:** en cada detalle persisten el logo, la insignia «Administrador», la campana, el título «Panel de administración», el subtítulo y las pestañas: unos 190 px de 844 (22 %) antes del contenido, en una pantalla donde el título repetido ya no informa. La pestaña «Reportes» queda cortada («Reporte») sin indicio de que hay desplazamiento horizontal. Las pestañas miden 32 px de alto.
- **Propuesta:** pestañas con indicador de desborde o en 2×2, y cabecera compacta (solo título) en las páginas de detalle, ya que la flecha «Volver» ya orienta.
- **Costo:** S
- **¿Lo resuelve v0.5?:** sí (las cuatro pestañas caben y muestran contadores 2 y 4)

### UX-22 · Admin, detalle de publicación: «Aprobar / Rechazar» al final de un formulario largo
- **Pantallas:** detalle de publicación pendiente
- **Captura:** [admin-publicacion-movil](capturas/antes/admin-publicacion-movil.png), [admin-publicacion-fin-movil](capturas/antes/admin-publicacion-fin-movil.png)
- **Heurística:** H2 Coincidencia entre el sistema y el mundo real
- **Severidad:** 2
- **Evidencia:** la tarea del moderador es decidir; sin embargo, «Aprobar» y «Rechazar» están debajo de «Datos de la mascota» y de un formulario «Editar publicación» de seis campos, tras unos cinco desplazamientos. El estado «Pendiente» y la decisión quedan separados por el formulario de edición.
- **Propuesta:** barra fija inferior con «Rechazar / Aprobar» (o mover los botones sobre el formulario) y plegar «Editar publicación».
- **Costo:** S
- **¿Lo resuelve v0.5?:** sí (barra fija «Rechazar / Aprobar» sobre la barra de navegación, y foto grande con la insignia «Pendiente»)

### UX-23 · Admin, reporte: dos botones destructivos con el mismo peso
- **Pantallas:** detalle de reporte
- **Captura:** [admin-reporte-movil](capturas/antes/admin-reporte-movil.png)
- **Heurística:** H4 Consistencia y estándares
- **Severidad:** 1
- **Evidencia:** «Ocultar publicación» y «Desactivar cuenta de Rosa Quispe» son botones rojos llenos idénticos; el segundo es mucho más grave. Ambos piden confirmación (correcto), pero el diseño no gradúa la gravedad. «Mascota» aparece en minúscula en la insignia («mascota») y el enlace dice «Ver mascota reportado» (concordancia).
- **Propuesta:** acción moderada en relleno y la grave en contorno rojo; corregir «reportada» y capitalizar la insignia.
- **Costo:** S
- **¿Lo resuelve v0.5?:** sí (primario relleno, el segundo en contorno; insignia «Mascota» capitalizada)

### UX-24 · Escritorio: casi todo vive dentro de un marco de teléfono de 390 px, incluida la administración
- **Pantallas:** todas las rutas salvo Buscar y perfil de mascota
- **Captura:** [admin-dashboard-escritorio](capturas/antes/admin-dashboard-escritorio.png), [adoptante-descubrir-escritorio](capturas/antes/adoptante-descubrir-escritorio.png), [adoptante-buscar-escritorio](capturas/antes/adoptante-buscar-escritorio.png), [adoptante-mascota-escritorio](capturas/antes/adoptante-mascota-escritorio.png)
- **Heurística:** H7 Flexibilidad y eficiencia de uso
- **Severidad:** 2
- **Evidencia:** en 1440×900 Descubrir, Chats, Coordinar y todo el panel de admin aparecen en un marco de teléfono con un panel de presentador al lado (QR, «Match garantizado en la próxima carta»). Una tabla de usuarios o publicaciones en 390 px no aprovecha una pantalla de moderación. Solo Buscar y el perfil de mascota usan el ancho completo, y en ellos la tarjeta de búsqueda se estira a 1070 px y el perfil deja una zona vacía bajo la foto. La barra inferior queda centrada, lejos de la cabecera.
- **Propuesta:** definir un modo «sin marco» para `/admin/*` y los listados de responsable con rejilla de dos columnas y barra lateral; mantener el marco solo en modo presentador (`?presentador`). Ancho máximo de contenido en los demás.
- **Costo:** L
- **¿Lo resuelve v0.5?:** no (el marco y el panel presentador se mantienen)

### UX-25 · Botón de Apple sin función y datos de cuentas demo siempre visibles en el login
- **Pantallas:** login, registro
- **Captura:** [anon-login-movil](capturas/antes/anon-login-movil.png)
- **Heurística:** H5 Prevención de errores
- **Severidad:** 1
- **Evidencia:** «Apple» tiene el mismo peso visual que «Google» pero solo muestra un toast «Apple llegará en la Fase 2». Es un callejón sin salida. El recuadro «Cuentas demo (contraseña kuyay2026)» expone credenciales en la pantalla de acceso de producción.
- **Propuesta:** ocultar el botón o deshabilitarlo con la etiqueta «Próximamente»; mostrar las cuentas demo solo con el parámetro de presentador o dentro del tour.
- **Costo:** S
- **¿Lo resuelve v0.5?:** no

### UX-26 · Favoritos e Historial: no distinguen mascotas ya adoptadas ni permiten corregir
- **Pantallas:** Favoritos, Historial
- **Captura:** [adoptante-favoritos-movil](capturas/antes/adoptante-favoritos-movil.png), [adoptante-historial-movil](capturas/antes/adoptante-historial-movil.png)
- **Heurística:** H3 Control y libertad del usuario
- **Severidad:** 1
- **Evidencia:** Rocky aparece con la cinta «Adoptada» pero con la misma tarjeta, el mismo corazón y el mismo enlace que los demás; no hay cómo ver de un vistazo cuáles siguen disponibles. El Historial de interés es solo lectura: no hay «Retirar mi interés», y «Ver perfil →» es un enlace de 19 px de alto.
- **Propuesta:** atenuar y mover al final las adoptadas; sección «Ya no disponibles». Agregar «Retirar interés» solo si HU-18 lo permite (**fuera de alcance: cambia criterio de HU-18** si el criterio lo define como solo lectura).
- **Costo:** S
- **¿Lo resuelve v0.5?:** parcial (v0.5 añade insignias de estado en Historial)

### UX-27 · Onboarding de 8 preguntas obligatorias sin indicación de tiempo ni resumen
- **Pantallas:** onboarding
- **Captura:** [adoptante-onboarding-movil](capturas/antes/adoptante-onboarding-movil.png), [adoptante-onboarding-paso2-movil](capturas/antes/adoptante-onboarding-paso2-movil.png)
- **Heurística:** H1 Visibilidad del estado del sistema
- **Severidad:** 1
- **Evidencia:** la barra de progreso y «Pregunta 1 de 8» son buenos, y la flecha de retroceso existe. Pero no se dice cuánto falta («~1 minuto») ni que se puede editar luego; el primer paso deja la mitad de la pantalla vacía y «Continuar» está al fondo. No hay pantalla final de resumen antes de calcular compatibilidades.
- **Propuesta:** subtítulo «Unos 8 pasos, puedes cambiarlo después en Perfil» y resumen final con «Editar» por respuesta. Saltar preguntas o dejarlo para después **sería fuera de alcance: cambia criterio de HU-20** (compatibilidad).
- **Costo:** S
- **¿Lo resuelve v0.5?:** no

### UX-28 · Matches: dos selectores sin etiqueta visible
- **Pantallas:** Matches
- **Captura:** [adoptante-matches-movil](capturas/antes/adoptante-matches-movil.png)
- **Heurística:** H6 Reconocimiento antes que recuerdo
- **Severidad:** 1
- **Evidencia:** los desplegables muestran «Mayor compatibilidad» y «Todas» sin rótulo; solo tienen `aria-label` «Ordenar por» y «Especie». «Todas» no dice de qué. Las siluetas circulares de «Interés mutuo» (Otto, Capitán) no dejan claro que son un atajo al chat.
- **Propuesta:** etiquetas visibles («Ordenar por», «Especie») sobre cada selector y una nota «Toca para abrir el chat» bajo los avatares.
- **Costo:** S
- **¿Lo resuelve v0.5?:** no

### UX-29 · Barra inferior: etiqueta «Mis mascotas» en dos líneas y seis pestañas para el adoptante
- **Pantallas:** shell del responsable y del adoptante
- **Captura:** [responsable-panel-movil](capturas/antes/responsable-panel-movil.png), [adoptante-perfil-movil](capturas/antes/adoptante-perfil-movil.png)
- **Heurística:** H7 Flexibilidad y eficiencia de uso
- **Severidad:** 1
- **Evidencia:** en el responsable, «Mis mascotas» se parte en dos líneas y desalinea el resto de las pestañas (ancho fijo `w-14`). El adoptante tiene seis pestañas de 14 px de ancho cada una, con «Guía» duplicada en Perfil → «Guía de adopción». Las pestañas inactivas tienen el problema de contraste de UX-01.
- **Propuesta:** renombrar a «Mascotas», o dejar ancho flexible y 11 px sin partir; evaluar quitar «Guía» de la barra del adoptante y dejarla en Perfil (no cambia HU-14: la ruta se conserva).
- **Costo:** S
- **¿Lo resuelve v0.5?:** sí (etiquetas en una sola línea en `resp-panel-m`)

### UX-30 · Recuperar contraseña: el texto promete un código y el botón envía un enlace
- **Pantallas:** recuperar contraseña
- **Captura:** [anon-recuperar-movil](capturas/antes/anon-recuperar-movil.png)
- **Heurística:** H4 Consistencia y estándares
- **Severidad:** 1
- **Evidencia:** el subtítulo dice «Te enviaremos un código para restablecerla», el botón «Enviar enlace de recuperación» y el toast «Enlace de recuperación enviado». Hay tres formulaciones para el mismo paso. Además la pantalla deja el 55 % inferior vacío, sin indicar qué ocurre después.
- **Propuesta:** unificar a «enlace» (o «código») en el texto, el botón y el toast, y añadir una línea «Revisa tu correo y la carpeta de spam».
- **Costo:** S
- **¿Lo resuelve v0.5?:** no

---

## 4. Lista priorizada

### 4.1 Severidad 4 y 3 (corregir sí o sí)
No hay hallazgos de severidad 4.

| ID | Problema | Costo |
|---|---|---|
| UX-01 | Contraste 2,61:1 en nav inferior y textos secundarios (11–12 px) | S |
| UX-02 | Aceptar/rechazar interés con iconos, sin confirmación ni aviso al rechazar | S |
| UX-03 | Descubrir: descarte y «Me gusta» sin «Deshacer» | M |

### 4.2 Severidad 2 y costo S (ganancias rápidas)
UX-04 (splash), UX-05 (jerga HU), UX-07 (errores de registro), UX-09 (toasts de error), UX-10 (edad en años/meses), UX-11 (chip de filtros), UX-12 (estado vacío de Buscar), UX-13 (tarjeta de cercanía), UX-15 (posición de los toasts), UX-16 (notificaciones), UX-18 (Finalizar y fechas del chat), UX-19 (colores de estado), UX-21 (cabecera admin), UX-22 (barra fija Aprobar/Rechazar).

### 4.3 Severidad 2 con costo M o L (planificar)
- UX-08 · errores de «Registrar mascota» y valores por defecto (M)
- UX-14 · barra de acciones del perfil de mascota (M)
- UX-17 · áreas táctiles de 44 px (M)
- UX-24 · modo escritorio sin marco de teléfono para admin y listados (L)

### 4.4 Severidad 1 (resto)
UX-06, UX-20, UX-23, UX-25, UX-26, UX-27, UX-28, UX-29, UX-30. Todos de costo S.

### 4.5 Cuánto aporta v0.5
Resuelve por completo UX-04, UX-21, UX-22, UX-23 y UX-29 y parcialmente UX-01, UX-11, UX-13, UX-14, UX-18, UX-19 y UX-26; no toca los tres de severidad 3 (UX-02 y UX-03 se mantienen, UX-01 mejora solo en parte). El rediseño es útil como base visual, pero no sustituye las correcciones de comportamiento (confirmaciones, deshacer, validación y toasts).
