/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import classicTopScene from "../assets/3d/CLASSIC-TOP.glb";

const ClassicTop = (props) => {

    const classicTop = useRef();
    const { nodes, materials } = useGLTF(classicTopScene);

    return (
        <group ref={classicTop} {...props} dispose={null}>

            {/* <mesh
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
                material-metalness={0}
            />
            <mesh
                geometry={nodes.mesh_1.geometry}
                material={nodes.mesh_1.material}
                material-metalness={0}
            >
                <meshStandardMaterial color={props.colour} />
            </mesh> */}

            <mesh
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
                material-metalness={0}
            />
            <mesh
                geometry={nodes.mesh_1.geometry}
                material={nodes.mesh_1.material}
                material-metalness={0}
            >
                <meshStandardMaterial color={props.colour} />
            </mesh>


        </group>
    );
}

export default ClassicTop;

