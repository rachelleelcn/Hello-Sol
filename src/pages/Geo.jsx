import { useNavigate } from 'react-router-dom';

const Geo = () => {
  const navigate = useNavigate();
  // const goBack = () => {
  //   navigate(-1); // Navigate back to the previous page
  // };

  return (
    <section className='w-full h-screen relative bg-white-200 z-10'>

      {/* <div className="font-inter text-center flex flex-col items-center" style={{ position: 'fixed', top: '50%', left: '50%', transform: `translate(-50%, -48%)` }}>
        <div className="flex items-top gap-2 pr-14">
          <div className="text-grey-100 text-2xl">(not)</div>
          <div className="font-bold whitespace-nowrap text-[80px] pb-2">Coming in 2025</div>
        </div>
        <div className='pb-40'>Geo.com is under maintenance. Please come back later.</div>

        <button className='w-40 rounded-full outline outline-1 items-center justify-center flex' onClick={goBack}>
          <div className="text-sm font-inter py-3 px-6">Back</div>
        </button>
      </div> */}

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


    </section>
  )
}

export default Geo