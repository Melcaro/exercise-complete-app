import {
  FETCH_GALLERY,
  FETCH_GALLERY_SUCCESS,
  FETCH_GALLERY_FAILURE,
} from '../actionsTypes';

import { fetchGallery as getGallery } from '../services/GallerySrv';

export const fetchGallery = () => async dispatch => {
  try {
    dispatch({ type: FETCH_GALLERY });
    const gallery = await getGallery();

    console.log(gallery);

    dispatch({ type: FETCH_GALLERY_SUCCESS, payload: gallery });
  } catch (e) {
    dispatch({ type: FETCH_GALLERY_FAILURE, payload: e });
  }
};
