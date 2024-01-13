/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Physics, usePlane } from '@react-three/cannon'
import { Suspense, useEffect } from 'react'

import { World } from './play-files/World.jsx'
import { CarModel } from './play-files/CarModel.jsx'

// Ground
const Plane = () => {
  const [ref] = usePlane(() => ({
    mass:10,
    position: [0,-1,0],
    rotation: [-Math.PI / 2,0,0],
    type: 'Static'
  }))
  return (
    <mesh scale={105} ref={ref} receiveShadow>
      <planeGeometry/>
      <meshBasicMaterial color={'grey'} side={THREE.DoubleSide}/>
    </mesh>
  )
}

export function Scene() {
  return (
    <Suspense fallback={null}>
        <Canvas shadows>
        <ambientLight intensity={0.8} castShadow/>
        <directionalLight intensity={0.5} position={[2,2,3]} castShadow/>

        <PerspectiveCamera makeDefault position={[0, 2.5, 5]} fov={100}/>
        {/* <OrbitControls target={[0, 0, 0]}/> */}

        <Physics broadphase='SAP' gravity={[0, -20, 0]}>

          <CarModel/>

          <Plane/>
          <World/>
        </Physics>

      </Canvas>
    </Suspense>
    
  )
  
}

// const Play = () => {
//   return (

//     <section>

//       <div className="w-full h-screen relative">
//         <Scene/>
//       </div>
      
//     </section>
    
//   )
// }

// export default Play