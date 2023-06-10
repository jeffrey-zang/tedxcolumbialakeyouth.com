import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route element={<Navbar />} />
        <Route index element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App
