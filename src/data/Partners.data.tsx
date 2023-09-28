import { Partner } from "../types/partners"
import ked from '../assets/partners/ked.jpg'
import kit from '../assets/partners/kit.jpg'
import meal from '../assets/partners/meal.png'
import ctrlv from '../assets/partners/ctrlv.png'
import fog from '../assets/partners/fog.png'
import sweet from '../assets/partners/sweet.avif'
import pillers from '../assets/partners/Pillers.webp'
import sd from '../assets/partners/sd.png'
import idle from '../assets/partners/idle.webp'
import sjp from '../assets/partners/SJP.png'
import wrsbc from '../assets/partners/wrsbc.png'
import cbc from '../assets/partners/cbc.png'

export const partnerData = [
{
    logo: ked,
    href: "https://www.tedxkitchenered.com",
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
    logo: cbc,
    href: "https://cbc.ca/kw",
    class: "p-0"
  }
] as Partner[]