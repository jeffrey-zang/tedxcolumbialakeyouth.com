import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='z-20 py-6 px-[10vw] fixed w-full top-0 bg-gray-950 navbar'>
      <div className='flex justify-center lg:justify-between items-center text-xl'>
        <h2 className='text-white font-bold'>
          <span className='font-black text-red'>TED<sup>x</sup></span><span className='font-normal'>Columbia Lake</span> Youth
        </h2>
        <div className='links hidden lg:flex items-center'>
          <p>Speakers</p>
          <p>About</p>
          <p>Our Team</p>
          <p>Sponsors</p>
          {/* <button className='red text-xl'>Apply now</button> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar