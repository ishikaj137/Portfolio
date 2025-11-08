import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

export default function Planet({ 
  position, 
  color, 
  emissive, 
  name, 
  radius = 0.5,
  orbitRadius = 0,
  orbitSpeed = 0.01,
  onHover,
  onClick 
}) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const orbitAngle = useRef(0)

  useFrame(() => {
    if (meshRef.current && orbitRadius > 0) {
      orbitAngle.current += orbitSpeed
      meshRef.current.position.x = Math.cos(orbitAngle.current) * orbitRadius
      meshRef.current.position.z = Math.sin(orbitAngle.current) * orbitRadius
      meshRef.current.rotation.y += 0.01
    } else if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }

    if (hovered && meshRef.current) {
      meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1)
    } else if (meshRef.current) {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
    }
  })

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          if (onHover) onHover(name)
        }}
        onPointerOut={() => {
          setHovered(false)
          if (onHover) onHover(null)
        }}
        onClick={(e) => {
          e.stopPropagation()
          if (onClick) onClick(name)
        }}
      >
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={hovered ? 1.5 : 0.8}
        />
      </mesh>
      {hovered && (
        <Text
          position={[0, radius + 0.5, 0]}
          fontSize={0.3}
          color="#00E5FF"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      )}
    </group>
  )
}

