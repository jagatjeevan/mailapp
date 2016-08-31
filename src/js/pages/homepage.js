import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/header';
import SearchBar from '../components/searchBar';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
