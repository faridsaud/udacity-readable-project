import {
    ADD_COMMENTS,
    ADD_VOTE_COMMENT,
    CREATE_COMMENT,
    REMOVE_COMMENT,
    REMOVE_VOTE_COMMENT,
    SET_COMMENTS,
    UPDATE_COMMENT
} from "../actions/Comment";
import {REMOVE_POST} from "../actions/Post";

const initialStateComments = {
    comments: []
};


export default function comment(state = initialStateComments, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case REMOVE_COMMENT :
            newState.comments.find(comment => comment.id === action.id).deleted = true;
            return newState;

        case REMOVE_POST :
            newState.comments.filter(comment => comment.parentId === action.id).map(comment => {
                comment.parentDeleted = true;
            });
            return newState;

        case CREATE_COMMENT:
            newState.comments.push(action.comment);
            return newState;

        case ADD_VOTE_COMMENT:
            newState.comments.find(comment => comment.id === action.id).voteScore += 1;
            return newState;

        case REMOVE_VOTE_COMMENT:
            newState.comments.find(comment => comment.id === action.id).voteScore -= 1;
            return newState;

        case UPDATE_COMMENT:
            let commentUpdated = newState.comments.find(comment => comment.id === action.comment.id);
            commentUpdated.body = action.comment.body;
            commentUpdated.timestamp = action.comment.timestamp;
            return newState;

        case ADD_COMMENTS:
            newState.comments = newState.comments.filter(comment => comment.parentId !== action.postId);
            newState.comments = newState.comments.concat(action.comments);
            return newState;

        case SET_COMMENTS:
            return {
                comments: action.comments
            };

        default :
            return state
    }
}