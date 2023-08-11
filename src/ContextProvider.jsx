import React, { createContext, useState } from 'react'

import { blogData } from './data'

const MyContext = createContext()
const ContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useState(blogData)
    return (
        <MyContext.Provider value={{ blogs, setBlogs }}>
            {children}
        </MyContext.Provider>
    )
}
export { MyContext, ContextProvider }