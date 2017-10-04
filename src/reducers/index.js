import {combineReducers} from "redux";
import comment from "./Comment";
import category from "./Category";
import post from "./Post";


export default combineReducers({
    comment,
    category,
    post
})