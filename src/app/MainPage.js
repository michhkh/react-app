import { About } from "./mainPage/About";
import { APIproject } from "./mainPage/APIproject";
import { Counter } from "./mainPage/Counter";
import { StylesTest } from "./mainPage/StylesTest";
import Home from "./mainPage/Home";
import "../App.css";
import logo from "../logo.svg";
import { UseContextCounter } from "./mainPage/UseContextCounter";
import { ContextCount } from "./mainPage/ContextCount";
import { Routes, Route } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <img src={logo} className="mini-logo App-logo" alt="logo" />
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="counter" element={<Counter />} />
          <Route path="APIproject" element={<APIproject />} />
          <Route path="StylesTest" element={<StylesTest />} />
          <Route path="contextCounter" element={<UseContextCounter />} />
          <Route path="contextCount" element={<ContextCount />} />
        </Routes>
      </header>
    </div>
  );
};
