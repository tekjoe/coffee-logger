import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import entriesReducer from "../reducers/entries";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({ entries: entriesReducer }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
