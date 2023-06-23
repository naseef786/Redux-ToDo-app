import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  todoReducer from './store/reducers';

import App from './App';

const store = createStore(todoReducer);
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);