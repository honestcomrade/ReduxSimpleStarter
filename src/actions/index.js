import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const SUBMIT_POST = 'submit_post';
const ROOT_URL = `http://reduxblog.herokuapp.com/api`;
const API_KEY = `?key=jason88192`;


export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  }
}

export const submitPost = (values) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);
  return {
    type: SUBMIT_POST,
    payload: request,
  }
}