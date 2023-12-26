import { parsedSpeakerData } from '../../data/Speakers.data';
import Person from '../../components/Person';
import './Speakers.scss'

const Speakers = () => {
  return (
    <div className='flex flex-col items-center pt-24 max-w-[100rem] mx-auto' id='speakers'>
      {parsedSpeakerData.map((section, index) => {
        return (
          <div key={`speakersection-${index}`} className='mt-8'>
            <h2 className='text-center'>{section.title}</h2>
            <div className='speaker-section'>
              {Object.entries(section.data).map((person: any) => {
                const personName = person[0];
                const personData = person[1];
                return (
                  <Person
                    image={personData.image}
                    name={personName}
                    description={personData.affiliation}
                    key={`speaker-${personName}`}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Speakers;
