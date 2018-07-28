import React, { Component } from 'react';

class NewPost extends Component {
  render() {
    return (
      <div>
        <h3>Submit a new post.</h3>
        <form action="submitPost">
          <label htmlFor="post-name">Post Name</label>
          <input type="text" className="form-group" id="post-name" />
          <label htmlFor="post-content">Content</label>
          <textarea type="text" className="form-group" id="post-content" />
        </form>
      </div>
    );
  }
}

export default NewPost;
