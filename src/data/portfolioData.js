// Portfolio Data Configuration

export const personalInfo = {
  name: "Dhanush K",
  role: "Full Stack Developer",
  status: "Fresher",
  isOpenToWork: true,
  isImmediateJoiner: true,
  location: "Tiruchirappalli, TN",
  email: "dhanushskms11@gmail.com",
  phone: "+91 6383853508",
  phoneDisplay: "+91 6383853508",
  locationDisplay: "Tamil Nadu, India",
  headline: "Hi, I'm",
  bio: "A Computer Science graduate passionate about Full-Stack Development and building modern web applications. Looking forward to starting my professional journey while learning, building, and growing in the software industry.",
  aboutParagraphs: [
    "I'm a Computer Science graduate with a keen interest in full-stack development. I enjoy building responsive web applications, developing efficient solutions, and applying my technical knowledge to real-world challenges.",
    "As an aspiring developer, I'm eager to begin my professional journey, contribute to meaningful projects, and grow through continuous learning. I'm committed to improving my skills and delivering quality solutions as part of a team."
  ],
  socialLinks: {
    github: "https://github.com/dhanush0806",
    linkedin: "https://www.linkedin.com/in/dhanush-k-a998a72bb/",
    email: "mailto:dhanushskms11@gmail.com"
  },
  resume: {
    viewUrl: "/resume.pdf",
    downloadUrl: "/resume.pdf",
    downloadFilename: "Dhanush_K_Resume.pdf"
  }
};

export const coreStack = [
  "React.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Java",
  "JavaScript",
  "REST APIs"
];

export const skillCategories = [
  {
    title: "Frontend",
    iconType: "layout",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Angular", "Tailwind CSS"],
    delay: 100
  },
  {
    title: "Backend",
    iconType: "database",
    skills: ["Java", "Spring Boot", "Node.js", "Express.js", "Python", "REST APIs"],
    delay: 200
  },
  {
    title: "Database",
    iconType: "terminal",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
    delay: 300
  },
  {
    title: "Development Tools",
    iconType: "cpu",
    skills: ["Git & GitHub", "VS Code", "Postman", "pgAdmin", "MySQL Workbench"],
    delay: 400
  }
];

export const projects = [
  {
    title: "AssetTrack",
    description: "An enterprise asset management system for tracking IT equipment, managing employee assignments, monitoring maintenance, and maintaining asset lifecycle records.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Java", "Spring Boot", "MySQL"],
    github: "https://github.com/dhanush0806/AssetTrack",
    demo: "#",
    delay: 100
  },
  {
    title: "BillFlow",
    description: "A grocery retail billing and inventory management system for handling product sales, generating invoices, managing stock, and monitoring store performance.",
    tags: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/dhanush0806/BillFlow",
    demo: "#",
    delay: 200
  },
  {
    title: "E-Commerce",
    description: "A full-stack e-commerce platform that provides an online shopping experience with product browsing, shopping cart management, and order processing.",
    tags: ["React", "TypeScript", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/dhanush0806/E-Commerce",
    demo: "#",
    delay: 300
  },
  {
    title: "SpendWise",
    description: "A personal expense management system for tracking income, monitoring daily expenses, managing budgets, and visualizing financial spending patterns.",
    tags: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/dhanush0806/SpendWise",
    demo: "#",
    delay: 400
  },
  {
    title: "Developer Portfolio",
    description: "A personal developer portfolio showcasing my projects, technical skills, and background through an interactive and responsive web experience.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/dhanush0806/Developer_Portfolio",
    demo: "#",
    delay: 500
  }
];

export const workExperience = [
  {
    date: "Jul 2025 – Aug 2025",
    title: "Java Fullstack Developer Intern",
    subtitle: "Media Wave Technologies",
    points: [
      "Built and tested basic full-stack web components using Java.",
      "Learned and practiced backend concepts like database connections and handling server-side logic.",
      "Worked with the team to find and fix bugs in application modules."
    ],
    isActive: true,
    delay: 100
  },
  {
    date: "Jan 2025 – Apr 2025",
    title: "Python Developer Intern",
    subtitle: "Cybernaut Edu-Tech",
    points: [
      "Practiced core Python programming and object-oriented concepts.",
      "Solved practical coding tasks and improved problem-solving skills.",
      "Developed web scraping scripts using Python to extract and structure data."
    ],
    isActive: false,
    delay: 200
  }
];

export const educationList = [
  {
    date: "2022 - 2026",
    title: "B.E. Computer Science & Engineering",
    subtitle: "Gnanamani College of Technology, Namakkal",
    description: "Graduated with a CGPA of 7.508.",
    isActive: true,
    delay: 100
  },
  {
    date: "2020 - 2022",
    title: "12th Standard",
    subtitle: "Shree Kalaimagal Matric Higher Secondary School",
    description: "Completed higher secondary education with 75% marks.",
    isActive: false,
    delay: 200
  },
  {
    date: "2019 - 2020",
    title: "10th Standard",
    subtitle: "Thiru Vi Ka High School",
    description: "Completed secondary education with 85% marks.",
    isActive: false,
    delay: 300
  }
];

export const certifications = [
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "September 2026",
    type: "Technical Certification",
    link: "https://www.hackerrank.com/certificates/22e2298eae22"
  },
  {
    title: "Python Programming",
    issuer: "Cybernaut Edu-Tech",
    date: "August 2024",
    type: "PDF",
    link: "/certificates/Python_Certificate.pdf"
  },
  {
    title: "Java Programming",
    issuer: "Cybernaut Edu-Tech",
    date: "May 2025",
    type: "PDF",
    link: "/certificates/Java_Certificate.pdf"
  },
  {
    title: "C++ Programming",
    issuer: "Cybernaut Edu-Tech",
    date: "April 2024",
    type: "PDF",
    link: "/certificates/C++_Certificate.pdf"
  }
];
