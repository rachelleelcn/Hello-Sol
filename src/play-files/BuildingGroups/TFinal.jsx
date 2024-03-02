/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import TBuilding from '../../models/Buildings/TBuilding'
import { useBox } from '@react-three/cannon'


const Hitbox = ({position, rotation, size}) => {
    const [ref] = useBox(() => ({
            mass: 1,
            args: size,
            position: position,
            rotation: rotation,
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

export const TFinal = ({ colour, pos, rotate, hitboxPos1, hitboxPos2 }) => {
    return (
        <group>
            <group position={pos} rotation={rotate} >
                <TBuilding colour={colour} />
            </group>

            <Hitbox position={hitboxPos1} rotation={rotate} size={[4, 10, 12]} />
            <Hitbox position={hitboxPos2}  size={[4, 10, 4]} />
          
        </group>
    )
}