import { createContext } from "react";

// Her definerer vi en ny Context
// Dette kan være brettet/rammet rundt children for å tilføre en State til alle children
// Staten vil bli lagret i value prop
// <ContextCounter.Provider value={}>
//       <MainPage />
// </ContextCounter.Provider>

// Value er den staten du vil gjøre tilgjengelig for alle children

export const ContextCounter = createContext();
