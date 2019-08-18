import rootReducer from './index';
import {GAME_OVER} from '../actions/actionType';

const appReducer = (state, action) => {
    if (action.type === GAME_OVER) {
      state = undefined;
    }
  
    return rootReducer(state, action)
  }

  export default appReducer;