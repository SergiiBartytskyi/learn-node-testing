import { readSongs } from '../utils/songs-utils/readSongs.js';
import { writeSongs } from '../utils/songs-utils/writeSongs.js';
import { createFakeSong } from '../utils/songs-utils/createFakeSong.js';

const generate = async (number) => {
  const songs = await readSongs();
  const newSongs = Array(number).fill(0).map(createFakeSong);
  await writeSongs([...songs, ...newSongs]);
};
generate(5);
