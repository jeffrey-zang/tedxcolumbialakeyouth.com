import lake from '../../assets/photos/cly.webp'
import tedx from '../../assets/photos/TEDx-2.webp'
import Title from '../../components/Title'
import './Info.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReactPlayer from 'react-player'

const Info = () => {

  return ( 
    <div className='z-40 about mb-32' id='event-info'>
      <div className='h-8 bg-[#c20025] opacity-90'></div>
      <div className='h-8 bg-[#c20025] opacity-70'></div>
      <div className='h-8 bg-[#c20025] opacity-50'></div>
      <div className='h-8 bg-[#c20025] opacity-20'></div>

      <h4 className='text-center my-8 text-2xl mt-20'>A message from the Prime Minister</h4>
      <div className='mx-auto aspect-video border-[1px] border-red grid-place-items-center bg-[#000] w-[90%] sm:w-3/4 lg:w-1/2'>
        <ReactPlayer url='https://www.dropbox.com/scl/fi/m8ysa9lxid2snmuk4bx3z/PRIME_MINISTER_VIDEO_OMG.mp4?rlkey=dt3z1z3xw1dtmsifpzqowhlbe&raw=1' width='100%' height='100%' controls={true} className='rounded-xl' />
      </div>

      <div className='section typography mt-20'>
        <div className='section-wrapper'>
          <h2>What is <Title />?</h2>
          <p>
            It's where innovation, inspiration, and education collide. Situated in the heart of Waterloo Region, TED<sup>x</sup>Columbia Lake Youth is the celebration of young minds shaping the future. TED<sup>x</sup>Columbia Lake Youth's mission is to motivate, inspire, and encourage the next generation of changemakers and leaders to unleash their passions, carve their own paths of learning, and become catalysts for positive change. TED<sup>x</sup>Columbia Lake Youth is working to pave the way to reinventing education.<br/><br/>
            TED<sup>x</sup>Columbia Lake Youth's theme is reinventing education, aiming to inspire a young audience to seek learning outside the classroom. With experts and inspiring speakers from across the region, TED<sup>x</sup>Columbia Lake Youth is looking to share recent case studies and strategies spanning the personal, societal and physical branches of learning.
          </p>
        </div>
        <LazyLoadImage src={lake} alt='lake' effect='blur' wrapperClassName='lazy-load-image' />
      </div>
      <div className='section typography mt-20 pb-16'>
        <LazyLoadImage src={tedx} alt='tedx' effect='blur' wrapperClassName='lazy-load-image' />
        <div className='section-wrapper'>
          <h2>What is <a href='https://www.ted.com/about/programs-initiatives/tedx-program'>TED<sup>x</sup></a>?</h2>
          <p>In the spirit of ideas worth spreading, TED has created a program called TED<sup>x</sup>. TED<sup>x</sup> is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TED<sup>x</sup>Columbia Lake Youth, where x = independently organized TED event. At TED<sup>x</sup>Columbia Lake Youth, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TED<sup>x</sup> program, but individual TED<sup>x</sup> events, including ours, are self-organized.</p>
        </div>
      </div>
    </div>
  )
}

export default Info