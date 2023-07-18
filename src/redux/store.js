import { createStore, applyMiddleware, compose } from "redux";
import  thunkMiddleware from "redux-thunk";
import reducer from './reducer'


const composeEnHacer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

const store = createStore(
    reducer,
    composeEnHacer(applyMiddleware(thunkMiddleware))
);

export default store;
