import Title from "../Title"
import Socials from "../Socials"
import { Links } from "../Navbar"
import { Link } from "react-router-dom"

const Footer = () => {

  return (
    <div className='bg-[#000] mt-16 w-full'>
      <div className="typography flex flex-col md:flex-row p-[5%] gap-8 md:gap-0 pb-0 mx-auto">
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
            <a href='https://attend.tedxcolumbialakeyouth.com' target='_blank' rel='noreferrer' className='!text-purple-400'>Apply Now!</a>
            <a href='mailto:questions@tedxcolumbialakeyouth.com'>Contact Us</a>
            <a href='https://www.ted.com/tedx/events/54927'>TED<sup>x</sup> Event Website</a>
            {/* <a>Privacy Policy</a> */}
            <Link to='/license'>License</Link>
            <a href='https://bank.hackclub.com/donations/start/tedxcolumbialakeyouth'>Support Us! ✨</a>
            {/* <a>Code of Conduct</a> */}
          </div>
        </div>


      </div>
      <div className='text-center pb-[5%] text-dimmed mt-8'>
        Made in <span className='!text-orange-300'>Waterloo</span> with 🧠 and <a href='https://react.dev' className='!text-blue-500'>React</a>
        <br/>
        This independent TED<sup>x</sup> event is operated under license from TED
      </div>
    </div>
  )
}

export default Footer