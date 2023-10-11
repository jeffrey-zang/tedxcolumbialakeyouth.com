import { BsInstagram } from 'react-icons/bs'
import { SiTwitter } from 'react-icons/si'
import { SocialsData } from '../types/socials'
import { AiFillYoutube } from 'react-icons/ai'

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
  }, {
    href: "https://www.youtube.com/@TEDxColumbiaLakeYouth",
    icon: <AiFillYoutube />,
    alt: 'Youtube'
  }
]

export default socialsData