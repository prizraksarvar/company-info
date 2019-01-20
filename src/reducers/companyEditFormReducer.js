import * as types from '../actions/actionTypes';
import initialState from './initialState';

const companyEditFormReducer = (state = initialState.companyEditForm, action) => {
  switch(action.type) {
    case types.LOAD_COMPANY_EDIT_FORM:
      return Object.assign({},state,{ loading: false, error: false, data: action.data });
    default:
      return state;
  }
};

export default companyEditFormReducer;
