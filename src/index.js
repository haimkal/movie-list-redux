import React from 'react';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Reducer from './Redux/Reducer';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  middleware: [thunk],
  reducer: Reducer
})
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')//why do I need it? I thought it's by itself
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
