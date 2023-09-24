import './Navbar.scss'
import Hamburger from 'hamburger-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Title from '../../components/Title'
import Socials from '../Socials'

export const Links = (style:any) => {

  return (
    <>
      <a href='/#event-info' className={style.style}>Event Info</a>
      <Link to='/about-ted' className={style.style}>About TED</Link>
      <Link to='/schedule' className={style.style}>Schedule</Link>
      <a href='/#partners' className={style.style}>Partners</a>
      <Link to='/our-team' className={style.style}>Our Team</Link>
      <a href='https://attend.tedxcolumbialakeyouth.com' target='_blank' rel='noreferrer' className={`font-bold !text-red ${style.style}`}>Register Now!</a>
    </>
  )
}

const Navbar = () => {

  const [isOpen, setOpen] = useState(false)
  const [top, setTop] = useState(true)

  useEffect(() => {

    const scrollHandler = () => {
      setTop(window.scrollY <= 50)
    }
    window.addEventListener('scroll', scrollHandler, true);

    return () => {
      window.removeEventListener('scroll', scrollHandler, true);
    };
  }, []);

  return (
    <div className={`z-50 px-6 pr-2 xl:px-12 sticky w-full top-0 bg-black navbar ${(top) ? "" : "active"}`}>
      <div className='flex py-[17px] xl:py-0 justify-between items-center'>
        <Link onClick={() => {document.body.scrollTop = document.documentElement.scrollTop = 0;}} to='/' className="no-styles text-[0.8rem] sm:text-[1rem] lg:text-[18px] flex items-center whitespace-nowrap">
          <Title />
        </Link>
        <div className='links hidden xl:flex items-center'>
          <Links style='no-styles' />
        </div>
        <div className='block xl:hidden text-[18px] leading-[18px] z-10'>
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} label='show navbar' />
        </div>
        <div onClick={() => setOpen(!isOpen)} className={`navbar-popup fixed top-0 left-0 place-items-center h-[100dvh] w-screen grid`} style={{opacity: (isOpen ? "100" : "0"), pointerEvents: (isOpen ? "auto" : "none")}}>
          <div className='flex flex-col text-center gap-8 items-center'>
            <h3 className='text-2xl'>Navigation</h3>
            <Links style='no-styles' />
            <Socials />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar