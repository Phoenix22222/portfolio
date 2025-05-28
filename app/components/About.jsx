import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[20%] py-10 scroll-mt-20 text-white'>
      <h2 className='text-center text-5xl font-ovo'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-10'>
        <div className='w-64 sm:w-80 rounded-r-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
            <p className='mb-10 max-w-3xl font-ovo'> 
                I am a Computer Science graduate with a strong foundation in programming languages including C++, C, Python, JavaScript, and Java. I’ve led full-stack freelance projects, 
                developing web and mobile applications that leverage modern frameworks like React, Next.js, and AWS-based microservices. I’m passionate about applying cutting-edge technologies 
                from AI-powered document processing to edge-based computer vision systems to create impactful, real-world solutions. With a continuous drive to learn and innovate, I’m excited to 
                push the boundaries of what technology can achieve.
            </p>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl'>
                {infoList.map(({ icon, iconDark, title, description }, index) => (
                    <li
                        className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                        hover:bg-dark-hover hover:-translate-y-1 duration-500 shadow hover:shadow-black'
                        key={index}
                    >
                        <Image src={icon} alt={title} className='w-7 mt-3' />
                        <h3 className='my-4 font-semibold text-gray-300'>{title}</h3>
                        <p className='text-gray-200 text-sm whitespace-pre-line'>{description}</p>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
