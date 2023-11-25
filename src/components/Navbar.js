import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faHouse, faListCheck, faRightToBracket } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='z-50 navbar fixed flex justify-between items-center w-full px-[5%] h-[75px]' >
            <div className="hamberger block md:hidden">
                <img src="https://www.clipartmax.com/png/full/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png" className='w-[30px] cursor-pointer' alt="bergericon" onClick={handleToggle} />
            </div>
            <div className={` sidebar absolute top-[75px] left-0 h-screen bg-slate-800 text-2xl font-[600] pt-5 text-gray-50 w-[70%] ${isOpen ? "block" : "hidden"}`}>
                <div className="m-8 flex gap-8 items-center cursor-pointer">
                    <FontAwesomeIcon icon={faHouse} />
                    <Link to="/" onClick={handleToggle}>Home</Link></div>
                <div className="m-8 flex gap-8 items-center cursor-pointer">
                    <FontAwesomeIcon icon={faDumbbell} />
                    <p>Workouts</p></div>
                <div className="m-8 flex gap-8 items-center cursor-pointer">
                    <FontAwesomeIcon icon={faListCheck} />
                    <p>Programs</p></div>
                <div className="m-8 flex gap-8 items-center cursor-pointer">
                    <FontAwesomeIcon icon={faRightToBracket} />
                    <p>Log In</p></div>

            </div>
            <div className="logo">
                <img src="https://www.pngkey.com/png/full/984-9845006_anytime-fitness-logo-anytime-fitness.png" alt="logo" className='w-[120px] sm:w-[140px] md:w-[180px]' />
            </div>
            <div className="links hidden gap-[5vw] md:flex text-xl font-[600] text-gray-90 text-white">
                <div className='link1'>
                    <Link to="/">Home</Link>
                    <div className='l1 hidden w-[4%] h-[3px] bg-green-500 absolute bottom-0'></div></div>
                <div className='link2'>
                    <Link to="/workouts">Workouts</Link>
                    <div className='l2 hidden w-[6.5%] h-[3px] bg-green-500 absolute bottom-0'></div>
                </div>
                <div className='link3'>
                    <Link to="/programs">Programs</Link>
                    <div className='l3 hidden w-[6.4%] h-[3px] bg-green-500 absolute bottom-0'></div>
                </div>
            </div>
            <div className="login flex gap-3">
                <div className="user">
                    <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="userImg" className='rounded-full w-[35px] md:w-[40px]' />
                </div>
                <div className="username hidden md:block">
                    <div className="text-sm text-gray-80 text-white">signed in as</div>
                    <div className="font-bold text-gray-80 text-white">
                        <Link to="/signin">Sign In</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar