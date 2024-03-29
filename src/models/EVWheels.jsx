/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import evWheelsScene from "../assets/3d/EV-WHEELS.glb";

const EVWheels = (props) => {

  const evWheels = useRef();
  const { nodes, materials } = useGLTF(evWheelsScene);

  return (
    <group ref={evWheels} {...props} dispose={null}>


      <group rotation={[0, Math.PI / 2, 0]}>
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

      
    </group>
  );
}

export default EVWheels;

