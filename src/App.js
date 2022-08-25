import { About } from "./components/About";
import { APIproject } from "./components/APIproject";
import { Counter } from "./components/Counter";
import Home from "./components/Home";
import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="counter" element={<Counter />} />
          <Route path="APIproject" element={<APIproject />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
