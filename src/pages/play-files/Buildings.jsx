/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useBox } from '@react-three/cannon'

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
        <meshStandardMaterial color={'white'}/>
      </mesh>
    )
  }

  export const Buildings = () => {
    return (
        <group>
            {/* Square 1 */}    
            <group>
                <Cube position={[-36, 3, -9.5]}     size={[16, 8, 10]} />
                <Cube position={[-30, 6.5, -26]}    size={[6, 15, 15]} />
                <Cube position={[-45, 4, -12]}      size={[5, 10, 15]} />
                <Cube position={[-45, 11, -25]}     size={[6, 25, 6]} />
                <Cube position={[-45, 9, -35]}      size={[6, 20, 6]} />
                <Cube position={[-38, 3, -44]}      size={[18, 8, 8]} />
                <Cube position={[-32, 11, -44]}     size={[8, 25, 8]} />
            </group>
            
            {/* Square 2 */}
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

            {/* Square 3 */}
            <group>
                <Cube position={[27, 4, -8]}        size={[16, 10, 8]} />
                <Cube position={[43, 14, -8]}       size={[8, 30, 8]} />
                <Cube position={[32, 6, -12]}       size={[8, 15, 16]} />
                <Cube position={[22, 9, -18]}       size={[6, 20, 6]} />
                <Cube position={[43, 18, -18]}      size={[8, 38, 8]} />
                <Cube position={[33, 5, -28]}       size={[25, 12, 8]} />
                <Cube position={[33, 4, -35]}       size={[8, 10, 16]} />
                <Cube position={[43, 11, -42]}      size={[8, 25, 8]} />
                <Cube position={[23, 14, -42]}      size={[8, 30, 8]} />
            </group>
            
            {/* Square 4 */}
            <group>
                <Cube position={[-45, 3, 8]}        size={[6, 8, 8]} />
                <Cube position={[-30, 2, 5]}        size={[3, 6, 3]} />
                <Cube position={[-30, 2, 11]}       size={[3, 6, 3]} />
            </group>
                
            {/* Square 5 */}
            <group>
                <Cube position={[-20, 3, 8]}        size={[4, 8, 8]}/>
                <Cube position={[-16, 3, 10.5]}     size={[4, 8, 3]} />
                <Cube position={[-13, 3, 5.5]}      size={[4, 8, 3]} />
                <Cube position={[-9, 3, 8]}         size={[4, 8, 8]} />
                <Cube position={[-5.5, 3, 10.5]}    size={[4, 8, 3]} />
                <Cube position={[5, 1.5, 8]}        size={[10, 5, 8]} />
            </group>
            {/* Square 6 */}
            <group>
                <Cube position={[25, 3, 8]}         size={[10, 8, 8]} />
                <Cube position={[36, 9, 6]}         size={[6, 20, 6]} />
                <Cube position={[45, 7, 10]}        size={[6, 16, 6]} />
            </group>

            {/* Square 7 */}
            <group>
                <Cube position={[-33, 5, 20]}       size={[12, 12, 6]} />
                <Cube position={[-30, 3, 30]}       size={[6, 8, 15]} />
                <Cube position={[-45, 11, 20]}      size={[6, 25, 6]} />
                <Cube position={[-40, 14, 30]}      size={[8, 30, 8]} />
                <Cube position={[-30, 11, 45]}      size={[6, 25, 6]} />
                <Cube position={[-42, 9, 42]}       size={[10, 20, 10]} />
            </group>

            {/* Square 8 */}
            <group>
                <Cube position={[0, 14, 20]}        size={[10, 30, 6]} />
                <Cube position={[-10, 11, 20]}      size={[6, 25, 6]} />
                <Cube position={[-19, 6.5, 22]}     size={[7, 15, 10]} />
                <Cube position={[-19, 6.5, 39]}     size={[7, 15, 17]} />
                <Cube position={[-10, 6.5, 39]}     size={[15, 15, 7]} />
                <Cube position={[0, 6.5, 36.5]}     size={[6, 15, 22]} />
                <Cube position={[8, 9, 23]}         size={[6, 20, 12]} />
                <Cube position={[8, 14, 35]}        size={[6, 30, 6]} />
                <Cube position={[8, 11.5, 45]}      size={[6, 25, 6]} />
            </group>

            {/* Square 9 */}
            <group>
                <Cube position={[22, 6.5, 24]}      size={[6, 15, 12]} />
                <Cube position={[26, 6.5, 21]}      size={[8, 15, 6]} />
                <Cube position={[44, 6.5, 24]}      size={[6, 15, 12]} />
                <Cube position={[37, 6.5, 21]}      size={[8, 15, 6]} />
                <Cube position={[44, 6.5, 42]}      size={[6, 15, 12]}/>
                <Cube position={[37, 6.5, 45]}      size={[8, 15, 6]} />
                <Cube position={[22, 6.5, 42]}      size={[6, 15, 12]} />
                <Cube position={[26, 6.5, 45]}      size={[8, 15, 6]} />

                <Cube position={[33, 16.5, 33]}     size={[8, 35, 8]} />
            </group>
            
        </group>
    )
  } 