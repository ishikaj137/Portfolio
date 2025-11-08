import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Nebula() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.001
      if (meshRef.current.material.uniforms) {
        meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime
      }
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -10]}>
      <planeGeometry args={[30, 30, 32, 32]} />
      <shaderMaterial
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          varying vec2 vUv;
          
          void main() {
            vec2 uv = vUv;
            vec3 color1 = vec3(0.48, 0.38, 1.0); // Galactic Purple
            vec3 color2 = vec3(0.0, 0.9, 1.0);  // Cosmic Cyan
            
            float noise = sin(uv.x * 10.0 + uTime) * sin(uv.y * 10.0 + uTime * 0.5) * 0.5 + 0.5;
            vec3 color = mix(color1, color2, noise);
            
            float dist = distance(uv, vec2(0.5));
            float alpha = 1.0 - smoothstep(0.2, 0.9, dist);
            
            gl_FragColor = vec4(color, alpha * 0.6);
          }
        `}
        uniforms={{
          uTime: { value: 0 },
        }}
        transparent
      />
    </mesh>
  )
}

