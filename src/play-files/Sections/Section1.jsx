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
                pos={[-66, -1, -47]} rotate={rotateU} 
                hitboxPos1={[-50, 2, -113]}
                hitboxPos2={[-44, 2, -119]} />

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-63, -1, -42]} rotate={rotateD}
                     hitboxPos={[-50, 0, -102]} />

        <RectFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-58, -1, -33]} rotate={rotateD} 
                   hitboxPos={[-45, 0, -93]} />

        <UFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-42, -1, -62]} rotate={rotateR}
                hitboxPos1={[-35, 2, -122]}
                hitboxPos2={[-29, 2, -125]}
                hitboxPos3={[-23, 2, -122]} />

        <SquareFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-38, -1, -48]} rotate={rotateU} 
                     hitboxPos={[-25, 0, -108]}/>

        <ZFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-38, -1, -36]} rotate={rotateL}
                hitboxPos1={[-31, 2, -99]}
                hitboxPos2={[-37, 2, -105]} />

        <RectFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-44, -1, -32]} rotate={rotateU}
                   hitboxPos={[-31, 0, -92]} />

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-29, -1, -57]} rotate={rotateL} 
                     hitboxPos={[-16, 0, -117]}/>

        <RectFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-26, -1, -48]} rotate={rotateU} 
                   hitboxPos={[-13, 0, -108]}/>

        <UFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-25, -1, -35]} rotate={rotateL}
                hitboxPos1={[-18, 2, -95]}
                hitboxPos2={[-12, 2, -92]}
                hitboxPos3={[-6, 2, -95]} />

        <ZFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                pos={[-9, -1, -57]} rotate={rotateL}
                hitboxPos1={[-2, 2, -120]}
                hitboxPos2={[-8, 2, -126]} />

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-10, -1, -50]} rotate={rotateU} 
                     hitboxPos={[3, 0, -110]}/>

        <RectFinal glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                   pos={[-8, -1, -41]} rotate={rotateU} 
                   hitboxPos={[5, 0, -101]}/>

        <SquareFinal2 glassColour={glassColour} frameColour={frameColour} wallColour={wallColour}
                     pos={[-10, -1, -32]} rotate={rotateR}
                     hitboxPos={[3, 0, -92]} />
      </group>

      {/* Props */}
      <group>
        <StreetLightFinal pos={[-65, -1, -64]} rotate={rotateL}
                    hitboxPos={[-52, 0, -124]}/>

        <TreeFinal pos={[-65, -1, -61]}
             hitboxPos={[-52, 0, -121]} />
        
        <StreetLightFinal pos={[-65, -1, -35]} rotate={rotateL}
                    hitboxPos={[-52, 0, -95]}/>  

        <TreeFinal    pos={[-65, -1, -31]}
                hitboxPos={[-52, 0, -91]}/>

        <StreetLightFinal pos={[-55, -1, -28]} rotate={rotateD}
                    hitboxPos={[-42, 0, -88]}/>

        <StreetLightFinal pos={[-29, -1, -68]} rotate={rotateU}
                    hitboxPos={[-16, 0, -128]}/>

        <StreetLightFinal pos={[-11, -1, -68]} rotate={rotateU}
                    hitboxPos={[2, 0, -128]}/>

        <TreeFinal    pos={[-8, -1, -68]}
                hitboxPos={[5, 0, -128]}/>

        <StreetLightFinal pos={[-4, -1, -52]} rotate={rotateR}
                    hitboxPos={[9, 0, -112]}/>

        <TreeFinal    pos={[-5, -1, -34]}
                hitboxPos={[8, 0, -94]}/>

        <TrafficRFinal pos={[-5, -1, -28]} rotate={rotateU}
                 hitboxPos={[8, 0, -88]}  />         
      </group>

    </group>
  )

}