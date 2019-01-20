import {combineReducers} from 'redux';
import companies from './companiesReducer';
import companyEditForm from './companyEditFormReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  companies,
  companyEditForm,
  form: reduxFormReducer
})

export default rootReducer;
