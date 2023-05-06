import React , {useContext, useReducer, createContext} from 'react';
export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
);

{/* This is the custom hook we made here */}
export const useStateValue = () => useContext(StateContext);
