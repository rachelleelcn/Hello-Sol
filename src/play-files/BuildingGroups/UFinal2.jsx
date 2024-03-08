/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import UBuilding2 from '../../models/Buildings/UBuilding2'
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

export const UFinal2 = 
    ({ 
        glassColour, frameColour, wallColour, 
        pos, rotate, hitboxPos1, hitboxPos2, hitboxPos3 }) => {

    return (
        <group>
            <group position={pos} rotation={rotate} >
                <UBuilding2 
                    glassColour={glassColour}
                    frameColour={frameColour}
                    wallColour={wallColour}  />
            </group>

            <Hitbox position={hitboxPos1} rotation={rotate}  size={[12, 6, 6]} />
            <Hitbox position={hitboxPos2} size={[6, 6, 6]} />
            <Hitbox position={hitboxPos3} rotation={rotate} size={[12, 6, 6]} />
         
        </group>
    )
}