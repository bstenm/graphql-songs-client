import { playSong } from './songs';
import { PLAY_SONG } from '../config/action-types';

it('Returns an action for setting the currency list', () => {
      expect(playSong(2)).toEqual({
            type: PLAY_SONG,
            payload: 2,
      });
});
