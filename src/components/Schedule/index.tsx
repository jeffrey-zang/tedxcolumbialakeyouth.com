import { scheduleData, eventColours } from "../../data/Schedule.data";
import { useState } from "react";
import { ScheduleData } from "../../types/schedule";

const Schedule = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ScheduleData>({
    type: "",
    title: "",
    time: "",
    location: "",
    description: <></>  
  });

  const handleClick = (item: ScheduleData) => {
    setModalData(item);
    setModalShow(true);
  };

  return (
    <div className="flex flex-col gap-4 typography">
      {scheduleData.map((item) => {
        if (item.length === 1) {
          return (
            <div className="flex gap-4">
              <div
                className="bg-[#7f0827] p-4 rounded-r-md border-l-[5px] w-full transition-opacity" // cursor-pointer hover:opacity-80
                style={{ borderLeftColor: eventColours[item[0].type] }}
                // onClick={() => {handleClick(item[0])}}
              >
                <h3 className="text-xl">{item[0].title}</h3>
                <p>
                  {item[0].time} {item[0].location && <>@ {item[0].location}</>}
                </p>
              </div>
            </div>
          );
        } else {
          return (
            <div className="flex gap-4">
              <div
                className="bg-[#7f0827] p-4 rounded-r-md w-1/2 border-l-[5px] cursor-pointer hover:opacity-80 transition-opacity"
                style={{ borderLeftColor: eventColours[item[0].type] }}
                onClick={() => {handleClick(item[0])}}
              >
                <h3 className="text-xl">{item[0].title}</h3>
                <p>
                  {item[0].time} {item[0].location && <>@ {item[0].location}</>}
                </p>
              </div>
              <div
                className="bg-[#7f0827] p-4 rounded-r-md w-1/2 border-l-[5px] cursor-pointer hover:opacity-80 transition-opacity"
                style={{ borderLeftColor: eventColours[item[1].type] }}
                onClick={() => {handleClick(item[1])}}
              >
                <h3 className="text-xl">{item[1].title}</h3>
                <p>
                  {item[1].time} {item[1].location && <>@ {item[1].location}</>}
                </p>
              </div>
            </div>
          );
        }
      })}

      <div className={`fixed top-0 left-0 z-50 w-screen h-screen transition-opacity cursor-pointer backdrop-blur-md ${modalShow ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setModalShow(false)}>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 bg-black border p-8 rounded-lg -translate-y-1/2 z-50'>
          <h3 className="text-2xl">{modalData.title}</h3>
          <p className='mb-4'>
            {modalData.time} {modalData.location && <>@ {modalData.location}</>}
          </p>
          {modalData.description}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
