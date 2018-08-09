import _ from 'lodash';
import { FETCH_POSTS, SUBMIT_POST } from '../actions';


export default function(state = {}, action) {
  switch(action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case SUBMIT_POST:
      return 'the api post function(action.payload.data)';
    default:
      return state;
  }
}