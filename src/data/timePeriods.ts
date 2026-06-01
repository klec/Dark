import type { TimePeriod } from '../types';

export const TIME_PERIODS: TimePeriod[] = [
  { year: 1888, label: '1888', description: 'Jonas and others stranded after Sic Mundus travel. Bartosz begins his life here with Silja.', season: [3] },
  { year: 1921, label: '1921', description: 'Sic Mundus HQ. Adam rules from the train station beneath Winden. The origin of his faction.', season: [2, 3] },
  { year: 1953, label: '1953', description: 'First era shown. Child disappearances. Egon Tiedemann investigates. Foundation of the power plant.', season: [1, 2, 3] },
  { year: 1954, label: '1954', description: 'Jonas stranded after Season 2. Egon Tiedemann active as young officer. Hannah visits.', season: [2, 3] },
  { year: 1971, label: '1971', description: 'The Origin World timeline — Tannhaus builds his machine here after losing his family. Key to resolving the knot.', season: [3] },
  { year: 1986, label: '1986', description: 'Claudia Tiedemann directs the nuclear plant. Ulrich is a teen. Mikkel arrives here as Michael Kahnwald.', season: [1, 2] },
  { year: 1987, label: '1987', description: 'Season 2 version of 1986 — one year after the wormhole period. Claudia investigates time travel.', season: [2, 3] },
  { year: 2019, label: '2019', description: 'The present day of Season 1. Jonas\'s starting point. Mikkel disappears. The wormhole is discovered.', season: [1, 2, 3] },
  { year: 2020, label: '2020', description: 'The apocalypse year. Season 2 present. The God Particle and Sic Mundus move toward triggering catastrophe.', season: [2, 3] },
  { year: 2052, label: '2052', description: 'Post-apocalyptic Winden shown briefly in Season 1 finale. Jonas\'s first glimpse of the future.', season: [1, 3] },
  { year: 2053, label: '2053', description: 'Elisabeth leads a survivor camp after the apocalypse. The God Particle exists here.', season: [2, 3] },
];

export const FAMILY_COLORS: Record<string, string> = {
  Kahnwald: '#e8b84b',
  Nielsen:  '#4a9edd',
  Doppler:  '#e05c5c',
  Tiedemann:'#6ab04c',
  Other:    '#9b59b6',
};

export const RELATIONSHIP_COLORS: Record<string, string> = {
  'parent-child': '#ffffff',
  'sibling':      '#a0d8ef',
  'romantic':     '#ff6b8a',
  'same-person':  '#f0e040',
  'friend':       '#80e0a0',
  'enemy':        '#ff4444',
  'mentor':       '#c0a0ff',
};
