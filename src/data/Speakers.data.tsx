// import each speaker image from ../../assets/speakers
import norris from '../assets/mcs/cnorris.jpg'
import joe from '../assets/mcs/joe.jpg'

// keynotes
import bardish from "../assets/keynotes/bardish.jpg";
import dorothy from "../assets/keynotes/dorothy.jpg";
import paul from "../assets/keynotes/paul.jpg";

import aditya from "../assets/speakers/aditya.jpg";
import aminka from "../assets/speakers/aminka.png";
import Ammaar from "../assets/speakers/Ammaar.jpg";
import bob from "../assets/speakers/bob.png";
import cindy from "../assets/speakers/cindy.jpeg";
import elaine from "../assets/speakers/elaine.jpg";
import james from "../assets/speakers/james.jpg";
import john from "../assets/speakers/john.jpeg";
import katelyn from "../assets/speakers/katelyn.png";
import milind from "../assets/speakers/milind.jpeg";
import paris from "../assets/speakers/paris.png";
import steven from "../assets/speakers/steven.jpeg";
import jacklyn from "../assets/speakers/jacklyn.jpeg";

import { SpeakerType } from "../types/speakers";

export const mcs: SpeakerType = {
  "Craig Norris": {
    name: "Craig Norris",
    image: norris,
    title: "Master of Ceremonies",
    affiliation: "Host, CBC K-W’s The Morning Edition on 89.1 FM and CBC Listen"
  },
  "Joe Pavia": {
    name: "Joe Pavia",
    image: joe,
    title: "Master of Ceremonies",
    affiliation: "Reporter/Editor, CBC K-W’s The Morning Edition on 89.1 FM and CBC Listen"
  }
}

export const keynotes: SpeakerType = {
  "MP Bardish Chagger": {
    name: "MP Bardish Chagger",
    image: bardish,
    title: "Keynote Speech",
    affiliation: "Member of Parliament"
  },
  "Dorothy McCabe": {
    name: "Dorothy McCabe",
    image: dorothy,
    title: "Keynote Speech",
    affiliation: "Mayor of Waterloo"
  },
  "Dr. Paul Smith": {
    name: "Dr. Paul Smith",
    image: paul,
    title: "Keynote Speech",
    affiliation: " Managing Director and Chief Operating Officer of the Perimeter Institute for Theoretical Physics"
  },
};

export const speakers: SpeakerType = {
  "Dr. John Donohue": {
    name: "Dr. John Donohue",
    image: john,
    title: "Our Quantum Present and Future",
    description: (
      <div>
        Quantum information science uses ideas from quantum mechanics and
        applies them to information technologies, with new paradigms for
        computing, communication, and sensing being made possible because of it.
        But how can we give students the opportunity to engage with ideas from
        the quantum realm? We'll discuss some of the potential impacts of
        quantum science and the ways researchers with a variety of backgrounds
        contribute the field, as well as how we help introduce students and
        teachers to the topic.
      </div>
    ),
    affiliation: "Institute for Quantum Computing"
  },
  "Dr. James Danckert": {
    name: "Dr. James Danckert",
    image: james,
    title: "Boredom: What is it good for?",
    description: (
      <div>
        Boredom. What is it good for? Some will want to tell you that boredom is a great driver of creativity. Welcome boredom into your life and the creative juices will flow. Ideas and innovations will come to you in a burst of energy. There’s certainly no shortage of pithy quotes from artists of various kinds making precisely this claim.But if this is true, why does boredom feel so uncomfortable? Why do we feel restless and unsatisfied when we’re bored if it is supposed to help us somehow become more creative? If boredom is so necessary for creativity, which we all love and praise, then why would we try so assiduously to avoid boredom and to eliminate it when it descends upon us?
      </div>
    ),
    affiliation: "University of Waterloo Professor"
  },
  "Bob Egan": {
    name: "Bob Egan",
    image: bob,
    title: "Essential Educational Elements for the 21st Century",
    affiliation: "City of Kitchener",
    description: (
      <div>
         Bob Egan is a multiple Juno Award-winning, Canadian Hall of Fame member and a recipient of the Governor General’s Award.  He is also a social scientist long fascinated with how people shape and live their lives.  From his ongoing conversations with youth, he has identified three Essential Educational Elements that will prepare them to experience a productive, fulfilling and well-lived life.
      </div>
    )
  },
  "Milind Kumar": {
    name: "Milind Kumar",
    image: milind,
    title: "From Tragedy to Triumph; How a Cancer Diagnosis Saved My Life",
    description: (
      <div>
        Milind Kumar, a 2nd-year engineering student at the University of
        Waterloo, carries a unique story. All was well going into his teenage
        years, but then things took an unexpected turn when he was suddenly
        diagnosed with leukemia. It was a moment that had him rethink his entire
        existence, causing him to go into a tailspin. Through the ups and downs
        of a 3+ year treatment plan, from moments of hopelessness to moments of
        sheer joy and everything in between, Milind victoriously rang his
        end-of-treatment bell in December of 2022. It was a journey that taught
        him so much about what it means to be resilient and embrace challenges
        head-on. Milind has since been committed to sharing his experience and
        lessons learned with others through heartfelt blogs and presentations,
        which have opened a window into his world and shed light on the
        challenges faced by childhood cancer patients. His talk will be centred
        around the transformative power of learning to overcome and grow from
        life's grandest challenges.
      </div>
    ),
    affiliation: "University of Waterloo"
  },
  "Katelyn Wu": {
    name: "Katelyn Wu",
    image: katelyn,
    title: "Reinventing Education One Niche at a Time",
    description: (
      <div>
        In today's society, many aspects of education are lacking attention, and
        are in need of innovative solutions. In her talk, Katelyn explores the
        root issues surrounding braille education, and debunks the common
        misconception that niche problems are unimportant.{" "}
      </div>
    ),
    affiliation: "Queen's University"
  },
  "Aditya Dewan": {
    name: "Aditya Dewan",
    image: aditya,
    title: "The AI Education Crisis...And How We Can Solve It.",
    description: (
      <div>
        Young minds possess immense potential for scientific-humanitarian
        progress, waiting to be unlocked by the right teaching methodologies. AI
        catalyzes this progress - it marks a paradigm shift in the way our youth
        will work, innovate, and solve millions of critical societal problems.
        Yet, an acute dichotomy exists – the generation that can best use these
        tools to drive solutions also understand them the least. This talk
        presents the AI education dilemma – the missing pillar that, if
        established, can skyrocket AI-driven impact. Lessons from ISEF, building
        AI educational tools with Dr. Touretsky of Carnegie Mellon University,
        and developing curriculum handbooks with ReadyAI are compiled to reveal
        the solution: unifying foundational principles and intuition-driven
        tinkering.
      </div>
    ),
    affiliation: "The Woodlands School"
  },
  "Jacklyn Biggin": {
    name: "Jacklyn Biggin",
    image: jacklyn,
    title: "Learning beyond the classroom",
    description: (
      <div>
        When someone says “education”, you probably think of a school or
        university. However, some of our most valuable learning happens outside
        of the classroom — and in 2023, these experiences are often what shape
        our success. Developer educator Jacklyn Biggin shares how practical
        experiences such as hackathons can fill in gaps not just in resumes, but
        in life experience too.
      </div>
    ),
    affiliation: "Automattic"
  },
  "Steven Bryson": {
    name: "Steven Bryson",
    image: steven,
    title: "For Our Students: Character Counts!",
    description: (
      <div>
        When it comes to preparing our students for the future, what is the most
        important thing? In this talk, educator Steve Bryson will suggest that
        the intentional teaching of good character may be the most important
        skill we can pass on and why this often overlooked, or by-product of a
        good education, needs to be taught more intentionally. He’ll look at
        character education as a whole, why it is so difficult to explicitly
        teach ideas such as grit or perseverance, and how effectively teaching
        these skills can have an incredible impact on our students. By the end
        of the talk, you’ll have a stronger appreciation for this concept and
        know that when it comes to preparing our students for their future:
        Character Counts!
      </div>
    ),
    affiliation: "Waterloo Catholic District School Board"
  },
  "Elaine Xiao": {
    name: "Elaine Xiao",
    image: elaine,
    title: "The weight of our obsession with weight",
    description: (
      <div>
        29 million Americans will have an eating disorder in their lifetime.
        Doctors show a lack of willingness to see fat patients. This speech
        illuminates the grim truth underlying our society: its pervasive
        fatphobic culture. By showing us the consequences of weight bias in
        areas such as employment and healthcare, while interweaving her own
        story, a personal and powerful account of her experience with an eating
        disorder, Elaine reveals the terror of our societal norms. She moves us
        to take action against this collective concern and shares how we, as
        individuals, can make a difference—and each pull our own weight.
      </div>
    ),
    affiliation: "Laurel Heights Secondary School"
  },
  "Ammaar Khan": {
    name: "Ammaar Khan",
    image: Ammaar,
    title: "Unlocking the power of memorization",
    description: <div>In an era where limitless information is available at the tap of a finger, the ability to memorize information is becoming a lost art. In this talk, Ammaar Khan reflects on his personal experience with memorization to paint the concept of memory in a new light - a powerful ability that anyone can master.</div>,
    affiliation: "Laurel Heights Secondary School"
  },
  "Paris Cai": {
    name: "Paris Cai",
    image: paris,
    title: "From Classroom to Catalyst",
    description: (
      <div>
        Following the theme of reinventing education, Paris will address the lack of
        emphasis on teaching students how to take initiative in the current
        education system. Her talk will explain how traditional education focuses
        on imparting knowledge and following instructions while forgetting the
        essential skill of self-driven action. She will also explain how she drew
        knowledge from her family and community to launch her own initiative and
        tackle a growing education disparity amidst virtual learning. Through
        this, Paris returns to the theme and displays learning in different ways while
        working towards a larger issue.
      </div>
    ),
    affiliation: "University of Western Ontario"
  },
  "Aminka Belvitt": {
    name: "Aminka Belvitt",
    image: aminka,
    title: "The Power Of An Imagination",
    description: (
      <div>
        Aminka Belvitt is an international speaker, innovator, humanitarian, mentor and thought leader. She believes in empowering and advancing women and marginalized people as solution creators for the UN 17 Global Goals and agents of change in their communities. She leads The ForUsGirls Foundation, founded in 2015, a Canadian-based international social purpose organization providing innovative, skills-building, and leadership development programs, mentorships and scholarships for Black girls, young women, and gender-diverse radicalized young people.
      </div>
    ),
    affiliation: "President and CEO of The ForUsGirls Foundation"
  },
  "Cindy Cheng": {
    name: "Cindy Cheng",
    image: cindy,
    title: "From Basements to Breakthroughs: The Power of Simple Ideas",
    description: <div>Cindy Cheng describes her journey in STEM and research: the story of how a child tinkering around in the basement of her home came to working on the healthcare solutions of the future in university laboratories. In addition, she describes how the evolution of her work has taken her from rudimentary elementary school science fairs to presenting at the “Olympics of science fair” as part of Team Canada, where she won an award for developing a non-invasive sensor for detecting tissue hypoxia. Alongside her experiences, she presents how valuing simplicity has catalyzed her success in scientific research and science fairs alike—and how it can do the same for you.</div>,
    affiliation: "Laurel Heights Secondary School"
  },
};

export const allSpeakers = { ...speakers, ...keynotes };
