'use client';

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import TextDecrypt from './TextDecrypt'

const Header = () => {
  return (
  <div className='w-full text-white h-screen flex items-center'>
    <div className='flex flex-col items-start justify-center gap-4 text-left
                    max-w-3xl mx-auto lg:-translate-x-48'>

      <h4 className='text-base md:text-lg uppercase tracking-widest text-gray-300 font-semibold'>
          <TextDecrypt text="Jake Meetre" interval={40}/>
      </h4>

      <h1 className='text-7xl sm:text-8xl lg:text-[110px] font-extrabold leading-none'>
          <span className='block mb-6'>
              <TextDecrypt text="Software" interval={50} />
          </span>
          <span className='block'>
              <TextDecrypt text="Developer" interval={70} />
          </span>
      </h1>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-8'>
          <a href="#contact" className='px-10 py-3 border border-black rounded-full bg-white text-black flex items-center gap-2'>contact me <Image src={assets.right_arrow_bold} alt='' className='w-4'/></a>

          <a href="/JakeMResume2025Freelance.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume <Image src={assets.download_icon} alt='Resume Download' className='w-4' /></a>
      </div>
    </div>
  </div>
  )
}

export default Header
