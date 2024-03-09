import { BrowserRouter as Router, Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom';
import geo_icon from "../assets/icons/geo.png";
import { useState } from 'react';
import leave_icon from "../assets/icons/leave.png";

const Navbar = () => {

    const navigate = useNavigate();
    const [showLeaveGeo, setShowLeaveGeo] = useState(false);

    const leaveToGeo = () => {
        setShowLeaveGeo(false);
        navigate('/Hello-Sol/geo');
    };

    const location = useLocation();
    const isActive = (to) => {
        return location.pathname === to;
    };

    const handleClick = () => {
        window.location.reload();
    };

    return (
        <div className='header'>
            <NavLink to='/Hello-Sol/learn' onClick={() => (isActive('/Hello-Sol/learn') ? handleClick() : null)}>
                <div className="text-xl font-bold font-inter">Hello-Sol</div>
            </NavLink>
            <nav className='items-center justify-center flex gap-8'>
                <NavLink to='/Hello-Sol/learn' className={({ isActive }) => isActive ? "underline underline-offset-4" : null} onClick={() => (isActive('/Hello-Sol/learn') ? handleClick() : null)}>
                    <div className="text-sm font-inter">Learn</div>
                </NavLink>
                <NavLink to='/Hello-Sol/create' className={({ isActive }) => isActive ? "underline underline-offset-4" : null} onClick={() => (isActive('/Hello-Sol/create') ? handleClick() : null)}>
                    <div className="text-sm font-inter">Create</div>
                </NavLink>
                <NavLink to='/Hello-Sol/play' className='rounded-full bg-black-200 items-center justify-center flex' onClick={() => (isActive('/Hello-Sol/play') ? handleClick() : null)}>
                    <div className="text-white-100 text-sm font-inter py-2 px-6">Play</div>
                </NavLink>
                <NavLink onClick={() => setShowLeaveGeo(true)}>
                    <img src={geo_icon} alt='geo-logo' className='w-10 object-contain' />
                </NavLink>
            </nav>


            {/* PopUp - Leave Geo*/}
            <div className="absolute" style={{ transition: 'opacity 0.2s', opacity: showLeaveGeo === true ? 1 : 0, pointerEvents: showLeaveGeo === true ? 'auto' : 'none' }}>
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
        </div>

    );
};

export default Navbar;