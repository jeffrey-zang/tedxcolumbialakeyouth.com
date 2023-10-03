import { scheduleData, eventColours } from "../../data/Schedule.data";
import { allSpeakers } from "../../data/Speakers.data";
import { useState } from "react";
import { ScheduleData } from "../../types/schedule";

const Schedule = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ScheduleData>({
    type: "",
    title: "",
    speaker: "",
    time: "",
    location: "",
    description: <></>,
  });

  const handleClick = (item: ScheduleData) => {
    setModalData(item);
    setModalShow(true);
  };

  return (
    <div className="flex flex-col gap-4 typography">
      {scheduleData.map((item) => {
        let event: ScheduleData = item[0];

        if (item.length === 1) {
          return (
            <div className="flex gap-4">
              <div
                className={`bg-[#7f0827] p-4 rounded-r-md border-l-[5px] w-full transition-opacity ${
                  event.description ||
                  (event.speaker && allSpeakers[event.speaker].description)
                    ? "cursor-pointer hover:opacity-80"
                    : ""
                }`}
                style={{ borderLeftColor: eventColours[event.type] }}
                onClick={() => {
                  if (
                    event.description ||
                    (event.speaker && allSpeakers[event.speaker].description)
                  )
                    handleClick(event);
                }}
              >
                <h3 className="text-xl">
                  {event.speaker
                    ? allSpeakers[event.speaker].title
                    : event.title}
                </h3>
                <p className="font-bold">{event.speaker && event.speaker} {event.speaker && '—'} {event.speaker && allSpeakers[event.speaker].affiliation}</p>
                <p>
                  {event.time} {event.location && <>@ {event.location}</>}
                </p>
              </div>
            </div>
          );
        } else {
          let event2: ScheduleData = item[1];

          return (
            <div className="flex gap-4 flex-col md:flex-row">
              <div
                className="bg-[#7f0827] p-4 rounded-r-md w-full md:w-1/2 border-l-[5px] cursor-pointer hover:opacity-80 transition-opacity"
                style={{ borderLeftColor: eventColours[event.type] }}
                onClick={() => {
                  if (
                    event.description ||
                    (event.speaker && allSpeakers[event.speaker].description)
                  )
                    handleClick(event);
                }}
              >
                <h3 className="text-xl">
                  {event.speaker
                    ? allSpeakers[event.speaker].title
                    : event.title}
                </h3>
                <p className="font-bold">{event.speaker && event.speaker} {event.speaker && '—'} {event.speaker && allSpeakers[event.speaker].affiliation}</p>
                <p>
                  {event.time} {event.location && <>@ {event.location}</>}
                </p>
              </div>
              <div
                className="bg-[#7f0827] p-4 rounded-r-md w-full md:w-1/2 border-l-[5px] cursor-pointer hover:opacity-80 transition-opacity"
                style={{ borderLeftColor: eventColours[event2.type] }}
                onClick={() => {
                  if (
                    event2.description ||
                    (event2.speaker && allSpeakers[event2.speaker].description)
                  )
                    handleClick(event2);
                }}
              >
                <h3 className="text-xl">
                  {event2.speaker
                    ? allSpeakers[event2.speaker].title
                    : event2.title}
                </h3>
                <p className="font-bold">{event.speaker && event.speaker} {event.speaker && '—'} {event.speaker && allSpeakers[event.speaker].affiliation}</p>
                <p>
                  {event2.time} {event2.location && <>@ {event2.location}</>}
                </p>
              </div>
            </div>
          );
        }
      })}

      <div
        className={`fixed top-0 left-0 z-50 w-screen h-screen transition-opacity cursor-pointer backdrop-blur-md ${
          modalShow
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setModalShow(false)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-black w-[90%] overflow-y-auto max-h-[80vh] md:w-1/2 border p-6 md:p-8 rounded-lg -translate-y-1/2 z-50">
          <h3 className="text-xl">
            {modalData.speaker
              ? allSpeakers[modalData.speaker].title
              : modalData.title}
          </h3>
          <p className="font-bold">{modalData.speaker && modalData.speaker} {modalData.speaker && '—'} {modalData.speaker && allSpeakers[modalData.speaker].affiliation}</p>
          <p className="mb-4">
            {modalData.time} {modalData.location && <>@ {modalData.location}</>}
          </p>
          {modalData.description && modalData.description}
          {modalData.speaker && allSpeakers[modalData.speaker].description}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
