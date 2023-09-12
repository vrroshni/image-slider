import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import Navlinks from './elements/Navlinks'




const Header = () => {

    const [nav, setNav] = useState(false)

    return (
        <header className='z-[999] relative'>
            <div className='fixed top-0 px-4 flex justify-between items-center w-full h-16 border border-white
             border-opacity-40 bg-white  bg-opacity-80 shadow-lg
              shadow-black/[0.3] backdrop-blur-[0.5rem]
               text-textcolor font-medium '>
                <div >
                    <Logo />
                </div>
                <ul className='hidden md:flex text-textcolor text-lg'>
                    <Navlinks />
                </ul>

                <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-textcolor md:hidden'>
                    {nav ?
                        <FaTimes className='  text-white hover:text-brandcolor' size={30} />
                        :
                        <FaBars className=' text-brandcolor' size={30} />
                    }
                </div>


                {nav && <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  bg-black  text-white pt-20'>
                    <ul className='flex flex-col justify-center items-center text-2xl'>
                        <Navlinks />
                    </ul>
                </div>
                }

            </div>
        </header >
    )
}

export default Header