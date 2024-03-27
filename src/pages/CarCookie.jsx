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
    <div>
      <h1>Configured Car Details</h1>
      <p>Name: {configuredCar.name}</p>
      <p>Top Model: {configuredCar.topModel}</p>
      <p>Top Colour: {configuredCar.topColour}</p>
      <p>Body Colour: {configuredCar.bodyColour}</p>
      <p>Body Model: {configuredCar.bodyModel}</p>
      <p>Wheel Model: {configuredCar.wheelModel}</p>
      <p>License Plate: {configuredCar.license}</p>
    </div>
  )
}







