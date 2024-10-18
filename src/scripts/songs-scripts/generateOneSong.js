import { readSongs } from '../utils/songs-utils/readSongs.js';
import { writeSongs } from '../utils/songs-utils/writeSongs.js';
import { createFakeSong } from '../utils/songs-utils/createFakeSong.js';

const generateOneSong = async () => {
  const songs = await readSongs();
  const newSong = await createFakeSong();
  await writeSongs([...songs, newSong]);
};

generateOneSong();
