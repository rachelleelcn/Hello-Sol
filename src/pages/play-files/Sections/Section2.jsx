/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useBox } from '@react-three/cannon'

// Purple buildings
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
        <meshStandardMaterial color={'#F3EBFF'}/>
      </mesh>
    )
  }

export const Section2 = () => {
    return (
        <group>
            <Cube position={[5, 11, -8]}        size={[6, 25, 6]} />
            <Cube position={[-3, 8, -8]}        size={[6, 18, 6]}/>
            <Cube position={[-15, 4, -8]}       size={[14, 10, 8]} />
            <Cube position={[6, 5, -22]}        size={[10, 12, 16]} />
            <Cube position={[-8, 12, -18]}      size={[8, 26, 8]} />
            <Cube position={[-18, 10, -18]}     size={[8, 22, 8]} />
            <Cube position={[-14, 14, -28]}     size={[8, 30, 8]} />
            <Cube position={[-15, 6, -40]}      size={[15, 14, 10]} />
            <Cube position={[0, 16, -43]}       size={[8, 35, 8]} />
            <Cube position={[5, 10, -35]}       size={[6, 22, 6]} />
        </group>
    )
    
}