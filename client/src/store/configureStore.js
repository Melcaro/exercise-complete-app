import { createStore } from 'redux';
import appReducer from '../reducers';
import middleware from './middleware';

const store = createStore(appReducer, {}, middleware);
console.log('initial state', store.getState());

export default store;
