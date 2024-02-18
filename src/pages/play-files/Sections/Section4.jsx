/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useBox } from '@react-three/cannon'

// Green buildings
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
        <meshStandardMaterial color={'#F4FFDB'}/>        
      </mesh>
    )
  }

export const Section4 = () => {
    return (
        <group>
            <Cube position={[-45, 3, 8]}        size={[6, 8, 8]} />
            <Cube position={[-30, 2, 5]}        size={[3, 6, 3]} />
            <Cube position={[-30, 2, 11]}       size={[3, 6, 3]} />

            <Cube position={[-33, 5, 20]}       size={[12, 12, 6]} />
            <Cube position={[-30, 3, 30]}       size={[6, 8, 14]} />
            <Cube position={[-45, 11, 20]}      size={[6, 25, 6]} />
            <Cube position={[-40, 14, 30]}      size={[8, 30, 8]} />
            <Cube position={[-30, 11, 45]}      size={[6, 25, 6]} />
            <Cube position={[-42, 9, 42]}       size={[10, 20, 10]} />
        </group>
    )
    
}
