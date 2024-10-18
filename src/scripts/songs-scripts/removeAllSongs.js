import { writeSongs } from '../utils/songs-utils/writeSongs.js';

const removeAllSongs = async () => await writeSongs([]);
removeAllSongs();
