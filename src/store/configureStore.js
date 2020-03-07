import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {createBrowserHistory} from "history";
import usersReducer from "./users";
import picturesReducer from "./pictures";
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import {loadStateFromLocalStorage, saveStateToLocalStorage} from "./localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    pictures: picturesReducer,
    users: usersReducer,
    router: connectRouter(history)
});

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];




const enhancers = composeEnhancers(applyMiddleware(...middleware));
const persistedState = loadStateFromLocalStorage();

export const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveStateToLocalStorage({
        users: {
            user: store.getState().users.user
        }
    });
});