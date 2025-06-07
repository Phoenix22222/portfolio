import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import ResumeButton from './ResumeButton'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
        <>
            <nav className={`bg-[#161614] w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between 
        z-60 ${isScroll ? "bg-black/20 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#top">
                    <Image src={assets.logo_dark} alt="Logo" className='w-38 alt="" cursor-pointer mr-14' />
                </a>

                <ul className={`text-white bg-[#22211f] hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-[#22211f]/30 shadow-sm"}`}>
                    <li><a className='font-ovo' href="#top">Home</a></li>
                    <li><a className='font-ovo' href="#about">About Me</a></li>
                    <li><a className='font-ovo' href="#Skills">My Skills</a></li>
                    <li><a className='font-ovo' href="#work">Latest Work</a></li>
                    <li><a className='font-ovo' href="#contact">Contact Me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <ResumeButton />
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_white} alt='' className='w-6' />
                    </button>
                </div>

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 z-50 h-screen bg-rose-50 transition duration-500'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_black} alt="" className='w-5 cursor-pointer' />
                    </div>
                    <li><a className='font-ovo' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
