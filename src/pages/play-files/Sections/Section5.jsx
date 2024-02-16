/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useBox } from '@react-three/cannon'

// Yellow buildings
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
        <meshStandardMaterial color={'#FFF8D9'}/>
        
      </mesh>
    )
  }

export const Section5 = () => {
    return (
        <group>
            <Cube position={[-20, 3, 8]}        size={[4, 8, 8]}/>
            <Cube position={[-16, 3, 10.5]}     size={[4, 8, 3]} />
            <Cube position={[-13, 3, 5.5]}      size={[4, 8, 3]} />
            <Cube position={[-9, 3, 8]}         size={[4, 8, 8]} />
            <Cube position={[-5.5, 3, 10.5]}    size={[3, 8, 3]} />
            <Cube position={[5, 1.5, 8]}        size={[10, 5, 8]} />

            <Cube position={[0, 14, 20]}        size={[10, 30, 6]} />
            <Cube position={[-10, 11, 20]}      size={[6, 25, 6]} />
            <Cube position={[-19, 6.5, 22]}     size={[7, 15, 10]} />
            <Cube position={[-19, 6.5, 39]}     size={[7, 15, 17]} />
            <Cube position={[-9, 6.5, 39]}      size={[13, 15, 7]} />
            <Cube position={[0, 6.5, 36.5]}     size={[5, 15, 22]} />
            <Cube position={[8, 9, 23]}         size={[6, 20, 12]} />
            <Cube position={[8, 14, 35]}        size={[6, 30, 6]} />
            <Cube position={[8, 11.5, 45]}      size={[6, 25, 6]} />
        </group>
    )
    
}
