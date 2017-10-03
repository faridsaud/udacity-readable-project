import {SET_CATEGORIES} from "../actions/Category";

const initialStateCategories = {
    categories: []
};


export default function category(state = initialStateCategories, action) {

    switch (action.type) {
        case SET_CATEGORIES :
            return {
                categories: action.categories
            };
        default :
            return state
    }
}