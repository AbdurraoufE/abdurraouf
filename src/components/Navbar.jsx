import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import Logo from '../assets/logo.png'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0D1116] text-gray-300'>
        <div>
            <button>
                <a href='/'>
                    <img src={Logo} alt='Logo image' style={{width: '50px'}}/>
                </a>
            </button>
        </div>

        {/* menu */}

            <ul className=' hidden md:flex'>
                <li>
                <Link to="home" smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li>
                <Link to="about" smooth={true} duration={500}>
                About
                </Link>
                </li>
                <li>
                <Link to="experience" smooth={true} duration={500}>
                Experience
                </Link>
                </li>
                <li>
                <Link to="projects" smooth={true} duration={500}>
                Projects
                </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} duration={500}>
                Contact
                </Link>
                </li>
            </ul>

        {/* Body */}
        <div onClick={handleClick}className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0D1116] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="experience" smooth={true} duration={500}>
                Experience
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                Projects
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
                </Link>
            </li>
        </ul>

        {/* Social Icons */}
        <div className='hidden : lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 '>
                <a className='w-[100px] h-[50px] flex justify-center items-center text-gray-300' 
                href="https://www.linkedin.com/in/abdurraouf/">
                    Linkedin <FaLinkedin size={40}/>
                </a>
            </li>
            <li className='flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='w-[100px] h-[50px] flex justify-center items-center text-gray-300' 
                href="https://github.com/AbdurraoufE">
                    GitHub <FaGithub size={40}/>
                </a>
            </li>
            <li className='flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3e9947]'>
                <a className='w-[100px] h-[50px] flex justify-center items-center text-gray-300' 
                href="mailto:Roofa.Etagiuri1@gmail.com">
                    E-Mail <HiOutlineMail size={40}/>
                </a>
            </li>
            <li className='flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='w-[100px] h-[50px] flex justify-center items-center text-gray-300' 
                href="">
                    Resume <BsFillPersonLinesFill size={40}/>
                </a>
            </li>
        </ul>

        </div>


    </div>
  )
}

export default Navbar