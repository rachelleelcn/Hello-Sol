/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { useRef } from 'react'
import { usePlane } from '@react-three/cannon'


export const Ground = () => {
    const [ref] = usePlane(() => ({
      position: [0,-1,0],
      rotation: [-Math.PI / 2, 0, 0],
      material: 'ground',
      type: 'Static'
    }), useRef())

    return (
      <mesh scale={150} ref={ref} receiveShadow>
        <planeGeometry/>
        <meshBasicMaterial color={'#FFFFFF'} side={THREE.DoubleSide}/>
      </mesh>
    )
  }