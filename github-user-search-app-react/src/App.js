import './styles/_main.scss';
import { useContext } from "react";
import { ThemeContext } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import InputSearch from './components/InputSearch';
import GitHubUser from './components/GitHubUser';
function App() {
  const { theme } = useContext(ThemeContext)


  return (
    <div className={`${theme}`}>
      <div id='main'>
        <ThemeSwitcher />
        <InputSearch />
        <GitHubUser />
      </div>

    </div>
  );
}

export default App;
