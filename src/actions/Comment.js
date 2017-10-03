export const REMOVE_COMMENT = "REMOVE_COMMENT"
export const ADD_COMMENT = "ADD_COMMENT"
export const ADD_VOTE = "ADD_VOTE"
export const REMOVE_VOTE = "REMOVE_VOTE"
export const UPDATE_COMMENT = "UPDATE_COMMENT"
export const SET_COMMENTS = "SET_COMMENTS"



export function removeComment ({id, parentId}) {
    return {
        type: REMOVE_COMMENT,
        id,
        parentId
    }
}


export function addComment (comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}


export function addVote ({id}) {
    return {
        type: ADD_VOTE,
        id
    }
}


export function removeVote ({id}) {
    return {
        type: REMOVE_VOTE,
        id
    }
}


export function updateComment (comment) {
    return {
        type: UPDATE_COMMENT,
        comment
    }
}


export function setComments (comments) {
    return {
        type: SET_COMMENTS,
        comments
    }
}



