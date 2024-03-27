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
const frameColour = '#D8F58E'
const wallColour = '#E6F8B4'

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
                    pos={[30.5, -1, -12.5]} rotate={rotateL}
                    hitboxPos={[43.5, 0, -72.5]} />

        <ZFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[45.5, -1, 5]} rotate={rotateL} 
                hitboxPos1={[52.5, 3, -58]}
                hitboxPos2={[46.5, 3, -64]}/> 

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[31.5, -1, 16]} rotate={rotateR}
                hitboxPos1={[44.5, 0, -42]}
                hitboxPos2={[42.5, 0, -44]} />

      <RectFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                  pos={[48, -1, -13]} rotate={rotateD}
            hitboxPos={[61, 0, -73]} />

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[45, -1, 14]} rotate={rotateR}
                     hitboxPos={[58, 0, -46]}/>

        <ZFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[68, -1, 11]} rotate={rotateL} 
                hitboxPos1={[75, 3, -52]}
                hitboxPos2={[69, 3, -58]}/>

        <TFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[62, -1, -12]} rotate={rotateU}
                hitboxPos1={[73, 0, -72]}
                hitboxPos2={[77, 0, -72]} />

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                    pos={[53.5, -1, 17]} rotate={rotateU}
                    hitboxPos={[66.5, 0, -43]} />

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

        <StreetLightFinal pos={[47, -1, 20]} rotate={rotateD}
                    hitboxPos={[60, 0, -40]}/>

        <StreetLightFinal pos={[45, -1, -18]} rotate={rotateU}
                    hitboxPos={[58, 0, -78]} />

        <StreetLightFinal pos={[65, -1, -18]} rotate={rotateU}
                    hitboxPos={[78, 0, -78]} />

        <StreetLightFinal pos={[68, -1, 3]} rotate={rotateR}
                    hitboxPos={[81, 0, -57]} />

        <StreetLightFinal pos={[67, -1, 20]} rotate={rotateD}
                    hitboxPos={[80, 0, -40]} />
      </group>
    </group>
  )
    
}
