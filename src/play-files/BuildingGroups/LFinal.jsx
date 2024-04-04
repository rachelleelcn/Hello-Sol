/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import LBuilding from '../../models/Buildings/LBuilding'
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

export const LFinal = 
    ({ 
        glassColour, frameColour, wallColour, 
        pos, rotate, 
        hitboxPos1, hitboxPos2 }) => {

    return (
        <group>
            <group position={pos} rotation={rotate} >
                <LBuilding 
                    glassColour={glassColour}
                    frameColour={frameColour}
                    wallColour={wallColour} />
            </group>

            <Hitbox position={hitboxPos1} size={[8, 12, 4]} />
            <Hitbox position={hitboxPos2} size={[4, 12, 8]} />
  
        </group>
    )
}