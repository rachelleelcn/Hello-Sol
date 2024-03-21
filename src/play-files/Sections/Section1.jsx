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

// Pink buildings
export const Section1 = () => {
const glassColour = '#FFEFFA'
const frameColour = '#CFA1BE'      
const wallColour = '#F5C9E4'

const rotateU = [0, 0, 0]
const rotateL = [0, 1.57, 0]
const rotateD = [0, 3.14, 0]
const rotateR = [0, 4.71, 0]

  return (
    <group>
      {/* Buildings */}
      <group>
        <ZFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-69, -1, -51]} rotate={rotateU} 
                hitboxPos1={[-53, 2, -117]}
                hitboxPos2={[-47, 2, -123]} />

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-66, -1, -43]} rotate={rotateD}
                     hitboxPos={[-53, 0, -103]} />

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-63, -1, -33]} rotate={rotateD} 
             hitboxPos={[-50, 0, -93]} />

        <UFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-44, -1, -62]} rotate={rotateR}
         hitboxPos1={[-37, 2, -122]}
         hitboxPos2={[-31, 2, -125]}
         hitboxPos3={[-25, 2, -122]} />

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-34.5, -1, -48]} rotate={rotateD} 
                     hitboxPos={[-21.5, 0, -108]}/>

        <ZFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-40, -1, -36]} rotate={rotateL}
                hitboxPos1={[-33, 2, -99]}
                hitboxPos2={[-39, 2, -105]} />

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-45, -1, -32.5]} rotate={rotateU}
                   hitboxPos={[-32, 0, -92.5]} />

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-31.5, -1, -57]} rotate={rotateU} 
                     hitboxPos={[-18.5, 0, -117]}/>

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-26, -1, -48]} rotate={rotateU} 
                   hitboxPos={[-13, 0, -108]}/>

        <UFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-25, -1, -34]} rotate={rotateL}
                hitboxPos1={[-18, 2, -94]}
                hitboxPos2={[-12, 2, -91]}
                hitboxPos3={[-6, 2, -94]} />

        <ZFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-9, -1, -57]} rotate={rotateL}
                hitboxPos1={[-2, 2, -120]}
                hitboxPos2={[-8, 2, -126]} />

        <RectFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-10, -1, -48]} rotate={rotateR} 
                   hitboxPos={[3, 0, -108]}/>

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-12.5, -1, -33]} rotate={rotateU}
                     hitboxPos={[0.5, 0, -93]} />
      </group>

      {/* Props */}
      <group>
        <StreetLightFinal pos={[-69, -1, -68]} rotate={rotateL}
                    hitboxPos={[-56, 0, -128]}/>

        <TreeFinal pos={[-66, -1, -66]}
             hitboxPos={[-53, 0, -126]} />
        
        <StreetLightFinal pos={[-69, -1, -35]} rotate={rotateL}
                    hitboxPos={[-56, 0, -95]}/>  

        <TreeFinal    pos={[-69, -1, -31]}
                hitboxPos={[-56, 0, -91]}/>

        <StreetLightFinal pos={[-65, -1, -28]} rotate={rotateD}
                    hitboxPos={[-52, 0, -88]}/>

        <TreeFinal  pos={[-61, -1, -28]} 
                hitboxPos={[-48, 0, -88]}/>

        <TreeFinal  pos={[-51, -1, -34.5]} 
                hitboxPos={[-26, 0, -94.5]}/>

        <TreeFinal  pos={[-47, -1, -28]} 
                hitboxPos={[-34, 0, -88]}/>

        <StreetLightFinal pos={[-40, -1, -28]} rotate={rotateD}
                    hitboxPos={[-27, 0, -88]}/>

        <StreetLightFinal pos={[-29, -1, -68]} rotate={rotateU}
                    hitboxPos={[-16, 0, -128]}/>

        <StreetLightFinal pos={[-11, -1, -68]} rotate={rotateU}
                    hitboxPos={[2, 0, -128]}/>

        <TreeFinal    pos={[-8, -1, -68]}
                hitboxPos={[5, 0, -128]}/>

        <StreetLightFinal pos={[-4, -1, -65]} rotate={rotateR}
                    hitboxPos={[9, 0, -125]}/>

        <TreeFinal    pos={[-8, -1, -58]}
                hitboxPos={[5, 0, -118]}/>

        <StreetLightFinal pos={[-4, -1, -50]} rotate={rotateR}
                    hitboxPos={[9, 0, -110]}/>

        <TreeFinal    pos={[-6, -1, -44]}
                hitboxPos={[7, 0, -104]}/>

        <StreetLightFinal pos={[-4, -1, -34]} rotate={rotateR}
                    hitboxPos={[9, 0, -94]}/>

        <TrafficRFinal pos={[-4, -1, -28]} rotate={rotateU}
                 hitboxPos={[9, 0, -88]}  />         
      </group>

    </group>
  )

}