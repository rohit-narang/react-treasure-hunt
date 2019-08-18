import {createStore} from 'redux';
import appReducer from '../reducers/appReducer';
import intialState from './initialState';
const store = createStore(
    appReducer, intialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;
