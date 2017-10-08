import * as API from '../utils/Api'

export const SET_CATEGORIES = "SET_CATEGORIES"

export function setCategories(categories) {
    return {
        type: SET_CATEGORIES,
        categories
    }
}

export const fetchGetCategories = () => dispatch => (
    API.getCategories().then(data => {
        dispatch(setCategories(data.categories))
    })
);
