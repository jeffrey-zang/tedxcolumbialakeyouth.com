import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import About from './pages/About'
import Info from './sections/Info'
import Partners from './sections/Partners'

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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
