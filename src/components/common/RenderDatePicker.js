import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
  <div>
        <DatePicker {...input} dateFormat="MM.DD.YYYY" selected={input.value ? new Date(input.value) : null} />
        {touched && error && <span>{error}</span>}
  </div>
);

export default renderDatePicker;
