import { readSongs } from '../../utils/songs-utils/readSongs.js';

export const getCount = async () => {
  const songs = await readSongs();
  return songs.length;
};

console.log('getCount:>> ', await getCount());
