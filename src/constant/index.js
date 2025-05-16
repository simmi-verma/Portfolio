import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cprog,
    cplusplus
  } from "../assets";
  import bookingAppImage from "../assets/images/bookingapp.png";
  import agrifusion from "../assets/images/agrifusion.png";
  import weather from "../assets/images/weather.png";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mern Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C programming",
      icon: cprog,
    },
    {
      name: "C++",
      icon: cplusplus,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
   
    {
      name: "git",
      icon: git,
    },

    
    
  ];
  const experiences = [
     {
    title: "Participant – Aadi Foundation Program",
    company_name: "Aadi Foundation",
    icon: tesla,
    iconBg: "#383E56",
    date: "Sep 2024- Oct 2024",
    points: [
      "Engaged in tech-driven community initiatives and development workshops.",
      "Collaborated with peers on real-world challenges to build socially impactful projects.",
      "Gained hands-on experience in web development and teamwork in community settings.",
    ],
  },
  {
    title: "Open Source Contributor – GSSoC (GirlScript Summer of Code)",
    company_name: "GirlScript Foundation",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2024- Nov 2024",
    points: [
      "Contributed to multiple open-source projects by fixing bugs, improving UI, and adding new features.",
      "Collaborated with project maintainers and other contributors through GitHub and Discord.",
      "Enhanced skills in Git, GitHub, React.js, and team collaboration in an open-source environment.",
    ],
  },
 
  {
    title: "Hackathon Participant",
    company_name: " Offline Events",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Participated in several hackathons focused on building innovative tech solutions under time constraints.",
      "Worked in teams to brainstorm, prototype, and present working web applications.",
      "Improved skills in problem-solving, communication, and real-time development using MERN stack technologies.",
    ],
  },
  {
    title: "MERN Stack Developer – Personal Projects",
    company_name: "Self-Learning",
    icon: shopify,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Built multiple full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Gained experience working with both SQL and NoSQL databases.",
      "Currently deepening understanding of C++, Python, and Data Structures & Algorithms (DSA) to write efficient and scalable code.",
      "Continuously learning and improving through project-based learning and community participation.",
    ],
  },
];

 
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  const projects = [
  {
    name: "AgriFusion – Farmer-to-Customer Marketplace",
    description:
      "A web platform that connects customers with nearby farmers for purchasing fresh and quality agricultural products. Customers can directly contact farmers, explore listed goods, and ensure transparency in pricing and quality.",
    tags: [
      { name: "e.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Express.js", color: "orange-text-gradient" },
    ],
    image: agrifusion, // Replace with actual image reference
    source_code_link: "https://github.com/simmi-verma/AgriFusion",
  },
  {
    name: "Booking App (Airbnb Clone)",
    description:
      "A full-stack web application where users can search, view, and book accommodations, while hosts can list properties with details like photos, descriptions, and pricing. Includes authentication, REST APIs, and responsive design.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Express.js", color: "orange-text-gradient" },
      { name: "JWT Auth", color: "purple-text-gradient" },
    ],
    image: bookingAppImage,
    source_code_link: "https://github.com/",
  },
   {
    name: "Weather App",
    description:
      "A simple and interactive weather application that allows users to check real-time weather conditions for any location using the OpenWeatherMap API. Displays temperature, weather status, and location-based data.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "OpenWeatherMap API", color: "orange-text-gradient" },
    ],
    image: weather, // Replace with the correct image reference if needed
    source_code_link: "https://github.com/simmi-verma/web-development-weather",
  },
];

 
  
  export { services, technologies, experiences, testimonials, projects };