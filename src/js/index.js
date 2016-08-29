import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import AppPaths from './constants/path';

import { createHistory, useBasename } from 'history';
const newbrowserHistory = useBasename(createHistory)({
  basename: AppPaths.basePath
});

import Homepage from './pages/homepage';
import About from './pages/about';

import '../scss/styles.scss';

render((
  <Router history={newbrowserHistory}>
    <Route path={AppPaths.homePage} component={Homepage} />
    <Route path={AppPaths.aboutPage} component={About} />
  </Router>
), document.getElementById('container'));
