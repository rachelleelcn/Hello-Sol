/* eslint-disable react/prop-types */
import { useCookies } from 'react-cookie';

import EVTop from '../models/EVTop'
import EVBottom from '../models/EVBottom'
import EVWheels from '../models/EVWheels'
import ClassicTop from '../models/ClassicTop'    
import ClassicBottom from '../models/ClassicBottom';
import ClassicWheels from '../models/ClassicWheels';
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

export function RenderCar({selectedCar}) {
  const [cookies, setCookie] = useCookies(['CAR_COOKIE']);
  const configuredCar = cookies['CAR_COOKIE'];
  
  function updateCar(newTop, newBody, newWheel, newTopColour, newBodyColour, newLicense) {
    setCookie('CAR_COOKIE', {
      ...configuredCar,
      topModel: newTop,
      bodyModel: newBody,
      wheelModel: newWheel,
      topColour: newTopColour,
      bodyColour: newBodyColour,
      license: newLicense
    });
  }

  if (selectedCar === 'configuredCar') {
      return getParts(configuredCar)
  }
  else {
    return (
        <>
          <EVTop colour={"#5AC7D2"} position={[0, -0.63, 0]} rotation-y={Math.PI} scale={0.56} />
          <EVBottom colour={"#5AC7D2"} position={[0, -0.63, 0]} rotation-y={Math.PI} scale={0.56} />
          <EVWheels colour={"#5AC7D2"} position={[0, -0.63, 0]} rotation-y={Math.PI} scale={0.56} />
        </>
      )
  }
}

// Retrive car components from cookies
function getParts(configuredCar) {
  const { topModel, bodyModel, wheelModel, topColour, bodyColour, license } = configuredCar;
  const colours = ["#5AC7D2", "#C8F165", "#FFDF59", "#FE574F", "#F178B8", "#986CDE"]
  const components = [];
  
  // Top parts
  if (topModel === 0) {
    components.push(
      <EVTop position={[0, -0.63, 0]} rotation-y={Math.PI} 
            scale={0.56} colour={colours[topColour]}/>);
  }
  else if (topModel === 1) {
    components.push(
      <ClassicTop position={[0, -0.63, 0]} rotation-y={Math.PI} 
                  scale={0.56} colour={colours[topColour]}/>)
  }
  else if (topModel === 2) {
    components.push(
      <RoundTop position={[0, -0.63, 0]} rotation-y={Math.PI} 
                  scale={0.56} colour={colours[topColour]}/>)
  }
  else if (topModel === 3) {
    components.push(
      <BoxyTop position={[0, -0.63, 0]} rotation-y={Math.PI} 
                  scale={0.56} colour={colours[topColour]}/>)
  }
  else if (topModel === 4) {
    components.push(
      <SportTop position={[0, -0.63, 0]} rotation-y={Math.PI} 
                  scale={0.56} colour={colours[topColour]}/>)
  }
  else if (topModel === 5) {
    components.push(
      <VintageTop position={[0, -0.63, 0]} rotation-y={Math.PI} 
                  scale={0.56} colour={colours[topColour]}/>)
  }

  // Body parts
  if (bodyModel === 0) {
    components.push(
      <EVBottom position={[0, -0.63, 0]} rotation-y={Math.PI} 
                scale={0.56} colour={colours[bodyColour]}
                license={license} showLicense={true} />);
  }
  else if (bodyModel === 1) {
    components.push(
      <ClassicBottom position={[0, -0.63, 0]} rotation-y={Math.PI} 
                    scale={0.56} colour={colours[bodyColour]}
                    license={license} showLicense={true} />);
  }
  else if (bodyModel === 2) {
    components.push(
      <RoundBottom position={[0, -0.63, 0]} rotation-y={Math.PI} 
                    scale={0.56} colour={colours[bodyColour]}
                    license={license} showLicense={true} />);
  }
  else if (bodyModel === 3) {
    components.push(
      <BoxyBottom position={[0, -0.63, 0]} rotation-y={Math.PI} 
                scale={0.56} colour={colours[bodyColour]}
                license={license} showLicense={true} />);
  }
  else if (bodyModel === 4) {
    components.push(
      <SportBottom position={[0, -0.63, 0]} rotation-y={Math.PI} 
                  scale={0.56} colour={colours[bodyColour]}
                  license={license} showLicense={true} />);
  }
  else if (bodyModel === 5) {
    components.push(
      <VintageBottom position={[0, -0.63, 0]} rotation-y={Math.PI} 
                    scale={0.56} colour={colours[bodyColour]}
                    license={license} showLicense={true} />);
  }

  // Wheels
  if (wheelModel === 0) {
    components.push(<EVWheels position={[0, -0.63, 0]} rotation-y={Math.PI} scale={0.56}/>);
  }
  else if (wheelModel === 1) {
    components.push(<ClassicWheels position={[0, -0.63, 0]} rotation-y={Math.PI} scale={0.56}/>);
  }
  else if (wheelModel === 2) {
    components.push(<RoundWheels position={[0, -0.63, 0]} rotation-y={Math.PI} scale={0.56}/>);
  }
  else if (wheelModel === 3) {
    components.push(<BoxyWheels position={[0, -0.63, 0]} rotation-y={Math.PI} scale={0.56}/>);
  }
  else if (wheelModel === 4) {
    components.push(<SportWheels position={[0, -0.63, 0]} rotation-y={Math.PI} scale={0.56}/>);
  }
  else if (wheelModel === 5) {
    components.push(<VintageWheels position={[0, -0.63, 0]} rotation-y={Math.PI} scale={0.56}/>);
  }

  return components;
}

