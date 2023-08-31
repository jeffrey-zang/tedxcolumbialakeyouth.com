import { BsInstagram } from 'react-icons/bs'
import { SiTwitter } from 'react-icons/si'
import { SocialsData } from '../types/socials'

const socialsData:SocialsData[] = [
  {
    href: "https://www.instagram.com/tedxcolumbialakeyouth/",
    icon: <BsInstagram />,
    alt: 'Instagram'
  },
  {
    href: "https://twitter.com/TEDxColumbiaY",
    icon: <SiTwitter />,
    alt: 'Twitter'
  }
]

export default socialsData