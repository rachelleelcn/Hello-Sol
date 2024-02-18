/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import sportBottomScene from "../assets/3d/SPORT-BOTTOM.glb";

const SportBottom = (props) => {

    const sportBottom = useRef();
    const { nodes, materials } = useGLTF(sportBottomScene);

    return (
        <group ref={sportBottom} {...props} dispose={null}>

            <mesh
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
                material-metalness={0}
            />
            <mesh
                geometry={nodes.mesh_1.geometry}
                material={nodes.mesh_1.material}
                material-metalness={0}
            />
            <mesh
                geometry={nodes.mesh_2.geometry}
                material={nodes.mesh_2.material}
                position={[0, 0.026, 0.001]}
                material-metalness={0}
            >
                <meshStandardMaterial color={props.colour} />
            </mesh>
            <mesh
                geometry={nodes.mesh_3.geometry}
                material={nodes.mesh_3.material}
                position={[0, 0.026, 0.001]}
                material-metalness={0}
            />

        </group>
    );
}

export default SportBottom;
