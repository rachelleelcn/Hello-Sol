/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Suspense, useEffect } from 'react'

import { World } from './play-files/World.jsx'
import { CarModel } from './play-files/CarModel.jsx'

export function Scene() {
  return (
    <Suspense fallback={null}>
        <Canvas shadows>
        <Environment preset="city" />
        <ambientLight intensity={0.5} color={'white'} castShadow/>
        {/* <directionalLight intensity={3} position={[15, 100, 0]} castShadow/> */}
        {/* <directionalLight intensity={3} position={[-15, 100, 0]} castShadow/> */}

        <PerspectiveCamera makeDefault position={[0, 2.5, 5]} fov={120}/>
        {/* <OrbitControls/> */}



        <Physics broadphase='SAP' gravity={[0, -20, 0]}>
          <CarModel/>
          <World/>
        </Physics>

      </Canvas>
    </Suspense>
  )
}