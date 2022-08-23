import { legacy_createStore,applyMiddleware } from "redux";
import { configureStore,} from "@reduxjs/toolkit";
import rootReducer from "../reducer";
import {takeEvery,takeLatest} from "redux-saga/effects"
import createSagaMiddleware from "@redux-saga/core";
import logger from 'redux-logger'
import { handleHomeApiData,handleRecentSearchPostApi,handlePhotosListApiCall} from "./handlers";


const sagaMiddleware =createSagaMiddleware();

// const sagaStore=legacy_createStore(rootReducer,applyMiddleware(sagaMiddleware,logger));

const sagaStore=configureStore({
    reducer:rootReducer,
    middleware:[sagaMiddleware,logger]
})

function* watcherSaga(){
    yield takeEvery("GET_DATA",handleHomeApiData);
    yield takeEvery("SET_RECENT_SEACRH_ON_FIRESTORE",handleRecentSearchPostApi);
    yield takeLatest("GET_RECENT_SEACRH_FROM_FIRESTORE",handleRecentSearchPostApi);
    yield takeEvery("SAGA_ADD_LIST_PHOTOS",handlePhotosListApiCall)
}

sagaMiddleware.run(watcherSaga);

export default sagaStore;