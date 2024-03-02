/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import Tree from '../../models/props/Tree'
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

export const TreeFinal = ({ colour, pos, hitboxPos }) => {
    return (
        <group>
            <group position={pos}>
                <Tree colour={colour} />
            </group>

            <Hitbox position={hitboxPos} size={[2, 2, 2]} />
        </group>
    )
}