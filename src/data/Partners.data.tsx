import { Partner } from "../types/partners"
import ycf from '../assets/partners/ycf.png'
import ked from '../assets/partners/ked.jpg'
import kit from '../assets/partners/kit.jpg'
import swril from '../assets/partners/swril.jpg'
import meal from '../assets/partners/meal.png'
import ctrlv from '../assets/partners/ctrlv.png'
import fog from '../assets/partners/fog.png'
import sweet from '../assets/partners/sweet.avif'
import pillers from '../assets/partners/Pillers.webp'
import sd from '../assets/partners/sd.png'
import idle from '../assets/partners/idle.webp'
import sjp from '../assets/partners/SJP.png'
import wrsbc from '../assets/partners/wrsbc.png'
import wrdsb from '../assets/partners/wrdsb.png'

export const partnerData = [
  {
    logo: ycf,
    href: "https://youthcreativityfund.ca",
    class: "bg-black border-2 border-white"
  }, {
    logo: ked,
    href: "https://www.tedxkitchenered.com",
  }, {
    logo: swril,
    href: "https://www.swril.ca"
  }, {
    logo: meal,
    href: "https://www.mealinajar.com"
  }, {
    logo: sweet,
    href: "https://sweetlouscookies.com"
  }, {
    logo: kit, 
    href: "https://www.kitchener.ca/en/index.aspx"
  }, {
    logo: ctrlv,
    href: "https://www.ctrlv.ca"
  }, {
    logo: fog,
    href: "https://www.fogoffclothing.com",
    class: "bg-[#000] border-2 border-white"
  }, {
    logo: pillers,
    href: "https://www.pillers.com"
  }, {
    logo: sd,
    href: "https://sweetdreamsteashop.com"
  }, {
    logo: idle,
    href: "https://idleandwood.ca"
  }, {
    logo: sjp, 
    href: "http://www.stjacobsprintery.com"
  }, {
    logo: wrsbc,
    href: "https://www.waterlooregionsmallbusiness.com"
  }, {
    logo: wrdsb,
    href: "https://www.wrdsb.ca"
  }
] as Partner[]