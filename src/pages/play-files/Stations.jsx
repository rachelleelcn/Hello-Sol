/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react'
import { useBox } from '@react-three/cannon'
import { Decal, useTexture } from '@react-three/drei'

const CubeV = ({position, size}) => {
    const texture = useTexture('./textures/leaf_icon.png')
    const [active, setActive] = useState(false)
    const [hovered, setHovered] = useState(false)

    const [ref] = useBox(() => ({
        mass: 1,
        args: size,
        position: position,
        type: 'Static'
    }))

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    return (
      <mesh ref={ref} 
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={size}/>
        <meshStandardMaterial color={active ? '#A8A8A8' : '#C8F165'}/>
        <Decal
            position={[0, 0, 0]}
            rotation={[0, 1.5, 0]}
            scale={1}
            >
            <meshBasicMaterial 
                map={texture}
                polygonOffset
                polygonOffsetFactor={-1}
                />
        </Decal>
      </mesh>
    )
  }

const CubeH = ({position, size}) => {
    const texture = useTexture('./textures/leaf_icon.png')
    const [active, setActive] = useState(false)
    const [hovered, setHovered] = useState(false)

    const [ref] = useBox(() => ({
        mass: 1,
        args: size,
        position: position,
        type: 'Static'
    }))

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    return (
        <mesh ref={ref} 
        onClick={() => setActive(!active)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        >
        <boxGeometry args={size}/>
        <meshStandardMaterial color={active ? '#A8A8A8' : '#C8F165'}/>
        <Decal
            position={[0, 0, 0]}
            rotation={[0, 0.1, 0]}
            scale={1}
            >
            <meshBasicMaterial 
                map={texture}
                polygonOffset
                polygonOffsetFactor={-1}
                />
        </Decal>
      </mesh>
    )
  }

  export const Stations = () => {
    return (
        <group>
            {/* Section 1 */}    
            <group>
                <CubeV position={[-35, 0, -26]} size={[0.5, 2, 1.5]}/>
               
            </group>
            
            {/* Section 2 */}
            <group>
                <CubeV position={[-9, 0, -28]} size={[0.5, 2, 1.5]}/>
            
            </group>

            {/* Section 3 */}
            <group>
                
            </group>
            
            {/* Section 4 */}
            <group>         
                <CubeV position={[-40, 0, 8]}  size={[0.5, 2, 1.5]}/>
             
            </group>
                
            {/* Section 5 */}
            <group>
                
            </group>

            {/* Section 6 */}
            <group>
                <CubeH position={[36, 0, 10]} size={[1.5, 2, 0.5]}/>
               
            </group>

            {/* Section 7 */}
            <group>
                <CubeV position={[-46, 0, 30]} size={[0.5, 2, 1.5]}/>
                
            </group>

            {/* Section 8 */}
            <group>
                <CubeH position={[-10, 0, 33]} size={[1.5, 2, 0.5]}/>
                
            </group>

            {/* Section 9 */}
            <group>
                <CubeV position={[44, 0, 33]} size={[0.5, 2, 1.5]}/>
                
            </group>
            
        </group>
    )
  }