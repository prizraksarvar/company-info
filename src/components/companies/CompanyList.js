import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatDate } from './CompanyForm';

const CompanyList = ({companies}) => {
  return (
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th>ОГРН</th>
            <th>Тип компании</th>
            <th>Дату регистрации</th>
            <th>Активен</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(company =>
            <tr key={company.id}>
              <td>{company.id}</td>
              <td><Link to={{ pathname: "/companies/"+company.id }}>{company.name}</Link></td>
              <td>{company.ogrn}</td>
              <td>{company.type}</td>
              <td>{formatDate(company.registrationDate)}</td>
              <td>{company.active?"Да":"Нет"}</td>
            </tr>
          )}
        </tbody>
      </table>
  );
};

CompanyList.propTypes = {
  companies: PropTypes.array.isRequired
};

export default CompanyList;
