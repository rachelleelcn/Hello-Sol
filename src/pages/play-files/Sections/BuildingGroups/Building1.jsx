/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useBox } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// Small square building
export const SquareBuilding = ({ position }) => {
    const building = useLoader(GLTFLoader, './models/Building1.glb')

    const [ref] = useBox(() => ({
        mass: 1,
        args: [10, 10, 10],
        position: position,
        type: 'Static'
    }))

    return (
        <mesh ref={ref}>
            <boxGeometry args={[10, 10, 10]} position={position}/>
            <meshBasicMaterial color={'black'}/>

            <primitive
                object={building.scene}
                scale={[1.5, 1.5, 1.5]} 
            />
        </mesh>
    )
}