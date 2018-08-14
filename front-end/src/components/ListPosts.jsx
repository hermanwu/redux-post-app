import * as ReableAPI from '../utils/api.jsx';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListPosts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
  }

  update = (item) => {
    ReableAPI.upvote(item);
  }


render() {
    let posts = this.props.posts;


    if (this.props.match) {
      posts = posts.filter(post => post.category === this.props.match.params.category);
    }

    return (
      <ul className='food-list'>
        {
          posts.map((item) => (
            <li key={item.id}>
              <button onClick={() => this.update(item)}>up</button>
              <span>{item.voteScore}</span>

              <div>{item.title}</div>
              <div>{item.author}</div>
              <div>{item.body}</div>
              <div>{item.category}</div>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default ListPosts;