import { NavLink } from "react-router-dom";

import geo from "../assets/icons/geo.png";

const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to='/learn'>
                <div className="text-xl font-bold font-inter">Hello-Sol</div>
            </NavLink>
            <nav className='items-center justify-center flex gap-8'>
                <NavLink to='/learn'>
                    <div className="text-sm font-normal font-inter">Learn</div>
                </NavLink>
                <NavLink to='/create'>
                    <div className="text-sm font-normal font-inter">Create</div>
                </NavLink>
                <NavLink to='/play' className='rounded-full bg-black-200 w-20 h-9 items-center justify-center flex'>
                    <div className="text-white-100 text-sm font-normal font-inter">Play</div>
                </NavLink>
                <NavLink to='/geo'>
                    <img src={geo} alt='geo-logo' className='w-10 object-contain mt-1.5' />
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;