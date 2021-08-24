import { combineReducers } from "redux";
import { selectedUserReducer, UserReducer } from "./Users/user-reducers";


const reducers = combineReducers({
    UserReducer:UserReducer,
    selectedUserReducer:selectedUserReducer,
})

export default reducers;