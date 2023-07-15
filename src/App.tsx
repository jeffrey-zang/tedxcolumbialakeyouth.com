import { Routes, Route } from 'react-router-dom'

import Info from './sections/Info'
import Partners from './sections/Partners'

import Landing from './pages/Landing'
import About from './pages/About'
import Team from './pages/Team'
import License from './pages/License'
import Bears from './pages/Bears'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={
          <div>
            <Landing />
            <div className='bg-gradient-to-b from-black via-darkred to-black'>
              <Info />
              <Partners />
            </div>
          </div>
        } />
        <Route path='/about-ted' element={<About />} />
        <Route path='/our-team' element={<Team bears={false} />} />
        <Route path='/our-bears' element={<Bears />} />
        <Route path='/license' element={<License />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
