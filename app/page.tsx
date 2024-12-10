"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { motion } from "motion/react";
import { Github } from "lucide-react";

const bgColor: Array<`bg-${string}-50`> = [
  "bg-gray-50",
  "bg-blue-50",
  "bg-green-50",
  "bg-red-50",
  "bg-yellow-50",
  "bg-purple-50",
  "bg-pink-50",
  "bg-indigo-50",
  "bg-teal-50",
  "bg-orange-50",
];

const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [bg, setBg] = useState(bgColor[0]);

  const handlePlay = () => {
    if (audioRef.current) {
      setBg(bgColor[Math.floor(Math.random() * bgColor.length)]);
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <main
      className={`will-change-auto duration-300 select-none w-screen h-screen gap-24 flex justify-center items-center ${bg}`}
    >
      <audio ref={audioRef} src="/audio/click.mp3"></audio>
      <motion.img
        onClick={handlePlay}
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: -150 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1, rotate: 45, x: -150, y: -100 }}
        src="/logo.webp"
        alt="logo"
        className="h-[50vh] w-auto z-10 cursor-pointer"
      />
      <div className="h-[50vh] w-auto flex flex-col justify-evenly items-start -translate-x-16">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="text-8xl text-primary font-bold text-shadow-xl shadow-primary"
        >
          PerfEdge
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.5,
          }}
          className="text-3xl text-gray-700 text-shadow-lg shadow-gray-700"
        >
          一个注重场景体验的 Web 性能优化知识库
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.7,
          }}
          className="flex items-center gap-16"
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              rotate: 10,
            }}
            whileTap={{
              scale: 0.9,
              rotate: -10,
            }}
            className="shadow-lg shadow-primary rounded-md"
          >
            <Link
              href="/docs"
              className="text-xl bg-primary text-white flex items-center px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
            >
              开始
            </Link>
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              rotate: -10,
            }}
            whileTap={{
              scale: 0.9,
              rotate: 10,
            }}
            className="shadow-lg shadow-primary rounded-md"
          >
            <Link
              href="https://github.com/minorcell/perfedge"
              target="_blank"
              className="text-xl bg-primary text-white flex items-center px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
            >
              <Github className="scale-90 mr-2" /> Github
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
};

export default Home;
