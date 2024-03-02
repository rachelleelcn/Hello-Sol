/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react'
import { useBox } from '@react-three/cannon'
import { Decal, useTexture } from '@react-three/drei'
import leaf_icon from "../assets/icons/leaf.png";

import Station from '../models/props/Station';

const Hitbox = ({position, size, entries, setEntries}) => {
    const texture = useTexture(leaf_icon)
    var colour = '#FFF' 

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

    // change to grey, update entries value
    const handleMeshClick = () => {
        if (!active) {
            setActive(true)
            UpdateEntries(entries, setEntries)
            colour = '#C8F165'
        }
    }

    return (
        <group>
            <mesh ref={ref} 
            onClick={() => { handleMeshClick() }} 
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}>
                
            <boxGeometry args={size}/>
            {/* <meshStandardMaterial color={active ? '#FFF' : '#C8F165'}/> */}

            

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
        </group>
    )
  }


export function UpdateEntries(entries, setEntries) {
    let newEntry = entries

    if (entries < 6) {
        newEntry = entries + 1
        setEntries(newEntry)
    }

    console.log(newEntry)
    return newEntry
}

  export const Stations = ({ entries, setEntries }) => {
    // const [entries, setEntries] = useState(0); 
    setEntries(entries)

    return (
        <group>
            {/* Section 1 */}    
            <group>
                
            </group>
            
            {/* Section 2 */}
            <group>
                

               
            </group>

            {/* Section 3 */}
            <group>
                
            </group>
            
            {/* Section 4 */}
            <group>         
               
             
            </group>
                
            {/* Section 5 */}
            <group>
                
            </group>

            {/* Section 6 */}
            <group>
                
               
            </group>

            {/* Section 7 */}
            <group>
                
                
            </group>

            {/* Section 8 */}
            <group>
                
                
            </group>

            {/* Section 9 */}
            <group>
                
                
            </group>

        </group>
    )
  }