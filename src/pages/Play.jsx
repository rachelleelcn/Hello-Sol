/* eslint-disable react/no-unknown-property */
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import { useSound } from 'use-sound'
import { CookiesProvider, useCookies } from 'react-cookie';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei'
import city from "../assets/lighting/potsdamer_platz_1k.hdr";

import geo_icon from "../assets/icons/geo.png";
import go_icon from "../assets/icons/go.png";
import go_diagonal from "../assets/icons/go_diagonal.png";
import add_icon from "../assets/icons/add.png";
import close_icon from "../assets/icons/close.png";
import share_icon from "../assets/icons/share.png";
import mute_icon from "../assets/icons/mute.png";
import controls_icon from "../assets/icons/controls.png";
import sound_icon from "../assets/icons/sound.png";
import music_icon from "../assets/icons/music.png";
import no_music_icon from "../assets/icons/no_music.png";
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

import ev_image from '../assets/images/ev-whole.jpg'
import bgm from '../assets/audio/bgm_default.mp3'
import bgmFast from '../assets/audio/bgm_fast.mp3'
import winSFX from '../assets/audio/Win.mp3'
import loseSFX from '../assets/audio/Lose.mp3'

import town_image from "../assets/images/play_landing.png";
import leaf6_bonus from "../assets/images/leaf6_bonus.png";
import leaf6 from "../assets/images/leaf6.png";
import leaf5 from "../assets/images/leaf5.png";
import leaf4 from "../assets/images/leaf4.png";
import leaf3 from "../assets/images/leaf3.png";
import leaf2 from "../assets/images/leaf2.png";
import leaf1 from "../assets/images/leaf1.png";
import leaf0 from "../assets/images/leaf0.png";
import charger1 from "../assets/images/charger1.png";
import play_arrow from "../assets/graphics/play_arrow.png";


import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, XIcon, WhatsappIcon, PinterestShareButton, PinterestIcon, RedditShareButton, RedditIcon } from 'react-share';
import { sendCustomEmail } from "./email";
import { Scene } from './Sandbox';
import { CarThumbnail } from './CarCookie';

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

  // Cookie variables (for car selection)
  const [cookies, setCookie] = useCookies(['CAR_COOKIE']);
  const configuredCar = cookies['CAR_COOKIE'];
  const [selectedButton, setSelectedButton] = useState('EV')
  const [selectedCar, setSelectedCar] = useState(null)

  // Game variables
  const [startGame, setStartGame] = useState(false);
  const [entries, setEntries] = useState(0);
  const [enableControls, setEnableControls] = useState(true)
  const bannerUrl = "https://drive.google.com/uc?export=download&id=1XjjptZBsovPQDdHkR-Ok_6vg7VtVDCNm";

  // Audio variables
  const [musicOff, setMusicOff] = useState(false);

  const [sfxOff, setSfxOff] = useState(false);
  const [playWinSFX] = useSound(winSFX, {volume: 0.8})
  const [playLoseSFX] = useSound(loseSFX, {volume: 0.8})


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

    // Instructions
    if (index < 3) {
      setStartGame(false)
      setEnableControls(false)
    }
    // Results page
    else if (index === 4) {
      resetTimer()
      setElapsedTime(elapsedTime)
      setEnableControls(false)
      setMusicOff(true)

      if (!sfxOff) {
        if (entries < 1) { playLoseSFX() }
        else { playWinSFX() }
      }
    }
    // Game
    else {
      setStartGame(true);
      setEnableControls(true)
    }
  };

  const quitGame = () => {
    setCurrentSection(1);
    setShowQuitGame(false);
    setStartGame(false);
    setEntries(0)
    resetTimer()
  };

  const leaveToCreate = () => {
    setShowCreateGeo(false);
    navigate('/Hello-Sol/create');
  };

  const musicToggle = () => {
    if (musicOff) {
      setMusicOff(false);
    }
    else {
      setMusicOff(true);
    }
  };

  const sfxToggle = () => {
    if (sfxOff) {
      setSfxOff(false)
    }
    else {
      setSfxOff(true)
    }
  }

  const controlsToggle = () => {
    if (showControls) {
      setShowControls(false);
    } else {
      setShowControls(true);
    }
  };

  function onChange(newName) { setCookie('name', newName) }

  function SelectedCar(selectedCar) { setSelectedCar(selectedCar) }

  // Timer logic
  useEffect(() => {
    if (isRunning) {
      let timer = duration
      var mins, secs

      const interval = setInterval(function () {
        // If time runs out, show results and reset timer
        if (--timer <= 0) {
          goSection(4)
          resetTimer()
          setElapsedTime(duration)

          setEnableControls(false)

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

  // show results when entries is 6
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

  // result text

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
      const town = new Image();
      town.src = town_image;
      const geo = new Image();
      geo.src = geo_icon;
      const leaf = new Image();
      if (entries === 6 && elapsedTime < 180) {
        leaf.src = leaf6_bonus;
      } else if (entries === 6 && elapsedTime >= 180) {
        leaf.src = leaf6;
      } else if (entries === 5) {
        leaf.src = leaf5;
      } else if (entries === 4) {
        leaf.src = leaf4;
      } else if (entries === 3) {
        leaf.src = leaf3;
      } else if (entries === 2) {
        leaf.src = leaf2;
      } else if (entries === 1) {
        leaf.src = leaf1;
      } else if (entries === 0) {
        leaf.src = leaf0;
      }


      leaf.onload = function () {
        const leafHeight = 100;
        const leafAspectRatio = leaf.width / leaf.height;
        const leafWidth = leafHeight * leafAspectRatio;

        newContext.fillStyle = 'black';
        newContext.font = 'bold 72px Inter';

        if (entries === 6 && elapsedTime < 180) {
          newContext.fillText('Congratulations!', 120, 180);
          newContext.font = '36px Inter';
          newContext.fillText('You have successfully earned all 6 entries', 120, 260);
          newContext.fillText('and a bonus entry to our giveaway!', 120, 306);

        } else if (entries === 6 && elapsedTime >= 180) {
          newContext.fillText('Congratulations!', 120, 180);
          newContext.font = '36px Inter';
          newContext.fillText('You have successfully earned all 6 entries', 120, 260);
          newContext.fillText('to our giveaway!', 120, 306);

        } else if (entries > 0 && entries < 6) {
          newContext.fillText('Congratulations!', 120, 180);
          newContext.font = '36px Inter';
          newContext.fillText(`You have successfully earned ${entries} entries`, 120, 260);
          newContext.fillText('to our giveaway!', 120, 306);

        } else if (entries === 0) {
          newContext.fillText('Good try!', 120, 180);
          newContext.font = '36px Inter';
          newContext.fillText('Unfortunately, you have missed today’s entry', 120, 260);
          newContext.fillText('to our giveaway.', 120, 306);

        }


        newContext.font = '36px Inter';
        const dateText = `    ──    ${dateFormat}    ──    `;
        const dateTextWidth = newContext.measureText(dateText).width;
        const dateTextX = (newCanvas.width - dateTextWidth) / 2;
        newContext.fillText(dateText, dateTextX, 430);

        newContext.font = 'bold 36px Inter';
        const dayText = 'Day 1';
        const dayTextWidth = newContext.measureText(dayText).width;
        const dayTextX = dateTextX - dayTextWidth;
        newContext.fillText(dayText, dayTextX, 430);

        const timeText = timeFormat;
        const timeTextX = dateTextX + dateTextWidth;
        newContext.fillText(timeText, timeTextX, 430);

        newContext.drawImage(leaf, (newCanvas.width - leafWidth) / 2, 470, leafWidth, leafHeight);

        const townHeight = 940;
        const townAspectRatio = town.width / town.height;
        const townWidth = townHeight * townAspectRatio;
        newContext.drawImage(town, 60, 680, townWidth, townHeight);

        newContext.fillRect(48, newCanvas.height - 108, newCanvas.width - 96, 1);
        newContext.font = 'bold 28px Inter';
        newContext.fillText('Hello-Sol', 48, newCanvas.height - 48);
        const geoHeight = 26;
        const geoAspectRatio = geo.width / geo.height;
        const geoWidth = geoHeight * geoAspectRatio;
        newContext.drawImage(geo, newCanvas.width - 48 - geoWidth, newCanvas.height - 48 - geoHeight + 8, geoWidth, geoHeight);

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

  return (
    <section className='w-full h-screen relative bg-white-200'>

      {/* Render scene */}
      {currentSection > 2 && currentSection < 5 && (
        <div style={{ width: '100%', height: '100%' }}>
          {/* Toggle music */}
          <group>
            {!musicOff && elapsedTime < 210 && (
              <audio src={bgm} autoPlay loop />
            )}

            {/* sped up at 30 seconds */}
            {!musicOff && elapsedTime >= 210 && (
              <audio src={bgmFast} autoPlay loop />
            )}
          </group>


            <Scene entries={entries} setEntries={setEntries} 
                   enableControls={enableControls}
                   soundOff={sfxOff}
                   selectedCar={selectedCar}/>
          </div>
        )}



      <div className="h-screen bg-white-200 absolute inset-0 z-0" style={{ transition: 'opacity 0.2s', opacity: startGame ? 0 : 1, pointerEvents: startGame ? 'none' : 'auto' }}></div>

      {/* P1 - Landing */}
      <div className="font-inter" style={{ position: 'fixed', top: '50%', left: '8%', transform: 'translateY(-49%)', transition: 'opacity 0.2s', opacity: currentSection === 1 ? 1 : 0, pointerEvents: currentSection === 1 ? 'auto' : 'none' }}>
        <div className="text-3xl font-bold pb-2">Welcome to Geo-Town</div>
        <div className="text-xl  font-inter pb-5">
          Play for a chance to win a Geo-Energy portable charger!
        </div>
        <div className="text-sm w-[53%] pb-6">
          Find the 6 charging stations located across Geo-Town before the time runs out to earn entries to our giveaway. The more entries you have, the higher your chances of winning!
        </div>

        <div className="text-xs pb-8 text-grey-100">
          Play daily from <span className="underline underline-offset-4"> April 5th to 19th, 2024</span>.
        </div>

        <div className='w-72 rounded-full outline outline-1 p-2 flex items-center justify-between mb-8'>
          <div className="font-inter pl-2">Visit Geo.com to learn more</div>
          <button onClick={() => setShowLeaveGeo(true)}>
            <img src={go_diagonal} alt='go-icon' className='w-10 object-contain' />
          </button>
        </div>

        <div className="flex items-center gap-8 mb-12 mt-12">
          <img src={charger1} alt='' className='h-32 object-contain -rotate-12' />
          <img src={play_arrow} alt='' className='h-1.5 object-contain -ml-16' />
          <div className="text-sm w-60">
            <div className="font-bold pb-1">Geo-Energy portable charger</div>
            <div>A smarter, safer, and more portable solution to charge your EV.</div>
          </div>
        </div>

        <button className='w-40 rounded-full bg-black-200 items-center justify-center flex' onClick={() => goSection(2)}>
          <div className="text-sm py-3 px-6 text-white-100">Start game</div>
        </button>

      </div>

      <div className="w-full" style={{ position: 'fixed', top: '20%', left: '48%', transition: 'opacity 0.2s', opacity: currentSection === 1 ? 1 : 0, pointerEvents: currentSection === 1 ? 'auto' : 'none' }}>
        <img src={town_image} alt='go-icon' className='w-[72%] object-contain' />
      </div>


      {/* P2 - Pre-game instructions */}
      <div style={{ transition: 'opacity 0.2s', opacity: currentSection === 2 ? 1 : 0, pointerEvents: currentSection === 2 ? 'auto' : 'none' }}>
        <div className="font-inter" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-48%)` }}>
          <div className="flex">
            <div className="flex flex-col">
              <div className="text-3xl font-bold pb-3">Instructions</div>
              <div className="text-sm w-[680px] pb-4 mr-4">
                You have <span className='font-bold'>4 minutes</span> to drive around Geo-Town to locate the 6 hidden charging stations, each represented by a green box with a leaf symbol. Each station you collect counts as 1 entry to the giveaway. Collect all 6 stations within <span className="font-bold">3 minutes</span> to earn a bonus entry to the giveaway!
              </div>

              <div className="text-xs text-grey-100 pb-8">
                <span className='font-bold'>Hint:</span> There is a station located within each of the 6 uniquely colored sections.
              </div>
            </div>
            <div className="h-32 flex items-center justify-center mt-4">
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


          {/* Car selection */}
          <hr className="border-black-100 border-t-1 my-10" />
          <div className=" text-sm font-bold pb-4">Select your car:</div>

          <div className="flex gap-6">
            <CookiesProvider defaultSetOptions={{ path: '/' }}>
              {/* Default (EV) */}
              <button className={`w-36 min-w-min h-36 rounded-3xl bg-white-100 p-4 flex flex-col items-center text-center 
                      ${selectedButton === 'EV' ? 'outline outline-1' : ''}`}

                onClick={() => {
                  // onChange('EV')
                  setSelectedButton('EV');
                  SelectedCar('EV');
                }}>
                <div className="w-20 h-full bg-white-100 pt-2 -ml-1">
                  <img src={ev_image} className='h-full object-contain' />

                </div>
                <div className="text-xs"><br />Geo-Sol</div>
              </button>


              {/* Configured car - only appear if there is one made */}
              {configuredCar && (
                <button className={`w-36 min-w-min h-36 rounded-3xl bg-white-100 p-4 flex flex-col items-center text-center 
                        ${selectedButton === 'configuredCar' ? 'outline outline-1' : ''}`}
                  onClick={() => {
                    onChange(configuredCar.name)
                    setSelectedButton('configuredCar');
                    SelectedCar('configuredCar');
                  }} >


                  <div className="w-24 h-[88px] bg-white-100 -ml-1.5">
                    <Canvas>
                      <Environment files={city} />
                      <PerspectiveCamera makeDefault position={[0, -0.23, 2.4]} />
                      <group position={[0.4, -0.05, 0]} rotation-y={Math.PI} >
                        <group rotation={[-0.04, -0.7, 0]} >
                          <CarThumbnail />
                        </group>
                      </group>
                    </Canvas>
                  </div>

                  <div className="text-xs whitespace-nowrap pt-2">{configuredCar.name}&apos;s Geo</div>
                </button>
              )}
            </CookiesProvider>


            {/* Create car */}
            <button className="w-36 h-36 rounded-full bg-white-100 p-4 flex flex-col items-center text-center justify-center"
              onClick={() => setShowCreateGeo(true)}>
              <img src={add_icon} alt='go-icon' className='w-10 object-contain mb-2' />
              <div className="text-xs font-bold w-24 pb-1">Create new dream Geo</div>
            </button>
          </div>




          <div className="flex mt-10 justify-end">
            <button className="underline underline-offset-4 text-sm px-4 mr-6" onClick={() => goSection(1)}>Back</button>
            <button className='w-40 rounded-full bg-black-200 items-center justify-center flex'
              onClick={() => {
                goSection(3)
                startTimer()
              }}>
              <div className="text-sm font-inter py-3 px-6 text-white-100">Play now</div>
            </button>
          </div>
        </div>

        {/* <div className="flex" style={{ position: 'fixed', bottom: '5%', right: '3.5%' }}>
          <button className="underline underline-offset-4 text-sm px-4 mr-6" onClick={() => goSection(1)}>Back</button>
          <button className='w-40 rounded-full bg-black-200 items-center justify-center flex'
            onClick={() => {
              goSection(3)
              startTimer()
            }}>
            <div className="text-sm font-inter py-3 px-6 text-white-100">Play now</div>
          </button>
        </div> */}


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

          {/* Music button */}
          <button className='w-11 h-11 rounded-full outline outline-1 flex items-center justify-center' onClick={musicToggle}>
            {musicOff ? (
              <img src={no_music_icon} alt='no-music-icon' className='w-5 object-contain' />
            ) : (
              <img src={music_icon} alt='music-icon' className='w-5 object-contain' />
            )}
          </button>

          {/* SFX button */}
          <button className='w-11 h-11 rounded-full outline outline-1 flex items-center justify-center' onClick={sfxToggle}>
            {sfxOff ? (
              <img src={mute_icon} alt='mute-icon' className='w-5 object-contain' />
            ) : (
              <img src={sound_icon} alt='sound-icon' className='w-5 object-contain' />
            )}
          </button>
        </div>

        {/* Game Controls */}
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
                    <div className="font-bold">Hold Shift</div>
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
        <div className={`font-bold text-xl ${minutes === 0 && seconds <= 30 ? 'text-red-100' : ''}`} style={{ position: 'fixed', bottom: '5%', left: '50%', transform: 'translateX(-50%)' }}>
          {minutes} <span>:</span> {seconds}
        </div>

        {/* Collected station indicators */}
        <div className="flex flex-col items-center gap-3" style={{ position: 'fixed', top: '50%', transform: 'translateY(-54%)', right: '3.5%' }}>

          <div className={`w-11 h-11 rounded-full ${entries > 0 ? 'bg-green-100' : ''} flex justify-center items-center`}>
            {entries > 0 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-8 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-8 object-contain' />
            )}
          </div>
          <div className={`w-11 h-11 rounded-full ${entries > 1 ? 'bg-green-100' : ''} flex justify-center items-center`}>
            {entries > 1 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-8 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-8 object-contain' />
            )}
          </div>
          <div className={`w-11 h-11 rounded-full ${entries > 2 ? 'bg-green-100' : ''} flex justify-center items-center`}>
            {entries > 2 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-8 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-8 object-contain' />
            )}
          </div>
          <div className={`w-11 h-11 rounded-full ${entries > 3 ? 'bg-green-100' : ''} flex justify-center items-center`}>
            {entries > 3 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-8 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-8 object-contain' />
            )}
          </div>
          <div className={`w-11 h-11 rounded-full ${entries > 4 ? 'bg-green-100' : ''} flex justify-center items-center`}>
            {entries > 4 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-8 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-8 object-contain' />
            )}
          </div>
          <div className={`w-11 h-11 rounded-full ${entries > 5 ? 'bg-green-100' : ''} flex justify-center items-center`}>
            {entries > 5 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-8 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-8 object-contain' />
            )}
          </div>
        </div>

        {/* for testing - TO BE DELETED */}
        {/* <div className="flex gap-2" style={{ position: 'fixed', top: '5%', left: '50%', transform: `translateX(-50%)` }}>
          <button className='w-40 rounded-full outline outline-1 items-center justify-center flex py-3 px-6 gap-2' onClick={() => { setEntries(6); goSection(4); }}>
            <div className="text-sm font-inter text-black-100">All Entries</div>
          </button>
          <button className='w-40 rounded-full outline outline-1 items-center justify-center flex py-3 px-6 gap-2' onClick={() => { setEntries(3); goSection(4); }}>
            <div className="text-sm font-inter text-black-100">Some Entries</div>
          </button>
          <button className='w-40 rounded-full outline outline-1 items-center justify-center flex py-3 px-6 gap-2' onClick={() => { setEntries(0); goSection(4); }}>
            <div className="text-sm font-inter text-black-100">No Entries</div>
          </button>
        </div> */}

      </div>


      {/* P4 - Results*/}

      {/* for testing - TO BE DELETED */}
      {/* <div className="flex gap-2" style={{ position: 'fixed', top: '5%', left: '50%', transform: `translateX(-50%)`, transition: 'opacity 0.2s', opacity: currentSection === 4 ? 1 : 0, pointerEvents: currentSection === 4 ? 'auto' : 'none' }}>
        <button className='w-40 rounded-full outline outline-1 items-center justify-center flex py-3 px-6 gap-2' onClick={() => { goSection(3); setEntries(0) }}>
          <div className="text-sm font-inter text-black-100">Back</div>
        </button>
      </div> */}

      <div className="font-inter outline outline-1 rounded-3xl p-12 w-[416px] bg-white-200/90" style={{ position: 'fixed', top: '50%', right: currentSection === 4 ? '3.5%' : '1.5%', transform: 'translateY(-48%)', transition: 'right 0.4s, opacity 0.2s', opacity: currentSection === 4 ? 1 : 0, pointerEvents: currentSection === 4 ? 'auto' : 'none' }}>
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
        {entries === 6 && elapsedTime < 180 && (
          <div>
            <div className="font-bold text-3xl pb-2">Congratulations!</div>
            <div className="text-base pb-6">You have successfully earned all 6 entries and a bonus entry to our giveaway!</div>
          </div>
        )}

        {entries === 6 && elapsedTime >= 180 && (
          <div>
            <div className="font-bold text-3xl pb-2">Congratulations!</div>
            <div className="text-base pb-6">You have successfully earned all 6 entries to our giveaway!</div>
          </div>
        )}

        {entries > 0 && entries < 6 && elapsedTime >= 180 && (
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

          </div>
        </div>

        {/* Indicators of # of stations found */}
        <div className="flex gap-2 justify-center items-center pb-8">
          <div className={`w-8 h-8 rounded-full ${entries > 0 ? 'bg-green-100' : ''} flex justify-center items-center`}>
            {entries > 0 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-5 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-5 object-contain' />
            )}
          </div>
          <div className={`w-8 h-8 rounded-full ${entries > 1 ? 'bg-green-100' : ''} flex justify-center items-center`}>
            {entries > 1 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-5 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-5 object-contain' />
            )}
          </div>
          <div className={`w-8 h-8 rounded-full ${entries > 2 ? 'bg-green-100' : ''} flex justify-center items-center`}>
            {entries > 2 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-5 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-5 object-contain' />
            )}
          </div>
          {entries === 6 && elapsedTime <= 180 && (
            <div className="relative">
              <div className="w-10 h-10 rounded-full outline outline-1"></div>
              <div className="w-8 h-8 rounded-full bg-green-100 outline outline-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                <img src={leaf_icon} alt='leaf-icon' className='w-5 object-contain' />
              </div>
            </div>
          )}
          <div className={`w-8 h-8 rounded-full ${entries > 3 ? 'bg-green-100' : ''} flex justify-center items-center`}>
            {entries > 3 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-5 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-5 object-contain' />
            )}
          </div>
          <div className={`w-8 h-8 rounded-full ${entries > 4 ? 'bg-green-100' : ''} flex justify-center items-center`}>
            {entries > 4 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-5 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-5 object-contain' />
            )}
          </div>
          <div className={`w-8 h-8 rounded-full ${entries > 5 ? 'bg-green-100' : ''} flex justify-center items-center`}>
            {entries > 5 ? (
              <img src={leaf_icon} alt='leaf-icon' className='w-5 object-contain' />
            ) : (
              <img src={leafGrey_icon} alt='leafGrey-icon' className='w-5 object-contain' />
            )}
          </div>
        </div>

        {/* Email text field */}
        {entries > 0 && (
          <div className="outline outline-1 rounded-2xl p-6 pt-[22px] mb-6 ">
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
              }}>
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
              <div className="font-bold text-2xl mb-4">Share your results!</div>
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