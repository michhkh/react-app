import { useContext } from "react";
import { ContextCounter } from "../../components/ContextCounter";

export const UseContextCounter = () => {
  // useContext aksepterer flere states som den får fra ContextCounterProvider i App.js
  // Man kan se på det som en global useState hvor man gjør staten global ved å
  // brette/ramme en provider rundt App.js
  const { contextCount, setContextCount } = useContext(ContextCounter);

  const add = () => {
    setContextCount((prevCount) => prevCount + 1);
  };

  const subtract = () => {
    setContextCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <button onClick={subtract} className="btn">
        -
      </button>

      <div>
        <h1>{contextCount}</h1>
      </div>

      <button onClick={add} className="btn">
        +
      </button>
    </div>
  );
};
