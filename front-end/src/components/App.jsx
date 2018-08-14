import React, { Component } from 'react';
import * as ReableAPI from '../utils/api.jsx';
import { addPost } from '../actions';
import { loadPosts } from '../actions';
import ListPosts from './ListPosts';
import { connect } from 'react-redux'


import { Link, Route } from 'react-router-dom';


class App extends Component {


  componentDidMount() {
    ReableAPI.getAllPosts().then((posts) => {
      this.props.loadPosts(posts);
    })

    ReableAPI.getCategories().then((categories) => {
      this.setState({categories})
    })

    //console.log(store.getState());
    /*
     store.subscribe(() => {
     this.setState(() => ({
     posts: store.getState().posts
     }))
     })
     */
  }

  /*
   submitPost = () => {
   this.props.store.dispatch(addPost({
   id: 3,
   name: this.input.value
   }))
   this.input.value = '';
   }
   */

  render() {

    let posts = this.props.posts;
    let categories = this.props.categories;

    return (
      <div>
        <Route exact path='/' render={() => (
          <div>

            {/*
            <ul className='categeries-list'>
              {this.state.categories.map((item) => (
                <li key={item.path}>
                  <Link to={`/${item.name}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
            */}

            <input
              type='text'
              ref={(input) => this.input = input}
              placeholder="Add posts"
            />
            <button onClick={this.submitPost}>Submit</button>

            <ListPosts posts={posts}></ListPosts>
          </div>
        )}/>


/*
        <Route path='/:category' render={
          (props) => (
            <ListPosts posts={this.posts} {...props}></ListPosts>
          )
        }/>
*/
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {

  console.log(state);
  return {
    posts: state.posts,
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPosts: (posts) => dispatch(loadPosts(posts)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)