import React from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar bg-white max-w-[1200px] mx-auto text-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1 md:p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-fit p-1 sm:p-2 shadow text-white">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/all-apps'>Apps</NavLink></li>
                        <li><NavLink to='/installed-apps'>Installation</NavLink></li>
                    </ul>
                </div>
                <Link to='/' className="font-bold text-[10px] sm:[15px] md:text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent flex items-center">
                    <img src="/src/assets/logo.png" className='w-[30px]' alt="" />
                    HERO.IO
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/all-apps'>Apps</NavLink></li>
                    <li><NavLink to='/installed-apps'>Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-none" href='https://github.com/naymulislamnay'>
                    <i class="fa-brands fa-github"></i>
                    Contribute
                </a>
            </div>
        </div>


    );
};

export default Navbar;