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
    location: "Auditorium",
    description: <div>Welcome to TED<sup>x</sup>Columbia Lake Youth! Join us for our opening ceremony, keynote speeches, and an official video from TED!</div>
  }],
  [{
    type: 'speech',
    title: "Speaker #1",
    time: "10:40 AM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'speech',
    title: "Speaker #2",
    time: "10:58 AM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'speech',
    title: "Speaker #3",
    time: "11:16 AM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'networking',
    title: "Networking and Snacks",
    time: "11:40 AM",
    location: "Networking Area",
    description: <div>Eat and talk to each other</div>
  }],
  [{
    type: 'speech',
    title: "Speaker #4",
    time: "12:00 PM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'speech',
    title: "Speaker #5",
    time: "12:18 PM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'speech',
    title: "Speaker #6",
    time: "12:36 PM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'speech',
    title: "Speaker #7",
    time: "12:54 PM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'networking',
    title: "Lunch",
    time: "1:15 PM",
    location: "Networking Area",
    description: <div>Eat and talk to each other</div>
  }, {
    type: 'speech',
    title: "Workshop",
    time: "2:15 PM",
    location: "Auditorium",
    description: <div>IQC</div>
  }],
  [{
    type: 'performance',
    title: "Musical Performance",
    time: "2:15 PM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'speech',
    title: "Speaker #8",
    time: "2:25 PM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'speech',
    title: "Speaker #9",
    time: "3:43 PM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'speech',
    title: "Speaker #10",
    time: "3:01 PM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'speech',
    title: "Speaker #11",
    time: "3:19 PM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'networking',
    title: "Networking and Snacks",
    time: "3:45 PM",
    location: "Networking Area",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'performance',
    title: "Musical Performance",
    time: "4:05 PM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'speech',
    title: "Speaker #12",
    time: "4:15 PM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'speech',
    title: "Speaker #13",
    time: "4:33 PM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'speech',
    title: "Speaker #14",
    time: "4:51 PM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'speech',
    title: "Speaker #15",
    time: "5:09 PM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
  }],
  [{
    type: 'ceremony',
    title: "Closing Ceremony",
    time: "5:30 PM",
    location: "Auditorium",
    description: <div>Our first speaker will be announced soon!</div>
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