import { NavLink } from "react-router-dom";

import geo_icon from "../assets/icons/geo.png";

const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to='/learn'>
                <div className="text-xl font-bold font-inter">Hello-Sol</div>
            </NavLink>
            <nav className='items-center justify-center flex gap-8'>
                <NavLink to='/learn' className={({ isActive }) => isActive ? "underline underline-offset-4" : null }>
                    <div className="text-sm font-inter">Learn</div>
                </NavLink>
                <NavLink to='/create' className={({ isActive }) => isActive ? "underline underline-offset-4" : null }>
                    <div className="text-sm font-inter">Create</div>
                </NavLink>
                <NavLink to='/play' className='rounded-full bg-black-200 items-center justify-center flex'>
                    <div className="text-white-100 text-sm font-inter py-2 px-6">Play</div>
                </NavLink>
                <NavLink to='/geo'>
                    <img src={geo_icon} alt='geo-logo' className='w-10 object-contain mt-1.5' />
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;