import { assets, skillData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const MySkills = () => {
  return (
    <div id='Skills' className='w-full px-[12%] py-10 scroll-mt-20 text-white'>
      <h2 className='text-center text-5xl font-ovo'>My Skills</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        A showcase of the languages, tools, and creative software I use to deliver projects efficiently and effectively.
      </p>

      {skillData.map((section, idx) => (
        <div key={idx} className='mb-12'>
          <h3 className='text-3xl font-ovo border-b border-gray-500 pb-2 mb-6'>{section.section}</h3>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-5'>
            {section.items.map((item, itemIdx) => (
              <div 
                key={itemIdx} 
                className='border border-gray-400 rounded-lg px-5 py-4 hover:shadow-black cursor-pointer hover:bg-dark-hover hover:-translate-y-1 duration-500 flex flex-col items-center'
              >
                <div className='w-[75%] max-w-[90px]'>
                  <Image src={item.icon} alt='' className='w-full h-auto object-contain' />
                </div>
                <h4 className='text-base text-gray-300 text-center mt-3'>{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MySkills
