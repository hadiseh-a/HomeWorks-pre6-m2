import { counterReducer } from "./reducers/reducer";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(counterReducer, composeWithDevTools());
