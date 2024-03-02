/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import roundBottomScene from "../assets/3d/ROUND-BOTTOM.glb";
import interFont from '../assets/fonts/Inter.ttf';

const RoundBottom = ({ showLicense, license, ...props }) => {

    const roundBottom = useRef();
    const { nodes, materials } = useGLTF(roundBottomScene);

    return (
        <group ref={roundBottom} {...props} dispose={null}>

            {/* Front License
               {showLicense && (
                <>
                <Text
                    position={[0,0.402,2.39]}
                    color="#000000"
                    fontSize={0.08}
                    font={interFont}
                >
                    {license}
                </Text>
                </>
                )}
             */}

            {/* Back License
            
            {showLicense && (
                <>
                <Text
                    position={[0,0.428,-1.19]}
                    color="#000000"
                    fontSize={0.08}
                    rotation={[0, Math.PI,0]}
                    font={interFont}
                >
                  {license}
                </Text>
                </>
                )}
             */}

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

export default RoundBottom;
