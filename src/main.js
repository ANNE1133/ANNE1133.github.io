import './style.css'
import { loadItem } from '../public/components/item-base.js'

async function loadComponent(id, path) {
  const res = await fetch(path)
  const html = await res.text()
  document.getElementById(id).innerHTML = html
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

async function loadPage(page) {
  const path = routes[page]
  if (!path) return

  const res = await fetch(path)
  document.getElementById('content').innerHTML = await res.text()

  await new Promise(resolve => setTimeout(resolve, 0))

  if (page === 'projects') {
    await renderList(
      'projects-list',
      '/components/project-card.html',
      cards,
      { title: '.title', description: '.description', image: '.image', link: ':root' }
    )
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
      'projects-list',
      '/components/project-card.html',
      cards,
      { title: '.title', description: '.description', image: '.image', link: ':root' }
    )
    await renderList(
      'edu-school-list',
      '/components/edu-school-list.html',
      eduScools,
      { title: '.title', institution: '.institution', year: '.year', description: '.description' }
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
  if (page === 'home') {
    await renderList(
      'experience-list',
      '/components/edu-school-list.html',
      experiences,
      { title: '.title', institution: '.institution', year: '.year', description: '.description' }
    )
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
    await renderList(
      'skilldesign-list',
      '/components/skill-list.html',
      designSkills,
      { title: '.title'}
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
    institution: 'Chulalongkorn University',
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
    institution: 'Chulalongkorn University',
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
    title: "Streamlining your design process",
    description:
      "In today’s fast-paced digital landscape, fostering seamless collaboration.",
    image: "/images/projectsample.jpeg",
    link: "https://www.youtube.com/watch?v=n_MNQFfJ22M",
  },
  {
    title: "Improve team collaboration",
    description:
      "Collaboration between developers and designers is key to success.",
    image: "/images/projectsample.jpeg",
    link: "https://www.youtube.com/watch?v=n_MNQFfJ22M",
  },
  {
    title: "Build scalable UI systems",
    description:
      "Design systems help teams scale faster and more consistently.",
    image: "/images/projectsample.jpeg",
    link: "https://www.youtube.com/watch?v=n_MNQFfJ22M",
  },
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


await loadComponent('navbar', '/components/navbar.html')
await loadComponent('sidebar', '/components/sidebar.html')
await loadComponent('content', '/components/content.html')

setupNavbar()

// หน้าแรก
loadPage('home')


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

