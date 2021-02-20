import React, { useState } from 'react';

const BlogContext = React.createContext();


// children: react feature, it's a prop

export const BlogProvider = ({ children }) => {
   const [blogPosts, setBlogPosts] = useState([]);

   const addBlogPost = () => {
       setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}`}]);
   }

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        { children }
    </BlogContext.Provider>;
}

export default BlogContext;