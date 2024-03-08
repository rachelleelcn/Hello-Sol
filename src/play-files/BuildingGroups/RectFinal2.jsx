/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import RectBuilding2 from '../../models/Buildings/RectBuilding2'
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

export const RectFinal2 = 
    ({ 
        glassColour, frameColour, wallColour, 
        pos, rotate, hitboxPos }) => {
        
    return (
        <group>
            <group position={pos} rotation={rotate}>
                <RectBuilding2 
                     glassColour={glassColour}
                     frameColour={frameColour}
                     wallColour={wallColour}  /> 
            </group>

            <Hitbox position={hitboxPos} rotation={rotate} size={[10, 5, 6]} />

        </group>
    )
}