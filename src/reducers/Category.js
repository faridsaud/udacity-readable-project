import {SET_CATEGORIES} from "../actions/Category";

const initialStateCategory = {
    categories:[]
};



export default function category(state=initialStateCategory, action) {

    switch (action.type) {
        case SET_CATEGORIES :
            return {
                categories: action.categories
            };
        default :
            return state
    }
}