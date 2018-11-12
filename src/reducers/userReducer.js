import {AUTHENTICATED} from '../actions/userActions';

export default function userReducer(state='-1', {type, payload}) {
  switch(type) {
    case AUTHENTICATED:
      return payload.user_id;
    default:
      return state;
  }
}