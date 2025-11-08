import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

export default function Star({ 
  position, 
  name, 
  tech, 
  onHover, 
  onClick 
}) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.02
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.5, 1.5, 1.5), 0.1)
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
      }
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
        <octahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial
          color="#00E5FF"
          emissive="#00E5FF"
          emissiveIntensity={hovered ? 3 : 1.5}
        />
      </mesh>
      {hovered && (
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.2}
          color="#E8F9FF"
          anchorX="center"
          anchorY="middle"
          maxWidth={2}
        >
          {name}
        </Text>
      )}
    </group>
  )
}

