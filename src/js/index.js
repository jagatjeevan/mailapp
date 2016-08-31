import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import AppPaths from './constants/path';

import { createHistory, useBasename } from 'history';
const newbrowserHistory = useBasename(createHistory)({
  basename: AppPaths.basePath
});
console.log(AppPaths.basePath);
import Homepage from './pages/homepage';
import addParcelPage from './pages/addParcelPage';

import '../scss/styles.scss';

render((
  <div className="app-contianer">
    <Router history={newbrowserHistory}>
      <Route path={AppPaths.homePage} component={Homepage} />
      <Route path={AppPaths.addParcelPage} component={addParcelPage} />
    </Router>
  </div>
), document.getElementById('container'));
