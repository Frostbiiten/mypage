import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar";
import img1 from "../img/img1.jpg"
import { cubicBezier } from 'framer-motion';

import {
    motion,
    useTransform,
    useMotionValue,
    useScroll
  } from 'framer-motion';
  import { useInView } from 'react-intersection-observer';

function Test()
{
    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0.95,
        triggerOnce: false
      });

      const variants = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: {
          opacity: 0.3,
          scale: 0.95,
        }
      };

    return (
        <motion.div 
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: cubicBezier(.16,1,.3, 1) }}
        ref={ref} 
        
        class="flex flex-row justify-center w-full">
            <div class="border-[2px] border-gray-600 rounded-xl m-4 overflow-clip h-[30rem] w-full max-w-[70rem]">
                <div class="grid grid-flow-col h-full">
                    <div class="bg-slate-300 w-full">
                        <img src={img1}></img>
                    </div>
                    <div class="bg-gray-500 w-full">
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function Projects()
{
    return (
    <>
    <h1 class="text-8xl text-white font-SpaceGrotesk">Projects</h1>
    </>
    );
}

function Overview()
{
    const { scrollY } = useScroll();
    const imgOffset = useTransform(scrollY, value => value * -0.2);
    const textOffset = useTransform(scrollY, value => value * -0.05);

    return (
        <>
            <div  class="flex flex-row justify-center w-full p-10">
                <div class="rounded-xl m-4 overflow-clip h-[50rem]">
                    <motion.div class="absolute text-left z-10 m-10 mt-0" style={{y: textOffset}}>
                        <h1 class="text-[12vw] h-[14vw] text-zinc-900 font-SpaceGrotesk font-normal"> Hello! </h1>
                        <h2 class="text-[4vw] ml-2 text-zinc-900 font-SpaceGrotesk font-normal"> I'm Edem! </h2>
                    </motion.div>
                    <motion.div style={{y: imgOffset}} class="bg-slate-300 w-[100%]">
                        <img src={img1}></img>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

function Home() {
    return (
        <div>
            <Overview/>
            <Projects/>
        </div>
    );
}

export default Home;
