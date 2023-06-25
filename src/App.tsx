import { Routes, Route } from 'react-router-dom'
// import { useRef } from 'react'
import Landing from './pages/Landing'
import About from './pages/About'
import Info from './sections/Info'
import Navbar from './components/Navbar'

function App() {

  // const cursor = useRef<HTMLDivElement>(null)

  // const handleMove = (e:any) => {
  //   if (cursor.current) {

  //     const x = e.clientX - cursor.current.offsetWidth / 2
  //     const y = e.clientY - cursor.current.offsetHeight / 2

  //     const cursorAnimation = {
  //       transform: `translate(${x}px, ${y}px)`
  //     }
      
  //     cursor.current.animate(cursorAnimation, {
  //       duration: 200,
  //       fill: "forwards",
  //       easing: "ease-in",
  //     });

  //     if (e.target.closest("a, button")) {
  //       cursor.current.classList.add('active')
  //     } else {
  //       cursor.current.classList.remove('active')
  //     }
  //   }
  // }

  return (
    <div onMouseMove={(e) => handleMove(e)} onTouchMove={(e) => handleMove(e.touches[0])}>
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
      {/* <div ref={cursor} className='cursor'></div> */}
    </div>
  )
}

export default App
