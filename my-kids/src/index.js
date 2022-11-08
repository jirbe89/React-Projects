import React from 'react'
import ReactDOM from 'react-dom/client'
//import { store } from './app/store'

//import { Provider } from 'react-redux' //1
//import { configureStore } from '@reduxjs/toolkit'
import App from './components/App'

//import reducers from './reducers' //4

//import { createStore, applyMiddleware } from 'redux' //2
//import thunk from 'redux-thunk' //3

//const store = createStore(reducers, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
//ReactDOM.render(<App />, document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
