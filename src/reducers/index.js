import {combineReducers} from 'redux';
import playerReducer from './playerReducer';
import MapsReducer from './mapsReducer';
import FireballReducer1 from './fireballReducer1.js';
import FireballReducer2 from './fireballReducer2.js';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
    player: playerReducer,
    maps: MapsReducer,
    modal: modalReducer,
    fireball1: FireballReducer1,
    fireball2: FireballReducer2,
})

export default rootReducer;
