/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import rectBuildingScene from '../../assets/3d/BuildingI.glb'

const RectBuilding = ({props, glassColour, frameColour, wallColour}) => {

    const buildingRef = useRef()
    const {nodes, materials} = useGLTF(rectBuildingScene)

    return (
        <group ref={buildingRef} {...props} dispose={null}>
            <group rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                    geometry={nodes.Building_I_1.geometry}
                    // material={materials.wall_I}
                >
                    <meshStandardMaterial color={wallColour}/>
                </mesh>

                <mesh
                    geometry={nodes.Building_I_2.geometry}
                    // material={materials.glass_I}
                >
                    <meshStandardMaterial color={glassColour}/>
                </mesh>
                <mesh
                    geometry={nodes.Building_I_3.geometry}
                    // material={materials.frame_I}
                >
                    <meshStandardMaterial color={frameColour}/>
                </mesh>
                <mesh
                    geometry={nodes.Building_I_4.geometry}
                    // material={materials.roof_I}
                >
                    <meshStandardMaterial color={wallColour}/>
                </mesh>
            </group>
    </group>
    )
}

export default RectBuilding