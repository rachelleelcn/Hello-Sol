/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useBox } from '@react-three/cannon'
import { Ground } from './Ground.jsx'
import { Roads } from './Roads.jsx'
import { Buildings } from './Buildings.jsx'
import { Stations } from './Stations.jsx'

const Cube = ({position, size}) => {
  const [ref] = useBox(() => ({
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
      <Cube position={[0, 24, -137]} size={[150, 50, 0.01]}/>
      <Cube position={[0, 24, 17]} size={[150, 50, 0.01]}/>

      {/* Sides */}
      <Cube position={[-64, 24, 0]} size={[0.01, 50, 150]}/>
      <Cube position={[90, 24, 0]} size={[0.01, 50, 150]}/>
    </group>
    
  )
}
  export const World = ({ entries, setEntries, soundOff }) => {
    return ( 
        <group>
          <Borders/>
          <Ground/>
          <Roads/>
          <Buildings/>
          <Stations entries={entries} setEntries={setEntries} soundOff={soundOff}/>
        </group>   
    )
  }