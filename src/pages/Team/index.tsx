import { humans, bearLinks } from "../../data/Team.data";
import { useState } from "react";
import Person from '../../components/Person';

const Team = () => {
  const [bears, setBears] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto max-w-[100rem]">
      <button
        style={{ opacity: count / 10 + 0.1 }}
        className="text-lg no-styles absolute cursor-pointer"
        onClick={() => {
          setCount(count + 1);
          if (count >= 10) {
            setBears(true);
          }
        }}
      >
        🐻
      </button>
      <h2 className="text-center">Meet the {bears ? "bears" : "team"}</h2>
      <p className="text-center mb-8">
        The {bears ? "fluffy animals" : "individuals"} hard at work to make this
        event possible!
      </p>

      <div className="flex justify-center flex-wrap gap-12">
        {humans.map((human, index) => {
          return (
            <Person 
              onClick={() => {
                if (human.href && !bears) {
                  window.open(human.href);
                }
                if (human.href && bears) {
                  window.open(
                    bearLinks[Math.floor(Math.random() * bearLinks.length)]
                  );
                }
              }}
              image={
                bears
                  ? `https://placebear.com/${
                      Math.random() > 0.8 ? "g/" : ""
                    }${Math.round(Math.random() * 600 + 400)}/${Math.round(
                      Math.random() * 600 + 400
                    )}`
                  : human.image
              }
              name={human.name}
              description={human.role}
              key={`human-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Team;
