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
                   pos={[-65, -1, 36]} rotate={rotateL} 
             hitboxPos={[-52, 0, -24]}/> 

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-62, -1, 49]} rotate={rotateD} 
                     hitboxPos={[-49, 0, -11]}/>

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-65, -1, 61]} rotate={rotateR} 
             hitboxPos={[-52, 0, 1]}/> 

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-58.5, -1, 63]} rotate={rotateR} 
               hitboxPos={[-45.5, 0, 3]}/>

        <LFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-55, -1, 34]} rotate={rotateD}
                hitboxPos1={[-42, 5, -28]}
                hitboxPos2={[-44, 5, -26]} />   

        <ZFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-54, -1, 55]} rotate={rotateU}
                hitboxPos1={[-38, 2, -11]}
                hitboxPos2={[-32, 2, -17]} />

        <LFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-43.5, -1, 60]} rotate={rotateU}
                hitboxPos1={[-30.5, 5, 2]}
                hitboxPos2={[-28.5, 5, 0]} />  

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-34, -1, 35]} rotate={rotateU} 
                   hitboxPos={[-21, 0, -25]}/> 

        <LFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-35, -1, 42.5]} rotate={rotateD}
                hitboxPos1={[-22, 5, -19.5]}
                hitboxPos2={[-24, 5, -17.5]} />   

        <LFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-31, -1, 53]} rotate={rotateU}
                hitboxPos1={[-18, 5, -5]}
                hitboxPos2={[-16, 5, -7]} />

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
                pos={[-10, -1, 65.5]} rotate={rotateL}
                hitboxPos1={[3, 3, 7.5]}
                hitboxPos2={[3, 3, 3.5]} />
      </group>

      {/* Props */}
      <group>
        <TreeFinal  pos={[-67, -1, 30]} 
              hitboxPos={[-54, 0, -30]}/>

        <TreeFinal  pos={[-63, -1, 30]} 
              hitboxPos={[-50, 0, -30]}/>

        <TreeFinal  pos={[-69, -1, 34]} 
              hitboxPos={[-56, 0, -26]}/>

        <TreeFinal  pos={[-69, -1, 38]} 
              hitboxPos={[-56, 0, -22]}/>

        <StreetLightFinal pos={[-69, -1, 47]} rotate={rotateL}
                    hitboxPos={[-56, 0, -13]} />

        <TreeFinal  pos={[-69, -1, 59]} 
              hitboxPos={[-56, 0, -1]}/>

        <TreeFinal  pos={[-69, -1, 63]} 
              hitboxPos={[-56, 0, 3]}/>

        <StreetLightFinal pos={[-45, -1, 30]} rotate={rotateU}
                    hitboxPos={[-32, 0, -30]} />

        <StreetLightFinal pos={[-62, -1, 69]} rotate={rotateD}
                    hitboxPos={[-49, 0, 9]} />                    

        <StreetLightFinal pos={[-40, -1, 69]} rotate={rotateD}
                    hitboxPos={[-27, 0, 9]} />

        <TreeFinal  pos={[-38, -1, 30]} 
              hitboxPos={[-25, 0, -30]}/>

        <StreetLightFinal pos={[-34, -1, 30]} rotate={rotateU}
                    hitboxPos={[-21, 0, -30]} />

        <TreeFinal  pos={[-30, -1, 30]} 
              hitboxPos={[-17, 0, -30]}/>

        <TrafficRFinal  pos={[-4, -1, 30]} rotate={rotateL}
                  hitboxPos={[9, 0, -30]} />

        <StreetLightFinal pos={[-4, -1, 45]} rotate={rotateR}
                    hitboxPos={[9, 0, -15]} />

        <StreetLightFinal pos={[-4, -1, 55]} rotate={rotateR}
                    hitboxPos={[9, 0, -5]} />

        <TreeFinal  pos={[-6, -1, 64]} 
              hitboxPos={[7, 0, 4]}/>
      </group>
    </group>
  )
    
}
