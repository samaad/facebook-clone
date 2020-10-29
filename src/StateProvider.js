import React, { createContext, useReducer, useContext } from "react";


// Data Layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext)