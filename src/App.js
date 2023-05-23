import './App.scss';
import Switch from "react-switch";
import { useEffect } from 'react';
import { useThemeContext } from "./hooks/useThemeContext";

function App() {

  const { dispatch, state } = useThemeContext();

  const handleChange = () => {
    if (state.checked) {
      dispatch({ type: "SET_BRIGHT", payload: "bright" })
    } else {
      dispatch({ type: "SET_DARK", payload: "dark" })
    }
  };

  useEffect (() => {
    localStorage.setItem('checked', JSON.stringify(state.checked));
    localStorage.setItem('theme', JSON.stringify(state.theme));
  }, [state.checked, state.theme]);

  return (
    <div className={`${state.theme}-wrapper`}>
      <Switch
        onChange={handleChange}
        checked={state.checked}
        className="react-switch"
      />
      <h1>TESTING RESPONSIVE SCSS</h1>
      <div className="test-layer">
        <div>
          <p>Content 1</p>
        </div>
        <div>
          <p>Content 2</p>
        </div>
        <div>
          <p>Content 3</p>
        </div>
        <div>
          <p>Content 4</p>
        </div>
      </div>
    </div>
  );
}

export default App;
