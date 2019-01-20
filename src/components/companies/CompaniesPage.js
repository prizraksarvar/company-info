import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CompanyList from './CompanyList';

class CompaniesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  componentWillMount() {
    if (this.props.companies.data.lenght==0) {
      this.props.actions.loadCats();
      this.props.dispatch(loadCompanies());
    }
  }
  render() {
    return (
      <div className="col-md-12">
        <h1>Companies</h1>
        <div className="col-md-4">
          {this.props.companies.loading
            ? <p>Loading...</p>
            : '' }
          {this.props.companies.loading
            ? <p>Error load company</p>
            : '' }
          <CompanyList companies={this.props.companies.data} />
        </div>
      </div>
    );
  }
}

CompaniesPage.propTypes = {

};

const mapStateToProps = (state, ownProps) => {
  return {
      companies: state.companies
    };
}

export default connect(mapStateToProps)(CompaniesPage);
