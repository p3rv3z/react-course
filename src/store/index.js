import { combineReducers, createStore } from "redux";
import testReducer from "./reducers/testReducer";

const reducers = combineReducers({
    test: testReducer,
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    trace: true
}))

export default store