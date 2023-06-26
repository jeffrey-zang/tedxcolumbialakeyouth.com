import './Partners.scss'

import kpl from '../../assets/partners/kpl-logo.svg'
import kitchener from '../../assets/partners/kitchener.jpeg'
import hcb from '../../assets/partners/hcb.svg'

const partnerData = [
  {
    "logo": kpl,
    "href": "https://www.kpl.org"
  },
  {
    "logo": kitchener,
    "href": "https://www.tedxkitchenered.com"
  },
  {
    "logo": hcb,
    "href": "https://www.hackclub.com"
  }
]

const Partners = () => {
  return (
    <div className='max-w-[90rem] px-[5%] mt-16 flex-col mx-auto' id='partners'>
      <h2 className='text-center'>Our Partners</h2>
      <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-8'>
        {partnerData.map((partner) => {
          return (
            <img className='partner-logo p-4' src={partner.logo} alt='sponsor' onClick={() => window.open(partner.href)}></img>
          )
        })}
      </div>
      <p className='text-center mt-8'>Want to support us? Check out our <a href='https://bank.hackclub.com/donations/start/tedxcolumbialakeyouth'>donation page.</a></p>
    </div>
  )
}

export default Partners