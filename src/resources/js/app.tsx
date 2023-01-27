import React from 'react';
import ReactDOM from 'react-dom/client';
// redux
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

const files = require.context('./', true, /\.tsx$/i);
const fileObj = files.keys().reduce((acc, item) => {
  acc[item.split('/').pop().split('.')[0]] = files(item).default;

  return acc;
}, {});

const element = document.getElementById('app');
const component = element?.dataset?.component;
const props = JSON.parse(element?.dataset?.props);
const MyComponent = fileObj[component];
const root = ReactDOM.createRoot(document.getElementById('app'));

const app = (
  <Provider store={store}>
    <MyComponent {...props} />
  </Provider>
);

root.render(app);
