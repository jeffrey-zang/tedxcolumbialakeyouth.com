import './Team.scss'

import Hooman from "../../assets/headshots/hooman.webp"
import Yoyo from "../../assets/headshots/yoyo.webp"
import Victor from "../../assets/headshots/victor.webp"
import Jeffrey from "../../assets/headshots/jeffrey.webp"
import Aasha from "../../assets/headshots/aasha.webp"
import Shawn from "../../assets/headshots/shawn.webp"
import Lauren from "../../assets/headshots/lauren.webp"
import Liam from "../../assets/headshots/liam.webp"
import Ayush from "../../assets/headshots/ayush.webp"

import { useState } from 'react'

const Team = () => {

  const [bears, setBears] = useState(false)
  const [count, setCount] = useState(0)

  const humans = [
    {
      name: "Hooman Reza Nezhad",
      role: "Lead Organizer & Licensee",
      image: Hooman,
      href: "https://www.linkedin.com/in/hooman-nezhad/"
    },
    {
      name: "Yoyo Yuan",
      role: "Co-Organizer",
      image: Yoyo,
      href: "https://www.linkedin.com/in/yoyo-yuan/"
    },
    {
      name: "Victor Feng",
      role: "Co-Organizer",
      image: Victor,
      href: "https://www.linkedin.com/in/victor-feng1/"
    },
    {
      name: "Jeffrey Zang",
      role: "Website Manager",
      image: Jeffrey,
      href: "https://www.linkedin.com/in/jeffreyzang2007/"
    },
    { 
      name: "Aasha Khan",
      role: "Operations",
      image: Aasha,
      href: "https://www.linkedin.com/in/aasha-khan-3a2294250/"
    },
    {
      name: "Shawn Xiao",
      role: "Marketing and Design",
      image: Shawn,
    }, 
    {
      name: "Lauren Hsu",
      role: "Marketing and Design",
      image: Lauren,
    },
    {
      name: "Liam McNamara",
      role: "Sponsorships and Finance",
      image: Liam,
      href: "https://www.linkedin.com/in/liam-mcnamara-739775221/"
    },
    {
      name: "Ayush Malhotra",
      role: "Sponsorships and Finance",
      image: Ayush,
      href: "https://www.linkedin.com/in/ayush-malhotra-4416b51a5/"
    }
  ]

  const bearLinks = [
    'https://www.americanbear.org/education-awareness/bears-of-the-world/',
    'https://www.nationalgeographic.com/animals/mammals/facts/grizzly-polar-panda',
    'https://www.nwf.org/Educational-Resources/Wildlife-Guide/Mammals/black-bear',
    'https://www.nps.gov/subjects/bears/index.htm',
    'https://www.bearsmart.com/about-bears/north-americas-bears/',
    'https://animalfactguide.com/animal-facts/grizzly-bear/',
    'https://bearwise.org',
    'https://placebear.com'
  ]
  
  return (
    <div className='mx-auto max-w-[110rem]'>
      <button style={{opacity: count / 10 + 0.1}} className='text-lg no-styles absolute cursor-pointer' onClick={() => {setCount(count + 1); if (count >= 10) {setBears(true)}}}>🐻</button>
      <h2 className='text-center'>Meet the {(bears) ? "bears" : "team"}</h2>
      <p className='text-center mb-8'>The {(bears) ? "fluffy animals" : "individuals"} hard at work to make this event possible!</p>
      <div className='flex justify-center flex-wrap gap-12'>
        {
          humans.map((human) => {
            return (
              <div className={`human w-full md:w-1/3 lg:w-1/4 ${(human.href) ? "href" : ""}`}>
                <div className='image' onClick={() => {if (human.href && !bears) {window.open(human.href)}; if (human.href && bears) {window.open(bearLinks[Math.floor(Math.random() * bearLinks.length)])}}}><img src={(bears) ? `https://placebear.com/${(Math.random() > 0.8) ? 'g/' : ""}${Math.round(Math.random() * 600 + 400)}/${Math.round(Math.random() * 600 + 400)}` : human.image} alt={human.name} /></div>
                <h3>{human.name}</h3>
                <p className='role'>{human.role}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Team
