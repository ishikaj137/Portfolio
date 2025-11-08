import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Suspense } from 'react'
import GalaxyBackground from './3D/GalaxyBackground'
import Nebula from './3D/Nebula'
import ShootingStars from './3D/ShootingStars'

export default function Hero() {
  return (
    <section 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center" 
      style={{ 
        backgroundColor: '#0B0E1D',
        background: '#0B0E1D'
      }}
    >
      {/* Base Dark Background - Always visible */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundColor: '#0B0E1D',
          background: '#0B0E1D',
          zIndex: 0
        }}
      />

      {/* Animated Universe Background */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden" 
        style={{ 
          backgroundColor: '#0B0E1D',
          background: '#0B0E1D',
          zIndex: 1
        }}
      >
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundColor: '#0B0E1D',
            background: 'linear-gradient(135deg, #0B0E1D 0%, rgba(123, 97, 255, 0.1) 50%, #0B0E1D 100%)'
          }}
        >
          <div 
            className="absolute inset-0 animate-pulse" 
            style={{ 
              background: 'radial-gradient(circle at 30% 20%, rgba(123,97,255,0.3), transparent 50%)',
              backgroundColor: 'transparent'
            }} 
          />
          <div 
            className="absolute inset-0 animate-pulse" 
            style={{ 
              background: 'radial-gradient(circle at 70% 80%, rgba(0,229,255,0.2), transparent 50%)',
              backgroundColor: 'transparent',
              animationDelay: '1s'
            }} 
          />
        </div>

        {/* Animated stars overlay */}
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-star-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random(),
                animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* 3D Cosmic Canvas Background */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundColor: '#0B0E1D',
            background: '#0B0E1D',
            zIndex: 3
          }}
        >
          <Suspense fallback={null}>
            <Canvas 
              camera={{ position: [0, 0, 5], fov: 50 }}
              style={{ 
                backgroundColor: '#0B0E1D',
                background: '#0B0E1D'
              }}
              gl={{ 
                alpha: false,
                antialias: true,
                preserveDrawingBuffer: false,
                clearColor: '#0B0E1D'
              }}
              onCreated={({ gl }) => {
                gl.setClearColor('#0B0E1D', 1)
              }}
            >
              <color attach="background" args={['#0B0E1D']} />
              <ambientLight intensity={0.3} />
              <directionalLight position={[10, 10, 5]} intensity={0.8} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#7B61FF" />
              <pointLight position={[10, 10, 5]} intensity={0.5} color="#00E5FF" />
              
              <GalaxyBackground />
              <Nebula />
              <ShootingStars />
              
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.3}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2.5}
              />
            </Canvas>
          </Suspense>
        </div>
      </div>

      {/* Content Overlay - Always visible */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="text-6xl md:text-8xl mb-4 relative"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              color: '#FFFFFF',
              textShadow: `
                0 0 10px rgba(255, 255, 255, 0.8),
                0 0 20px rgba(0, 229, 255, 0.6),
                0 0 30px rgba(123, 97, 255, 0.4),
                0 0 40px rgba(123, 97, 255, 0.3),
                0 2px 4px rgba(0, 0, 0, 0.5),
                0 4px 8px rgba(0, 0, 0, 0.3),
                0 8px 16px rgba(0, 0, 0, 0.2)
              `,
              filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 25px rgba(0, 229, 255, 0.4))'
            }}
          >
            Ishika Jain
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            className="text-xl md:text-2xl font-light mb-6"
            style={{ 
              fontFamily: "'Roboto', sans-serif",
              letterSpacing: '0.05em',
              fontWeight: 300,
              color: '#FFFFFF',
              textShadow: `
                0 0 10px rgba(252, 255, 255, 0.6),
                0 0 20px rgba(0, 229, 255, 0.4),
                0 2px 4px rgba(0, 0, 0, 0.2)
              `,
              filter: 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.5))'
            }}
          >
            AI & UI/UX Developer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
            className="text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              letterSpacing: '0.01em',
              color: '#E8F9FF',
              textShadow: `
                0 0 8px rgba(0, 229, 255, 0.3),
                0 1px 2px rgba(0, 0, 0, 0.2)
              `
            }}
          >
            Exploring the intersection of creativity and intelligence across the cosmos.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
            className="flex gap-4 justify-center mt-8"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-galactic-purple text-star-white rounded-full font-normal hover:bg-cosmic-cyan transition-all duration-300 cosmic-glow transform hover:scale-105 text-sm md:text-base"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 glass text-star-white rounded-full font-normal hover:bg-galactic-purple/30 transition-all duration-300 cosmic-glow transform hover:scale-105 text-sm md:text-base"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cosmic-cyan/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-cosmic-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
