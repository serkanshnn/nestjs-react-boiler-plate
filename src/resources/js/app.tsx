import '../css/app.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
// redux
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
import modules from './modules';

const element = document.getElementById('app');

const component = element?.dataset?.component;
const props = JSON.parse(element?.dataset?.props);

const MyComponent = modules[component];

const root = ReactDOM.createRoot(element);

root.render(
  <Provider store={store}>
    <MyComponent {...props} />
  </Provider>,
);
