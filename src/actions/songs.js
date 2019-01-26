/* eslint-disable import/prefer-default-export */
import { PLAY_SONG } from '../config/action-types';

export const playSong = payload => ({
      type: PLAY_SONG,
      payload,
});
