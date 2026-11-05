"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const floatDuration = 3 + (index % 4) * 0.5;
  const floatDelay = (index % 5) * 0.3;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={
        inView
          ? {
              opacity: 1,
              scale: 1,
              y: [0, -7, 0],
            }
          : { opacity: 0, scale: 0.8, y: 20 }
      }
      transition={{
        opacity: { duration: 0.5, delay: index * 0.04 },
        scale: { duration: 0.5, delay: index * 0.04 },
        y: {
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        },
      }}
      whileHover={{
        scale: 1.25,
        rotateZ: (index % 2 === 0 ? 6 : -6),
        transition: { duration: 0.2 },
      }}
      className="relative group cursor-pointer [perspective:800px] select-none"
    >
      {/* 3D Glass Cyber Tile Container */}
      <div className="relative p-3 sm:p-3.5 rounded-2xl bg-[#030014]/80 border border-[#7042f835] group-hover:border-cyan-400/90 backdrop-blur-md shadow-[0_4px_20px_rgba(3,0,20,0.6)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5),0_0_10px_rgba(112,66,248,0.4)] transition-all duration-300 flex items-center justify-center">
        {/* Subtle dynamic ambient glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
          <Image
            src={`/skills/${src}`}
            width={width}
            height={height}
            alt={name}
            className="object-contain max-h-11 max-w-11 drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-300"
          />
        </div>
      </div>

      {/* 3D Floating Tooltip Pill */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-y-1 group-hover:translate-y-0 z-30 whitespace-nowrap">
        <div className="px-2.5 py-1 rounded-md bg-[#030014]/95 border border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.4)] text-[10px] font-mono font-semibold text-cyan-300">
          {name}
        </div>
      </div>
    </motion.div>
  );
};
