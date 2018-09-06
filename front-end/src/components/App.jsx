import React, { Component } from 'react';
import * as ReableAPI from '../utils/api.jsx';
import { addPost, loadPosts, upvotePost } from '../actions';
import { loadCategories } from '../actions';
import ListPosts from './ListPosts';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import DetailedView from './DetailedView';


import { Link, Route } from 'react-router-dom';


class App extends Component {


  componentDidMount() {
    debugger;
    ReableAPI.getAllPosts().then((posts) => {
      this.props.loadPosts(posts);
    })

    ReableAPI.getCategories().then((categories) => {
      this.props.loadCategories(categories);
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
    const { posts, categories, upvotePost } = this.props;

    return (
      <div>

        <Route exact path='/' render={() => (

          <div>
            <ul className='categeries-list'>
              {categories.map((item) => (
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

            <ul className='food-list'>
              {
                posts.map((item) => (
                  <li key={item.id}>
                      <Link to={`/posts/${item.id}`}>{item.id}</Link>
                    <button onClick={() => upvotePost(item)}>up</button>
                    <span>{item.voteScore}</span>

                    <div>{item.title}</div>
                    <div>{item.author}</div>
                    <div>{item.body}</div>
                    <div>{item.category}</div>
                  </li>
                ))
              }
            </ul>
          </div>
        )}/>

        <Route path='/:category' render={
          (props) => (
            <ListPosts posts={posts} {...props}></ListPosts>
          )
        }/>

        <Route path="/posts/:id" render={
          (props) => (
            <DetailedView {...props}></DetailedView>
          )
        }/>


      </div>
    )
  }
};

function upvotePostApiCall(post) {
  debugger;

  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return (dispatch) => {
    ReableAPI.upvote(post)
      .then(() => {
        console.log('lallaa');
        dispatch(upvotePost(post.id))
      });
  };
}


const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: (categories) => dispatch(loadCategories(categories)),
    loadPosts: (posts) => dispatch(loadPosts(posts)),
    upvotePost: (post) => dispatch(upvotePostApiCall(post)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));