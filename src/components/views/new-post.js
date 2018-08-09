import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

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
      </form>
    );
  };
  onSubmit(values) {
    console.log(values);
  }
  renderField(field) {
    return (
      <div className="form-group">
      <label htmlFor="">{field.Label}</label>
        <input className="form-control"
          type={field.type}
          {...field.input}
        />
        <p>{field.meta.error}</p>
      </div>
    );
  };
};

const validate = (values) => {
  const errors = {};
  for (const prop in values) {
    if (!values[prop]) {
      errors[prop] = `Missing value for ${prop}`;
    }
  };
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  validate,
})(NewPost);
