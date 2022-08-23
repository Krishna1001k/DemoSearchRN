import {call, put, select} from '@redux-saga/core/effects';
import axios from 'axios';
import firestore from '@react-native-firebase/firestore';

/** handler function for home section Api Call in saga and set the data to home reduer
 * @param {*} action 
 */
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

    const {ApiData, Page,} = yield select(
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
    } 
    else {
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



/**
 * handler function for profile Detail photos section Api call in saga and set the data to detail reducer
 * @param {*} action 
 */
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

/**
 * handler function for post Recent Search in firestore
 * @param {*} action 
 */
export function* handleRecentSearchPostApi(action) {
  console.log('saga recent search post on firestore', action);

  const {recentSearch, userUid} = yield select(store => store.HomeReducer);

  try {
   const res= yield call (()=>{
    return (firestore().collection('Users').doc(userUid).set({recentSearch}))
  })

  console.log(res);

  }
   catch (error) {
    console.log(error);
  }
}
/**
 * handler function for Get Recent Search From firestore
 * @param {*} action 
 */
export function* handleRecentSearchGetApi(action) {
  console.log('saga recent search post on firestore', action);

  const {recentSearch, userUid} = yield select(store => store.HomeReducer);

  try {
    const response= yield call(firestore().collection('Users').doc(userUid).get())
    console.log('sdfghjkl;',response);
     
  }
   catch (error) {
    console.log(error);

  }
}

