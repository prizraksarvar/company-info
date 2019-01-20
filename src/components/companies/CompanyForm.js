import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import renderDatePicker from '../common/renderDatePicker';

export const formatDate = (value, name) => {
  return typeof value === "string" ? value.substring(0,10) : value;
};

const normalizeDate = (value, previousValue, allValues, previousAllValues, name) => {
  return value && typeof value === "object"?value.toISOString():value;
};

let CompanyForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Название</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Название"
          />
        </div>
      </div>
      <div>
        <label>ОГРН</label>
        <div>
          <Field
            name="ogrn"
            component="input"
            type="text"
            placeholder="ОГРН"
          />
        </div>
      </div>
      <div>
        <label>Тип</label>
        <div>
          <Field name="type" component="select">
            <option />
            <option value="ООО">ООО</option>
            <option value="ИП">ИП</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Дата регистрации</label>
        <div>
          <Field
            name="registrationDate"
            component={renderDatePicker}
            format={formatDate}
            normalize={normalizeDate}
          />
        </div>
      </div>
      <div>
        <label htmlFor="active">Активен</label>
        <div>
          <Field
            name="active"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <button type="submit" disabled={submitting}>
        Сохранить
      </button>
    </form>
  )
};

CompanyForm = reduxForm({
  form: 'companyEditForm'
})(CompanyForm);

CompanyForm = connect(state => ({
    initialValues: state.companyEditForm.data
}))(CompanyForm);

export default CompanyForm;
