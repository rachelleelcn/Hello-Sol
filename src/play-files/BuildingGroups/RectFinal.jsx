/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import RectBuilding from '../../models/Buildings/RectBuilding'
import { useBox } from '@react-three/cannon'


const Hitbox = ({position, rotation, size}) => {
    const [ref] = useBox(() => ({
            args: size,
            position: position,
            rotation: rotation,
            type: 'Static'
        }))

return (
    <mesh ref={ref} >
        <boxGeometry args={size}/>
        {/* <meshBasicMaterial color={'black'}/> */}
        <meshBasicMaterial transparent={true} opacity={0.001} />
    </mesh>
    )
}

export const RectFinal = ({ colour, pos, rotate, hitboxPos }) => {
    return (
        <group>
            <group position={pos} rotation={rotate}>
                <RectBuilding colour={colour} /> 
            </group>

            <Hitbox position={hitboxPos} rotation={rotate} size={[10, 5, 6]} />

        </group>
    )
}