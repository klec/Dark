export type Family = 'Kahnwald' | 'Nielsen' | 'Doppler' | 'Tiedemann' | 'Other';
export type World = 'Jonas' | 'Eva' | 'Both';
export type AgeGroup = 'child' | 'teen' | 'adult' | 'elder';
export type RelationshipType =
  | 'parent-child'
  | 'sibling'
  | 'romantic'
  | 'same-person'
  | 'friend'
  | 'enemy'
  | 'mentor';

export interface Appearance {
  timePeriod: number;
  actorName: string;
  ageGroup: AgeGroup;
  photoUrl?: string;
}

export interface Character {
  id: string;
  name: string;
  family: Family;
  world: World;
  description: string;
  appearances: Appearance[];
}

export interface Relationship {
  id: string;
  sourceId: string;
  targetId: string;
  type: RelationshipType;
  description?: string;
  world?: World;
}

export interface Episode {
  id: string;
  season: 1 | 2 | 3;
  episode: number;
  title: string;
  summary: string;
  timePeriods: number[];
}

export interface TimePeriod {
  year: number;
  label: string;
  description: string;
  season: number[];
}

export interface FilterState {
  timePeriods: Set<number>;
  families: Set<Family>;
  worlds: Set<World>;
  searchQuery: string;
}

export interface DBSchema {
  characters: Character;
  relationships: Relationship;
  episodes: Episode;
}
