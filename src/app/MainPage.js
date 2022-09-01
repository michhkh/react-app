import { About } from "./mainPage/AboutPage";
import { APIproject } from "./mainPage/APIprojectPage";
import { Counter } from "./mainPage/CounterPage";
import { StylesTest } from "./mainPage/StylesTestPage";
import Home from "./mainPage/HomePage";
import "../App.css";
import logo from "../logo.svg";
import { UseContextCounter } from "./mainPage/UseContextCounterPage";
import { ContextCount } from "./mainPage/ContextCountPage";
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
