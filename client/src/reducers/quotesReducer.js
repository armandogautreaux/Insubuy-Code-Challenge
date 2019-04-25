import _ from 'lodash';
import { GET_QUOTES, GET_QUOTES_ERROR, POST_NEW_QUOTE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_QUOTES:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
  }
};
