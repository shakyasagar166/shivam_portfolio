"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-4">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[6px] px-[12px] border border-[#7042f88b] opacity-[0.9] flex items-center gap-2 rounded-full mb-3 bg-[#03001450] backdrop-blur-sm"
      >
        <SparklesIcon className="text-[#b49bff] h-4 w-4" />
        <span className="Welcome-text text-[12px] text-[#b49bff] font-mono">
          Technical Stack & Expertise
        </span>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[32px] sm:text-[40px] text-white font-bold text-center"
      >
        Engineering with Modern Technologies
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-sm sm:text-base text-gray-300 font-mono text-center max-w-xl mt-2 mb-8"
      >
        Java &bull; Spring Boot &bull; Microservices &bull; React &bull; Generative AI &bull; Docker
      </motion.div>
    </div>
  );
};
