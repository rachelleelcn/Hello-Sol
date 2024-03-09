/* eslint-disable react/no-unknown-property */
import { useBox, useRaycastVehicle } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Quaternion, Vector3 } from 'three'

import { useWheels } from './useWheels'
import { WheelDebug } from './WheelDebug'
import { UseControls } from './UseControls'


import EVCar from '../../models/EVWhole'
import EVTop from '../../models/EVTop'
import EVBottom from '../../models/EVBottom'
import EVWheels from '../../models/EVWheels'

export function CarModel() {
    const position = [15, 0, 0]
    const width = 0.8
    const height = 0.8
    const front = 0.8
    const wheelRadius = 0.8

    const chassisBodyArgs = [width, height, front * 2]

    const [chassisBody, chassisAPI] = useBox(() => ({
        args: chassisBodyArgs,
        mass: 80,
        position,
        allowSleep: false,
        linearDamping: 0.1,
        angularDamping: 0.1,
    }), useRef(null))

    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius)

    const [vehicle, vehicleAPI] = useRaycastVehicle(() => ({
        chassisBody,
        wheelInfos,
        wheels
    }), useRef(null))

    UseControls(vehicleAPI, chassisAPI)

    // Third person camera stuff
    // useFrame((state) => {
    //     const carPosition = new Vector3();
    //     chassisBody.current.getWorldPosition(carPosition);

    //     const quaternion = new Quaternion();
    //     chassisBody.current.getWorldQuaternion(quaternion);

    //     const offset = new Vector3(0, 0.6, 2.2);
    //     offset.applyQuaternion(quaternion);

    //     const cameraPosition = carPosition.clone().add(offset);

    //     // Smoothly follow the car
    //     const lerpFactor = 1 
    //     state.camera.position.lerp(cameraPosition, lerpFactor);
    //     state.camera.lookAt(carPosition);
    // })
   

    const colours = ["#5AC7D2", "#C8F165", "#FFDF59", "#FE574F", "#F178B8", "#986CDE"];

    return (
        <group>
            <group ref={vehicle} name='vehicle' position={[-13, 0, 60]}>
                <group ref={chassisBody} name="chassisBody">
                    {/* <EVCar
                        rotation-y={Math.PI}
                        position={[0, -0.6, 0]}
                        scale={0.28}
                    />   */}
    
                    <EVTop colour={colours[0]} rotation-y={Math.PI} position={[0, -0.62, 0]} scale={0.37} />
                    <EVBottom colour={colours[0]} rotation-y={Math.PI} position={[0, -0.62, 0]} scale={0.37} />
                    <EVWheels colour={colours[0]} rotation-y={Math.PI} position={[0, -0.62, 0]} scale={0.37} />
                    
                </group>

                <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
            </group>
        </group>
    )
}