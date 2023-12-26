import { useState } from 'react'
import Title from '../../components/Title'

const Countdown = () => {
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
    <div>
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
        <h3 className='text-dimmed text-2xl font-normal text-center'>until<br/><Title /></h3>
      </div>
    </div>
  )
}

export default Countdown