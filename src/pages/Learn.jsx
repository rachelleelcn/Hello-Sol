/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import { useNavigate } from 'react-router-dom';
import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import Loader from "../components/Loader"
// import { OrbitControls } from "@react-three/drei"
// import RCar from "../models/RCar"
import { Scroll, ScrollControls, useScroll } from "@react-three/drei"
import RCar from "../models/RCar"
import go_icon from "../assets/icons/go.png";



const Learn = () => {

  const navigate = useNavigate();
  const [scrollValue, setScrollValue] = useState(0);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4a, setShow4a] = useState(false);
  const [show4b, setShow4b] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);
  const [showLeaveGeo, setShowLeaveGeo] = useState(false);

  const leaveToGeo = () => {
    setShowLeaveGeo(false);
    navigate('/Hello-Sol/geo');
  };

  const handleScroll = (value) => {
    setScrollValue(value);
  }
  console.log(scrollValue);


  useEffect(() => {
    if (scrollValue < 0.02) {
      setShow1(true);
    } else {
      setShow1(false);
    }
    if (scrollValue > 0.05 && scrollValue < 0.085) {
      setShow2(true);
    } else {
      setShow2(false);
    }
    if (scrollValue > 0.105 && scrollValue < 0.14) {
      setShow3(true);
    } else {
      setShow3(false);
    }
    if (scrollValue > 0.17 && scrollValue < 0.27) {
      setShow4a(true);
    } else {
      setShow4a(false);
    }
    if (scrollValue > 0.21 && scrollValue < 0.27) {
      setShow4b(true);
    } else {
      setShow4b(false);
    }
    if (scrollValue > 0.32 && scrollValue < 0.37) {
      setShow5(true);
    } else {
      setShow5(false);
    }
    if (scrollValue > 0.45 && scrollValue < 0.545) {
      setShow6(true);
    } else {
      setShow6(false);
    }
    if (scrollValue > 0.49 && scrollValue < 0.545) {
      setShow7(true);
    } else {
      setShow7(false);
    }
    if (scrollValue > 0.63 && scrollValue < 0.725) {
      setShow8(true);
    } else {
      setShow8(false);
    }
    if (scrollValue > 0.81 && scrollValue < 0.91) {
      setShow9(true);
    } else {
      setShow9(false);
    }
    if (scrollValue > 0.85 && scrollValue < 0.91) {
      setShow10(true);
    } else {
      setShow10(false);
    }
    if (scrollValue > 0.995) {
      setShow11(true);
    } else {
      setShow11(false);
    }

  }, [scrollValue]);


  return (

    <section className='w-full h-screen relative bg-white-200'>

      {/* HTML behind Canvas */}

      {/* P2 */}
      <div className="w-56" style={{ position: 'fixed', top: '20%', right: '15%', opacity: show2 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: show2 ? 'auto' : 'none' }}>
        <div className="text-base font-bold font-inter pb-1">
          It’s simple.
        </div>
        <div className="text-sm font-inter">
          Geo’s signature sleek, clean, and minimalist design with a twist...
        </div>
      </div>

      {/* P3 */}
      <div className="w-56" style={{ position: 'fixed', top: '40%', left: '15%', opacity: show3 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: show3 ? 'auto' : 'none' }}>
        <div className="text-base font-bold font-inter pb-1">
          It’s all-electric.
        </div>
        <div className="text-sm font-inter">
          For a smooth, quiet, and comfortable ride.
        </div>
      </div>

      {/* P4a+b */}
      <div className="" style={{ position: 'fixed', bottom: '22%', left: '50%', transform: `translate(-50%,-50%)`, opacity: show4a ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: show4a ? 'auto' : 'none' }}>
        <div className="flex gap-2">
          <div className="text-xl font-inter">
            It’s where
          </div>
          <div className="flex gap-0" style={{ opacity: show4b ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: show4b ? 'auto' : 'none' }}>
            <div className="text-xl font-bold font-inter underline underline-offset-8">geometric meets electric</div>
            <div className="text-xl font-inter">.</div>
          </div>
        </div>
      </div>

      {/* P5 */}
      <div className="w-96 text-center" style={{ position: 'fixed', bottom: '15%', left: '50%', transform: `translate(-50%,-50%)`, opacity: show5 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: show5 ? 'auto' : 'none' }}>
        <div className="text-2xl font-bold font-inter pb-1.5">
          Smaller than ever.
        </div>
        <div className="text-sm font-inter">
          Small but mighty! The Geo-Sol can maneuver through tight spaces, helping you save time and space on parking.
        </div>
      </div>

      {/* P6 */}
      <div className="" style={{ position: 'fixed', top: '53%', left: '50%', transform: `translate(${show6 ? '-49.8%' : '100%'}, -50%)`, opacity: show6 ? 1 : 0, transition: 'transform 0.5s, opacity 0.2s', pointerEvents: show6 ? 'auto' : 'none' }}>
        <div className="vroom font-bold font-inter text-yellow-100">
          Vrooom!!
        </div>
      </div>

      {/* P7 */}
      <div className="w-72" style={{ position: 'fixed', top: '25%', left: '20%', opacity: show7 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: show7 ? 'auto' : 'none' }}>
        <div className="text-2xl font-bold font-inter pb-1.5">
          Faster than ever.
        </div>
        <div className="text-sm font-inter">
          Accelerate in an instant. The Geo-Sol can reach up to 100 km/hr in 5 seconds.
        </div>
      </div>

      {/* P8 */}
      <div className="w-96" style={{ position: 'fixed', bottom: '30%', right: '20%', opacity: show8 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: show8 ? 'auto' : 'none' }}>
        <div className="text-2xl font-bold font-inter pb-1.5">
          Greener than ever.
        </div>
        <div className="text-sm font-inter">
          Powered by solar energy and ethically sourced high voltage lithium-ion batteries, the Geo-Sol is a zero-emission vehicle.
        </div>
      </div>

      {/* P9 */}
      <div className="w-72" style={{ position: 'fixed', top: '15%', left: '10%', opacity: show9 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: show9 ? 'auto' : 'none' }}>
        <div className="text-2xl font-bold font-inter pb-1.5">
          Easier than ever.
        </div>
        <div className="text-sm font-inter">
          With premium features and equipment, the Geo-Sol makes driving easier.
        </div>
      </div>

      {/* P10 */}
      <div className="w-40" style={{ position: 'fixed', top: '58%', left: '15%', opacity: show10 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: show10 ? 'auto' : 'none' }}>
        <div className="w-8 h-8 rounded-full bg-grey-100 mb-2"></div>
        <div className="text-sm font-bold font-inter pb-2 underline underline-offset-8">
          Rear View Camera
        </div>
        <div className="text-xs font-inter">
          Park like a pro, the Geo-Sol has your back in 4K.
        </div>
      </div>

      <div className="w-48" style={{ position: 'fixed', top: '25%', left: '65%', opacity: show10 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: show10 ? 'auto' : 'none' }}>
        <div className="w-8 h-8 rounded-full bg-grey-100 mb-2"></div>
        <div className="text-sm font-bold font-inter pb-2 underline underline-offset-8">
          Digital dashboard
        </div>
        <div className="text-xs font-inter">
          Real-time information right behind the wheel for a focused drive.
        </div>
      </div>

      <div className="w-40" style={{ position: 'fixed', top: '58%', left: '76%', opacity: show10 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: show10 ? 'auto' : 'none' }}>
        <div className="w-8 h-8 rounded-full bg-grey-100 mb-2"></div>
        <div className="text-sm font-bold font-inter pb-2 underline underline-offset-8">
          Smart OS
        </div>
        <div className="text-xs font-inter">
          Go hands free with voice enabled actions.
        </div>
      </div>




      <Canvas className="w-full h-screen relative" camera={{ near: 0.1, far: 1000, position: [0, 0, 10], fov: 60 }} style={{ pointerEvents: 'auto' }}>
        <Suspense fallback={<Loader />}>

          <directionalLight intensity={1} position={[5, 10, 5]} />
          <ambientLight intensity={0.2} />
          <pointLight intensity={0.8} position={[-5, 5, 5]} />
          <spotLight intensity={1} position={[0, 10, 0]} angle={Math.PI / 4} penumbra={0.2} />
          <hemisphereLight intensity={0.3} skyColor="#ffffff" groundColor="#000000" />

          <ScrollControls pages={15} damping={0.1}>
            <RCar
              position={[-0.5, -3, -1]}
              rotation={[0, -0.5, 0]}
              onScroll={handleScroll}
            />
          </ScrollControls>
        </Suspense>
      </Canvas>

      {/* HTML in front of Canvas */}
      {/* P1 */}
      <div style={{ position: 'fixed', top: '15%', left: '10%', opacity: show1 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: show1 ? 'auto' : 'none' }}>
        <div className="text-5xl font-bold font-inter mb-4">
          <div className="mb-2">Hello.</div>
          <div>This is Geo-Sol.</div>
        </div>
        <div className="w-72 text-sm font-inter">
          Introducing the all-new electrifying Geo.
        </div>

      </div>
      <div style={{ position: 'fixed', top: '15%', right: '4%', opacity: show1 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: show1 ? 'auto' : 'none' }}>
        <div className="outline outline-1 rounded-3xl p-8 mb-4">
          <div className="w-64 text-xl font-bold font-inter leading-6 pb-4">
            Play daily for a chance to win a free Geo-Energy Portable Charger!
          </div>
          <button className='rounded-full outline outline-1 items-center justify-center flex' onClick={() => navigate('/Hello-Sol/play')}>
            <div className="text-sm font-inter py-2.5 px-6">Start playing</div>
          </button>
        </div>
        <div className="outline outline-1 rounded-3xl p-8">
          <div className="w-64 text-xl font-bold font-inter leading-6 pb-2">
            Create your dream Geo!
          </div>
          <div className="w-64 text-sm font-inter pb-4">
            Bring your Geo to life with Geo-Creator and see your Geo in action in Geo-Town.
          </div>
          <button className='rounded-full outline outline-1 items-center justify-center flex' onClick={() => navigate('/Hello-Sol/create')}>
            <div className="text-sm font-inter py-2.5 px-6">Start building</div>
          </button>
        </div>
      </div>

      {/* P11 */}
      <div style={{ position: 'fixed', top: '15%', left: '10%', opacity: show11 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: show11 ? 'auto' : 'none' }}>
        <div className="text-5xl font-bold font-inter mb-2">
          It’s Geo-Sol.
        </div>
        <div className="text-2xl text-grey-100 font-inter pb-5">
          Where geometric meets electric.
        </div>
        <div className='w-72 rounded-full outline outline-1 p-2 flex items-center justify-between'>
          <div className="font-inter pl-2">Visit Geo.com to learn more</div>
          <button onClick={() => setShowLeaveGeo(true)}>
            <img src={go_icon} alt='go-icon' className='w-10 object-contain' />
          </button>
        </div>
      </div>
      <div style={{ position: 'fixed', top: '15%', right: '4%', opacity: show11 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: show11 ? 'auto' : 'none' }}>
        <div className="outline outline-1 rounded-3xl p-8">
          <div className="w-64 text-xl font-bold font-inter leading-6 pb-2">
            It’s your dream car!
          </div>
          <div className="w-64 text-sm font-inter pb-4">
            Create your own custom Geo-Sol with our Geo-Creator.
          </div>
          <button className='rounded-full bg-black-200 items-center justify-center flex' onClick={() => navigate('/Hello-Sol/create')}>
            <div className="text-sm font-inter py-2.5 px-6 text-white-100">Start building</div>
          </button>
        </div>
      </div>

      {/* PopUp - Leave Geo*/}
      <div style={{ transition: 'opacity 0.2s', opacity: showLeaveGeo === true ? 1 : 0, pointerEvents: showLeaveGeo === true ? 'auto' : 'none' }}>
        <div className="fixed inset-0 bg-black-100 opacity-40 z-10"></div>
        <div className="font-inter outline outline-1 rounded-3xl p-10 w-96 bg-white-200 z-20" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-54%)` }}>
          <div className="w-12 h-12 bg-grey-100 rounded-full mb-4"></div>
          <div className="font-bold text-2xl mb-1">Leaving site...</div>
          <div className="text-sm mb-8">Progress you made may not be saved. Are you sure you want to leave this page?</div>
          <div className="flex justify-center">
            <button className="underline underline-offset-4 text-sm px-4 mr-6" onClick={() => setShowLeaveGeo(false)}>Stay</button>
            <button className='w-full rounded-full bg-black-200 items-center justify-center flex' onClick={leaveToGeo}>
              <div className="text-sm font-inter py-3 px-6 text-white-100">Let’s go!</div>
            </button>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Learn