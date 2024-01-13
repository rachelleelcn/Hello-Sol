/* eslint-disable react/no-unknown-property */
import * as THREE from 'react'
import { useBox, useRaycastVehicle } from '@react-three/cannon'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Quaternion, Vector3 } from 'three'

import { useWheels } from './useWheels'
import { WheelDebug } from './WheelDebug'
import { UseControls } from './useControls'

export function CarModel() {
    const model = useLoader(GLTFLoader, './models/Car.gltf')

    const position = [15, 0, 0]
    const width = 0.8
    const height = 0.8
    const front = 0.8
    const wheelRadius = 0.8

    const chassisBodyArgs = [width, height, front * 2]

    const [chassisBody, chassisAPI] = useBox(() => ({
        args: chassisBodyArgs,
        mass: 150,
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
                new Vector3(0, 0.6, 0)
            )
        )
        // Puts camera behind car
        state.camera.position.copy(cameraPosition)

        // Makes camera look at car
        state.camera.lookAt(position)

    })
    

    return (
        <group>
            {/* <OrbitControls
                target={position}
                minDistance={1.5}
                maxDistance={5}
                enableDamping={true}
                enablePan={false}
                maxPolarAngle={Math.PI / 2 - 0.05}
                rotateSpeed={0.5}
                zoomSpeed={2.5}
            /> */}
    
            <group ref={vehicle} name='vehicle'>
                
                <group ref={chassisBody} name="chassisBody">
                    <primitive 
                        object={model.scene} 
                        rotation-y={Math.PI} 
                        position={[0, -0.5, 0]}
                        scale={[0.3, 0.3, 0.3]}
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