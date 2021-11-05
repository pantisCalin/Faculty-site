import { combineReducers } from "redux";
import switchFunction from './itemReducer';

export default combineReducers({
    item: switchFunction
});