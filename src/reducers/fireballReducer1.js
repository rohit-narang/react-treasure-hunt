import {FIREBALL_MOVE} from '../actions/actionType';

const initialState = {
    position: [696, 0]
}

const FireballReducer1 = (state = initialState, action) => {
    switch(action.type) {       
        case FIREBALL_MOVE:
            return {
                ...state.fireball1,
                position: action.position
            }
        default:
            return state;
    }
}

export default FireballReducer1;