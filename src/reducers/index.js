import {combineReducers} from 'redux';
import playerReducer from './playerReducer';
import MapsReducer from './mapsReducer';

const rootReducer = combineReducers({
    player: playerReducer,
    maps: MapsReducer
})

export default rootReducer;
