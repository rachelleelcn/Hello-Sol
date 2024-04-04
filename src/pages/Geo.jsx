import { useNavigate } from 'react-router-dom';
import AllCars from '../models/AllCars';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, OrthographicCamera, PresentationControls, ScrollControls, Stage } from '@react-three/drei';
import city from "../assets/lighting/potsdamer_platz_1k.hdr";
import Charger from '../models/Charger';

const Geo = () => {
  const navigate = useNavigate();


  return (
    <section className='w-full h-screen relative bg-white-200 z-10 px-12'>

      <div className="font-inter text-center flex flex-col items-center" style={{ position: 'fixed', top: '30%', left: '50%', transform: `translateX(-50%)` }}>
        <div className="flex items-top gap-2 pr-14">
          <div className="text-grey-100 text-2xl">(not)</div>
          <div className="font-bold whitespace-nowrap text-[80px] pb-2">Coming in 2025</div>
        </div>
        <div className=''>Geo.com is under maintenance. Please come back later.</div>
      </div>

      <div style={{ position: 'fixed', bottom: '10%', left: '50%', transform: `translateX(-50%)` }}>
        <button className='w-fit rounded-full outline outline-1 items-center justify-center flex' onClick={() => navigate('/Hello-Sol/learn')}>
          <div className="text-sm font-inter py-3 px-6">Back to Hello-Sol</div>
        </button>
      </div>

 

      {/* <Canvas orthographic camera={{ zoom: 20, position: [0, 0, 200] }} className='p-10'>

        <PresentationControls speed={1.5} polar={[-0.1, Math.PI / 4]} rotation={[0, -Math.PI / 2, 0]}>

        <Stage environment={null} intensity={1} shadows={false}>

            <Environment files={city} />
            <AllCars />
            <Charger />
          </Stage>
        </PresentationControls>

      </Canvas> */}


    </section>
  )
}

export default Geo