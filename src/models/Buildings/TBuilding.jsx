/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import TBuildingScene from '../../assets/3d/BuildingT.glb'

const TBuilding = ({props, colour}) => {

    const buildingRef = useRef()
    const {nodes, materials} = useGLTF(TBuildingScene)

    return (
        <group ref={buildingRef} {...props} dispose={null}>
            
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    geometry={nodes.Building_6001.geometry}
                    material={materials["awning6.002"]}
                />
                <mesh
                    geometry={nodes.Building_6001_1.geometry}
                    // material={materials["roof6.002"]}
                >
                    <meshStandardMaterial color={colour}/>
                </mesh>

                <mesh
                    geometry={nodes.Building_6001_2.geometry}
                    material={materials["frame6.002"]}
                />
                <mesh
                    geometry={nodes.Building_6001_3.geometry}
                    material={materials["glass6.002"]}
                />
                <mesh
                    geometry={nodes.Building_6001_4.geometry}
                    // material={materials["wall6.002"]}
                >
                    <meshStandardMaterial color={colour}/>
                </mesh>
            </group>
        </group>
    )
}

export default TBuilding