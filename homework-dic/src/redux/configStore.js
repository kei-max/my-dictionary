import { createStore, combineReducers, applyMiddleware } from "redux";
import dictionary from "./moudules/dictionary";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

export const history = createBrowserHistory();
const rootReducer = combineReducers({ dictionary });

const store = createStore(rootReducer, enhancer);

export default store;
