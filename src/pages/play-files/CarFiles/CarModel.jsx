/* eslint-disable react/no-unknown-property */
import { useBox, useRaycastVehicle } from '@react-three/cannon'
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Quaternion, Vector3 } from 'three'

import { useWheels } from './useWheels'
import { WheelDebug } from './WheelDebug'
import { UseControls } from './UseControls'

export function CarModel() {
    const model = useLoader(GLTFLoader, './models/EV_WHOLE.glb')

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

    const [vehicle, vehicleAPI] = useRaycastVehicle (() => ({
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

        let wDir = new Vector3(0, 0, -1)
        wDir.applyQuaternion(quaternion)
        wDir.normalize()

        let cameraPosition = position.clone().add(
            wDir.clone().multiplyScalar(-1).add(
                new Vector3(0, 0.4, 0)
            )
        )
        state.camera.position.copy(cameraPosition)
        state.camera.lookAt(position)
    })

    return (
        <group>
            <group ref={vehicle} name='vehicle'>
                <group ref={chassisBody} name="chassisBody">
                    <primitive 
                        object={model.scene} 
                        rotation-y={Math.PI}
                        // rotation-y={Math.PI/2}
                        position={[0, -0.5, 0]}
                        scale={[0.22, 0.22, 0.22]}
                        />
                </group>
        
                <WheelDebug wheelRef={wheels[0]} radius={wheelRadius}/>
                <WheelDebug wheelRef={wheels[1]} radius={wheelRadius}/>
                <WheelDebug wheelRef={wheels[2]} radius={wheelRadius}/>
                <WheelDebug wheelRef={wheels[3]} radius={wheelRadius}/>
            </group>
        </group>
    )
}