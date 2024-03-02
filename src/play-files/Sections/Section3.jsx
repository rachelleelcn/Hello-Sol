/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { SquareFinal } from '../BuildingGroups/SquareFinal'
import { RectFinal } from '../BuildingGroups/RectFinal'
import { LFinal } from '../BuildingGroups/LFinal'
import { TFinal } from '../BuildingGroups/TFinal'
import { UFinal } from '../BuildingGroups/UFinal'
import { ZFinal } from '../BuildingGroups/ZFinal'

import { TreeFinal } from '../PropsGroups/TreeFinal'
import { StreetLightFinal } from '../PropsGroups/StreetLightFinal'
import { TrafficLFinal } from '../PropsGroups/TrafficLFinal'
import { TrafficRFinal } from '../PropsGroups/TrafficLightR'

// Blue buildings
export const Section3 = () => {
  const colour = '#C9EEF0'

  const rotateU = [0, 0, 0]
  const rotateL = [0, 1.57, 0]
  const rotateD = [0, 3.14, 0]
  const rotateR = [0, 4.71, 0]

  return (
    <group>
      {/* Buildings */}
      <group>
        <SquareFinal colour={colour}
                     pos={[-60, -1, -15]} rotate={rotateL}
                     hitboxPos={[-47, 0, -15]} />

        <UFinal colour={colour}
                pos={[-60, -1, 0]} rotate={rotateU}
                hitboxPos1={[-47, 2, -6]}
                hitboxPos2={[-50, 2, 0]}
                hitboxPos3={[-47, 2, 6]} />

        <SquareFinal colour={colour}
                     pos={[-60, -1, 15]} rotate={rotateR}
                     hitboxPos={[-47, 0, 15]} />

        <LFinal colour={colour}
                pos={[-50, -1, -12]} rotate={rotateL}
                hitboxPos1={[-37, 5, -14]}
                hitboxPos2={[-35, 5, -12]} />   

        <RectFinal colour={colour}
                   pos={[-48, -1, 0]} rotate={rotateR} 
                   hitboxPos={[-35, 0, 0]}/> 

        <LFinal colour={colour}
                pos={[-50, -1, 12]} rotate={rotateU}
                hitboxPos1={[-37, 5, 14]}
                hitboxPos2={[-35, 5, 12]} />     

        <LFinal colour={colour}
                pos={[-38, -1, -13]} rotate={rotateD}
                hitboxPos1={[-25, 5, -15]}
                hitboxPos2={[-27, 5, -13]} />    

        <TFinal colour={colour}
                pos={[-38, -1, 0]} rotate={rotateU}
                hitboxPos1={[-27, 2, 0]}
                hitboxPos2={[-23, 2, 0]} />  

        <LFinal colour={colour}
                pos={[-38, -1, 13]} rotate={rotateR}
                hitboxPos1={[-25, 5, 15]}
                hitboxPos2={[-27, 5, 13]} />     
  
        <LFinal colour={colour}
                pos={[-30, -1, -6]} rotate={rotateL}
                hitboxPos1={[-17, 5, -8]}
                hitboxPos2={[-15, 5, -6]} />   

        <LFinal colour={colour}
                pos={[-30, -1, 6]} rotate={rotateU}
                hitboxPos1={[-17, 5, 8]}
                hitboxPos2={[-15, 5, 6]} />  

        <SquareFinal colour={colour}
                     pos={[-21, -1, -15]} rotate={rotateL} 
                     hitboxPos={[-8, 0, -15]}/>

        <SquareFinal colour={colour}
                     pos={[-13, -1, -15]} rotate={rotateL}
                     hitboxPos={[0, 0, -15]} />

        <UFinal colour={colour}
                pos={[-12, -1, 0]} rotate={rotateD}
                hitboxPos1={[1, 2, -6]}
                hitboxPos2={[4, 2, 0]}
                hitboxPos3={[1, 2, 6]} />

        <RectFinal colour={colour}
                   pos={[-19, -1, 15]} rotate={rotateD} 
                   hitboxPos={[-6, 0, 15]}/>

      </group>

      {/* Props */}
      <group>
        <StreetLightFinal pos={[-65, -1, -18]} rotate={rotateU}
                          hitboxPos={[-52, 0, -18]}/>

        <TreeFinal pos={[-65, -1, -15]}
                   hitboxPos={[-52, 0, -15]}/>

        <TrafficRFinal pos={[-65, -1, 20]} rotate={rotateU} 
                       hitboxPos={[-52, 0, 20]}/>  

        <TreeFinal pos={[-52, -1, -18]}
                   hitboxPos={[-39, 0, -18]}/>

        <StreetLightFinal pos={[-48, -1, -18]} rotate={rotateU}
                          hitboxPos={[-35, 0, -18]}/>

        <StreetLightFinal pos={[-52, -1, 18]} rotate={rotateD}
                          hitboxPos={[-39, 0, 18]}/>

        <TreeFinal pos={[-48, -1, 18]}
                   hitboxPos={[-35, 0, 18]}/>

        <TreeFinal pos={[-7, -1, -17]}
                   hitboxPos={[6, 0, -17]}/>

        <TreeFinal pos={[-7, -1, -13]}
                   hitboxPos={[6, 0, -13]}/>

        <TreeFinal pos={[-7, -1, 13]}
                   hitboxPos={[6, 0, 13]}/>

        <TreeFinal pos={[-12, -1, 17]}
                   hitboxPos={[1, 0, 17]}/>
       
        <TrafficRFinal pos={[-4, -1, -18]} rotate={rotateL} 
                       hitboxPos={[9, 0, -18]}/>

        <TrafficRFinal pos={[-4, -1, 20]} rotate={rotateU} 
                       hitboxPos={[9, 0, 20]}/>    
               
      </group>
    </group>
  )
    
}