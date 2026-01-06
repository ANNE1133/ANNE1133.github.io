# Portfolio Website

A modern, responsive portfolio website built with **Vite**, **Tailwind CSS**, and vanilla JavaScript. Showcase your projects, skills, education, and experience with a sleek, dark-mode-enabled interface.

## 🌟 Features

- **Dynamic Component Loading**: Modular HTML components loaded asynchronously
- **Dark/Light Mode Toggle**: Theme switching with localStorage persistence
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Project Filtering**: Filter projects by category (Web, Mobile, AI, Graphics, System)
- **Data-Driven**: Easy-to-manage project, skill, and education data structure
- **Fast Build**: Powered by Vite for rapid development and optimized production builds
- **GitHub Pages Ready**: Pre-configured deployment scripts for GitHub Pages

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the development server at `http://localhost:5173`

### Build

```bash
npm run build
```

Generates optimized production files in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML entry point
├── src/
│   ├── main.js            # Main JavaScript file (theme, navigation, components)
│   ├── item-base.js       # Base utilities for rendering components
│   ├── filedata.js        # Portfolio data (projects, skills, education, etc.)
│   └── style.css          # Global styles
├── public/
│   ├── components/        # Reusable HTML components
│   │   ├── home.html
│   │   ├── about.html
│   │   ├── contact.html
│   │   ├── project.html
│   │   ├── project-card.html
│   │   ├── skills.html
│   │   └── ... (other components)
│   ├── icons/             # Icon assets
│   └── images/            # Image assets
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Add Your Projects

Edit [src/filedata.js](src/filedata.js) and update the `cards` array:

```javascript
const cards = [
  {
    title: 'Project Title',
    description: 'Project description',
    image: '/images/project.png',
    link: 'https://github.com/yourprofile/project',
    tags: ['web', 'react']
  },
  // Add more projects...
]
```

**Available tags**: `web`, `mobile`, `ai`, `graphics`, `system`

### Update Skills & Education

Modify the `devSkills`, `aiSkills`, `eduScools`, and `eduCourses` arrays in [src/filedata.js](src/filedata.js).

### Customize Styling

- **Tailwind Config**: [tailwind.config.js](tailwind.config.js) - Extend colors, fonts, and more
- **Global Styles**: [src/style.css](src/style.css) - Custom CSS

## 🌓 Dark Mode

The portfolio includes a built-in dark mode toggle that:
- Respects system preferences on first visit
- Persists user preference in localStorage
- Smoothly transitions between themes

## 📦 Dependencies

- **Vite**: Next-generation build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Autoprefixer**: PostCSS plugin for browser prefixes
- **gh-pages**: Deployment tool for GitHub Pages

## 🚀 Deployment

### Deploy to GitHub Pages

```bash
npm run deploy
```

Make sure your `package.json` includes a `homepage` field pointing to your GitHub Pages URL.

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run clean` | Remove dist folder |

## 🎯 File Management Tips

- **Add Components**: Create new HTML files in `public/components/`
- **Add Images**: Place images in `public/images/`
- **Add Icons**: Place icons in `public/icons/`
- **Update Data**: All dynamic content is managed in `src/filedata.js`

## 🛠️ Troubleshooting

### Theme toggle not working
- Clear localStorage and refresh the page
- Ensure the theme toggle element has `id="themeToggle"`

### Components not loading
- Check that component paths in `loadComponent()` calls match actual files
- Verify that component IDs in HTML match the loader function

### Build errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Anecha Yoksombat - [@an_ch_pp](https://instragram.com/an_ch_pp)

---