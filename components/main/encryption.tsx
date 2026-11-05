"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-[70vh] w-full h-full -z-20 my-10">
      <div className="absolute w-auto h-auto top-0 z-[5] px-4 text-center">
        <motion.div
          variants={slideInFromTop}
          className="text-[32px] sm:text-[42px] font-bold text-gray-200"
        >
          Security{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
            &
          </span>{" "}
          Performance
        </motion.div>
        <p className="text-xs sm:text-sm text-gray-400 font-mono mt-1 max-w-lg mx-auto">
          Production-grade Spring Security, JWT authentication, and resilient RESTful microservices.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-30px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[15px] border-[#7042F88B] opacity-[0.9] rounded-full">
          <h1 className="Welcome-text text-[12px] font-mono">REST & Spring Security</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[15px] px-[10px]">
        <div className="text-[14px] sm:text-[16px] font-mono font-medium text-center text-gray-300">
          Scalable backend microservices built for high-throughput enterprise workloads.
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto opacity-70"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
