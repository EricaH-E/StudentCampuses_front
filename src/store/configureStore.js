import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    
    //creatStore function creates the store
    const store = createStore(
    rootReducer, //rootReucer updates our state tree 
    initialState,
    //allows Redux dev tools extention to acess our store 
    window.devToolsExtension ? window.devToolsExtension() : undefined
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