import { FIREBALL2_MOVE} from '../actions/actionType';

const initialState = {
    position2: [290, 475]
}

const FireballReducer2 = (state = initialState, action) => {
    switch (action.type) {
        case FIREBALL2_MOVE:
            return {
                ...state.fireball2,
                position2: action.position2
            }

        default:
            return state;
    }
}

export default FireballReducer2;