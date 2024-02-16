/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useBox } from '@react-three/cannon'

// import { SquareBuilding } from './BuildingGroups/Building1'
// import { RectBuilding } from './BuildingGroups/Building2'
// import { LBuilding } from './BuildingGroups/Building3'
// import { UBuilding } from './BuildingGroups/Building4'
// import { ZBuilding } from './BuildingGroups/Building5'
// import { TBuilding } from './BuildingGroups/Building6'

// Pink buildings
const Cube = ({position, size}) => {
    const [ref] = useBox(() => ({
        mass: 1,
        args: size,
        position: position,
        type: 'Static'
    }))

    return (
      <mesh ref={ref}>   
        <boxGeometry args={size}/>
        <meshStandardMaterial color={'#FFEAF5'}/>
      </mesh>
    )
  }

  export const Section1 = () => {
    return (
      <group>
        {/* <SquareBuilding position={[-36, -1, -9.5]}/>
        <RectBuilding position={[0, -1, 0]}/>
        <LBuilding position={[-20, -1, -15]}/>   */}

        <Cube position={[-36, 3, -9.5]}     size={[13, 8, 10]} />
        <Cube position={[-30, 6.5, -26]}    size={[6, 15, 15]} />
        <Cube position={[-45, 4, -12]}      size={[5, 10, 15]} />
        <Cube position={[-45, 11, -25]}     size={[6, 25, 6]} />
        <Cube position={[-45, 9, -35]}      size={[6, 20, 6]} />
        <Cube position={[-42, 3, -44]}      size={[12, 8, 8]} />
        <Cube position={[-32, 11, -44]}     size={[8, 25, 8]} />
    </group>
    )
    
  }