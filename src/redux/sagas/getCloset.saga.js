import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// this saga will send the id of the user to the server and get the closet content for that user
function* getCloset(action) {
  try {
    const response = yield axios.get(`/api/closet`);
    console.log( 'in GET closet saga', response.data );
    yield put({ type: 'SET_CLOSET', payload: response.data });
  } catch (error) {
    console.log('error in GET closet saga', error);
  }
}

// Saga that will get all closets if user has multiple
function* getAllClosetsSaga() {
    yield takeEvery('GET_ALL_CLOSETS', getCloset);
}

export default getAllClosetsSaga;