# Cómo trabajamos en este repositorio

Guía de una página para todo el equipo, sepas o no programar.

## 1. ¿Qué vas a cambiar?

| Si cambias… | Cómo | Mensaje del commit |
|---|---|---|
| **Un documento** (Daily, planning, retro, readme de un sprint) | Desde la web de GitHub: abre el archivo → ícono del lápiz ✏️ → edita → **Commit changes** directo a `main` | `daily(<tu-usuario>): AAAA-MM-DD` para el Daily · `docs: <qué cambió>` para lo demás |
| **Código o evidencias** (capturas, pruebas, archivos de `Codigo_Repositorio/`) | Rama propia → commit → *pull request* (PR) | `HU-NN: <qué cambió>` |

Antes de editar un documento en la web, recarga la página: así no pisas lo que otra persona acaba de guardar.

## 2. Código y evidencias: rama, commit y PR

1. Crea una rama con el nombre `sprint-N/HU-NN-descripcion` (por ejemplo, `sprint-2/HU-11-pruebas`).
2. Haz commits con el formato `HU-NN: qué cambió` (por ejemplo, `HU-11: registra pruebas del registro de mascotas`).
3. Abre un PR hacia `main`. La plantilla trae las casillas; escribe `Closes #<número del issue de la tarea>` para que el issue se cierre solo al fusionar.
4. Otra persona del equipo revisa y aprueba (**una aprobación** como mínimo). Recién entonces se fusiona. El repositorio no lo bloquea técnicamente: es un acuerdo del equipo.

## 3. Los 5 comandos de Git

**Siempre `git pull` primero.** Si te saltas el paso 1 trabajarás sobre una versión vieja y aparecerán conflictos.

```bash
git switch main && git pull                 # 1. traer lo último
git switch -c sprint-2/HU-11-pruebas        # 2. crear tu rama
git add Sprint_02/7.Pruebas                 # 3. elegir qué archivos subir
git commit -m "HU-11: registra pruebas del registro de mascotas"   # 4. guardar el cambio con mensaje
git push -u origin sprint-2/HU-11-pruebas   # 5. subir la rama y abrir el PR en GitHub
```

Si es la primera vez: `git clone https://github.com/ClxNode/KuyayPet.git`.

## 4. El tablero (GitHub Project)

[KuyayPet — Gestión del Desarrollo Scrum](https://github.com/users/ClxNode/projects/3): **Pendiente → En proceso → Terminado**.

- Mueve tu tarjeta a **En proceso** cuando empiezas.
- Mueve una tarjeta a **Terminado** solo si existe la evidencia en `Sprint_0N/7.Pruebas`. **Implementada no es terminada**: que la función exista en el prototipo no cuenta como prueba.
- Si algo te bloquea, escríbelo en tu Daily (sección *Bloqueos*).

## 5. Dónde va cada cosa

| Qué | Dónde |
|---|---|
| Daily Scrum | `Sprint_0N/3.Daily_Scrum/readme.md`, en tu propio bloque (Ayer · Hoy · Bloqueos) |
| Plan y resultado de pruebas | `Sprint_0N/7.Pruebas/readme.md` (casos `P-NN`: procedimiento, resultado esperado, resultado observado, estado) |
| Capturas de una HU | `Sprint_0N/7.Pruebas/evidencias/HU-NN/` |
| Videos | Drive del equipo; en `7.Pruebas` solo se pega el enlace |
| Código del prototipo | `Codigo_Repositorio/kuyaypet-web/` |
| Arquitectura y modelo de datos | `docs/arquitectura.md`, `docs/modelo-datos.md` |
| Tareas nuevas | Issue con la plantilla **Tarea** (`Parte de #<HU>`) |

Un resultado de prueba se escribe **después** de ejecutarla. Si falló, se anota como `Fallido` con lo que se observó: también es evidencia.
