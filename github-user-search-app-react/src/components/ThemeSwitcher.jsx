import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import sunIcon from '../assets/icon-sun.svg';
import moonIcon from '../assets/icon-moon.svg';
const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <section id="header">
      <h1 className="text-secondary">devfinder</h1>
      <button
        id="theme-button"
        className="text-primary"
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <p>{theme === 'dark' ? 'light' : 'dark'}</p>
        <img src={theme === 'dark' ? sunIcon : moonIcon} alt="" />
      </button>
    </section>
  );
};

export default ThemeSwitcher;
