import { Partner } from "../types/partners"

// platinum partners
import uw from "../assets/partners/uw.png";
import ycf from "../assets/partners/ycf.png";
import wrdsb from "../assets/partners/wrdsb.png";
import swril from "../assets/partners/swril.jpg";
import zehrs from "../assets/partners/ZEHRS.avif";

// big partners
import ked from '../assets/partners/ked.jpg'
import kit from '../assets/partners/kit.jpg'
import meal from '../assets/partners/meal.png'
import ctrlv from '../assets/partners/ctrlv.png'
import fog from '../assets/partners/fog.png'
import sweet from '../assets/partners/cookies.png'
import pillers from '../assets/partners/Pillers.webp'
import sd from '../assets/partners/sd.png'
import idle from '../assets/partners/idle.webp'
import wrsbc from '../assets/partners/wrsbc.png'
import cbc from '../assets/partners/cbc.png'

export const platinumPartners = [
  {
    logo: uw,
    href: "https://uwaterloo.ca"
  }, {
    logo: ycf,
    href: "https://youthcreativityfund.ca",
    class: "bg-[#000] border-2 border-white"
  }, {
    logo: wrdsb,
    href: "https://www.wrdsb.ca"
  }, {
    logo: swril,
    href: "https://www.swril.ca"
  }, {
    logo: zehrs,
    href: "https://www.zehrs.ca/"
  }
] as Partner[]

export const partnerData = [
  {
    logo: ked,
    href: "https://www.tedxkitchenered.com",
  }, {
    logo: meal,
    href: "https://www.mealinajar.com"
  }, {
    logo: sweet,
    href: "https://sweetlouscookies.com",
    class: "bg-[#2f062d] border-2 border-white"
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
    logo: wrsbc,
    href: "https://www.waterlooregionsmallbusiness.com"
  }, {
    logo: cbc,
    href: "https://cbc.ca/kw",
    class: "p-0"
  }
] as Partner[]