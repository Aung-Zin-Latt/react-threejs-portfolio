import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-auto sm:h-screen mx-auto flex flex-col items-center">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]  max-w-7xl mx-auto  flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Aung Zin Latt</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Crafting full-stack solutions, scalable systems, <br className='sm:block hidden' />
            and high-performance web applications.
          </p>
        </div>
      </div>

      <ComputersCanvas className="w-full h-[450px] sm:h-[900px] mt-8" />

      <div className="mt-[-40px] sm:mt-[-80px] flex justify-center items-center w-full">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
