import { readSongs } from '../utils/songs-utils/readSongs.js';

export const getAllSongs = async () => readSongs();

console.log(await getAllSongs());
