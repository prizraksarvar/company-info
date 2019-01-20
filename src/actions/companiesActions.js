import * as types from './actionTypes';
import CompaniesApi from '../api/companiesApi';

// TODO: change to redux-saga
export const loadCompanies = () => {
  return { type: types.LOAD_COMPANIES }
}

export const loadCompaniesStart = () => {
  return {type: types.LOAD_COMPANIES_STARTED};
}

export const loadCompaniesSuccess = (data) => {
  return {type: types.LOAD_COMPANIES_SUCCESS, companies: data.data};
}

export const loadCompaniesFailed = (error) => {
  return {type: types.LOAD_COMPANIES_FAILED, error: error};
}

export const loadCompanyToEditForm = (data) => {
  return { type: types.LOAD_COMPANY_EDIT_FORM, data };
}
