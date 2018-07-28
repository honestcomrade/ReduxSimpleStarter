import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';

const API_ROOT = `http://reduxblog.herokuapp.com/api`;
const API_KEY = `jason22918`;

export function fetchPosts() {
  const req = axios.get(`${API_ROOT}/posts?key=${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: req,
  };
}