import * as API from "../utils/Api";
import * as uuid from "uuid";


export const REMOVE_COMMENT = "REMOVE_COMMENT"
export const CREATE_COMMENT = "CREATE_COMMENT"
export const ADD_VOTE_COMMENT = "ADD_VOTE_COMMENT"
export const REMOVE_VOTE_COMMENT = "REMOVE_VOTE_COMMENT"
export const UPDATE_COMMENT = "UPDATE_COMMENT"
export const SET_COMMENTS = "SET_COMMENTS"
export const ADD_COMMENTS = "ADD_COMMENTS"


export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}


export function createComment(comment) {
    return {
        type: CREATE_COMMENT,
        comment
    }
}


export function addVote(id) {
    return {
        type: ADD_VOTE_COMMENT,
        id
    }
}


export function removeVote(id) {
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


export function addComments({comments, postId}) {
    return {
        type: ADD_COMMENTS,
        comments,
        postId
    }
}

export const fetchGetAllComentsByPost = (id) => dispatch => {
    return API.getAllComentsByPost(id).then((comments) => {
        dispatch(addComments({postId: id, comments}))
    })
};

export const fetchDownVoteComment = (id) => dispatch => {
    return API.downVoteComment(id).then(() => {
        dispatch(removeVote(id))
    })
};

export const fetchUpVoteComment = (id) => dispatch => {
    return API.upVoteComment(id).then(() => {
        dispatch(addVote(id))
    })
};


export const fetchCreateComment = ({body, author, parentId}) => dispatch => {
    let id = uuid.v1();
    let timestamp = Date.now();

    return API.addComment({id, timestamp, body, author, parentId}).then((comment) => {
        dispatch(createComment(comment))
    })
};


export const fetchDeleteComment = (id) => dispatch => {
    return API.deleteComment(id).then(() => {
        dispatch(removeComment(id))
    })
};

export const fetchUpdateComment = ({id, body}) => dispatch => {
    let timestamp = Date.now();
    return API.updateComment({id, timestamp, body}).then(() => {
        dispatch(updateComment({id, timestamp, body}))
    })
};

