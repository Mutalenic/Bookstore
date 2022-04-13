import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './style/App.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement,
);
