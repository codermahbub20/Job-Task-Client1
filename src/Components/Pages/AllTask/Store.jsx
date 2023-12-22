// yourReduxStore.js
import { createStore } from "redux";
import rootReducer from "./yourReducer"; // Import your rootReducer

const store = createStore(rootReducer);

export default store;
