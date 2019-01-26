import { PLAY_SONG } from '../config/action-types';

const initialState = {
      selected: null,
};

export default (state = initialState, { type, payload }) => {
      if (type === PLAY_SONG) {
            return { ...state, selected: payload };
      }

      return state;
};
