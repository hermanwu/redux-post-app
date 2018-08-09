import React, { Component } from 'react';
import * as ReableAPI from '../utils/api.js';
import { addPost } from '../actions';
import { loadPosts } from '../actions';
import ListPosts from './ListPosts';

import { Link, Route } from 'react-router-dom';


class App extends Component {
  state = {
    posts: [],
    categories: []
  }

  componentDidMount() {
    const {store} = this.props

    ReableAPI.getAllPosts().then((posts) => {
      // this.setState({posts});
      store.dispatch(loadPosts(posts));
    })

    ReableAPI.getCategories().then((categories) => {
      this.setState({categories})
    })

    //console.log(store.getState());
    store.subscribe(() => {
      this.setState(() => ({
        posts: store.getState().posts
      }))
    })
  }

  submitPost = () => {
    this.props.store.dispatch(addPost({
      id: 3,
      name: this.input.value
    }))
    this.input.value = '';
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <div>
            <ul className='categeries-list'>
              {this.state.categories.map((item) => (
                <li key={item.path}>
                  <Link to={`/${item.name}`}>{item.name}</Link>
                </li>
              ))}
            </ul>


            <input
              type='text'
              ref={(input) => this.input = input}
              placeholder="Add posts"
            />
            <button onClick={this.submitPost}>Submit</button>

            <ListPosts posts={this.state.posts}></ListPosts>
          </div>
        )}/>

        <Route path='/:category' render={
          (props) => (
            <ListPosts posts={this.state.posts} {...props}></ListPosts>
          )
        }/>
      </div>
    )
  }
}

export default App