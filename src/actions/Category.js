export const SET_CATEGORIES = "SET_CATEGORIES"

export function setCategories ({categories}) {
    return {
        type: ADD_RECIPE,
        categories
    }
}
