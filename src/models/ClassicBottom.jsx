/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import classicBottomScene from "../assets/3d/CLASSIC-BOTTOM.glb";

const ClassicBottom = (props) => {

    const classicBottom = useRef();
    const { nodes, materials } = useGLTF(classicBottomScene);

    return (
        <group ref={classicBottom} {...props} dispose={null}>

            {/* <mesh
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
            <mesh
                geometry={nodes.mesh_2.geometry}
                material={nodes.mesh_2.material}
                position={[0, -0.141, 0]}
                material-metalness={0}
            />
            <mesh
                geometry={nodes.mesh_3.geometry}
                material={nodes.mesh_3.material}
                position={[0, -0.141, 0]}
                material-metalness={0}
            />
            <mesh
                geometry={nodes.mesh_4.geometry}
                material={nodes.mesh_4.material}
                material-metalness={0}
            /> */}

            <mesh
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
            />
            <mesh
                geometry={nodes.mesh_1.geometry}
                material={nodes.mesh_1.material}
            />
            <mesh
                geometry={nodes.mesh_2.geometry}
                material={nodes.mesh_2.material}
            />
            <mesh
                geometry={nodes.mesh_3.geometry}
                material={nodes.mesh_3.material}
            />
            <mesh
                geometry={nodes.mesh_4.geometry}
                material={nodes.mesh_4.material}
            />


        </group>
    );
}

export default ClassicBottom;
