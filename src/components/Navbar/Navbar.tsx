import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='z-20 p-6 px-[10vw] fixed w-full top-0 bg-red navbar'>
      <div className='flex justify-between items-center text-xl'>
        <h2 className='text-white font-bold'>
          <span className='font-black'>TED<sup>x</sup></span><span className='font-normal'>Columbia Lake</span> Youth
        </h2>
        <div className='links'>
          <p>About</p>
          <p>Sponsors</p>
          <p>Our Team</p>
          <p>Speakers</p>
          <p>Apply now</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar