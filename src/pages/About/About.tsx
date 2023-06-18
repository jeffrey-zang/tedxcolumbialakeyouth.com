import wavedown from '../../assets/wave-down.svg'
import kpl from '../../assets/kpl.jpg'

const About = () => {
  return (
    <div className='z-40 about mt-[99dvh] bg-gradient-to-b from-black via-darkred to-black'>
      <img src={wavedown} alt='wavedown' className='w-full' />
      <div className='section mt-8'>
        <div className='section-wrapper'>
          <h2>What is <span className='font-normal'><span className='font-black text-red'>TED<sup>x</sup></span>Columbia Lake <span className='font-bold'>Youth</span></span>?</h2>
          <p>
            It's where innovation, inspiration, and education collide. Situated in the heart of the Waterloo region, TEDxColumbia Lake Youth is the celebration of young minds shaping the future. Our mission is to motivate, inspire, and encourage the next generation of changemakers and leaders to unleash their passions, carve their own paths of learning, and become catalysts for positive change. Join us to pave the way to reinventing education.<br/><br/>
            Our theme is reinventing education, aiming to inspire a young audience to seek learning outside the classroom. With experts and inspiring speakers from across the region, we're looking to share recent case studies and strategies spanning the personal, societal and physical branches of learning.
          </p>
        </div>
        <img src={kpl} alt='kpl'></img>
      </div>
      <div className='section mt-8 pb-16'>
        <div className='section-wrapper'>
          <h2>What is <a href='https://www.ted.com/about/programs-initiatives/tedx-program'>TEDx?</a></h2>
          <p>In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxColumbia Lake Youth, where x = independently organized TED event. At TEDxColumbia Lake Youth, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</p>
        </div>
      </div>
    </div>
  )
}

export default About