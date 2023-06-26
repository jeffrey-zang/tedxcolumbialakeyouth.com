import Title from "../Title"
import Socials from "../Socials"

const Footer = () => {
  return (
    <div className='bg-[#000] grid grid-cols-3 p-12'>
      <div>
        <h2 className='text-xl font-normal'>
          <Title />
          <Socials />
        </h2>

      </div>
        <h2 className="text-xl uppercase text-dimmed">Site Navigation</h2>
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default Footer