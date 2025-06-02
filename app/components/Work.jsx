import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Work = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  const activeProject = typeof activeIdx === 'number' ? workData[activeIdx] : null;

  return (
    <section id='work' className='w-full px-[12%] py-10 scroll-mt-20 text-white'>
      <h2 className='text-center text-5xl font-ovo'>My Latest Projects</h2>

      <div className='grid [grid-template-columns:repeat(auto-fit,_minmax(200px,_1fr))] gap-5 my-10'>
        {workData.map((project, idx) => (
          <motion.div
            key={idx}
            layoutId={`card-${idx}`}
            onClick={() => setActiveIdx(idx)}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group text-black'
            style={{ backgroundImage: `url(${project.bgImage})` }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className='absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity' />

            <div className='bg-white/90 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between transform-gpu translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>
              <div>
                <h3 className='font-semibold'>{project.title}</h3>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt='open project' className='w-5' />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <>
            <motion.div
              key='backdrop'
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='fixed inset-0 bg-black z-40'
              onClick={() => setActiveIdx(null)}
            />

            <motion.div
              key='modal'
              layoutId={`card-${activeIdx}`}
              className='fixed inset-0 z-50 flex items-center justify-center p-4'
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                className='bg-white text-black w-[90vw] h-[90vh] max-w-6xl rounded-2xl shadow-xl overflow-hidden flex flex-col'
                onClick={(e) => e.stopPropagation()}
              >
                <div className='flex items-center justify-between p-6 border-b'>
                  <h3 className='text-2xl font-bold'>{activeProject.title}</h3>
                  <button
                    onClick={() => setActiveIdx(null)}
                    className='text-2xl leading-none hover:text-red-600'
                    aria-label='Close'
                  >
                    &times;
                  </button>
                </div>

                <div className='flex-1 overflow-y-auto'>
                  <div className='grid md:grid-cols-2 h-full'>
                    <div className='p-6 prose max-w-none overflow-y-auto'>
                      {activeProject.longDescription ?? (
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat
                          aliquam mi, ut tincidunt velit tempus eget. Aliquam erat volutpat.
                          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                          posuere cubilia curae; Morbi vel justo eget massa tincidunt
                          ornare quis non ipsum. Proin quis interdum magna.
                        </p>
                      )}
                    </div>
                    <div className='relative p-6'>
                      <div className='flex gap-4 overflow-x-auto snap-x snap-mandatory h-full'>
                        {(activeProject.gallery?.length
                          ? activeProject.gallery
                          : [
                              'https://picsum.photos/seed/1/800/600',
                              'https://picsum.photos/seed/2/800/600',
                              'https://picsum.photos/seed/3/800/600',
                            ]
                        ).map((src, i) => (
                          <div key={i} className='flex-shrink-0 w-full snap-center'>
                            <Image
                              src={src}
                              alt={`${activeProject.title} screenshot ${i + 1}`}
                              width={800}
                              height={600}
                              className='w-full h-auto object-cover rounded-lg'
                              unoptimized
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <a
        href=''
        className='w-max flex items-center justify-center gap-2 text-gray-300 border-[0.5px] border-gray-300 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'
      >
        Show more <Image src={assets.right_arrow_bold_dark} alt='Right Arrow' className='w-4' />
      </a>
    </section>
  );
};

export default Work;