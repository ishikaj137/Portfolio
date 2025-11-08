import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function Character3D() {
  const meshRef = useRef()

  // Simple idle animation - gentle rotation and float
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2
    }
  })

  return (
    <group ref={meshRef} position={[0, -1, 0]}>
      {/* Head */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#FFDBAC" />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[0.6, 0.8, 0.4]} />
        <meshStandardMaterial 
          color="#7B61FF" 
          emissive="#7B61FF"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.4, 0.8, 0]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshStandardMaterial color="#FFDBAC" />
      </mesh>
      <mesh position={[0.4, 0.8, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshStandardMaterial color="#FFDBAC" />
      </mesh>
      
      {/* Laptop (in hands) */}
      <mesh position={[0, 0.5, 0.3]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[0.5, 0.3, 0.05]} />
        <meshStandardMaterial color="#202020" />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.15, -0.2, 0]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshStandardMaterial color="#4A5568" />
      </mesh>
      <mesh position={[0.15, -0.2, 0]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshStandardMaterial color="#4A5568" />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.1, 1.6, 0.25]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#202020" />
      </mesh>
      <mesh position={[0.1, 1.6, 0.25]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#202020" />
      </mesh>
      
      {/* Smile */}
      <mesh position={[0, 1.45, 0.25]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.08, 0.02, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#202020" />
      </mesh>
    </group>
  )
}

