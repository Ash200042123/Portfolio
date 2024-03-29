import React from 'react'
import logo from "../assets/AshfaqLogo.png";
import { FaLinkedin, FaGithub, FaFacebook} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt='logo' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaFacebook />
        </div>
    </nav>
  )
}

export default Navbar