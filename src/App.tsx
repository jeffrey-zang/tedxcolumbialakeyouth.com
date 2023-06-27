import { Routes, Route } from 'react-router-dom'

import Info from './sections/Info'
import Partners from './sections/Partners'

import Landing from './pages/Landing'
import About from './pages/About'
import Team from './pages/Team'
import License from './pages/License'

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
            <Info />
            <Partners />
          </div>
        } />
        <Route path='/about-ted' element={<About />} />
        <Route path='/our-team' element={<Team />} />
        <Route path='/license' element={<License />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
