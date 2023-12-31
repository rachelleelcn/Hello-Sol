import { BrowserRouter as Router, Routes, Route, NavLink,  useLocation } from 'react-router-dom';
import geo_icon from "../assets/icons/geo.png";

const Navbar = () => {

    const location = useLocation();
    const isActive = (to) => {
        return location.pathname === to;
    };

    const handleClick = () => {
        window.location.reload();
      };
    
    return (
        <header className='header'>
            <NavLink to='/learn' onClick={() => (isActive('/learn') ? handleClick() : null)}>
                <div className="text-xl font-bold font-inter">Hello-Sol</div>
            </NavLink>
            <nav className='items-center justify-center flex gap-8'>
                <NavLink to='/learn' className={({ isActive }) => isActive ? "underline underline-offset-4" : null } onClick={() => (isActive('/learn') ? handleClick() : null)}>
                    <div className="text-sm font-inter">Learn</div>
                </NavLink>
                <NavLink to='/create' className={({ isActive }) => isActive ? "underline underline-offset-4" : null } onClick={() => (isActive('/create') ? handleClick() : null)}>
                    <div className="text-sm font-inter">Create</div>
                </NavLink>
                <NavLink to='/play' className='rounded-full bg-black-200 items-center justify-center flex' onClick={() => (isActive('/play') ? handleClick() : null)}>
                    <div className="text-white-100 text-sm font-inter py-2 px-6">Play</div>
                </NavLink>
                <NavLink to='/geo' onClick={() => (isActive('/geo') ? handleClick() : null)}>
                    <img src={geo_icon} alt='geo-logo' className='w-10 object-contain mt-1.5' />
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;