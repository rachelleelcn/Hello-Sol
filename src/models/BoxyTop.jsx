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

            <mesh
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
            />
            <mesh
                geometry={nodes.mesh_1.geometry}
                material={nodes.mesh_1.material}
            />

        </group>
    );
}

export default BoxyTop;

