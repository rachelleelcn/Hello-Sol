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
const frameColour = '#7BB4D1'
const wallColour = '#C9EEF0'

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
                pos={[-60, -1, 0]} rotate={rotateU}
                hitboxPos1={[-47, 2, -54]}
                hitboxPos2={[-50, 2, -60]}
                hitboxPos3={[-47, 2, -66]} />

        <SquareFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-60, -1, 15]} rotate={rotateR}
                     hitboxPos={[-47, 0, -45]} />

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-50, -1, -12]} rotate={rotateL}
                hitboxPos1={[-37, 5, -70]}
                hitboxPos2={[-35, 5, -72]} />   

        <RectFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-48, -1, 0]} rotate={rotateR} 
                   hitboxPos={[-35, 0, -60]}/> 

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-50, -1, 12]} rotate={rotateU}
                hitboxPos1={[-37, 5, -46]}
                hitboxPos2={[-35, 5, -48]} />     

        <LFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-38, -1, -13]} rotate={rotateD}
                hitboxPos1={[-25, 5, -75]}
                hitboxPos2={[-27, 5, -73]} />    

        <TFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-38, -1, 0]} rotate={rotateU}
                hitboxPos1={[-27, 2, -60]}
                hitboxPos2={[-23, 2, -60]} />  

        <LFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-38, -1, 13]} rotate={rotateR}
                hitboxPos1={[-25, 5, -45]}
                hitboxPos2={[-27, 5, -47]} />     
  
        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-30, -1, -6]} rotate={rotateL}
                hitboxPos1={[-17, 5, -68]}
                hitboxPos2={[-15, 5, -66]} />   

        <LFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-30, -1, 6]} rotate={rotateU}
                hitboxPos1={[-17, 5, -52]}
                hitboxPos2={[-15, 5, -54]} />  

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-21, -1, -15]} rotate={rotateL} 
                     hitboxPos={[-8, 0, -75]}/>

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-13, -1, -15]} rotate={rotateL}
                     hitboxPos={[0, 0, -75]} />

        <UFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-12, -1, 0]} rotate={rotateD}
                hitboxPos1={[1, 2, -54]}
                hitboxPos2={[4, 2, -60]}
                hitboxPos3={[1, 2, -66]} />

        <RectFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-19, -1, 15]} rotate={rotateD} 
                   hitboxPos={[-6, 0, -45]}/>

      </group>

      {/* Props */}
      <group>
        <StreetLightFinal pos={[-65, -1, -18]} rotate={rotateU}
                    hitboxPos={[-52, 0, -78]}/>

        <TreeFinal    pos={[-65, -1, -15]}
                hitboxPos={[-52, 0, -75]}/>

        <TrafficRFinal pos={[-65, -1, 20]} rotate={rotateU} 
                 hitboxPos={[-52, 0, -40]}/>  

        <TreeFinal    pos={[-52, -1, -18]}
                hitboxPos={[-39, 0, -78]}/>

        <StreetLightFinal pos={[-48, -1, -18]} rotate={rotateU}
                    hitboxPos={[-35, 0, -78]}/>

        <StreetLightFinal pos={[-52, -1, 18]} rotate={rotateD}
                    hitboxPos={[-39, 0, -42]}/>

        <TreeFinal pos={[-48, -1, 18]}
             hitboxPos={[-35, 0, -42]}/>

        <TreeFinal pos={[-7, -1, -17]}
             hitboxPos={[6, 0, -77]}/>

        <TreeFinal pos={[-7, -1, -13]}
             hitboxPos={[6, 0, -73]}/>

        <TreeFinal pos={[-7, -1, 13]}
             hitboxPos={[6, 0, -47]}/>

        <TreeFinal pos={[-12, -1, 17]}
             hitboxPos={[1, 0, -43]}/>
       
        <TrafficRFinal pos={[-5, -1, -18]} rotate={rotateL} 
                 hitboxPos={[8, 0, -78]}/>

        <TrafficRFinal pos={[-5, -1, 20]} rotate={rotateU} 
                 hitboxPos={[8, 0, -40]}/>    
      </group>
    </group>
  )
    
}