import React from 'react';
//import SearchBar from './SearchBar';

export default function SearchForm(props) {
    return (
      <div class='ui massive icon input'>
        <input onChange={(e) => props.onSearchChange(e)} type='text' placeholder='Search Restaurants' />
        <i class='sun icon'></i>
      </div>
    );
}
