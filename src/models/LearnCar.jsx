/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF, useScroll, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from 'gsap'
import interFont from '../assets/fonts/Inter.ttf';

import learnCarScene from "../assets/3d/EV.glb";


const LearnCar = (props) => {

    const learnCar = useRef();
    const scroll = useScroll();
    const tl = useRef();
    const { nodes, materials } = useGLTF(learnCarScene);

    useFrame((state, delta) => {
        props.onScroll(scroll.offset);
        tl.current.seek(scroll.offset * tl.current.duration());
        // console.log(scroll.offset * tl.current.duration())
    })

    useLayoutEffect(() => {
        tl.current = gsap.timeline({ defaults: { ease: 'power1.inOut' } })

        tl.current
            .to(learnCar.current.position, { x: 0, duration: 1 }, 0)
            .to(learnCar.current.position, { y: -0.4, duration: 1 }, 0)
            .to(learnCar.current.position, { z: 4, duration: 1 }, 0)
            .to(learnCar.current.rotation, { x: 0.1, duration: 1 }, 0)
            .to(learnCar.current.rotation, { y: -6.3, duration: 1 }, 0)
            .to(learnCar.current.rotation, { z: 0, duration: 1 }, 0)

            .to(learnCar.current.position, { x: 0 }, 1)
            .to(learnCar.current.position, { y: -0.4 }, 1)
            .to(learnCar.current.position, { z: 4 }, 1)
            .to(learnCar.current.rotation, { x: 0.1 }, 1)
            .to(learnCar.current.rotation, { y: -6.3 }, 1)
            .to(learnCar.current.rotation, { z: 0 }, 1)

            .to(learnCar.current.position, { x: 0, duration: 0.3 }, 1.5)
            .to(learnCar.current.position, { y: -0.3, duration: 0.3 }, 1.5)
            .to(learnCar.current.position, { z: -3.5, duration: 0.3 }, 1.5)
            .to(learnCar.current.rotation, { x: 0.05, duration: 0.3 }, 1.5)
            .to(learnCar.current.rotation, { y: -6.3, duration: 0.3 }, 1.5)
            .to(learnCar.current.rotation, { z: 0, duration: 0.3 }, 1.5)

            .to(learnCar.current.position, { x: 0.8 }, 2)
            .to(learnCar.current.position, { y: -1.3 }, 2)
            .to(learnCar.current.position, { z: 5.8 }, 2)
            .to(learnCar.current.rotation, { x: -0.2 }, 2)
            .to(learnCar.current.rotation, { y: -6 }, 2)
            .to(learnCar.current.rotation, { z: 0 }, 2)

            .to(learnCar.current.position, { x: 0.8 }, 2.5)
            .to(learnCar.current.position, { y: -1.3 }, 2.5)
            .to(learnCar.current.position, { z: 5.8 }, 2.5)
            .to(learnCar.current.rotation, { x: -0.2 }, 2.5)
            .to(learnCar.current.rotation, { y: -6 }, 2.5)
            .to(learnCar.current.rotation, { z: 0 }, 2.5)

            .to(learnCar.current.position, { x: -3 }, 3)
            .to(learnCar.current.position, { y: 0.3 }, 3)
            .to(learnCar.current.position, { z: 2 }, 3)
            .to(learnCar.current.rotation, { x: 1.2 }, 3)
            .to(learnCar.current.rotation, { y: -3.9 }, 3)
            .to(learnCar.current.rotation, { z: 0.53 }, 3)

            .to(learnCar.current.position, { x: -3 }, 3.5)
            .to(learnCar.current.position, { y: 0.3 }, 3.5)
            .to(learnCar.current.position, { z: 2 }, 3.5)
            .to(learnCar.current.rotation, { x: 1.2 }, 3.5)
            .to(learnCar.current.rotation, { y: -3.9 }, 3.5)
            .to(learnCar.current.rotation, { z: 0.53 }, 3.5)

            .to(learnCar.current.position, { x: -0.5 }, 4)
            .to(learnCar.current.position, { y: -1.6 }, 4)
            .to(learnCar.current.position, { z: 4 }, 4)
            .to(learnCar.current.rotation, { x: -0.05 }, 4)
            .to(learnCar.current.rotation, { y: -4.65 }, 4)
            .to(learnCar.current.rotation, { z: 0 }, 4)

            .to(learnCar.current.position, { x: -0.5 }, 4.5)
            .to(learnCar.current.position, { y: -1.6 }, 4.5)
            .to(learnCar.current.position, { z: 4 }, 4.5)
            .to(learnCar.current.rotation, { x: -0.05 }, 4.5)
            .to(learnCar.current.rotation, { y: -4.65 }, 4.5)
            .to(learnCar.current.rotation, { z: 0 }, 4.5)

            .to(learnCar.current.position, { x: 0.55 }, 5)
            .to(learnCar.current.position, { y: -0.74 }, 5)
            .to(learnCar.current.position, { z: 6.3 }, 5)
            .to(learnCar.current.rotation, { x: 0.02 }, 5)
            .to(learnCar.current.rotation, { y: -0.62 }, 5)
            .to(learnCar.current.rotation, { z: 0 }, 5)
            // .to(learnCar.current.position, { x: 0.45 }, 5)
            // .to(learnCar.current.position, { y: -0.72 }, 5)
            // .to(learnCar.current.position, { z: 6.4 }, 5)
            // .to(learnCar.current.rotation, { x: 0.02 }, 5)
            // .to(learnCar.current.rotation, { y: -0.6 }, 5)
            // .to(learnCar.current.rotation, { z: 0 }, 5)

    }, [])

    // 'blue', 'green', 'yellow', 'red', 'pink', 'purple'
    const colours = ["#5AC7D2", "#C8F165", "#FFDF59", "#FE574F", "#F178B8", "#986CDE"];


    return (
        <group ref={learnCar} {...props} dispose={null}>


            {/* <mesh
                material-metalness={0}
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
            /> */}
            {/* <mesh
                material-metalness={0}
                geometry={nodes.mesh_1.geometry}
                material={nodes.mesh_1.material}
            /> */}
            <mesh
                material-metalness={0}
                geometry={nodes.mesh_2.geometry}
                material={nodes.mesh_2.material}
            />
            <mesh
                material-metalness={0}
                geometry={nodes.mesh_3.geometry}
                material={nodes.mesh_3.material}
            />
            <mesh
                material-metalness={0}
                geometry={nodes.mesh_4.geometry}
                material={nodes.mesh_4.material}
                rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
                material-metalness={0}
                geometry={nodes.mesh_5.geometry}
                material={nodes.mesh_5.material}
            />
            <mesh
                material-metalness={0}
                geometry={nodes.mesh_6.geometry}
                material={nodes.mesh_6.material}
            />
            <mesh
                material-metalness={0}
                geometry={nodes.mesh_7.geometry}
                material={nodes.mesh_7.material}
            />
            <mesh
                material-metalness={0}
                geometry={nodes.mesh_8.geometry}
                material={nodes.mesh_8.material}
            />
            <mesh
                material-metalness={0}
                geometry={nodes.mesh_9.geometry}
                material={nodes.mesh_9.material}
            />
            <mesh
                material-metalness={0}
                geometry={nodes.mesh_10.geometry}
                material={nodes.mesh_10.material}
                position={[0, 0, -1.497]}
            />
            <mesh
                material-metalness={0}
                geometry={nodes.mesh_11.geometry}
                material={nodes.mesh_11.material}
                position={[0, 0, -1.497]}
            />

        </group>

    );
}

export default LearnCar;
