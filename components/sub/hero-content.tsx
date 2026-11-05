"use client";

import React, { useState, useEffect } from "react";
import { SparklesIcon, CodeBracketIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import { SiLeetcode, SiSpringboot } from "react-icons/si";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const ROTATING_ROLES = [
  "Java & Spring Boot APIs",
  "Generative AI & LLMs",
  "Scalable Microservices",
  "250+ LeetCode DSA Solved",
  "Full-Stack React Applications",
];

export const HeroContent = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 mt-32 lg:mt-40 w-full z-[20] gap-12"
      id="about-me"
    >
      {/* Left Column: Bio & Title */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start lg:max-w-[620px]">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[6px] px-[12px] border border-[#7042f88b] opacity-[0.9] flex items-center gap-2 rounded-full w-fit bg-[#03001450] backdrop-blur-sm"
        >
          <SparklesIcon className="text-[#b49bff] h-4 w-4 shrink-0 animate-spin-slow" />
          <span className="Welcome-text text-[12px] sm:text-[13px] font-medium text-[#b49bff]">
            Full Stack Java & Generative AI Developer
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-4 leading-tight"
        >
          {/* Main Title with Interactive Letter Bounce & Shimmer Ray */}
          <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight select-none">
            Hi, I&apos;m{" "}
            <span className="animate-text-shimmer animate-text-glow inline-block cursor-pointer">
              {"Shivam Shakya".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block transition-transform hover:text-cyan-300"
                  whileHover={{ y: -10, scale: 1.25, rotateZ: index % 2 === 0 ? 8 : -8 }}
                  transition={{ type: "spring", stiffness: 450, damping: 12 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </div>

          {/* 3D Morphing Word Rotator */}
          <div className="flex flex-wrap items-center gap-2 text-2xl sm:text-3xl lg:text-4xl text-gray-200 font-extrabold tracking-tight min-h-[48px] [perspective:1000px]">
            <span className="text-gray-400 font-semibold">Specializing in</span>
            <div className="relative inline-flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15, rotateX: -60 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -15, rotateX: 60 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 font-black drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                >
                  {ROTATING_ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="w-1 h-7 ml-2 bg-cyan-400 rounded-full animate-ping" />
            </div>
          </div>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-200 my-4 leading-relaxed font-normal"
        >
          Computer Science engineer specializing in{" "}
          <strong className="text-white font-bold underline decoration-cyan-400 decoration-2 underline-offset-4">
            Java, Spring Boot, Microservices
          </strong>
          , and{" "}
          <strong className="text-white font-bold underline decoration-purple-400 decoration-2 underline-offset-4">
            React.js
          </strong>
          . Full Stack Intern at{" "}
          <span className="text-[#c084fc] font-bold">Uncodemy</span> building
          production AI architectures, with deep expertise in{" "}
          <strong className="text-cyan-300 font-bold">
            Generative AI & LLMs
          </strong>
          . Solved{" "}
          <span className="text-amber-300 font-extrabold">250+ DSA problems</span> on LeetCode.
        </motion.p>

        {/* Action Buttons with 3D Depth & Shimmer */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap items-center gap-4 pt-3 select-none"
        >
          <a
            href="#projects"
            className="relative group overflow-hidden py-3.5 px-8 rounded-2xl text-white font-bold text-sm shadow-[0_0_25px_rgba(112,66,248,0.55)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 border border-purple-400/50"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 bg-[length:200%_auto] group-hover:bg-right transition-all duration-500" />
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <SparklesIcon className="w-4 h-4 relative z-10 text-cyan-200" />
            <span className="relative z-10 tracking-wide font-mono">
              Explore Projects
            </span>
          </a>

          <a
            href="#contact"
            className="py-3.5 px-7 bg-[#030014]/90 hover:bg-[#7042f820] text-gray-200 hover:text-white border border-[#7042f88b] hover:border-cyan-400 rounded-2xl font-bold font-mono text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] shadow-lg"
          >
            Get In Touch
          </a>

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/shakyasagar166"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#030014]/90 hover:bg-[#7042f830] text-gray-300 hover:text-white border border-[#7042f860] hover:border-white rounded-2xl transition-all duration-200 hover:scale-110 shadow-md"
              title="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/shivam-shakya/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#030014]/90 hover:bg-[#0A66C2]/20 text-[#0A66C2] hover:text-white border border-[#7042f860] hover:border-[#0A66C2] rounded-2xl transition-all duration-200 hover:scale-110 shadow-md"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Quick Highlights Strip with 3D Frosted Pills */}
        <motion.div
          variants={slideInFromLeft(1.1)}
          className="flex flex-wrap items-center gap-3 mt-6 pt-5 border-t border-[#7042f830] text-xs font-mono"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#030014]/80 border border-emerald-500/40 text-emerald-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Available for Opportunities</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#030014]/80 border border-amber-500/40 text-amber-300 shadow-sm">
            <SiLeetcode className="text-amber-400 w-3.5 h-3.5" />
            <span>250–300 DSA Solved</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#030014]/80 border border-cyan-500/40 text-cyan-300 shadow-sm">
            <AcademicCapIcon className="text-cyan-400 w-4 h-4" />
            <span>NITRA Campus &bull; Ghaziabad</span>
          </div>
        </motion.div>
      </div>

      {/* Right Column: High-End Profile Picture with 4 Orbital Satellite Badges */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-[500px] flex justify-center items-center relative py-10 select-none"
      >
        {/* Orbital Stage Container */}
        <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[470px] lg:h-[470px] flex items-center justify-center">
          {/* Animated Cosmic Nebula Glow Rings */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 opacity-40 blur-3xl animate-pulse pointer-events-none -z-10" />

          {/* Faint Orbital Path Rings */}
          <div className="absolute inset-0 rounded-full border border-purple-500/20 pointer-events-none" />
          <div className="absolute inset-3 sm:inset-4 rounded-full border border-dashed border-cyan-500/20 pointer-events-none" />

          {/* Central Profile Container */}
          <div className="relative z-20 p-2 rounded-full bg-gradient-to-br from-purple-500/40 via-cyan-500/20 to-purple-900/60 border-2 border-[#7042f890] shadow-[0_0_50px_rgba(112,66,248,0.5)]">
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden relative border-4 border-[#030014] shadow-2xl">
              <Image
                src="/shivam.jpg"
                alt="Shivam Shakya"
                fill
                priority
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500 select-none"
              />
            </div>

            {/* Online Status Pill */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#030014]/95 border border-emerald-500/60 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono font-medium text-emerald-300 tracking-wider">AVAILABLE</span>
            </div>
          </div>

          {/* Continuous Circular Orbital System (4 Badges Orbiting) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-full pointer-events-none z-30"
          >
            {/* Badge 1 (0° - Top): Uncodemy Internship */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                whileHover={{ scale: 1.08 }}
                className="px-3.5 py-2 rounded-2xl bg-[#030014]/95 border border-purple-500/70 backdrop-blur-xl shadow-[0_0_20px_rgba(112,66,248,0.35)] flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <div className="w-7 h-7 rounded-lg bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0">
                  <CodeBracketIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-purple-300 font-mono font-semibold">WORK EXPERIENCE</div>
                  <div className="text-xs font-bold text-white">Full Stack Intern @ Uncodemy</div>
                </div>
              </motion.div>
            </div>

            {/* Badge 2 (90° - Right): Java & Spring Boot */}
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 pointer-events-auto">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                whileHover={{ scale: 1.08 }}
                className="px-3.5 py-2 rounded-2xl bg-[#030014]/95 border border-cyan-500/70 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-600/30 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
                  <SiSpringboot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-cyan-300 font-mono font-semibold">BACKEND ARCHITECTURE</div>
                  <div className="text-xs font-bold text-white">Java & Spring Boot APIs</div>
                </div>
              </motion.div>
            </div>

            {/* Badge 3 (180° - Bottom): 250+ LeetCode DSA */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-auto">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                whileHover={{ scale: 1.08 }}
                className="px-3.5 py-2 rounded-2xl bg-[#030014]/95 border border-amber-500/70 backdrop-blur-xl shadow-[0_0_20px_rgba(245,158,11,0.35)] flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-600/30 border border-amber-500/40 flex items-center justify-center text-amber-300 shrink-0">
                  <SiLeetcode className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-amber-300 font-mono font-semibold">PROBLEM SOLVING</div>
                  <div className="text-xs font-bold text-white">250+ LeetCode DSA Solved</div>
                </div>
              </motion.div>
            </div>

            {/* Badge 4 (270° - Left): Generative AI & LLMs */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                whileHover={{ scale: 1.08 }}
                className="px-3.5 py-2 rounded-2xl bg-[#030014]/95 border border-pink-500/70 backdrop-blur-xl shadow-[0_0_20px_rgba(236,72,153,0.35)] flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <div className="w-7 h-7 rounded-lg bg-pink-600/30 border border-pink-500/40 flex items-center justify-center text-pink-300 shrink-0">
                  <SparklesIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-pink-300 font-mono font-semibold">AI INTEGRATION</div>
                  <div className="text-xs font-bold text-white">Generative AI & LLMs</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
