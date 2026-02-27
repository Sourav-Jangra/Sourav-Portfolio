# Sourav Jangra - Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing my frontend development skills and projects.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent localStorage
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations and scroll-triggered effects
- **Working Contact Form**: Ready for EmailJS integration (configuration needed)
- **Project Filtering**: Filter projects by technology category
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Built With

- **React** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **EmailJS** - Contact form integration (requires setup)
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/Sourav-Jangra/Sourav-Portfolio.git
cd "Sourav Portfolio"
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## ⚙️ Configuration

### EmailJS Setup (Optional)

To enable the contact form:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service and template
3. Update `src/sections/Contact.jsx` with your credentials:
   - Replace `YOUR_SERVICE_ID`
   - Replace `YOUR_TEMPLATE_ID`
   - Replace `YOUR_PUBLIC_KEY`
4. Uncomment the EmailJS code in the `handleSubmit` function

### Adding Your Resume

1. Place your resume PDF file in the `public` folder
2. Name it `resume.pdf` or update the path in `src/data/blog.js`

### Adding Project Screenshots

1. Add project screenshots to `public/assets/images/projects/`
2. Update the screenshot paths in `src/data/projects.js`

## 📝 Customization

### Personal Information

Edit `src/data/blog.js` to update:
- Name, title, bio
- Email, phone, location
- Social media links

### Projects

Edit `src/data/projects.js` to:
- Add new projects
- Update existing project details
- Add live demo URLs and screenshots

### Skills

Edit `src/data/content.js` to:
- Update skill proficiency levels
- Add new skills or categories
- Update experience and education

### Color Scheme

Edit `src/styles/theme.css` to customize:
- Accent colors
- Background colors
- Gradient definitions

## 📱 Sections

- **Hero**: Introduction with call-to-action buttons
- **About**: Background and key highlights
- **Experience**: Work history and education timeline
- **Skills**: Categorized skills with proficiency bars
- **Projects**: Filterable project showcase
- **Contact**: Working contact form and contact info

## 🚢 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default settings

## 📄 License

MIT License - feel free to use this portfolio as a template for your own!

## 👤 Author

**Sourav Jangra**
- GitHub: [@Sourav-Jangra](https://github.com/Sourav-Jangra)
- LinkedIn: [sourav-jangra](https://linkedin.com/in/sourav-jangra)
- Email: jangrasourav277@gmail.com

---

⭐ If you like this portfolio template, please consider giving it a star!
