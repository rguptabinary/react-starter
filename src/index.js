// babel-polfill is used for the features which cannot be transpiled by babel
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
//Router: component we are placing at the root of the component to handle routing
//browserHistory: gives us nice clean url (non # based)
import {Router, browserHistory} from 'react-router';
import routes from './routes';

// Webpack can import css files too
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <Router history={browserHistory} routes={routes}/>,
    document.getElementById('app')
);