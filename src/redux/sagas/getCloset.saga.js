import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// this saga will send the id of the user to the server and get the closet content for that user
function* getCloset(action) {
  // console.log( 'in getCloset saga');
  try {
    const response = yield axios.get(`/api/closet`);
    yield put({ type: 'SET_CLOSET', payload: response.data });
  } 
    catch (err) {
    console.log('error in GET closet saga', err);
    alert('error getting closet');
  }
}

// Saga that will get all closets if user has multiple
function* getAllClosetsSaga() {
    yield takeEvery('FETCH_CLOSET', getCloset);
}

export default getAllClosetsSaga;