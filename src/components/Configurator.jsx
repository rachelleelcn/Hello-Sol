import { useRef } from 'react';
import { Environment, PresentationControls, Stage } from "@react-three/drei";
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
            <Stage environment={null} intensity={0.6} shadows="false">

                <Environment files={city} />

                {topModel === 0 && (
                    <EVTop scale={scaleValue} colour={colours[topColour]} />
                )}

                {bodyModel === 0 && (
                    <EVBottom scale={scaleValue} colour={colours[bodyColour]} />
                )}

                {wheelModel === 0 && (
                    <EVWheels scale={scaleValue} />
                )}

                {topModel === 1 && (
                    <ClassicTop scale={scaleValue} colour={colours[topColour]} />
                )}

                {bodyModel === 1 && (
                    <ClassicBottom scale={scaleValue} colour={colours[bodyColour]} />
                )}

                {wheelModel === 1 && (
                    <ClassicWheels scale={scaleValue} />
                )}

                {/* {topModel === 2 && (
                    <RoundTop scale={scaleValue} colour={colours[topColour]} />
                )}

                {bodyModel === 2 && (
                    <RoundBottom scale={scaleValue} colour={colours[bodyColour]} />
                )}

                {wheelModel === 2 && (
                    <RoundWheels scale={scaleValue} />
                )} */}

                {topModel === 3 && (
                    <BoxyTop scale={scaleValue} colour={colours[topColour]} />
                )}

                {bodyModel === 3 && (
                    <BoxyBottom scale={scaleValue} colour={colours[bodyColour]} />
                )}

                {wheelModel === 3 && (
                    <BoxyWheels scale={scaleValue} />
                )}

                {topModel === 4 && (
                    <SportTop scale={scaleValue} colour={colours[topColour]} />
                )}

                {bodyModel === 4 && (
                    <SportBottom scale={scaleValue} colour={colours[bodyColour]} />
                )}

                {wheelModel === 4 && (
                    <SportWheels scale={scaleValue} />
                )}

                {/* {topModel === 5 && (
                    <VintageTop scale={scaleValue} colour={colours[topColour]} />
                )}

                {bodyModel === 5 && (
                    <VintageBottom scale={scaleValue} colour={colours[bodyColour]} />
                )}

                {wheelModel === 5 && (
                    <VintageWheels scale={scaleValue} />
                )} */}



            </Stage>

        </PresentationControls>

    );
}

export default Configurator;