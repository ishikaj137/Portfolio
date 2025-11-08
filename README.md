# Ishika Jain - 3D Interactive Portfolio

A modern, futuristic 3D-interactive portfolio website showcasing technical skills, projects, hobbies, and contact details. Features a 3D animated character as the central storytelling element.

## 🎨 Features

- **3D Interactive Character**: Animated 3D character with idle animations (waving, floating)
- **Hero Section**: Full-screen 3D environment with particle effects
- **About Me**: Personal journey with floating 3D skill cards
- **Technical Skills**: Interactive carousel with 3D hover effects
- **Projects Showcase**: Horizontal scroll gallery with 3D card flips
- **Hobbies Zone**: Playful 3D environment with orbiting objects
- **Contact Section**: Glassmorphism design with social links
- **Smooth Animations**: Framer Motion for seamless transitions
- **Responsive Design**: Optimized for all devices

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Framer Motion** - Animation library
- **TailwindCSS** - Styling
- **GSAP** - Advanced animations (optional)

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.19+ or v22.12+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd practice
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── 3D/
│   │   ├── Character3D.jsx    # 3D character model
│   │   └── Particles.jsx       # Particle effects
│   ├── Hero.jsx                # Hero section
│   ├── About.jsx               # About section
│   ├── Skills.jsx              # Skills section
│   ├── Projects.jsx            # Projects showcase
│   ├── Hobbies.jsx             # Hobbies section
│   ├── Contact.jsx             # Contact section
│   └── Footer.jsx              # Footer
├── App.jsx                     # Main app component
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## 🎨 Design System

### Colors
- **Mint Green**: `#7EE081`
- **Off White**: `#F6F9F6`
- **Charcoal**: `#202020`

### Typography
- **Primary Font**: Poppins
- **Secondary Font**: Inter

### Components
- Glassmorphism effects
- Smooth scroll animations
- 3D transformations
- Responsive grid layouts

## 🔧 Customization

### Adding Your 3D Model

To replace the placeholder character with your own GLTF/FBX model:

1. Place your model in the `public/models/` directory
2. Update `src/components/3D/Character3D.jsx`:

```jsx
import { useGLTF } from '@react-three/drei'

export default function Character3D() {
  const { scene } = useGLTF('/models/your-model.gltf')
  return <primitive object={scene} />
}
```

### Updating Projects

Edit the `projects` array in `src/components/Projects.jsx`:

```jsx
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    tech: ['Tech1', 'Tech2'],
    github: 'https://github.com/...',
    demo: 'https://demo.com',
  },
  // Add more projects...
]
```

### Modifying Skills

Update the `skillCategories` object in `src/components/Skills.jsx`:

```jsx
const skillCategories = {
  'Your Category': [
    { name: 'Skill1', icon: '🎯' },
    // Add more skills...
  ],
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Optimization

- Lazy loading for 3D components
- Suspense boundaries for async rendering
- Optimized particle counts
- Image optimization
- Code splitting

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Ishika Jain**
- Portfolio: [Your Portfolio URL]
- Email: ishika.jain@example.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

## 🙏 Acknowledgments

- Three.js community
- React Three Fiber team
- Framer Motion creators
- All open-source contributors

---

Built with ❤️ using React, Three.js, and modern web technologies.
