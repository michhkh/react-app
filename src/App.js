import { Button } from "./components/Button";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import Home from "./components/Home";

import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Button />
    </div>
  );
}

export default App;
