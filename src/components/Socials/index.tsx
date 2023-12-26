import socialsData from "../../data/Socials.data"

const Socials = () => {
  return (
    <div className='flex gap-2'>
      {
        socialsData.map((social, index) => {
          return (
            <div onClick={() => window.open(social.href)} key={`social-${index}`} className='hover:text-red transition-colors cursor-pointer'>
              {social.icon}
            </div>
          )
        })
      }
    </div>
  )
}

export default Socials
