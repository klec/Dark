# Dark Series Character Graph — Project Plan

## Overview
TypeScript web app visualizing character relationships from the Netflix series "Dark".
Data stored in browser's IndexedDB. No backend required.

## Tech Stack
- **Vite** — build tool (fast dev server, native TS support)
- **TypeScript** — language
- **Cytoscape.js** — graph visualization (purpose-built for network graphs, better than D3 for this)
- **idb** — IndexedDB wrapper (typed, promise-based)
- **CSS** — plain CSS with custom properties (no framework needed for this scope)

## Project Structure
```
/src
  /data/           — static JSON seed data
    characters.ts  — all characters
    relationships.ts — all edges
    episodes.ts    — episode summaries
    timePeriods.ts — era definitions
  /db/             — IndexedDB service layer
    schema.ts      — DB schema & version
    service.ts     — CRUD operations
    seed.ts        — initial data loading
  /graph/          — Cytoscape.js integration
    config.ts      — layout & style config
    graph.ts       — graph controller
    tooltip.ts     — node/edge tooltips
  /ui/             — UI components (vanilla TS)
    sidebar.ts     — character detail panel
    filters.ts     — time/family/world filters
    search.ts      — search overlay
    episodeGuide.ts — episode list panel
  /types/          — TypeScript interfaces
    index.ts
  main.ts          — entry point
  style.css        — global styles
index.html
```

## Data Models
```typescript
interface Character {
  id: string;
  name: string;
  family: 'Kahnwald' | 'Nielsen' | 'Doppler' | 'Tiedemann' | 'Other';
  world: 'Jonas' | 'Eva' | 'Both';
  description: string;
  appearances: Appearance[];
}

interface Appearance {
  timePeriod: number;        // year: 1953, 1986, 2019, etc.
  actorName: string;
  ageGroup: 'child' | 'teen' | 'adult' | 'elder';
  photoUrl?: string;         // Wikipedia/fan-wiki image URL
}

interface Relationship {
  id: string;
  sourceId: string;
  targetId: string;
  type: RelationshipType;
  description?: string;
}

type RelationshipType =
  | 'parent-child'
  | 'sibling'
  | 'romantic'
  | 'same-person'  // time loop versions
  | 'friend'
  | 'enemy'
  | 'mentor';

interface Episode {
  id: string;
  season: 1 | 2 | 3;
  episode: number;
  title: string;
  summary: string;
  timePeriods: number[];
}
```

## UI Features
1. **Interactive Graph** — Nodes = characters, edges = relationship types (color-coded)
2. **Time Period Filter** — Slider/buttons to filter by era (1953/1986/2019/2052…)
3. **Family Filter** — Toggle Kahnwald/Nielsen/Doppler/Tiedemann families
4. **World Toggle** — Switch between Jonas's World and Eva's Alt-World
5. **Character Panel** — Click node → see photos per time period + actor names + description
6. **Relationship Legend** — Color key for edge types
7. **Search** — Keyboard shortcut (Cmd+K) → search characters
8. **Episode Guide** — Collapsible panel with all episodes + summaries
9. **Mini-map** — Cytoscape navigator for large graph
10. **Zoom/Pan** — Standard graph navigation

## Development Phases

### Phase 1 — Project Setup
- Vite + TypeScript scaffold
- Dependencies: cytoscape, idb, @types packages
- Base HTML structure & CSS variables (dark theme, matching show's aesthetic)

### Phase 2 — Data Layer
- TypeScript interfaces
- Static JSON for all ~30 major characters with relationships
- IndexedDB schema (characters, relationships, episodes stores)
- Seed service to populate DB on first load

### Phase 3 — Graph
- Cytoscape initialization with dark theme
- Node styling by family (color) and world (shape)
- Edge styling by relationship type
- Layout: cola or cose-bilkent (force-directed, handles clusters well)
- Click/hover interactions

### Phase 4 — UI Panels
- Sidebar: character details with time-period photo carousel
- Filter bar: time/family/world toggles
- Episode guide panel
- Search overlay

### Phase 5 — Data Population
- All major characters with full appearance data
- All relationships (family trees + romantic + paradox versions)
- Episode summaries for all 26 episodes
- Character image URLs from Wikipedia/fan sources

### Phase 6 — Polish
- CSS animations (node hover glow, edge pulse)
- Responsive layout
- Loading states
- Export graph as PNG

## Character Images Strategy
- Use Wikipedia Commons images (CC licensed) where available
- dark.netflix.io is a JS SPA — images not statically extractable
- Fan wiki (dark.fandom.com) has images with fair use
- Store URLs in data, load lazily in character panel

## Key Characters to Include (~30 major)
**Kahnwald**: Jonas, Michael/Mikkel, Hannah, Ines, Martha (alt)
**Nielsen**: Ulrich (young/adult/old), Katharina, Magnus, Mikkel, Silja, Tronte, Jana, Mads, Agnes
**Doppler**: Charlotte, Peter, Franziska, Elisabeth, Helge (child/adult/elder), Bernd, Greta, Noah/Hanno
**Tiedemann**: Claudia (adult/elder), Regina, Aleksander, Bartosz, H.G. Tannhaus, Katharina
**Other**: Adam (old Jonas), Eva (old Martha), The Stranger (adult Jonas), Egon Tiedemann, Wöller

## Relationships (Edges)
~50+ edges covering:
- 4 family trees
- Romantic relationships (marked per world)
- Bootstrap paradoxes (Charlotte↔Elisabeth loop, etc.)
- Time-loop same-person identities (Jonas→Stranger→Adam)
