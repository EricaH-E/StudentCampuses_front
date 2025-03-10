import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
  
 const store = configureStore();
  
  ReactDOM.render( 
  <Provider store={store} >
    <App />
  </Provider> 
    ,
    document.getElementById('root')
  );

serviceWorker.register();


