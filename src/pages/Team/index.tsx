import './Team.scss'

import Hooman from "../../assets/headshots/hooman.jpg"
import Yoyo from "../../assets/headshots/yoyo.png"
import Victor from "../../assets/headshots/victor.jpeg"
import Jeffrey from "../../assets/headshots/jeffrey.jpg"
import Aasha from "../../assets/headshots/aasha.jpeg"
import Shawn from "../../assets/headshots/shawn.jpeg"
import Lauren from "../../assets/headshots/lauren.jpg"

const Team = () => {
  
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
    },
    {
      name: "Shawn Xiao",
      role: "Marketing and Design",
      image: Shawn,
      href: "https://www.linkedin.com/in/shawn-xiao-1b1b1b1b1/"
    }, 
    {
      name: "Lauren Hsu",
      role: "Marketing and Design",
      image: Lauren,
    },
  ]
  
  return (
    <div className='typography'>
      <h2 className='text-center'>Meet the team</h2>
      <p className='text-center mb-8'>The individuals hard at work to make this event possible!</p>
      <div className='flex justify-center flex-wrap gap-8'>
        {
          humans.map((human) => {
            return (
              <div className={`human w-full md:w-1/3 lg:w-1/4 ${(human.href) ? "href" : ""}`} onClick={() => {if (human.href) {window.open(human.href)}}}>
                <div className='image'><img src={human.image} alt={human.name} /></div>
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
