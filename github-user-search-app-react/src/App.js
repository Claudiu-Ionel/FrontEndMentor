import './styles/_main.scss';
import { useContext } from "react";
import { ThemeContext } from './context/ThemeContext';
function App() {
  const { theme, setTheme } = useContext(ThemeContext)


  return (
    <div className={`${theme}`}>
      <div className='background'>
        <header className="text">
          MA-Ta
        </header>
      </div>
      <button type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>switch theme</button>
    </div>
  );
}

export default App;
