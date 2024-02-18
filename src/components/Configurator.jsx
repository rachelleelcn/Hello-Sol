import { useRef } from 'react';
import { Environment, Preload, PresentationControls, Stage } from "@react-three/drei";
import city from "../assets/lighting/potsdamer_platz_1k.hdr";
import EVTop from "../models/EVTop";
import EVBottom from "../models/EVBottom";
import EVWheels from "../models/EVWheels";
import ClassicTop from '../models/ClassicTop';
import ClassicBottom from '../models/ClassicBottom';
import ClassicWheels from '../models/ClassicWheels';
// import RoundTop from '../models/RoundTop';
// import RoundBottom from '../models/RoundBottom';
// import RoundWheels from '../models/RoundWheels';
import BoxyTop from '../models/BoxyTop';
import BoxyBottom from '../models/BoxyBottom';
import BoxyWheels from '../models/BoxyWheels';
import SportTop from '../models/SportTop';
import SportBottom from '../models/SportBottom';
import SportWheels from '../models/SportWheels';
// import VintageTop from '../models/VintageTop';
// import VintageBottom from '../models/VintageBottom';
// import VintageWheels from '../models/VintageWheels';

const Configurator = ({ topColour, topModel, bodyColour, bodyModel, wheelModel, section }) => {
    // 'blue', 'green', 'yellow', 'red', 'pink', 'purple'
    const colours = ["#5AC7D2", "#C8F165", "#FFDF59", "#FE574F", "#F178B8", "#986CDE"];
    // 'Electric', 'Classic', 'Round', 'Boxy', 'Sport', 'Vintage'
    // const models = ['Electric', 'Classic', 'Round', 'Boxy', 'Sport', 'Vintage'];

    const rotation = section === 4 ? [-0.1, 0, 0] : [0.1, -0.6, 0];
    const scaleValue = 0.7;

    return (

        <PresentationControls speed={1.5} polar={[-0.2, Math.PI / 4]} rotation={rotation}>

            <Stage environment={null} intensity={0.6} shadows="false" >

                <Environment files={city} />

                <EVTop scale={scaleValue} colour={colours[topColour]} visible={topModel === 0} />
                <EVBottom scale={scaleValue} colour={colours[bodyColour]} visible={bodyModel === 0} />
                <EVWheels scale={scaleValue} visible={wheelModel === 0} />

                <ClassicTop scale={scaleValue} colour={colours[topColour]} visible={topModel === 1} />
                <ClassicBottom scale={scaleValue} colour={colours[bodyColour]} visible={bodyModel === 1} />
                <ClassicWheels scale={scaleValue} visible={wheelModel === 1} />

                {/* Uncomment the following code for other models */}
                {/* <RoundTop scale={scaleValue} colour={colours[topColour]} visible={topModel === 2} />
                <RoundBottom scale={scaleValue} colour={colours[bodyColour]} visible={bodyModel === 2} />
                <RoundWheels scale={scaleValue} visible={wheelModel === 2} /> */}

                <BoxyTop scale={scaleValue} colour={colours[topColour]} visible={topModel === 3} />
                <BoxyBottom scale={scaleValue} colour={colours[bodyColour]} visible={bodyModel === 3} />
                <BoxyWheels scale={scaleValue} visible={wheelModel === 3} />

                <SportTop scale={scaleValue} colour={colours[topColour]} visible={topModel === 4} />
                <SportBottom scale={scaleValue} colour={colours[bodyColour]} visible={bodyModel === 4} />
                <SportWheels scale={scaleValue} visible={wheelModel === 4} />

                {/* Uncomment the following code for other models */}
                {/* <VintageTop scale={scaleValue} colour={colours[topColour]} visible={topModel === 5} />
                <VintageBottom scale={scaleValue} colour={colours[bodyColour]} visible={bodyModel === 5} />
                <VintageWheels scale={scaleValue} visible={wheelModel === 5} /> */}


            </Stage>


        </PresentationControls>

    );
}

export default Configurator;