import type { DarkDB } from './schema';
import { putCharacter, putRelationship, putEpisode, getAllCharacters } from './schema';
import { CHARACTERS } from '../data/characters';
import { RELATIONSHIPS } from '../data/relationships';
import { EPISODES } from '../data/episodes';

export async function seedDatabase(db: DarkDB): Promise<void> {
  const existing = await getAllCharacters(db);
  if (existing.length > 0) return; // already seeded

  await Promise.all(CHARACTERS.map(c => putCharacter(db, c)));
  await Promise.all(RELATIONSHIPS.map(r => putRelationship(db, r)));
  await Promise.all(EPISODES.map(e => putEpisode(db, e)));

  console.log(`[DB] Seeded: ${CHARACTERS.length} characters, ${RELATIONSHIPS.length} relationships, ${EPISODES.length} episodes`);
}
