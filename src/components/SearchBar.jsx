import React, { useContext } from 'react';
import { BiSearch } from 'react-icons/bi'

import { MyContext } from '../ContextProvider';
import { blogData } from '../data';

const SearchBar = () => {

    const { setBlogs } = useContext(MyContext)
    const handleChange = (e) => {
        const val = e.target.value
        if (val.length > 0) {
            const filteredBlog = blogData.filter((data) => data.title.toLowerCase().includes(val.toLowerCase()))
            setBlogs(filteredBlog)
        } else {
            setBlogs(blogData)
        }
    }
    return (
        <div className="bg-[#f0f0f5] rounded-full relative shadow">
            <input
                type="text"
                className="rounded-full pl-4 pr-8 py-1 search-input"
                placeholder='Search Blogs...'
                onChange={handleChange}
            />
            <button className="absolute right-1.5 top-1.5 ">
                <BiSearch size={20} />
            </button>
        </div>
    );
};

export default SearchBar;
