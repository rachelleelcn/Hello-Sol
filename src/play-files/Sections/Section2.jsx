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

// Purple buildings
export const Section2 = () => {

const glassColour = '#E2F4FF'
const frameColour = '#958ED4'        
const wallColour = '#D6D9F2'

const rotateU = [0, 0, 0]
const rotateL = [0, 1.57, 0]
const rotateD = [0, 3.14, 0]
const rotateR = [0, 4.71, 0]

  return (
    <group>
      {/* Buildings */}
      <group>
        <TFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[10, -1, -59]} rotate={rotateU}
                hitboxPos1={[21, 2, -119]}
                hitboxPos2={[25, 2, -119]} />

        <TFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[10, -1, -43]} rotate={rotateU}
                hitboxPos1={[21, 2, -103]}
                hitboxPos2={[25, 2, -103]} />

        <TFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[15, -1, -34]} rotate={rotateL}
                hitboxPos1={[28, 2, -92]}
                hitboxPos2={[28, 2, -96]} />

        <LFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[18, -1, -64]} rotate={rotateL}
                hitboxPos1={[31, 5, -126]}
                hitboxPos2={[33, 5, -124]} />

        <RectFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[20, -1, -51]} rotate={rotateR} 
                   hitboxPos={[33, 0, -111]}/>

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[28, -1, -64]} rotate={rotateL} 
                   hitboxPos={[41, 0, -124]}/>                   

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[28, -1, -49]} rotate={rotateR} 
                     hitboxPos={[41, 0, -109]}/>

        <RectFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[27, -1, -36]} rotate={rotateR}
                   hitboxPos={[40, 0, -106]}/>

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[37, -1, -64]} rotate={rotateL} 
                     hitboxPos={[50, 0, -124]}/>

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[37, -1, -52]} rotate={rotateR} 
                   hitboxPos={[50, 0, -112]}/>

        <LFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[37, -1, -40]} rotate={rotateD}
                hitboxPos1={[50, 5, -102]}
                hitboxPos2={[48, 5, -100]} />

        <SquareFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[46, -1, -60]} rotate={rotateR}
                     hitboxPos={[59, 0, -120]} />

        <TFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[58, -1, -61]} rotate={rotateL}
                hitboxPos1={[71, 2, -119]}
                hitboxPos2={[71, 2, -123]} />

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[48, -1, -49]} rotate={rotateD}
                hitboxPos1={[61, 5, -111]}
                hitboxPos2={[59, 5, -109]} />

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[48, -1, -35]} rotate={rotateR}
                hitboxPos1={[61, 5, -93]}
                hitboxPos2={[59, 5, -95]} />

        <SquareFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[55, -1, -42]} rotate={rotateR}
                     hitboxPos={[68, 0, -102]} />

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[62, -1, -49]} rotate={rotateL}
                hitboxPos1={[75, 5, -111]}
                hitboxPos2={[77, 5, -109]} />

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[62, -1, -35]} rotate={rotateU}
                hitboxPos1={[75, 5, -93]}
                hitboxPos2={[77, 5, -95]} />

      </group>

      {/* Props */}
      <group>
        <TreeFinal    pos={[8, -1, -68]}
                hitboxPos={[21, 0, -128]}/>

        <TrafficRFinal pos={[8, -1, -28]} rotate={rotateR} 
                 hitboxPos={[21, 0, -88]}/> 

        <StreetLightFinal pos={[35, -1, -33]} rotate={rotateD}
                    hitboxPos={[48, 0, -93]}/>

        <StreetLightFinal pos={[54, -1, -66]}
                    hitboxPos={[67, 0, -126]} />

        <TreeFinal    pos={[67, -1, -59]}
                hitboxPos={[80, 0, -119]}/>
      </group>
    </group>
  )
    
}