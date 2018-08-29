export const ADD_POST = 'ADD_POST';
export const LOAD_POSTS = 'LOAD_POSTS';
export const UPVOTE_POST = 'UPVOTE_POST';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export function addPost({id, name}) {
  return {
    type: ADD_POST,
    id,
    name,
  }
}

export function upvotePost(id) {
  return {
    type: UPVOTE_POST,
    id,
  }
}

export function loadPosts(posts) {
  return {
    type: LOAD_POSTS,
    posts,
  }
}


export function loadCategories(categories) {
  return {
    type: LOAD_CATEGORIES,
    categories,
  }
}