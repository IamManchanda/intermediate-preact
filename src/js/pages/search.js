import React from 'preact-compat';
import { route } from 'preact-router';
import SearchBox from '../components/search-box';

export default () => {
  const handleSearchSubmit = () => {
    route('/');
  };
  
  return (
    <div className="search-route">
      <SearchBox search={ handleSearchSubmit } />
    </div>
  );
};
