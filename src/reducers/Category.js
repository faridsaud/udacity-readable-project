import {SET_CATEGORIES} from "../actions/Category";




export default function category(state={}, action) {

    switch (action.type) {
        case SET_CATEGORIES :
            return {
                categories: action.categories
            };
        default :
            return state
    }
}