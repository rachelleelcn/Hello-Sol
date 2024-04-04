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

// Blue buildings
export const Section3 = () => {

const glassColour = '#E2F4FF'
const frameColour = '#8BD5DD'
const wallColour = '#B4E3E8'

const rotateU = [0, 0, 0]
const rotateL = [0, 1.57, 0]
const rotateD = [0, 3.14, 0]
const rotateR = [0, 4.71, 0]

  return (
    <group>
      {/* Buildings */}
      <group>
        <SquareFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-60, -1, -15]} rotate={rotateL}
                     hitboxPos={[-47, 0, -75]} />

        <UFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-63, -1, 1]} rotate={rotateU}
         hitboxPos1={[-50, 2, -53]}
         hitboxPos2={[-53, 2, -59]}
         hitboxPos3={[-50, 2, -65]} />

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-60, -1, 13.5]} rotate={rotateR}
               hitboxPos={[-47, 0, -46.5]} />

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-50, -1, -14]} rotate={rotateL}
         hitboxPos1={[-37, 5, -76]}
         hitboxPos2={[-35, 5, -74]} />   

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-38, -1, -14]} rotate={rotateD}
         hitboxPos1={[-25, 5, -76]}
         hitboxPos2={[-27, 5, -74]} />    

        <TFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-48, -1, 1]} rotate={rotateD}
         hitboxPos1={[-33, 3, -59]}
         hitboxPos2={[-37, 3, -59]} />

        <TFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-40.5, -1, 1]} rotate={rotateU}
         hitboxPos1={[-29.5, 2, -59]}
         hitboxPos2={[-25.5, 2, -59]} />  

        <TFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-44.5, -1, 15]} rotate={rotateL}
         hitboxPos1={[31.5, 3, -43]}
         hitboxPos2={[31.5, 3, -47]} />

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-30, -1, -6]} rotate={rotateL}
                hitboxPos1={[-17, 5, -68]}
                hitboxPos2={[-15, 5, -66]} />   

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-30, -1, 9]} rotate={rotateU}
                hitboxPos1={[-17, 5, -49]}
                hitboxPos2={[-15, 5, -51]} />  

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-17.5, -1, -15]} rotate={rotateL} 
                     hitboxPos={[-4.5, 0, -75]}/>

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-11, -1, -15]} rotate={rotateL}
                     hitboxPos={[2, 0, -75]} />

        <UFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-14, -1, 1]} rotate={rotateD}
                hitboxPos1={[-1, 2, -53]}
                hitboxPos2={[2, 2, -59]}
                hitboxPos3={[-1, 2, -65]} />

        <RectFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-21, -1, 16]} rotate={rotateD} 
                   hitboxPos={[-8, 0, -44]}/>

      </group>

      {/* Props */}
      <group>
        <StreetLightFinal pos={[-65, -1, -18]} rotate={rotateU}
                    hitboxPos={[-52, 0, -78]}/>

        <TreeFinal    pos={[-65, -1, 12]}
                hitboxPos={[-52, 0, -48]}/>

        <TreeFinal    pos={[-65, -1, 15]}
                hitboxPos={[-52, 0, -45]}/>

        <TrafficRFinal pos={[-69, -1, 20]} rotate={rotateU} 
                 hitboxPos={[-56, 0, -40]}/>  

        <StreetLightFinal pos={[-52, -1, 20]} rotate={rotateD}
                    hitboxPos={[-39, 0, -40]}/>

        <StreetLightFinal pos={[-38, -1, 20]} rotate={rotateD}
                    hitboxPos={[-25, 0, -40]}/>

        <StreetLightFinal pos={[-30, -1, 20]} rotate={rotateD}
                    hitboxPos={[-17, 0, -40]}/>

        <StreetLightFinal pos={[-28, -1, -18]} rotate={rotateU}
                    hitboxPos={[-15, 0, -78]}/>

        <TreeFinal pos={[-7, -1, -5]}
             hitboxPos={[6, 0, -65]}/>

        <TreeFinal pos={[-7, -1, 1]}
             hitboxPos={[6, 0, -59]}/>

        <TreeFinal pos={[-7, -1, 7]}
             hitboxPos={[6, 0, -53]}/>

        <StreetLightFinal pos={[-14, -1, 20]} rotate={rotateD}
                    hitboxPos={[-1, 0, -40]}/>
       
        <TrafficRFinal pos={[-4, -1, -18]} rotate={rotateL} 
                 hitboxPos={[9, 0, -78]}/>

        <TrafficRFinal pos={[-4, -1, 20]} rotate={rotateU} 
                 hitboxPos={[9, 0, -40]}/>    
      </group>
    </group>
  )
    
}