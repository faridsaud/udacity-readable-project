import {combineReducers} from "redux";
import comments from "./Comment";
import categories from "./Category";
import posts from "./Post";


export default combineReducers({
    comments,
    categories,
    posts
})