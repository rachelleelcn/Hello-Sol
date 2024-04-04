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
import RoundTop from '../models/RoundTop';
import RoundBottom from '../models/RoundBottom';
import RoundWheels from '../models/RoundWheels';
import VintageTop from '../models/VintageTop';
import VintageBottom from '../models/VintageBottom';
import VintageWheels from '../models/VintageWheels';
// import VintageTop from '../models/VintageTop';
// import VintageBottom from '../models/VintageBottom';
// import VintageWheels from '../models/VintageWheels';

const Configurator = ({ topColour, topModel, bodyColour, bodyModel, wheelModel, section, license, showLicense }) => {
    // 'blue', 'green', 'yellow', 'red', 'pink', 'purple'
    const colours = ["#5AC7D2", "#C8F165", "#FFDF59", "#FE574F", "#F178B8", "#986CDE"];

    // 'Electric', 'Classic', 'Round', 'Boxy', 'Sport', 'Vintage'
    // const models = ['Electric', 'Classic', 'Round', 'Boxy', 'Sport', 'Vintage'];

    const rotation = section === 4 ? [-0.1, 0, 0] : [-0.04, -0.6, 0];
    const scaleValue = 0.75;

    return (

        <PresentationControls speed={1.5} polar={[-0.1, Math.PI / 4]} rotation={rotation}>

            <Stage environment={null} intensity={0.6} shadows="false" >

                <Environment files={city} />

                <EVTop scale={scaleValue} colour={colours[topColour]} visible={topModel === 0} />
                <EVBottom scale={scaleValue} colour={colours[bodyColour]} visible={bodyModel === 0} showLicense={showLicense} license ={license}/>
                <EVWheels scale={scaleValue} visible={wheelModel === 0} />

                <ClassicTop scale={scaleValue} colour={colours[topColour]} visible={topModel === 1} />
                <ClassicBottom scale={scaleValue} colour={colours[bodyColour]} visible={bodyModel === 1} showLicense={showLicense} license ={license}/>
                <ClassicWheels scale={scaleValue} visible={wheelModel === 1} />

                <RoundTop scale={scaleValue} colour={colours[topColour]} visible={topModel === 2} />
                <RoundBottom scale={scaleValue} colour={colours[bodyColour]} visible={bodyModel === 2} showLicense={showLicense} license ={license}/>
                <RoundWheels scale={scaleValue} visible={wheelModel === 2} />

                <BoxyTop scale={scaleValue} colour={colours[topColour]} visible={topModel === 3} />
                <BoxyBottom scale={scaleValue} colour={colours[bodyColour]} visible={bodyModel === 3} showLicense={showLicense} license ={license}/>
                <BoxyWheels scale={scaleValue} visible={wheelModel === 3} />

                <SportTop scale={scaleValue} colour={colours[topColour]} visible={topModel === 4} />
                <SportBottom scale={scaleValue} colour={colours[bodyColour]} visible={bodyModel === 4} showLicense={showLicense} license ={license}/>
                <SportWheels scale={scaleValue} visible={wheelModel === 4} />

                <VintageTop scale={scaleValue} colour={colours[topColour]} visible={topModel === 5} />
                <VintageBottom scale={scaleValue} colour={colours[bodyColour]} visible={bodyModel === 5} showLicense={showLicense} license ={license}/>
                <VintageWheels scale={scaleValue} visible={wheelModel === 5} />

                


            </Stage>


        </PresentationControls>

    );
}

export default Configurator;