import './style.css'
import { loadItem } from '../public/components/item-base.js'

async function loadComponent(id, path) {
  const res = await fetch(path)
  const html = await res.text()
  document.getElementById(id).innerHTML = html
}
// Only ONE declaration of initTheme
function initTheme() {
  const stored = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = stored === 'dark' || (!stored && prefersDark)

  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  // Update toggle state if it exists in the DOM
  const toggle = document.getElementById('themeToggle')
  if (toggle) toggle.checked = isDark
}

function setupThemeToggle() {
  const toggle = document.getElementById('themeToggle')
  if (!toggle) {
    console.error('Theme toggle not found')
    return
  }

  toggle.addEventListener('change', (e) => {
    const isDark = e.target.checked
    
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  })
}

function setupNavbar() {
  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      const page = btn.dataset.page
      if (!page) return
      loadPage(page)
    })
  })
}

async function setupProjectCards(id,boolean){
  
  await renderList(
    'projects-list',
    '/components/project-card.html',
    cards,
    { title: '.title', description: '.description', image: '.image', link: ':root' }
  )

  const cardEls = document.querySelectorAll('.project-card')

  cardEls.forEach((cardEl, i) => {
    const tagContainer = cardEl.querySelector('.tag-container')
    const tags = cards[i].tags

    // ใส่ data-tags ให้ card
    cardEl.dataset.tags = tags.join(' ')

    // สีสำหรับแต่ละ tag (แบบเรียบง่าย)
    const tagStyles = {
      'web': 'bg-blue-50 text-blue-600 border border-blue-200',
      'mobile': 'bg-purple-50 text-purple-600 border border-purple-200',
      'ai': 'bg-pink-50 text-pink-600 border border-pink-200',
      'graphics': 'bg-teal-50 text-teal-600 border border-teal-200',
      'system': 'bg-orange-50 text-orange-600 border border-orange-200'
    }

    tags.forEach(tag => {
      const btn = document.createElement('button')
      const colorClass = tagStyles[tag] || 'bg-gray-50 text-gray-600 border border-gray-200'
      btn.className = `project-tag px-3 py-1 text-xs font-medium rounded-full ${colorClass} transition-all duration-200 hover:shadow-sm`
      btn.dataset.tag = tag
      btn.textContent = tag.toUpperCase()
      tagContainer.appendChild(btn)
    })
  })
  
  // Attach a single delegated click handler (once) on document.body so
  // filter buttons work regardless of which page rendered the projects.
  if (!window.__projectTagHandlerAttached) {
    document.body.addEventListener('click', e => {
      const el = e.target
      if (el && el.classList && el.classList.contains('project-tag')) {
        e.preventDefault()
        applyFilter(el.dataset.tag)
      }
    })
    window.__projectTagHandlerAttached = true
  }
}
function applyFilter(tag) {
  document.querySelectorAll('.project-card').forEach(card => {
    const tags = (card.dataset.tags || '').split(' ').filter(Boolean)
    card.style.display = tag === 'all' || tags.includes(tag) ? 'block' : 'none'
  })
}

async function loadPage(page) {
  const path = routes[page]
  if (!path) return

  const res = await fetch(path)
  document.getElementById('content').innerHTML = await res.text()

  await new Promise(resolve => setTimeout(resolve, 0))

  if (page === 'projects') {
    await setupProjectCards('projects-list', true)
  }
  if (page === 'skills') {
    await renderList(
      'language-list',
      '/components/language-item.html',
      languages,
      { image: '.image', title: '.title', description: '.description' }
    )
    await renderList(
      'skilldev-list',
      '/components/skill-list.html',
      devSkills,
      { title: '.title' }
    )
    await renderList(
      'skilldesign-list',
      '/components/skill-list.html',
      designSkills,
      { title: '.title'}
    ) 
  }
  if (page === 'home') {
    await renderList(
      'experience-list',
      '/components/edu-school-list.html',
      eduScools,
      { title: '.title', institution: '.institution', year: '.year', description: '.description' }
    )
    await renderList(
      'edu-school-list',
      '/components/edu-school-list.html',
      eduScools,
      { title: '.title', institution: '.institution', year: '.year', description: '.description' }
    )
    await setupProjectCards('projects-list', false)
     await renderList(
      'edu-course-list',
      '/components/edu-course-list.html',
      eduCourses,
      { title: '.title', institution: '.institution', year: '.year' ,image: '.image' }
    )
    await renderList(
      'skilldev-list',
      '/components/skill-list.html',
      devSkills,
      { title: '.title' }
    )
  }
  if (page === 'about') {
    await renderList(
      'edu-course-list',
      '/components/edu-course-list.html',
      eduCourses,
      { title: '.title', institution: '.institution', year: '.year' ,image: '.image' }
    )
    await renderList(
      'edu-school-list',
      '/components/edu-school-list.html',
      eduScools,
      { title: '.title', institution: '.institution', year: '.year', description: '.description' }
    )
  }
  
}

const experiences = [
  {
    title: 'Internship as a Frontend Developer',
    institution: 'Tech Solutions Co., Ltd.',
    year: 'June 2023 - August 2023',
    description: 'Assisted in developing and maintaining the company website using HTML, CSS, and JavaScript. Collaborated with the design team to implement responsive designs and improve user experience.'
  },
  {
    title: 'Part-time Web Developer',
    institution: 'Freelance',
    year: 'September 2022 - May 2023',
    description: 'Worked on various freelance projects, creating websites for small businesses and personal portfolios. Gained experience in client communication, project management, and delivering quality work on time.'
  }
]
const eduCourses = [
  {
    title: 'Bachelor of Science in Computer Science',
    institution: 'KMITL',
    year: '2020 - Present',
    image: '/icons/course-logo.png'
  },
  {
    title: 'High School Diploma',
    institution: 'Bangkok Prep International School',
    year: '2017 - 2020',
    image: '/icons/course-logo.png'
  }
]
const eduScools = [
{
    title: 'Bachelor of Science in Computer Science',
    institution: 'KMITL',
    year: '2020 - Present',
    description: 'titdklkgjkjsdkklfdjkldsjflkleed to be completed in 2024, focusing on software development and data science.'
  },
  {
    title: 'High School Diploma',
    institution: 'Bangkok Prep International School',
    year: '2017 - 2020',
    description: 'gfddjgsljjdskjgkldsjkggflfjsgldk with Honors, focusing on Science and Mathematics.'
  }
]
const devSkills = [
  { title: 'HTML' },
  { title: 'CSS' },
  { title: 'JavaScript' },
  { title: 'Vue.js' },
  { title: 'React' },
  { title: 'Node.js' },
  { title: 'Express.js' },
  { title: 'MongoDB' },
]

const designSkills = [
  { title: 'Figma' },
  { title: 'Adobe XD' },
  { title: 'Sketch' },
  { title: 'InVision' },
  { title: 'Adobe Photoshop' },
  { title: 'Adobe Illustrator' },
]
 
const socials = [
  { image: '/icons/github.png', title: 'GitHub', description: 'anecha' },
  { image: '/icons/facebook.png', title: 'Facebook', description: 'anecha' },
  { image: '/icons/instragram.png', title: 'Instagram', description: '@anecha' },
]

const languages = [
  { image: '/icons/Thailand.png', title: 'Thai', description: 'Native language' },
  { image: '/icons/England.png', title: 'English', description: 'CEFR level B2' }
]

const contacts = [
  { image: '/icons/mail.svg', title: 'E-mail', description: 'AnechaYoksombat@gmail.com' },
  { image: '/icons/tel.png', title: 'Telephone', description: '0864837892' },
  { image: '/icons/place.png', title: 'Location', description: '@anecha' },
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
    image: "/images/roomin.jpeg",
    link: "https://github.com/ANNE1133/Roomin",
    tags: ['web']
  },
  {
    title: "PIGParking – Mobile App System Design",
    description:
      "(Team project)\nA mobile parking management application concept focusing on system design. Includes use case design, relational database schema, and UI design based on user scenarios.",
    image: "/images/pigparking.jpeg",
    link: "https://github.com/anne1133/pigparking-system-design",
    tags: ['mobile', 'system']
  },
  {
    title: "KAIYANG - Java OOP Game Programming",
    description:
      "(Team project)\nA Java project developed to practice object-oriented programming and basic game logic. The game is built using Java Swing (JFrame), focusing on class structure, object interaction, and event-driven programming.",
    image: "/images/kaiyang.jpeg",
    link: "https://github.com/anne1133/pigparking-system-design",
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
    image: "/images/pl.jpeg",
    link: "https://anne1133-bankruptcy-prediction.streamlit.app",
    tags: ['graphics']
  },
  {
    title: "Computer Graphic 3D using openGL",
    description:
      "(Team project)\n3D graphics rendering using OpenGL for interactive visualization",
    image: "/images/pl.jpeg",
    link: "https://anne1133-bankruptcy-prediction.streamlit.app",
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

async function renderList(containerId, template, data, map) {
  const container = document.getElementById(containerId)
  if (!container) {
    console.error(`Container with id "${containerId}" not found`)
    return
  }
  container.innerHTML = ''

  for (const item of data) {
    const el = await loadItem(template, item, map)
    container.appendChild(el)
  }
}

async function initApp() {
  // Wait for Navbar to exist in DOM before setting up listeners
  await loadComponent('navbar', '/components/navbar.html')
  await loadComponent('sidebar', '/components/sidebar.html')
  await loadComponent('content', '/components/content.html')

  initTheme()
  setupThemeToggle()
  setupNavbar()
  
  await renderList(
  'contact-list',
  '/components/contact-item.html',
  contacts,
  { image: '.image', title: '.title', description: '.description' }
)

await renderList(
  'social-list',
  '/components/social-item.html',
  socials,
  { image: '.image', title: '.title', description: '.description' }
)

  // Load default page
  loadPage('home')
}

initApp()