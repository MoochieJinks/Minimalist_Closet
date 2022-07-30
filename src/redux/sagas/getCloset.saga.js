import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* addClothes(action){
  console.log ('in addClothes saga', action);
  try {
    const response = yield axios.post('/api/closet', action.payload);
    yield put({ type: 'FETCH_CLOSET', payload: response.data });
  }
    catch( err) {
      console.log(err)
    }
}

function* deleteClothes(action) {
  console.log('in deleteClothes saga', action);
  try {
    yield axios.delete('/api/closet', action.payload);
    yield put({ type: 'FETCH_CLOSET' });
  }
  catch( err ){
    console.log('error in deleteClothes saga', err);
  }
}

// this saga will send the id of the user to the server and get the closet content for that user
function* getCloset(action) {
  // console.log( 'in getCloset saga');
  try {
    const response = yield axios.get(`/api/closet`);
    yield put({ type: 'SET_CLOSET', payload: response.data });
  } 
    catch (err) {
    console.log('error in GET closet saga', err);
  }
}

// Saga that will get all closets if user has multiple
function* getAllClosetsSaga() {
    yield takeEvery('FETCH_CLOSET', getCloset);
    yield takeEvery('ADD_CLOTHES', addClothes);
    yield takeEvery('DELETE_CLOTHES', deleteClothes);
}

export default getAllClosetsSaga;