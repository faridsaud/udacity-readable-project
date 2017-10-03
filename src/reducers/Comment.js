import {ADD_COMMENT, ADD_VOTE, REMOVE_COMMENT, REMOVE_VOTE, UPDATE_COMMENT} from "../actions/Comment";

const initialStateComments = {
    comments: []
};


export default function comments(state = initialStateComments, action) {

    switch (action.type) {
        case REMOVE_COMMENT :
            state.comments.find(comment => comment.id === action.id).deleted = true;
            return state;

        case CREATE_COMMENT:
            state.comments.push(action.comment);
            return state;

        case ADD_VOTE:
            state.comments.find(comment => comment.id === action.id).voteScore += 1;
            return state;

        case REMOVE_VOTE:
            state.comments.find(comment => comment.id === action.id).voteScore -= 1;
            return state;

        case UPDATE_COMMENT:
            state.comments.find(comment => comment.id === action.comment.id).body = action.comment.body;
            return state;

        case SET_COMMENTS:
            return {
                comments: action.comments
            };

        default :
            return state
    }
}