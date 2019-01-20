import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CompanyList from './CompanyList';
import { Link } from 'react-router-dom';
import { formatDate } from './CompanyForm';

class CompanyPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let company = this.props.company;
    return (
      <div>
        <h1>{company.name}</h1>
        <p>ОГРН: {company.ogrn}</p>
        <p>Тип: {company.type}</p>
        <p>Дата регистрации: {formatDate(company.registrationDate)}</p>
        <p>Активен: {company.active ? 'Да' : 'Нет'}</p>
        <Link to={{ pathname: "/companies/edit/"+company.id }}>Редактировать</Link>
      </div>
    );
  }
}

CompanyPage.propTypes = {

};

function getCompanyById(companies, id) {
  let company = companies.find(company => company.id == id)
  return Object.assign({}, company)
}

function mapStateToProps(state, ownProps) {
  let company = { id: 0, name: '', ogrn: '', type: '', registrationDate: '', active: false };
  if (ownProps.company) {
    company = Object.assign({}, ownProps.company);
  } else {
    const companyId = ownProps.match.params.id;
    if (companyId && state.companies.data.length > 0) {
      company = getCompanyById(state.companies.data, companyId);
    }
  }
  return { company: company };
}

export default connect(mapStateToProps)(CompanyPage);
