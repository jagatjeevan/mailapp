import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import AppPaths from './constants/path';

import { createHistory, useBasename } from 'history';
const newbrowserHistory = useBasename(createHistory)({
  basename: AppPaths.basePath
});

import Homepage from './pages/homepage';

import '../scss/styles.scss';

render((
  <Router history={browserHistory}>
    <Route path={AppPaths.homePage} component={Homepage} />
  </Router>
), document.getElementById('container'));
