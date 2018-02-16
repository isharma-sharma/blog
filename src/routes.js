import React from 'react';
import { Route, IndexRoute }  from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
export default (
<Route path = "/" component = {App} >
  <IndexRoute component = {PostsIndex} />
  <Route path="posts/new" component={PostsNew} />
  <Route path="posts/:id" component={PostsShow} />
  {/* // works when route matches  the parents */}
</Route>
  )

// this.props.pramas.id
//done by react router pramas say specificaly that :id is a parameter is the url
