import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import About from './pages/About'
import Info from './sections/Info'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={
          <div>
            <Landing />
            <Info />
          </div>
        } />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
