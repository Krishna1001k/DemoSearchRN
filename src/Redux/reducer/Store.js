import { legacy_createStore,applyMiddleware } from "redux";
import rootReducer from ".";
import thunk from "redux-thunk";

const Store=legacy_createStore(rootReducer,applyMiddleware(thunk));

export default Store;