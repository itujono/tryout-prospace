import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import './styles/style.scss'
import rootReducer from './redux/reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch} from 'react-router-dom'


const store = createStore(rootReducer)




ReactDOM.render(
    <Provider store={store}><BrowserRouter><Switch><App /></Switch></BrowserRouter></Provider>,
    document.getElementById('app')
)

module.hot.accept();