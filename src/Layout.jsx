import React from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout = (Components) => ({ ...props }) => {
    return (
        <div className='flex flex-col h-full'>
            <Navbar />
            <main className='flex justify-center flex-grow'>
                <Components {...props} />
            </main>
            <Footer />
        </div>
    )
}

export default Layout