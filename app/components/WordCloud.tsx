'use client'
import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber'
import { Billboard, Text, TrackballControls } from '@react-three/drei'
import { generate } from 'random-words'
import { Inter } from 'next/font/google'
import { skills } from '../data/skills'
import Image from 'next/image'

const inter = Inter({ weight: '700', subsets: ['latin'] })
const color = new THREE.Color()
const skillNames = skills.map(skill => skill.name);
const skillDescriptions = skills.map(skill => skill.description);

// https://codesandbox.io/p/sandbox/basic-demo-forked-yup2o

function Word({ children, fontUrl, ...props }: { children: string; fontUrl?: string } & Record<string, any>) {
    const color = new THREE.Color()
    const fontProps = {
        font: fontUrl,
        fontSize: 2.5,
        fontWeight: 'bold',
        letterSpacing: -0.05,
        lineHeight: 1,
        'material-toneMapped': false,
        fontFamily: 'Inter',
    }
    const ref = useRef<any>(null)
    const [hovered, setHovered] = useState(false)
    const over = (e: ThreeEvent<PointerEvent>) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)
    const getCSSVariable = (varName: string) => {
        return getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
    }

    const handleClick = (name: string) => {
        const description = skillDescriptions[skillNames.indexOf(name)]
        const titleContainer = document.querySelector('.wordCloud--descTitle') as HTMLElement | null;
        const descContainer = document.querySelector('.wordCloud--desc') as HTMLElement | null;
        const modalContainer = document.querySelector('.wordCloud--descContainer') as HTMLElement | null;
        if (titleContainer) titleContainer.textContent = name;
        if (descContainer) descContainer.textContent = description;
        // if (modalContainer) modalContainer.classList.add('opacity-100');
        if (modalContainer) modalContainer.classList.remove('opacity-0');
    }

    // Change the mouse cursor on hover¨
    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer'
        return () => { document.body.style.cursor = 'auto' }
    }, [hovered])
    // Tie component to the render-loop
    useFrame(({ camera }) => {
        const hoverColor = getCSSVariable('--foreground') // or '#fa2720' for accent
        const defaultColor = 'rgba(100,100,100,1)' // or getCSSVariable('--gray')
        ref.current.material.color.lerp(color.set(hovered ? hoverColor : defaultColor), 0.1)
    })
    return (
        <Billboard {...props}>
            <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => handleClick(children)} {...fontProps} children={children} />
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
    const modalButton = () => {
        const modalContainer = document.getElementsByClassName('wordCloud--descContainer');
        modalContainer[0].classList.add('opacity-0');
    }

    return (
        <div className='relative'>
            <Canvas className='border border-dashed border-(--gray) bg-(--gray) rounded-xl' id="wordCloud" dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
                <fog attach="fog" args={['white', 70, 0]} />
                <Suspense fallback={null}>
                    <group rotation={[10, 10.5, 10]}>
                        <Cloud radius={25} />
                    </group>
                </Suspense>
                <TrackballControls />
            </Canvas>
            <div className="wordCloud--descContainer py-4 px-6 mt-4 border border-dashed border-(--gray) rounded-lg bg-(--background) absolute -bottom-4 left-[50%] translate-x-[-50%] w-128 opacity-0 transition-all duration-300">
                <div className='flex justify-end w-full'>
                    <button className="flex items-center text-(--gray) hover:cursor-pointer" onClick={() => modalButton()}>
                        Fermer
                        <Image
                            aria-hidden
                            src="/x.svg"
                            alt="Fermer la fenêtre"
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
                <div className=''>
                    <p className="wordCloud--descTitle font-bold"></p>
                    <p className="wordCloud--desc"></p>
                </div>
            </div>
        </div>
    )
}
