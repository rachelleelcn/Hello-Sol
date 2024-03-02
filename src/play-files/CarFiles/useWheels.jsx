import { useCompoundBody } from '@react-three/cannon'
import { useRef } from 'react'

export const useWheels = (width, height, front, radius) => {
    const wheels = [useRef(null), useRef(null), useRef(null), useRef(null)]

    const wheelInfo = {
        radius,
        directionLocal: [0, -1, 0],
        axleLocal: [1, 0, 0],

        suspensionStiffness: 80,
        suspensionRestLength: 0.3,

        frictionSlip: 1,

        dampingRelaxation: 10,
        dampingCompression: 4.4,

        maxSuspensionForce: 1e4, 
        maxSuspensionTravel: 0.3,

        rollInfluence: 0.01,
        
        customSlidingRotationalSpeed: -30,
        useCustomSlidingRotationalSpeed: true,
        
        steeringSpeed: 0.005,
        steeringMax: Math.PI * 0.17,
        steeringQuad: false,

        acceleratingSpeed: 1,
        acceleratingMaxSpeed: 0.04,
        acceleratingQuad: true,

        brakeStrength: 5
    }

    const wheelInfos = [
        {
        ...wheelInfo,
        chassisConnectionPointLocal: [-width*0.65, height*0.4, front],
        isFrontWheel: true,
        },
        {
            ...wheelInfo,
            chassisConnectionPointLocal: [width*0.65, height*0.4, front],
            isFrontWheel: true,
        },
        {
            ...wheelInfo,
            chassisConnectionPointLocal: [-width*0.65, height*0.4, -front],
            isFrontWheel: false,
        },
        {
            ...wheelInfo,
            chassisConnectionPointLocal: [width*0.65, height*0.4, -front],
            isFrontWheel: false,
        },
    ]

    const propsFunc = () => ({
        collisionFilterGroup: 0,
        mass: 10,
        shapes: [
            {
                args: [wheelInfo.radius, wheelInfo.radius, 0.5, 16],
                rotation: [0, 0, -Math.PI/2],
                type: 'Cylinder'
            },
        ], type: 'Kinematic'
    })

    useCompoundBody(propsFunc, wheels[0])
    useCompoundBody(propsFunc, wheels[1])
    useCompoundBody(propsFunc, wheels[2])
    useCompoundBody(propsFunc, wheels[3])

    return [wheels, wheelInfos]
}