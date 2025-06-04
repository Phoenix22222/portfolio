'use client'

import { motion } from 'framer-motion'
import { assets, skillData } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const MySkills = () => {
  const [randomData, setRandomData] = useState(null)

  useEffect(() => {
    const newRandomData = skillData.map((section) =>
      section.items.map(() => ({
        y: Math.floor(Math.random() * 40) + 20,
        delay: Math.random() * 0.4,
      }))
    )
    setRandomData(newRandomData)
  }, [])

  if (!randomData) return null

  return (
    <div id='Skills' className='w-full px-[12%] py-10 scroll-mt-20 text-white'>
      <h2 className='text-center text-5xl font-ovo'>My Skills</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        A showcase of the languages, tools, and creative software I use to deliver projects efficiently and effectively.
      </p>

      {skillData.map((section, sectionIdx) => (
        <div key={sectionIdx} className='mb-12'>
          <h3 className='text-3xl font-ovo border-b border-gray-500 pb-2 mb-6'>{section.section}</h3>

          <div className='grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-5'>
            {section.items.map((item, itemIdx) => {
              const { y, delay } = randomData[sectionIdx][itemIdx]

              return (
                <motion.div
                  key={itemIdx}
                  initial={{ opacity: 0, y }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay,
                    type: 'spring',
                    stiffness: 120,
                    damping: 12,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className='group will-change-transform border border-gray-400 rounded-lg px-5 py-4 cursor-pointer flex flex-col items-center transition-transform duration-300 ease-out hover:-translate-y-1 hover:bg-dark-hover'
                >
                  <div className='w-[75%] max-w-[90px]'>
                    <Image src={item.icon} alt={item.title} className='w-full h-auto object-contain' />
                  </div>
                  <h4 className='text-base text-gray-300 text-center mt-3'>{item.title}</h4>
                </motion.div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MySkills
