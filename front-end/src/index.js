import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './reducers';
import { BrowserRouter } from 'react-router-dom'


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store.getState());

ReactDOM.render( <BrowserRouter>< App store={store}/ ></BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();