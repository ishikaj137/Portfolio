import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Particles() {
  const meshRef = useRef()
  const count = 200

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const x = Math.random() * 20 - 10
      const y = Math.random() * 20 - 10
      const z = Math.random() * 20 - 10

      temp.push({ time, factor, speed, x, y, z })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      particles.forEach((particle, i) => {
        let { factor, speed, x, y, z } = particle
        const t = (particle.time += speed)

        meshRef.current.geometry.attributes.position.setXYZ(
          i,
          x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
          y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
          z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
        )
      })
      meshRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  const points = useMemo(() => {
    return new Float32Array(particles.length * 3)
  }, [particles])

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#7EE081" transparent opacity={0.6} />
    </points>
  )
}

