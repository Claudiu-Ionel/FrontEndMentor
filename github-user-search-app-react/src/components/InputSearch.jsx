import React, { useState, useContext } from 'react';
import iconSearch from '../assets/icon-search.svg';
import { ThemeContext } from '../context/ThemeContext';
const InputSearch = () => {
  const { getGitHubProfile, apiError, setApiError } = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);
  function valueFormatter(string) {
    const regex = /[^a-zA-Z\s-]/g;
    if (regex.test(string)) {
      console.log('error');
      setInputError(true);
      return;
    }

    setInputError(false);
    setInputValue(string);
  }
  return (
    <div id="input-search">
      <img src={iconSearch} alt="" />
      <input
        className={`background ${inputError ? 'input-error' : ''} text-primary`}
        type="text"
        name=""
        value={inputValue}
        placeholder="Search GitHub username..."
        onChange={(e) => {
          valueFormatter(e.target.value);
          setApiError(false);
        }}
      ></input>
      {apiError && <span className="api-error">No results</span>}
      <button
        onClick={() => getGitHubProfile(inputValue.replace(' ', '-'))}
        id="search-button"
        type="button"
      >
        search
      </button>
    </div>
  );
};

export default InputSearch;
