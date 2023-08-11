import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import Layout from '../Layout'
import Image from '../components/Image'
import { blogData } from '../data'

const BlogPage = () => {
    const { id } = useParams()
    const currBlog = useMemo(() => blogData.filter((data) => data.id === id), [id])
    return (
        <>
            {currBlog && <div className='md:w-10/12 w-11/12 h-full py-2'>
                <div className='w-full img-container flex justify-center'>
                    <Image
                        classData='image'
                        src={currBlog[0]?.image}
                        alt="blog Image" />
                </div>
                <div className='py-2'>
                    <h2 className='text-3xl font-semibold py-4'>{currBlog[0].title}</h2>
                    <div className='flex gap-2 flex-col py-4'>
                        {currBlog[0].description.map((e) => <p>{e}</p>)}
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Layout(BlogPage)