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
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, XIcon, WhatsappIcon, PinterestShareButton, PinterestIcon, RedditShareButton, RedditIcon, } from 'react-share';
import { TextCensor, RegExpMatcher, englishDataset, englishRecommendedTransformers } from 'obscenity';

import leave_icon from "../assets/icons/leave.png";
import evTop_img from "../assets/images/ev-top.jpg";
import classicTop_img from "../assets/images/classic-top.jpg";
import roundTop_img from "../assets/images/round-top.jpg";
import boxyTop_img from "../assets/images/boxy-top.jpg";
import sportTop_img from "../assets/images/sport-top.jpg";
import vintageTop_img from "../assets/images/vintage-top.jpg";
import evBody_img from "../assets/images/ev-bottom.jpg";
import classicBody_img from "../assets/images/classic-bottom.jpg";
import roundBody_img from "../assets/images/round-bottom.jpg";
import boxyBody_img from "../assets/images/boxy-bottom.jpg";
import sportBody_img from "../assets/images/sport-bottom.jpg";
import vintageBody_img from "../assets/images/vintage-bottom.jpg";
import evTires_img from "../assets/images/ev-tires.jpg";
import classicTires_img from "../assets/images/classic-tires.jpg";
import roundTires_img from "../assets/images/round-tires.jpg";
import boxyTires_img from "../assets/images/boxy-tires.jpg";
import sportTires_img from "../assets/images/sport-tires.jpg";
import vintageTires_img from "../assets/images/vintage-tires.jpg";
import pose_icon from "../assets/icons/pose_indicator.png";
import rotate_icon from "../assets/icons/rotate_indicator.png";
import go_icon from "../assets/icons/go.png";
import cookie_icon from "../assets/icons/cookie.png";
import create_landing1 from "../assets/images/create_landing1.png";
import charger1 from "../assets/images/charger1.png";


import { useCookies } from 'react-cookie';


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
  const [showLicense, setShowLicense] = useState(false);
  const [showNameValidate, setShowNameValidate] = useState(false);
  const [nameValidateMsg, setNameValidateMsg] = useState('x');
  const [showLicenseValidate, setShowLicenseValidate] = useState(false);
  const [profanityDetected, setProfanityDetected] = useState(false);
  const [licenseValidateMsg, setLicenseValidateMsg] = useState('x');
  const [showLeaveGeo, setShowLeaveGeo] = useState(false);
  const [showCookie, setShowCookie] = useState(false);
  const [showImageShare, setShowImageShare] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [shareUrl, setShareUrl] = useState(null);

  const [cookies, setCookie] = useCookies(['CAR_COOKIE']);

  const handleCarConfirm = () => {
    const configuredCar = {
      name,
      topModel,
      topColour,
      bodyColour,
      bodyModel,
      wheelModel,
      license,
    }
    setCookie('CAR_COOKIE', configuredCar, { path: '/' });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
      const desiredWidth = 2400;
      const existingCanvasScale = desiredWidth / existingCanvas.width;
      const existingCanvasWidth = existingCanvas.width * existingCanvasScale;
      const existingCanvasHeight = existingCanvas.height * existingCanvasScale;

      const existingCanvasX = (newCanvas.width - existingCanvasWidth) / 2;
      const existingCanvasY = (newCanvas.height - existingCanvasHeight) / 2 - 32;
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
      return image
    });
  };

  const downloadImage = async () => {
    const newCanvas = await generateImage();
    const imageUrl = newCanvas.toDataURL('image/png');

    // trigger download
    const link = document.createElement('a');
    link.setAttribute('download', 'MyGeo.png');
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

  const licenseShow = (showLicense) => {
    setShowLicense(true);
    console.log('show license', showLicense);
  }

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
    } else if (index === 3) {
      setNameValidateMsg('Please refrain from using profanity.');
      setShowNameValidate(true);
    } else {
      setNameValidateMsg('x');
      setShowNameValidate(false);
    }
    console.log("nameindex:", index);
  }
  const licenseValidate = (index) => {
    if (index === 1) {
      setLicenseValidateMsg('Message required.');
      setShowLicenseValidate(true);
    } else if (index === 2) {
      setLicenseValidateMsg('Maximum 8 characters.');
      setShowLicenseValidate(true);
    } else if (index === 3) {
      setLicenseValidateMsg('Please refrain from using profanity.');
      setShowLicenseValidate(true);
    } else {
      setLicenseValidateMsg('x');
      setShowLicenseValidate(false);
    }
    console.log("licenseindex:", index);
  }

  const checkForProfanity = (inputText) => {
    const matcher = new RegExpMatcher({
      ...englishDataset.build(),
      ...englishRecommendedTransformers,
    });

    return matcher.hasMatch(inputText);

  };

  const censorText = (inputText, profanityDetected) => {
    const matcher = new RegExpMatcher({
      ...englishDataset.build(),
      ...englishRecommendedTransformers,
    });

    const censor = new TextCensor();
    const matches = matcher.getAllMatches(inputText);
    const censoredValue = censor.applyTo(inputText, matches);

    // Check for profanity in the censored value
    // const profanityDetected = matcher.hasMatch(censoredValue);

    console.log('Input Text:', inputText);
    console.log('Censored Value:', censoredValue);
    console.log('Profanity detected:', profanityDetected);

    return {
      censoredValue
    };
  };


  // const matcher = new RegExpMatcher({
  //   ...englishDataset.build(),
  //   ...englishRecommendedTransformers,
  // });

  // // Function to check for profanity in the name input
  // const checkForProfanity = (inputText) => {
  //   return matcher.hasMatch(inputText);
  // };



  const tabWidth = 113;
  const tabOffset = activeTab * tabWidth;

  const colours = ['blue', 'green', 'yellow', 'red', 'pink', 'purple'];
  const models = ['Electric', 'Classic', 'Round', 'Boxy', 'Sport', 'Vintage'];
  const topModelImg = [evTop_img, classicTop_img, roundTop_img, boxyTop_img, sportTop_img, vintageTop_img];
  const bodyModelImg = [evBody_img, classicBody_img, roundBody_img, boxyBody_img, sportBody_img, vintageBody_img];
  const tireModelImg = [evTires_img, classicTires_img, roundTires_img, boxyTires_img, sportTires_img, vintageTires_img];

  // for testing
  // const divElement = document.getElementById('test');
  // const width = divElement.offsetWidth;
  // const height = divElement.offsetHeight;
  // console.log("Width: " + width + ", Height: " + height);

  return (
    <section className='w-full h-screen relative bg-white-200'>

      {currentSection > 1 && currentSection < 6 && (
        <div className="w-2/3 h-screen relative pb-16" >
          <Canvas style={{ background: '#F1F1F1' }} >
            <Suspense fallback={<Loader />}>
              <Configurator
                topColour={topColour}
                topModel={topModel}
                bodyColour={bodyColour}
                bodyModel={bodyModel}
                wheelModel={wheelModel}
                section={currentSection}
                license={license}
                showLicense={showLicense}
              />
            </Suspense>
          </Canvas>
        </div>
      )}

      {currentSection === 6 && (
        <div className="w-full h-screen relative pb-16" >
          <Canvas style={{ background: '#F1F1F1' }} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<Loader />}>
              <Configurator
                topColour={topColour}
                topModel={topModel}
                bodyColour={bodyColour}
                bodyModel={bodyModel}
                wheelModel={wheelModel}
                section={currentSection}
                license={license}
                showLicense={showLicense}
              />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* HTML */}
      <div style={{ transition: 'opacity 0.2s', opacity: currentSection > 1 && currentSection < 6 ? 1 : 0, pointerEvents: 'none' }}>
        <div style={{ position: 'fixed', bottom: '10%', left: '4.5%' }}>
          <img src={rotate_icon} alt='rotate_icon' className='w-40 object-contain mt-8' />
        </div>
      </div>
      <div style={{ transition: 'opacity 0.2s', opacity: currentSection === 6 ? 1 : 0, pointerEvents: 'none' }}>
        <div style={{ position: 'fixed', bottom: '12%', left: '22%' }}>
          <img src={pose_icon} alt='pose_icon' className='w-40 object-contain mt-8' />
        </div>
      </div>

      {/* P1 */}
      <div style={{ transition: 'opacity 0.2s', opacity: currentSection === 1 ? 1 : 0, pointerEvents: currentSection === 1 ? 'auto' : 'none' }}>
        <div className="w-96 text-center font-inter" style={{ position: 'fixed', top: '22%', left: '50%', transform: `translate(-50%,-50%)` }}>
          <div className="text-3xl font-bold pb-4">Welcome to Geo-Creator</div>
          <div className="text-sm">Mix and match with our signature models to create and share your very own custom Geo-Sol.</div>
        </div>

        <img src={create_landing1} alt='' className='w-full object-contain' style={{ position: 'fixed', bottom: '9%', left: '50%', transform: `translate(-50%,-50%)` }} />

        <button className='rounded-full bg-black-200 items-center justify-center flex'
          style={{ position: 'fixed', bottom: '12%', left: '50%', transform: `translate(-50%,-50%)` }} onClick={goNextSection}>
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
            // const value = e.target.value.slice(0, 20);
            // const {censoredValue} = censorText(value); // Censor/filter input text
            // setName(censoredValue); // Set name to censoredValue if profanity is detected

            const value = e.target.value.slice(0, 21);
            const profanityDetected = checkForProfanity(value);
            setProfanityDetected(profanityDetected);

            if (profanityDetected) {
              const { censoredValue } = censorText(value, profanityDetected);
              setName(censoredValue);
              nameValidate(3);
            } else if (value.length === 21) {
              nameValidate(2);
            } else {
              setName(value);
              nameValidate(0);
            }
            consolelog("name:", name);

            // if (value.length === 20) {
            //   nameValidate(2);
            // } else {
            //   nameValidate(0);
            // }
            // consolelog("value:", value);
          }}

          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              if (name === '') {
                nameValidate(1);
              } else if (profanityDetected) {
                nameValidate(3);
              } else { setCurrentSection(3) }
            }
          }}
        />
        <div className={`text-sm mt-2 mb-14 ${showNameValidate ? 'text-pink-100' : 'text-transparent'}`} style={{ userSelect: showNameValidate ? 'text' : 'none' }}>
          {nameValidateMsg}
        </div>
        <button className='w-40 rounded-full bg-black-200 items-center justify-center flex' onClick={() => {
          if (name === '') {
            nameValidate(1);
          }
          // else if (profanityDetected) {
          //   nameValidate(3); 
          // }
          else {
            setCurrentSection(3);
          }
        }}>
          <div className="text-sm font-inter py-3 px-6 text-white-100">Next</div>
        </button>
      </div>


      {/* P3 */}
      <div className="font-inter" style={{ position: 'fixed', top: '50%', right: '8%', transform: 'translateY(-50%)', opacity: currentSection === 3 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: currentSection === 3 ? 'auto' : 'none' }}>
        <div className="pl-4 pb-2 text-sm">Creating {name}’s dream Geo...</div>
        <div className="w-[404px] h-[545px] outline outline-1 rounded-3xl p-6 flex flex-col">

          <div className="rounded-full bg-grey-300 p-2 relative mb-4">
            <div className="flex items-center justify-between absolute inset-0 p-2 z-10">

              <button className={`text-xs w-1/3 h-8 rounded-full ${activeTab === 0 ? 'text-white-100' : 'text-black-100'}`} onClick={() => toggleTab(0)}>Top</button>
              <button className={`text-xs w-1/3 h-8 rounded-full ${activeTab === 1 ? 'text-white-100' : 'text-black-100'}`} onClick={() => toggleTab(1)}>Body</button>
              <button className={`text-xs w-1/3 h-8 rounded-full ${activeTab === 2 ? 'text-white-100' : 'text-black-100'}`} onClick={() => toggleTab(2)}>Tires</button>
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
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={evTop_img} alt='evTop_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Electric</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectTopModel(1)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${topModel === 1 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={classicTop_img} alt='classicTop_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Classic</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectTopModel(2)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${topModel === 2 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={roundTop_img} alt='roundTop_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Round</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectTopModel(3)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${topModel === 3 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={boxyTop_img} alt='boxyTop_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Boxy</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectTopModel(4)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${topModel === 4 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={sportTop_img} alt='sportTop_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Sport</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectTopModel(5)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${topModel === 5 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={vintageTop_img} alt='vintageTop_img' className='h-full object-contain ' />
                  </div>
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
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={evBody_img} alt='evBody_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Electric</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectBodyModel(1)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${bodyModel === 1 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={classicBody_img} alt='classicBody_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Classic</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectBodyModel(2)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${bodyModel === 2 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={roundBody_img} alt='roundBody_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Round</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectBodyModel(3)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${bodyModel === 3 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={boxyBody_img} alt='boxyBody_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Boxy</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectBodyModel(4)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${bodyModel === 4 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={sportBody_img} alt='sportBody_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Sport</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectBodyModel(5)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${bodyModel === 5 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={vintageBody_img} alt='vintageBody_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Vintage</div>
                </button>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="flex-grow">
              <div className="font-bold text-base pb-2.5">3/3 Tires</div>

              <div className="text-xs pb-1.5">Model</div>
              <div className="grid grid-rows-2 grid-cols-3 gap-2.5 pb-6">
                <button className="relative text-[10px]" onClick={() => selectWheelModel(0)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${wheelModel === 0 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={evTires_img} alt='evTires_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Electric</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectWheelModel(1)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${wheelModel === 1 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={classicTires_img} alt='classicTires_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Classic</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectWheelModel(2)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${wheelModel === 2 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={roundTires_img} alt='roundTires_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Round</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectWheelModel(3)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${wheelModel === 3 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={boxyTires_img} alt='boxyTires_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Boxy</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectWheelModel(4)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${wheelModel === 4 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={sportTires_img} alt='sportTires_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Sport</div>
                </button>
                <button className="relative text-[10px]" onClick={() => selectWheelModel(5)}>
                  <div className={`w-28 h-24 bg-white-100 rounded-2xl ${wheelModel === 5 ? 'border border-solid border-black-200' : ''}`} />
                  <div className="bg-white-100 rounded-xl absolute inset-0 m-2 mb-6 flex items-center justify-center">
                    <img src={vintageTires_img} alt='vintageTires_img' className='h-full object-contain ' />
                  </div>
                  <div className="absolute inset-0 mt-[76px]">Vintage</div>
                </button>
              </div>
            </div>
          )}

          <hr className="border-black-100 border-t" />
          <div className="flex items-center justify-center pt-6">
            <button className="underline underline-offset-4 text-sm  px-4 mr-6" onClick={goPrevSection}>Back</button>
            <button className='w-full rounded-full bg-black-200 items-center justify-center flex' onClick={goNextSection}>
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
            // const value = e.target.value.slice(0, 8).toUpperCase();
            // const {censoredValue} = censorText(value); // Censor/filter input text
            // setLicense(censoredValue);

            const value = e.target.value.slice(0, 9).toUpperCase();
            const profanityDetected = checkForProfanity(value);
            setProfanityDetected(profanityDetected);
            licenseShow();

            if (profanityDetected) {
              const { censoredValue } = censorText(value, profanityDetected);
              setLicense(censoredValue);
              licenseValidate(3);
            } else if (value.length === 9) {
              licenseValidate(2);
            } else {
              setLicense(value);
              licenseValidate(0);
            }
            consolelog("license:", license);

            // if (value.length === 8) {
            //   licenseValidate(2);
            // } else {
            //   licenseValidate(0);
            // }

          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              if (license === '') {
                licenseValidate(1);
              }
              else if (profanityDetected) {
                licenseValidate(3);
              }
              else { setCurrentSection(5) }
            }
          }}
        />
        <div className={`text-sm mt-2 mb-14 ${showLicenseValidate ? 'text-pink-100' : 'text-transparent'}`} style={{ userSelect: showLicenseValidate ? 'text' : 'none' }}>
          {licenseValidateMsg}
        </div>
        <div className="flex">
          <button className="underline underline-offset-4 text-sm px-4 mr-6" onClick={goPrevSection}>Back</button>
          <button className='w-40 rounded-full bg-black-200 items-center justify-center flex' onClick={() => {
            if (license === '') {
              licenseValidate(1);
            }
            // else if (profanityDetected) {
            //   licenseValidate(3); 
            // } 
            else {
              setCurrentSection(5);
            }
          }}>

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

                  <div className="bg-white-100 w-14 h-[38px] rounded-xl m-2 flex items-center justify-center">
                    <img src={topModelImg[topModel]} alt='top image' className='h-full object-contain ' />
                  </div>

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

                  <div className="bg-white-100 w-14 h-[38px] rounded-xl m-2 flex items-center justify-center">
                    <img src={bodyModelImg[bodyModel]} alt='body image' className='h-full object-contain ' />
                  </div>

                  <div className="text-xs font-bold ml-1">{models[bodyModel]}</div>
                </div>
                <div className={`bg-${colours[bodyColour]}-100 w-8 h-8 rounded-full m-2 mr-3`} />
              </div>
            </div>
            <div className="text-xs pb-1">3/4 Tires</div>
            <div className="relative w-full mb-3.5">
              <div className="h-[54px] bg-white-100 rounded-2xl border border-solid border-black-200" />
              <div className="absolute inset-0 flex justify-between items-center">
                <div className="flex items-center">

                  <div className="bg-white-100 w-14 h-[38px] rounded-xl m-2 flex items-center justify-center">
                    <img src={tireModelImg[wheelModel]} alt='tire image' className='h-full object-contain ' />
                  </div>

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

              <button className='w-full rounded-full bg-black-200 items-center justify-center flex' onClick={() => setShowCookie(true)}>

                {/* <button className='w-full rounded-full bg-black-200 items-center justify-center flex' onClick={() => {goNextSection(), handleCarConfirm()}}> */}

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

          <div className="w-56 text-sm text-grey-100 font-inter mt-20">
            Visit Geo.com to learn more about our <button className="underline underline-offset-4" onClick={() => setShowLeaveGeo(true)}> models and prices</button>.
          </div>
        </div>

        <div style={{ position: 'fixed', bottom: '35%', right: '4%' }}>
          <div className="bg-grey-300 rounded-3xl p-8">
            <div className="w-60 text-lg font-bold font-inter leading-6 pb-2">
              Play to win a free Geo-Energy portable charger!
            </div>
            <div className="w-60 text-sm font-inter pb-8">
              Put your Geo to the test, play to enter today’s giveaway.
            </div>
            {/* <div className='flex justify-end'>
              <button onClick={() => navigate('/Hello-Sol/play')}>
                <img src={go_icon} alt='go-icon' className='w-10 object-contain' />
              </button>
            </div> */}
            <button className='rounded-full bg-black-200 items-center justify-center flex' onClick={() => navigate('/Hello-Sol/play')}>
              <div className="text-sm font-inter py-2.5 px-6 text-white-100">Start playing</div>
            </button>

            {/* <img src={charger1} alt='' className='absolute h-32 object-contain rotate-6 top-[140px] left-[18px]' /> */}
            <img src={charger1} alt='' className='absolute h-[124px] object-contain top-[120px] left-[170px] -rotate-[25deg]' />
          </div>
        </div>
      </div>

      {/* PopUp - Leave Geo*/}
      <div style={{ transition: 'opacity 0.2s', opacity: showLeaveGeo === true ? 1 : 0, pointerEvents: showLeaveGeo === true ? 'auto' : 'none' }}>
        <div className="fixed inset-0 bg-black-100 opacity-40 z-10"></div>
        <div className="font-inter outline outline-1 rounded-3xl p-10 w-96 bg-white-200 z-20" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-54%)` }}>
          <div className="inline-flex items-center mb-0">
            <img src={leave_icon} alt='leave_icon' className='h-16 object-contain ' />
          </div>
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

      {/* PopUp - Cookies*/}
      <div style={{ transition: 'opacity 0.2s', opacity: showCookie === true ? 1 : 0, pointerEvents: showCookie === true ? 'auto' : 'none' }}>
        <div className="fixed inset-0 bg-black-100 opacity-40 z-10"></div>
        <div className="font-inter outline outline-1 rounded-3xl p-10 w-96 bg-white-200 z-20" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-54%)` }}>
          <div className="inline-flex items-center mb-0">
            <img src={cookie_icon} alt='leave_icon' className='h-16 object-contain ' />
          </div>
          <div className="font-bold text-2xl mb-1">We use cookies!</div>
          <div className="text-sm mb-8">This website uses cookies to offer you a personalized experience. Accepting allows us to save your configured car. Declining will result in not being able to drive your configured car in the mini game.</div>
          <div className="flex justify-center">
            <button className="underline underline-offset-4 text-sm px-4 mr-6" onClick={() => { goNextSection(); setShowCookie(false); }}>Decline</button>
            <button className='w-full rounded-full bg-black-200 items-center justify-center flex' onClick={() => { goNextSection(); setShowCookie(false); handleCarConfirm() }}>
              <div className="text-sm font-inter py-3 px-6 text-white-100">Accept cookies</div>
            </button>
          </div>
        </div>
      </div>

      {/* PopUp - Image Share*/}
      <div style={{ transition: 'opacity 0.2s', opacity: showImageShare === true ? 1 : 0, pointerEvents: showImageShare === true ? 'auto' : 'none' }}>
        <div className="fixed inset-0 bg-black-100 opacity-40 z-10"></div>

        <div className="font-inter outline outline-1 rounded-3xl p-12 w-[560px] bg-white-200 z-20" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-54%)` }}>

          <button className="p-2 absolute top-6 right-6" onClick={() => setShowImageShare(false)}>
            <img src={close_icon} alt='close-icon' className='w-4 object-contain' />
          </button>

          <div className='flex items-center'>
            <img className="flex-col mr-8 outline outline-1 w-40 outline-grey-200" src={imageUrl} alt="Your image" />
            <div className='flex-col'>
              <div className="font-bold text-2xl mb-4">Share your creation!</div>
              <div className="text-sm mb-2">Share this image via</div>
              <div className="flex gap-2 mb-3">
                <WhatsappShareButton url={shareUrl} windowHeight={700} windowWidth={1000}>
                  <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>
                <TwitterShareButton url={shareUrl} windowHeight={700} windowWidth={1000}>
                  <XIcon size={40} round={true} />
                </TwitterShareButton>
                <FacebookShareButton url={shareUrl} windowHeight={700} windowWidth={1000}>
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
                <RedditShareButton url={shareUrl} windowHeight={700} windowWidth={1000}>
                  <RedditIcon size={40} round={true} />
                </RedditShareButton>
              </div>

              <button className='mt-7 w-60 rounded-full outline outline-1 flex items-center p-3 justify-center' onClick={downloadImage}>
                <img src={download_icon} alt='download-icon' className='w-5 object-contain' />
                <div className="font-inter pl-3 mr-2 text-sm">Download image</div>
              </button>
            </div>



          </div>
        </div>
      </div>





    </section>

  )
}

export default Create