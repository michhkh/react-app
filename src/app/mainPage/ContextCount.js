import { useContext } from "react";
import { ContextCounter } from "../../components/ContextCounter";

export const ContextCount = () => {
  // Her bruker vi useContext for å gjøre ContextCounter sitt innhold tilgjengelig fra
  // ContextCounter.Provider i App.js
  const { contextCount } = useContext(ContextCounter);
  return (
    <div>
      <h1>Context Count</h1>
      <h2>{contextCount}</h2>
    </div>
  );
};
