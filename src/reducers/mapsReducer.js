import { tiles } from "../data/Maps/1";
import {ADD_TILES} from '../actions/actionType';

const initialState = {
    tiles:tiles
}
const MapsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TILES:
            return {
                ...state,
                tiles: action.payload
            };
        default:
            return state;
    }
}

export default MapsReducer;
