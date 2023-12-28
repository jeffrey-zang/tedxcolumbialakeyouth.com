import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import tedx32 from '../../assets/photos/event/TedX-32.jpg'
import tedx31 from '../../assets/photos/event/tedx-31.webp'
import tedx35 from '../../assets/photos/event/TedX-35.webp'
import tedx38 from '../../assets/photos/event/TedX-38.webp'
import tedx45 from '../../assets/photos/event/TedX-45.webp'

const Photos = () => {
  return (
    <div className='mt-32 flex flex-col items-center gap-8 justify-center typography'>
      <h2>Event Photos</h2>
      <div className='flex gap-8 flex-col md:flex-row'>
        <LazyLoadImage effect='blur' src={tedx45} alt='tedx45' wrapperClassName='w-full md:w-1/3 object-cover hidden md:block' className='hidden md:block h-full object-cover' />
        <div className='flex flex-col gap-8 w-full md:w-2/3'>
          <LazyLoadImage effect='blur' src={tedx35} alt='tedx35 object-cover' />
          <LazyLoadImage effect='blur' src={tedx31} alt='tedx31 object-cover' />
          <LazyLoadImage effect='blur' src={tedx32} alt='tedx32 object-cover' />
        </div>
      </div>
      <LazyLoadImage effect='blur' src={tedx38} alt='tedx38' wrapperClassName='h-[20rem] w-full' className='h-full w-full object-cover' />
    </div>
  )
}

export default Photos