import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        All posts
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
