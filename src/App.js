import {
  StyledButton,
  StyledHeadline,
  StyledParagraph,
} from "./components/StyledComponents";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import Home from "./components/Home";

import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>

      <StyledHeadline>Hello there</StyledHeadline>
      <StyledParagraph>Press the button for a test</StyledParagraph>
      <StyledButton>Click me if you can</StyledButton>
    </div>
  );
}

export default App;
