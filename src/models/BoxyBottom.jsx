/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import boxyBottomScene from "../assets/3d/BOXY-BOTTOM.glb";
import interFont from '../assets/fonts/Inter.ttf';

const BoxyBottom = ({ showLicense, license, ...props }) => {

    const boxyBottom = useRef();
    const { nodes, materials } = useGLTF(boxyBottomScene);

    return (
        <group ref={boxyBottom} {...props} dispose={null}>

            {/* <group position={[-0.001, -0.004, 0.004]}>
                <mesh
                    geometry={nodes.mesh_0.geometry}
                    material={nodes.mesh_0.material}
                    material-metalness={0}
                >
                     {showLicense && (
                <>
                <Text
                    position={[0,0.41,2.012]}
                    color="#000000"
                    fontSize={0.08}
                    font={interFont}
                >
                    {license}
                </Text>
                </>
                )}
                </mesh>
                <mesh
                    geometry={nodes.mesh_1.geometry}
                    material={nodes.mesh_1.material}
                    material-metalness={0}
                >
                    {showLicense && (
                <>
                <Text
                    position={[0,0.62,-1.2248]}
                    color="#000000"
                    fontSize={0.08}
                    rotation={[0, Math.PI,0]}
                    font={interFont}
                >
                  {license}
                </Text>
                </>
                )}
                    </mesh>
                <mesh
                    geometry={nodes.mesh_2.geometry}
                    material={nodes.mesh_2.material}
                    position={[0, 0, -0.006]}
                    material-metalness={0}
                >
                    <meshStandardMaterial color={props.colour} />
                </mesh>
                <mesh
                    geometry={nodes.mesh_3.geometry}
                    material={nodes.mesh_3.material}
                    position={[0, 0, -0.006]}
                    material-metalness={0}
                />
            </group> */}

            <group position={[-0.001, -0.004, 0.004]}>
                <mesh
                    material-metalness={0}
                    geometry={nodes.mesh_0.geometry}
                    material={nodes.mesh_0.material}
                />
                <mesh
                    material-metalness={0}
                    geometry={nodes.mesh_1.geometry}
                    material={nodes.mesh_1.material}
                />
                <mesh
                    material-metalness={0}
                    geometry={nodes.mesh_2.geometry}
                    material={nodes.mesh_2.material}
                    >
                    <meshStandardMaterial color={props.colour} />
                </mesh>
                <mesh
                    material-metalness={0}
                    geometry={nodes.mesh_3.geometry}
                    material={nodes.mesh_3.material}
                />
            </group>


        </group>
    );
}

export default BoxyBottom;
