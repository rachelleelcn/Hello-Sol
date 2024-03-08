/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import classicWheelsScene from "../assets/3d/CLASSIC-WHEELS.glb";

const ClassicWheels = (props) => {

    const classicWheels = useRef();
    const { nodes, materials } = useGLTF(classicWheelsScene);

    return (
        <group ref={classicWheels} {...props} dispose={null}>

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
                material-metalness={0}
            />
            <mesh
                geometry={nodes.mesh_3.geometry}
                material={nodes.mesh_3.material}
                material-metalness={0}
            />

        </group>
    );
}

export default ClassicWheels;
