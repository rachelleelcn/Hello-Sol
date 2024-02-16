/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useBox } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// L-shaped building
export const LBuilding = ({ position }) => {
    const building = useLoader(GLTFLoader, './models/Building3.glb')

    const [ref] = useBox(() => ({
        mass: 1,
        args: [10, 15, 10],
        position: position,
        type: 'Static'
    }))

    return (
        <mesh ref={ref}>
            <boxGeometry args={[10, 15, 10]}/>
            <meshBasicMaterial color={'black'}/>

            <primitive
                object={building.scene}
                scale={[1.2, 1.2, 1.2]} 
            />
        </mesh>
    )
}