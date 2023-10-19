import MovieFlix from "./images/movieflix.png";
import Emokey from "./images/emokey.png";
import Travelo from "./images/travelo.png";
import Bot from "./images/bot.png";
import Chatter from "./images/chatter.png";

export const Projects = [
  {
    title: "MovieFlix 🎥",
    description:
      "Built out of a need to stop endless scrolling through Netflix.Login and get customized movie recommendations, and leave reviews.",
    image: MovieFlix,
    link: "https://movieflix-tv.netlify.app/",
    imageLink: "../images/movieflix.png",
  },
  {
    title: "Travelo 🚲",
    description:
      "A user could rent and return bikes from different locations around the city, and super users could manage operations (charging and repairing status) and revenue (per user and per vehicle revenue).",
    image: Travelo,
    link: "https://github.com/zorgonide/travelo-travel-app",
    imageLink: "../images/travelo.png",
  },
  {
    title: "Emokey 🔒 - Reinventing passwords with emojis",
    description:
      "Built an alternative method to conventional password authentication, using emojis instead. Every password text is uniquely hashed to 3 emojis, and the user's input is obfuscated into emojis. Built for Human Centered Security Course at University of Glasgow. (A grade)",
    image: Emokey,
    link: "https://emokey2.netlify.app/",
    imageLink: "../images/emokey.png",
  },
  {
    title: "Chat application using React 🗣",
    description:
      "This is a chat application that works on localhost, where a user can sign up/ log in and chat with another user. It uses web sockets to establish and maintain connections between users, and uses redux to manage application state.",
    image: Chatter,
    link: "https://github.com/zorgonide/Chatter",
    imageLink: "../images/chatter.png",
  },
  {
    title: "Semi-autonomous four-wheeled bot 🏎",
    description:
      "Stream video from a bot using Raspberry Pi and camera to a host computer in master-slave configuration to perform obstacle detection and move the bot around using commands sent from the master computer",
    image: Bot,
    link: "https://github.com/zorgonide/FourWheeledBot",
    imageLink: "../images/bot.png",
  },
];
export const Education = [
  {
    university: "University of Glasgow, Scotland",
    time: "2022 - 2023",
    degree: "MSc Computing Science",
    grade: "Distinction",
  },
  {
    university: "Manipal Institute of Technology, India",
    time: "2017 - 2021",
    degree: "BTech Information Technology",
    grade: "7.8/10 CGPA",
  },
  {
    university: "Delhi Public School, Indirapuram, India",
    time: "2011 - 2016",
    degree: "High School, CBSE",
    grade: "87.4%",
  },
];
export const Experience = [
  {
    company: "Adobe",
    time: "Feb 2022 - Aug 2022",
    role: "Senior Technical Product Consultant",
    description:
      "Facilitated clients in implementing, optimising, and troubleshooting web implementations for Adobe Analytics and Adobe Launch. Analysis of data extracted from Adobe Analytics to gain insights into customer spending behaviour and resolve outliers in reporting.",
  },
  {
    company: "ICICI Lombard",
    time: "Feb 2021 - Feb 2022",
    role: "Developer",
    description:
      "Developed Angular web apps with 50+ fields for data management and entry of 100,000+ clients. These apps issued and renewed health insurance policies. Worked on UI/UX Design for 10+ screens – intending to minimise data entry. Rebuilt an Ionic application using Angular to improve page load time, mobile responsiveness and reduce API usage.",
  },
  {
    company: "Viga Entertainment Studio",
    time: "Jul 2020 - Dec 2020",
    role: "Frontend Developer Intern",
    description:
      "Developed a React web app to serve as a repository for tracking sequences and shots in movie production. The application hosted media files and enabled interaction between a director and a production team. Additionally, developed a Single-Sign-On and user management portal. UI/UX Design of 15+ screens – converted low-fidelity designs into mobile responsive web pages. Communicated with stakeholders extensively to understand problems and build user-friendly solutions.",
  },
];
