/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useBox } from '@react-three/cannon'

const Cube = ({position, size, colour}) => {
    const [ref] = useBox(() => ({
        mass: 1,
        args: size,
        position: position,
        type: 'Static'
    }))

    return (
      <mesh ref={ref}>
        <boxGeometry args={size}/>
        <meshStandardMaterial color={colour}/>
      </mesh>
    )
  }

  export const Roads = () => {
    return (
        <group>
            {/* Main roads */}
            <group>
                <Cube position={[0, -1, 0]} size={[100, 0.01, 5]} colour={'darkgrey'}/>

                <Cube position={[15, -1, 0]} size={[5, 0.01, 100]} colour={'darkgrey'}/>
            </group>

            {/* Small roads */}
            <group>
                {/* Horizontal */}
                <Cube position={[0, -1, 15]} size={[100, 0.01, 2.5]} colour={'darkgrey'}/>

                {/* Vertical */}
                <Cube position={[-25, -1, 0]} size={[2.5, 0.01, 100]} colour={'darkgrey'}/>

                {/* Borders */}
                <Cube position={[-50, -1, 0]} size={[2.5, 0.01, 100]} colour={'darkgrey'}/>
                <Cube position={[50, -1, 0]} size={[2.5, 0.01, 100]} colour={'darkgrey'}/>
                
                <Cube position={[0, -1, -50]} size={[102.5, 0.01, 2.5]} colour={'darkgrey'}/>
                <Cube position={[0, -1, 50]} size={[102.5, 0.01, 2.5]} colour={'darkgrey'}/>
            </group>
            
        </group>
    )
  } 