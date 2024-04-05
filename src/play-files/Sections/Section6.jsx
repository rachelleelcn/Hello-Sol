/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { SquareFinal } from '../BuildingGroups/SquareFinal'
import { SquareFinal2 } from '../BuildingGroups/SquareFinal2'
import { RectFinal } from '../BuildingGroups/RectFinal'
import { RectFinal2 } from '../BuildingGroups/RectFinal2'
import { LFinal } from '../BuildingGroups/LFinal'
import { LFinal2 } from '../BuildingGroups/LFinal2'
import { TFinal } from '../BuildingGroups/TFinal'
import { TFinal2 } from '../BuildingGroups/TFinal2'
import { UFinal } from '../BuildingGroups/UFinal'
import { UFinal2 } from '../BuildingGroups/UFinal2'
import { ZFinal } from '../BuildingGroups/ZFinal'
import { ZFinal2 } from '../BuildingGroups/ZFinal2'

import { TreeFinal } from '../PropsGroups/TreeFinal'
import { StreetLightFinal } from '../PropsGroups/StreetLightFinal'
import { TrafficLFinal } from '../PropsGroups/TrafficLFinal'
import { TrafficRFinal } from '../PropsGroups/TrafficLightR'

// Red buildings
export const Section6 = () => {

const glassColour = '#F5DAD7'
const frameColour = '#FF8778'
const wallColour = '#FFB0A3'

const rotateU = [0, 0, 0]
const rotateL = [0, 1.57, 0]
const rotateD = [0, 3.14, 0]
const rotateR = [0, 4.71, 0]

  return (
    <group>
      {/* Buildings */}
      <group>
        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[15, -1, 35]} rotate={rotateD}
             hitboxPos={[28, 0, -25]} />

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                    pos={[11, -1, 45]} rotate={rotateD}
              hitboxPos={[24, 0, -15]}/>

        <TFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[13, -1, 60]} rotate={rotateU}
         hitboxPos1={[24, 0, 0]}
         hitboxPos2={[28, 0, 0]} />

        <SquareFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                      pos={[23, -1, 49]} rotate={rotateD}
                hitboxPos={[36, 0, -11]}/>         

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[28, -1, 37]} rotate={rotateD}
                hitboxPos1={[41, 0, -25]}
                hitboxPos2={[39, 0, -23]} />

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[28, -1, 62]} rotate={rotateR}
         hitboxPos1={[41, 0, 4]}
         hitboxPos2={[39, 0, 2]} />

        <RectFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[35, -1, 49]} rotate={rotateL}
             hitboxPos={[48, 0, -11]} />

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[42, -1, 37]} rotate={rotateL}
         hitboxPos1={[55, 0, -25]}
         hitboxPos2={[57, 0, -23]} />

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[42, -1, 62]} rotate={rotateU}
         hitboxPos1={[55, 0, 4]}
         hitboxPos2={[57, 0, 2]} /> 

        <TFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[53, -1, 49]} rotate={rotateU}
         hitboxPos1={[64, 0, -11]}
         hitboxPos2={[68, 0, -11]} />

        <TFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[57, -1, 65]} rotate={rotateL}
         hitboxPos1={[70, 3, 7]}
         hitboxPos2={[70, 3, 3]} />

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                  pos={[60, -1, 36]} rotate={rotateU}
                  hitboxPos={[73, 0, -24]} />

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                    pos={[65, -1, 47.5]} rotate={rotateU}
              hitboxPos={[78, 0, -12.5]}/>

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                    pos={[65, -1, 54]} rotate={rotateU}
              hitboxPos={[78, 0, -6]}/>
      </group>

      {/* Props */}
      <group>
        <TrafficRFinal  pos={[8, -1, 30]} rotate={rotateD}
                  hitboxPos={[21, 0, -30]} />

        <StreetLightFinal pos={[8, -1, 55]} rotate={rotateL}
                    hitboxPos={[21, 0, -5]} />

        {/* <StreetLightFinal pos={[8, -1, 65]} rotate={rotateL}
                    hitboxPos={[21, 0, 5]} /> */}

        {/* <TreeFinal  pos={[12, -1, 68]} 
              hitboxPos={[25, 0, 8]}/> */}

        <StreetLightFinal pos={[25, -1, 30]} rotate={rotateU}
                    hitboxPos={[38, 0, -30]} />

        <TreeFinal  pos={[30, -1, 32]} 
              hitboxPos={[43, 0, -28]}/>

        <TreeFinal  pos={[40, -1, 32]} 
              hitboxPos={[53, 0, -28]}/>

        <StreetLightFinal pos={[45, -1, 30]} rotate={rotateU}
                    hitboxPos={[58, 0, -30]} />

        <StreetLightFinal pos={[25, -1, 69]} rotate={rotateD} 
                    hitboxPos={[38, 0, 9]} />

        <TreeFinal  pos={[30, -1, 67]} 
              hitboxPos={[43, 0, 7]}/>

        <TreeFinal  pos={[40, -1, 67]} 
              hitboxPos={[53, 0, 7]}/>

        <StreetLightFinal pos={[45, -1, 69]} rotate={rotateD}
                    hitboxPos={[58, 0, 9]} />

        <TrafficRFinal  pos={[69, -1, 30]} rotate={rotateD}
                  hitboxPos={[82, 0, -30]} />

        {/* <StreetLightFinal pos={[69, -1, 69]} rotate={rotateR}
                    hitboxPos={[82, 0, 9]} /> */}

      </group>
    </group>
  )
    
}
