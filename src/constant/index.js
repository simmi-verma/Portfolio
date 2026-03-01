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
    cplusplus,
    aws
  } from "../assets";
  import bookingAppImage from "../assets/images/bookingapp.png";
  import agrifusion from "../assets/images/agrifusion.png";
  import weather from "../assets/images/weather.png";
  import img_cloud from "../skill/cloud.jpg";
import img_database from "../skill/database.jpg";
import img_dsa from "../skill/data-structure.png";
import img_monitor from "../skill/monitor_18211287.png";
import img_programming from "../skill/programming.png";
import img_coding from "../skill/coding-icon_12254057.png";

  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "tech",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Projects",
      number: "3+",
      text: "Projects\nCompleted",
    },
    {
      title: "Certifications",
      number: "1",
      text: "Certification",
    },
  ];
  
  const technologies = [
    {
      category: "Programming Languages",
      catIcon: img_programming,
      items: [
        { name: "C", icon: cprog },
        { name: "C++", icon: cplusplus },
        { name: "JavaScript", icon: javascript },
      ]
    },
    {
      category: "Frontend",
      catIcon: img_monitor,
      items: [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "Tailwind CSS", icon: tailwind },
        { name: "React", icon: reactjs },
      ]
    },
    {
      category: "Backend",
      catIcon: img_coding,
      items: [
        { name: "Node.js", icon: nodejs },
        { name: "Express.js", icon: backend },
      ]
    },
    {
      category: "Database",
      catIcon: img_database,
      items: [
        { name: "MySQL", icon: backend }, 
        { name: "MongoDB", icon: mongodb },
      ]
    },
    {
      category: "Data Structure",
      catIcon: img_dsa,
      items: [
        { name: "LeetCode 300+", icon: creator },
        { name: "GeeksForGeeks 150+", icon: web },
        { name: "CodeChef", icon: mobile },
      ]
    },
    {
      category: "Cloud & DevOps",
      catIcon: img_cloud,
      items: [
        { name: "AWS (EC2, S3, IAM, Lambda)", icon: aws },
      ]
    },
    {
      category: "CS Fundamentals",
      catIcon: web,
      items: [
        { name: "OOP", icon: creator },
        { name: "CN", icon: web },
        { name: "DBMS", icon: backend },
      ]
    }
  ];
  const experiences = [
  {
    title: "Open Source Contributor – GSSoC",
    company_name: "GirlScript Foundation",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Oct 2024 – Nov 2024",
    points: [
      "Fixed 5+ critical bugs and improved authentication workflows in existing web projects.",
      "Enhanced responsive UI for the Ice-Cream Parlour website using React.js and Tailwind CSS.",
      "Collaborated with project maintainers and other contributors through GitHub and Discord.",
    ],
  },
  {
    title: "Participant – Aadi Foundation Program",
    company_name: "Aadi Foundation",
    icon: tesla,
    iconBg: "#383E56",
    date: "Sep 2024 - Oct 2024",
    points: [
      "Engaged in tech-driven community initiatives and development workshops.",
      "Collaborated with peers on real-world challenges to build socially impactful projects.",
      "Gained hands-on experience in web development and teamwork in community settings.",
    ],
  },
  {
    title: "Hackathon Participant",
    company_name: "Offline Events",
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
    title: "Software Developer Intern",
    company_name: "Random Forest Technology",
    icon: meta,
    iconBg: "#383E56",
    date: "Aug 2025 – Sept 2025",
    points: [
      "Worked with frontend and backend technologies to support product development and feature enhancements.",
      "Designed and optimized MongoDB schemas ensuring performance, scalability, and data integrity.",
      "Collaborated with cross-functional teams to implement, test, and deploy high-quality software solutions.",
      "Participated in code reviews and debugging sessions, improving maintainability and performance.",
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
  //{
  //   name: "Collaborative Coding Platform",
  //   description: "Engineered a real-time collaborative coding platform facilitating simultaneous coding sessions. Integrated Socket.io for live bidirectional synchronization of code edits and chat. Implemented secure compiler integration and robust user authentication with role-based collaboration.",
  //   tags: [
  //     { name: "React.js", color: "blue-text-gradient" },
  //     { name: "Node.js", color: "green-text-gradient" },
  //     { name: "Socket.io", color: "pink-text-gradient" },
  //     { name: "MongoDB", color: "orange-text-gradient" },
  //     { name: "WebRTC", color: "purple-text-gradient" },
  //   ],
  //   image: web,
  //   source_code_link: "https://github.com/simmi-verma",
  // },
  {
    name: "AgriFusion – Farmer-to-Customer Marketplace",
    description:
      "Devised a MERN stack e-commerce platform that connects farmers directly to consumers, significantly reducing supply chain costs. Implemented geolocation-based product search functionality and real-time chat features to enable seamless buyer-seller communication.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "EJS", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "orange-text-gradient" },
    ],
    image: agrifusion,
    source_code_link: "https://github.com/simmi-verma/AgriFusion",
  },
  {
    name: "Booking App (Airbnb Clone)",
    description:
          "Developed a robust full-stack reservation and booking platform complete with secure JWT user authentication and management. Integrated Cloudinary for scalable image storage and optimized API endpoints.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Express.js", color: "orange-text-gradient" },
      { name: "JWT", color: "purple-text-gradient" },
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
      { name: "OpenWeather", color: "orange-text-gradient" },
    ],
    image: weather,
    source_code_link: "https://github.com/simmi-verma/web-development-weather",
  },
];

 
  
  export { services, technologies, experiences, testimonials, projects };