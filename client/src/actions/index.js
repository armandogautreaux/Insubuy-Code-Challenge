import api from '../api/api';
import { GET_QUOTES, GET_QUOTES_ERROR, POST_NEW_QUOTE } from './types';

//Get list of Insurance
export const getQuotes = () => {
  return async dispatch => {
    try {
      const response = await api.get('/');
      dispatch({ type: GET_QUOTES, payload: response.data.quotes });
      history.push('/results');
    } catch (error) {
      dispatch({
        type: GET_QUOTES_ERROR,
        payload: response.data.error
      });
    }
  };
};

//Post a new Quote

// Set New Date
//Set End Date
//Set Polici max
//Set Citizenship
//Set Age
//Set Mailing State
