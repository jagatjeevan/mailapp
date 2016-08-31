import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return(
      <div className='search-bar'>
        <input type='text' placeholder='Type in to search ...' />
        <button>
          <i className='icon-search'></i>
          Search
        </button>
      </div>
    );
  }
}
