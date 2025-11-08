import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

export default function Asteroid({ 
  position, 
  icon, 
  hobby, 
  quote,
  onHover,
  onClick 
}) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.015
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1)
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
          if (onHover) onHover(hobby)
        }}
        onPointerOut={() => {
          setHovered(false)
          if (onHover) onHover(null)
        }}
        onClick={(e) => {
          e.stopPropagation()
          if (onClick) onClick(hobby, quote)
        }}
      >
        <dodecahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial
          color="#7B61FF"
          emissive="#7B61FF"
          emissiveIntensity={hovered ? 1 : 0.3}
        />
      </mesh>
      {hovered && quote && (
        <Text
          position={[0, 0.6, 0]}
          fontSize={0.15}
          color="#7EE081"
          anchorX="center"
          anchorY="middle"
          maxWidth={2}
        >
          {quote}
        </Text>
      )}
    </group>
  )
}

