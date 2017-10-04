import {
    ADD_VOTE_COMMENT,
    CREATE_COMMENT,
    REMOVE_COMMENT,
    REMOVE_VOTE_COMMENT,
    SET_COMMENTS,
    UPDATE_COMMENT
} from "../actions/Comment";
import {REMOVE_POST} from "../actions/Post";

const initialStateComments = {};


export default function comment(state = initialStateComments, action) {

    switch (action.type) {
        case REMOVE_COMMENT :
            state.comments.find(comment => comment.id === action.id).deleted = true;
            return state;

        case REMOVE_POST :
            state.comments.filter(comment => comment.parentId === action.id).map(comment => {
                comment.parentDeleted = true;
            });
            return state;

        case CREATE_COMMENT:
            state.comments.push(action.comment);
            return state;

        case ADD_VOTE_COMMENT:
            state.comments.find(comment => comment.id === action.id).voteScore += 1;
            return state;

        case REMOVE_VOTE_COMMENT:
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