import React from 'react'
import { useCookies } from 'react-cookie';

export const CarCookie = () => {
  // Retrieve the cookie named 'CAR_COOKIE'
  const [cookies] = useCookies(['CAR_COOKIE']);

  // Access the configuredCar object from cookies
  const configuredCar = cookies['CAR_COOKIE'];

  // Check if the cookie exists and has valid data
  if (!configuredCar) {
    // Handle the case where the cookie doesn't exist or is empty
    return (
      <div>
        <p>No configured car data found.</p>
      </div>
    );
  }

  // Render the configured car data
  return (
    <group>
      {configuredCar.name}
      {configuredCar.topModel}
      {configuredCar.topColour}
      {configuredCar.bodyModel}
      {configuredCar.bodyColour}
      {configuredCar.wheelModel}
      {configuredCar.license}
    </group>

    // <div>
    //   <h1>Configured Car Details</h1>
    //   <p>Name: {configuredCar.name}</p>
    //   <p>Top Model: {configuredCar.topModel}</p>
    //   <p>Top Colour: {configuredCar.topColour}</p>
    //   <p>Body Colour: {configuredCar.bodyColour}</p>
    //   <p>Body Model: {configuredCar.bodyModel}</p>
    //   <p>Wheel Model: {configuredCar.wheelModel}</p>
    //   <p>License Plate: {configuredCar.license}</p>
    // </div>
  )
}

export const CarSelection = (configuredCar) => {
  return (
    <>
      {/* Default (EV) */}
      <button className="w-36 min-w-min h-36 rounded-3xl outline outline-1 bg-white-100 p-4 flex flex-col items-center text-center">
        <div className="w-full h-full bg-grey-100 rounded-2xl mb-2"></div>
        <div className="text-xs">Geo-Sol</div>
      </button>

      {/* Configured car */}
      <button className="w-36 min-w-min h-36 rounded-3xl bg-white-100 p-4 flex flex-col items-center text-center">
        <div className="w-full h-full bg-grey-100 rounded-2xl mb-2"></div>
        <div className="text-xs whitespace-nowrap"> {configuredCar.name} </div>
      </button>
    </>
  );
};

