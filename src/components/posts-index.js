import React, { Component } from 'react';
import { connect  } from "react-redux";
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    console.log(this.props.posts);
    return (
      <h3>
        All posts
      </h3>
    );
  };
};

function mapStateToProps(state) {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex);
