import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ShootingStars() {
  const groupRef = useRef()
  const count = 10

  const stars = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ],
      speed: Math.random() * 0.02 + 0.01,
      delay: Math.random() * 5,
    }))
  }, [count])

  useFrame((state) => {
    if (groupRef.current) {
      stars.forEach((star, i) => {
        const child = groupRef.current.children[i]
        if (child) {
          child.position.x += star.speed
          child.position.y -= star.speed * 0.5
          if (child.position.x > 10) {
            child.position.x = -10
            child.position.y = Math.random() * 10 - 5
          }
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {stars.map((star, i) => (
        <mesh key={i} position={star.position}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial
            color="#00E5FF"
            emissive="#00E5FF"
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </group>
  )
}

