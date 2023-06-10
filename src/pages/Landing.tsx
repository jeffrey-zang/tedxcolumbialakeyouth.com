import wave from '../assets/wave.svg'
import { useRef } from 'react'

const Landing = () => {

  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e:any) => {
    if (ref.current) {
      ref.current.style.width = `${e.clientX / window.innerWidth * 100}%`;
      if ((e.clientX / window.innerWidth * 100) >= 99.8) {
        ref.current.style.width = '100%';
      } else if ((e.clientX / window.innerWidth * 100) <= 0.2) {
        ref.current.style.width = '0%';
      }
    }
  }
  
  return (
    <div onMouseMove={(e) => handleMove(e)} onTouchMove={(e) => handleMove(e.touches[0])}>
      <img src={wave} alt='wave' className='absolute top-0 w-full z-10' />
      <div className='landing'>
        <div>
          <h1>Let's reimagine <br/><span className='gradient-text bg-gradient-to-r from-orange-300 to-red'>innovation</span></h1>
          <h2>October 7 • Kitchener Public Library</h2>
        </div>
      </div>
      <div ref={ref} className='landing bg-black text-white'>
        <div>
          <h1>Let's reenvision <br/><span className='gradient-text bg-gradient-to-r from-red to-purple-400'>education</span></h1>
          <h2>October 7 • Kitchener Public Library</h2>
        </div>
      </div>
    </div>
  )
}

export default Landing