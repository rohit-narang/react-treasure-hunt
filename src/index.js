import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/store'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/Home';
import Gameover from './views/Home/gameOver';

ReactDOM.render(<Provider store={store}>
    <Router>
        <Route path='/'  exact component={Home} />
        <Route path='/gameover' component={Gameover} />
        <Route path='/play' component={App} />
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
