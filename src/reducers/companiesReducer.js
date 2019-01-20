import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function companiesReducer(state = initialState.companies, action) {
  switch(action.type) {
    case types.LOAD_COMPANIES_STARTED:
      return Object.assign({},state,{loading: true, error: false});
    case types.LOAD_COMPANIES_SUCCESS:
      return Object.assign({},state,{loading: false, error: false, data: action.companies});;
    case types.LOAD_COMPANIES_FAILED:
      return Object.assign({},state,{loading: false, error: true});
    default:
      return state;
  }
}
