import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Suspense } from 'react'
import GalaxyBackground from './3D/GalaxyBackground'

function SpaceStation() {
  return (
    <>
      <GalaxyBackground />
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#7B61FF" />
      <pointLight position={[10, 10, 5]} intensity={0.5} color="#00E5FF" />
      
      {/* Space Station Structure */}
      <group>
        <mesh position={[0, -1, 0]}>
          <cylinderGeometry args={[2, 2, 0.2, 32]} />
          <meshStandardMaterial
            color="#7B61FF"
            emissive="#7B61FF"
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
        <mesh position={[0, -0.8, 0]}>
          <cylinderGeometry args={[1.5, 1.5, 0.1, 32]} />
          <meshStandardMaterial
            color="#00E5FF"
            emissive="#00E5FF"
            emissiveIntensity={1}
          />
        </mesh>
      </group>

      <Environment preset="night" />
    </>
  )
}

export default function Contact() {
  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#', color: '#0077B5' },
    { name: 'GitHub', icon: '🐙', url: '#', color: '#333' },
    { name: 'Gmail', icon: '📧', url: 'mailto:ishikajn134@gmail.com', color: '#EA4335' },
  ]

  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-8 relative overflow-hidden flex items-center bg-space-blue">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl font-bold font-heading text-star-white text-center mb-16 neon-text tracking-tight"
          style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '-0.02em' }}
        >
          The Transmission Hub
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Space Station */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-[500px] relative"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <Suspense fallback={null}>
                <SpaceStation />
              </Suspense>
            </Canvas>
          </motion.div>

          {/* Contact Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="glass rounded-2xl p-8 cosmic-glow"
          >
            <div className="space-y-6">
              <h3 className="text-4xl font-heading text-cosmic-cyan mb-4">
                Let's Connect Across the Cosmos
              </h3>
              <p className="text-star-white/80 mb-8">
                Have a project in mind? Let's collaborate and create something stellar together.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-cosmic-cyan font-medium mb-2">Email Transmission</label>
                  <a
                    href="mailto:ishikajn134@gmail.com"
                    className="text-neon-green text-xl hover:text-cosmic-cyan transition-colors neon-text"
                  >
                    ✉️ ishikajn134@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-xl font-heading text-cosmic-cyan mb-4">Communication Channels</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.2, y: -5 }}
                        className="w-16 h-16 rounded-full glass flex items-center justify-center text-3xl hover:bg-galactic-purple/30 transition-all duration-300 cosmic-glow relative group"
                      >
                        <span>{social.icon}</span>
                        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-star-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {social.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 p-4 bg-galactic-purple/20 rounded-lg border border-cosmic-cyan/30 cosmic-glow"
                >
                  <p className="text-star-white/80 text-center">
                    <span className="text-2xl">👋</span> See you in the stars!
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
