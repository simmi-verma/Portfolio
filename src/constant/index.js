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
      title: "Web Developer",
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
    
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2021 - April 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Core Programming and DSA",
      company_name: "",
      icon: tesla,
      iconBg: "#383E56",
      date: "Jan 2021 - Present",
      points: [
        "Possesses a solid understanding of fundamental programming languages like C, C++, JavaScript, and Python.",
        "Proficient in Object-Oriented Programming (OOP) principles, demonstrated through project implementations.",
        "Expertise in Data Structures and Algorithms, as evidenced by leetcode practice, crucial for designing efficient and scalable solutions.",
       
      ],
    },
    {
      title: "Technical Assistant",
      company_name: "NGO AAROHA",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - 2023",
      points: [
        "Designed and maintained the NGO's website to enhance user experience and ensure easy access to organizational information.",
        "Organized and managed digital records and databases for tracking beneficiaries, volunteers, and donors.",
        "Provided technical assistance to team members, ensuring smooth operation of software and tools used in daily activities.",
        "Conducted training sessions for team members on using digital tools and improving their technical skills.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "Present",
      points: [
        "Experienced in developing both front-end and back-end applications..",
        "Proficient in React.js for building dynamic and interactive user interfaces.",
        "Skilled in Node.js and Express.js for creating robust and scalable back-end services.",
        "Comfortable with both SQL (MySQL) and NoSQL (MongoDB) databases for data storage and retrieval",
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
      name: " Booking App (Airbnb Clone))",
      description:
        "Developed a full-stack web application similar to Airbnb, where users can search, viewand book accommodations. Hosts can add properties, including descriptions, photos, and pricing. Frontend: HTML,CSS, JavaScript, React.js (or another framework if used) Backend: Node.js, Express.js Database: MongoDB Other Tools: Git, RESTful APIs, Authentication (JWT or OAuth), etc",
      tags: [
        {
          name: "React-Redux",
          color: "blue-text-gradient",
        },
        {
          name: "Chart.js",
          color: "green-text-gradient",
        },
        {
          name: "RapidAPI",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Word to PDF Converte",
      description:
        "Desktop application to convert Word documents to PDF format. Technologies Used: React.js, node.js, Express.js , docx2pdf library, tailwind,Multer.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JAVASCRIPT",
          color: "green-text-gradient",
        },
        {
        name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };