import {call, put, select} from '@redux-saga/core/effects';
import axios from 'axios';
import firestore from '@react-native-firebase/firestore';
export function* handleHomeApiData(action) {
  console.log('asdfasdfsdf', action);
  const {
    payload: {url},
  } = action;

  try {
    yield put({type: 'SET_MAINLOAD', payload: {mainLoading: true}});

    const resp = yield call(() => {
      return axios.get(url);
    });

    const {ApiData, Page, recentSearch, myText} = yield select(
      store => store.HomeReducer,
    );

    console.log('store data in saga api call', ApiData);

    if (Page > 1) {
      console.log('listData set');
      yield put({
        type: 'ADD_DATA',
        payload: {ApiData: [...ApiData, ...resp.data.results]},
      });

      yield put({type: 'SET_LISTLOAD', payload: {listLoading: false}});
    } else {
      yield put({type: 'ADD_DATA', payload: {ApiData: resp.data.results}});
      yield put({type: 'SET_MAINLOAD', payload: {mainLoading: false}});
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put({type: 'SET_MAINLOAD', payload: {mainLoading: false}});
    yield put({type: 'SET_LISTLOAD', payload: {listLoading: false}});
  }
}


export function* handlePhotosListApiCall(action) {
  const {
    payload: {url, page},
  } = action;

  try {
    const {photosList} = yield select(store => store.DetailReducer);

    yield put({type: 'LOADER', payload: true});

    const resp = yield call(() => {
      return axios.get(url);
    });

    if (page > 1)
      yield put({
        type: 'ADD_LIST',
        payload: {photosList: [...photosList, ...resp.data]},
      });
    else yield put({type: 'ADD_LIST', payload: {photosList: [...resp.data]}});
  } catch (err) {
    console.log(err);
  } finally {
    yield put({type: 'LOADER', payload: false});
  }
}


export function* handleRecentSearchPostApi(action) {
  console.log('saga recent search post on firestore', action);

  const {recentSearch, userUid} = yield select(store => store.HomeReducer);

  try {
    firestore().collection('Users').doc(userUid).set({recentSearch});
  } catch (error) {
    console.log(error);
  }
}

