import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const middleware = composeEnhancers(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default middleware;
