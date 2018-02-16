import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';

import { Link } from 'react-router';
class PostsShow extends Component {
  static contextTypes={
    router: PropTypes.object
  }
  componentWillMount(){
    this.props.fetchPost(this.props.params.id)
  }

  onDeleteClick(){
    this.props.deletePost(this.props.params.id)
    .then(()=>{
        this.context.router.push('/');
    })
  }
render(){
  //const { post } =this.porps
  if(! this.props.post){
    return <div> Loading..</div>
  }
  return( <div>
    <Link to="/" >back</Link>
    <button className=" btn btn-danger pull-xs-right"
      onClick= {this.onDeleteClick.bind(this)}>
      Delete Post
    </button>
    <h3> { this.props.post.title}</h3>
    <h6> categories: {this.props.post.categories}</h6>
    <p>{this.props.post.content}</p>
  </div>
)
    }
    }

    function mapStateToProps(state){
      return { post: state.posts.post }
    }
    export default connect(mapStateToProps,{ fetchPost, deletePost }) (PostsShow)

    // when the function is successfull then we navigate
    // back to the index route at this tyep we use contextTypes
