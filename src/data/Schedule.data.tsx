import { ScheduleData } from '../types/schedule'

export const scheduleData = [
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
    speaker: 'Bardish Chagger',
    time: "10:07 AM",
    location: "Auditorium",
  }],
  [{
    type: 'speech',
    speaker: 'Dorothy McCabe',
    time: "10:12 AM",
    location: "Auditorium",
  }],
  [{
    type: 'speech',
    speaker: 'Paul Smith',
    time: "10:17 AM",
    location: "Auditorium",
  }],
  [{
    type: 'speech',
    speaker: "Katelyn Wu",
    time: "10:40 AM",
    location: "Auditorium",
  }],
  [{
    type: 'speech',
    speaker: "Aditya Dewan",
    time: "10:58 AM",
    location: "Auditorium",
  }],
  [{
    type: 'speech',
    speaker: "Jacklyn Biggin",
    time: "11:16 AM",
    location: "Auditorium",
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
    speaker: "Dr. James Danckert",
    time: "12:00 PM",
    location: "Auditorium",
  }],
  [{
    type: 'speech',
    speaker: "Steven Bryson",
    time: "12:18 PM",
    location: "Auditorium",
  }],
  [{
    type: 'speech',
    speaker: "Elaine Xiao",
    time: "12:36 PM",
    location: "Auditorium",
  }],
  [{
    type: 'speech',
    speaker: "Dr. John Donohue",
    time: "12:54 PM",
    location: "Auditorium",
  }],
  [{
    type: 'networking',
    title: "Lunch",
    time: "1:15 PM",
    location: "Networking Area",
    description: <div>Take a break from listening to speeches to grab lunch!</div>
  }, {
    type: 'speech',
    title: "Quantum Bits and Quantum Cryptography - Workshop",
    time: "1:30 PM",
    location: "TBA",
    description: <div>How do we actually use the features of quantum mechanics to build new technologies? In this workshop, we'll take a closer look at quantum cryptography, which uses quantum superposition and the uncertainty principle to keep information secure. You'll get a chance to see how it works both in theory and in practice, and see how these ideas extend to other technologies like quantum computers.</div>
  }],
  [{
    type: 'performance',
    title: "Blind-Folded Ballade Coda - Michael Xu",
    time: "2:15 PM",
    location: "Auditorium",
    description: <div>Ballade in G minor op.1 no. 23 or Revolutionary op. 10, no. 12. These are famous classical piano songs that Michael has played in the past and are in multiple movies/animes. He has made many provincial and national level titles in terms of music and exam scores, as his grade eight music exam score is a 97% average (First Class Honours with Distinction) and also grade 10 is a 90% average. He's gonna play these...blindfolded ;)</div>
  }],
  [{
    type: 'speech',
    speaker: "Paris Cai",
    time: "2:25 PM",
    location: "Auditorium",
  }],
  [{
    type: 'speech',
    speaker: "Cindy Cheng",
    time: "2:43 PM",
    location: "Auditorium",
  }],
  [{
    type: 'speech',
    speaker: "Aminka Belvitt",
    time: "3:01 PM",
    location: "Auditorium",
  }],
  [{
    type: 'networking',
    title: "Networking and Snacks",
    time: "3:25 PM",
    location: "Networking Area",
    description: <div>Eat and talk to each other</div>
  }],
  [{
    type: 'performance',
    title: "Tum Hi Ho | Diamonds - Hindi/English mashup - Pavani Sangapallar",
    time: "3:45 PM",
    location: "Auditorium",
  }],
  [{
    type: 'speech',
    speaker: "Ammaar Khan",
    time: "3:55 PM",
    location: "Auditorium",
  }],
  [{
    type: 'speech',
    speaker: "Milind Kumar",
    time: "4:13 PM",
    location: "Auditorium",
  }],
  [{
    type: 'speech',
    speaker: "Bob Egan",
    time: "4:31 PM",
    location: "Auditorium",
  }],
  [{
    type: 'ceremony',
    title: "Closing Ceremony",
    time: "4:50 PM",
    location: "Auditorium",
    description: <div>Thank you for attending TED<sup>x</sup>Columbia Lake Youth! The organizers will step on stage for some closing remarks.</div>
  }]
] as ScheduleData[][]

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