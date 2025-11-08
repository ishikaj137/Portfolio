import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function GalaxyOutline() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.002
    }
  })

  return (
    <mesh ref={meshRef}>
      <ringGeometry args={[2, 2.2, 64]} />
      <meshBasicMaterial
        color="#7B61FF"
        transparent
        opacity={0.5}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 relative overflow-hidden bg-space-blue border-t border-galactic-purple/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Galaxy Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="h-32 w-32 relative"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <GalaxyOutline />
              </Suspense>
            </Canvas>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-star-white/60"
          >
            <span className="text-sm">Made with 💚 in the Milky Way · © 2025 Ishika Jain</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-6"
          >
            <a href="#" className="hover:text-cosmic-cyan transition-colors">↑ Back to Top</a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
