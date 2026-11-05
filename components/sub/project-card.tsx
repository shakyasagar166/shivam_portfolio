"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaRocket, FaCode, FaBolt } from "react-icons/fa";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  liveDemo?: string;
  badge?: string;
  status?: string;
  highlights?: string[];
  glowColor?: string;
  borderColor?: string;
  index?: number;
  stats?: string;
  techTokens?: { text: string; color: string }[];
};

// Cyber Matrix Glyph Pool for the Unscramble Decoder Effect
const GLYPHS = "01$#@%&<>~*+=!?-/\\{}[]_";

// Cyber Decrypted Animated Title Component
const CyberDecryptedTitle = ({
  text,
  isHovered,
  glowColor,
}: {
  text: string;
  isHovered: boolean;
  glowColor: string;
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered) {
      setIsScrambling(true);
      let iteration = 0;
      const totalSteps = text.length;

      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, idx) => {
              if (char === " ") return " ";
              if (idx < iteration) {
                return text[idx];
              }
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join("")
        );

        if (iteration >= totalSteps) {
          setIsScrambling(false);
          clearInterval(interval);
        }

        iteration += 0.8;
      }, 35);
    } else {
      setDisplayText(text);
      setIsScrambling(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, text]);

  return (
    <span
      className={`block transition-colors duration-200 tracking-tight leading-snug font-black text-2xl sm:text-3xl ${
        isScrambling
          ? "text-cyan-300 font-mono tracking-wider drop-shadow-[0_0_12px_#38bdf8]"
          : "text-white group-hover:text-cyan-200"
      }`}
      style={{
        textShadow: isHovered
          ? `0 0 16px ${glowColor}, 0 0 32px ${glowColor}`
          : "0 2px 10px rgba(0,0,0,0.8)",
      }}
    >
      {displayText}
    </span>
  );
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  liveDemo,
  badge,
  status = "Production Ready",
  highlights = [
    "Modular Microservice Architecture",
    "High-Performance REST Endpoints",
    "Transactional Database Integrity",
  ],
  glowColor = "rgba(112,66,248,0.45)",
  borderColor = "#7042f8",
  index = 0,
  stats,
  techTokens = [],
}: ProjectCardProps) => {
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

    const rotX = -((y - centerY) / centerY) * 10;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const floatDuration = 4 + (index % 3) * 0.5;
  const floatDelay = (index % 3) * 0.3;
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <div
      className="relative [perspective:1200px] h-full select-none"
      style={{
        animation: `floatUpDown ${floatDuration}s ease-in-out infinite ${floatDelay}s`,
      }}
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
            isHovered ? "scale3d(1.025, 1.025, 1.025)" : "scale3d(1, 1, 1)"
          }`,
          transition: isHovered
            ? "transform 0.12s ease-out, box-shadow 0.2s ease-out"
            : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s ease",
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? `0 25px 50px -15px ${glowColor}, 0 0 35px 2px ${glowColor}`
            : "0 12px 35px -15px rgba(0,0,0,0.7)",
          borderColor: isHovered ? borderColor : "rgba(112,66,248,0.35)",
        }}
        className="relative overflow-hidden rounded-3xl border bg-[#030014]/90 backdrop-blur-2xl flex flex-col justify-between h-full group transition-colors duration-300"
      >
        {/* Dynamic Holographic Cursor Glare Sheen */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100 z-30"
            style={{
              background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.15), transparent 70%)`,
            }}
          />
        )}

        {/* Ambient Corner Glow Halo */}
        <div
          className="absolute -top-24 -right-24 w-52 h-52 rounded-full blur-3xl pointer-events-none opacity-25 group-hover:opacity-60 transition-opacity duration-500"
          style={{ background: glowColor }}
        />

        {/* ======================================================== */}
        {/* TOP: 16:9 3D RECESSED SHOWCASE IMAGE WITH CYBER OVERLAYS */}
        {/* ======================================================== */}
        <div>
          <div className="relative w-full aspect-video overflow-hidden bg-[#0a071e]/90 border-b border-[#7042f835] [transform:translateZ(15px)]">
            {/* Project Image with Cinematic Zoom */}
            <Image
              src={src}
              alt={title}
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-110 transition-transform duration-700 select-none"
            />

            {/* Subtle Gradient Shade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-black/30 opacity-70 pointer-events-none" />

            {/* Floating Top-Left Tech Badge */}
            {badge && (
              <div className="absolute top-3 left-3 z-20 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#030014]/90 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.4)] backdrop-blur-md">
                  <FaCode className="w-3 h-3 text-cyan-400" />
                  {badge}
                </span>
              </div>
            )}

            {/* Floating Top-Right Live Status Radar */}
            <div className="absolute top-3 right-3 z-20 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#030014]/95 text-emerald-300 border border-emerald-500/50 shadow-md backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                {status}
              </span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* MIDDLE: PROJECT DETAILS WITH 3D POP & CYBER TEXT EFFECTS */}
          {/* ======================================================== */}
          <div className="p-6 sm:p-7 space-y-4 [transform:translateZ(30px)]">
            {/* Cyber Project Index Meta Header */}
            <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-extrabold tracking-widest">
                  [ {projectNumber} // SHIVAM-ARCH ]
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-purple-300/80">
                Full-Stack
              </span>
            </div>

            {/* Cyber Hacker Decrypt Text Effect Title */}
            <div>
              <CyberDecryptedTitle
                text={title}
                isHovered={isHovered}
                glowColor={glowColor}
              />

              {/* Animated Laser Scan Underline */}
              <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden mt-2">
                <div
                  className="absolute top-0 bottom-0 rounded-full transition-all duration-700 ease-out"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${borderColor}, #38bdf8, transparent)`,
                    width: isHovered ? "100%" : "35%",
                    left: isHovered ? "0%" : "0%",
                    boxShadow: isHovered ? `0 0 12px ${borderColor}` : "none",
                  }}
                />
              </div>
            </div>

            {/* Project Narrative Description */}
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
              {description}
            </p>

            {/* Interactive Tech Tokens / Tags */}
            {techTokens && techTokens.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {techTokens.map((token, tIdx) => (
                  <span
                    key={tIdx}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-bold border transition-all duration-300 hover:scale-105 cursor-default ${token.color}`}
                  >
                    {token.text}
                  </span>
                ))}
              </div>
            )}

            {/* 3 Key Highlights with 3D Cyber Hover Effects */}
            <div className="pt-2 space-y-2">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-gray-200 p-1.5 rounded-xl transition-all duration-300 hover:bg-white/5 hover:translate-x-1.5"
                >
                  <span className="w-5 h-5 rounded-lg bg-gradient-to-br from-cyan-950 to-purple-950 border border-cyan-500/50 flex items-center justify-center text-cyan-300 text-[10px] font-black shadow-[0_0_10px_rgba(6,182,212,0.4)] group-hover:rotate-45 transition-transform duration-300 shrink-0">
                    ✦
                  </span>
                  <span className="group-hover:text-white transition-colors tracking-tight">
                    {h}
                  </span>
                </div>
              ))}
            </div>

            {/* Live Cyber Ticker / Stats Bar */}
            {stats && (
              <div className="mt-3 p-2.5 rounded-xl bg-[#0a071e]/80 border border-purple-500/20 flex items-center gap-2 text-[11px] font-mono text-gray-300 shadow-inner">
                <FaBolt className="text-amber-400 w-3 h-3 shrink-0 animate-bounce" />
                <span className="truncate">{stats}</span>
              </div>
            )}
          </div>
        </div>

        {/* ======================================================== */}
        {/* BOTTOM: 3D ACTION BUTTONS (translateZ: 25px) */}
        {/* ======================================================== */}
        <div className="p-6 sm:p-7 pt-0 relative z-20 [transform:translateZ(25px)] flex flex-col sm:flex-row gap-3">
          {liveDemo && (
            <Link
              href={liveDemo}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1 relative group overflow-hidden py-3 px-5 rounded-2xl text-sm font-black font-mono text-white shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border border-cyan-400"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-600 bg-[length:200%_auto] group-hover:bg-right transition-all duration-500" />
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
              <FaRocket className="w-4 h-4 relative z-10 text-cyan-200 animate-pulse" />
              <span className="relative z-10 tracking-wide uppercase">
                Live Demo
              </span>
              <FaExternalLinkAlt className="w-3 h-3 text-cyan-200 relative z-10 ml-0.5" />
            </Link>
          )}

          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className={`${
              liveDemo ? "flex-1" : "w-full"
            } py-3 px-5 bg-gradient-to-r from-purple-950/60 via-[#030014] to-cyan-950/60 hover:from-purple-800/60 hover:to-cyan-800/60 border border-[#7042f880] hover:border-cyan-400 rounded-2xl text-sm font-bold font-mono text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-95`}
          >
            <FaGithub className="w-4 h-4 text-white" />
            <span>{liveDemo ? "Code" : "View Source on GitHub"}</span>
            <FaExternalLinkAlt className="w-3 h-3 text-cyan-300 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
