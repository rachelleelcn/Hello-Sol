/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import boxyTopScene from "../assets/3d/BOXY-TOP.glb";

const BoxyTop = (props) => {

    const boxyTop = useRef();
    const { nodes, materials } = useGLTF(boxyTopScene);

    return (
        <group ref={boxyTop} {...props} dispose={null}>

            <group position={[-0.001, -0.004, 0.004]}>
                <mesh
                    geometry={nodes.mesh_0.geometry}
                    material={nodes.mesh_0.material}
                    position={[-0.002, 0, -0.005]}
                    material-metalness={0}
                >
                    <meshStandardMaterial color={props.colour} />
                </mesh>
                <mesh
                    geometry={nodes.mesh_1.geometry}
                    material={nodes.mesh_1.material}
                    position={[-0.002, 0, -0.005]}
                    material-metalness={0}
                />
            </group>

        </group>
    );
}

export default BoxyTop;

