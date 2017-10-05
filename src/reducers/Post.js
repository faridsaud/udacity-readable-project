import {
    ADD_CATEGORY_POSTS, ADD_VOTE_POST, CREATE_POST, REMOVE_POST, REMOVE_VOTE_POST, SET_POSTS,
    UPDATE_POST
} from "../actions/Post";

const initialStatePosts = {
    posts:[]
};


export default function post(state = initialStatePosts, action) {

    switch (action.type) {
        case REMOVE_POST :
            state.posts.find(post => post.id === action.id).deleted = true;
            return state;

        case ADD_CATEGORY_POSTS:
            let posts = state.posts.filter((post)=> post.category!==action.categoryName);
            posts = posts.concat(action.posts);
            state.posts = posts;
            return {
                posts
            };

        case CREATE_POST:
            state.posts.push(action.post);
            return state;

        case ADD_VOTE_POST:
            state.posts.find(post => post.id === action.id).voteScore += 1;
            return state;

        case REMOVE_VOTE_POST:
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