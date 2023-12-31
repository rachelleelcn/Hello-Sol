import { Suspense, useEffect, useState } from "react"
import license_icon from "../assets/icons/license.png";
import download_icon from "../assets/icons/download.png";
import share_icon from "../assets/icons/share.png";



const Create = () => {
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
      setLicenseValidateMsg('Maximum 10 characters.');
      setShowLicenseValidate(true);
    } else {
      setLicenseValidateMsg('x');
      setShowLicenseValidate(false);
    }
  }

  const tabWidth = 113; // Adjust this value if needed
  const tabOffset = activeTab * tabWidth;

  const colours = ['blue', 'green', 'yellow', 'red', 'pink', 'purple'];
  const models = ['Electric', 'Classic', 'Round', 'Boxy', 'Sport', 'Vintage'];

  // for testing
  // const divElement = document.getElementById('test');
  // const width = divElement.offsetWidth;
  // const height = divElement.offsetHeight;
  // console.log("Width: " + width + ", Height: " + height);

  return (
    <section className='w-full h-screen relative bg-white-200'>

      {/* HTML */}

      {/* P1 */}
      <div style={{ transition: 'opacity 0.2s', opacity: currentSection === 1 ? 1 : 0, pointerEvents: currentSection === 1 ? 'auto' : 'none' }}>
        <div className="w-1/3 text-center font-inter" style={{ position: 'fixed', top: '23%', left: '50%', transform: `translate(-50%,-50%)` }}>
          <div className="text-3xl font-bold pb-4">Welcome to Geo-Creator</div>
          <div className="text-sm">Lorem ipsum dolor sit amut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc nisi ut aliquip ex ea commodo consequat. </div>
        </div>
        <button className='rounded-full bg-black-200 items-center justify-center flex'
          style={{ position: 'fixed', bottom: '14%', left: '50%', transform: `translate(-50%,-50%)` }} onClick={goNextSection}>
          <div className="text-sm font-inter py-3 px-6 text-white-100">Create your dream Geo</div>
        </button>
      </div>

      {/* P2 */}
      <div className="w-[404px] font-inter text-center grid place-items-center" style={{ position: 'fixed', top: '50%', right: '8%', transform: 'translateY(-48%)', transition: 'opacity 0.2s', opacity: currentSection === 2 ? 1 : 0, pointerEvents: currentSection === 2 ? 'auto' : 'none' }}>
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
        />
        <div className={`text-sm mt-2 mb-14 ${showNameValidate ? 'text-pink-100' : 'text-transparent'}`} style={{ userSelect: showNameValidate ? 'text' : 'none' }}>
          {nameValidateMsg}
          </div>
        <button className='w-40 rounded-full bg-black-200 items-center justify-center flex' onClick={() => name === '' ? nameValidate(1) : goNextSection()}>
          <div className="text-sm font-inter py-3 px-6 text-white-100">Next</div>
        </button>
      </div>


      {/* P3 */}
      <div className="font-inter" style={{ position: 'fixed', top: '50%', right: '8%', transform: 'translateY(-48%)', opacity: currentSection === 3 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: currentSection === 3 ? 'auto' : 'none' }}>
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
            <button className='w-full rounded-full bg-black-200 items-center justify-center flex' onClick={goNextSection}>
              <div className="text-sm font-inter py-3 px-6 text-white-100">Next</div>
            </button>
          </div>
        </div>
      </div>

      {/* P4 */}
      <div className="w-[404px] font-inter text-center grid place-items-center" style={{ position: 'fixed', top: '50%', right: '8%', transform: 'translateY(-48%)', opacity: currentSection === 4 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: currentSection === 4 ? 'auto' : 'none' }}>
        <div className="pb-4">Creating {name}’s dream Geo...</div>
        <div className="text-3xl font-bold pb-14">Design your license plate</div>
        <input
          className="border-b border-black-200 placeholder-grey-100 focus:outline-none bg-transparent text-center text-2xl p-2 w-80"
          type="text"
          placeholder="Your message"
          value={license}
          onChange={(e) => {
            const value = e.target.value.slice(0, 10).toUpperCase();
            setLicense(value);
            if (value.length === 10) {
              licenseValidate(2);
            } else {
              licenseValidate(0);
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
      <div className="font-inter" style={{ position: 'fixed', top: '50%', right: '8%', transform: 'translateY(-48%)', opacity: currentSection === 5 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: currentSection === 5 ? 'auto' : 'none' }}>
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
                  <img src={license_icon} alt='license-logo' className='m-4 w-10 object-contain' />
                  <div className="text-xs font-bold ml-1">{license}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <hr className="border-black-100 border-t" />
            <div className="flex items-center justify-center pt-6">
              <button className="underline underline-offset-4 text-sm  px-4 mr-6" onClick={goPrevSection}>Back</button>
              <button className='w-full rounded-full bg-black-200 items-center justify-center flex' onClick={goNextSection}>
                <div className="text-sm font-inter py-3 px-6 text-white-100">Next</div>
              </button>
            </div>
          </div>

        </div>
      </div>


      {/* P6 */}
      <div style={{ opacity: currentSection === 6 ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: currentSection === 6 ? 'auto' : 'none' }}>
        <div style={{ position: 'fixed', top: '15%', left: '10%' }}>
          <div className="text-4xl font-bold font-inter mb-1">
            The rarest Geo of all,
          </div>
          <div className="text-4xl font-inter pb-6">
            {name}’s Geo
          </div>

          <div className="flex">
            <button className='w-52 rounded-full outline outline-1 flex items-center p-4 justify-center mr-3'>
              <img src={download_icon} alt='download-logo' className='w-5 object-contain' />
              <div className="font-inter pl-3 mr-2">Download image</div>
            </button>
            <button className="w-14 h-14 rounded-full outline outline-1 flex items-center justify-center">
              <img src={share_icon} alt='share-logo' className='w-6 object-contain mr-1' />
            </button>
          </div>

          <div className="mt-4 w-56 text-base text-grey-100 font-inter mt-20">
            Visit Geo.com to learn more about our <span className="underline underline-offset-4"> models and prices</span>.
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
            <button className='rounded-full bg-black-200 items-center justify-center flex'>
              <div className="text-sm font-inter py-2.5 px-6 text-white-100">Start playing</div>
            </button>
          </div>
        </div>
      </div>






    </section>

  )
}

export default Create