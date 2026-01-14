const experiences = [
  {
    title: 'None',
    institution: 'None',
    year: 'None',
    description: 'None'
  },
]
const eduCourses = [
  {
    title: 'Discovery Piscine',
    institution: '42 Bangkok',
    year: '2023 - Present',
    image: '/icons/42.png'
  },
  {
    title: 'Piscine C Programming',
    institution: '42 Bangkok',
    year: '2018 - 2022',
    image: '/icons/42.png'
  }
]
const eduScools = [
{
    title: 'Bachelor of Science in Computer Science',
    institution: 'King Mongkut\'s Institute of Technology Ladkrabang (KMITL)',
    year: '2023 - Present',
    description: 'Relevant coursework: Software Development, Databases, Operating Systems, Object-Oriented Programming, Data Structures and Algorithms.'
  },
  {
    title: 'High School Diploma',
    institution: 'Mahidol Wittayanusorn School',
    year: '2019 - 2022',
    description: 'Major in Science-Mathematics'
  }
]
const devSkills = [
  { title: 'Java' },
  { title: 'Object-Oriented Programming' },
  { title: 'System Design' },
  { title: 'Data Structures & Algorithms' },
  { title: 'HTML' },
  { title: 'CSS' },
  { title: 'JavaScript' },
  { title: 'React' },
  { title: 'Node.js' },
  { title: 'Express.js' },
  { title: 'RESTful APIs' },
  { title: 'Relational Databases (MySQL / PostgreSQL)' },
  { title: 'Distributed & Cluster Computing' },
]


const aiSkills = [
  { title: 'Machine Learning' },
  { title: 'Deep Learning (CNN)' },
  { title: 'Computer Vision' },
  { title: 'Audio Processing' },
  { title: 'Feature Engineering' },
  { title: 'Model Deployment (Streamlit)' },
  { title: 'Big Data Analytics' },
]

const socials = [
  { image: '/icons/github.png', title: 'GitHub', description: 'ANNE1133', link: 'https://github.com/ANNE1133' },
  { image: '/icons/facebook.png', title: 'Facebook', description: 'Anecha Yoksombat' , link: 'https://www.facebook.com/anecha.yoksombat'},
  { image: '/icons/instragram.png', title: 'Instagram', description: '@an_ch_pp', link: 'https://www.instagram.com/an_ch_pp/' },
]

const languages = [
  { image: '/icons/Thailand.png', title: 'Thai', description: 'Native language' },
  { image: '/icons/England.png', title: 'English', description: 'CEFR level B2' }
]

const contacts = [
  { image: '/icons/mail.svg', title: 'E-mail', description: 'AnechaYoksombat@gmail.com' },
  { image: '/icons/tel.png', title: 'Telephone', description: '0864837892' },
  { image: '/icons/place.png', title: 'Location', description: 'Bangkok, Thailand' },
]

const routes = {
  home: '/components/home.html',
  about: '/components/about.html',
  skills: '/components/skills.html',
  projects: '/components/project.html',
  contact: '/components/contact.html',
}

const cards = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website built with HTML, CSS, and JavaScript to showcase projects, skills, and development experience.",
    image: "/images/portfolio.png",
    link: "https://anne1133.github.io",
    tags: ['web']
  },
  {
    title: "Roomin – Full-Stack Web Application",
    description:
      "(Team project)\nA full-stack web application featuring user authentication, Google OAuth, and payment workflows. Built with React and RESTful APIs, connected to a relational database, and deployed using Docker.",
    image: "/images/roomin.png",
    link: "https://github.com/ANNE1133/Roomin",
    tags: ['web']
  },
  {
    title: "PIGParking – Mobile App System Design",
    description:
      "(Team project)\nA mobile parking management application concept focusing on system design. Includes use case design, relational database schema, and UI design based on user scenarios.",
    image: "/images/EZ.png",
    link: "https://github.com/anne1133/pigparking-system-design",
    tags: ['mobile', 'system']
  },
  {
    title: "KAIYANG - Java OOP Game Programming",
    description:
      "(Team project)\nA Java project developed to practice object-oriented programming and basic game logic. The game is built using Java Swing (JFrame), focusing on class structure, object interaction, and event-driven programming.",
    image: "/images/kaiyang.png",
    link: "https://github.com/ANNE1133/GameP_PAJ",
    tags: ['graphics']
  },
  {
    title: "Graph Programming (Java)",
    description:
      "(Team project)\nDevelop program for classified path to trail, circuit, closewalk",
    image: "/images/dsrc.jpeg",
    link: "https://github.com/anne1133/dsrc-graph-classified",
    tags: ['system']
  },
  {
    title: "M-flow – System Design",
    description:
      "(Team project)\nA ticket collection on high way. Design flow analyze requirement.",
    image: "/images/mflow.jpeg",
    link: "https://github.com/anne1133/mflow-system-design",
    tags: ['system']
  },
  {
    title: "Speech emotion classification",
    description:
      "(Team project)\nA model using samples from ravdess crema-d savee and tess then augment spectrogram and using cnn technique then deploy",
    image: "/images/speech-emo.png",
    link: "https://anne1133-audio-classification-app-ska7gr.streamlit.app",
    tags: ['ai']
  },
  {
    title: "Company Bankruptcy Prediction",
    description:
      "(Team project)\nA prediction model using randomforest with the challenge of feature selection from 95 to 10",
    image: "/images/bankrupt.png",
    link: "https://anne1133-bankruptcy-prediction.streamlit.app",
    tags: ['ai']
  },
  {
    title: "Programming language project",
    description:
      "(Team project)\nA compiler/interpreter project for a custom programming language",
    image: "/images/pl.jpeg",
    link: "https://anne1133-bankruptcy-prediction.streamlit.app",
    tags: ['system']
  },
  {
    title: "Cluster computing project",
    description:
      "(Team project)\nDistributed computing system for processing large-scale data",
    image: "/images/pl.jpeg",
    link: "https://anne1133-bankruptcy-prediction.streamlit.app",
    tags: ['system']
  },
  {
    title: "Computer Graphic 2D 5S",
    description:
      "(Team project)\n2D graphics project implementing workplace organization visualization",
    image: "/images/cg_anime.png",
    link: "https://github.com/ANNE1133/CG_animation",
    tags: ['graphics']
  },
  {
    title: "Computer Graphic 3D using openGL",
    description:
      "(Team project)\n3D graphics rendering using OpenGL for interactive visualization",
    image: "/images/3d.png",
    link: "https://github.com/ANNE1133/CG_3D_openGL",
    tags: ['graphics']
  },
  {
    title: "People detection and identification",
    description:
      "(Team project)\nComputer vision project for detecting and identifying people in images",
    image: "/images/pl.jpeg",
    link: "https://anne1133-bankruptcy-prediction.streamlit.app",
    tags: ['ai', 'progressing']
  },
  {
    title: "Android Project",
    description:
      "(Team project)\nNative Android application with modern UI/UX design",
    image: "/images/pl.jpeg",
    link: "https://anne1133-bankruptcy-prediction.streamlit.app",
    tags: ['mobile', 'progressing']
  },
  {
    title: "Fullstack Project",
    description:
      "(Team project)\nComplete full-stack web application with frontend and backend",
    image: "/images/pl.jpeg",
    link: "https://anne1133-bankruptcy-prediction.streamlit.app",
    tags: ['web', 'progressing']
  },
  {
    title: "BigData Project",
    description:
      "(Team project)\nBig data analytics project using distributed computing frameworks",
    image: "/images/pl.jpeg",
    link: "https://anne1133-bankruptcy-prediction.streamlit.app",
    tags: ['ai', 'progressing']
  }
]

export { experiences, eduCourses, eduScools, devSkills, aiSkills, socials, languages, contacts, routes, cards }