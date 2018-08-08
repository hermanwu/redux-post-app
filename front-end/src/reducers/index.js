import {
  ADD_POST,
  LOAD_POSTS,
} from '../actions'

const initialPostsState = {
  posts: [
  ]
}

function posts (state = initialPostsState, action) {
  const {id, name, posts} = action;

  switch (action.type) {
    case LOAD_POSTS:
      return {
        posts
      }
    case ADD_POST:
      state.posts.push({id: id, 
                        name: name});
      return state
    default:
      return state
  }
}

export default posts