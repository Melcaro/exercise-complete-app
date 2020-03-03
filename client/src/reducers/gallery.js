import {
  FETCH_GALLERY,
  FETCH_GALLERY_SUCCESS,
  FETCH_GALLERY_FAILURE,
} from '../actionsTypes';

const DEFAULT_STATE = { isLoading: false, gallery: [], error: null };

const galleryReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_GALLERY:
      return {
        ...DEFAULT_STATE,
        isLoading: true,
      };
    case FETCH_GALLERY_SUCCESS:
      return {
        ...DEFAULT_STATE,
        gallery: payload,
      };
    case FETCH_GALLERY_FAILURE:
      return {
        ...DEFAULT_STATE,
        error: payload,
      };
    default:
      return DEFAULT_STATE;
  }
};

export default galleryReducer;
