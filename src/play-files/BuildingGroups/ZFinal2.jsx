/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import ZBuilding2 from '../../models/Buildings/ZBuilding2'
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
        <meshBasicMaterial color={'black'}/>
        {/* <meshBasicMaterial transparent={true} opacity={0.001} /> */}
    </mesh>
    )
}

export const ZFinal2 = 
    ({ 
        glassColour, frameColour, wallColour, 
        pos, rotate, hitboxPos1, hitboxPos2 }) => {
            
    return (
        <group>
            <group position={pos} rotation={rotate} >
                <ZBuilding2 
                    glassColour={glassColour}
                    frameColour={frameColour}
                    wallColour={wallColour} />
            </group>
        
            <Hitbox position={hitboxPos1} rotation={rotate} size={[6, 14, 12]} />
            <Hitbox position={hitboxPos2} rotation={rotate} size={[6, 14, 12]} />
           
        </group>
    )
}