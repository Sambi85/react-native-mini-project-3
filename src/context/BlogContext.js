import React from 'react';

const BlogContext = React.createContext();


// children: react feature, it's a prop

export const BlogProvider = ({ children }) => {
    return <BlogContext.Provider>
        { children }
    </BlogContext.Provider>;
}