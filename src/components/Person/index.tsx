import './Person.scss'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface PersonPropType {
  image: string;
  name: string;
  description: string;
  onClick?: () => void;
}

const Person = (props:PersonPropType) => {
  return (
    <div className={`person w-full sm:w-1/2 md:w-1/5 mb-4 transition-all`}>
      <div className='aspect-square w-full h-full'>
        <LazyLoadImage
          src={
            props.image
          }
          alt={props.name}
          effect='blur'
          onClick={props.onClick}
          className={`${props.onClick ? "linked cursor-pointer" : ""}`}
        />
      </div>
      <h3 className='mt-4 text-2xl'>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default Person