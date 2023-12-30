import {Canvas, useFrame} from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'
import { Suspense } from 'react'
import Loader from '../components/Loader'


const Play = () => {
  return (
    <section className="w-full h-screen relative">
      <div>Play</div>

      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{near:0.1, far: 1000}}
      >
        <Suspense fallback={<Loader/>}>
          
        </Suspense>
      </Canvas>  
    
    </section>
    
  )
}

export default Play