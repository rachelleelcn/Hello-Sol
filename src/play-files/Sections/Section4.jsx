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

// Green buildings
export const Section4 = () => {
  
const glassColour = '#E4FFDE'
const frameColour = '#87CC98'
// const wallColour = '#D0FFD4'
const wallColour = '#D5FEDF'
// const wallColour = '#BFFFD9'

const rotateU = [0, 0, 0]
const rotateL = [0, 1.57, 0]
const rotateD = [0, 3.14, 0]
const rotateR = [0, 4.71, 0]

  return (
    <group>
      {/* Buildings */}
      <group>
        <UFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[18, -1, -10]} rotate={rotateR}
                hitboxPos1={[25, 0, -70]}
                hitboxPos2={[31, 0, -73]}
                hitboxPos3={[37, 0, -70]} />

        <UFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[18, -1, 12]} rotate={rotateL}
                hitboxPos1={[25, 0, -48]}
                hitboxPos2={[31, 0, -45]}
                hitboxPos3={[37, 0, -48]} /> 

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                    pos={[31, -1, -13]} rotate={rotateL}
                    hitboxPos={[44, 0, -73]} />

        <ZFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[46, -1, 5]} rotate={rotateL} 
                hitboxPos1={[53, 3, -58]}
                hitboxPos2={[47, 3, -64]}/> 

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[32, -1, 16]} rotate={rotateR}
                hitboxPos1={[45, 0, -42]}
                hitboxPos2={[43, 0, -44]} />

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[45, -1, -13]} rotate={rotateL}
                     hitboxPos={[58, 0, -73]}/>

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[45, -1, 13]} rotate={rotateR}
                     hitboxPos={[58, 0, -47]}/>

        <ZFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[68, -1, 11]} rotate={rotateL} 
                hitboxPos1={[75, 3, -52]}
                hitboxPos2={[69, 3, -58]}/>

        <TFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[62, -1, -12]} rotate={rotateU}
                hitboxPos1={[73, 0, -72]}
                hitboxPos2={[77, 0, -72]} />

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                    pos={[54, -1, 17]} rotate={rotateU}
                    hitboxPos={[67, 0, -43]} />

      </group>

      {/* Props */}
      <group>
        <TrafficRFinal  pos={[8, -1, -18]} rotate={rotateD}
                  hitboxPos={[21, 0, -78]} />

        <TreeFinal  pos={[12, -1, -18]} 
              hitboxPos={[25, 0, -78]}/>
                    
        <TreeFinal  pos={[18, -1, -18]} 
              hitboxPos={[31, 0, -78]}/>

        <TreeFinal  pos={[24, -1, -18]} 
              hitboxPos={[37, 0, -78]}/>

        <TrafficRFinal  pos={[8, -1, 20]} rotate={rotateR}
                  hitboxPos={[21, 0, -40]} />

        <TreeFinal  pos={[12, -1, 20]} 
              hitboxPos={[25, 0, -40]}/>
                    
        <TreeFinal  pos={[18, -1, 20]} 
              hitboxPos={[31, 0, -40]}/>

        <TreeFinal  pos={[24, -1, 20]} 
              hitboxPos={[37, 0, -40]}/>

        <TreeFinal  pos={[47, -1, 18]} 
              hitboxPos={[60, 0, -42]}/>

        <StreetLightFinal pos={[65, -1, -18]} rotate={rotateU}
                    hitboxPos={[78, 0, -78]} />

        <StreetLightFinal pos={[68, -1, 3]} rotate={rotateR}
                    hitboxPos={[81, 0, -57]} />
      </group>
    </group>
  )
    
}
