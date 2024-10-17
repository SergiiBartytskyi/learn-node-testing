import { readSongs } from '../utils/readSongs.js';
import { writeSongs } from '../utils/writeSongs.js';
import { createFakeSong } from '../utils/createFakeSong.js';

const generateOneSong = async () => {
  const songs = await readSongs();
  const newSong = await createFakeSong();
  await writeSongs([...songs, newSong]);
};

generateOneSong();
