import { combineReducers } from 'redux'

import {
  ADD_POST,
  LOAD_POSTS,
  UPVOTE_POST,
  LOAD_CATEGORIES,
} from '../actions'

const categories = (categoriesState = [], action) => {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return categoriesState

    default:
      return categoriesState
  }
};

const initialPostsState = {
  posts: []
};

const posts = (postsState = [], action) => {
  const {id, name, posts} = action;

  switch (action.type) {
    /*
    case ADD_POST:
      state.posts.push({
        id: id,
        name: name
      });
      return state

    case UPVOTE_POST:
      const index = state.posts.find(p => p.id === id),
            newScore = state.posts[index].voteScore;

      return [
        ...state.slice(0, index), // everything before current post
        {
          ...state[index],
          voteScore: newScore,
        },
        ...state.slice(index + 1), // everything after current post
      ]

    */
    case LOAD_POSTS:
      return posts


    default:
      return postsState
  }
};

export default combineReducers({
  categories: categories,
  posts: posts,
})
