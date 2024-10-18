import { readSongs } from '../../utils/songs-utils/readSongs.js';
import { writeSongs } from '../../utils/songs-utils/writeSongs.js';

export const removeRandomSong = async () => {
  const songs = await readSongs();
  if (songs.length === 0) return;
  const randomIdx = Math.floor(Math.random() * songs.length);
  songs.splice(randomIdx, 1);
  await writeSongs(songs);
};

removeRandomSong();
