import { readSongs } from '../utils/readSongs.js';
import { writeSongs } from '../utils/writeSongs.js';

const removeLastSong = async () => {
  const songs = await readSongs();
  songs.pop();
  await writeSongs(songs);
};
removeLastSong();
