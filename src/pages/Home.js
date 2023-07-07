import React, { useState, useEffect, useRef } from 'react';
import bg0 from "../img/bg/0.jpg"
import bg1 from "../img/bg/1.png"
import bg2 from "../img/bg/2.png"
import { MotionValue, cubicBezier } from 'framer-motion';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs'
import GridLines from 'react-gridlines';

import {
    motion,
    useTransform,
    useScroll
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Project({name, imgSrc, tags, link, desc})
{
    const [ref, inView, entry] = useInView({
        rootMargin: '-50% 0% -50% 0%',
        threshold: 0,
        triggerOnce: false
    });

    const variants = {
        visible: { opacity: 1, scale: 1},
        hidden: {
            opacity: 0.05,
            scale: 0.95,
        }
    };

    const variants2 = {
        visible: { opacity: 1},
        hidden: { opacity: 0, x: -120}
    };

    return (
        <div class="flex flex-col lg:flex-row gap-2">
            <motion.div
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 2, ease: cubicBezier(.16, 1, .3, 1) }}
            ref={ref}
            class="rounded-lg border-[3px] border-emerald-950 h-96 w-[40rem] shadow-lg overflow-clip font-SpaceGrotesk ">
                <div class="relative h-0 z-10">
                    <div class="p-3 pl-5 text-2xl text-left text-gray-100 bg-zinc-950/90 backdrop-blur-sm flex flex-row gap-6 items-center">
                        <h3 class="font-bold">{name}</h3>
                    </div>
                </div>
                <a href={link} target="_blank" class="w-full overflow-clip h-full grid items-center text-transparent hover:text-white/50 duration-500">
                    <img src={imgSrc} class="object-cover object-center h-full w-full col-start-1 row-start-1 hover:scale-105 hover:blur-[2px] hover:opacity-30 duration-[500ms] ease-inout "/>
                    <div class="col-start-1 row-start-1 pointer-events-none z-10 flex flex-row gap-2 justify-center items-center">
                        See More<BsFillArrowUpRightSquareFill/>
                    </div>
                </a>
            </motion.div>
            <motion.div
            animate={inView ? 'visible' : 'hidden'}
            variants={variants2}
            transition={{duration: 0.8, ease: cubicBezier(.16, 1, .3, 1) }}
            class="text-white text-left rounded-lg backdrop-blur-sm p-5 -z-10 w-[23rem] leading-8">
                <div class="flex flex-row gap-2 text-sm"> {tags.map((val) => <div class="border-emerald-400/30 border-[2px] px-2 rounded-2xl text-green-400 bg-emerald-950/40 font-normal">{val}</div>)} </div>
                <div class= "mt-3">{desc}</div>
            </motion.div>
        </div>
    );
}


function Projects() {
    const projects = {
        "Suppress The Press": {
            img: require("../img/projects/stp.jpg"),
            tags: ["Game", "C#", "Unity"],
            link: "https://github.com/Frostbiiten/SuppressThePress",
            desc: <p>A simple game built around the theme <b><i>Delay The Inevitable</i></b> in which the player must stop a press from crushing them. Built in 48 hours for the 50th Ludum Dare Game Jam. Placed within the top ~10% in a category.<br/><br/> <p class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> Click on the image to play a demo!</p></p>
            
        },
        "Aero - A Simple Game": {
            img: require("../img/projects/aero.jpg"),
            tags: ["Game", "Python", "Pygame"],
            link: "https://github.com/Frostbiiten/Aero",
            desc: "A very simple game in which the player attempts to accumulate as many points as possible by timing jumps to subsequent checkpoints. Written in a brief time period for a school project."
        },
        "Rouge - A Roguelike* Shooter": {
            img: require("../img/projects/rouge.png"),
            tags: ["Game", "Java", "JavaFX"],
            link: "https://github.com/Frostbiiten/Rouge",
            desc: <p>A dungeon crawler rougelike* game in which a red <i>(or 'rouge')</i> player must navigate to deeper dungeon floors by exploring and defeating enemies in dungeon rooms. Includes completely procedural dungeon generation and a custom software rendering. Completed in a week for a school project.</p>
        },
        "Beyond - Sonic Framework": {
            img: require("../img/projects/sonic.jpg"),
            tags: ["Game", "C#", "Unity"],
            link: "https://github.com/Frostbiiten/Beyond",
            desc: "A very rudimentary framework based on 3d Sonic The Hedgehog installments. This was mainly just a passion project I worked on when I was 12."
        },
        "'Chaos Game' Fractal Renderer": {
            img: require("../img/projects/frac.jpg"),
            tags: ["Graphics", "C++", "SFML"],
            link: "https://github.com/Frostbiiten/Chaos-Game",
            desc: "A fractal renderer which uses the SFML multimedia library to render thousands of points according to the 'chaos game' technique to create interesting self-similar patterns."
        },
    }

    return (
        <>
            <div class="sticky top-0 bg-gradient-to-b from-transparent via-zinc-950/90 via-70% h-[18rem] p-8 z-20">
                <h1 class="text-8xl text-white font-SpaceGrotesk">Projects</h1>
            </div>
            <div class="flex flex-col gap-[5rem] items-center">
            {
                Object.entries(projects).map(([key, val]) => <Project name={key} imgSrc={val.img} tags={val.tags} link={val.link} desc={val.desc}/>)
            }
            </div>
        </>
    );
}

function Overview() {
    const { scrollY } = useScroll();
    const img0Offset = useTransform(scrollY, value => value * -0.03);
    const img1Offset = useTransform(scrollY, value => value * -0.1);
    const img2Offset = useTransform(scrollY, value => value * -0.4);

    return (
        <div class="flex flex-row justify-center w-full">
            <div class="rounded-xl m-4 overflow-clip h-[24rem] max-w-[60rem] w-[90vw] flex flex-row">
                <div class="min-w-[60%] max-w-[40rem] bg-slate-50 shrink-0 p-10 text-left flex flex-col gap-5">
                    <div class="flex flex-row items-center gap-5 font-Mono">
                        <h1 class="text-8xl text-zinc-900 font-bold"> Hello! </h1>
                        <h2 class="text-3xl text-zinc-900"> I'm<br /> Edem! </h2>
                    </div>
                    <p class="flex-grow text-xl">I'm a Canadian student interested in computer science and mathematics. In my free time, you can find me developing or playing games, working on art, or solving challenging puzzles. Check out my contacts below if you would like to reach me!</p>
                    <div class="flex flex-row gap-1">
                        <a href="https://github.com/Frostbiiten" target="_blank" type="button" class="text-white bg-slate-900 hover:bg-blue-600 focus:ring-2 focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 ease-out-expo duration-300 hover:scale-105">
                            <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                            Github
                        </a>
                        <a href="https://www.linkedin.com/in/edem-hoggar-b00153217/" target="_blank" type="button" class="text-white bg-slate-900 hover:bg-blue-600 focus:ring-2 focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 ease-out-expo duration-300 hover:scale-105">
                            <svg class="mr-2 -ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            LinkedIn
                        </a>
                        <a href="mailto: edemkhoggar@gmail.com" target="_blank" type="button" class="text-white bg-slate-900 hover:bg-blue-600 focus:ring-2 focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 ease-out-expo duration-300 hover:scale-105">
                            <svg class="mr-2 -ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" /></svg>
                            Email
                        </a>
                        <button
                            type="button"
                            class="text-white bg-slate-900 hover:bg-blue-500 focus:ring-2 focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 ease-out-expo duration-300 hover:scale-105"
                            onClick={() => navigator.clipboard.writeText("edemh")}
                        >
                            <svg class="mr-2 -ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" /></svg>
                            Discord
                        </button>
                    </div>
                </div>
                    <div class="min-w-[30rem] grid">
                        <motion.img src={bg0} style={{ y: img0Offset }} class="col-start-1 row-start-1" />
                        <motion.img src={bg1} style={{ y: img1Offset }} class="col-start-1 row-start-1" />
                        <motion.img src={bg2} style={{ y: img2Offset }} class="col-start-1 row-start-1" />
                    </div>
            </div>
        </div>
    );
}

function Home() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, value => value * 0.7);

    return (
        <div>
            <motion.div class="absolute w-full h-[130rem] -z-40" style={{y}}>
                <GridLines class="w-full h-full"lineColor="rgb(15, 16, 16, 1)" cellWidth={60} strokeWidth={3}></GridLines>
            </motion.div>
            <div class="w-full h-[20vh]"/>
            <Overview />
            <div class="w-full h-[20vh]"/>
            <Projects />
            <div class="w-full h-[50vh]"/>
        </div>
    );
}

export default Home;
