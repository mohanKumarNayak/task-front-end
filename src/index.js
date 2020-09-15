import React from 'react'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import App from './App'
import configureStore from './store/reduxStore'
import {Provider} from 'react-redux'
import { StartgetUserAccount} from './store/Action/userAction'

const store = configureStore()

if(localStorage.getItem('token')){
    store.dispatch( StartgetUserAccount(localStorage.getItem('token')))
    
   
  }
console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))