import _ from 'lodash';
import React, { Component } from 'react';
import { connect  } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

class PostsIndex extends Component {
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <Link to="/post/post._id" key={ post.id }>
          <li className="list-group-item">
            { post.title }
          </li>
        </Link>
      );
    });
  };

  componentDidMount() {
    this.props.fetchPosts();
  };

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link 
            className="btn btn-primary"
            to="/posts/new">
              Submit a new post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  };
};

const mapStateToProps = (state) => { return { posts: state.posts }; };

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
