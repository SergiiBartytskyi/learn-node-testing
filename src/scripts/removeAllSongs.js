import { writeSongs } from '../utils/writeSongs.js';

const removeAllSongs = async () => await writeSongs([]);
removeAllSongs();
