/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import TBuildingScene2 from '../../assets/3d/BuildingT2.glb'

const TBuilding2 = ({props, glassColour, frameColour, wallColour}) => {

    const buildingRef = useRef()
    const {nodes, materials} = useGLTF(TBuildingScene2)

    return (
        <group ref={buildingRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.Building_T_b_1.geometry}
                // material={materials.roof_T}
            >
                <meshStandardMaterial color={wallColour}/>
            </mesh>
            <mesh
                geometry={nodes.Building_T_b_2.geometry}
                material={materials.awning_T}
            />
            <mesh
                geometry={nodes.Building_T_b_3.geometry}
                // material={materials.wall_T}
            >
                <meshStandardMaterial color={wallColour}/>
            </mesh>
            <mesh
                geometry={nodes.Building_T_b_4.geometry}
                // material={materials.glass_T}
            >
                <meshStandardMaterial color={glassColour}/>
            </mesh>
            <mesh
                geometry={nodes.Building_T_b_5.geometry}
                // material={materials.frame_T}
            >
                <meshStandardMaterial color={frameColour}/>
            </mesh>
        </group>
    )
}

export default TBuilding2