import React from 'react'
import { Link, useParams } from 'react-router-dom'

import SearchBar from './SearchBar'

const Navbar = () => {
    const params = useParams()
    return (
        <div className='py-3 shadow md:px-8 px-4 flex sm:justify-between justify-center items-center sm:flex-row flex-col gap-2.5 flex-shrink-0'>
            <Link to='/' className='text-3xl font-serif font-bold text-[#01012e]'>Traveling Nerd</Link>
            {!params?.id && <div>
                <SearchBar />
            </div>}
        </div>
    )
}

export default Navbar