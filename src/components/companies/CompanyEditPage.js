import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadCompanyToEditForm } from '../../actions/companiesActions';
import CompanyList from './CompanyList';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import CompanyPage from './CompanyPage';
import CompanyForm from './CompanyForm';

class CompanyEditPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      company: Object.assign({}, this.props.company),
      saving: false
    };
    this.saveCompany = this.saveCompany.bind(this);
    this.props.dispatch(loadCompanyToEditForm(this.props.company));
  }

  saveCompany(event) {
    this.setState({saving: true, company: Object.assign(this.state.company, event)});
  }

  render() {
    let company = this.state.company;
    return (
      <div>
        <CompanyForm onSubmit={this.saveCompany} enableReinitialize={true} />
        { this.state.saving
          ? <CompanyPage company={company}/>
          : '' }
      </div>
    );
  }
}

CompanyEditPage.propTypes = {

};

const getCompanyById = (companies, id) => {
  let company = companies.find(company => company.id == id)
  return Object.assign({}, company)
}

const mapStateToProps = (state, ownProps) => {
  let company = { id: 0, name: '', ogrn: '', type: '', registrationDate: '', active: false };
  const companyId = ownProps.match.params.id;
  if (companyId && state.companies.data.length > 0) {
    company = getCompanyById(state.companies.data, companyId);
  }
  return { company: company };
}

export default connect(mapStateToProps)(CompanyEditPage);
