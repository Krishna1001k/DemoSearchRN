import { combineReducers } from "redux";
import HomeReducer from "../Home/reducer";
import DetailReducer from "../Detail/reducer";

 const rootReducer=combineReducers({
    HomeReducer,
    DetailReducer,
})

export default rootReducer;