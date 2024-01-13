import { useNavigate } from 'react-router-dom';
import { Suspense, useEffect, useState } from "react"
import go_icon from "../assets/icons/go.png";
import go_transparent_icon from "../assets/icons/go_transparent.png";
import add_icon from "../assets/icons/add.png";
import close_icon from "../assets/icons/close.png";
import info_icon from "../assets/icons/info.png";
import share_icon from "../assets/icons/share.png";


const Play = () => {

  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(1);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showEmailSent, setShowEmailSent] = useState(false);
  const [showCreateGeo, setShowCreateGeo] = useState(false);
  const [showQuitGame, setShowQuitGame] = useState(false);
  const [showLeaveGeo, setShowLeaveGeo] = useState(false);
  const [email, setEmail] = useState('');

  const leaveToGeo = () => {
    setShowLeaveGeo(false);
    navigate('/Hello-Sol/geo');
  };


  const goSection = (index) => {
    setCurrentSection(index);
  };
  const quitGame = () => {
    setCurrentSection(1);
    setShowQuitGame(false);
  };
  const leaveToCreate = () => {
    setShowCreateGeo(false);
    navigate('/Hello-Sol/create');
  };


  // for testing
  // const divElement = document.getElementById('test');
  // const width = divElement.offsetWidth;
  // const height = divElement.offsetHeight;
  // console.log("Width: " + width + ", Height: " + height);

  return (
    <section className='w-full h-screen relative bg-white-200'>

      {/* P1 - Landing */}
      <div className="font-inter" style={{ position: 'fixed', top: '50%', left: '10%', transform: 'translateY(-50%)', transition: 'opacity 0.2s', opacity: currentSection === 1 ? 1 : 0, pointerEvents: currentSection === 1 ? 'auto' : 'none' }}>
        <div className="text-3xl font-bold pb-2">Welcome to Geo-Town</div>
        <div className="text-xl text-grey-100 font-inter pb-4">
          Play for a chance to win a Geo-Energy portable charger!
        </div>

        <div className="text-sm w-[55%] pb-4">
          Navigate through Geo-Town to find all six charging stations located around the city before the time runs out, and you’ll earn a daily entry to the giveaway.
        </div>

        <div className="text-xs pb-7">
          Play daily from <span className="underline underline-offset-4"> April 5th to 19th, 2024</span>.
        </div>


        <div className='w-72 rounded-full outline outline-1 p-2 flex items-center justify-between mb-7'>
          <div className="font-inter pl-2">Visit Geo.com to learn more</div>
          <button onClick={() => setShowLeaveGeo(true)}>
            <img src={go_icon} alt='go-logo' className='w-10 object-contain' />
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
              <div className="text-sm w-[640px] pb-8 mr-4">
                Drive around to locate all six charging stations hidden across Geo-Town, each represented by a green leaf symbol. Find and collect all six stations in 5 minutes or less to win an entry to the giveaway!
              </div>
            </div>
            <div className="w-16 h-24 bg-grey-100"></div>
          </div>
          <div className="flex gap-16">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-grey-100 mr-4"></div>
              <div className="text-xs">
                <div className="font-bold">WASD / Arrow keys</div>
                <div>Steer car</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-grey-100 mr-4"></div>
              <div className="text-xs">
                <div className="font-bold">Cursor movement</div>
                <div>Rotate camera</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-grey-100 mr-4"></div>
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
              <div className="text-xs whitespace-nowrap">Jane Doe's</div>
            </button>
            <button className="w-36 h-36 rounded-full bg-white-100 p-4 flex flex-col items-center text-center justify-center" onClick={() => setShowCreateGeo(true)}>
              <div className="w-10 h-10 rounded-full mb-2 outline outline-1 flex items-center justify-center">
                <img src={add_icon} alt='add-logo' className='w-4 object-contain' />
              </div>
              <div className="text-xs font-bold w-24 pb-1">Create new dream Geo</div>
            </button>
          </div>
        </div>

        <div className="flex" style={{ position: 'fixed', bottom: '5%', right: '3.5%' }}>
          <button className="underline underline-offset-4 text-sm px-4 mr-6" onClick={() => goSection(1)}>Back</button>
          <button className='w-40 rounded-full bg-black-200 items-center justify-center flex' onClick={() => goSection(3)}>
            <div className="text-sm font-inter py-3 px-6 text-white-100">Start game</div>
          </button>
        </div>
      </div>


      {/* P3 - In-game UI */}
      <div style={{ transition: 'opacity 0.2s', opacity: currentSection === 3 ? 1 : 0, pointerEvents: currentSection === 3 ? 'auto' : 'none' }}>
        <div style={{ position: 'fixed', bottom: '5%', right: '3.5%' }}>
          <button className='w-40 rounded-full outline outline-1 items-center justify-center flex py-3 px-6 gap-2' onClick={() => setShowQuitGame(true)}>
            <img src={close_icon} alt='close-logo' className='w-4 object-contain' />
            <div className="text-sm font-inter text-black-100 pr-1.5">Quit game</div>
          </button>
        </div>

        <div className="flex items-center gap-6" style={{ position: 'fixed', bottom: '5%', left: '3.5%' }}>
          <button className='w-12 h-12 rounded-full outline outline-1  flex items-center justify-center' onClick={() => setShowInstructions(true)}>
            <img src={info_icon} alt='info-logo' className='w-5 object-contain' />
          </button>
          <div className="font-bold text-2xl ">5:00</div>
        </div>

        <div className="flex flex-col items-center gap-2" style={{ position: 'fixed', top: '50%', transform: 'translateY(-54%)', right: '3.5%' }}>
          <div className="w-12 h-12 bg-grey-100 rounded-full outline outline-1"></div>
          <div className="w-12 h-12 bg-grey-100 rounded-full"></div>
          <div className="w-12 h-12 bg-grey-100 rounded-full"></div>
          <div className="w-12 h-12 bg-grey-100 rounded-full"></div>
          <div className="w-12 h-12 bg-grey-100 rounded-full"></div>
          <div className="w-12 h-12 bg-grey-100 rounded-full"></div>
        </div>

        {/* for testing - TO BE DELETED */}
        <div className="flex gap-2" style={{ position: 'fixed', bottom: '5%', left: '50%', transform: `translateX(-50%)` }}>
          <button className='w-20 rounded-full outline outline-1 items-center justify-center flex py-3 px-6 gap-2' onClick={() => goSection(4)}>
            <div className="text-sm font-inter text-black-100">Win</div>
          </button>
          <button className='w-20 rounded-full outline outline-1 items-center justify-center flex py-3 px-6 gap-2' onClick={() => goSection(5)}>
            <div className="text-sm font-inter text-black-100">Lose</div>
          </button>
        </div>
      </div>



      {/* P4 - Win*/}
      <div className="font-inter outline outline-1 rounded-3xl p-12 w-[420px]" style={{ position: 'fixed', top: '50%', right: '3.5%', transform: 'translateY(-48%)', transition: 'opacity 0.2s', opacity: currentSection === 4 ? 1 : 0, pointerEvents: currentSection === 4 ? 'auto' : 'none' }}>
        <button className='absolute w-10 h-10 rounded-full outline outline-1 flex items-center justify-center right-6 top-6'>
          <img src={share_icon} alt='share-logo' className='w-4 object-contain' />
        </button>
        <div className="font-bold text-3xl pb-2">Congratulations!</div>
        <div className="text-base pb-6">You have successfully unlocked today’s entry to our giveaway!</div>
        <div className="flex gap-4 pb-4 justify-center items-center">
          <div className="text-base font-bold">Day 6</div>
          <hr className="border-black-100 border-t-1 w-8" />
          <div className="text-base">April 10th, 2024</div>
          <hr className="border-black-100 border-t-1 w-8" />
          <div className="text-base font-bold">2:05</div>
        </div>
        <div className="flex gap-2 justify-center items-center pb-8">
          <div className="w-10 h-10 bg-grey-100 rounded-full outline outline-1"></div>
          <div className="w-10 h-10 bg-grey-100 rounded-full outline outline-1"></div>
          <div className="w-10 h-10 bg-grey-100 rounded-full outline outline-1"></div>
          <div className="w-10 h-10 bg-grey-100 rounded-full outline outline-1"></div>
          <div className="w-10 h-10 bg-grey-100 rounded-full outline outline-1"></div>
          <div className="w-10 h-10 bg-grey-100 rounded-full outline outline-1"></div>
        </div>
        <div className="outline outline-1 rounded-2xl p-6 pt-[22px] mb-6">
          <div className="text-sm pb-2">Enter your email to be added into the draw for a Geo-Energy portable charger:</div>
          <div className="flex gap-2">
            <input
              className="border-b border-black-200 placeholder-grey-100 focus:outline-none bg-transparent text-sm p-2 w-full"
              type="text"
              placeholder="Your email"
              value={email}
              onChange={(e) => {
                const value = e.target.value;
                setEmail(value);
              }}
            />
            <button className="flex-shrink-0" onClick={() => email === '' ? null : setShowEmailSent(true)}>
              <img src={go_icon} alt='go-logo' className='w-10 object-contain' />
            </button>
          </div>
        </div>
        <div className="text-base pb-6">Come back again tomorrow for another chance to enter the draw!</div>
        <div className="flex justify-center">
          <div className="text-xs text-grey-100 text-center w-48">
            Visit Geo.com to learn more about <button className="underline underline-offset-4" onClick={() => setShowLeaveGeo(true)}> how our giveaway works</button>.
          </div>
        </div>
      </div>


      {/* P5 - Lose */}
      <div className="font-inter outline outline-1 rounded-3xl p-12 w-[420px]" style={{ position: 'fixed', top: '50%', right: '3.5%', transform: 'translateY(-48%)', transition: 'opacity 0.2s', opacity: currentSection === 5 ? 1 : 0, pointerEvents: currentSection === 5 ? 'auto' : 'none' }}>
        <button className='absolute w-10 h-10 rounded-full outline outline-1 flex items-center justify-center right-6 top-6'>
          <img src={share_icon} alt='share-logo' className='w-4 object-contain' />
        </button>
        <div className="font-bold text-3xl pb-2">Good try!</div>
        <div className="text-base pb-6">Unfortunately, you have missed today’s entry to our giveaway.</div>
        <div className="flex gap-4 pb-4 justify-center items-center">
          <div className="text-base font-bold">Day 6</div>
          <hr className="border-black-100 border-t-1 w-8" />
          <div className="text-base">April 10th, 2024</div>
          <hr className="border-black-100 border-t-1 w-8" />
          <div className="text-base font-bold">2:05</div>
        </div>
        <div className="flex gap-2 justify-center items-center pb-8">
          <div className="w-10 h-10 bg-grey-100 rounded-full outline outline-1"></div>
          <div className="w-10 h-10 bg-grey-100 rounded-full outline outline-1"></div>
          <div className="w-10 h-10 bg-grey-100 rounded-full outline outline-1"></div>
          <div className="w-10 h-10 bg-grey-100 rounded-full"></div>
          <div className="w-10 h-10 bg-grey-100 rounded-full"></div>
          <div className="w-10 h-10 bg-grey-100 rounded-full"></div>
        </div>

        <div className="text-base pb-6">Come back again tomorrow for another chance to enter the draw!</div>
        <div className="flex justify-center">
          <div className="text-xs text-grey-100 text-center w-48">
            Visit Geo.com to learn more about <button className="underline underline-offset-4" onClick={() => setShowLeaveGeo(true)}> how our giveaway works</button>.
          </div>
        </div>
      </div>

      {/* In-game instructions */}
      <div style={{ transition: 'opacity 0.2s', opacity: showInstructions === true ? 1 : 0, pointerEvents: showInstructions === true ? 'auto' : 'none' }}>
        <div className="fixed inset-0 bg-black-100 opacity-40 z-10"></div>
        <div className="font-inter outline outline-1 rounded-3xl p-16 bg-white-200 z-20" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-54%)` }}>
          <button className="absolute top-2 right-2 p-4" onClick={() => setShowInstructions(false)}>
            <img src={close_icon} alt='close-logo' className='w-4 object-contain' />
          </button>
          <div className="flex">
            <div className="flex flex-col">
              <div className="text-3xl font-bold pb-3">Instructions</div>
              <div className="text-sm w-[640px] pb-12 mr-4">
                Drive around to locate all six charging stations hidden across Geo-Town, each represented by a green leaf symbol. Find and collect all six stations in 5 minutes or less to win an entry to the giveaway!
              </div>
            </div>
            <div className="w-16 h-24 bg-grey-100"></div>
          </div>
          <div className="flex gap-16">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-grey-100 mr-4"></div>
              <div className="text-xs">
                <div className="font-bold">WASD / Arrow keys</div>
                <div>Steer car</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-grey-100 mr-4"></div>
              <div className="text-xs">
                <div className="font-bold">Cursor movement</div>
                <div>Rotate camera</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-grey-100 mr-4"></div>
              <div className="text-xs">
                <div className="font-bold">Cursor click</div>
                <div>Collect stations</div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* PopUp - Create new geo */}
      <div style={{ transition: 'opacity 0.2s', opacity: showCreateGeo === true ? 1 : 0, pointerEvents: showCreateGeo === true ? 'auto' : 'none' }}>
        <div className="fixed inset-0 bg-black-100 opacity-40 z-10"></div>
        <div className="font-inter outline outline-1 rounded-3xl p-10 w-96 bg-white-200 z-20" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-54%)` }}>
          <div className="w-12 h-12 bg-grey-100 rounded-full mb-4"></div>
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
          <div className="w-12 h-12 bg-grey-100 rounded-full mb-4"></div>
          <div className="font-bold text-2xl mb-1">Email sent!</div>
          <div className="text-sm mb-0">Confirmation of today’s entry and game results have been sent to email@email.com.</div>
          <div className="text-sm mb-8">This giveaway ends on April 19th, 2024 at 11:59 PM EST. 10 winners will be announced on April 21st via email.</div>
          <div className="flex justify-center">
            <button className='w-full rounded-full bg-black-200 items-center justify-center flex' onClick={() => setShowEmailSent(false)}>
              <div className="text-sm font-inter py-3 px-6 text-white-100">Thank you!</div>
            </button>
          </div>
        </div>
      </div>

      {/* PopUp - Quit game*/}
      <div style={{ transition: 'opacity 0.2s', opacity: showQuitGame === true ? 1 : 0, pointerEvents: showQuitGame === true ? 'auto' : 'none' }}>
        <div className="fixed inset-0 bg-black-100 opacity-40 z-10"></div>
        <div className="font-inter outline outline-1 rounded-3xl p-10 w-96 bg-white-200 z-20" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-54%)` }}>
          <div className="w-12 h-12 bg-grey-100 rounded-full mb-4"></div>
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
          <div className="w-12 h-12 bg-grey-100 rounded-full mb-4"></div>
          <div className="font-bold text-2xl mb-1">Leaving site...</div>
          <div className="text-sm mb-8">Progress you made may no be saved. Are you sure you want to leave this page?</div>
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

export default Play