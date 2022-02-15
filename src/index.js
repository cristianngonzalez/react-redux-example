import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//Importar el store
import Store from './store/index';
//Provider es una clase que envuelve toda la app a la que pasamos el store
import {Provider} from 'react-redux'; 

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

