import { readSongs } from '../utils/readSongs.js';
import { writeSongs } from '../utils/writeSongs.js';
import { createFakeSong } from '../utils/createFakeSong.js';

const generate = async (number) => {
  const songs = await readSongs();
  const newSongs = Array(number).fill(0).map(createFakeSong);
  await writeSongs([...songs, ...newSongs]);
};
generate(5);
