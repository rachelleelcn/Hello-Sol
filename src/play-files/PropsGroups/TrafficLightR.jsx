/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import TrafficLightR from '../../models/props/TrafficLightR'
import { useBox } from '@react-three/cannon'

 
const Hitbox = ({position, size}) => {
    const [ref] = useBox(() => ({
            mass: 1,
            args: size,
            position: position,
            type: 'Static'
        }))

return (
    <mesh ref={ref}>
        <boxGeometry args={size}/>
        {/* <meshBasicMaterial color={'black'}/> */}
        <meshBasicMaterial transparent={true} opacity={0.001} />
    </mesh>
    )
}

export const TrafficRFinal = ({ colour, pos, rotate, hitboxPos }) => {
    return (
        <group>
            <group position={pos} rotation={rotate}>
                <TrafficLightR colour={colour} />
            </group>

            <Hitbox position={hitboxPos} size={[1, 3, 1]} />

        </group>
    )
}