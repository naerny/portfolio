'use client'
import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Billboard, Text, TrackballControls } from '@react-three/drei'
import { generate } from 'random-words'
import { Inter } from 'next/font/google'
import { skillNames } from '../data/skills'

const inter = Inter({ weight: '700', subsets: ['latin'] })
const color = new THREE.Color()

// https://codesandbox.io/p/sandbox/basic-demo-forked-yup2o

function Word({ children, fontUrl, ...props }) {
  const color = new THREE.Color()
  const fontProps = { 
    font: fontUrl, 
    fontSize: 2.5, 
    letterSpacing: -0.05, 
    lineHeight: 1, 
    'material-toneMapped': false,
  }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  const getCSSVariable = (varName) => {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
  }
  // Change the mouse cursor on hover¨
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
     const hoverColor = getCSSVariable('--foreground') // or '#fa2720' for accent
    const defaultColor = getCSSVariable('--gray')
     ref.current.material.color.lerp(color.set(hovered ? hoverColor : defaultColor), 0.1)
  })
  return (
    <Billboard {...props}>
      <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...fontProps} children={children} />
    </Billboard>
  )
}

function Cloud({ radius = 20, skills = skillNames }) {
  const words = useMemo(() => {
    const temp: [THREE.Vector3, string][] = []
    const n = Math.max(1, skills.length)
    const golden = Math.PI * (3 - Math.sqrt(5)) // golden angle

    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2 // y from 1 to -1
      const r = Math.sqrt(Math.max(0, 1 - y * y))
      const theta = golden * i
      const x = Math.cos(theta) * r
      const z = Math.sin(theta) * r

      const pos = new THREE.Vector3(x * radius, y * radius, z * radius)
      temp.push([pos, skills[i]])
    }

    return temp
  }, [skills, radius])

  return words.map(([pos, word], index) => (
    <Word key={index} position={pos}>
      {word}
    </Word>
  ))
}

export default function App() {
  return (
     <Canvas className='border border-dashed border-(--gray) rounded-xl' id="wordCloud" dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Suspense fallback={null}>
        <group rotation={[10, 10.5, 10]}>
          <Cloud count={8} radius={20} />
        </group>
      </Suspense>
      <TrackballControls />
    </Canvas>
  )
}
