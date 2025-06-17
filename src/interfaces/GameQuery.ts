import type { Genre } from './Genre';
import type { Platform } from './Game';
// This is the query interface that will be used to filter games
// It contains the selected genre and platform, both of which can be null.
// This allows us to have a flexible query that can be used to fetch games based on the selected genre and platform.

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string; // e.g., 'asc' or 'desc'
}
