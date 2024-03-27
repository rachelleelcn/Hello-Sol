/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Suspense } from 'react'

import city from "../assets/lighting/potsdamer_platz_1k.hdr";

import { World } from '../play-files/World.jsx'
import { CarModel } from '../play-files/CarFiles/CarModel.jsx'

export function Scene({ entries, setEntries, enableControls, soundOff }) {
  return (
    <Suspense fallback={null}>
        <Canvas shadows>
        <Environment files={city} />
        {/* <ambientLight intensity={0.5} color={'white'} castShadow/> */}

        <OrbitControls/>
        <PerspectiveCamera makeDefault position={[2, 0.8, 60]} fov={70}/>

        <Physics broadphase='SAP' gravity={[0, -20, 0]}>
          <CarModel enableControls={enableControls} soundOff={soundOff} />
          <World entries={entries} setEntries={setEntries} soundOff={soundOff}/>
        </Physics>
      </Canvas>
    </Suspense>
  )
}