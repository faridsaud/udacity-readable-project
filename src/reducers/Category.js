import {SET_CATEGORIES} from "../actions/Category";

const initialStateCategories = [];


export default function categories(state = initialStateCategories, action) {

    switch (action.type) {
        case SET_CATEGORIES :
            return {
                categories: action.categories
            };
        default :
            return state
    }
}