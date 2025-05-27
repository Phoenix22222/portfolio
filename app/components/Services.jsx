import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20 text-white'>
        <h2 className='text-center text-5xl font-ovo'>My Services</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
            Fugiat proident elit magna consequat consequat nisi veniam laborum ut veniam consectetur.
        </p>
        {/*Auto is: [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] */}
        <div className='grid grid-cols-[grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
            {serviceData.map(({icon, title, description, link}, index)=>(
                <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-dark-hover hover:-translate-y-1 duration-500'>
                    <Image src={icon}alt='' className='w-10'/>
                    <h3 className='text-lg my-4 text-gray-300'>{title}</h3>
                    <p className='text-sm text-gray-200 leading-5'>
                        [description]
                    </p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read more <Image alt='' src={assets.right_arrow} className='w-4'/>
                    </a>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Services
