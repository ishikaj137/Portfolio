import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import GalaxyBackground from './3D/GalaxyBackground'
import { Suspense, useMemo } from 'react'
import * as THREE from 'three'

function Constellation({ points }) {
  return (
    <Line
      points={points}
      color="#00E5FF"
      lineWidth={2}
    />
  )
}

function FloatingKeywords() {
  const keywords = [
    { text: 'AI', position: [-2, 1.5, 0] },
    { text: 'UI', position: [2, 1, 0] },
    { text: 'C++', position: [-1.5, -0.5, 0] },
    { text: 'GDG Lead', position: [1.5, -1, 0] },
    { text: 'Innovation', position: [0, 2, 0] },
  ]

  const constellationPoints = useMemo(() => {
    return [
      [[-2, 1.5, 0], [0, 2, 0]],
      [[0, 2, 0], [2, 1, 0]],
      [[2, 1, 0], [1.5, -1, 0]],
      [[1.5, -1, 0], [-1.5, -0.5, 0]],
      [[-1.5, -0.5, 0], [-2, 1.5, 0]],
    ]
  }, [])

  return (
    <>
      {constellationPoints.map((points, i) => (
        <Constellation key={i} points={points} />
      ))}
      {keywords.map((keyword) => (
        <mesh key={keyword.text} position={keyword.position}>
          <boxGeometry args={[1.2, 0.3, 0.1]} />
          <meshStandardMaterial
            color="#7B61FF"
            emissive="#7B61FF"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </>
  )
}

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-8 relative overflow-hidden bg-space-blue">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl font-bold font-heading text-star-white text-center mb-16 neon-text tracking-tight"
          style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '-0.02em' }}
        >
          The Astral Identity
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Constellation Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-[500px] relative"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#7B61FF" />
              <pointLight position={[10, 10, 5]} intensity={0.5} color="#00E5FF" />
              <Suspense fallback={null}>
                <GalaxyBackground />
                <FloatingKeywords />
              </Suspense>
            </Canvas>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 cosmic-glow">
              <h3 className="text-3xl font-heading text-cosmic-cyan mb-6 tracking-tight" style={{ fontFamily: "'Orbitron', sans-serif" }}>Tech Explorer</h3>
              <p className="text-lg text-star-white/80 leading-relaxed mb-6 font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                Welcome to my digital universe! I'm Ishika Jain, a passionate AI & UI/UX Developer 
                navigating the cosmos of technology and creativity.
              </p>
              <p className="text-lg text-star-white/80 leading-relaxed mb-6">
                My journey spans from building intelligent systems that predict diseases to crafting 
                intuitive interfaces that bridge the gap between humans and technology.
              </p>
              <p className="text-lg text-star-white/80 leading-relaxed">
                As a GDG Lead, I'm dedicated to building communities and sharing knowledge across 
                the tech galaxy, inspiring others to explore the infinite possibilities of innovation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {['AI Enthusiast', 'Creative Thinker', 'Tech Explorer', 'Community Builder'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-galactic-purple/30 text-cosmic-cyan rounded-full text-sm font-medium border border-cosmic-cyan/30 cosmic-glow"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Constellation Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-[300px] mt-16 relative"
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#7B61FF" />
              <FloatingKeywords />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    </section>
  )
}
