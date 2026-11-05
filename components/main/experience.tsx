"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  TrophyIcon,
  CheckBadgeIcon,
  SparklesIcon,
  CalendarIcon,
  MapPinIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";
import { SiLeetcode, SiSpringboot, SiReact, SiDocker, SiPython } from "react-icons/si";
import { FaGraduationCap, FaAward, FaLaptopCode, FaCheckCircle, FaSchool } from "react-icons/fa";

// 3D Tilt Card with Holographic Cursor Glare Sheen
interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  borderColor?: string;
}

const BentoCard3D: React.FC<BentoCardProps> = ({
  children,
  className = "",
  glowColor = "rgba(112,66,248,0.35)",
  borderColor = "#7042f8",
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 8; // gentle 8deg tilt
    const rotY = ((x - centerX) / centerX) * 8;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  return (
    <div
      className="relative [perspective:1200px] h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
      }}
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
            isHovered ? "scale3d(1.02, 1.02, 1.02)" : "scale3d(1, 1, 1)"
          }`,
          transition: isHovered
            ? "transform 0.12s ease-out, box-shadow 0.2s ease-out"
            : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease",
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? `0 20px 45px -15px ${glowColor}, 0 0 35px 2px ${glowColor}`
            : "0 10px 30px -15px rgba(0,0,0,0.6)",
          borderColor: isHovered ? borderColor : "rgba(112,66,248,0.35)",
        }}
        className={`relative overflow-hidden rounded-3xl border bg-[#030014]/90 backdrop-blur-2xl p-6 sm:p-8 transition-colors duration-300 h-full group ${className}`}
      >
        {/* Holographic Cursor Glare Sheen */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100 z-10"
            style={{
              background: `radial-gradient(circle 340px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.14), transparent 70%)`,
            }}
          />
        )}

        {/* Ambient Corner Glow */}
        <div
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-25 group-hover:opacity-60 transition-opacity duration-500"
          style={{ background: glowColor }}
        />

        {/* 3D Content with Pop */}
        <div className="relative z-20 [transform:translateZ(25px)] h-full flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 max-w-7xl mx-auto z-20 relative select-none"
    >
      {/* Background Cosmic Atmosphere Glowing Halos */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[400px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-[600px] h-[400px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Header with Flowing Animated Gradient Text */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="Welcome-box py-[6px] px-[14px] border border-[#7042f88b] opacity-[0.9] flex items-center gap-2 rounded-full mb-4 bg-[#03001460] backdrop-blur-sm">
          <SparklesIcon className="text-[#b49bff] h-4 w-4 animate-spin-slow" />
          <span className="Welcome-text text-[12px] sm:text-[13px] font-mono text-[#b49bff]">
            Professional Journey & Credentials
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black animate-gradient-text animate-text-glow tracking-tight text-center">
          Experience & Education
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mt-4 font-mono leading-relaxed">
          Interactive 3D Bento Vault highlighting industrial software engineering, academic degree, and algorithmic mastery
        </p>
      </div>

      {/* 3D BENTO GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {/* ======================================================== */}
        {/* BENTO CARD 1 (SPANS 2 COLUMNS): UNCODEMY WORK EXPERIENCE */}
        {/* ======================================================== */}
        <div className="lg:col-span-2">
          <BentoCard3D
            glowColor="rgba(168, 85, 247, 0.45)"
            borderColor="#a855f7"
          >
            <div>
              {/* Top Bar with Live Active Internship Radar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-500/20 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                  </span>
                  <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-emerald-400">
                    Live Active Internship
                  </span>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/50 text-xs font-mono font-semibold text-purple-200">
                  <CalendarIcon className="w-3.5 h-3.5 text-purple-400" />
                  <span>Sep 2026 – Present</span>
                </div>
              </div>

              {/* Title & Organization Header with 3D Cyber Emblem */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/30 to-purple-900/50 border border-purple-400/60 flex items-center justify-center text-purple-300 shadow-[0_0_20px_rgba(112,66,248,0.4)] shrink-0">
                  <BriefcaseIcon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-purple-300 transition-colors">
                    Full Stack Development Intern
                  </h3>
                  <div className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 flex items-center gap-2 mt-1">
                    <span>Uncodemy</span>
                    <span className="text-gray-500">&bull;</span>
                    <span className="text-xs text-gray-300 font-mono flex items-center gap-1 font-normal">
                      <MapPinIcon className="w-3.5 h-3.5 text-gray-400" />
                      Noida / Remote
                    </span>
                  </div>
                </div>
              </div>

              {/* 3 Interactive Highlight Mini-Pods */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0a071e]/90 to-[#030014] border border-purple-500/30 hover:border-purple-400 transition-all shadow-sm">
                  <div className="text-cyan-400 text-sm font-mono font-bold mb-1.5 flex items-center gap-1.5">
                    <RocketLaunchIcon className="w-4 h-4" /> AI Resume Engine
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-mono">
                    Integrated Groq (Llama 3) for automated 14-point ATS scoring & dynamic PDF generation.
                  </p>
                  <a
                    href="https://ai-resume-builder-pi-coral.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-cyan-300 hover:text-white mt-2.5 underline decoration-cyan-400 underline-offset-2 transition-colors"
                  >
                    <span>Live App ↗</span>
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0a071e]/90 to-[#030014] border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-sm">
                  <div className="text-purple-300 text-sm font-mono font-bold mb-1.5 flex items-center gap-1.5">
                    <CpuChipIcon className="w-4 h-4" /> Spring Boot APIs
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-mono">
                    Architected robust backend RESTful controllers and transactional services.
                  </p>
                  <a
                    href="https://food-delivery-java-fullstack-zlqd-taupe.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-purple-300 hover:text-white mt-2.5 underline decoration-purple-400 underline-offset-2 transition-colors"
                  >
                    <span>Live Food App ↗</span>
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0a071e]/90 to-[#030014] border border-pink-500/30 hover:border-pink-400 transition-all shadow-sm">
                  <div className="text-pink-300 text-sm font-mono font-bold mb-1.5 flex items-center gap-1.5">
                    <SiReact className="w-4 h-4" /> React Interfaces
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-mono">
                    Built responsive frontend components as part of a collaborative engineering sprint.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Tech Pills */}
            <div className="pt-4 border-t border-purple-500/20 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono font-bold text-gray-400 mr-2">Core Stack:</span>
              {["React.js", "Spring Boot", "Groq AI (Llama 3)", "REST APIs", "MySQL", "Docker"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-semibold bg-purple-950/60 text-purple-200 border border-purple-500/40 hover:border-cyan-400 hover:text-cyan-300 transition-colors shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </BentoCard3D>
        </div>

        {/* ======================================================== */}
        {/* BENTO CARD 2 (1 COLUMN): LEETCODE DSA PROBLEM SOLVING */}
        {/* ======================================================== */}
        <div className="lg:col-span-1">
          <BentoCard3D
            glowColor="rgba(245, 158, 11, 0.45)"
            borderColor="#f59e0b"
          >
            <div>
              {/* Top Badge */}
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <TrophyIcon className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
                    Competitive Coding
                  </span>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  ★ ACTIVE
                </span>
              </div>

              {/* Massive 3D Metric Display */}
              <div className="flex flex-col items-center text-center my-4">
                <div className="relative w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.4)] mb-3">
                  <div className="absolute -inset-1.5 rounded-2xl border border-dashed border-amber-400/50 animate-spin-slow pointer-events-none" />
                  <SiLeetcode className="w-9 h-9" />
                </div>

                <div className="text-5xl sm:text-6xl font-black animate-gradient-text animate-text-glow tracking-tight">
                  250–300
                </div>
                <div className="text-base sm:text-lg font-bold text-white mt-1.5">
                  DSA Problems Solved
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-mono mt-1">
                  LeetCode Algorithmic Challenges
                </div>
              </div>

              {/* DSA Topics Covered */}
              <div className="space-y-2 mt-4 pt-4 border-t border-amber-500/20 text-xs sm:text-sm font-mono">
                <div className="flex items-center justify-between text-gray-300">
                  <span className="text-gray-400">Primary Language:</span>
                  <span className="font-bold text-amber-300">Java (Collections)</span>
                </div>
                <div className="flex items-center justify-between text-gray-300">
                  <span className="text-gray-400">Core Domains:</span>
                  <span className="text-cyan-300 font-semibold">Trees, Graphs, DP</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-amber-500/20 flex justify-center">
              <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/60 px-4 py-1.5 rounded-full border border-amber-500/40">
                Optimized O(N) / O(N log N) Solutions
              </span>
            </div>
          </BentoCard3D>
        </div>

        {/* ======================================================== */}
        {/* BENTO CARD 3 (1.5 COLUMNS): NITRA TECHNICAL CAMPUS DEGREE */}
        {/* ======================================================== */}
        <div className="lg:col-span-2">
          <BentoCard3D
            glowColor="rgba(6, 182, 212, 0.45)"
            borderColor="#06b6d4"
          >
            <div>
              {/* Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cyan-500/20 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <AcademicCapIcon className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                    Engineering Degree
                  </span>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/50 text-xs font-mono font-semibold text-cyan-200">
                  <CalendarIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>2023 – 2027 &bull; Pursuing</span>
                </div>
              </div>

              {/* Institution & Degree */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600/30 to-cyan-900/50 border border-cyan-400/60 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] shrink-0">
                  <FaGraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                    NITRA Technical Campus
                  </h3>
                  <div className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 mt-1">
                    Dr. A.P.J. Abdul Kalam Technical University (AKTU) Affiliate &bull; Ghaziabad
                  </div>
                  <div className="text-sm font-bold text-gray-200 mt-2">
                    Bachelor of Technology in Computer Science and Engineering
                  </div>
                </div>
              </div>

              {/* CGPA & Academic Stats Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="p-3.5 rounded-2xl bg-[#030014]/80 border border-cyan-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-gray-400 font-mono">ACADEMIC STANDING</div>
                    <div className="text-xl font-black text-cyan-300">CGPA: 6.6</div>
                  </div>
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    Final Year
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#030014]/80 border border-purple-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-gray-400 font-mono">SPECIALIZATION</div>
                    <div className="text-sm font-bold text-purple-300">Full-Stack Systems & AI</div>
                  </div>
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                    CS & Engg
                  </span>
                </div>
              </div>
            </div>

            {/* Coursework Tags */}
            <div className="pt-4 border-t border-cyan-500/20 flex flex-wrap gap-2 items-center">
              <span className="text-[11px] font-mono text-gray-400 mr-2">Key Coursework:</span>
              {[
                "Data Structures & Algorithms",
                "Operating Systems",
                "Database Management Systems",
                "Computer Networks",
                "Software Engineering",
              ].map((c) => (
                <span
                  key={c}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-cyan-950/60 text-cyan-200 border border-cyan-500/40 shadow-sm"
                >
                  {c}
                </span>
              ))}
            </div>
          </BentoCard3D>
        </div>

        {/* ======================================================== */}
        {/* BENTO CARD 4 (1 COLUMN): CERTIFICATIONS & SCHOOLING */}
        {/* ======================================================== */}
        <div className="lg:col-span-1">
          <BentoCard3D
            glowColor="rgba(236, 72, 153, 0.45)"
            borderColor="#ec4899"
          >
            <div>
              {/* Top Badge */}
              <div className="flex items-center justify-between border-b border-pink-500/20 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <FaAward className="w-5 h-5 text-pink-400" />
                  <span className="text-xs font-mono font-bold text-pink-300 uppercase tracking-wider">
                    Certifications & School
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/40">
                  VERIFIED
                </span>
              </div>

              {/* Verified Certifications List */}
              <div className="space-y-3 mb-5">
                <div className="p-3 rounded-2xl bg-[#030014]/70 border border-purple-500/30 hover:border-purple-400 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Full Stack Development</span>
                    <span className="text-[9px] font-mono text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/40">
                      Uncodemy
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono mt-0.5">
                    React & Spring Boot Internship
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-[#030014]/70 border border-cyan-500/30 hover:border-cyan-400 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">C & Python Programming</span>
                    <span className="text-[9px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/40">
                      Udemy
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono mt-0.5">
                    Algorithms & Procedural Logic
                  </div>
                </div>

                {/* S.S. Memorial Schooling */}
                <div className="p-3 rounded-2xl bg-[#030014]/70 border border-pink-500/30 hover:border-pink-400 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">S.S. Memorial Sr. Public School</span>
                    <span className="text-[9px] font-mono text-pink-300 bg-pink-950/80 px-2 py-0.5 rounded border border-pink-500/40">
                      CBSE
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono mt-0.5">
                    Class 10th & 12th &bull; Science & Mathematics
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-pink-500/20 flex justify-center">
              <span className="text-[10px] font-mono font-bold text-pink-300 bg-pink-950/60 px-3 py-1 rounded-full border border-pink-500/40">
                100% Accredited & Verified Background
              </span>
            </div>
          </BentoCard3D>
        </div>
      </div>
    </section>
  );
};
