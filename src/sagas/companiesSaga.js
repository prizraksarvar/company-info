import CompaniesApi from '../api/companiesApi';
import * as types from '../actions/actionTypes';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {loadCompaniesStart, loadCompaniesSuccess, loadCompaniesFailed} from '../actions/companiesActions';

function* loadCompaniesAsync() {
  try {
    yield put(loadCompaniesStart());
    const data = yield call(CompaniesApi.fetchAllAsync);
    yield put(loadCompaniesSuccess(data));
  } catch (error) {
    yield put(loadCompaniesFailed(error));
  }
}

function* watchLoadCompanies() {
  yield takeEvery(types.LOAD_COMPANIES, loadCompaniesAsync);
}

export default watchLoadCompanies;
