/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useBox, useRaycastVehicle } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Quaternion, Vector3 } from 'three'

import { useWheels } from './useWheels'
import { WheelDebug } from './WheelDebug'
import { UseControls } from './UseControls'

import { RenderCar } from '../../pages/CarCookie'

export const CarModel = ({ enableControls, soundOff, selectedCar }) => {
    const position = [15, 0, 0]
    const width = 0.8
    const height = 0.8
    const front = 0.8
    const wheelRadius = 0.8

    const chassisBodyArgs = [width, height, front * 2]

    const [chassisBody, chassisAPI] = useBox(() => ({
        args: chassisBodyArgs,
        mass: 65,
        position,
        allowSleep: false,
        linearDamping: 0.1,
        angularDamping: 0.1,
    }), useRef(null))

    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius)

    const [vehicle, vehicleAPI] = useRaycastVehicle(() => ({
        chassisBody,
        wheelInfos,
        wheels,
        fixedTimeStep: 1 / 120,
    }), useRef(null))

    UseControls(vehicleAPI, chassisAPI, enableControls, soundOff)

    // Third person camera stuff
    useFrame((state) => {
        const carPosition = new Vector3();
        chassisBody.current.getWorldPosition(carPosition);

        const quaternion = new Quaternion();
        chassisBody.current.getWorldQuaternion(quaternion);

        const offset = new Vector3(0, 0.9, 2.8);
        offset.applyQuaternion(quaternion);

        const cameraPosition = carPosition.clone().add(offset);

        // camera follow car
        const lerpFactor = 1
        state.camera.position.lerp(cameraPosition, lerpFactor);

        state.camera.lookAt(carPosition);
    })

    console.log('controls:', enableControls)
   
    return (
        <group>
            <group ref={vehicle} name='vehicle' position={[-13, 0, 60]}>
                <group ref={chassisBody} name="chassisBody">
                    <RenderCar selectedCar={selectedCar}/>
                </group>

                <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
            </group>
        </group>
    )
}