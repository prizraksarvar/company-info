import * as types from './actionTypes';
import CompaniesApi from '../api/companiesApi';

// TODO: change to redux-saga
export function loadCompanies() {
  return { type: types.LOAD_COMPANIES }
}

export function loadCompaniesStart() {
  return {type: types.LOAD_COMPANIES_STARTED};
}

export function loadCompaniesSuccess(data) {
  return {type: types.LOAD_COMPANIES_SUCCESS, companies: data.data};
}

export function loadCompaniesFailed(error) {
  return {type: types.LOAD_COMPANIES_FAILED, error: error};
}

export function loadCompanyToEditForm(data) {
  return { type: types.LOAD_COMPANY_EDIT_FORM, data };
}
