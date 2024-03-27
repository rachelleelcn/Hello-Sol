/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useBox, useRaycastVehicle } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Quaternion, Vector3 } from 'three'
import { useCookies } from 'react-cookie';

import { useWheels } from './useWheels'
import { WheelDebug } from './WheelDebug'
import { UseControls } from './UseControls'

import EVTop from '../../models/EVTop'
import EVBottom from '../../models/EVBottom'
import EVWheels from '../../models/EVWheels'
import ClassicTop from '../../models/ClassicTop'    
import ClassicBottom from '../../models/ClassicBottom';
import ClassicWheels from '../../models/ClassicWheels';
import BoxyTop from '../../models/BoxyTop';
import BoxyBottom from '../../models/BoxyBottom';
import BoxyWheels from '../../models/BoxyWheels';
import SportTop from '../../models/SportTop';
import SportBottom from '../../models/SportBottom';
import SportWheels from '../../models/SportWheels';
import RoundTop from '../../models/RoundTop';
import RoundBottom from '../../models/RoundBottom';
import RoundWheels from '../../models/RoundWheels';
import VintageTop from '../../models/VintageTop';
import VintageBottom from '../../models/VintageBottom';
import VintageWheels from '../../models/VintageWheels';

export const CarModel = ({enableControls, soundOff}) => {
    const [cookies] = useCookies(['CAR_COOKIE']);
    const configuredCar = cookies['CAR_COOKIE'];

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

        const offset = new Vector3(0, 0.8, 3);
        offset.applyQuaternion(quaternion);

        const cameraPosition = carPosition.clone().add(offset);

        // camera follow car
        const lerpFactor = 1
        state.camera.position.lerp(cameraPosition, lerpFactor);

        state.camera.lookAt(carPosition);
    })
   
    // const colours = ["#5AC7D2", "#C8F165", "#FFDF59", "#FE574F", "#F178B8", "#986CDE"];

    const CarPart = {
        EV:      { top: EVTop,      bottom: EVBottom,      wheels: EVWheels },
        Classic: { top: ClassicTop, bottom: ClassicBottom, wheels: ClassicWheels },
        Boxy:    { top: BoxyTop,    bottom: BoxyBottom,    wheels: BoxyWheels },
        Sport:   { top: SportTop,   bottom: SportBottom,   wheels: SportWheels },
        Round:   { top: RoundTop,   bottom: RoundBottom,   wheels: RoundWheels },
        Vintage: { top: VintageTop, bottom: VintageBottom, wheels: VintageWheels }
      }

    const renderCarParts = (configuredCar) => {
        if (!configuredCar) return null

        const Car = CarPart[configuredCar.name]
        if (!Car) return null

        return (
            <>
                <Car.top colour={configuredCar.topColour} />
                <Car.bottom colour={configuredCar.bodyColour} />
                <Car.wheels colour={configuredCar.bodyColour} />
            </>
        )
    }

    return (
        <group>
            <group ref={vehicle} name='vehicle' position={[-13, 0, 60]}>
                <group ref={chassisBody} name="chassisBody">

                    {renderCarParts(configuredCar)}
    
                    {/* <EVTop colour={colours[0]} rotation-y={Math.PI} position={[0, -0.63, 0]} scale={0.56} />
                    <EVBottom colour={colours[0]} rotation-y={Math.PI} position={[0, -0.63, 0]} scale={0.56} />
                    <EVWheels colour={colours[0]} rotation-y={Math.PI} position={[0, -0.63, 0]} scale={0.56} /> */}
                    
                </group>

                <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
                <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
            </group>
        </group>
    )
}