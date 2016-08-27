import React from 'react';
// import { Link } from 'react-router';
import AppPaths from '../constants/path';

// <Link to={AppPaths.homePage}>Home</Link>

export default class Header extends React.Component {
  render() {
    return (
      <header id='header'>
        <img src={`${AppPaths.publicPath}img/logo.jpeg`} />
        <i className='icon-menu'></i>
      </header>
    );
  }
}
