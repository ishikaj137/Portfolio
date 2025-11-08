import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import Star from './3D/Star'
import GalaxyBackground from './3D/GalaxyBackground'

const projects = [
  {
    name: 'AI Disease Prediction',
    description: 'Machine learning model that predicts diseases based on symptoms using advanced algorithms.',
    tech: ['Python', 'TensorFlow', 'Scikit-learn'],
    github: '#',
    demo: '#',
    position: [2, 1, 0],
  },
  {
    name: 'Agrius App',
    description: 'Plant care mobile application with intuitive UI/UX design for managing your garden.',
    tech: ['React Native', 'Figma', 'Firebase'],
    github: '#',
    demo: '#',
    position: [-2, 0.5, 0],
  },
  {
    name: 'AI for Impact',
    description: 'Hackathon project focused on using AI to solve real-world social problems.',
    tech: ['Python', 'OpenCV', 'TensorFlow'],
    github: '#',
    demo: '#',
    position: [0, -1.5, 0],
  },
  {
    name: 'DBMS Mini Project',
    description: 'Collection of database management system projects with visualizations.',
    tech: ['SQL', 'Python', 'MySQL'],
    github: '#',
    demo: '#',
    position: [1.5, 1.5, 0],
  },
  {
    name: 'DSA Visuals',
    description: 'Interactive visualizations of data structures and algorithms for learning.',
    tech: ['JavaScript', 'React', 'D3.js'],
    github: '#',
    demo: '#',
    position: [-1.5, -0.5, 0],
  },
]

function GalaxyMap({ onStarHover, onStarClick }) {
  return (
    <>
      <GalaxyBackground />
      {projects.map((project) => (
        <Star
          key={project.name}
          position={project.position}
          name={project.name}
          tech={project.tech}
          onHover={onStarHover}
          onClick={onStarClick}
        />
      ))}
    </>
  )
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="min-h-screen py-20 px-4 md:px-8 relative overflow-hidden bg-space-blue">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl font-bold font-heading text-star-white text-center mb-16 neon-text tracking-tight"
          style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '-0.02em' }}
        >
          Constellations of Creation
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Galaxy Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-[600px] relative"
          >
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#7B61FF" />
                <pointLight position={[10, 10, 5]} intensity={0.5} color="#00E5FF" />
                <GalaxyMap
                  onStarHover={setHoveredProject}
                  onStarClick={setSelectedProject}
                />
              </Suspense>
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.3}
              />
            </Canvas>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-4"
          >
            <AnimatePresence mode="wait">
              {selectedProject ? (
                <motion.div
                  key={selectedProject}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass rounded-2xl p-8 cosmic-glow"
                >
                  <h3 className="text-3xl font-heading text-cosmic-cyan mb-4">
                    {selectedProject}
                  </h3>
                  <p className="text-star-white/80 mb-6">
                    {projects.find(p => p.name === selectedProject)?.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects.find(p => p.name === selectedProject)?.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-galactic-purple/30 text-cosmic-cyan rounded-full text-sm border border-cosmic-cyan/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={projects.find(p => p.name === selectedProject)?.github}
                      className="px-6 py-3 bg-galactic-purple text-star-white rounded-full font-semibold hover:bg-cosmic-cyan transition-all duration-300 cosmic-glow"
                    >
                      GitHub
                    </a>
                    <a
                      href={projects.find(p => p.name === selectedProject)?.demo}
                      className="px-6 py-3 glass text-star-white rounded-full font-semibold hover:bg-galactic-purple/30 transition-all duration-300 cosmic-glow"
                    >
                      Demo
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass rounded-2xl p-8 cosmic-glow"
                >
                  <p className="text-star-white/60 text-center">
                    {hoveredProject
                      ? `Hovering over ${hoveredProject}`
                      : 'Click on a star to explore my projects'}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
