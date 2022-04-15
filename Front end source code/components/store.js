import reducer from "./reducer";
import {createStore} from "redux";

const initialState = {loggedin: false};

const myStore = createStore(reducer, initialState)
export default myStore;