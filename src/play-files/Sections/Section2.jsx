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
const frameColour = '#B490E7'        
const wallColour = '#CEB4F0'

const rotateU = [0, 0, 0]
const rotateL = [0, 1.57, 0]
const rotateD = [0, 3.14, 0]
const rotateR = [0, 4.71, 0]

  return (
    <group>
      {/* Buildings */}
      <group>
      <TFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[15, -1, -54]} rotate={rotateU}
                hitboxPos1={[26, 0, -114]}
                hitboxPos2={[30, 0, -114]} />

        <TFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[15, -1, -37]} rotate={rotateD}
                hitboxPos1={[30, 2, -97]}
                hitboxPos2={[26, 2, -97]} />

        <LFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[20.5, -1, -65]} rotate={rotateL}
                hitboxPos1={[33.5, 5, -127]}
                hitboxPos2={[35.5, 5, -125]} />

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[28, -1, -64]} rotate={rotateL} 
                   hitboxPos={[41, 0, -124]}/>                   

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[26, -1, -49]} rotate={rotateR} 
                     hitboxPos={[39, 0, -109]}/>

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[27, -1, -35]} rotate={rotateR}
                   hitboxPos={[40, 0, -95]}/>

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[37, -1, -64]} rotate={rotateL} 
                     hitboxPos={[50, 0, -124]}/>

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[37, -1, -55.5]} rotate={rotateR} 
                   hitboxPos={[50, 0, -115.5]}/>

        <LFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[37, -1, -40]} rotate={rotateD}
                hitboxPos1={[50, 5, -102]}
                hitboxPos2={[48, 5, -100]} />

        <SquareFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[49, -1, -60]} rotate={rotateR}
                     hitboxPos={[62, 0, -120]} />

        <TFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[63, -1, -64]} rotate={rotateL}
                hitboxPos1={[76, 2, -122]}
                hitboxPos2={[76, 2, -126]} />

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[50, -1, -49]} rotate={rotateD}
                hitboxPos1={[63, 5, -111]}
                hitboxPos2={[61, 5, -109]} />

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[50, -1, -35]} rotate={rotateR}
                hitboxPos1={[63, 5, -93]}
                hitboxPos2={[61, 5, -95]} />

        <SquareFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[57, -1, -42]} rotate={rotateR}
                     hitboxPos={[70, 0, -102]} />

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[64, -1, -49]} rotate={rotateL}
                hitboxPos1={[77, 5, -111]}
                hitboxPos2={[79, 5, -109]} />

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[64, -1, -35]} rotate={rotateU}
                hitboxPos1={[77, 5, -93]}
                hitboxPos2={[79, 5, -95]} />

      </group>

      {/* Props */}
      <group>
        <StreetLightFinal pos={[8, -1, -65]}
                    hitboxPos={[21, 0, -125]}/>

        <StreetLightFinal pos={[8, -1, -50]} rotate={rotateL}
                    hitboxPos={[21, 0, -110]} />

        {/* <StreetLightFinal pos={[8, -1, -34]} rotate={rotateL}
                    hitboxPos={[21, 0, -94]} /> */}

        <TrafficRFinal pos={[8, -1, -28]} rotate={rotateR} 
                 hitboxPos={[21, 0, -88]}/> 

        <TreeFinal    pos={[13, -1, -41]} 
                hitboxPos={[26, 0, -101]}/>

        <TreeFinal    pos={[13, -1, -33]} 
                hitboxPos={[26, 0, -93]}/>

        {/* <TreeFinal    pos={[25, -1, -29]} 
                hitboxPos={[38, 0, -89]}/> */}

        {/* <TreeFinal    pos={[29, -1, -29]} 
                hitboxPos={[42, 0, -89]}/> */}

        <StreetLightFinal pos={[35, -1, -28]} rotate={rotateD}
                    hitboxPos={[48, 0, -88]}/>

        <StreetLightFinal pos={[58, -1, -69]} rotate={rotateU}
                    hitboxPos={[71, 0, -129]} />

        <TreeFinal    pos={[64, -1, -66]}
                hitboxPos={[77, 0, -126]}/>

        <TreeFinal    pos={[47, -1, -30]}
                hitboxPos={[60, 0, -90]}/>

        <StreetLightFinal pos={[53, -1, -28]} rotate={rotateD}
                    hitboxPos={[66, 0, -88]}/>

        <StreetLightFinal pos={[61, -1, -28]} rotate={rotateD}
                    hitboxPos={[74, 0, -88]}/>
                
        <TreeFinal    pos={[67, -1, -30]}
                hitboxPos={[80, 0, -90]}/>
      </group>
    </group>
  )
    
}