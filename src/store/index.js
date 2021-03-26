import { createStore, applyMiddleware } from "../redux";
import thunk from "../middlewares/thunk";

import reducer from "./reducers";

const store = applyMiddleware(thunk)(createStore)(reducer);

export default store;
