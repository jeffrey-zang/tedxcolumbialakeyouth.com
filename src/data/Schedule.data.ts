import { ScheduleData } from '../types/schedule'

export const scheduleData:ScheduleData[][] = [
  [{
    type: 'main',
    title: "Arrival and registration",
    time: "9:00",
    location: "breyers",
    description: "Arrival and registrationasdfasd"
  }],
  [
    {
      type: 'speech',
      title: "Arrival and registration",
      time: "9:00",
      location: "breyers",
      description: "Arrival and registrationasdfasd"
    },
    {
      type: 'networking',
      title: "Arrival and registrationasdfas",
      time: "9:00",
      location: "breyers",
      description: "Arrival and registrationasdfasd"
    }
  ]
]

type eventColours = {
  [key: string]: string
}

export const eventColours:eventColours = {
  main: "#FF0A34",
  speech: "#f9b774",
  networking: "#c083fb"
}