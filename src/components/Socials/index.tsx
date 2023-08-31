import socialsData from "../../data/Socials.data"

const Socials = () => {
  return (
    <div className='flex gap-2'>
      {
        socialsData.map((social) => {
          return (
            <div onClick={() => window.open(social.href)} className='hover:text-red transition-colors cursor-pointer'>
              {social.icon}
            </div>
          )
        })
      }
    </div>
  )
}

export default Socials
