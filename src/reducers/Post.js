import {
    ADD_CATEGORY_POSTS,
    ADD_VOTE_POST,
    CREATE_POST,
    REMOVE_POST,
    REMOVE_VOTE_POST,
    REPLACE_POST,
    SET_POSTS,
    UPDATE_POST
} from "../actions/Post";

const initialStatePosts = {
    posts: []
};


export default function post(state = initialStatePosts, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case REMOVE_POST :
            newState.posts.find(post => post.id === action.id).deleted = true;
            return newState;

        case ADD_CATEGORY_POSTS:
            let posts = newState.posts.filter((post) => post.category !== action.categoryName);
            posts = posts.concat(action.posts);
            newState.posts = posts;
            return newState;

        case CREATE_POST:
            newState.posts.push(action.post);
            return newState;

        case ADD_VOTE_POST:
            newState.posts.find(post => post.id === action.id).voteScore += 1;
            return newState;

        case REMOVE_VOTE_POST:
            newState.posts.find(post => post.id === action.id).voteScore -= 1;
            return newState;

        case UPDATE_POST:
            let post = state.posts.find(post => post.id === action.post.id);
            post.body = action.post.body;
            post.title = action.post.title;
            return newState;

        case REPLACE_POST:
            newState.posts = newState.posts.filter((post) => post.id !== action.post.id);
            newState.posts.push(action.post);
            return newState;

        case SET_POSTS:
            return {
                posts: action.posts
            };

        default :
            return state
    }
}