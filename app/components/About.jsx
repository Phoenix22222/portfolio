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
            <p className='mb-10 max-w-2xl font-ovo'> 
                Id tempor proident velit consectetur sunt sit id pariatur. In nulla laboris aute duis quis irure exercitation qui pariatur dolore enim adipisicing consectetur. Adipisicing minim non nostrud voluptate magna aute cupidatat non magna officia in nulla. Id proident tempor anim proident quis deserunt ad ex. Excepteur eiusmod nostrud cupidatat duis aliquip esse irure. Consequat commodo sunt dolor nisi Lorem pariatur magna minim pariatur incididunt eu. Ex duis irure ea consectetur incididunt nisi sint.
            </p>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description}, index)=>(
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                    hover:bg-dark-hover hover:-translate-y-1 duration-500 shadow hover:shadow-black' 
                    key={index}>
                        <Image src={icon} alt={title} className='w-7 mt-3' />
                        <h3 className='my-4 font-semibold text-gray-300'>{title}</h3>
                        <p className='text-gray-200 text-sm'>{description}</p>
                    </li>
                ))}
            </ul>

            <ul className='mt-5 flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index)=>(
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                    </li>
                    ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
