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

// Pink buildings
export const Section1 = () => {
  const colour = '#F5C9E4'

  const rotateU = [0, 0, 0]
  const rotateL = [0, 1.57, 0]
  const rotateD = [0, 3.14, 0]
  const rotateR = [0, 4.71, 0]

  return (
    <group>
      {/* Buildings */}
      <group>
        <ZFinal colour={colour}
                pos={[-66, -1, -47]}
                hitboxPos1={[-50, 2, -53]}
                hitboxPos2={[-44, 2, -59]} />

        <SquareFinal colour={colour}
                     pos={[-63, -1, -42]} rotate={rotateD}
                     hitboxPos={[-50, 0, -42]} />

        <RectFinal colour={colour}
                   pos={[-58, -1, -33]} rotate={rotateD} 
                   hitboxPos={[-45, 0, -33]} />

        <UFinal colour={colour}
                pos={[-42, -1, -62]} rotate={rotateR}
                hitboxPos1={[-35, 2, -62]}
                hitboxPos2={[-29, 2, -65]}
                hitboxPos3={[-23, 2, -62]} />

        <SquareFinal colour={colour}
                     pos={[-38, -1, -48]} rotate={rotateU} 
                     hitboxPos={[-51, 0, -48]}/>

        <ZFinal colour={colour}
                pos={[-38, -1, -36]} rotate={rotateL}
                hitboxPos1={[-31, 2, -39]}
                hitboxPos2={[-37, 2, -45]} />

        <RectFinal colour={colour}
                   pos={[-44, -1, -32]} rotate={rotateU}
                   hitboxPos={[-31, 0, -32]} />

        <SquareFinal colour={colour}
                     pos={[-29, -1, -57]} rotate={rotateR} 
                     hitboxPos={[-16, 0, -57]}/>

        <RectFinal colour={colour}
                   pos={[-26, -1, -48]} rotate={rotateD} 
                   hitboxPos={[-13, 0, -48]}/>

        <UFinal colour={colour}
                pos={[-25, -1, -35]} rotate={rotateL}
                hitboxPos1={[-18, 2, -35]}
                hitboxPos2={[-12, 2, -32]}
                hitboxPos3={[-6, 2, -35]} />

        <ZFinal colour={colour}
                pos={[-9, -1, -57]} rotate={rotateL}
                hitboxPos1={[-2, 2, -60]}
                hitboxPos2={[-8, 2, -66]} />

        <SquareFinal colour={colour}
                     pos={[-10, -1, -50]} rotate={rotateR} 
                     hitboxPos={[3, 0, -50]}/>

        <RectFinal colour={colour}
                   pos={[-8, -1, -41]} rotate={rotateU} 
                   hitboxPos={[5, 0, -41]}/>

        <SquareFinal colour={colour}
                     pos={[-10, -1, -32]} rotate={rotateR}
                     hitboxPos={[3, 0, -32]} />
      </group>

      {/* Props */}
      <group>
        <StreetLightFinal pos={[-65, -1, -64]} rotate={rotateL}
                          hitboxPos={[-52, 0, -64]}/>

        <TreeFinal pos={[-65, -1, -61]}
                   hitboxPos={[-52, 0, -61]} />
        
        <StreetLightFinal pos={[-65, -1, -35]} rotate={rotateL}
                          hitboxPos={[-52, 0, -35]}/>  

        <TreeFinal pos={[-65, -1, -31]}
                   hitboxPos={[-52, 0, -31]}/>

        <StreetLightFinal pos={[-55, -1, -28]} rotate={rotateD}
                          hitboxPos={[-42, 0, -28]}/>

        <StreetLightFinal pos={[-29, -1, -68]} rotate={rotateU}
                          hitboxPos={[-16, 0, -68]}/>

        <StreetLightFinal pos={[-11, -1, -68]} rotate={rotateU}
                          hitboxPos={[2, 0, -68]}/>

        <TreeFinal pos={[-8, -1, -68]}
                   hitboxPos={[5, 0, -68]}/>

        <StreetLightFinal pos={[-4, -1, -50]} rotate={rotateR}
                          hitboxPos={[9, 0, -50]}/>

        <TreeFinal pos={[-5, -1, -34]}
                   hitboxPos={[8, 0, -34]}/>

        <TrafficRFinal pos={[-4, -1, -28]} rotate={rotateU}
                       hitboxPos={[9, 0, -28]}  />         

      </group>

    </group>
  )

}