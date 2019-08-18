import {GAME_WIN} from '../actions/actionType';
const initialState ={
    isOpen : false
}
const modalReducer = (state = initialState, action) => {

    switch (action.type) {
        case GAME_WIN:
            return {
                ...state.modal,
                isOpen: true
            }
            default:
                return state;
    }
}

export default modalReducer;

