import React, { useReducer } from 'react';

export default (reducer, actions, intitalState) => {
    
    const Context = React.createContext();
    
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, intitalState);
    
        return <Context.Provider>
            {children}
        </Context.Provider>
    }
};

