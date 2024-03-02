/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import Station from '../../models/props/Station'
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
        <meshBasicMaterial color={'black'}/>
        {/* <meshBasicMaterial transparent={true} opacity={0.001} /> */}
    </mesh>
    )
}

export const StationFinal = ({ colour, pos, rotate, hitboxPos }) => {
    return (
        <group>
            <group position={pos} rotation={rotate}>
                <Station colour={colour} />
            </group>

            <Hitbox position={hitboxPos} size={[1, 2, 1]} />
            
        </group>
    )
}