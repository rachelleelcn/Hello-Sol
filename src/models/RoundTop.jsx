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

            


        </group>
    );
}

export default RoundTop;

