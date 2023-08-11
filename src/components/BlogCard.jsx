import React from 'react'
import { Link } from 'react-router-dom'

import Image from './Image'

const BlogCard = ({ imageUrl, title, description, id }) => {
    return (
        <Link to={`/${id}`} className='flex flex-col gap-1.5 bg-[#f5f5f5] p-2.5 card rounded-md'>
            <div className='h-[200px] overflow-hidden rounded'>
                <Image src={imageUrl} classData="h-full w-full" />
            </div>
            <h4 className='font-semibold text-[#333] text-lg'>{title}</h4>
            <p className='text-sm text-gray-500 text-justify card-description'>{description}</p>
        </Link>
    )
}

export default BlogCard