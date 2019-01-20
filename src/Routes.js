import React from 'react';
import { Switch, Route } from 'react-router-dom'
import App from './components/App';
import CompaniesPage from './components/companies/CompaniesPage';
import CompanyPage from './components/companies/CompanyPage';
import CompanyEditPage from './components/companies/CompanyEditPage';

const Routes = () => (
  <Switch>
    <Route path="/companies/edit/:id" component={CompanyEditPage} />
    <Route path="/companies/:id" component={CompanyPage} />
    <Route path="/companies" component={CompaniesPage} />
    <Route path="/" exact component={CompaniesPage} />
  </Switch>
);

export default Routes;
