import React, { useReducer } from 'react';

export default (reducer, actions, intitalState) => {
    
    const Context = React.createContext();
    
    const boundActions = {};

    for (let key in actions) {
        boundActions[key] = actions[key](disptach);
    }

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, intitalState);
    
        return <Context.Provider value={{ state }}>
            {children}
        </Context.Provider>
    }

    return { Context, Provider };
};

