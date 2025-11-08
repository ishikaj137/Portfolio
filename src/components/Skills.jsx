import { motion } from 'framer-motion'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import Planet from './3D/Planet'
import GalaxyBackground from './3D/GalaxyBackground'

const skills = [
  { name: 'AI & ML', color: '#7B61FF', emissive: '#7B61FF', radius: 0.6, orbitRadius: 2.5, orbitSpeed: 0.01 },
  { name: 'Python / C++', color: '#00E5FF', emissive: '#00E5FF', radius: 0.5, orbitRadius: 3.5, orbitSpeed: 0.008 },
  { name: 'UI/UX Design', color: '#7EE081', emissive: '#7EE081', radius: 0.55, orbitRadius: 4.5, orbitSpeed: 0.006 },
  { name: 'Cloud & DevOps', color: '#FF6B9D', emissive: '#FF6B9D', radius: 0.5, orbitRadius: 5.5, orbitSpeed: 0.004 },
  { name: 'Open Source / GDG', color: '#FFD93D', emissive: '#FFD93D', radius: 0.45, orbitRadius: 6.5, orbitSpeed: 0.003 },
]

function SolarSystem({ onPlanetHover, onPlanetClick }) {
  return (
    <>
      <GalaxyBackground />
      {/* Central Sun */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#FFD93D"
          emissive="#FFD93D"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Orbiting Planets */}
      {skills.map((skill, i) => (
        <Planet
          key={skill.name}
          position={[skill.orbitRadius, 0, 0]}
          color={skill.color}
          emissive={skill.emissive}
          name={skill.name}
          radius={skill.radius}
          orbitRadius={skill.orbitRadius}
          orbitSpeed={skill.orbitSpeed}
          onHover={onPlanetHover}
          onClick={onPlanetClick}
        />
      ))}
    </>
  )
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [selectedSkill, setSelectedSkill] = useState(null)

  const skillDetails = {
    'AI & ML': {
      badges: ['TensorFlow', 'OpenCV', 'Scikit-learn', 'PyTorch'],
      description: 'Building intelligent systems that learn and adapt.',
    },
    'Python / C++': {
      badges: ['Python', 'C++', 'JavaScript', 'TypeScript'],
      description: 'Crafting efficient and elegant code solutions.',
    },
    'UI/UX Design': {
      badges: ['Figma', 'Framer', 'Tailwind', 'Design Systems'],
      description: 'Creating beautiful and intuitive user experiences.',
    },
    'Cloud & DevOps': {
      badges: ['AWS', 'Docker', 'Git', 'CI/CD'],
      description: 'Deploying and scaling applications in the cloud.',
    },
    'Open Source / GDG': {
      badges: ['Community', 'Leadership', 'Mentoring', 'Events'],
      description: 'Building communities and sharing knowledge.',
    },
  }

  return (
    <section id="skills" className="min-h-screen py-20 px-4 md:px-8 relative overflow-hidden bg-space-blue">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl font-bold font-heading text-star-white text-center mb-16 neon-text tracking-tight"
          style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '-0.02em' }}
        >
          Orbit of Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Solar System */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-[600px] relative"
          >
            <Canvas camera={{ position: [0, 8, 12], fov: 50 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[0, 0, 0]} intensity={2} color="#FFD93D" />
                <SolarSystem
                  onPlanetHover={setHoveredSkill}
                  onPlanetClick={setSelectedSkill}
                />
              </Suspense>
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>
          </motion.div>

          {/* Skill Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-4"
          >
            {selectedSkill && skillDetails[selectedSkill] ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-8 cosmic-glow"
              >
                <h3 className="text-3xl font-heading text-cosmic-cyan mb-4">{selectedSkill}</h3>
                <p className="text-star-white/80 mb-6">{skillDetails[selectedSkill].description}</p>
                <div className="flex flex-wrap gap-2">
                  {skillDetails[selectedSkill].badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 bg-galactic-purple/30 text-cosmic-cyan rounded-full text-sm border border-cosmic-cyan/30"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass rounded-2xl p-8 cosmic-glow"
              >
                <p className="text-star-white/60 text-center">
                  {hoveredSkill
                    ? `Hovering over ${hoveredSkill}`
                    : 'Click on a planet to explore my skills'}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
