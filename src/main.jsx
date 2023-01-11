import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import zoo from './utils/zoo';
import modal from './utils/modal';

const zooStore = zoo.init({ modal });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={zooStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
