import './Navbar.scss'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import insta from '../../assets/insta.svg'

const Links = () => {
  return (
    <>
      <a className='no-styles' href='#info'>Event Info</a>
      <p>About TED</p>
      <p>Our Team</p>
      <p>Sponsors</p>
    </>
  )
}

const Navbar = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className='z-20 px-8 lg:px-12 fixed w-full top-0 bg-gray-950 navbar'>
      <div className='flex py-4 lg:py-0 justify-between items-center'>
        <a href='#' className='no-styles text-white font-bold text-xl lg:text-2xl'>
          <span className='no-styles font-black text-red'>TED<sup>x</sup></span><span className='font-normal'>Columbia Lake</span> Youth
        </a>
        <div className='links hidden lg:flex items-center'>
          <Links />
          {/* <button className='red text-xl'>Apply now</button> */}
        </div>
        <div className='block lg:hidden text-[18px] leading-[18px] z-10'>
          <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>
        </div>
        <div onClick={() => setOpen(!isOpen)} className={`navbar-popup fixed top-0 left-0 place-items-center h-[100dvh] w-screen grid`} style={{opacity: (isOpen ? "100" : "0"), pointerEvents: (isOpen ? "auto" : "none")}}>
          <div className='flex flex-col text-center gap-8 items-center'>
            <h3 className='text-2xl'>Navigation</h3>
            <Links />
            <a href='https://www.instagram.com/tedxcolumbialakeyouth/'>
              <img src={insta} alt='insta' className='w-8'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar