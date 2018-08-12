import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const SUBMIT_POST = 'submit_post';
const ROOT_URL = `http://reduxblog.herokuapp.com/api`;
const API_KEY = `?key=jason88192`;


export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  }
};

export const fetchPost = (id) => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request,
  }
};

export const submitPost = (values, cb) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
  .then(() => cb());
  return {
    type: SUBMIT_POST,
    payload: request,
  }
};