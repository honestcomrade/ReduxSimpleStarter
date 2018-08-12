import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitPost } from '../../actions';
class NewPost extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          Label="Title"
          type="text"
          component={this.renderField}
        />
        <Field
          name="categories"
          Label="Categories"
          type="text"
          component={this.renderField}
        />
        <Field
          name="content"
          Label="Content"
          type="text"
          component={this.renderField}
        />
        <Field
          name="print"
          Label="Print"
          type="checkbox"
          component={this.renderField}
        />
          <button 
            className="btn btn-success" 
            type="submit"
            >Submit
          </button>
          <Link
            className="btn btn-danger"
            to="/posts"
            >Cancel
          </Link>
      </form>
    );
  };
  
  onSubmit(values) {
    this.props.submitPost(values, () => {
      this.props.history.push('/');
    });
  };

  renderField(field) {
    const { meta: { error, touched } } = field; 
    const errorClass = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={errorClass}>
      <label htmlFor="">{field.Label}</label>
        <input className="form-control"
          type={field.type}
          {...field.input}
        />
        <div className="text-help">
          <p>{touched ? error : ''}</p>
        </div>
      </div>
    );
  };
};

const validate = (values) => {
  const errors = {};
  if(!values.title) {
    errors.title = 'Title must have 3 or more characters';
  }
  if(!values.categories) {
    errors.categories = 'Must select at least one category';
  }
  if(!values.content) {
    errors.content = 'Must have some content';
  }
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  validate,
})(
  connect(null, { submitPost })(NewPost)
);
