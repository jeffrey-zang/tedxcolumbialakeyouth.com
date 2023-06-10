import wave from '../../assets/wave.svg'
import { useRef } from 'react'
import './Landing.scss'

const Landing = () => {

  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e:any) => {
    if (ref.current) {
      ref.current.style.width = `calc(${e.clientX / window.innerWidth * 100}% + 12px)`;
      if ((e.clientX / window.innerWidth * 100) >= 99) {
        ref.current.style.width = '100%';
      } else if ((e.clientX / window.innerWidth * 100) <= 1) {
        ref.current.style.width = '0%';
      }
    }
  }
  
  return (
    <div onMouseMove={(e) => handleMove(e)} onTouchMove={(e) => handleMove(e.touches[0])}>
      <img src={wave} alt='wave' className='absolute bottom-0 w-full z-40' />
      <div className='landing bg-gray-100 right text-gray-900 h-full'>
        <div className='h-full flex flex-col md:gap-0 gap-4 justify-center'>
          <h2><span className='font-black text-red'>TED<sup>x</sup></span>Columbia Lake <span className='font-bold'>Youth</span></h2>
          <h1>Let's <br className='block md:hidden'/>reimagine <br/><span className='gradient-text bg-gradient-to-r from-orange-300 via-red to-orange-300'>empowerment</span></h1>
          <h3>October 7, 2023 • Kitchener Public Library Theatre • Tickets available soon</h3>
        </div>
      </div>
      <div ref={ref} className='landing bg-gray-900 left text-gray-100 h-full'>
        <div className='h-full flex flex-col md:gap-0 gap-4 justify-center'>
          <h2><span className='font-black text-red'>TED<sup>x</sup></span>Columbia Lake <span className='font-bold'>Youth</span></h2>
          <h1>Let's <br className='block md:hidden'/>reinvent <br/><span className='gradient-text bg-gradient-to-r from-red via-purple-400 to-red'>education</span></h1>
          <h3>October 7, 2023 • Kitchener Public Library Theatre • Tickets available soon</h3>
        </div>
      </div>
    </div>
  )
}

export default Landing