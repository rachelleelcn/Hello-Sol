/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useBox } from '@react-three/cannon'
import { BoxGeometry } from 'three'
import { Edges, Outlines } from '@react-three/drei'

// Red buildings
const Cube = ({position, size}) => {
    const [ref] = useBox(() => ({
        mass: 1,
        args: size,
        position: position,
        type: 'Static'
    }))

    return (
      <mesh ref={ref}>   
        <boxGeometry args={size}/>
        <meshStandardMaterial color={'#FFDAD8'}/>
        {/* <Edges
            scale={1}
            threshold={1}
            color={'#FE574F'}
            
        /> */}

        {/* <Outlines 
            thickness={0.2} 
            color={'#A8A8A8'}
            /> */}
        
      </mesh>
    )
  }

export const Section6 = () => {
    return (
        <group>
            <Cube position={[25, 3, 8]}         size={[10, 8, 8]} />
            <Cube position={[36, 9, 6]}         size={[6, 20, 6]} />
            <Cube position={[45, 7, 10]}        size={[6, 16, 6]} />

            <Cube position={[22, 6.5, 24]}      size={[6, 15, 12]} />
            <Cube position={[28, 6.5, 21]}      size={[6, 15, 6]} />

            <Cube position={[44, 6.5, 24]}      size={[6, 15, 12]} />
            <Cube position={[38, 6.5, 21]}      size={[6, 15, 6]} />

            <Cube position={[22, 6.5, 42]}      size={[6, 15, 12]} />
            <Cube position={[28, 6.5, 45]}      size={[6, 15, 6]} />

            <Cube position={[44, 6.5, 42]}      size={[6, 15, 12]}/>
            <Cube position={[38, 6.5, 45]}      size={[6, 15, 6]} />
            
            <Cube position={[33, 16.5, 33]}     size={[8, 35, 8]} />
        </group>
    )
    
}
