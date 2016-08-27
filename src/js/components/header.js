import React from 'react';
import { Link } from 'react-router';
import AppPaths from '../constants/path';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to={AppPaths.homePage}>Home</Link> &nbsp;
      </div>
    );
  }
}
