/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, Decal, useTexture } from "@react-three/drei";

// import leaf_icon from "../../assets/icons/leaf.png";
import leaf_icon from '../../assets/icons/Leaf2.png'

import stationScene from "../../assets/3d/Station.glb";

const Station = ({props, colour}) => {
    const texture = useTexture(leaf_icon)

    const ref = useRef();
    const { nodes, materials } = useGLTF(stationScene);

    return (
        <group ref={ref} position={[0, -1, 0]} {...props} dispose={null}>
            <group scale={[0.4, 0.7, 0.4]}>
                <mesh
                    geometry={nodes.Cube009.geometry}
                    // material={materials.chargingStation}
                > 
                    <meshStandardMaterial color={colour}/>
                    
                </mesh>

                <mesh
                    geometry={nodes.Cube009_1.geometry}
                    // material={materials.chargingStationLight}
                >
                    <meshStandardMaterial color={colour} depthWrite={true}/>
                    <Decal
                        position={[0.8, 0.9, 0]}
                        rotation={[0, 1, 0]}
                        scale={[1, 0.7, 1]}
                        renderOrder={10000}
                        >
                        <meshStandardMaterial 
                            map={texture}
                            polygonOffset
                            polygonOffsetFactor={-1}
                            transparent={true}
                            />
                    </Decal>
                </mesh>
            </group>
        </group>
    );
}

export default Station;
