import React, { useContext } from 'react'

import Layout from '../Layout'
import BlogCard from '../components/BlogCard'
import { MyContext } from '../ContextProvider'

const HomePage = () => {
    const { blogs } = useContext(MyContext)
    return (
        <div className='md:w-10/12 w-11/12 h-full py-4'>
            <h1 className='text-3xl font-bold py-4'>Blogs</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 items-center'>
                {blogs && blogs.length > 0 ? blogs.map((data) => <BlogCard
                    id={data.id}
                    imageUrl={data.image}
                    title={data.title}
                    description={data.description[0]}
                />) : <p className='text-center text-gray-500 w-full col-span-3'>No Blogs Found</p>}
            </div>
        </div>
    )
}

export default Layout(HomePage)