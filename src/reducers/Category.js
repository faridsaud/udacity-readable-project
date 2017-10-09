import {SET_CATEGORIES} from "../actions/Category";

const initialStateCategory = {
    categories: [],
    isFetch: false
};


export default function category(state = initialStateCategory, action) {

    switch (action.type) {
        case SET_CATEGORIES :
            return {
                categories: [...action.categories],
                isFetch: true
            };
        default :
            return state
    }
}