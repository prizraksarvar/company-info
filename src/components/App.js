import React from 'react';
import PropTypes from 'prop-types';
import Routes from '../Routes';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Routes />
        {this.props.companies}
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
