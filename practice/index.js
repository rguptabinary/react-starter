// babel-polfill is used for the features which cannot be transpiled by babel
import 'babel-polyfill'
import { render } from 'react-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/toastr/build/toastr.min.css'
import App from'./components/App'

import './styles/styles.css'

render(
    <App />
    ,
    document.getElementById('app')
);