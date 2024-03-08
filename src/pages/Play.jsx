/* eslint-disable no-const-assign */
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"

import geo_icon from "../assets/icons/geo.png";
import go_icon from "../assets/icons/go.png";
import add_icon from "../assets/icons/add.png";
import close_icon from "../assets/icons/close.png";
import share_icon from "../assets/icons/share.png";
import mute_icon from "../assets/icons/mute.png";
import controls_icon from "../assets/icons/controls.png";
import sound_icon from "../assets/icons/sound.png";
import arrows_icon from "../assets/icons/arrows.png";
import shift_icon from "../assets/icons/shift.png";
import key_icon from "../assets/icons/key.png";
import cursor_icon from "../assets/icons/cursor.png";
import station_img from "../assets/images/station.png";
import email_icon from "../assets/icons/email.png";
import leave_icon from "../assets/icons/leave.png";
import quit_icon from "../assets/icons/quit.png";
import car_icon from "../assets/icons/car.png";
import leaf_icon from "../assets/icons/leaf.png";
import leafGrey_icon from "../assets/icons/leaf_grey.png";
import download_icon from "../assets/icons/download.png";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, XIcon, WhatsappIcon, PinterestShareButton, PinterestIcon, RedditShareButton, RedditIcon } from 'react-share';
import { sendCustomEmail } from "./email";
import { Scene } from './Sandbox';


const Play = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(1);
  const [showControls, setShowControls] = useState(false);
  const [showEmailSent, setShowEmailSent] = useState(false);
  const [showCreateGeo, setShowCreateGeo] = useState(false);
  const [showQuitGame, setShowQuitGame] = useState(false);
  const [showLeaveGeo, setShowLeaveGeo] = useState(false);
  const [showImageShare, setShowImageShare] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [shareUrl, setShareUrl] = useState(null);

  const [entries, setEntries] = useState(0);

  const currentDate = new Date();
  //const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
  //const [email, setEmail] = useState('');
  const bannerUrl = "https://drive.google.com/uc?export=download&id=1XjjptZBsovPQDdHkR-Ok_6vg7VtVDCNm";

  const [startGame, setStartGame] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  // Current date variables
  const today = new Date()
  const dateValues = { year: 'numeric', month: 'short', day: 'numeric' }
  const dateFormat = today.toLocaleString('en-US', dateValues)

  // Timer variables
  const START_MINUTES = '4'
  const START_SECONDS = '00'
  const START_DURATION = 10
  const [minutes, setMinutes] = useState(START_MINUTES)
  const [seconds, setSeconds] = useState(START_SECONDS)
  const [duration, setDuration] = useState(START_DURATION)
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)

  const timeFormat = `${Math.floor(elapsedTime / 60)}:${String(elapsedTime % 60).padStart(2, '0')}`;

  const startTimer = () => {
    setDuration(parseInt(START_SECONDS, 10) + 60 * parseInt(START_MINUTES, 10))
    setIsRunning(true)
  }
  const resetTimer = () => {
    setMinutes(START_MINUTES)
    setSeconds(START_SECONDS)
    setIsRunning(false)
    setDuration(START_DURATION)
  }

  const leaveToGeo = () => {
    setShowLeaveGeo(false);
    navigate('/Hello-Sol/geo');
  };

  const goSection = (index) => {
    setCurrentSection(index);

    if (index < 3) {
      setStartGame(false);
    }
    else if (index === 4) {
      resetTimer()
      setElapsedTime(elapsedTime)
    }
    else {
      setStartGame(true);
    }
  };

  const quitGame = () => {
    setCurrentSection(1);
    setShowQuitGame(false);
    setStartGame(false);
    setEntries(0)
    resetTimer()
    //TODO: reset all values
  };

  const leaveToCreate = () => {
    setShowCreateGeo(false);
    navigate('/Hello-Sol/create');
  };

  const soundToggle = () => {
    if (soundOn) {
      setSoundOn(false);
    } else {
      setSoundOn(true);
    }
  };
  const controlsToggle = () => {
    if (showControls) {
      setShowControls(false);
    } else {
      setShowControls(true);
    }
  };

  // Timer logic
  useEffect(() => {
    if (isRunning === true) {
      let timer = duration
      var mins, secs

      const interval = setInterval(function () {
        // If time runs out, show results and reset timer
        if (--timer <= 0) {
          goSection(4)
          resetTimer()
          setElapsedTime(duration)
        }
        else {
          mins = parseInt(timer / 60, 10)
          secs = parseInt(timer % 60, 10)

          mins = mins < 10 ? + mins : mins
          secs = secs < 10 ? '0' + secs : secs

          setMinutes(mins)
          setSeconds(secs)
          setElapsedTime(duration - timer)
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isRunning, duration])

  useEffect(() => {
    if (entries === 6) {
      goSection(4)
      resetTimer()
      setElapsedTime(elapsedTime)
    }
  }, [entries, elapsedTime])

  const [details, setDetails] = useState({
    to_email: "",
    numEntry: entries,

    date: dateFormat,
    image: bannerUrl,
    timeTaken: timeFormat

  });

  const handleDetailsChange = (event) => {
    const { name, value } = event.target;

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };


  const handleSendEmail = (entryNum, formatDate, imageUrl, formatTime) => {
    sendCustomEmail(details, entryNum, formatDate, imageUrl, formatTime);

    //setEntries(entries);
    //console.log("Value of entries:", entryNum);
    //console.log("image: ", imageUrl);
    //console.log("date: ", formatDate);
    //console.log('Time:', formatTime)

  };

  const handleClearEmail = () => {
    setDetails({ ...details, to_email: "" });

  };

  const handleButtonEmailClick = () => {
    if (details.to_email.trim() !== '') {

      handleSendEmail(entries, dateFormat, bannerUrl, timeFormat);

      setShowEmailSent(true);
    
    }
  };

  const generateImage = () => {

    return new Promise((resolve) => {
      const newCanvas = document.createElement('canvas');
      newCanvas.width = 1200;
      newCanvas.height = 1400;
      const newContext = newCanvas.getContext('2d');

      // background color
      newContext.fillStyle = '#F1F1F1';
      newContext.fillRect(0, 0, newCanvas.width, newCanvas.height);

      // text / image
      const image = new Image();
      image.src = geo_icon;
      image.onload = function () {
        newContext.fillStyle = 'black';

        newContext.font = 'bold 64px Inter';
        newContext.fillText('Congradulations!', 48, 120);

        newContext.font = '36px Inter';
        newContext.fillText(`You have successfully earned ${entries} entries to our giveaway!`, 48, 196);

        


        newContext.fillRect(48, newCanvas.height - 108, newCanvas.width - 96, 1);
        newContext.font = 'bold 28px Inter';
        newContext.fillText('Hello-Sol', 48, newCanvas.height - 48);
        const imageHeight = 26;
        const imageAspectRatio = image.width / image.height;
        const imageWidth = imageHeight * imageAspectRatio;
        newContext.drawImage(image, newCanvas.width - 48 - imageWidth, newCanvas.height - 48 - imageHeight + 8, imageWidth, imageHeight);

        resolve(newCanvas);
      };
    });

  };

  const downloadImage = async () => {
    const newCanvas = await generateImage();
    const imageUrl = newCanvas.toDataURL('image/png');

    // trigger download
    const link = document.createElement('a');
    link.setAttribute('download', 'MyGameResults.png');
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




  // for testing
  // const divElement = document.getElementById('test');
  // const width = divElement.offsetWidth;
  // const height = divElement.offsetHeight;
  // console.log("Width: " + width + ", Height: " + height);

  return (
    <section className='w-full h-screen relative bg-white-200'>

      {/* Sandbox Game - Appears after instructions, disappears on results */}
      {currentSection > 2 && currentSection < 5 && (
        <div style={{ width: '100%', height: '100%' }}>
          <Scene entries={entries} setEntries={setEntries} />
        </div>
      )}

      <div className="h-screen bg-white-200 absolute inset-0 z-0" style={{ transition: 'opacity 0.2s', opacity: startGame ? 0 : 1, pointerEvents: startGame ? 'none' : 'auto' }}></div>

      {/* P1 - Landing */}
      <div className="font-inter" style={{ position: 'fixed', top: '50%', left: '10%', transform: 'translateY(-50%)', transition: 'opacity 0.2s', opacity: currentSection === 1 ? 1 : 0, pointerEvents: currentSection === 1 ? 'auto' : 'none' }}>
        <div className="text-3xl font-bold pb-2">Welcome to Geo-Town</div>
        <div className="text-xl text-grey-100 font-inter pb-4">
          Play for a chance to win a Geo-Energy portable charger!
        </div>
        <div className="text-sm w-[53%] pb-4">
          Find the 6 charging stations located across Geo-Town before the time runs out to earn entries to our giveaway. The more entries you have, the higher your chances of winning!
        </div>
        <div className="text-xs pb-0.5">
          Please note that each email can only claim entries to the giveaway once per day.
        </div>
        <div className="text-xs pb-7">
          Play daily from <span className="underline underline-offset-4"> April 5th to 19th, 2024</span>.
        </div>

        <div className='w-72 rounded-full outline outline-1 p-2 flex items-center justify-between mb-7'>
          <div className="font-inter pl-2">Visit Geo.com to learn more</div>
          <button onClick={() => setShowLeaveGeo(true)}>
            <img src={go_icon} alt='go-icon' className='w-10 object-contain' />
          </button>
        </div>

        <div className="flex items-center gap-16 mb-7">
          <div className="w-40 h-40 rounded-full bg-grey-100 border-[16px] border-green-100"></div>
          <div className="text-sm w-56">
            <div className="font-bold pb-1">Geo-Energy portable charger</div>
            <div>A smarter, safer, and more portable solution to charge your EV.</div>
          </div>
        </div>

        <button className='w-40 rounded-full bg-black-200 items-center justify-center flex' onClick={() => goSection(2)}>
          <div className="text-sm py-3 px-6 text-white-100">Start game</div>
        </button>
      </div>


      {/* P2 - Pre-game instructions */}
      <div style={{ transition: 'opacity 0.2s', opacity: currentSection === 2 ? 1 : 0, pointerEvents: currentSection === 2 ? 'auto' : 'none' }}>
        <div className="font-inter" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-52%)` }}>
          <div className="flex">
            <div className="flex flex-col">
              <div className="text-3xl font-bold pb-3">Instructions</div>
              <div className="text-sm w-[680px] pb-8 mr-4">
                Drive around Geo-Town to locate the 6 hidden charging stations, each represented by a green box with a leaf symbol. Each station you collect counts as 1 entry to the giveaway. Collect all 6 stations within 3 minutes to earn a bonus entry to the giveaway!
              </div>
            </div>
            <div className="h-32 flex items-center justify-center">
              <img src={station_img} alt='station_img' className='h-full object-contain ' />
            </div>
          </div>
          <div className="flex gap-14 text-nowrap">
            <div className="flex items-center">
              <div className="inline-flex items-center mr-5">
                <img src={arrows_icon} alt='arrows_icon' className='h-12 object-contain ' />
              </div>
              <div className="text-xs">
                <div className="font-bold font-sans">WASD / Arrows</div>
                <div>Steer car</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="inline-flex items-center mr-5">
                <img src={shift_icon} alt='shift_icon' className='h-12 object-contain ' />
              </div>
              <div className="text-xs">
                <div className="font-bold">Shift</div>
                <div>Brake car</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="inline-flex items-center mr-5">
                <img src={key_icon} alt='key_icon' className='h-12 object-contain ' />
              </div>
              <div className="text-xs">
                <div className="font-bold">R</div>
                <div>Reset car</div>
              </div>
            </div>
            {/* <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-grey-100 mr-3"></div>
              <div className="text-xs">
                <div className="font-bold">Cursor movement</div>
                <div>Rotate camera</div>
              </div>
            </div> */}
            <div className="flex items-center">
              <div className="inline-flex items-center mr-5">
                <img src={cursor_icon} alt='cursor_icon' className='h-12 object-contain ' />
              </div>
              <div className="text-xs">
                <div className="font-bold">Cursor click</div>
                <div>Collect stations</div>
              </div>
            </div>
          </div>


          <hr className="border-black-100 border-t-1 my-10" />
          <div className=" text-sm font-bold pb-4">Pick your car:</div>
          <div className="flex gap-6">
            <button className="w-36 min-w-min h-36 rounded-3xl outline outline-1 bg-white-100 p-4 flex flex-col items-center text-center">
              <div className="w-full h-full bg-grey-100 rounded-2xl mb-2"></div>
              <div className="text-xs">Geo-Sol</div>
            </button>
            <button className="w-36 min-w-min h-36 rounded-3xl bg-white-100 p-4 flex flex-col items-center text-center">
              <div className="w-full h-full bg-grey-100 rounded-2xl mb-2"></div>
              <div className="text-xs whitespace-nowrap">Jane Doe’s</div>
            </button>
            <button className="w-36 h-36 rounded-full bg-white-100 p-4 flex flex-col items-center text-center justify-center" onClick={() => setShowCreateGeo(true)}>
              <div className="w-10 h-10 rounded-full mb-2 outline outline-1 flex items-center justify-center">
                <img src={add_icon} alt='add-icon' className='w-4 object-contain' />
              </div>
              <div className="text-xs font-bold w-24 pb-1">Create new dream Geo</div>
            </button>
          </div>
        </div>

        <div className="flex" style={{ position: 'fixed', bottom: '5%', right: '3.5%' }}>
          <button className="underline underline-offset-4 text-sm px-4 mr-6" onClick={() => goSection(1)}>Back</button>
          <button className='w-40 rounded-full bg-black-200 items-center justify-center flex'
            onClick={() => {
              goSection(3)
              startTimer()
            }}>
            <div className="text-sm font-inter py-3 px-6 text-white-100">Start game</div>
          </button>
        </div>
      </div>


      {/* P3 - In-game UI */}
      <div style={{ transition: 'opacity 0.2s', opacity: currentSection === 3 ? 1 : 0, pointerEvents: currentSection === 3 ? 'auto' : 'none' }}>
        <div style={{ position: 'fixed', bottom: '5%', right: '3.5%' }}>
          <button className='w-40 rounded-full outline outline-1 items-center justify-center flex py-3 px-6 gap-2' onClick={() => setShowQuitGame(true)}>
            <img src={close_icon} alt='close-icon' className='w-4 object-contain' />
            <div className="text-sm font-inter text-black-100 pr-1.5">Quit game</div>
          </button>
        </div>

        <div className="flex gap-3" style={{ position: 'fixed', bottom: '5%', left: '3.5%' }}>
          <button className={`w-40 rounded-full outline ${showControls ? 'outline-2' : 'outline-1'} items-center justify-center flex py-3 px-6 gap-2`} onClick={controlsToggle}>
            <img src={controls_icon} alt='controls-icon' className='w-3.5 object-contain' />
            <div className="text-sm font-inter text-black-100 pr-1.5">Controls</div>
          </button>
          <button className='w-11 h-11 rounded-full outline outline-1 flex items-center justify-center' onClick={soundToggle}>
            {soundOn ? (
              <img src={mute_icon} alt='mute-icon' className='w-5 object-contain' />
            ) : (
              <img src={sound_icon} alt='sound-icon' className='w-5 object-contain ml-0.5' />
            )}
          </button>
        </div>

        <div style={{ position: 'fixed', bottom: 'calc(5% + 52px)', left: '3.5%' }}>
          <div style={{ transition: 'opacity 0.2s', opacity: showControls === true ? 1 : 0, pointerEvents: showControls === true ? 'auto' : 'none' }}>
            <div className="w-40 font-inter p-4">
              <div className="flex flex-col gap-6 text-nowrap">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full mr-2 flex justify-center items-center">
                    <img src={arrows_icon} alt='arrows_icon' className='h-full object-contain ' />
                  </div>
                  <div className="text-[10px]">
                    <div className="font-bold font-sans">WASD / Arrows</div>
                    <div>Steer car</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full mr-2 flex justify-center items-center">
                    <img src={shift_icon} alt='shift_icon' className='h-full object-contain ' />
                  </div>
                  <div className="text-[10px]">
                    <div className="font-bold">Shift</div>
                    <div>Brake car</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full mr-2 flex justify-center items-center">
                    <img src={key_icon} alt='key_icon' className='h-full object-contain ' />
                  </div>
                  <div className="text-[10px]">
                    <div className="font-bold">R</div>
                    <div>Reset car</div>
                  </div>
                </div>
                {/* <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-grey-100 mr-2"></div>
                  <div className="text-[10px]">
                    <div className="font-bold">Cursor movement</div>
                    <div>Rotate camera</div>
                  </div>
                </div> */}
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full mr-2 flex justify-center items-center">
                    <img src={cursor_icon} alt='cursor_icon' className='h-full object-contain ' />
                  </div>
                  <div className="text-[10px]">
                    <div className="font-bold">Cursor click</div>
                    <div>Collect stations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Timer */}
        <div className={`font-bold text-xl ${minutes === 0 && seconds <= 30 ? 'text-pink-100' : ''}`} style={{ position: 'fixed', bottom: '5%', left: '50%', transform: 'translateX(-50%)' }}>
          {minutes} <span>:</span> {seconds}
        </div>
        {/* <GameTimer/>       */}

        {/* Collected station indicators */}
        <div className="flex flex-col items-center gap-2" style={{ position: 'fixed', top: '50%', transform: 'translateY(-54%)', right: '3.5%' }}>

          <div className={`w-11 h-11 rounded-full ${entries > 0 ? 'outline outline-1' : ''} flex justify-center items-center`}>
            {entries > 0 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-7 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-7 object-contain' />
            )}
          </div>
          <div className={`w-11 h-11 rounded-full ${entries > 1 ? 'outline outline-1' : ''} flex justify-center items-center`}>
            {entries > 1 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-7 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-7 object-contain' />
            )}
          </div>
          <div className={`w-11 h-11 rounded-full ${entries > 2 ? 'outline outline-1' : ''} flex justify-center items-center`}>
            {entries > 2 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-7 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-7 object-contain' />
            )}
          </div>
          <div className={`w-11 h-11 rounded-full ${entries > 3 ? 'outline outline-1' : ''} flex justify-center items-center`}>
            {entries > 3 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-7 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-7 object-contain' />
            )}
          </div>
          <div className={`w-11 h-11 rounded-full ${entries > 4 ? 'outline outline-1' : ''} flex justify-center items-center`}>
            {entries > 4 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-7 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-7 object-contain' />
            )}
          </div>
          <div className={`w-11 h-11 rounded-full ${entries > 5 ? 'outline outline-1' : ''} flex justify-center items-center`}>
            {entries > 5 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-7 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-7 object-contain' />
            )}
          </div>
        </div>

        {/* for testing - TO BE DELETED */}
        <div className="flex gap-2" style={{ position: 'fixed', top: '5%', left: '50%', transform: `translateX(-50%)` }}>
          <button className='w-40 rounded-full outline outline-1 items-center justify-center flex py-3 px-6 gap-2' onClick={() => { setEntries(6); goSection(4); }}>
            <div className="text-sm font-inter text-black-100">All Entries</div>
          </button>
          <button className='w-40 rounded-full outline outline-1 items-center justify-center flex py-3 px-6 gap-2' onClick={() => { setEntries(3); goSection(4); }}>
            <div className="text-sm font-inter text-black-100">Some Entries</div>
          </button>
          <button className='w-40 rounded-full outline outline-1 items-center justify-center flex py-3 px-6 gap-2' onClick={() => { setEntries(0); goSection(4); }}>
            <div className="text-sm font-inter text-black-100">No Entries</div>
          </button>
        </div>

      </div>


      {/* P4 - Results*/}

      {/* for testing - TO BE DELETED */}
      <div className="flex gap-2" style={{ position: 'fixed', top: '5%', left: '50%', transform: `translateX(-50%)`, transition: 'opacity 0.2s', opacity: currentSection === 4 ? 1 : 0, pointerEvents: currentSection === 4 ? 'auto' : 'none' }}>
        <button className='w-40 rounded-full outline outline-1 items-center justify-center flex py-3 px-6 gap-2' onClick={() => { goSection(3); setEntries(0) }}>
          <div className="text-sm font-inter text-black-100">Back</div>
        </button>
      </div>

      <div className="font-inter outline outline-1 rounded-3xl p-12 w-[416px] bg-white-200" style={{ position: 'fixed', top: '50%', right: '3.5%', transform: 'translateY(-48%)', transition: 'opacity 0.2s', opacity: currentSection === 4 ? 1 : 0, pointerEvents: currentSection === 4 ? 'auto' : 'none' }}>
        <button className='absolute w-10 h-10 rounded-full outline outline-1 flex items-center justify-center right-6 top-6' onClick={shareImage}>
          <img src={share_icon} alt='share-icon' className='w-4 object-contain' />
        </button>


        {/* Result message */}
        {entries === 0 && (
          <div>
            <div className="font-bold text-3xl pb-2">Good try!</div>
            <div className="text-base pb-6">Unfortunately, you have missed today’s entry to our giveaway.</div>
          </div>
        )}

        {/* bonus entry given if all stations found under 3 minutes */}
        {entries === 6 && elapsedTime <= 180 && (
          <div>
            <div className="font-bold text-3xl pb-2">Congratulations!</div>
            <div className="text-base pb-6">You have successfully earned all 6 entries and a bonus entry to our giveaway!</div>
          </div>
        )}

        {entries > 0 && entries <= 6 && elapsedTime > 180 && (
          <div>
            <div className="font-bold text-3xl pb-2">Congratulations!</div>
            <div className="text-base pb-6">You have successfully earned {entries} entries to our giveaway!</div>
          </div>
        )}

        {/* Result details */}
        <div className="flex gap-4 pb-3 justify-center items-center">
          <div className="text-base font-bold">Day 1</div>

          {/* Today's date */}
          <hr className="border-black-100 border-t-1 w-6" />
          <div className="text-base">
            {dateFormat}
          </div>

          {/* Time taken */}
          <hr className="border-black-100 border-t-1 w-6" />
          <div className="text-base font-bold">
            {timeFormat}
            {/*{Math.floor(elapsedTime / 60)} <span>:</span> {String(elapsedTime % 60).padStart(2, '0')}*/}

          </div>
        </div>

        {/* Indicators of # of stations found */}
        <div className="flex gap-2 justify-center items-center pb-8">
          <div className={`w-8 h-8 rounded-full ${entries > 0 ? 'outline outline-1' : ''} flex justify-center items-center`}>
            {entries > 0 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-5 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-5 object-contain' />
            )}
          </div>
          <div className={`w-8 h-8 rounded-full ${entries > 1 ? 'outline outline-1' : ''} flex justify-center items-center`}>
            {entries > 1 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-5 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-5 object-contain' />
            )}
          </div>
          <div className={`w-8 h-8 rounded-full ${entries > 2 ? 'outline outline-1' : ''} flex justify-center items-center`}>
            {entries > 2 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-5 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-5 object-contain' />
            )}
          </div>
          {entries === 6 && elapsedTime <= 180 && (
            <div className="relative">
              <div className="w-10 h-10 rounded-full outline outline-1"></div>
              <div className="w-8 h-8 rounded-full outline outline-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                <img src={leaf_icon} alt='leaf-icon' className='w-5 object-contain' />
              </div>
            </div>
          )}
          <div className={`w-8 h-8 rounded-full ${entries > 3 ? 'outline outline-1' : ''} flex justify-center items-center`}>
            {entries > 3 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-5 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-5 object-contain' />
            )}
          </div>
          <div className={`w-8 h-8 rounded-full ${entries > 4 ? 'outline outline-1' : ''} flex justify-center items-center`}>
            {entries > 4 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-5 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-5 object-contain' />
            )}
          </div>
          <div className={`w-8 h-8 rounded-full ${entries > 5 ? 'outline outline-1' : ''} flex justify-center items-center`}>
            {entries > 5 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-5 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-5 object-contain' />
            )}
          </div>
        </div>

        {/* Email text field */}
        {entries > 0 && (
          <div className="outline outline-1 rounded-2xl p-6 pt-[22px] mb-6">
            <div className="text-sm pb-3">Enter your email to be added into the draw for a Geo-Energy portable charger:</div>
            <div className="flex gap-2">
              <input
                className="border-b border-black-200 placeholder-grey-100 focus:outline-none bg-transparent text-sm p-2 w-full "
                name="to_email"
                type="email"
                placeholder="Your email"
                value={details.to_email}

                onChange={handleDetailsChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleButtonEmailClick();
                  }
                }}
              //onClick={() => details.to_email === '' ? null : (handleSendEmail(entries), setShowEmailSent(true), handleClearEmail())}
              />
              <button className="flex-shrink-0" onClick={handleButtonEmailClick} >
                <img src={go_icon} alt='go-icon' className='w-10 object-contain' />
              </button>
            </div>
            <div className="text-[10px] pt-2 text-grey-100">
              *Each email can only claim entries once per day
            </div>
          </div>
        )}

        <div className="text-base pb-5">Come back tomorrow to earn more entries and increase your chances of winning!</div>
        <div className="flex justify-center">
          <div className="text-xs text-grey-100 text-center w-48">
            Visit Geo.com to learn more about <button className="underline underline-offset-4" onClick={() => setShowLeaveGeo(true)}> how our giveaway works</button>.
          </div>
        </div>
      </div>


      {/* PopUp - Create new geo */}
      <div style={{ transition: 'opacity 0.2s', opacity: showCreateGeo === true ? 1 : 0, pointerEvents: showCreateGeo === true ? 'auto' : 'none' }}>
        <div className="fixed inset-0 bg-black-100 opacity-40 z-10"></div>
        <div className="font-inter outline outline-1 rounded-3xl p-10 w-96 bg-white-200 z-20" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-54%)` }}>
          <div className="inline-flex items-center mb-0">
            <img src={car_icon} alt='car_icon' className='h-16 object-contain ' />
          </div>
          <div className="font-bold text-2xl mb-1">Going to Geo-Creator...</div>
          <div className="text-sm mb-8">You’re about to leave this page to create your own custom Geo-Sol with our Geo-Creator.</div>
          <div className="flex justify-center">
            <button className="underline underline-offset-4 text-sm px-4 mr-6" onClick={() => setShowCreateGeo(false)}>Skip</button>
            <button className='w-full rounded-full bg-black-200 items-center justify-center flex' onClick={leaveToCreate}>
              <div className="text-sm font-inter py-3 px-6 text-white-100">Go</div>
            </button>
          </div>
        </div>
      </div>

      {/* PopUp - Email sent */}
      <div style={{ transition: 'opacity 0.2s', opacity: showEmailSent === true ? 1 : 0, pointerEvents: showEmailSent === true ? 'auto' : 'none' }}>
        <div className="fixed inset-0 bg-black-100 opacity-40 z-10"></div>
        <div className="font-inter outline outline-1 rounded-3xl p-10 w-96 bg-white-200 z-20" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-54%)` }}>
          <div className="inline-flex items-center mb-0">
            <img src={email_icon} alt='email_icon' className='h-16 object-contain ' />
          </div>
          <div className="font-bold text-2xl mb-1">Email sent!</div>
          <div className="text-sm mb-0">Confirmation of today’s entry and game results have been sent to {details.to_email}.</div>
          <div className="text-sm mb-8">This giveaway ends on April 19th, 2024 at 11:59 PM EST. 10 winners will be announced on April 21st via email.</div>
          <div className="flex justify-center">
            <button className='w-full rounded-full bg-black-200 items-center justify-center flex' onClick={() => { setShowEmailSent(false); handleClearEmail(); }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  setShowEmailSent(false);
                  handleClearEmail();
                }
              }

              }>
              <div className="text-sm font-inter py-3 px-6 text-white-100">Thank you!</div>
            </button>
          </div>
        </div>
      </div>

      {/* PopUp - Quit game*/}
      <div style={{ transition: 'opacity 0.2s', opacity: showQuitGame === true ? 1 : 0, pointerEvents: showQuitGame === true ? 'auto' : 'none' }}>
        <div className="fixed inset-0 bg-black-100 opacity-40 z-10"></div>
        <div className="font-inter outline outline-1 rounded-3xl p-10 w-96 bg-white-200 z-20" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-54%)` }}>
          <div className="inline-flex items-center mb-0">
            <img src={quit_icon} alt='quit_icon' className='h-16 object-contain ' />
          </div>
          <div className="font-bold text-2xl mb-1">Quit game?</div>
          <div className="text-sm mb-8">Progress you made are not saved. Are you sure you want to quit?</div>
          <div className="flex justify-center">
            <button className="underline underline-offset-4 text-sm px-4 mr-6" onClick={quitGame}>Quit</button>
            <button className='w-full rounded-full bg-black-200 items-center justify-center flex' onClick={() => setShowQuitGame(false)}>
              <div className="text-sm font-inter py-3 px-6 text-white-100">Keep playing</div>
            </button>
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

export default Play