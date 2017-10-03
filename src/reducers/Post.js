import {CREATE_POST, REMOVE_POST, SET_POSTS, UPDATE_POST, REMOVE_VOTE, ADD_VOTE} from "../actions/Post";

const initialStateComments = {
    posts: []
};


export default function posts(state = initialStateComments, action) {

    switch (action.type) {
        case REMOVE_POST :
            state.posts.find(post => post.id === action.id).deleted = true;
            state.comments.filter(comment => comment.parentId === action.id).map(comment => {
                comment.parentDeleted = true;
            });
            return state;

        case CREATE_POST:
            state.posts.push(action.post);
            return state;

        case ADD_VOTE:
            state.posts.find(post => post.id === action.id).voteScore += 1;
            return state;

        case REMOVE_VOTE:
            state.posts.find(post => post.id === action.id).voteScore -= 1;
            return state;

        case UPDATE_POST:
            let post = state.posts.find(post => post.id === action.post.id);
            post.body = action.post.body;
            post.title = action.post.title;
            return state;

        case SET_POSTS:
            return {
                posts: action.posts
            };

        default :
            return state
    }
}