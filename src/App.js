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

  useEffect(() => {
    localStorage.setItem('checked', JSON.stringify(state.checked));
    localStorage.setItem('theme', JSON.stringify(state.theme));
  }, [state.checked, state.theme]);

  return (
    <div className={`${state.theme}-wrapper`}>
      <Switch
        onChange={handleChange}
        checked={state.checked}
        className="react-switch"
        offColor= "#ffffff"
        onColor= "#ffffff"
        offHandleColor="#0ff"
        onHandleColor="#08f"
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        uncheckedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              color: "orange",
              paddingRight: 2
            }}
          >
            ☾
          </div>
        }
        checkedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
              color: "green",
              paddingRight: 2
            }}
          >
            ☼
          </div>
        }
        uncheckedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 20
            }}
          >
          </div>
        }
        checkedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              color: "red",
              fontSize: 18
            }}
          >
          </div>
        }
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
