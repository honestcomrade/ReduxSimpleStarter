import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import NewPost from './components/new-post';
import PostDetails from './components/post-details';
import PostsIndex from './components/posts-index';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route 
          path="/"    
          component={PostsIndex} />
        <Route 
          path="/post/:id"   
          component={PostDetails} />
        <Route 
          path="/posts/new" 
          component={NewPost} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
