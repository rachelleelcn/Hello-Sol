import { useRef } from 'react';
import { PresentationControls, Stage } from "@react-three/drei";
import EVTop from "../models/EVTop";
import EVBottom from "../models/EVBottom";
import EVWheels from "../models/EVWheels";

const Configurator = ({ topColour, topModel, bodyColour, bodyModel, wheelModel, section, license, showLicense}) => {
    // 'blue', 'green', 'yellow', 'red', 'pink', 'purple'
    const colours = ["#5AC7D2", "#C8F165", "#FFDF59", "#FE574F", "#F178B8", "#986CDE"];
    // 'Electric', 'Classic', 'Round', 'Boxy', 'Sport', 'Vintage'
    // const models = ['Electric', 'Classic', 'Round', 'Boxy', 'Sport', 'Vintage'];

    const rotation = section === 4 ? [-0.1, 0, 0] : [0.1, -0.6, 0];

    return (

        <PresentationControls speed={1.5} polar={[-0.2, Math.PI / 4]} rotation={rotation}>
            <Stage environment="city" intensity={0.6} shadows="false">

                {topModel === 0 && (
                    <EVTop scale="1" colour={colours[topColour]}/>
                )}

                {bodyModel === 0 && (
                    <EVBottom scale="1" colour={colours[bodyColour]} showLicense={showLicense} license ={license}/>
                )}

                {wheelModel === 0 && (
                    <EVWheels scale="1"/>
                )}

            </Stage>

        </PresentationControls>

    );
}

export default Configurator;