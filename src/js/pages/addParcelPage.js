import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/header';
import SearchBar from '../components/searchBar';

export default class About extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <SearchBar />
        Add your parcel here
      </div>
    );
  }
}

ReactDOM.render(<About />, document.getElementById('container'));
