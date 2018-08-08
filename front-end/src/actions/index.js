export const ADD_POST = 'ADD_POST';
export const LOAD_POSTS = 'LOAD_POSTS';

export function addPost ({ id, name }) {
  return {
    type: ADD_POST,
    id,
    name,
  }
}

export function loadPosts (posts) {
  return {
    type: LOAD_POSTS,
    posts,
  }
}