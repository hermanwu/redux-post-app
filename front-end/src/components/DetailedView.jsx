import React, { Component } from 'react'
import * as ReableAPI from "../utils/api";

class DetailedView extends Component {
  render() {
    debugger;
    let id;

    if (this.props.match) {
      console.log(this.props);
      id = this.props.match.params.id;
    }

    return (
      <div>{id}</div>
    )
  }
}

export default DetailedView;