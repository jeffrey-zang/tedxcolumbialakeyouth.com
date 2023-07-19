import './Partners.scss'
import ycf from '../../assets/partners/ycf.png'
import ked from '../../assets/partners/ked.jpg'
import uw from '../../assets/partners/uw.png'

const partnerData = [
  {
    "logo": ycf,
    "href": "https://youthcreativityfund.ca",
    "class": "bg-black border-2 border-white"
  }, {
    "logo": ked,
    "href": "https://www.tedxkitchenered.com",
  }
]

const Partners = () => {
  return (
    <div className='typography mt-16 flex-col mx-auto scroll-m-28' id='partners'>
      <h2 className='text-center'>Our Partners</h2>
      <img key='-1' className={`partner-logo p-4 !w-1/2 mx-auto`} src={uw} alt='sponsor' onClick={() => window.open('https://uwaterloo.ca')}></img>
      <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-8'>
        {partnerData.map((partner, index) => {
          return (
            <img key={index} className={`partner-logo p-4 ${partner.class}`} src={partner.logo} alt='sponsor' onClick={() => window.open(partner.href)}></img>
          )
        })}
      </div>
      <p className='text-center mt-8'>Want to support us? Check out our <a href='https://bank.hackclub.com/donations/start/tedxcolumbialakeyouth'>donation page</a> or contact us <a href='mailto:business@tedxcolumbialakeyouth.com'>here</a>.</p>
    </div>
  )
}

export default Partners