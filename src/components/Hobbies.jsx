import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import Asteroid from './3D/Asteroid'
import GalaxyBackground from './3D/GalaxyBackground'

const hobbies = [
  {
    icon: '🎧',
    hobby: 'Music',
    quote: 'Music helps me code with rhythm 🎶',
    position: [2, 1.5, 0],
  },
  {
    icon: '🎨',
    hobby: 'Design',
    quote: 'Design is where creativity meets functionality ✨',
    position: [-2, 1, 0],
  },
  {
    icon: '☕',
    hobby: 'Coffee Lover',
    quote: 'Fueled by coffee and curiosity ☕',
    position: [0, 2, 0],
  },
  {
    icon: '📚',
    hobby: 'Reading',
    quote: 'Books are portals to infinite knowledge 📖',
    position: [1.5, -1, 0],
  },
  {
    icon: '💻',
    hobby: 'Creative Coding',
    quote: 'Coding is my canvas for digital art 🎨',
    position: [-1.5, -1.5, 0],
  },
]

function HobbiesScene({ onAsteroidHover, onAsteroidClick }) {
  return (
    <>
      <GalaxyBackground />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#7B61FF" />
      <pointLight position={[10, 10, 5]} intensity={0.5} color="#00E5FF" />
      
      {hobbies.map((hobby) => (
        <Asteroid
          key={hobby.hobby}
          position={hobby.position}
          icon={hobby.icon}
          hobby={hobby.hobby}
          quote={hobby.quote}
          onHover={onAsteroidHover}
          onClick={onAsteroidClick}
        />
      ))}
      
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

export default function Hobbies() {
  const [hoveredHobby, setHoveredHobby] = useState(null)
  const [selectedQuote, setSelectedQuote] = useState(null)

  return (
    <section id="hobbies" className="min-h-screen py-20 px-4 md:px-8 relative overflow-hidden bg-space-blue">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl font-bold font-heading text-star-white text-center mb-16 neon-text tracking-tight"
          style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '-0.02em' }}
        >
          My Cosmic Playground
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-[600px] relative"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <Suspense fallback={null}>
                <HobbiesScene
                  onAsteroidHover={setHoveredHobby}
                  onAsteroidClick={(hobby, quote) => setSelectedQuote({ hobby, quote })}
                />
              </Suspense>
            </Canvas>
          </motion.div>

          {/* Hobby Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-4"
          >
            <AnimatePresence mode="wait">
              {selectedQuote ? (
                <motion.div
                  key={selectedQuote.hobby}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass rounded-2xl p-8 cosmic-glow"
                >
                  <div className="text-6xl mb-4 text-center">
                    {hobbies.find(h => h.hobby === selectedQuote.hobby)?.icon}
                  </div>
                  <h3 className="text-3xl font-heading text-cosmic-cyan mb-4 text-center">
                    {selectedQuote.hobby}
                  </h3>
                  <p className="text-star-white/80 text-center text-lg">
                    {selectedQuote.quote}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={hobby.hobby}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="glass rounded-xl p-6 flex items-center gap-4 cursor-pointer cosmic-glow"
                    >
                      <span className="text-4xl">{hobby.icon}</span>
                      <div>
                        <h3 className="text-xl font-heading text-cosmic-cyan">{hobby.hobby}</h3>
                        {hoveredHobby === hobby.hobby && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-star-white/70 text-sm mt-1"
                          >
                            {hobby.quote}
                          </motion.p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
