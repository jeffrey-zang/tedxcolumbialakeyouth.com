import wave from '../../assets/wave.svg'
import { useRef } from 'react'
import './Landing.scss'

const Landing = () => {

  const ref = useRef<HTMLDivElement>(null)
  
  const handleMove = (e:any) => {
    if (ref.current) {
      
      const widthAnimation = {
        width: `calc(${e.clientX / window.innerWidth * 100}% + 12px)`
      }

      if ((e.clientX / window.innerWidth * 100) >= 98.5) {
        ref.current.animate({
          width: "100%"
        }, {
          duration: 300,
          fill: "forwards",
          easing: "ease-in",
        });
      } else if ((e.clientX / window.innerWidth * 100) <= 1) {
        ref.current.animate({
          width: "0%"
        }, {
          duration: 300,
          fill: "forwards",
          easing: "ease-in",
        });
      } else {
        ref.current.animate(widthAnimation, {
          duration: 800,
          fill: "forwards",
          easing: "ease-in",
        });
      }
    }
  }
  
  return (
    <div onMouseMove={(e) => handleMove(e)} onTouchMove={(e) => handleMove(e.touches[0])}>
      <img src={wave} alt='wave' className='absolute bottom-0 w-full z-10' />
      <div className='landing bg-gray-100 right text-gray-900 h-full'>
        <div className='h-full flex flex-col md:gap-0 gap-4 justify-center'>
          <h2 className='animate-fadein opacity-0 fill-mode-forwards font-normal'><span className='font-black text-red'>TED<sup>x</sup></span>Columbia Lake <span className='font-bold'>Youth</span></h2>
          <h1 className='animate-fadedown'>Let's <br className='block md:hidden'/>reimagine <br/><span className='gradient-text bg-gradient-to-r from-orange-300 via-red to-orange-300'>empowerment</span></h1>
          <h3 className='animate-fadein opacity-0 fill-mode-forwards'>October 7, 2023 • Kitchener Public Library Theatre • Tickets available soon</h3>
        </div>
      </div>
      <div ref={ref} className='landing bg-gray-900 left text-gray-100 h-full'>
        <div className='h-full flex flex-col md:gap-0 gap-4 justify-center'>
          <h2 className='animate-fadein opacity-0 fill-mode-forwards font-normal'><span className='font-black text-red'>TED<sup>x</sup></span>Columbia Lake <span className='font-bold'>Youth</span></h2>
          <h1 className='animate-fadedown'>Let's <br className='block md:hidden'/>reinvent <br/><span className='gradient-text bg-gradient-to-r from-red via-purple-400 to-red'>education</span></h1>
          <h3 className='animate-fadein opacity-0 fill-mode-forwards'>October 7, 2023 • Kitchener Public Library Theatre • Tickets available soon</h3>
        </div>
      </div>
    </div>
  )
}

export default Landing