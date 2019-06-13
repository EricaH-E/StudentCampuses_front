import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    
    //creatStore function creates the store
    const store = createStore(
    rootReducer, //rootReducer updates our state tree 
    composeWithDevTools(
      applyMiddleware(thunk)
    ),
    /*window.devToolsExtension ? window.devToolsExtension() : undefined*/
  );

  //boiler plate 
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}