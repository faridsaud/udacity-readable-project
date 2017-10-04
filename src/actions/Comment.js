export const REMOVE_COMMENT = "REMOVE_COMMENT"
export const CREATE_COMMENT = "CREATE_COMMENT"
export const ADD_VOTE_COMMENT = "ADD_VOTE_COMMENT"
export const REMOVE_VOTE_COMMENT = "REMOVE_VOTE_COMMENT"
export const UPDATE_COMMENT = "UPDATE_COMMENT"
export const SET_COMMENTS = "SET_COMMENTS"


export function removeComment({id, parentId}) {
    return {
        type: REMOVE_COMMENT,
        id,
        parentId
    }
}


export function createComment(comment) {
    return {
        type: CREATE_COMMENT,
        comment
    }
}


export function addVote({id}) {
    return {
        type: ADD_VOTE_COMMENT,
        id
    }
}


export function removeVote({id}) {
    return {
        type: REMOVE_VOTE_COMMENT,
        id
    }
}


export function updateComment(comment) {
    return {
        type: UPDATE_COMMENT,
        comment
    }
}


export function setComments(comments) {
    return {
        type: SET_COMMENTS,
        comments
    }
}



