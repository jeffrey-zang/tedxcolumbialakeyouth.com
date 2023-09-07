import {scheduleData, eventColours} from '../../data/Schedule.data'

const Schedule = () => {
  return (
    <div className='flex flex-col gap-4 typography'>{
      scheduleData.map((item) => {
        if (item.length === 1) {
          return (
            <div className='flex gap-4'>
              <div className='bg-[#7f0827] p-4 rounded-r-md border-l-4 w-full' style={{borderLeftColor: eventColours[item[0].type]}}>
                <h3 className='text-xl'>{item[0].title}</h3>
                <p>{item[0].time} {item[0].location && <>@ {item[0].location}</>}</p>
              </div>
            </div>
          )  
        } else {
          return (
            <div className='flex gap-4'>
              <div className='bg-[#7f0827] p-4 rounded-r-md w-1/2 border-l-4' style={{borderLeftColor: eventColours[item[0].type]}}>
                <h3 className='text-xl'>{item[0].title}</h3>
                <p>{item[0].time} {item[0].location && <>@ {item[0].location}</>}</p>
              </div>
              <div className='bg-[#7f0827] p-4 rounded-r-md w-1/2 border-l-4' style={{borderLeftColor: eventColours[item[1].type]}}>
                <h3 className='text-xl'>{item[1].title}</h3>
                <p>{item[1].time} {item[1].location && <>@ {item[1].location}</>}</p>
              </div>
            </div>
          )  
        }
      })
    }</div>
  )
}

export default Schedule