import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return(
      <div className='search-bar'>
        <div className='search-component'>
          <input type='text' placeholder='Type in to search ...' />
          <button>
            <i className='icon-search'></i>
            Search
          </button>
        </div>
        <div className='filters'>
          <div className='filter'>
            <label>
              <input type='checkbox' value='delivered' /> Delivered
            </label>
          </div>
        </div>
      </div>
    );
  }
}
