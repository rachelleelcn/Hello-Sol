/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import UBuildingScene2 from '../../assets/3d/BuildingU2.glb'

const UBuilding2 = ({props, glassColour, frameColour, wallColour}) => {
    const buildingRef = useRef()
    const {nodes, materials} = useGLTF(UBuildingScene2)

    return (
        <group ref={buildingRef} {...props} dispose={null}>
            <group rotation={[Math.PI, 0, -Math.PI / 2]}>
                <mesh
                    geometry={nodes.Building_U_b_1.geometry}
                    // material={materials.wall_U}
                >
                    <meshStandardMaterial color={wallColour}/>
                </mesh>
                <mesh
                    geometry={nodes.Building_U_b_2.geometry}
                    // material={materials.glass_U}
                >
                    <meshStandardMaterial color={glassColour}/>
                </mesh>
                <mesh
                    geometry={nodes.Building_U_b_3.geometry}
                    // material={materials.frame_U}
                >
                    <meshStandardMaterial color={frameColour}/>
                </mesh>
                <mesh
                    geometry={nodes.Building_U_b_4.geometry}
                    // material={materials.roof_U}
                >
                    <meshStandardMaterial color={wallColour}/>
            </mesh>
            </group>
        </group>
    )
}

export default UBuilding2