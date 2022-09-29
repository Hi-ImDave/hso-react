import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Apod from './pages/Apod'
import About from './pages/About'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/apod' element={<Apod />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
