// babel-polfill is used for the features which cannot be transpiled by babel
import 'babel-polyfill';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import configureStore from './store/configureStore';
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