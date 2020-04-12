import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducer  from "./reducer";
import tokenStorage from "../utils/token";

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(tokenStorage)));

export default store;