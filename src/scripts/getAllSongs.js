import { readSongs } from '../utils/readSongs.js';

export const getAllSongs = async () => readSongs();

console.log(await getAllSongs());
