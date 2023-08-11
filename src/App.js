import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import HomePage from './pages/Home.page'
import BlogPage from './pages/Blog.page'
import './App.css'

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation()

    React.useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
    return null
  }
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
