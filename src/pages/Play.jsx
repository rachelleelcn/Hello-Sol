// const Play = () => {
//   return (
//     <div>Play</div>
//   )
// }

// export default Play

import add_icon from "../assets/icons/add.png";
import close_icon from "../assets/icons/close.png";
import info_icon from "../assets/icons/info.png";


const Play = () => {

  // for testing
  // const divElement = document.getElementById('test');
  // const width = divElement.offsetWidth;
  // const height = divElement.offsetHeight;
  // console.log("Width: " + width + ", Height: " + height);



  return (
    <section className='w-full h-screen relative bg-white-200'>

      {/* Landing */}
      {/* <div className="font-inter" style={{ position: 'fixed', top: '15%', left: '10%' }}>
        <div className="text-3xl font-bold pb-2">Welcome to Geo-City</div>
        <div className="text-xl text-grey-100 font-inter pb-4">
          Play for a chance to win a Geo-Energy portable charger!
        </div>

        <div className="text-sm w-[55%] pb-4">
          Navigate through Geo-City to find all six charging stations located around the city before the time runs out, and you’ll earn a daily entry to the giveaway.
        </div>

        <div className="text-xs pb-7">
          Play daily from <span className="underline underline-offset-4"> April 5th to 19th, 2024</span> .
        </div>


        <div className='w-72 rounded-full outline outline-1 p-2 flex items-center justify-between mb-7'>
          <div className="font-inter pl-2">Visit Geo.com to learn more</div>
          <button>
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


        <button className='w-40 rounded-full bg-black-200 items-center justify-center flex'>
          <div className="text-sm py-3 px-6 text-white-100">Start game</div>
        </button>

      </div> */}


      {/* Pre-game instructions */}
      {/* <div className="font-inter" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-50%)` }}>

        <div className="flex gap-16 items-center justify-center">
          <div className="flex flex-col gap-4 items-center">
            <div className="font-bold text-sm pb-0">Pick your car:</div>
            <button className="w-36 min-w-min h-36 rounded-3xl outline outline-1 bg-white-100 p-4 flex flex-col items-center text-center">
              <div className="w-full h-full bg-grey-100 rounded-2xl mb-2"></div>
              <div className="text-xs">Geo-Sol</div>
            </button>
            <button className="w-36 min-w-min h-36 rounded-3xl bg-white-100 p-4 flex flex-col items-center text-center">
              <div className="w-full h-full bg-grey-100 rounded-2xl mb-2"></div>
              <div className="text-xs whitespace-nowrap">Jane Doe's</div>
            </button>
            <button className="w-36 h-36 rounded-full bg-white-100 p-4 flex flex-col items-center text-center justify-center">
              <div className="w-10 h-10 rounded-full mb-2 outline outline-1 flex items-center justify-center">
                <img src={add_icon} alt='add-logo' className='w-4 object-contain' />
              </div>
              <div className="text-xs font-bold w-24 pb-1">Create new dream Geo</div>
            </button>
          </div>

          <hr className="h-[500px] border-r border-black-100" />

          <div>
            <div className="text-3xl font-bold pb-3">Instructions</div>
            <div className="text-sm w-[500px] pb-10 mr-32">
              Drive around to locate all six charging stations hidden across Geo-City, each represented by a green leaf symbol. Find and collect all six stations in 5 minutes or less to win an entry to the giveaway!
            </div>

            <div className="w-20 h-32 bg-grey-100 absolute top-28 right-0"></div>

            <div className="flex gap-6 items-center">
              <div className="flex flex-col items-center w-32">
                <div className="w-20 h-20 rounded-full bg-grey-100 mb-2"></div>
                <div className="text-xs text-center">
                  <div className="font-bold">WASD / Arrow keys</div>
                  <div>Steer car</div>
                </div>
              </div>
              <div className="flex flex-col items-center w-32">
                <div className="w-20 h-20 rounded-full bg-grey-100 mb-2"></div>
                <div className="text-xs text-center">
                  <div className="font-bold">Cursor movement</div>
                  <div>Rotate camera</div>
                </div>
              </div>
              <div className="flex flex-col items-center w-32">
                <div className="w-20 h-20 rounded-full bg-grey-100 mb-2"></div>
                <div className="text-xs text-center">
                  <div className="font-bold">Cursor click</div>
                  <div>Collect stations</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex" style={{ position: 'fixed', bottom: '5%', right: '3.5%' }}>
        <button className="underline underline-offset-4 text-sm px-4 mr-6">Back</button>
        <button className='w-40 rounded-full bg-black-200 items-center justify-center flex'>
          <div className="text-sm font-inter py-3 px-6 text-white-100">Start game</div>
        </button>
      </div> */}


      {/* In-game instructions */}

      {/* <div className="font-inter outline outline-1 rounded-3xl p-16" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-50%)` }}>

        <button className="absolute top-4 right-4 p-4">
          <img src={close_icon} alt='close-logo' className='w-4 object-contain' />
        </button>

        <div>
          <div className="text-3xl font-bold pb-3">Instructions</div>
          <div className="text-sm w-[500px] pb-10 mr-32">
            Drive around to locate all six charging stations hidden across Geo-City, each represented by a green leaf symbol. Find and collect all six stations in 5 minutes or less to win an entry to the giveaway!
          </div>

          <div className="w-20 h-32 bg-grey-100 absolute top-20 right-16"></div>

          <div className="flex gap-6 items-center">
            <div className="flex flex-col items-center w-32">
              <div className="w-20 h-20 rounded-full bg-grey-100 mb-2"></div>
              <div className="text-xs text-center">
                <div className="font-bold">WASD / Arrow keys</div>
                <div>Steer car</div>
              </div>
            </div>
            <div className="flex flex-col items-center w-32">
              <div className="w-20 h-20 rounded-full bg-grey-100 mb-2"></div>
              <div className="text-xs text-center">
                <div className="font-bold">Cursor movement</div>
                <div>Rotate camera</div>
              </div>
            </div>
            <div className="flex flex-col items-center w-32">
              <div className="w-20 h-20 rounded-full bg-grey-100 mb-2"></div>
              <div className="text-xs text-center">
                <div className="font-bold">Cursor click</div>
                <div>Collect stations</div>
              </div>
            </div>
          </div>
        </div>

      </div> */}


      {/* In-game UI */}

      {/* <div style={{ position: 'fixed', bottom: '5%', right: '3.5%' }}>
        <button className='w-40 rounded-full outline outline-1 items-center justify-center flex py-3 px-6 gap-2'>
          <img src={close_icon} alt='close-logo' className='w-4 object-contain' />
          <div className="text-sm font-inter text-black-100 pr-1.5">Quit game</div>
        </button>
      </div>

      <div className="flex items-center gap-6" style={{ position: 'fixed', bottom: '5%', left: '3.5%' }}>
        <button className='w-12 h-12 rounded-full outline outline-1  flex items-center justify-center'>
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
      </div> */}


      {/* Win*/}



      {/* Lose */}






      {/* <div className="font-inter w-[60%] outline outline-1 rounded-3xl p-8" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-50%)` }}>
       <button className="absolute top-7 right-7">
      <img src={close_icon} alt='close-logo' className='w-4 object-contain' />
       </button>
      
       
        <div className="text-3xl font-bold pb-2">Instructions</div>
        <div className="text-sm w-4/5 pb-4">
          Drive around to locate all six charging stations hidden across Geo-City. Each station is represented by a green leaf symbol. Find and collect all six stations in 5 minutes or less to win an entry to the giveaway!
        </div>
        <div className="w-24 h-24 rounded-full bg-grey-100 absolute top-12 right-20"></div>

        <div className="flex gap-6">
          <div className="flex flex-col items-center w-32">
            <div className="w-20 h-20 rounded-full bg-grey-100 mb-2"></div>
            <div className="text-xs text-center">
              <div className="font-bold">WASD or Arrow keys</div>
              <div>Steer car</div>
            </div>
          </div>
          <div className="flex flex-col items-center w-32">
            <div className="w-20 h-20 rounded-full bg-grey-100 mb-2"></div>
            <div className="text-xs text-center">
              <div className="font-bold">Cursor movement</div>
              <div>Rotate camera</div>
            </div>
          </div>
          <div className="flex flex-col items-center w-32">
            <div className="w-20 h-20 rounded-full bg-grey-100 mb-2"></div>
            <div className="text-xs text-center">
              <div className="font-bold">Cursor click</div>
              <div>Collect stations</div>
            </div>
          </div>
        </div>

        <hr className="border-black-100 border-t-1 my-7" />

        <div className="font-bold text-2xl pb-4">Pick your car</div>

        <div className="flex gap-4 items-end">
          <button className="w-40 min-w-min h-32 rounded-3xl outline outline-1 bg-white-100 p-4 flex flex-col items-center text-center">
            <div className="w-full h-full bg-grey-100 rounded-2xl mb-2"></div>
            <div className="text-xs">Geo-Sol</div>
          </button>
          <button className="w-40 min-w-min h-32 rounded-3xl bg-white-100 p-4 flex flex-col items-center text-center">
            <div className="w-full h-full bg-grey-100 rounded-2xl mb-2"></div>
            <div className="text-xs whitespace-nowrap">Jane Doe's</div>
          </button>
          <button className="w-40 min-w-min h-32 rounded-3xl bg-white-100 p-4 flex flex-col items-center text-center justify-center">
            <div className="w-10 h-10 rounded-full mb-2 outline outline-1 flex items-center justify-center">
              <img src={add_icon} alt='add-logo' className='w-4 object-contain' />
            </div>
            <div className="text-xs font-bold w-24">Create new dream Geo</div>
          </button>

          <button className='w-40 rounded-full bg-black-200 items-center justify-center flex ml-auto'>
            <div className="text-sm py-3 px-6 text-white-100">Start game</div>
          </button>
        </div>



      </div> */}

      {/* <div className="font-inter" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%,-50%)` }}>

        <div className="text-3xl font-bold pb-2">Instructions</div>
        <div className="text-sm w-[640px] pb-4 mr-24">
          Drive around to locate all six charging stations hidden across Geo-City, each represented by a green leaf symbol. Find and collect all six stations in 5 minutes or less to win an entry to the giveaway!
        </div>

        <div className="w-20 h-32 bg-grey-100 absolute top-0 right-0"></div>

        <div className="flex gap-6 items-center">
          <div className="flex flex-col items-center w-32">
            <div className="w-16 h-16 rounded-full bg-grey-100 mb-2"></div>
            <div className="text-xs text-center">
              <div className="font-bold">WASD / Arrow keys</div>
              <div>Steer car</div>
            </div>
          </div>
          <div className="flex flex-col items-center w-32">
            <div className="w-16 h-16 rounded-full bg-grey-100 mb-2"></div>
            <div className="text-xs text-center">
              <div className="font-bold">Cursor movement</div>
              <div>Rotate camera</div>
            </div>
          </div>
          <div className="flex flex-col items-center w-32">
            <div className="w-16 h-16 rounded-full bg-grey-100 mb-2"></div>
            <div className="text-xs text-center">
              <div className="font-bold">Cursor click</div>
              <div>Collect stations</div>
            </div>
          </div>
        </div>

        <hr className="border-black-100 border-t-1 my-8" />

        <div className="font-bold text-base pb-3">Pick your car</div>

        <div className="flex gap-4 items-end">
          <button className="w-36 min-w-min h-36 rounded-3xl outline outline-1 bg-white-100 p-4 flex flex-col items-center text-center">
            <div className="w-full h-full bg-grey-100 rounded-2xl mb-2"></div>
            <div className="text-xs">Geo-Sol</div>
          </button>
          <button className="w-36 min-w-min h-36 rounded-3xl bg-white-100 p-4 flex flex-col items-center text-center">
            <div className="w-full h-full bg-grey-100 rounded-2xl mb-2"></div>
            <div className="text-xs whitespace-nowrap">Jane Doe's</div>
          </button>
          <button className="w-36 h-36 rounded-full bg-white-100 p-4 flex flex-col items-center text-center justify-center">
            <div className="w-10 h-10 rounded-full mb-2 outline outline-1 flex items-center justify-center">
              <img src={add_icon} alt='add-logo' className='w-4 object-contain' />
            </div>
            <div className="text-xs font-bold w-24 pb-1">Create new dream Geo</div>
          </button>

        </div>
      </div>

      <div className="flex" style={{ position: 'fixed', bottom: '5%', right: '3.5%' }}>
        <button className="underline underline-offset-4 text-sm px-4 mr-6">Back</button>

        <button className='w-40 rounded-full bg-black-200 items-center justify-center flex'>
          <div className="text-sm font-inter py-3 px-6 text-white-100">Start game</div>
        </button>
      </div> */}






    </section>
  )
}

export default Play