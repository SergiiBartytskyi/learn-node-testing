import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../../songs/songs.js';

export const readSongs = async () => {
  const data = await readFile(PATH_DB, 'utf-8');
  return JSON.parse(data);
};
