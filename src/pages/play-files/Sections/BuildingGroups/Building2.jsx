/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useBox } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// rectangular building
export const RectBuilding = ({ position }) => {
    const building = useLoader(GLTFLoader, './models/Building2.glb')

    const [ref] = useBox(() => ({
        mass: 1,
        args: [8, 18, 10],
        position: position,
        type: 'Static'
    }))

    return (
        <mesh ref={ref}>
            <boxGeometry args={[12, 10, 8]}/>
            <meshBasicMaterial color={'black'}/>

            <primitive
                object={building.scene}
                scale={[1.2, 1.2, 1.2]} 
            />
        </mesh>
    )
}