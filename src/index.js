import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import NewPost from './components/new-post';
import PostDetails from './components/post-details';
import PostsIndex from './components/posts-index';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
          <Route 
            path="/posts/new" 
            component={NewPost} />
          <Route 
            path="/post/:id"   
            component={PostDetails} />
          <Route 
            path="/"    
            component={PostsIndex} />
        </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
