import { speakers, keynotes, mcs } from '../../data/Speakers.data'
import './Speakers.scss'
import pavani from '../../assets/speakers/pavani.jpg'
import Speaker from './Speaker'

const Speakers = () => {
  return (
    <div className='flex flex-col items-center pt-24' id='speakers'>

      <h2 className='text-center'>Master of Ceremonies</h2>
      <div className='flex flex-col items-center'>
        <div className="flex justify-center flex-wrap px-20 mt-4 gap-12 w-full">
          {Object.entries(mcs).map((mc:any) => {
            mc = mc[1]
            return (
              <Speaker image={mc.image} name={mc.name} affiliation={mc.affiliation} />
            )
          })}
        </div>
      </div>

      <h2 className='mt-16'>Keynotes</h2>
      <div className="flex justify-center flex-wrap gap-12 mt-4 px-20 w-full">
        {Object.entries(keynotes).map((keynote:any) => {
          keynote = keynote[1]
          return (
            <Speaker image={keynote.image} name={keynote.name} affiliation={keynote.affiliation} />
          )
        })}
      </div>
      
      <h2 className='mt-8'>Speakers</h2>
      <div className="flex justify-center flex-wrap gap-12 mt-4 w-full">
        {Object.entries(speakers).map((speaker:any) => {
          speaker = speaker[1]
          return (
            <Speaker image={speaker.image} name={speaker.name} affiliation={speaker.affiliation} />
          );
        })}
      </div>

      <h2 className='mt-8'>Performers</h2>
      
      <div className="flex justify-center flex-wrap px-20 mt-4 gap-12 w-full">
        <Speaker image={pavani} name={"Pavani Sangapallar"} affiliation={"Tum Hi Ho | Diamonds - Hindi/English mashup"} />
      </div>
    </div>
  )
}

export default Speakers