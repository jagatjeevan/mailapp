import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/header';

export default class About extends React.Component {
  render() {
    return(
      <div>
        <Header />
      </div>
    );
  }
}

ReactDOM.render(<About />, document.getElementById('container'));
