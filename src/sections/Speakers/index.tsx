import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { speakers, keynotes } from '../../data/Speakers.data'
import './Speakers.scss'
import norris from '../../assets/speakers/cnorris.jpg'
import joe from '../../assets/speakers/joe.jpg'

const Speakers = () => {
  return (
    <div className='flex flex-col items-center pt-24' id='speakers'>

      <h2 className='text-center'>Master of Ceremonies</h2>
      <div className="flex justify-center flex-wrap px-20 mt-4 gap-12 w-full">
        <div className='speaker md:w-1/4 mb-4'>
          <div className='aspect-square w-full h-full'>
            <LazyLoadImage
              src={
                norris
              }
              alt='Craig Norris'
              effect='blur' 
              wrapperClassName='rounded-full aspect-square'
              className="rounded-full aspect-square object-cover border-2 border-white"
            />
          </div>
          <h3 className='mt-4 text-2xl'>Craig Norris</h3>
          <p>Host, CBC K-W’s The Morning Edition on 89.1 FM and CBC Listen</p>
        </div>
        <div className='speaker md:w-1/4 mb-4'>
          <div className='aspect-square w-full'>
            <LazyLoadImage
              src={
                joe
              }
              alt='Joe Pavia'
              effect='blur' 
              wrapperClassName='rounded-full aspect-square'
              className="rounded-full aspect-square object-cover border-2 border-white"
            />
          </div>
          <h3 className='mt-4 text-2xl'>Joe Pavia</h3>
          <p>Reporter/Editor with CBC K-W 89.1 FM</p>
        </div>
      </div>

      <h2 className='mt-16'>Keynotes</h2>
      <div className="flex justify-center flex-wrap gap-12 mt-4 px-20 w-full">
        {Object.entries(keynotes).map((keynote:any) => {
          keynote = keynote[1]
          return (
            <div
              className="speaker md:w-1/4 aspect-square"
            >
              <div
                className="image w-full h-full aspect-square"
              >
                <LazyLoadImage
                  src={
                    keynote.image
                  }
                  alt={keynote.name}
                  effect='blur' 
                  wrapperClassName='inner-image'
                />
              </div>
              <h3>{keynote.name}</h3>
              <p className="talk">{keynote.talk}</p>
            </div>
          )
        })}
      </div>
      <h2 className='mt-8'>Speakers</h2>
      <div className="flex justify-center flex-wrap gap-12 mt-4 w-full">
        {Object.entries(speakers).map((speaker:any) => {
          speaker = speaker[1]
          return (
            <div
              className="speaker w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 aspect-square"
            >
              <div
                className="image w-full h-full aspect-square"
              >
                <LazyLoadImage
                  src={
                    speaker.image
                  }
                  alt={speaker.name}
                  effect='blur' 
                  wrapperClassName='inner-image'
                />
              </div>
              <h3>{speaker.name}</h3>
              <p className="talk">{speaker.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Speakers