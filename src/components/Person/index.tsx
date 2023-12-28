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
    <div className={`person w-2/3 sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4 transition-all`}>
      <div className='aspect-square w-full'>
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
      <h3 className='text-2xl'>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default Person