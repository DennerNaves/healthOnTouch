import {createStore, combineReducers} from "redux";
import reducer from "./reducers/index"


const rootReducer = combineReducers({
    communicate: reducer
})

const store = createStore(rootReducer)

export default store