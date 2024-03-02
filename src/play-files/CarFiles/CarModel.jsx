/* eslint-disable react/no-unknown-property */
import { useBox, useRaycastVehicle } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
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
    }), useRef(null))

    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius)

    const [vehicle, vehicleAPI] = useRaycastVehicle(() => ({
        chassisBody,
        wheelInfos,
        wheels
    }), useRef(null))

    UseControls(vehicleAPI, chassisAPI)

    // Third person camera stuff
    useFrame((state) => {
        let position = new Vector3(0, 0, 0)
        position.setFromMatrixPosition(chassisBody.current.matrixWorld)

        let quaternion = new Quaternion(0, 0, 0, 0)
        quaternion.setFromRotationMatrix(chassisBody.current.matrixWorld)

        // let offset = new Vector3(5, 2, 0)
        // offset.setFromMatrixPosition(chassisBody.current.matrixWorld)

        let wDir = new Vector3(0, 0, -1)
        wDir.applyQuaternion(quaternion)
        wDir.normalize()

        let cameraPosition = position.clone().add(
            wDir.clone().multiplyScalar(-1).add(
                new Vector3(0, 0.35, 0)
            )
        )
        // state.camera.position.lerp(offset, 0.2)
        state.camera.position.copy(cameraPosition)
        state.camera.lookAt(position)


    })

    const colours = ["#5AC7D2", "#C8F165", "#FFDF59", "#FE574F", "#F178B8", "#986CDE"];

    return (
        <group position={[-13, 0, 0]}>
            <group ref={vehicle} name='vehicle'>
                <group ref={chassisBody} name="chassisBody">
                    {/* <EVCar
                        rotation-y={Math.PI}
                        position={[0, -0.6, 0]}
                        scale={0.28}
                    />   */}

                    <EVTop colour={colours[0]} rotation-y={Math.PI} position={[0, -0.6, 0]} scale={0.28} />
                    <EVBottom colour={colours[0]} rotation-y={Math.PI} position={[0, -0.6, 0]} scale={0.28} />
                    <EVWheels colour={colours[0]} rotation-y={Math.PI} position={[0, -0.6, 0]} scale={0.28} />
                    
                </group>

                <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
            </group>
        </group>
    )
}