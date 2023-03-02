import React from 'react';
import iconSearch from '../assets/icon-search.svg';
const InputSearch = () => {
  return (
    <div id="input-search">
      <img src={iconSearch} alt="" />
      <input
        className="background"
        type="text"
        name=""
        value=""
        placeholder="Search GitHub username..."
      ></input>
      <button id="search-button" type="button">
        search
      </button>
    </div>
  );
};

export default InputSearch;
