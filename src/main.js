import './style.css'
import { loadItem } from '../public/components/item-base.js'
import { eduCourses, eduScools, devSkills, aiSkills, socials, languages, contacts, routes, cards, experiences } from './filedata.js'

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

    // สีสำหรับแต่ละ tag
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
      btn.textContent = tag === 'ai' ? 'AI/ML' : tag.replace('_', ' ')
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
      'skillai-list',
      '/components/skill-list.html',
      aiSkills,
      { title: '.title'}
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
  '/components/social-item.html',
  contacts,
  { image: '.image', title: '.title', description: '.description' }
)

await renderList(
  'social-list',
  '/components/social-item.html',
  socials,
  { image: '.image', title: '.title', description: '.description', link: '.link' }
)

  // Load default page
  loadPage('home')
}

initApp()