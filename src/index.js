import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route , Switch } from 'react-router-dom';

import './index.css';
import Login from './components/Login';
import Top from './components/Top';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/top" component={ Top } />
            <Route path="/" exact component={ Login } />
        </Switch>
    </BrowserRouter>,
document.getElementById('root'));

serviceWorker.unregister();
