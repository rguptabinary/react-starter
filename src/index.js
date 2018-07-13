// babel-polfill is used for the features which cannot be transpiled by babel
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
//Router: component we are placing at the root of the component to handle routing
//browserHistory: gives us nice clean url (non # based)
import { BrowserRouter } from 'react-router-dom';
// Webpack can import css files too
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {loadCourses} from './actions/courseAction.js';
import { loadAuthors } from './actions/authorActions';
import App from './components/App';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
    <Provider store={store}>
            <App/>
    </Provider>
    ,
    document.getElementById('app')
);