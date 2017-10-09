const api = "http://127.0.0.1:3001/"

let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Authorization': token,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};


export const getCategories = () => {
    const url = api + "categories";
    return fetch(url, {method: "GET", headers}).then(res => res.json())
};


export const getPostsByCategory = (categoryName) => {
    const url = api + categoryName + "/posts";
    return fetch(url, {method: "GET", headers}).then(res => res.json())
};


export const getPosts = () => {
    const url = api + "posts";
    return fetch(url, {method: "GET", headers}).then(res => res.json())
};

export const addPost = ({id, timestamp, title, body, author, category}) => {
    const url = api + "posts";
    let post = {id, timestamp, title, body, author, category};
    return fetch(url, {method: "POST", headers, body: JSON.stringify(post)}).then(res => res.json())
};


export const getPostDetail = (postId) => {
    const url = api + "posts/" + postId;
    return fetch(url, {method: "GET", headers}).then(res => res.json())
};

export const upVotePost = (postId) => {
    const url = api + "posts/" + postId;
    return fetch(url, {
        method: "POST", headers, body: JSON.stringify({option: "upVote"})
    }).then(res => res.json())
};

export const downVotePost = (postId) => {
    const url = api + "posts/" + postId;
    return fetch(url, {
        method: "POST", headers, body: JSON.stringify({option: "downVote"})
    }).then(res => res.json())
};


export const updatePost = ({id, title, body}) => {
    const url = api + "posts/" + id;
    const post = {
        title,
        body
    }
    return fetch(url, {method: "PUT", headers, body: JSON.stringify(post)}).then(res => res.json())
};


export const deletePost = (postId) => {
    const url = api + "posts/" + postId;
    return fetch(url, {method: "DELETE", headers}).then(res => res.json())
};


export const getAllComentsByPost = (postId) => {
    const url = api + "posts/" + postId + "/comments";
    return fetch(url, {method: "GET", headers}).then(res => res.json())
};


export const addComment = ({id, timestamp, body, author, parentId}) => {
    const url = api + "comments";
    const comment = {id, timestamp, body, author, parentId};
    return fetch(url, {method: "POST", headers, body: JSON.stringify(comment)}).then(res => res.json())
};


export const getCommentDetail = (commentId) => {
    const url = api + "/comments/" + commentId;
    return fetch(url, {method: "POST", headers}).then(res => res.json())
};

export const upVoteComment = (commentId) => {
    const url = api + "comments/" + commentId;
    return fetch(url, {
        method: "POST", headers, body: JSON.stringify({option: "upVote"})
    }).then(res => res.json())
};

export const downVoteComment = (commentId) => {
    const url = api + "comments/" + commentId;
    return fetch(url, {
        method: "POST", headers, body: JSON.stringify({option: "downVote"})
    }).then(res => res.json())
};


export const updateComment = ({id, timestamp, body}) => {
    const url = api + "comments/" + id;
    const comment = {timestamp, body};
    return fetch(url, {method: "PUT", headers, body: JSON.stringify(comment)}).then(res => res.json())
};

export const deleteComment = (commentId) => {
    const url = api + "comments/" + commentId;
    return fetch(url, {method: "DELETE", headers}).then(res => res.json())
};



