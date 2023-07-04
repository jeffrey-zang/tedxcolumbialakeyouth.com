import wavedown from '../../assets/wave/wave-down.svg'
import wavemobile from '../../assets/wave/wave-mobile-down.svg'
import kpl from '../../assets/photos/kpl.jpg'
import theatre from '../../assets/photos/theatre.webp'
import Title from '../../components/Title'

const Info = () => {
  return (
    <div className='z-40 about mt-[calc(99dvh-82px)] bg-gradient-to-b from-black via-darkred to-black' id='event-info'>
      <img src={wavedown} alt='wavedown' className='hidden md:block w-full' />
      <img src={wavemobile} alt='wave' className='block md:hidden w-full' />
      <div className='section typography mt-16'>
        <div className='section-wrapper'>
          <h2>What is <Title />?</h2>
          <p>
            It's where innovation, inspiration, and education collide. Situated in the heart of Waterloo Region, TED<sup>x</sup>Columbia Lake Youth is the celebration of young minds shaping the future. TED<sup>x</sup>Columbia Lake Youth's mission is to motivate, inspire, and encourage the next generation of changemakers and leaders to unleash their passions, carve their own paths of learning, and become catalysts for positive change. TED<sup>x</sup>Columbia Lake Youth is working to pave the way to reinventing education.<br/><br/>
            TED<sup>x</sup>Columbia Lake Youth's theme is reinventing education, aiming to inspire a young audience to seek learning outside the classroom. With experts and inspiring speakers from across the region, TED<sup>x</sup>Columbia Lake Youth is looking to share recent case studies and strategies spanning the personal, societal and physical branches of learning.
          </p>
        </div>
        <img src={kpl} alt='kpl'></img>
      </div>
      <div className='section typography mt-8 pb-16'>
        <img src={theatre} alt='theatre'></img>
        <div className='section-wrapper'>
          <h2>What is <a href='https://www.ted.com/about/programs-initiatives/tedx-program'>TED<sup>x</sup></a>?</h2>
          <p>In the spirit of ideas worth spreading, TED has created a program called TED<sup>x</sup>. TED<sup>x</sup> is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TED<sup>x</sup>Columbia Lake Youth, where x = independently organized TED event. At TED<sup>x</sup>Columbia Lake Youth, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TED<sup>x</sup> program, but individual TED<sup>x</sup> events, including ours, are self-organized.</p>
        </div>
      </div>
      <div className='section typography'>
        <div className='section-wrapper'>
          <h2>Applications Opening Soon</h2>
          <p>Want to get inspired or make an impact on the youth innovators of the future? Participate in the event as a speaker or attendee! Keep in touch through our <a href='https://www.instagram.com/ted<sup>x</sup>columbialakeyouth/'>Instagram</a>. Applications will be opening in the coming months, so keep an eye out! Have questions? Reach out to us <a href='mailto:ted<sup>x</sup>columbialakeyouth@gmail.com'>here!</a></p>
        </div>
      </div>
    </div>
  )
}

export default Info