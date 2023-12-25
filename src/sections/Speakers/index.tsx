import { parsedSpeakerData } from '../../data/Speakers.data';
import Speaker from '../../components/Speaker';
import '../../components/Speaker/Speaker.scss';

const Speakers = () => {
  return (
    <div className='flex flex-col items-center pt-24' id='speakers'>
      {parsedSpeakerData.map((section, index) => {
        return (
          <div key={index}>
            <h2 className='text-center'>{section.title}</h2>
            <div className='speaker-section'>
              {Object.entries(section.data).map((person: any) => {
                const personName = person[0];
                const personData = person[1];
                return (
                  <Speaker
                    image={personData.image}
                    name={personName}
                    affiliation={personData.affiliation}
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
