/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { useRef } from 'react'
import { usePlane } from '@react-three/cannon'


const Road = ({pos, size}) => {
    const [ref] = usePlane(() => ({
      position: pos,
      args: size,
      rotation: [-Math.PI / 2, 0, 0],
      material: 'ground',
      friction: 10,
      type: 'Static'
    }), useRef())

    return (
      <mesh ref={ref}>
        <planeGeometry args={size}/>
        <meshBasicMaterial color={'#BFBFC9'} side={THREE.DoubleSide}/>
      </mesh>
    )
  }

  const Line = ({pos, size}) => {
    const [ref] = usePlane(() => ({
      position: pos,
      args: size,
      rotation: [-Math.PI / 2, 0, 0],
      material: 'ground',
      friction: 10,
      type: 'Static'
    }), useRef())

    return (
      <mesh ref={ref}>
        <planeGeometry args={size}/>
        <meshBasicMaterial color={'white'} side={THREE.DoubleSide}/>
      </mesh>
    )
  }

  export const Roads = () => {
    return (
        <group>
            <Road pos={[2, -0.99, 0]} size={[10, 140, 1]}/>
            <Line pos={[2, -0.98, 50]} size={[0.3, 1.5, 1]}/>
        </group>
        
    )
  }