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

// Yellow buildings
export const Section5 = () => {

const glassColour = '#FFF8E7'
const frameColour = '#DFC03E'
const wallColour = '#FCF7AF'

const rotateU = [0, 0, 0]
const rotateL = [0, 1.57, 0]
const rotateD = [0, 3.14, 0]
const rotateR = [0, 4.71, 0]

  return (
    <group>
      {/* Buildings */}
      <group>
        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-60, -1, 36]} rotate={rotateL} 
                   hitboxPos={[-47, 0, -24]}/> 

        <SquareFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-62, -1, 47]} rotate={rotateD} 
                     hitboxPos={[-49, 0, -13]}/>

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-60, -1, 58]} rotate={rotateR} 
                   hitboxPos={[-47, 0, -2]}/> 

        <LFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-52, -1, 33]} rotate={rotateD}
                hitboxPos1={[-39, 5, -29]}
                hitboxPos2={[-41, 5, -27]} />   

        <ZFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-54, -1, 55]} rotate={rotateU}
                hitboxPos1={[-38, 2, -11]}
                hitboxPos2={[-32, 2, -17]} />

        <LFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-45, -1, 60]} rotate={rotateU}
                hitboxPos1={[-32, 5, 2]}
                hitboxPos2={[-30, 5, 0]} />  

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-34, -1, 35]} rotate={rotateU} 
                   hitboxPos={[-21, 0, -25]}/> 

        <LFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-35, -1, 45]} rotate={rotateD}
                hitboxPos1={[-22, 5, -17]}
                hitboxPos2={[-24, 5, -15]} />   

        <LFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-30, -1, 55]} rotate={rotateU}
                hitboxPos1={[-17, 5, -3]}
                hitboxPos2={[-15, 5, -5]} />

        <RectFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-34, -1, 65]} rotate={rotateU} 
                   hitboxPos={[-21, 0, 5]}/>    
        
        <SquareFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-23, -1, 32]} rotate={rotateL} 
                     hitboxPos={[-10, 0, -28]}/>

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-20, -1, 44]} rotate={rotateL} 
                     hitboxPos={[-7, 0, -16]}/> 

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-20, -1, 58]} rotate={rotateR} 
                   hitboxPos={[-7, 0, -2]}/>   

        <LFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-12, -1, 35]} rotate={rotateL}
                hitboxPos1={[1, 0, -27]}
                hitboxPos2={[3, 0, -25]} />

        <TFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-8, -1, 50]} rotate={rotateU}
                hitboxPos1={[3, 0, -10]}
                hitboxPos2={[7, 0, -10]} />

        <TFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-10, -1, 65]} rotate={rotateL}
                hitboxPos1={[3, 3, 7]}
                hitboxPos2={[3, 3, 3]} />
      </group>

      {/* Props */}
      <group>
        <TreeFinal  pos={[-62, -1, 30]} 
              hitboxPos={[-49, 0, -30]}/>

        <TreeFinal  pos={[-58, -1, 30]} 
              hitboxPos={[-45, 0, -30]}/>

        <TreeFinal  pos={[-64, -1, 34]} 
              hitboxPos={[-51, 0, -26]}/>

        <TreeFinal  pos={[-64, -1, 38]} 
              hitboxPos={[-51, 0, -22]}/>

        <TreeFinal  pos={[-64, -1, 56]} 
              hitboxPos={[-51, 0, -4]}/>

        <TreeFinal  pos={[-64, -1, 60]} 
              hitboxPos={[-51, 0, 0]}/>

        <StreetLightFinal pos={[-64, -1, 67]} rotate={rotateD}
                    hitboxPos={[-51, 0, 7]} />

        <StreetLightFinal pos={[-48, -1, 67]} rotate={rotateD}
                    hitboxPos={[-35, 0, 7]} />

        <StreetLightFinal pos={[-38, -1, 30]} rotate={rotateU}
                    hitboxPos={[-25, 0, -30]} />

        <StreetLightFinal pos={[-30, -1, 30]} rotate={rotateU}
                    hitboxPos={[-17, 0, -30]} />

        <TreeFinal  pos={[-34, -1, 30]} 
              hitboxPos={[-21, 0, -30]}/>

        <TrafficRFinal  pos={[-5, -1, 30]} rotate={rotateL}
                  hitboxPos={[8, 0, -30]} />

        <StreetLightFinal pos={[-4, -1, 45]} rotate={rotateR}
                    hitboxPos={[9, 0, -15]} />

        <StreetLightFinal pos={[-4, -1, 55]} rotate={rotateR}
                    hitboxPos={[9, 0, -5]} />

        <TreeFinal  pos={[-6, -1, 63]} 
              hitboxPos={[7, 0, 3]}/>
      </group>
    </group>
  )
    
}
