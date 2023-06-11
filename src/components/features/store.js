import { createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { dataReducer } from "./datas/dataReducer";

const reducers=combineReducers({
    datas:dataReducer
})

export const store=createStore(reducers,composeWithDevTools());