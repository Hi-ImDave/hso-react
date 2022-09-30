import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'

import * as React from 'react'

import { useEffect } from 'react'

import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Apod from './pages/Apod'
import About from './pages/About'
import Footer from './components/layout/Footer'

function App() {
  const location = useLocation()

  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main
        className={
          location.pathname !== '/apod'
            ? `container mx-auto px-3 pb-12`
            : 'container px-3 pb-12'
        }
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/apod' element={<Apod />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
