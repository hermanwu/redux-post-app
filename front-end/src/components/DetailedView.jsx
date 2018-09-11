import React, { Component } from 'react'
import * as ReableAPI from "../utils/api";

class DetailedView extends Component {
  componentDidMount() {
    if (this.props.match.params) {
      debugger;
      ReableAPI.getPost(this.props.match.params.id).then((post) => {
        console.log(post);
      })
    }
  }

  render() {
    let id;

    if (this.props.match) {
      id = this.props.match.params.id;
    }

    return (
      <div>{id}</div>
    )
  }
}

export default DetailedView;