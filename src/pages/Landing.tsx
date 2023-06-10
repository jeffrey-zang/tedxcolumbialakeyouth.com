import wave from '../assets/wave.svg'
import { useRef } from 'react'

const Landing = () => {

  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e:any) => {
    console.log(e.clientX, window.innerWidth)
    if (ref.current) {
      ref.current.style.width = `${e.clientX / window.innerWidth * 100}%`;
    }
  }
  
  return (
    <div onMouseMove={(e) => handleMove(e)} onTouchMove={(e) => handleMove(e.touches[0])}>
      <img src={wave} alt='wave' className='absolute top-0 w-full z-10' />
      <div className='landing'>
        <div className='headers'>
        <h1>Let's reimagine <br/><span className='fancy bg-gradient-to-r from-indigo-500 to-blue-300'>education</span></h1>
        </div>
      </div>
      <div ref={ref} className='landing bg-black'>
        <div className='headers text-white'>
          <h1>Let's reinvent <br/><span className='fancy bg-gradient-to-r from-green-500 to-yellow-300'>innovation</span></h1>
        </div>
      </div>
    </div>
  )
}

export default Landing