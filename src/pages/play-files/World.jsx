/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useBox } from '@react-three/cannon'
import { Roads } from './Roads.jsx'
import { Buildings } from './Buildings.jsx'
import { Stations } from './Stations.jsx'

const Cube = ({position, size}) => {
  const [ref] = useBox(() => ({
      mass: 100,
      args: size,
      position: position,
      type: 'Static',
  }))

  return (
    <mesh ref={ref}>
      <boxGeometry args={size}/>
      <meshBasicMaterial transparent={true} opacity={0.001} />
    </mesh>
  )
}

export const Borders = () => {
  return (
    <group>
      {/* Front & Back */}
      <Cube position={[0, 24, -51.3]} size={[103, 50, 0.01]}/>
      <Cube position={[0, 24, 51.3]} size={[103, 50, 0.01]}/>

      {/* Sides */}
      <Cube position={[-51.3, 24, 0]} size={[0.01, 50, 103]}/>
      <Cube position={[51.3, 24, 0]} size={[0.01, 50, 103]}/>
    </group>
    
  )
}

  export const World = () => {
    return ( 
        <group>
          <Borders/>
          <Roads/>
          <Buildings/>
          <Stations/>
        </group>
        
    )
  
  }