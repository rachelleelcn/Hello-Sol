/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import boxyWheelsScene from "../assets/3d/BOXY-WHEELS.glb";

const BoxyWheels = (props) => {

    const boxyWheels = useRef();
    const { nodes, materials } = useGLTF(boxyWheelsScene);

    return (
        <group ref={boxyWheels} {...props} dispose={null}>

            <mesh
                material-metalness={0}
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
                position={[-0.001, -0.004, 0.004]}
            />

        </group>
    );
}

export default BoxyWheels;

