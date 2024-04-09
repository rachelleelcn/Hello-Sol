/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react'
import { useBox } from '@react-three/cannon'
import { useSound } from 'use-sound'

import sfx from '../assets/audio/Collect.mp3'
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
        <boxGeometry args={[0.85, 2, 0.85]}/>
        {/* <meshBasicMaterial color={'black'}/> */}
        <meshBasicMaterial transparent={true} opacity={0.001} />
    </mesh>
    )
}

const StationFinal = ({ entries, setEntries, pos, rotate, hitboxPos, soundOff }) => {
            
    const [active, setActive] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [play] = useSound(sfx, {volume: 0.5})

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
        // with sfx
        if (!active && !soundOff) {
            setActive(true)
            UpdateEntries(entries, setEntries)
            play()
        }
        // without sfx
        else if (!active && soundOff) {
            setActive(true)
            UpdateEntries(entries, setEntries)
        }
    }

    return (
        <group>
            <mesh ref={ref} 
            onClick={() => { handleMeshClick() }} 
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}>

                <Station colour={active ? '#FFF' : "#C8F165"}/>
            </mesh>

            <Hitbox position={hitboxPos}/>
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

// Randomize station placement
function Randomize() {
    const MIN = 1
    const MAX = 6

    return (
        (Math.floor(Math.random() * (MAX - MIN + 1)) + MIN)
    ) 
}

export const Stations = ({ entries, setEntries, soundOff }) => {
    setEntries(entries)
    
    const [num, setNum] = useState(null)

    useEffect(() => {
        if (num === null) {
            const randomNum = Randomize()
            setNum(randomNum)
        }
    }, [num])

    // console.log(num)

    return (
        <group>
            {/* Set 1 */}
            {num === 1 && (
                <group>
                    {/* Section 1 - top U-shape */}
                    <StationFinal   entries={entries} setEntries={setEntries}
                                    pos={[-44, 0, -58]} rotate={rotateR}
                              hitboxPos={[-31, -1, -118]} soundOff={soundOff}/>

                    {/* Section 2 - top right L-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[62.5, 0, -47.5]} rotate={rotateR}
                            hitboxPos={[75.5, -1, -107.5]} soundOff={soundOff}/>

                    {/* Section 3 - mid right T-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[-39, 0, 5]} rotate={rotateR}
                            hitboxPos={[-26, -1, -55]} soundOff={soundOff}/>

                    {/* Section 4 */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[64, 0, 1]} rotate={rotateU}
                            hitboxPos={[77, -1, -59]} soundOff={soundOff}/>

                    {/* Section 5 - top mid L-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[-34, 0, 44]} rotate={rotateU}
                            hitboxPos={[-21, -1, -16]} soundOff={soundOff}/>

                    {/* Section 6 - bottom right T-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[53, 0, 62]} rotate={rotateL}
                            hitboxPos={[66, -1, 2]} soundOff={soundOff}/>
                </group>
            )}
            
            
            {/* Set 2 */}
            {num === 2  && (
                <group>
                    {/* Section 1 - bottom U-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[-25, 0, -37]} rotate={rotateL}
                            hitboxPos={[-12, -1, -97]} soundOff={soundOff}/>

                    {/* Section 2 - left top rect */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[28, 0, -58]} rotate={rotateR}
                            hitboxPos={[41, -1, -118]} soundOff={soundOff}/>

                    {/* Section 3 - left U-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[-58, 0, 1]} rotate={rotateU}
                            hitboxPos={[-45, -1, -59]} soundOff={soundOff}/>

                    {/* Section 4 - bottom rect */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[50, 0, 12]} rotate={rotateL}
                            hitboxPos={[63, -1, -48]} soundOff={soundOff}/>

                    {/* Section 5 - right rect */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[-20, 0, 52]} rotate={rotateL}
                            hitboxPos={[-7, -1, -8]} soundOff={soundOff}/>

                    {/* Section 6 - top right L-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[40, 0, 39]} rotate={rotateD}
                            hitboxPos={[53, -1, -21]} soundOff={soundOff}/>
                </group>
            )}
            

            {/* Set 3 */}
            {num === 3 && (
                <group>
                    {/* Section 1 - far left square */}
                    <StationFinal   entries={entries} setEntries={setEntries}
                                    pos={[-62, 0, -43]} rotate={rotateU}
                              hitboxPos={[-49, -1, -103]} soundOff={soundOff}/>

                    {/* Section 2 - bottom left L-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[51.5, 0, -36.5]} rotate={rotateL}
                            hitboxPos={[64.5, -1, -96.5]} soundOff={soundOff}/>

                    {/* Section 3 - top right L-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[-31.5, 0, -4.5]} rotate={rotateR}
                            hitboxPos={[-18.5, -1, -64.5]} soundOff={soundOff}/>

                    {/* Section 4 - bottom U-shape */}
                    <StationFinal   entries={entries} setEntries={setEntries}
                                    pos={[18, 0, 8]} rotate={rotateL}
                              hitboxPos={[31, -1, -52]} soundOff={soundOff}/>

                    {/* Section 5 - left Z-shape */}
                    <StationFinal   entries={entries} setEntries={setEntries}
                                    pos={[-46.5, 0, 51]} rotate={rotateU}
                              hitboxPos={[-33.5, -1, -9]} soundOff={soundOff}/>

                    {/* Section 6 - bottom right L-shape */}
                    <StationFinal   entries={entries} setEntries={setEntries}
                                    pos={[40, 0, 60]} rotate={rotateD}
                              hitboxPos={[53, -1, 0]} soundOff={soundOff}/>
                </group>
            )}
            
            
            {/* Set 4 */}
            {num === 4 && (
                <group>
                    {/* Section 1 - top right Z-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[-23, 0, -61.5]} rotate={rotateR}
                            hitboxPos={[-10, -1, -121.5]} soundOff={soundOff}/>

                    {/* Section 2 - bottom left rect */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[27, 0, -41]} rotate={rotateL}
                            hitboxPos={[40, -1, -101]} soundOff={soundOff}/>

                    {/* Section 3 - bottom T-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[-48, 0, 13]} rotate={rotateD}
                            hitboxPos={[-35, -1, -47]} soundOff={soundOff}/>

                    {/* Section 4 - top side rect */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[48, 0, -9]} rotate={rotateR}
                            hitboxPos={[61, -1, -69]} soundOff={soundOff}/>

                    {/* Section 5 - right mid square */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[-20, 0, 48]} rotate={rotateR}
                            hitboxPos={[-7, -1, -12]} soundOff={soundOff}/>

                    {/* Section 6 - left square */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[15, 0, 45]} rotate={rotateU}
                            hitboxPos={[28, -1, -15]} soundOff={soundOff}/>
                </group>
            )}
            
                
            {/* Set 5 */}
            {num === 5 && (
                <group>
                    {/* Section 1 - top left Z-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[-61.5, 0, -55]} rotate={rotateU}
                            hitboxPos={[-48.5, -1, -115]} soundOff={soundOff}/>

                    {/* Section 2 - bottom right L-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[62.5, 0, -36.5]} rotate={rotateD}
                            hitboxPos={[75.5, -1, -96.5]} soundOff={soundOff}/>

                    {/* Section 3 - right U-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[-16, 0, 1]} rotate={rotateD}
                            hitboxPos={[-3, -1, -59]} soundOff={soundOff}/>

                    {/* Section 4 - L-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[33.5, 0, 14]} rotate={rotateL}
                            hitboxPos={[46.5, -1, -46]} soundOff={soundOff}/>

                    {/* Section 5 - mid bottom L-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[-33, 0, 51.5]} rotate={rotateL}
                            hitboxPos={[-20, -1, -8.5]} soundOff={soundOff}/>

                    {/* Section 6 - top left L-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[30, 0, 39]} rotate={rotateR}
                            hitboxPos={[43, -1, -21]} soundOff={soundOff}/>
                </group>
            )}
            

            {/* Set 6 */}
            {num === 6 && (
                <group>
                    {/* Section 1 - far right rect */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[-14, 0, -48]} rotate={rotateD}
                            hitboxPos={[-1, -1, -108]} soundOff={soundOff}/>

                    {/* Section 2 - top left L-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[51.5, 0, -47.5]} rotate={rotateR}
                            hitboxPos={[64.5, -1, -107.5]} soundOff={soundOff}/>

                    {/* Section 3 - top left L-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[-51.5, 0, -12.5]} rotate={rotateR}
                            hitboxPos={[-38.5, -1, -72.5]} soundOff={soundOff}/>

                    {/* Section 4 - right Z-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[54, 0, 7]} rotate={rotateD}
                            hitboxPos={[67, -1, -53]} soundOff={soundOff}/>

                    {/* Section 5 - top left L-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[-54, 0, 36]} rotate={rotateU}
                            hitboxPos={[-41, -1, -24]} soundOff={soundOff}/>

                    {/* Section 6 - bottom left L-shape */}
                    <StationFinal entries={entries} setEntries={setEntries}
                                  pos={[30, 0, 60]} rotate={rotateL}
                            hitboxPos={[43, -1, 0]} soundOff={soundOff}/>
                </group>
            )}
        </group>
    )
  }