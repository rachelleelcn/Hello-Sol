/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Suspense, useEffect } from 'react'

import { World } from './play-files/World.jsx'
import { CarModel } from './play-files/CarModel.jsx'

export function Scene() {
  return (
    <Suspense fallback={null}>
        <Canvas shadows>
        <ambientLight intensity={2} color={'white'} castShadow/>
        {/* <directionalLight intensity={1.5} position={[2,2,3]} castShadow/> */}

        <PerspectiveCamera makeDefault position={[0, 2.5, 5]} fov={130}/>
        {/* <OrbitControls/> */}

        <Physics broadphase='SAP' gravity={[0, -20, 0]}>
          <CarModel/>
          <World/>
        </Physics>

      </Canvas>
    </Suspense>
  )
}