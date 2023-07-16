import tedx from '../../assets/photos/tedx.webp'

const About = () => {
  return (
    <>
    <div className='pt-16 section typography'>
      <div className='section-wrapper'>
        <h2>About TED<sup>x</sup>, x = independently organized event</h2>
        <p>
          In the spirit of ideas worth spreading, TED<sup>x</sup> is a program of local, self-organized events that bring people together to share a TED-like experience. At a TED<sup>x</sup> event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TED<sup>x</sup>, where x = independently organized TED event. The TED Conference provides general guidance for the TED<sup>x</sup> program, but individual TED<sup>x</sup> events are self-organized. (Subject to certain rules and regulations.)
        </p>
      </div>
      <img src={tedx} alt='tedx' />
    </div>
    <div className='mt-8 section typography'>
      <div className='section-wrapper'>
        <h2>About TED</h2>
        <p>
          TED is a nonprofit organization devoted to Ideas Worth Spreading, often in the form of short talks delivered by leading thinkers and doers. Many of these talks are given at TED Conferences, intimate TED Salons and thousands of independently organised TED<sup>x</sup> events around the world. Videos of these talks are made available, free, on <a href='https://www.ted.com'>TED.com</a> and other platforms. Audio versions of TED Talks are published to <a href='https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?mt=2&path=podcasts/tedtalksdaily'>TED Talks Daily</a>, available on all podcast platforms.
          <br/><br/>
          TED's open and free initiatives for spreading ideas include <a href='https://www.ted.com'>TED.com</a>, where new TED Talk videos are posted daily; <a href='https://www.ted.com/about/programs-initiatives/tedx-program'>TED<sup>x</sup></a>, which licenses thousands of individuals and groups to host local, self-organized TED-style events around the world; the <a href='https://www.ted.com/participate/ted-fellows-program'>TED Fellows</a> program, which selects innovators from around the globe to amplify the impact of their remarkable projects and activities; <a href='https://www.audaciousproject.org'>The Audacious Project</a>, which surfaces and funds critical ideas that have the potential to impact millions of lives; <a href='https://www.ted.com/about/programs-initiatives/ted-translators'>TED Translators Program</a>, which crowdsources the subtitling of TED Talks so that big ideas can spread across languages and borders; and the educational initiative <a href='https://ed.ted.com'>TED-Ed</a>. TED also offers <a href='https://tedatwork.ted.com'>TED@Work</a> a program that reimagines TED Talks for workplace learning. TED also has a growing library of original podcasts, including The <a href='https://www.ted.com/podcasts/ted-interview'>TED Interview</a> with Chris Anderson, <a href='https://www.ted.com/podcasts/worklife'>WorkLife with Adam Grant</a>, <a href='https://www.ted.com/podcasts/far_flung_with_saleem_reshamwala'>Far Flung with Saleem Reshamwala</a> and <a href='https://www.ted.com/podcasts/how-to-be-a-better-human'>How to Be a Better Human</a>.
          <br/><br/>
          Follow TED on <a href='https://twitter.com/TEDTalks'>Twitter</a>, <a href='https://www.facebook.com/TED'>Facebook</a>, <a href='https://www.instagram.com/ted/'>Instagram</a> and on <a href='https://www.linkedin.com/company/ted-conferences/'>LinkedIn</a>.
        </p>
      </div>
    </div>
    </>
  )
}

export default About