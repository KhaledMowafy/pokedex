# 🧪 Pokémon Browser – Clean Architecture (React + TypeScript)

A responsive Pokémon browser built with **React 19 + TypeScript + Tailwind CSS**, following **Clean Architecture** and **Atomic Design** principles.  
Deployed easily via **Vercel**, **Netlify**, or **Cloudflare Pages**.

live demo: https://pokedex-mocha-nine-42.vercel.app/

---

## 🧭 Overview

Users can:
- View Pokémon in two modes:
  - **Pagination** (page numbers + next/previous)
  - **Load More** (infinite scroll style)
- View a **detailed page** for each Pokémon:
  - Name, sprite, stats, types, height, weight, base experience, and abilities
- Enjoy a **responsive**, clean, and testable architecture.

---

## 🧱 Architecture Overview

```mermaid
graph TD

A[UI Components React] --> B[Presentation Layer]
B --> C[UseCases Application]
C --> D[Repositories Interfaces]
D --> E[Infrastructure HTTP + API]
E --> F[PokeAPI REST Service]


```

- Presentation (React) → contains components built using Atomic Design.
- Domain → pure business logic: entities, use cases, repository contracts.
- Infrastructure → implements repositories using HTTP + PokeAPI.
- Data Flow is unidirectional and easily testable.

## 🗂️ Folder Structure

```mermaid
graph TD
root[📁 src] --> A[domain]
root --> B[infrastructure]
root --> C[presentation]
root --> D[lib]
root --> E[utils]
root --> F[routes.tsx]

A --> A1[entities]
A --> A2[usecases]
A --> A3[repositories]

B --> B1[http]
B --> B2[repositories]

C --> C1[components]
C --> C2[pages]
C1 --> C3[atoms]
C1 --> C4[molecules]
C1 --> C5[organisms]
C --> C6[providers]
```

## 🔄 Data Flow
```mermaid
sequenceDiagram
    participant UI as React Component
    participant UC as UseCase
    participant Repo as Repository Interface
    participant API as PokeAPI Adapter
    participant HTTP as HTTP Client
    participant PokeAPI as PokeAPI Server

    UI->>UC: execute(params)
    UC->>Repo: list() / getById()
    Repo->>API: HTTP request
    API->>HTTP: fetch(url)
    HTTP->>PokeAPI: GET /pokemon
    PokeAPI-->>HTTP: JSON response
    HTTP-->>API: data
    API-->>Repo: mapped entities
    Repo-->>UC: domain models
    UC-->>UI: display-ready data
```
## 🎨 UI Design Highlights

- Responsive grid for Pokémon cards (2 → 6 columns)
- Gradient header for details
- Stats visualized as progress bars
- Type chips with colored badges
- Modern soft background gradients per view:
    - /pagination → bg-[#E5EAFE]
    - /load-more → bg-[#DEFAEB]
 
## 🧩 Atomic Design Breakdown
```mermaid
  graph TD
A[Atoms] --> B[Molecules]
B --> C[Organisms]
C --> D[Pages]
D --> E[App]
```

## 🚀 Running Locally

```
# 1. Install dependencies
npm install     # or: pnpm i / yarn

# 2. Run dev server
npm run dev     # default: http://localhost:5173

# 3. Build for production
npm run build
```
