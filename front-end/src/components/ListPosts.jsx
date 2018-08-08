import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListPosts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
  }

  render({history}) {
    const {posts} = this.props;

    return (
      <ul className='food-list'>
        {
          posts.map((item) => (
            <li key={item.id}>
              <div>{item.title}</div>
              <div>{item.author}</div>
              <div>{item.body}</div>
              <div>{item.category}</div>
              <div>{item.voteScore}</div>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default ListPosts;