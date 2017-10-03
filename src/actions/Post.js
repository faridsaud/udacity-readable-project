export const SET_POSTS = "SET_POSTS"
export const UPDATE_POST = "UPDATE_POST"
export const CREATE_POST = "CREATE_POST"
export const REMOVE_POST = "REMOVE_POST"


export function setPosts({posts}) {
    return {
        type: SET_POSTS,
        posts
    }
}

export function updatePost({post}) {
    return {
        type: UPDATE_POST,
        post
    }
}

export function createPost({post}) {
    return {
        type: CREATE_POST,
        post
    }
}

export function removePost({id}) {
    return {
        type: REMOVE_POST,
        id
    }
}



