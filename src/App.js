import { About } from "./components/About";
import { APIproject } from "./components/APIproject";
import { Counter } from "./components/Counter";
import { StylesTest } from "./components/StylesTest";
import Home from "./components/Home";
import "./App.css";
import logo from "./logo.svg";

import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
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
        </Routes>
      </header>
    </div>
  );
}

export default App;
