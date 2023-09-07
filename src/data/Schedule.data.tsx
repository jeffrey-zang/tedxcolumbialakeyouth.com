import { ScheduleData } from '../types/schedule'

export const scheduleData:ScheduleData[][] = [
  [{
    type: 'main',
    title: "Arrival and Registration Begins",
    time: "9:00 AM",
    description: <div>TED<sup>x</sup>Columbia Lake Youth officially begins now! Head over to our venue to check-in!</div>
  }],
  [{
    type: 'ceremony',
    title: "Opening Ceremony",
    time: "10:00 AM",
    description: <div>Welcome to TED<sup>x</sup>Columbia Lake Youth! Join us for our opening ceremony, keynote speeches, and an official video from TED!</div>
  }],
]

type eventColours = {
  [key: string]: string
}

export const eventColours:eventColours = {
  main: "#FF0A34",
  speech: "#f9b774",
  networking: "#c083fb",
  ceremony: "#90d986",
  performance: "#3b81f6"
}