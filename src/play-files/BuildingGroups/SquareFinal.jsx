/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import SquareBuilding from '../../models/Buildings/SquareBuilding'
import { useBox } from '@react-three/cannon'

// Small square building
const Hitbox = ({position, size}) => {
    const [ref] = useBox(() => ({
            args: size,
            position: position,
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

export const SquareFinal = ({ colour, pos, rotate, hitboxPos }) => {
    return (
        <group>
            <group position={pos} rotation={rotate}>
                <SquareBuilding colour={colour} />
            </group>

            <Hitbox position={hitboxPos} size={[6, 6, 6]} />
        </group>
    )
}