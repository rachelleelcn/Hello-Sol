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

// Purple buildings
export const Section2 = () => {
  const colour = '#D6D9F2'

  const rotateU = [0, 0, 0]
  const rotateL = [0, 1.57, 0]
  const rotateD = [0, 3.14, 0]
  const rotateR = [0, 4.71, 0]

  return (
    <group>
      {/* Buildings */}
      <group>
        <TFinal colour={colour}
                pos={[10, -1, -59]} rotate={rotateU}
                hitboxPos1={[21, 2, -59]}
                hitboxPos2={[25, 2, -59]} />

        <TFinal colour={colour}
                pos={[10, -1, -43]} rotate={rotateU}
                hitboxPos1={[21, 2, -43]}
                hitboxPos2={[25, 2, -43]} />

        <TFinal colour={colour}
                pos={[15, -1, -34]} rotate={rotateL}
                hitboxPos1={[28, 2, -32]}
                hitboxPos2={[28, 2, -36]} />

        <LFinal colour={colour}
                pos={[18, -1, -64]} rotate={rotateL}
                hitboxPos1={[31, 5, -66]}
                hitboxPos2={[33, 5, -64]} />

        <RectFinal colour={colour}
                   pos={[20, -1, -51]} rotate={rotateR} 
                   hitboxPos={[33, 0, -51]}/>

        <RectFinal colour={colour}
                   pos={[29, -1, -62]} rotate={rotateL} 
                   hitboxPos={[52, 0, -62]}/>                   

        <SquareFinal colour={colour}
                     pos={[28, -1, -49]} rotate={rotateR} 
                     hitboxPos={[41, 0, -49]}/>

        <RectFinal colour={colour}
                   pos={[27, -1, -36]} rotate={rotateR}
                   hitboxPos={[40, 0, -36]}/>

        <SquareFinal colour={colour}
                     pos={[37, -1, -64]} rotate={rotateL} 
                     hitboxPos={[50, 0, -64]}/>

        <RectFinal colour={colour}
                   pos={[37, -1, -52]} rotate={rotateR} 
                   hitboxPos={[50, 0, -52]}/>

        <LFinal colour={colour}
                pos={[37, -1, -40]} rotate={rotateD}
                hitboxPos1={[50, 5, -42]}
                hitboxPos2={[48, 5, -40]} />

        <SquareFinal colour={colour}
                     pos={[46, -1, -60]} rotate={rotateR}
                     hitboxPos={[59, 0, -60]} />

        <TFinal colour={colour}
                pos={[58, -1, -61]} rotate={rotateL}
                hitboxPos1={[71, 2, -59]}
                hitboxPos2={[71, 2, -63]} />

        <LFinal colour={colour}
                pos={[48, -1, -49]} rotate={rotateD}
                hitboxPos1={[61, 5, -51]}
                hitboxPos2={[59, 5, -49]} />

        <LFinal colour={colour}
                pos={[48, -1, -35]} rotate={rotateR}
                hitboxPos1={[61, 5, -33]}
                hitboxPos2={[59, 5, -35]} />

        <SquareFinal colour={colour}
                     pos={[55, -1, -42]} rotate={rotateR}
                     hitboxPos={[68, 0, -42]} />

        <LFinal colour={colour}
                pos={[62, -1, -49]} rotate={rotateL}
                hitboxPos1={[75, 5, -51]}
                hitboxPos2={[77, 5, -49]} />

        <LFinal colour={colour}
                pos={[62, -1, -35]} rotate={rotateU}
                hitboxPos1={[75, 5, -33]}
                hitboxPos2={[77, 5, -35]} />

      </group>

      {/* Props */}
      <group>
        <TreeFinal pos={[8, -1, -68]}
                   hitboxPos={[21, 0, -68]}/>

        <TrafficRFinal pos={[5, -1, -28]} rotate={rotateR} 
                       hitboxPos={[18, 0, -28]}/> 

        <StreetLightFinal pos={[35, -1, -33]} rotate={rotateD}
                          hitboxPos={[48, 0, -33]}/>

        <StreetLightFinal pos={[54, -1, -66]}
                          hitboxPos={[67, 0, -66]} />

        <TreeFinal pos={[67, -1, -59]}
                   hitboxPos={[80, 0, -59]}/>
      </group>
              
    </group>
  )
    
}