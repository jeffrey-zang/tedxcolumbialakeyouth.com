import Title from "../Title"
import Socials from "../Socials"
import { Links } from "../Navbar"

const Footer = () => {
  return (
    <div className='bg-[#000]'>
      <div className="max-w-[90rem] flex flex-col md:flex-row p-[5%] gap-8 md:gap-0 pb-0 mx-auto">
        <div className='flex flex-col gap-2 w-full md:w-1/3'>
          <p className='text-dimmed text-sm uppercase'>Copyright © 2023</p>
          <h2 className='text-xl font-normal'>
            <Title />
          </h2>
          <Socials />
        </div>

        <div className='w-full md:w-1/3'>
          <p className="text-sm uppercase text-dimmed">Site Navigation</p>    
          <div className='flex flex-col flex-grow-0 gap-2 mt-2'>
            <Links />
          </div>
        </div>

        <div className='w-full md:w-1/3'>
          <p className="text-sm uppercase text-dimmed">Important Links</p>
          <div className='flex flex-col flex-grow-0 gap-2 mt-2'>
            <a href='mailto:tedxcolumbialakeyouth@gmail.com'>Contact Us</a>
            <a href='https://www.ted.com/tedx/events/54927'>TED<sup>x</sup> Event Website</a>
            <a>Privacy Policy</a>
            <a>License</a>
            <a>Code of Conduct</a>
          </div>
        </div>


      </div>
      <div className='text-center pb-[5%] text-dimmed mt-8'>
        Made in <span className='!text-orange-300'>Waterloo</span> with 🧠 and <a href='https://react.dev' className='!text-blue-500'>React</a>
      </div>
    </div>
  )
}

export default Footer