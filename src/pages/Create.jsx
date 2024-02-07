import { useNavigate } from 'react-router-dom';
import { Suspense, useEffect, useState } from "react"
import license_icon from "../assets/icons/license.png";
import download_icon from "../assets/icons/download.png";
import share_icon from "../assets/icons/share.png";
import geo_icon from "../assets/icons/geo.png";
import close_icon from "../assets/icons/close.png";
import Loader from "../components/Loader"
import { Canvas } from "@react-three/fiber"
import Configurator from '../components/Configurator';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, XIcon, WhatsappIcon } from 'react-share';
// import { Storage } from '@google-cloud/storage';


const Create = () => {

  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [topColour, setTopColour] = useState(0);
  const [topModel, setTopModel] = useState(0);
  const [bodyColour, setBodyColour] = useState(0);
  const [bodyModel, setBodyModel] = useState(0);
  const [wheelModel, setWheelModel] = useState(0);
  const [name, setName] = useState('');
  const [license, setLicense] = useState('');
  const [showNameValidate, setShowNameValidate] = useState(false);
  const [nameValidateMsg, setNameValidateMsg] = useState('x');
  const [showLicenseValidate, setShowLicenseValidate] = useState(false);
  const [licenseValidateMsg, setLicenseValidateMsg] = useState('x');
  const [showLeaveGeo, setShowLeaveGeo] = useState(false);
  const [showImageShare, setShowImageShare] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [shareUrl, setShareUrl] = useState(null);


  const generateImage = () => {
    return new Promise((resolve) => {
      const existingCanvas = document.querySelector('canvas');
      const newCanvas = document.createElement('canvas');
      newCanvas.width = 1200;
      newCanvas.height = 1400;
      const newContext = newCanvas.getContext('2d');

      // background color
      newContext.fillStyle = '#F1F1F1';
      newContext.fillRect(0, 0, newCanvas.width, newCanvas.height);

      // add existing canvas to new
      const existingCanvasScale = 1.2;
      const existingCanvasX = (newCanvas.width - existingCanvas.width * existingCanvasScale) / 2;
      const existingCanvasY = (newCanvas.height - existingCanvas.height * existingCanvasScale) / 2;
      newContext.drawImage(existingCanvas, existingCanvasX, existingCanvasY, existingCanvas.width * existingCanvasScale, existingCanvas.height * existingCanvasScale);

      // text / image
      const image = new Image();
      image.src = geo_icon;
      image.onload = function () {
        newContext.fillStyle = 'black';
        newContext.font = 'bold 64px Inter';
        newContext.fillText('The rarest Geo of all,', 48, 120);
        newContext.font = '64px Inter';
        newContext.fillText(`${name}’s Geo`, 48, 196);
        newContext.fillRect(48, newCanvas.height - 108, newCanvas.width - 96, 1);
        newContext.font = 'bold 28px Inter';
        newContext.fillText('Hello-Sol', 48, newCanvas.height - 48);
        newContext.font = '28px Inter';
        const nameText = `by ${name}`;
        const nameTextWidth = newContext.measureText(nameText).width;
        newContext.fillText(nameText, newCanvas.width - nameTextWidth - 48, newCanvas.height - 48);
        const imageHeight = 26;
        const imageAspectRatio = image.width / image.height;
        const imageWidth = imageHeight * imageAspectRatio;
        newContext.drawImage(image, newCanvas.width - nameTextWidth - 48 - imageWidth - 12, newCanvas.height - 48 - imageHeight + 8, imageWidth, imageHeight);

        resolve(newCanvas);
      };
    });

  };

  const downloadImage = async () => {
    const newCanvas = await generateImage();
    const imageUrl = newCanvas.toDataURL('image/png');

    // trigger download
    const link = document.createElement('a');
    link.setAttribute('download', 'canvas.png');
    link.setAttribute('href', imageUrl.replace('image/png', 'image/octet-stream'));
    link.click();
  };

  const shareImage = async () => {
    const newCanvas = await generateImage();
    const imageUrl = newCanvas.toDataURL('image/png');
    setImageUrl(imageUrl);

    // create blob
    const blob = await (await fetch(imageUrl)).blob();
    const blobUrl = URL.createObjectURL(blob);
    setShareUrl(blobUrl);
    setShowImageShare(true);

  }


  const leaveToGeo = () => {
    setShowLeaveGeo(false);
    navigate('/Hello-Sol/geo');
  };

  const goNextSection = () => {
    setCurrentSection(currentSection + 1);
    nameValidate(0);
    licenseValidate(0);
  };
  const goPrevSection = () => {
    setCurrentSection(currentSection - 1);
    nameValidate(0);
    licenseValidate(0);
  };
  const toggleTab = (index) => {
    setActiveTab(index);
  };
  const selectTopColour = (index) => {
    setTopColour(index);
  };
  const selectTopModel = (index) => {
    setTopModel(index);
  };
  const selectBodyColour = (index) => {
    setBodyColour(index);
  };
  const selectBodyModel = (index) => {
    setBodyModel(index);
  };
  const selectWheelModel = (index) => {
    setWheelModel(index);
  };
  const nameValidate = (index) => {
    if (index === 1) {
      setNameValidateMsg('Name required.');
      setShowNameValidate(true);
    } else if (index === 2) {
      setNameValidateMsg('Maximum 20 characters.');
      setShowNameValidate(true);
    } else {
      setNameValidateMsg('x');
      setShowNameValidate(false);
    }
  }
  const licenseValidate = (index) => {
    if (index === 1) {
      setLicenseValidateMsg('Message required.');
      setShowLicenseValidate(true);
    } else if (index === 2) {
      setLicenseValidateMsg('Maximum 8 characters.');
      setShowLicenseValidate(true);
    } else {
      setLicenseValidateMsg('x');
      setShowLicenseValidate(false);
    }
  }

  const tabWidth = 113;
  const tabOffset = activeTab * tabWidth;

  const colours = ['blue', 'green', 'yellow', 'red', 'pink', 'purple'];
  const models = ['Electric', 'Classic', 'Round', 'Boxy', 'Sport', 'Vintage'];

  // for testing
  // const divElement = document.getElementById('test');
  // const width = divElement.offsetWidth;
  // const height = divElement.offsetHeight;
  // console.log("Width: " + width + ", Height: " + height);

  return (
    <section className='w-full h-screen relative bg-white-200 download'>

      {currentSection > 1 && currentSection < 6 && (
        <div className="w-2/3 h-screen relative pb-20 pl-10" >
          <Canvas style={{ background: '#F1F1F1' }} >
            <Suspense fallback={<Loader />}>
              <Configurator
                topColour={topColour}
                topModel={topModel}
                bodyColour={bodyColour}
                bodyModel={bodyModel}
                wheelModel={wheelModel}
                section={currentSection}
              />
            </Suspense>
          </Canvas>
        </div>
      )}

      {currentSection === 6 && (
        <div className="w-full h-screen relative pb-20 pl-10" >
          <Canvas style={{ background: '#F1F1F1' }} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<Loader />}>
              <Configurator
                topColour={topColour}
                topModel={topModel}
                bodyColour={bodyColour}
                bodyModel={bodyModel}
                wheelModel={wheelModel}
                section={currentSection}
              />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* HTML */}
      {/* P1 */}
      <div style={{ transition: 'opacity 0.2s', opacity: currentSection === 1 ? 1 : 0, pointerEvents: currentSection === 1 ? 'auto' : 'none' }}>
        <div className="w-96 text-center font-inter" style={{ position: 'fixed', top: '23%', left: '50%', transform: `translate(-50%,-50%)` }}>
          <div className="text-3xl font-bold pb-4">Welcome to Geo-Creator</div>
          <div className="text-sm">Mix and match with our signature models to create and share your very own custom Geo-Sol.</div>
        </div>
        <button className='rounded-full bg-black-200 items-center justify-center flex'
          style={{ position: 'fixed', bottom: '14%', left: '50%', transform: `translate(-50%,-50%)` }} onClick={goNextSection}>
          <div className="text-sm font-inter py-3 px-6 text-white-100">Create your dream Geo</div>
        </button>
      </div>

      {/* P2 */}
      <div className="w-[404px] font-inter text-center grid place-items-center" style={{ position: 'fixed', top: '50%', right: '8%', transform: 'translateY(-50%)', transition: 'opacity 0.2s', opacity: currentSection === 2 ? 1 : 0, pointerEvents: currentSection === 2 ? 'auto' : 'none' }}>
        <div className="pb-4">Create your dream Geo</div>
        <div className="text-3xl font-bold pb-14">Tell us your name.</div>
        <input
          className="border-b border-black-200 placeholder-grey-100 focus:outline-none bg-transparent text-center text-2xl p-2 w-80"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => {
            const value = e.target.value.slice(0, 20);
            setName(value);
            if (value.length === 20) {
              nameValidate(2);
            } else {
              nameValidate(0);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              name === '' ? nameValidate(1) : goNextSection();
            }
          }}
        />
        <div className={`text-sm mt-2 mb-14 ${showNameValidate ? 'text-pink-100' : 'text-transparent'}`} style={{ userSelect: showNameValidate ? 'text' : 'none' }}>
          {nameValidateMsg}
        </div>
        <button className='w-40 rounded-full bg-black-200 items-center justify-center flex' onClick={() => name === '' ? nameValidate(1) : goNextSection()}>
          <div className="text-sm font-inter py-3 px-6 text-white-100">Next</div>
        </button>
      </div>


      {/* P3 */}
      <div className="font-inter" style={{ position: 'fixed', top: '50%', right: '8%', transform: 'translateY(-50%)', opacity: currentSection === 3 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: currentSection === 3 ? 'auto' : 'none' }}>
        <div className="pl-4 pb-2 text-sm">Creating {name}’s dream Geo...</div>
        <div className="w-[404px] h-[545px] outline outline-1 rounded-3xl p-6 flex flex-col">

          <div className="rounded-full outline outline-1 p-2 relative mb-4">
            <div className="flex items-center justify-between absolute inset-0 p-2 z-10">

              <button className={`text-xs w-1/3 h-8 rounded-full ${activeTab === 0 ? 'text-white-100' : 'text-black-100'}`} onClick={() => toggleTab(0)}>Top</button>
              <button className={`text-xs w-1/3 h-8 rounded-full ${activeTab === 1 ? 'text-white-100' : 'text-black-100'}`} onClick={() => toggleTab(1)}>Body</button>
              <button className={`text-xs w-1/3 h-8 rounded-full ${activeTab === 2 ? 'text-white-100' : 'text-black-100'}`} onClick={() => toggleTab(2)}>Wheels</button>
            </div>
            <div className="w-1/3 h-8 bg-black-200 rounded-full transition-transform" style={{ transform: `translateX(${tabOffset}px)` }}></div>
          </div>

          {activeTab === 0 && (
            <div className="flex-grow">
              <div className="font-bold text-base pb-2.5">1/3 Top</div>

              <div className="text-xs pb-1.5">Colour</div>
              <div className="flex gap-2.5 pb-3">
                <button className="relative" onClick={() => selectTopColour(0)}>
                  <div className={`w-12 h-12 bg-white-100 rounded-full ${topColour === 0 ? 'border border-solid border-black-200' : ''}`} />
                  <div className=" bg-blue-100 rounded-full absolute inset-0 m-2" />
                </button>
                <button className="relative" onClick={() => selectTopColour(1)}>
                  <div className={`w-12 h-12 bg-white-100 rounded-full ${topColour === 1 ? 'border border-solid border-black-200' : ''}`} />
                  <div className=" bg-green-100 rounded-full absolute inset-0 m-2" />
                </button>
                <button className="relative" onClick={() => selectTopColour(2)}>
                  <div className={`w-12 h-12 bg-white-100 rounded-full ${topColour === 2 ? 'border border-solid border-black-200' : ''}`} />
                  <div className=" bg-yellow-100 rounded-full absolute inset-0 m-2" />
                </button>
                <button className="relative" onClick={() => selectTopColour(3)}>
                  <div className={`w-12 h-12 bg-white-100 rounded-full ${topColour === 3 ? 'border border-solid border-black-200' : ''}`} />
                  <div className=" bg-red-100 rounded-full absolute inset-0 m-2" />
                </button>
                <button className="relative" onClick={() => selectTopColour(4)}>
                  <div className={`w-12 h-12 bg-white-100 rounded-full ${topColour === 4 ? 'border border-solid border-black-200' : ''}`} />
                  <div className=" bg-pink-100 rounded-full absolute inset-0 m-2" />
                </button>
                <button className="relative" onClick={() => selectTopColour(5)}>
                  <div className={`w-12 h-12 bg-white-100 rounded-full ${topColour === 5 ? 'border border-solid border-black-200' : ''}`} />
                  <div className=" bg-purple-100 rounded-full absolute inset-0 m-2" />
                </button>
              </div>

              <div className="text-xs pb-1.5">Model</div>
              <div className="grid grid-rows-2 grid-cols-3 gap-2.5 pb-6">
                <button className="relative text-[10px]" onClick={() => selectTopModel(0)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${topModel === 0 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Electric</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectTopModel(1)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${topModel === 1 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Classic</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectTopModel(2)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${topModel === 2 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Round</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectTopModel(3)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${topModel === 3 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Boxy</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectTopModel(4)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${topModel === 4 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Sport</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectTopModel(5)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${topModel === 5 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Vintage</div>
                </button>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="flex-grow">
              <div className="font-bold text-base pb-2.5">2/3 Body</div>

              <div className="text-xs pb-1.5">Colour</div>
              <div className="flex gap-2.5 pb-3">
                <button className="relative" onClick={() => selectBodyColour(0)}>
                  <div className={`w-12 h-12 bg-white-100 rounded-full ${bodyColour === 0 ? 'border border-solid border-black-200' : ''}`} />
                  <div className=" bg-blue-100 rounded-full absolute inset-0 m-2" />
                </button>
                <button className="relative" onClick={() => selectBodyColour(1)}>
                  <div className={`w-12 h-12 bg-white-100 rounded-full ${bodyColour === 1 ? 'border border-solid border-black-200' : ''}`} />
                  <div className=" bg-green-100 rounded-full absolute inset-0 m-2" />
                </button>
                <button className="relative" onClick={() => selectBodyColour(2)}>
                  <div className={`w-12 h-12 bg-white-100 rounded-full ${bodyColour === 2 ? 'border border-solid border-black-200' : ''}`} />
                  <div className=" bg-yellow-100 rounded-full absolute inset-0 m-2" />
                </button>
                <button className="relative" onClick={() => selectBodyColour(3)}>
                  <div className={`w-12 h-12 bg-white-100 rounded-full ${bodyColour === 3 ? 'border border-solid border-black-200' : ''}`} />
                  <div className=" bg-red-100 rounded-full absolute inset-0 m-2" />
                </button>
                <button className="relative" onClick={() => selectBodyColour(4)}>
                  <div className={`w-12 h-12 bg-white-100 rounded-full ${bodyColour === 4 ? 'border border-solid border-black-200' : ''}`} />
                  <div className=" bg-pink-100 rounded-full absolute inset-0 m-2" />
                </button>
                <button className="relative" onClick={() => selectBodyColour(5)}>
                  <div className={`w-12 h-12 bg-white-100 rounded-full ${bodyColour === 5 ? 'border border-solid border-black-200' : ''}`} />
                  <div className=" bg-purple-100 rounded-full absolute inset-0 m-2" />
                </button>
              </div>

              <div className="text-xs pb-1.5">Model</div>
              <div className="grid grid-rows-2 grid-cols-3 gap-2.5 pb-6">
                <button className="relative text-[10px]" onClick={() => selectBodyModel(0)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${bodyModel === 0 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Electric</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectBodyModel(1)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${bodyModel === 1 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Classic</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectBodyModel(2)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${bodyModel === 2 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Round</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectBodyModel(3)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${bodyModel === 3 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Boxy</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectBodyModel(4)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${bodyModel === 4 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Sport</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectBodyModel(5)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${bodyModel === 5 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Vintage</div>
                </button>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="flex-grow">
              <div className="font-bold text-base pb-2.5">3/3 Wheels</div>

              <div className="text-xs pb-1.5">Model</div>
              <div className="grid grid-rows-2 grid-cols-3 gap-2.5 pb-6">
                <button className="relative text-[10px]" onClick={() => selectWheelModel(0)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${wheelModel === 0 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Electric</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectWheelModel(1)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${wheelModel === 1 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Classic</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectWheelModel(2)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${wheelModel === 2 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Round</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectWheelModel(3)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${wheelModel === 3 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Boxy</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectWheelModel(4)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${wheelModel === 4 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Sport</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectWheelModel(5)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${wheelModel === 5 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-grey-100 rounded-xl absolute inset-0 m-2 mb-6" />
                  <div className="absolute inset-0 mt-[76px]">Vintage</div>
                </button>
              </div>
            </div>
          )}

          <hr className="border-black-100 border-t" />
          <div className="flex items-center justify-center pt-6">
            <button className="underline underline-offset-4 text-sm  px-4 mr-6" onClick={goPrevSection}>Back</button>
            <button className='w-full rounded-full bg-black-200 items-center justify-center flex' onClick={goNextSection}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  goNextSection();
                }
              }}>
              <div className="text-sm font-inter py-3 px-6 text-white-100">Next</div>
            </button>
          </div>
        </div>
      </div>

      {/* P4 */}
      <div className="w-[404px] font-inter text-center grid place-items-center" style={{ position: 'fixed', top: '50%', right: '8%', transform: 'translateY(-50%)', opacity: currentSection === 4 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: currentSection === 4 ? 'auto' : 'none' }}>
        <div className="pb-4">Creating {name}’s dream Geo...</div>
        <div className="text-3xl font-bold pb-14">Design your license plate</div>
        <input
          className="border-b border-black-200 placeholder-grey-100 focus:outline-none bg-transparent text-center text-2xl p-2 w-80"
          type="text"
          placeholder="Your message"
          value={license}
          onChange={(e) => {
            const value = e.target.value.slice(0, 8).toUpperCase();
            setLicense(value);
            if (value.length === 8) {
              licenseValidate(2);
            } else {
              licenseValidate(0);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              license === '' ? licenseValidate(1) : goNextSection();
            }
          }}
        />
        <div className={`text-sm mt-2 mb-14 ${showLicenseValidate ? 'text-pink-100' : 'text-transparent'}`} style={{ userSelect: showLicenseValidate ? 'text' : 'none' }}>
          {licenseValidateMsg}
        </div>
        <div className="flex">
          <button className="underline underline-offset-4 text-sm px-4 mr-6" onClick={goPrevSection}>Back</button>
          <button className='w-40 rounded-full bg-black-200 items-center justify-center flex' onClick={() => license === '' ? licenseValidate(1) : goNextSection()}>
            <div className="text-sm font-inter py-3 px-6 text-white-100">Next</div>
          </button>
        </div>
      </div>

      {/* P5 */}
      <div className="font-inter" style={{ position: 'fixed', top: '50%', right: '8%', transform: 'translateY(-50%)', opacity: currentSection === 5 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: currentSection === 5 ? 'auto' : 'none' }}>
        <div className="pl-4 pb-2 text-sm text-transparent">Creating {name}’s dream Geo...</div>
        <div id="test" className="w-[404px] h-[545px] outline outline-1 rounded-3xl p-6 flex flex-col">

          <div className="flex-grow">

            <div className="text-xl font-bold mt-0">{name}’s</div>
            <div className="pb-3 text-xl font-bold mt-[-2px]">dream Geo summary</div>

            <div className="text-xs pb-1">1/4 Top</div>
            <div className="relative w-full mb-3.5">
              <div className="h-[54px] bg-white-100 rounded-2xl border border-solid border-black-200" />
              <div className="absolute inset-0 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-grey-100 w-14 h-[38px] rounded-xl m-2" />
                  <div className="text-xs font-bold ml-1">{models[topModel]}</div>
                </div>
                <div className={`bg-${colours[topColour]}-100 w-8 h-8 rounded-full m-2 mr-3`} />
              </div>
            </div>
            <div className="text-xs pb-1">2/4 Body</div>
            <div className="relative w-full mb-3.5">
              <div className="h-[54px] bg-white-100 rounded-2xl border border-solid border-black-200" />
              <div className="absolute inset-0 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-grey-100 w-14 h-[38px] rounded-xl m-2" />
                  <div className="text-xs font-bold ml-1">{models[bodyModel]}</div>
                </div>
                <div className={`bg-${colours[bodyColour]}-100 w-8 h-8 rounded-full m-2 mr-3`} />
              </div>
            </div>
            <div className="text-xs pb-1">3/4 Wheels</div>
            <div className="relative w-full mb-3.5">
              <div className="h-[54px] bg-white-100 rounded-2xl border border-solid border-black-200" />
              <div className="absolute inset-0 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-grey-100 w-14 h-[38px] rounded-xl m-2" />
                  <div className="text-xs font-bold ml-1">{models[wheelModel]}</div>
                </div>
              </div>
            </div>
            <div className="text-xs pb-1">4/4 License plate</div>
            <div className="relative w-full mb-3">
              <div className="h-[54px] bg-white-100 rounded-2xl border border-solid border-black-200" />
              <div className="absolute inset-0 flex justify-between items-center">
                <div className="flex items-center">
                  <img src={license_icon} alt='license-icon' className='m-4 w-10 object-contain' />
                  <div className="text-xs font-bold ml-1">{license}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <hr className="border-black-100 border-t" />
            <div className="flex items-center justify-center pt-6">
              <button className="underline underline-offset-4 text-sm  px-4 mr-6" onClick={goPrevSection}>Back</button>
              <button className='w-full rounded-full bg-black-200 items-center justify-center flex' onClick={goNextSection}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    goNextSection();
                  }
                }}>
                <div className="text-sm font-inter py-3 px-6 text-white-100">Confirm</div>
              </button>
            </div>
          </div>

        </div>
      </div>


      {/* P6 */}
      <div style={{ opacity: currentSection === 6 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: currentSection === 6 ? 'auto' : 'none' }}>
        <div style={{ position: 'fixed', top: '15%', left: '8%' }}>
          <div className="text-4xl font-bold font-inter mb-1">
            The rarest Geo of all,
          </div>
          <div className="text-4xl font-inter pb-6">
            {name}’s Geo
          </div>

          <div className="flex">
            <button className='w-52 rounded-full outline outline-1 flex items-center p-4 justify-center mr-3' onClick={downloadImage}>
              <img src={download_icon} alt='download-icon' className='w-5 object-contain' />
              <div className="font-inter pl-3 mr-2">Download image</div>
            </button>
            <button className="w-14 h-14 rounded-full outline outline-1 flex items-center justify-center" onClick={shareImage}>
              <img src={share_icon} alt='share-icon' className='w-6 object-contain mr-1' />
            </button>
          </div>

          <div className="w-56 text-base text-grey-100 font-inter mt-20">
            Visit Geo.com to learn more about our <button className="underline underline-offset-4" onClick={() => setShowLeaveGeo(true)}> models and prices</button>.
          </div>
        </div>

        <div style={{ position: 'fixed', bottom: '20%', right: '4%' }}>
          <div className="outline outline-1 rounded-3xl p-8">
            <div className="w-64 text-xl font-bold font-inter leading-6 pb-2">
              Play to win a free Geo-Energy portable charger!
            </div>
            <div className="w-64 text-sm font-inter pb-4">
              Put your Geo to the test, play to enter today’s giveaway.
            </div>
            <button className='rounded-full bg-black-200 items-center justify-center flex' onClick={() => navigate('/Hello-Sol/play')}>
              <div className="text-sm font-inter py-2.5 px-6 text-white-100">Start playing</div>
            </button>
          </div>
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

      {/* PopUp - Image Share*/}
      <div style={{ transition: 'opacity 0.2s', opacity: showImageShare === true ? 1 : 0, pointerEvents: showImageShare === true ? 'auto' : 'none' }}>
        <div className="fixed inset-0 bg-black-100 opacity-40 z-10"></div>
        <div className="font-inter outline outline-1 rounded-3xl p-10 w-96 bg-white-200 z-20" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-54%)` }}>
          <button className="p-2 absolute top-6 right-6" onClick={() => setShowImageShare(false)}>
            <img src={close_icon} alt='close-icon' className='w-4 object-contain' />
          </button>
          <img className="outline outline-1 w-24" src={imageUrl} alt="Your Image" />
          <div className="font-bold text-2xl mb-2">Share your creation!</div>
          <div className="text-sm mb-4">Share this image via</div>
          <WhatsappShareButton separator={'\n'} url={shareUrl} title="Thank you for visiting Hello-Sol. Here is your geo!" windowHeight={700} windowWidth={1000}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <div className="text-sm mb-8">Or copy link</div>
        </div>
      </div>





    </section>

  )
}

export default Create