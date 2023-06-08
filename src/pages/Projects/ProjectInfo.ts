export interface projectInterface {
  id: string;
  title: string;
  description: string;
  type: string;
  github: string;
  weblink: string;
  stack: string[];
}

export const projects: projectInterface[] = [
  {
    id: "1",
    title: "Producktiv Web App",
    description: "Productive app for students",
    type: "FullStack",
    github: "https://github.com/Timi-T/producktiv",
    weblink: "",
    stack: [
      "Javascript",
      "React.js",
      "HTML",
      "CSS",
      "Express.js",
      "MongoDB",
      "Redis",
    ],
  },
  {
    id: "2",
    title: "Fees Manager Web App",
    description: "Manager software for chools",
    type: "FullStack",
    github: "https://github.com/Timi-T/fees_manager",
    weblink: "",
    stack: [
      "Javascript",
      "React",
      "HTML",
      "CSS",
      "Express.js",
      "MongoDB",
      "Redis",
    ],
  },
  {
    id: "3",
    title: "AirBnB Web App",
    description: "clone of AirBnB web app",
    type: "FullStack",
    github: "https://github.com/Timi-T/AirBnB_clone_v4",
    weblink: "",
    stack: [
      "Python",
      "Flask",
      "MySQL",
      "SQLAlchemy",
      "HTML",
      "CSS",
      "Javascript",
    ],
  },
  {
    id: "4",
    title: "Demo Credit API",
    description: "Lending wallet",
    type: "API",
    github: "https://github.com/Timi-T/lendsqr",
    weblink:
      "https://ogunbode-opeyemi-lendsqr-be-test.onrender.com/api/v1/users",
    stack: ["Express.js", "MySQL", "Knex ORM"],
  },
  {
    id: "5",
    title: "Portfolio Website",
    description: "This website you are looking at",
    type: "Frontend",
    github: "",
    weblink: "",
    stack: [],
  },
];
