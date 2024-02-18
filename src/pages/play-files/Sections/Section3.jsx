/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useBox } from '@react-three/cannon'

// Blue buildings
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
        <meshStandardMaterial color={'#DFFCFF'}/>
      </mesh>
    )
  }

export const Section3 = () => {
    return (
        <group>
            <Cube position={[23, 4, -8]}        size={[10, 10, 8]} />
            <Cube position={[43, 14, -8]}       size={[8, 30, 8]} />
            <Cube position={[32, 6, -12]}       size={[8, 15, 16]} />
            <Cube position={[22, 9, -18]}       size={[6, 20, 6]} />
            <Cube position={[43, 18, -18]}      size={[8, 38, 8]} />
            <Cube position={[33, 5, -28]}       size={[25, 12, 8]} />
            <Cube position={[33, 4, -35]}       size={[8, 10, 6]} />
            <Cube position={[43, 11, -42]}      size={[8, 25, 8]} />
            <Cube position={[23, 14, -42]}      size={[8, 30, 8]} />
        </group>
    )
    
}