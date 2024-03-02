/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { SquareFinal } from '../BuildingGroups/SquareFinal'
import { RectFinal } from '../BuildingGroups/RectFinal'
import { LFinal } from '../BuildingGroups/LFinal'
import { TFinal } from '../BuildingGroups/TFinal'
import { UFinal } from '../BuildingGroups/UFinal'
import { ZFinal } from '../BuildingGroups/ZFinal'

import { TreeFinal } from '../PropsGroups/TreeFinal'
import { StreetLightFinal } from '../PropsGroups/StreetLightFinal'
import { TrafficLFinal } from '../PropsGroups/TrafficLFinal'
import { TrafficRFinal } from '../PropsGroups/TrafficLightR'

// Yellow buildings
export const Section5 = () => {
  const colour = '#EEF0C3'

  const rotateU = [0, 0, 0]
  const rotateL = [0, 1.57, 0]
  const rotateD = [0, 3.14, 0]
  const rotateR = [0, 4.71, 0]

  return (
    <group>
      {/* Buildings */}
      <group>
        {/* <RectFinal colour={colour}
                   pos={[-60, -1, 36]} rotate={rotateL} /> 

        <SquareFinal colour={colour}
                     pos={[-62, -1, 47]} rotate={rotateD} />

        <RectFinal colour={colour}
                   pos={[-60, -1, 58]} rotate={rotateR} /> 

        <LFinal colour={colour}
                pos={[-52, -1, 33]} rotate={rotateD}
                hitboxPos1={[-52, 5, 31]}
                hitboxPos2={[-54, 5, 33]} />   

        <ZFinal colour={colour}
                pos={[-54, -1, 55]} rotate={rotateU}
                hitboxPos1={[-51, 2, 49]}
                hitboxPos2={[-45, 2, 43]} />

        <LFinal colour={colour}
                pos={[-45, -1, 60]} rotate={rotateU}
                hitboxPos1={[-45, 5, 62]}
                hitboxPos2={[-43, 5, 60]} />  

        <RectFinal colour={colour}
                   pos={[-34, -1, 35]} rotate={rotateU} /> 

        <LFinal colour={colour}
                pos={[-35, -1, 45]} rotate={rotateD}
                hitboxPos1={[-35, 5, 43]}
                hitboxPos2={[-37, 5, 45]} />    */}

      </group>

      {/* Props */}
      <group>
        
      </group>
    </group>
  )
    
}
