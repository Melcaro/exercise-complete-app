import { combineReducers } from 'redux';

import galleryReducer from './gallery';

export default combineReducers({
  gallery: galleryReducer,
});
