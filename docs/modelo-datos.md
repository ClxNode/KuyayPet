# 🗃️ Modelo derivado del prototipo

[← Volver a la presentación](../readme.md) · [Arquitectura](./arquitectura.md) · [Catálogo de HU](./historias-de-usuario.md)

> Este modelo **se derivó de los tipos del código** ([`Codigo_Repositorio/kuyaypet-web/src/types/index.ts`](../Codigo_Repositorio/kuyaypet-web/src/types/index.ts)), no al revés. Hoy no existe una base de datos: estas entidades viven como listas dentro de un store guardado en `localStorage` (ver [ADR-K01](./arquitectura.md#adr-k01--sin-backend-en-el-mvp)). Si el equipo migra a una BD relacional, cada entidad sería una tabla y cada `…Id` una clave foránea.

## Diagrama entidad-relación

```mermaid
erDiagram
  USER ||--o| ADOPTER_PROFILE : "tiene (solo adoptantes)"
  USER ||--o{ PET : "publica (responsable)"
  USER ||--o{ INTERACTION : "da like/dislike"
  PET  ||--o{ INTERACTION : "recibe"
  USER ||--o{ INTEREST : "expresa (adoptante)"
  PET  ||--o{ INTEREST : "recibe"
  USER ||--o{ MATCH : "participa"
  PET  ||--o{ MATCH : "genera"
  PET  ||--o{ CHAT_THREAD : "tema de"
  USER }o--o{ CHAT_THREAD : "miembro de (memberIds)"
  CHAT_THREAD ||--o{ CHAT_MESSAGE : "contiene"
  USER ||--o{ CHAT_MESSAGE : "envía"
  USER ||--o{ ADOPTION_REQUEST : "solicita (adoptante)"
  PET  ||--o{ ADOPTION_REQUEST : "es objeto de"
  USER ||--o{ APP_NOTIFICATION : "recibe"
  USER ||--o{ REPORT : "reporta"
  USER ||--o{ FAVORITE : "guarda"
  PET  ||--o{ FAVORITE : "es guardada"

  USER {
    string id PK
    string role "adopter | owner | admin"
    string name
    string email
    string password "demo: texto plano"
    string avatar
    string phone "opcional"
    string district "opcional"
    string bio "opcional"
    boolean active
    string createdAt
    string provider "email | google, opcional"
    string kind "persona | albergue (responsable)"
    number autoAcceptProbability "responsable sintético"
  }
  ADOPTER_PROFILE {
    string district
    number lat
    number lng
    number radiusKm
    string housing
    string homeSize
    string hoursAlone
    string activity
    string experience
    string kids
    string otherPets
    boolean allergies
    string prefs "especies, tamaños, edades, sexo"
  }
  PET {
    string id PK
    string ownerId FK
    string name
    string species "perro | gato"
    string breed
    number ageMonths
    string size "S | M | L"
    string sex "macho | hembra"
    number energy "1-5"
    boolean goodWithKids
    boolean goodWithDogs
    boolean goodWithCats
    boolean needsYard
    number aloneTolerance "1-5"
    boolean firstTimerFriendly
    boolean hypoallergenic
    boolean sterilized
    boolean vaccinated
    boolean dewormed
    string district
    number lat
    number lng
    string personality "lista de etiquetas"
    string about
    string story "opcional"
    string specialCare "opcional"
    string photos "lista de URLs"
    string status "disponible | adoptada | retirada"
    string approval "pendiente | aprobada | rechazada"
    string rejectionReason "opcional"
    string createdAt
  }
  INTERACTION {
    string id PK
    string adopterId FK
    string petId FK
    string kind "like | dislike | superlike"
    string createdAt
  }
  INTEREST {
    string id PK
    string adopterId FK
    string petId FK
    string ownerId FK
    string status "pendiente | aceptado | rechazado"
    boolean super
    number score
    string createdAt
    string answeredAt "opcional"
  }
  MATCH {
    string id PK
    string adopterId FK
    string petId FK
    string ownerId FK
    number score
    string createdAt
    boolean seen
  }
  CHAT_THREAD {
    string id PK
    string kind "direct | group"
    string petId FK
    string memberIds "lista de USER.id"
    string createdAt
    string lastReadAt "por usuario"
  }
  CHAT_MESSAGE {
    string id PK
    string threadId FK
    string senderId FK
    string text
    string createdAt
    boolean system "opcional"
  }
  ADOPTION_REQUEST {
    string id PK
    string adopterId FK
    string petId FK
    string ownerId FK
    string date "AAAA-MM-DD"
    string time "HH:mm"
    string place
    string message
    string status "pendiente | aceptada | rechazada"
    string createdAt
  }
  APP_NOTIFICATION {
    string id PK
    string userId FK
    string kind "interes | match | mensaje | solicitud | ..."
    string title
    string body
    string link "opcional"
    string actorId FK "opcional"
    string petId FK "opcional"
    boolean read
    string createdAt
  }
  REPORT {
    string id PK
    string reporterId FK
    string targetType "mascota | usuario | mensaje"
    string targetId "id de la entidad reportada"
    string reason
    string detail
    string status "abierto | resuelto | descartado"
    string createdAt
    string resolution "opcional"
  }
  FAVORITE {
    string adopterId FK
    string petId FK
    string createdAt
  }
```

## Entidades

| Entidad (tipo en el código) | Qué representa | HU que la usan |
|---|---|---|
| `USER` (`User`) | Cuenta con rol adoptante, responsable o administrador | HU-01, HU-15, HU-21, HU-22, HU-25 |
| `ADOPTER_PROFILE` (`AdopterProfile`) | Respuestas del cuestionario del adoptante; va **incrustado** en `User.profile` | HU-05, HU-07, HU-20 |
| `PET` (`Pet`) | Mascota publicada por un responsable, con estado de adopción y de moderación | HU-02, HU-03, HU-04, HU-11, HU-12, HU-16, HU-19, HU-23, HU-24 |
| `INTERACTION` (`Interaction`) | Like / dislike / superlike de un adoptante sobre una mascota | HU-06, HU-18 |
| `INTEREST` (`Interest`) | Interés pendiente de respuesta del responsable; aceptado equivale a Match | HU-06, HU-07, HU-13 |
| `MATCH` (`Match`) | Interés mutuo adoptante–mascota con su puntaje | HU-07, HU-20 |
| `CHAT_THREAD` (`ChatThread`) | Conversación directa o grupal sobre una mascota | HU-08, HU-09 |
| `CHAT_MESSAGE` (`ChatMessage`) | Mensaje dentro de una conversación | HU-08, HU-09 |
| `ADOPTION_REQUEST` (`AdoptionRequest`) | Propuesta de fecha, hora y lugar para conocer a la mascota | HU-10 |
| `APP_NOTIFICATION` (`AppNotification`) | Aviso dentro de la app para un usuario | HU-13 |
| `REPORT` (`Report`) | Reporte de contenido inapropiado sobre una mascota, usuario o mensaje | HU-26 |
| `FAVORITE` (`Favorite`) | Mascota guardada por un adoptante | HU-17 |

## Relaciones

| Relación | Cardinalidad | Campo que la implementa |
|---|---|---|
| Usuario responsable publica mascotas | 1 a N | `Pet.ownerId` |
| Usuario adoptante tiene un perfil de preferencias | 1 a 0..1 | `User.profile` (incrustado) |
| Adoptante interactúa con mascotas | N a N, vía `INTERACTION` | `Interaction.adopterId`, `Interaction.petId` |
| Adoptante expresa interés en mascota de un responsable | N a N, vía `INTEREST` | `adopterId`, `petId`, `ownerId` |
| Match entre adoptante, mascota y responsable | N a N, vía `MATCH` | `adopterId`, `petId`, `ownerId` |
| Conversación sobre una mascota | 1 mascota a N conversaciones | `ChatThread.petId` |
| Miembros de una conversación | N a N | `ChatThread.memberIds` (lista) |
| Mensajes de una conversación | 1 a N | `ChatMessage.threadId`, `ChatMessage.senderId` |
| Solicitud de adopción | N a N, vía `ADOPTION_REQUEST` | `adopterId`, `petId`, `ownerId` |
| Notificaciones de un usuario | 1 a N | `AppNotification.userId` (y opcionales `actorId`, `petId`) |
| Reportes | 1 usuario a N reportes; objetivo polimórfico | `Report.reporterId` + `targetType`/`targetId` |
| Favoritos | N a N, vía `FAVORITE` | `Favorite.adopterId`, `Favorite.petId` |

## Notas para una futura BD relacional

- `ownerId` se repite en `INTEREST`, `MATCH` y `ADOPTION_REQUEST` aunque se puede deducir de `PET.ownerId`: en el prototipo evita búsquedas; en una BD habría que decidir si se normaliza.
- `memberIds`, `photos`, `personality` y `prefs` son listas: en una BD relacional serían tablas aparte (por ejemplo, `chat_member`, `pet_photo`).
- `REPORT.targetId` apunta a tablas distintas según `targetType`; en una BD se resolvería con una columna por tipo o con una tabla por tipo de reporte.
- `USER.password` está en texto plano solo porque es una demo local; una BD real guardaría un hash.
- `MatchResult` y `Reason` del código son resultados calculados por el motor, no datos persistidos: por eso no aparecen como entidades.

> ✋ Pendiente: que el equipo valide este modelo como "modelo ER" del Sprint 1 o pida cambios.
