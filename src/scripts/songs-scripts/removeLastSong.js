import { readSongs } from '../utils/songs-utils/readSongs.js';
import { writeSongs } from '../utils/songs-utils/writeSongs.js';

const removeLastSong = async () => {
  const songs = await readSongs();
  songs.pop();
  await writeSongs(songs);
};
removeLastSong();
