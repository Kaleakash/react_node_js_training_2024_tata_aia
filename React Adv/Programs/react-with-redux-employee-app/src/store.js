import {applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import reducer from "./reducer";
import loginreducer from "./loginreducer";
import { thunk } from "redux-thunk";

let combinedReduer = combineReducers({
    reducer:reducer,
    loginreducer:loginreducer
})

const store = createStore(combinedReduer,applyMiddleware(thunk));

//const store = createStore(reducer);

export default store;