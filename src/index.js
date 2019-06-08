import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import { Provider } from 'react-redux';
/*import configureStore from './store/configureStore';*/
  
 /*const store = configureStore();*/
  
  ReactDOM.render( <App />
    ,
    document.getElementById('root')
  );

serviceWorker.register();

/*<Provider store={store} >
      <App />
    </Provider> */
