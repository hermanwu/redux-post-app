import { combineReducers } from 'redux'

import {
  ADD_POST,
  LOAD_POSTS,
  UPVOTE_POST,
  LOAD_CATEGORIES,
} from '../actions'

const categories = (categoriesState = [], action) => {
  const {categories} = action;


  switch (action.type) {
    case LOAD_CATEGORIES:
      return categories

    default:
      return categoriesState
  }
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
    */
    case UPVOTE_POST:
      const index = postsState.findIndex(p => p.id === id);
      const newScore = postsState[index].voteScore + 1;

      return [
        ...postsState.slice(0, index), // everything before current post
        {
          ...postsState[index],
          voteScore: newScore,
        },
        ...postsState.slice(index + 1), // everything after current post
      ]

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
