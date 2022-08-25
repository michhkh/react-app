import logo from "../logo.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const constantCount = () => {
    setTimeout(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 1000);
  };

  useEffect(() => {
    constantCount();
  }, [counter]);

  return (
    <div>
      <h1>Counter</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/APIproject">APIproject</Link>
      </nav>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button
            onClick={() => {
              setCounter((prevCount) => prevCount - 1);
            }}
            className="btn"
          >
            -
          </button>

          <div>
            <h1>{counter}</h1>
          </div>

          <button
            onClick={() => {
              setCounter((prevCount) => prevCount + 1);
            }}
            className="btn"
          >
            +
          </button>
        </header>
      </div>
    </div>
  );
};
