import "./App.css";
import React, { useState } from "react";
import { MainPage } from "./app/MainPage";
import { ContextCounter } from "./components/ContextCounter";

function App() {
  // Dette er staten vi velger å bruke som en global value
  // Dette gjør vi ved å passere det i value til ContextCounter.Provider
  // Det blir deretter tilgjengelig i hele appen
  const [contextCount, setContextCount] = useState(0);

  return (
    <div>
      <ContextCounter.Provider value={{ contextCount, setContextCount }}>
        <MainPage />
      </ContextCounter.Provider>
    </div>
  );
}

export default App;
