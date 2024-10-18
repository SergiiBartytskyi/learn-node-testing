import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../../songs/songs.js';

export const writeSongs = async (updateData) => {
  const updateSongs = await writeFile(PATH_DB, JSON.stringify(updateData));
  return updateSongs;
};
