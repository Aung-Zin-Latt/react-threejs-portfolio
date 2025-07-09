import {
  backend,
  creator,
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  jquery,
  ajax,
  php,
  laravel,
  livewire,
  git,
  figma,
  vuejs,
  metropolis,
  itvisionhub,
  eroster,
  vms,
  emetro,
  sginfo,
  dni,
  invoice,
  mysql,
  mssql,
  mongodb,
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
    title: "Software Programmer",
    icon: backend,
  },
  {
    title: "Senior Full Stack Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JQuery",
    icon: jquery,
  },
  {
    name: "Ajax",
    icon: ajax,
  },
  {
    name: "PHP",
    icon: php,
  }, 
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Livewire",
    icon: livewire,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "vuejs",
    icon: vuejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: 'MySQL',
  //   icon: mysql,
  // },
  // {
  //   name: 'MSSQL',
  //   icon: mssql,
  // },
  // {
  //   name: 'MongoDB',
  //   icon: mongodb,
  // },
  // {
  //   name: 'MongoDB',
  //   icon: mongodb,
  // },
  // {
  //   name: 'MongoDB',
  //   icon: mongodb,
  // },
  // {
  //   name: 'MongoDB',
  //   icon: mongodb,
  // },
];

const experiences = [
  {
    title: "Software Programmer",
    company_name: "Metropolis Security Systems Pte Ltd",
    icon: metropolis,
    iconBg: "#383E56",
    date: "2023 - Current",
    points: [
      "Managing the Metropolis rostering system (eRoster) to ensure efficient shift scheduling and deployment.",
      "Overseeing the Visitor Management System (VMS) for streamlined access control and security logging.",
      "Maintaining and enhancing the eMetro Employee SPA application, supporting staff access to essential features and workflows.",
      "Automating employee payroll processes using Google Apps Script, reducing manual effort and increasing accuracy.",
    ],
    highlights: [
      "Strengthened my ability to work independently in fast-paced environments.",
      "Enhanced my problem-solving and decision-making skills.",
      "Delivered reliable and efficient solutions with minimal supervision.",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company_name: "ITVisionHub Co Ltd",
    icon: itvisionhub,
    iconBg: "#E6DEDD",
    date: "2020 - 2023",
    points: [
      "Led the development of major production systems including DNI Ecommerce, ITVisionHub Online Training Platform, and a Custom Invoice Management System.",
      "Designed and implemented fully responsive, mobile-friendly web applications using Laravel Livewire, React, Vue, and MySQL.",
      "Built secure authentication systems and protected platforms against SQL injection, CSRF, XSS, and other common vulnerabilities.",
      "Developed REST APIs and real-time features using AJAX, jQuery, and Livewire to ensure smooth user experience and dynamic interfaces.",
      "Integrated third-party services and deployed applications on DigitalOcean and AWS, managing version control with Git & GitHub.",
      "Created admin dashboards for managing courses, products, invoices, and reports, allowing end users to track and analyze their data efficiently.",
      "Conducted code reviews and collaborated with designers and junior developers to maintain quality and scalability.",
    ],
    highlights: [
    "Gained leadership and mentoring experience.",
    "Developed strong independent decision-making skills.",
    "Improved communication and adaptability in a remote team setup.",
  ]
  },
  {
    title: "Junior Full Stack Developer",
    company_name: "ITVisionHub Co Ltd",
    icon: itvisionhub,
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
      "Contributed to development and maintenance of web applications using React.js, Laravel, and MySQL.",
      "Collaborated closely with designers, product managers, and senior developers to deliver user-friendly features.",
      "Implemented responsive UI components ensuring cross-browser and device compatibility.",
      "Wrote clean, reusable code and participated in peer code reviews to improve software quality.",
      "Assisted in debugging and fixing bugs, enhancing application stability and performance.",
      "Gained experience working in Agile teams with version control via Git and deployment workflows.",
    ],
    highlights: [
      "Improved UI responsiveness and accessibility.",
      "Enhanced feature development skills and code review practices.",
      "Developed confidence in full stack problem-solving.",
    ],
  },
  {
    title: "Internship Program",
    company_name: "ITVisionHub Co Ltd",
    icon: itvisionhub,
    iconBg: "#E6DEDD",
    date: "May 2018 - Nov 2018",
    points: [
      "Assisted in front-end and back-end development tasks using Laravel, JavaScript, and MySQL.",
      "Learned how to build responsive layouts using HTML, CSS, Bootstrap, and jQuery.",
      "Supported senior developers by testing features, fixing bugs, and updating documentation.",
      "Gained hands-on experience with version control systems such as Git and GitHub.",
      "Attended team meetings and participated in project planning discussions.",
      "Built foundational understanding of web application architecture and database design.",
    ],
    highlights: [
      "Developed first CRUD modules with Laravel.",
      "Understood real-world software development workflows.",
      "Built confidence to work on production-level code.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "eRoster (Rostering Management System)",
    description:
      "A scheduling system used to deploy security officers across various Singapore sites. It ensures officer availability, skill matching, and site compliance, supporting efficient deployment via a centralized web interface.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "Livewire", color: "blue-text-gradient" },
      { name: "HTML5", color: "pink-text-gradient" },
      { name: "CSS3", color: "pink-text-gradient" },
      { name: "Bootstrap 5", color: "pink-text-gradient" },
      { name: "Meterial Design", color: "pink-text-gradient" },
      { name: "jQuery", color: "pink-text-gradient" },
      { name: "Ajax", color: "pink-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "MSSQL", color: "green-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Amazon Web Service", color: "orange-text-gradient" },
    ],
    image: eroster,
    project_link: "#",
  },
  {
    name: "Visitor Management System (VMS)",
    description:
      "A security-focused visitor system with real-time visitor tracking, badge printing, host alerts, and analytics. Includes pre-registration and access control system integration.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "HTML5", color: "pink-text-gradient" },
      { name: "CSS3", color: "pink-text-gradient" },
      { name: "Bootstrap 5", color: "pink-text-gradient" },
      { name: "jQuery", color: "pink-text-gradient" },
      { name: "Ajax", color: "pink-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Amazon Web Service", color: "orange-text-gradient" },
    ],
    image: vms,
    project_link: "#",
  },
  {
    name: "Metro-Officer App (PWA)",
    description:
      "A Progressive Web App for security officers to manage shifts, availability, company announcements, feedback, and employment details—accessible on both desktop and mobile devices.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "Inertia", color: "blue-text-gradient" },
      { name: "Vue.js", color: "pink-text-gradient" },
      { name: "HTML5", color: "pink-text-gradient" },
      { name: "CSS3", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Amazon Web Service", color: "orange-text-gradient" },
    ],
    image: emetro,
    project_link: "#",
  },
  {
    name: "DNI Store",
    description:
      "An online shopping platform for everyday goods. Users can browse products, add to cart/favorites, and manage purchases with a secure login and invoice system.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "Livewire", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "Amazon Web Service", color: "orange-text-gradient" },
    ],
    image: dni,
    project_link: "https://dnistore.com/",
  },
  {
    name: "ITVisionHub Online Training",
    description:
      "A training platform offering web development courses (HTML, PHP, Laravel, Vue, React, etc.) with modules for course creation, security practices, and hands-on training for beginners.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "Digital Ocean", color: "orange-text-gradient" },
    ],
    image: sginfo,
    project_link: "#",
  },
  {
    name: "Invoice Management Systems",
    description:
      "A business invoicing tool allowing custom invoice creation, payment tracking, branding, and mobile optimization for small businesses to streamline billing workflows.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "Laravel", color: "blue-text-gradient" },
      { name: "Livewire", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "Amazon Web Service", color: "orange-text-gradient" },
    ],
    image: invoice,
    project_link: "https://mmeasyinvoice.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
