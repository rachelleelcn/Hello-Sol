/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import roundTopScene from "../assets/3d/ROUND-TOP.glb";

const RoundTop = (props) => {

    const roundTop = useRef();
    const { nodes, materials } = useGLTF(roundTopScene);

    return (
        <group ref={roundTop} {...props} dispose={null}>

            <mesh
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
                material-metalness={0}
                >
                <meshStandardMaterial color={props.colour} />
            </mesh>
            <mesh
                geometry={nodes.mesh_1.geometry}
                material={nodes.mesh_1.material}
                material-metalness={0}
            />


        </group>
    );
}

export default RoundTop;
