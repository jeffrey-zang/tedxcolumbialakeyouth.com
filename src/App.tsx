import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import About from './pages/Info/Info'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={
          <div>
            <Landing />
            <About />
          </div>
        } />
      </Routes>
    </div>
  )
}

export default App
