import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListPosts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
  }

  render() {
    let {posts} = this.props;

    if (this.props.match) {
      posts = posts.filter(post => post.category === this.props.match.params.category);
    }

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