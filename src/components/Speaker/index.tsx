import './Speaker.scss'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface SpeakerPropType {
  image: string;
  name: string;
  affiliation: string;
}

const Speaker = (props:SpeakerPropType) => {
  return (
    <div className='speaker w-full sm:w-1/2 md:w-1/5 mb-4'>
      <div className='aspect-square w-full h-full'>
        <LazyLoadImage
          src={
            props.image
          }
          alt={props.name}
          effect='blur' 
          wrapperClassName='rounded-full aspect-square'
          className="rounded-full aspect-square object-cover border-2 border-white"
        />
      </div>
      <h3 className='mt-4 text-2xl'>{props.name}</h3>
      <p>{props.affiliation}</p>
    </div>
  )
}

export default Speaker