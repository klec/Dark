import { openDB, type IDBPDatabase } from 'idb';
import type { Character, Relationship, Episode } from '../types';

const DB_NAME = 'dark-series';
const DB_VERSION = 2; // bump to re-seed with photo paths

export type DarkDB = IDBPDatabase<{
  characters: { key: string; value: Character };
  relationships: { key: string; value: Relationship };
  episodes: { key: string; value: Episode };
}>;

export async function openDarkDB(): Promise<DarkDB> {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db, oldVersion) {
      // Clear all stores on version bump to force re-seed with updated data
      if (oldVersion > 0) {
        if (db.objectStoreNames.contains('characters')) db.deleteObjectStore('characters');
        if (db.objectStoreNames.contains('relationships')) db.deleteObjectStore('relationships');
        if (db.objectStoreNames.contains('episodes')) db.deleteObjectStore('episodes');
      }
      db.createObjectStore('characters', { keyPath: 'id' });
      db.createObjectStore('relationships', { keyPath: 'id' });
      db.createObjectStore('episodes', { keyPath: 'id' });
    },
  }) as Promise<DarkDB>;
}

export async function getAllCharacters(db: DarkDB): Promise<Character[]> {
  return db.getAll('characters');
}

export async function getAllRelationships(db: DarkDB): Promise<Relationship[]> {
  return db.getAll('relationships');
}

export async function getAllEpisodes(db: DarkDB): Promise<Episode[]> {
  return db.getAll('episodes');
}

export async function putCharacter(db: DarkDB, c: Character): Promise<void> {
  await db.put('characters', c);
}

export async function putRelationship(db: DarkDB, r: Relationship): Promise<void> {
  await db.put('relationships', r);
}

export async function putEpisode(db: DarkDB, e: Episode): Promise<void> {
  await db.put('episodes', e);
}
