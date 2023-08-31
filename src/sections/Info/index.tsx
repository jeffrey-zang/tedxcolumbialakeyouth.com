import lake from '../../assets/photos/cly.webp'
import tedx from '../../assets/photos/TEDx-2.webp'
import Title from '../../components/Title'
import { useState } from 'react'
import './Info.scss'

const Info = () => {

  const [days, setDays] = useState<string>("00")
  const [hours, setHours] = useState<string>("00")
  const [minutes, setMinutes] = useState<string>("00")
  const [seconds, setSeconds] = useState<string>("00")

  const countDownDate = new Date("Oct 14, 2023 10:00:00").getTime();

  const x = setInterval(function() {

    const now = new Date().getTime();
      
    const distance = countDownDate - now;
      
    if (distance < 0) {
      clearInterval(x);
      setDays("00")
      setHours("00")
      setMinutes("00")
      setSeconds("00")
    }

    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'))
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'))
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'))
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0'))
      
  }, 1000);

  return ( 
    <div className='z-40 about mt-[calc(100dvh-83px)]' id='event-info'>
      <div className='h-8 bg-[#c20025] opacity-90'></div>
      <div className='h-8 bg-[#c20025] opacity-70'></div>
      <div className='h-8 bg-[#c20025] opacity-50'></div>
      <div className='h-8 bg-[#c20025] opacity-20'></div>

      <div className='flex flex-col items-center my-20'>
        <h3 className='text-dimmed text-2xl'>T-MINUS</h3>
        <div className='flex items-center timer-container'>
          <div className='timer hover:scale-110 hover:rotate-6 hover:-translate-x-5'>
            <div>{days}</div>
            <h3>DAYS</h3>
          </div>
          <div className='timer hover:scale-110 hover:-rotate-3 hover:-translate-y-4'>
            <div>{hours}</div>
            <h3>HRS</h3>
          </div>
          <div className='timer hover:scale-110 hover:rotate-3 hover:-translate-x-4 hover:translate-y-4'>
            <div>{minutes}</div>
            <h3>MINS</h3>
          </div>
          <div className='timer hover:scale-110 hover:-rotate-3 hover:translate-y-8 hover:-translate-x-4'>
            <div>{seconds}</div>
            <h3>SECS</h3>
          </div>
        </div>
        <h3 className='text-dimmed text-2xl font-normal'>until <Title /></h3>
      </div>

      <div className='section typography mt-20'>
        <div className='section-wrapper'>
          <h2>What is <Title />?</h2>
          <p>
            It's where innovation, inspiration, and education collide. Situated in the heart of Waterloo Region, TED<sup>x</sup>Columbia Lake Youth is the celebration of young minds shaping the future. TED<sup>x</sup>Columbia Lake Youth's mission is to motivate, inspire, and encourage the next generation of changemakers and leaders to unleash their passions, carve their own paths of learning, and become catalysts for positive change. TED<sup>x</sup>Columbia Lake Youth is working to pave the way to reinventing education.<br/><br/>
            TED<sup>x</sup>Columbia Lake Youth's theme is reinventing education, aiming to inspire a young audience to seek learning outside the classroom. With experts and inspiring speakers from across the region, TED<sup>x</sup>Columbia Lake Youth is looking to share recent case studies and strategies spanning the personal, societal and physical branches of learning.
          </p>
        </div>
        <img src={lake} alt='lake'></img>
      </div>
      <div className='section typography mt-20 pb-16'>
        <img src={tedx} alt='tedx'></img>
        <div className='section-wrapper'>
          <h2>What is <a href='https://www.ted.com/about/programs-initiatives/tedx-program'>TED<sup>x</sup></a>?</h2>
          <p>In the spirit of ideas worth spreading, TED has created a program called TED<sup>x</sup>. TED<sup>x</sup> is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TED<sup>x</sup>Columbia Lake Youth, where x = independently organized TED event. At TED<sup>x</sup>Columbia Lake Youth, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TED<sup>x</sup> program, but individual TED<sup>x</sup> events, including ours, are self-organized.</p>
        </div>
      </div>
    </div>
  )
}

export default Info