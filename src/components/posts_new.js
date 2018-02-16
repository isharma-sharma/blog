import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import { createPost } from '../actions/index';
import { Link } from 'react-router';
const FIELDS = {
  title:{
type: 'input',
label: 'Title for Post'
  },
  categories:{
    type: 'input',
    label: 'Enter aome categories for this post'
  },
  content:{
    type: 'textarea',
    label: 'Post Contents'

  }
}

class PostsNew extends Component {
static contextTypes={
  router: PropTypes.object
} //defining an object on PostsNew
onSubmit(props){
  this.props.createPost(props)
  .then(()=>{
    //blog post has been created, navigate the user to the index
    //We navigate by calling this.context.router.push withthe path to navigate to
    this.context.router.push('/');
  })
}

// fieldConfig is object with type and label  in FIELDS
rederField(fieldConfig, field) {
  const fieldHelper = this.props.fields[field]

  return(
    <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger':''}`}>
      <label>{fieldConfig.label}</label>
      <fieldConfig.type type="text" className="form-control" {...fieldHelper}  />
      <div className="text-help">
        {fieldHelper.touched ? fieldHelper.error : ""}
        {/* touched is the property we get from reduxform */}
      </div>
    </div>

  )
}
  render(){
    const { handleSubmit } = this.props;
    // const handleSubmit = this.props.handleSubmit   same as abouve handleSubmit is a function
// const title = this.props.fields.title
console.log(title)
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new post</h3>
        {_.map(FIELDS, this.renderField.bind(this))}
        {/*bind this because I'm making refrence to props inside of the helperfunction renderField */}

        <button type="submit" className="btn btn-primary">submit</button>
        <Link to="/" className="btn btn-danger">cancel</Link>
      </form>
    )
  }
}
// field is ['title','categories','content'] and type is configration like input andt exttarea
function validate(values){
  const errors={}
  _.each(FIELDS, (type, field) =>{
    if (!values[field]){
      errors[field] =`enter a $(field)`
    }
  })
  return errors
}
// connect first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form Config, 2nd is mapStateToProps and 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: _.keys(FIELDS),  // ['title','categories','content'];
  validate
},null,{ createPost })(PostsNew);
