import { BsInstagram } from 'react-icons/bs'
import { SiTwitter } from 'react-icons/si'

const Socials = () => {
  return (
    <div className='flex gap-2'>
      <div onClick={() => window.open('https://www.instagram.com/tedxcolumbialakeyouth/')}>
        <BsInstagram className="text-white hover:text-red cursor-pointer transition-colors" />
      </div>
      <div onClick={() => window.open('https://twitter.com/TEDxColumbiaY')}>
        <SiTwitter className="text-white hover:text-red cursor-pointer transition-colors" />
      </div>
    </div>
  )
}

export default Socials
