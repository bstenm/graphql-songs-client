import './Header.css';
import React from 'react';
// import PropTypes from 'prop-types';
import logo from './logo.svg';

const Header = () => (
      <div className="Header">
            <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
            </header>
      </div>
);

// Header.propTypes = {};

export default Header;
