/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react'
import { useBox } from '@react-three/cannon'

import Station from '../models/props/Station';

const rotateU = [0, 0, 0]
const rotateL = [0, 1.57, 0]
const rotateD = [0, 3.14, 0]
const rotateR = [0, 4.71, 0]

const Hitbox = ({position}) => {
    const [ref] = useBox(() => ({
            mass: 1,
            position: position,
            type: 'Static'
        }))

return (
    <mesh ref={ref}>
        <boxGeometry args={[0.65, 3, 0.65]}/>
        {/* <meshBasicMaterial color={'black'}/> */}
        <meshBasicMaterial transparent={true} opacity={0.001} />
    </mesh>
    )
}

const StationFinal = ({ entries, setEntries, pos, rotate }) => {
    const [active, setActive] = useState(false)
    const [hovered, setHovered] = useState(false)

    const [ref] = useBox(() => ({
        mass: 1,
        position: pos,
        rotation: rotate,
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
            // colour = '#FFF'
        }}

    return (
        <group>
            <mesh ref={ref} 
            onClick={() => { handleMeshClick() }} 
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}>

            {/* <Station colour={active ? '#FFF' : '#3C9C33'}/> */}
            <Station colour={active ? '#FFF' : "#C8F165"}/>
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

function Randomize() {
    const MIN = 1
    const MAX = 6

    return (
        (Math.floor(Math.random() * (MAX - MIN + 1)) + MIN)
    ) 
}

  export const Stations = ({ entries, setEntries }) => {
    // const [entries, setEntries] = useState(0); 
    setEntries(entries)
    
    const [num, setNum] = useState(null)

    useEffect(() => {
        if (num === null) {
            const randomNum = Randomize()
            setNum(randomNum)
        }
    }, [num])

    console.log(num)

    return (
        <group>
            {/* Set 1 */}
            {num === 1 && (
                    <group>
                    {/* Section 1 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-42, 0, -60]} rotate={rotateR}/>
                    <Hitbox position={[-29, -1, -120]} />

                    {/* Section 2 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[49, 0, -48]} rotate={rotateR}/>
                    <Hitbox position={[62, -1, -108]} />

                    {/* Section 3 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-51, 0, 11]} rotate={rotateL}/>
                    <Hitbox position={[-38, -1, -49]} />

                    {/* Section 4 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[64, 0, 1]} rotate={rotateU}/>
                    <Hitbox position={[77, -1, -59]} />

                    {/* Section 5 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-34, 0, 46]} rotate={rotateU}/>
                    <Hitbox position={[-21, -1, -14]} />

                    {/* Section 6 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[54, 0, 60]} rotate={rotateL}/>
                    <Hitbox position={[67, -1, 0]} />
                </group>
            )}
            
            
            {/* Set 2 */}
            {num === 2  && (
                <group>
                    {/* Section 1 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-25, 0, -37]} rotate={rotateL}/>
                    <Hitbox position={[-12, -1, -97]} />

                    {/* Section 2 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[37, 0, -60.5]} rotate={rotateR}/>
                    <Hitbox position={[50, -1, -120.5]} />

                    {/* Section 3 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-58, 0, 0]} rotate={rotateU}/>
                    <Hitbox position={[-45, -1, -60]} />

                    {/* Section 4 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[50, 0, 13]} rotate={rotateL}/>
                    <Hitbox position={[63, -1, -47]} />

                    {/* Section 5 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-20, 0, 52]} rotate={rotateL}/>
                    <Hitbox position={[-7, -1, -8]} />

                    {/* Section 6 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[41, 0, 39]} rotate={rotateD}/>
                    <Hitbox position={[54, -1, -21]}  />
                </group>
            )}
            

            {/* Set 3 */}
            {num === 3 && (
                <group>
                    {/* Section 1 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-59.5, 0, -42]} rotate={rotateU}/>
                    <Hitbox position={[-46.5, -1, -102]}/>

                    {/* Section 2 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[11, 0, -56]} rotate={rotateR}/>
                    <Hitbox position={[24, -1, -116]}/>

                    {/* Section 3 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-31, 0, -5]} rotate={rotateD}/>
                    <Hitbox position={[-18, -1, -65]} />

                    {/* Section 4 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[18, 0, 10]} rotate={rotateL}/>
                    <Hitbox position={[31, -1, -50]} />

                    {/* Section 5 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-47, 0, 50]} rotate={rotateU}/>
                    <Hitbox position={[-34, -1, -10]} />

                    {/* Section 6 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[41, 0, 57]} rotate={rotateD}/>
                    <Hitbox position={[54, -1, -3]} />
                </group>
            )}
            
            
            {/* Set 4 */}
            {num === 4 && (
                <group>
                    {/* Section 1 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-22, 0, -62]} rotate={rotateR}/>
                    <Hitbox position={[-9, -1, -122]} />

                    {/* Section 2 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[27, 0, -42]} rotate={rotateL}/>
                    <Hitbox position={[40, -1, -102]} />

                    {/* Section 3 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-37, 0, 12]} rotate={rotateU}/>
                    <Hitbox position={[-24, -1, -48]} />

                    {/* Section 4 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[45, 0, -9]} rotate={rotateR}/>
                    <Hitbox position={[58, -1, -69]} />

                    {/* Section 5 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-20, 0, 48]} rotate={rotateR}/>
                    <Hitbox position={[-7, -1, -12]} />

                    {/* Section 6 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[19, 0, 45]} rotate={rotateU}/>
                    <Hitbox position={[32, -1, -15]} />
                </group>
            )}
            
                
            {/* Set 5 */}
            {num === 5 && (
                <group>
                    {/* Section 1 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-59, 0, -52]} rotate={rotateU}/>
                    <Hitbox position={[-46, -1, -112]} />

                    {/* Section 2 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[61, 0, -36]} rotate={rotateD}/>
                    <Hitbox position={[74, -1, -96]} />

                    {/* Section 3 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-14, 0, 0]} rotate={rotateD}/>
                    <Hitbox position={[-1, -1, -60]}/>

                    {/* Section 4 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[30, 0, 11]} rotate={rotateL}/>
                    <Hitbox position={[43, -1, -49]} />

                    {/* Section 5 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-32, 0, 54]} rotate={rotateL}/>
                    <Hitbox position={[-19, -1, -6]} />

                    {/* Section 6 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[29, 0, 39]} rotate={rotateR}/>
                    <Hitbox position={[42, -1, -21]}/>
                </group>
            )}
            

            {/* Set 6 */}
            {num === 6 && (
                <group>
                    {/* Section 1 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-14, 0, -50]} rotate={rotateD}/>
                    <Hitbox position={[-1, -1, -110]} />

                    {/* Section 2 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[49, 0, -36]} rotate={rotateL}/>
                    <Hitbox position={[62, -1, -96]} />

                    {/* Section 3 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-51, 0, -11]} rotate={rotateR}/>
                    <Hitbox position={[-38, -1, -71]} />

                    {/* Section 4 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[53, 0, 6]} rotate={rotateR}/>
                    <Hitbox position={[66, -1, -54]} />

                    {/* Section 5 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[-56, 0, 39]} rotate={rotateU}/>
                    <Hitbox position={[-43, -1, -21]} />

                    {/* Section 6 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                pos={[29, 0, 57]} rotate={rotateL}/>
                    <Hitbox position={[42, -1, -3]} />
                </group>
            )}
            

            {/* Set 7 */}
            <group>
                
                
            </group>

            {/* Set 8 */}
            <group>
                
                
            </group>

            {/* Set 9 */}
            <group>
                
                
            </group>

        </group>
    )
  }