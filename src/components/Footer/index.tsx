import Title from "../Title"
import Socials from "../Socials"
import { Links } from "../Navbar"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const Footer = () => {

  const [bears, setBears] = useState(1)
  const navigate = useNavigate()

  return (
    <div className='bg-[#000] mt-16 w-full'>
      <div className="typography flex flex-col md:flex-row p-[5%] gap-8 md:gap-0 pb-0 mx-auto">
        <div className='flex flex-col gap-2 w-full md:w-1/3'>
          <p className='text-dimmed text-sm uppercase'>Copyright © 2023</p>
          <h2 className='text-xl font-normal select-none cursor-pointer' onClick={() => {
            setBears(bears + 1)
            document.getElementById('bear')!.style.opacity = `${bears / 10}`

            if (bears === 9) {
              setBears(1)
              navigate('/our-bears')
            }
          }}>
            <Title />
          </h2>
          <Socials />
          <p id='bear' className="opacity-[10%]">🐻</p>
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