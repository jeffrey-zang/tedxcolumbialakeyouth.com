import { Routes, Route } from 'react-router-dom'

import Info from './sections/Info'
import Photos from './sections/Photos'
import Partners from './sections/Partners'
import Speakers from './sections/Speakers'

import Landing from './pages/Landing'
import About from './pages/About'
import Team from './pages/Team'
import License from './pages/License'
import Schedule from './pages/Schedule'
import NotFound from './pages/NotFound/NotFound'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route index element={
          <div>
            <Landing />
            <div className='bg-gradient-to-b from-black via-darkred to-black'>
              <Info />
              <Photos />
              <Speakers />
              <Partners />
            </div>
          </div>
        } />
        <Route path='/about-ted' element={<About />} />
        <Route path='/our-team' element={<Team />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/license' element={<License />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
