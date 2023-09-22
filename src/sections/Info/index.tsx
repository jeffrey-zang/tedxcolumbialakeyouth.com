import lake from '../../assets/photos/cly.webp'
import tedx from '../../assets/photos/TEDx-2.webp'
import Title from '../../components/Title'
import { useState } from 'react'
import './Info.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Info = () => {

  const [days, setDays] = useState<any>(0)
  const [hours, setHours] = useState<any>(0)
  const [minutes, setMinutes] = useState<any>(0)
  const [seconds, setSeconds] = useState<any>(0)

  const countDownDate = new Date("Oct 14, 2023 10:00:00").getTime();

  const x = setInterval(function() {
      
    const distance = countDownDate - new Date().getTime();
      
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

      <div className='flex flex-col items-center my-[8rem]'>
        <h3 className='text-dimmed text-2xl'>T-MINUS</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center timer-container'>
          <div className='timer hover:scale-110 hover:rotate-6 hover:-translate-x-5'>
            <div className='text-[4rem] xl:text-[6rem]'>{days}</div>
            <h3 className='text-[1.5rem]'>DAYS</h3>
          </div>
          <div className='timer hover:scale-110 hover:-rotate-3 hover:-translate-y-4'>
            <div className='text-[4rem] xl:text-[6rem]'>{hours}</div>
            <h3 className='text-[1.5rem]'>HRS</h3>
          </div>
          <div className='timer hover:scale-110 hover:rotate-3 hover:-translate-x-4 hover:translate-y-4'>
            <div className='text-[4rem] xl:text-[6rem]'>{minutes}</div>
            <h3 className='text-[1.5rem]'>MINS</h3>
          </div>
          <div className='timer hover:scale-110 hover:-rotate-3 hover:translate-y-8 hover:-translate-x-4'>
            <div className='text-[4rem] xl:text-[6rem]'>{seconds}</div>
            <h3 className='text-[1.5rem]'>SECS</h3>
          </div>
        </div>
        <h3 className='text-dimmed text-2xl font-normal text-center'>until <Title /></h3>
      </div>

      <div className='section typography mt-20'>
        <div className='section-wrapper'>
          <h2>What is <Title />?</h2>
          <p>
            It's where innovation, inspiration, and education collide. Situated in the heart of Waterloo Region, TED<sup>x</sup>Columbia Lake Youth is the celebration of young minds shaping the future. TED<sup>x</sup>Columbia Lake Youth's mission is to motivate, inspire, and encourage the next generation of changemakers and leaders to unleash their passions, carve their own paths of learning, and become catalysts for positive change. TED<sup>x</sup>Columbia Lake Youth is working to pave the way to reinventing education.<br/><br/>
            TED<sup>x</sup>Columbia Lake Youth's theme is reinventing education, aiming to inspire a young audience to seek learning outside the classroom. With experts and inspiring speakers from across the region, TED<sup>x</sup>Columbia Lake Youth is looking to share recent case studies and strategies spanning the personal, societal and physical branches of learning.
          </p>
        </div>
        <LazyLoadImage src={lake} alt='lake' effect='blur' wrapperClassName='lazy-load-image' />
      </div>
      <div className='section typography mt-20 pb-16'>
        <LazyLoadImage src={tedx} alt='tedx' effect='blur' wrapperClassName='lazy-load-image' />
        <div className='section-wrapper'>
          <h2>What is <a href='https://www.ted.com/about/programs-initiatives/tedx-program'>TED<sup>x</sup></a>?</h2>
          <p>In the spirit of ideas worth spreading, TED has created a program called TED<sup>x</sup>. TED<sup>x</sup> is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TED<sup>x</sup>Columbia Lake Youth, where x = independently organized TED event. At TED<sup>x</sup>Columbia Lake Youth, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TED<sup>x</sup> program, but individual TED<sup>x</sup> events, including ours, are self-organized.</p>
        </div>
      </div>
    </div>
  )
}

export default Info