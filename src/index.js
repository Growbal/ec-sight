import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter , Route , Switch } from 'react-router-dom';

import reducer from './reducers';

import './index.css';
import Login from './components/Login';
import Top from './components/Top';

import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store = { store }>
        <BrowserRouter>
            <Switch>
                <Route path="/top" component={ Top } />
                <Route path="/" exact component={ Login } />
            </Switch>
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
