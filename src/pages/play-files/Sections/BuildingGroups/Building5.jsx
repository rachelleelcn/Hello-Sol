/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useBox } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// Z-shaped
export const ZBuilding = ({ position }) => {
    const building = useLoader(GLTFLoader, './models/Building5.glb')

    const [ref] = useBox(() => ({
        mass: 1,
        args: [18, 18, 18],
        position: position,
        type: 'Static'
    }))

    return (
        <mesh ref={ref}>
            <boxGeometry/>
            <meshBasicMaterial visible={false} />

            <primitive
                object={building.scene}
                scale={[1.2, 1.2, 1.2]} 
            />
        </mesh>
    )
}