/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import squareBuildingScene2 from '../../assets/3d/BuildingA2.glb'

const SquareBuilding2 = ({props, glassColour, frameColour, wallColour}) => {
    
    const buildingRef = useRef()
    const {nodes, materials} = useGLTF(squareBuildingScene2)
    
    return (
        <group ref={buildingRef} {...props} dispose={null}>

            <mesh 
                geometry={nodes.Plane6877.geometry} 
                // material={materials.roof_A} 
            >
                <meshStandardMaterial color={wallColour}/>
            </mesh>
            <mesh 
                geometry={nodes.Plane6877_1.geometry} 
                // material={materials.wall_A} 
            >
                <meshStandardMaterial color={wallColour}/>
            </mesh>
            <mesh
                geometry={nodes.Plane6877_2.geometry}
                // material={materials.frame_A}
            >
                <meshStandardMaterial color={frameColour}/>
            </mesh>
            <mesh
                geometry={nodes.Plane6877_3.geometry}
                // material={materials.glass_A}
            >
                <meshStandardMaterial color={glassColour}/>
            </mesh>
            <mesh
                geometry={nodes.Plane6877_4.geometry}
                material={materials.awning_A}
            />
        </group>
    )
}

export default SquareBuilding2
