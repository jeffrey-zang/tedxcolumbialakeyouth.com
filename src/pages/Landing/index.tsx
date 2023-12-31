import { useRef } from 'react'
import './Landing.scss'
import Title from '../../components/Title'
import Wave from 'react-wavify'

const Landing = () => {

  const ref = useRef<HTMLDivElement>(null)
  
  const handleMove = (event:React.MouseEvent<HTMLDivElement>) => {
    
    if (ref.current) {
      
      const widthAnimation = {
        "--mouse-x": `calc(${event.clientX / window.innerWidth * 100}% + 12px)`
      }
  
      const isMobile = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0)

      if (isMobile) {
        ref.current.style.width = widthAnimation["--mouse-x"]
      } else {
        ref.current.animate(widthAnimation, {
          duration: 500,
          fill: "forwards",
          delay: 0,
          easing: "ease-out",
        });
      }
    }
  }
  
  return (
    <div onMouseMove={handleMove}>
      <Wave fill='#c20025'
        paused={false}
        options={{
          height: 15,
          amplitude: 40,
          speed: 0.15,
          points: 5
        }}
        className='absolute bottom-0 mt-[140vh] h-24 z-30'
      />
      <div className='landing bg-gray-100 right h-full'>
        <div className='h-full flex flex-col md:gap-0 gap-4 justify-center'>
          <p className='h2 !text-gray-400 animate-fadein opacity-0 fill-mode-forwards font-normal z-30'><Title /></p>
          <p className='h1 !text-gray-900 animate-fadedown'>Let's <br className='block md:hidden'/>redesign <br/><span className='gradient-text bg-gradient-to-r from-orange-300 via-red to-orange-300'>empowerment</span></p>
          <p className='h3 !text-gray-400 animate-fadein opacity-0 fill-mode-forwards z-30'>
            October 14, 2023 • University of Waterloo<br/>
            {/* <button className='red mt-4 text-xl' onClick={() => window.open('https://www.twitch.tv/tedxcolumbia_lake_youth')}>Watch live!</button> */}
          </p>
        </div>
      </div>
      <div ref={ref} className='landing bg-gray-900 left !text-gray-100 h-full'>
        <div className='h-full !flex-none flex flex-col md:gap-0 gap-4 justify-center'>
          <p className='h2 !text-gray-400 animate-fadein opacity-0 fill-mode-forwards font-normal -z-30'><Title /></p>
          <p className='h1 animate-fadedown'>Let's <br className='block md:hidden'/>reinvent <br/><span className='gradient-text bg-gradient-to-r from-red via-purple-400 to-red'>education</span></p>
          <p className='h3 !text-gray-400 animate-fadein opacity-0 fill-mode-forwards -z-30'>
            October 14, 2023 • University of Waterloo<br/>
            {/* <button className='red mt-4 text-xl' onClick={() => window.open('https://www.twitch.tv/tedxcolumbia_lake_youth')}>Watch live!</button> */}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Landing