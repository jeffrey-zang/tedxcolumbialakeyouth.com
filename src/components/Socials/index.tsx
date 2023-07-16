import { BsInstagram } from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='flex gap-2'>
      <div onClick={() => window.open('https://www.instagram.com/tedxcolumbialakeyouth/')}>
        <BsInstagram className="text-white hover:text-red cursor-pointer transition-colors" />
      </div>
      {/* <div>
        <i className="bi bi-linkedin text-white hover:text-red cursor-pointer transition-colors"></i>
      </div>
      <div>
        <i className="bi bi-twitter text-white hover:text-red cursor-pointer transition-colors"></i>
      </div> */}
    </div>
  )
}

export default Socials
