import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import devAnimation from '../animation/dev.json';

const Landing = () => {
  return (
    <section
      className="flex min-h-[calc(100vh-68px)] items-center justify-between"
      id="About"
    >
      <div className="section-left text-center sm:text-left lg:ps-5">
        <div className="parent-avater flex min-h-[6rem] items-end justify-center gap-2 sm:justify-start">
          <motion.img
            initial={{ transform: 'scale(0)' }}
            animate={{ transform: 'scale(1.1)' }}
            transition={{ damping: 6, type: 'spring', stiffness: 100 }}
            src="../../public/img-dev-full.jpeg"
            alt="avatar"
            className="h-24 w-24 rounded-full border-2 border-yellow-500 p-[2px] shadow-inner shadow-gray-300"
          />
          <div className="icon-verified text-lg text-bluu-light dark:text-bluu-dark" />
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="my-6 text-base leading-[2rem] text-title-light dark:text-title-dark sm:text-4xl sm:font-semibold 
          sm:leading-[3rem]"
        >
          Front End Developer, Entrepreneur,and Web Technology Enthusiast
        </motion.h1>

        <p className="mb-8 text-sm  leading-7 text-subtitle-light dark:text-subtitle-dark">
          I’m Ali Said, a Front-End Developer and entrepreneur based in Cairo.
          Founder and CEO of ElAsy, where we create innovative technologies to
          empower people to explore space.
        </p>

        <div className="flex items-center justify-center gap-6 text-[1.2rem] text-subtitle-light dark:text-subtitle-dark sm:justify-start">
          <div className="icon-twitter icon-style"></div>
          <div className="icon-instagram icon-style"></div>
          <div className="icon-github icon-style"></div>
          <div className="icon-linkedin icon-style"></div>
        </div>
      </div>
      <div className="section-right hidden w-full translate-x-24 translate-y-10 lg:block  xl:translate-x-36">
        <Lottie animationData={devAnimation} />
      </div>
    </section>
  );
};
export default Landing;
