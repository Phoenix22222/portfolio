import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const normaliseGallery = (gallery) =>
  (gallery && gallery.length ? gallery : Array(3).fill('/LorumIpsumTemplate.png')).map((item) =>
    typeof item === 'string' ? { src: item, fit: 'cover' } : { src: item.src, fit: item.fit ?? 'cover' }
  );

const tileVariants = {
  rest: { opacity: 1, transition: { duration: 0.15 } },
  clicked: { opacity: 0, transition: { duration: 0, delay: 0.12 }, pointerEvents: 'none' }
};

const Work = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  const activeProject = typeof activeIdx === 'number' ? workData[activeIdx] : null;

  return (
    <section id="work" className="w-full px-[12%] py-10 scroll-mt-20 text-white">
      <h2 className="text-center text-5xl font-ovo">My Latest Projects</h2>

      <div className="grid [grid-template-columns:repeat(auto-fit,_minmax(200px,_1fr))] gap-5 my-10">
        {workData.map((project, idx) => {
          const isClicked = idx === activeIdx;
          return (
            <motion.div
              key={idx}
              layoutId={`card-${idx}`}
              variants={tileVariants}
              initial="rest"
              animate={isClicked ? 'clicked' : 'rest'}
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              onClick={() => setActiveIdx(idx)}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group text-black"
              style={{ backgroundImage: `url(${project.bgImage})`, backgroundPosition: 'center 50%' }}
            >
              <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8 }}
                className="bg-white/90 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] transition">
                  <Image src={assets.send_icon} alt="open project" className="w-5" />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {activeProject && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setActiveIdx(null)}
            />
            <motion.div
              key="modal"
              layoutId={`card-${activeIdx}`}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                className="bg-[#1e1e1d] text-white w-[90vw] h-[83vh] max-w-6xl rounded-2xl shadow-xl overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-6 bg-[#161614]">
                  <h3 className="text-2xl font-bold">{activeProject.title}</h3>
                  <button
                    onClick={() => setActiveIdx(null)}
                    className="text-2xl leading-none hover:text-red-600"
                    aria-label="Close"
                  >
                    &times;
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="p-6 prose max-w-none overflow-y-auto space-y-4">
                      {activeProject.longDescription?.length
                        ? activeProject.longDescription.map((para, i) => <p key={i}>{para}</p>)
                        : (
                          <>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>In volutpat aliquam mi, ut tincidunt velit tempus eget.</p>
                            <p>Aliquam erat volutpat.</p>
                          </>
                        )}
                    </div>

                    <Carousel gallery={activeProject.gallery} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;

const Carousel = ({ gallery }) => {
  const slides = normaliseGallery(gallery);
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setIdx((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setIdx((prev) => (prev + 1) % slides.length);
    }, 4500);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIdx((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  };

  const nextSlide = () => {
    setDirection(1);
    setIdx((prev) => (prev + 1) % slides.length);
    resetTimer();
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 })
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <AnimatePresence custom={direction} initial={false} mode="wait">
        <motion.div
          key={idx}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slides[idx].src}
            alt={`screenshot ${idx + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`rounded-lg ${slides[idx].fit === 'contain' ? 'object-contain' : 'object-cover'}`}
            unoptimized
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        aria-label="Previous"
        className="absolute bottom-4 left-4 p-2 rounded-full hover:bg-white/20 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next"
        className="absolute bottom-4 right-4 p-2 rounded-full hover:bg-white/20 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > idx ? 1 : -1);
              setIdx(i);
              resetTimer();
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition ${i === idx ? 'bg-white' : 'bg-gray-400/50'}`}
          />
        ))}
      </div>
    </div>
  );
};
