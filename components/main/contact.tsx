"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp,
  FaCopy,
  FaCheck,
  FaBolt,
  FaExternalLinkAlt,
  FaGlobeAmericas,
} from "react-icons/fa";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { SiLeetcode } from "react-icons/si";

// 3D Perspective Bento Card Component
interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  borderColor?: string;
  delayIndex?: number;
}

const ContactBentoCard: React.FC<BentoCardProps> = ({
  children,
  className = "",
  glowColor = "rgba(112,66,248,0.4)",
  borderColor = "#7042f8",
  delayIndex = 0,
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

    const rotX = -((y - centerY) / centerY) * 8;
    const rotY = ((x - centerX) / centerX) * 8;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const floatDuration = 4 + (delayIndex % 3) * 0.4;
  const floatDelay = (delayIndex % 3) * 0.25;

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
            isHovered ? "scale3d(1.02, 1.02, 1.02)" : "scale3d(1, 1, 1)"
          }`,
          transition: isHovered
            ? "transform 0.12s ease-out, box-shadow 0.2s ease-out"
            : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease",
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? `0 22px 50px -12px ${glowColor}, 0 0 32px 2px ${glowColor}`
            : "0 12px 32px -15px rgba(0,0,0,0.7)",
          borderColor: isHovered ? borderColor : "rgba(112,66,248,0.35)",
        }}
        className={`relative overflow-hidden rounded-3xl border bg-[#030014]/90 backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors duration-300 h-full group ${className}`}
      >
        {/* Holographic Cursor Spotlight Glare */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100 z-10"
            style={{
              background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.14), transparent 70%)`,
            }}
          />
        )}

        {/* Ambient Corner Atmosphere Glow */}
        <div
          className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl pointer-events-none opacity-25 group-hover:opacity-65 transition-opacity duration-500"
          style={{ background: glowColor }}
        />

        {/* Content with 3D Depth (translateZ: 25px) */}
        <div className="relative z-20 [transform:translateZ(25px)] flex flex-col h-full justify-between">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shakyasagar166@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-4 sm:px-8 max-w-7xl mx-auto z-20 relative select-none"
    >
      {/* Background Cosmic Atmosphere Glowing Halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-purple-600/15 via-cyan-500/15 to-pink-500/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Header Section with Futuristic Cyber Pill & Animated Gradient Text */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="Welcome-box py-[6px] px-[16px] border border-[#7042f88b] opacity-[0.95] flex items-center gap-2 rounded-full mb-4 bg-[#03001460] backdrop-blur-md shadow-[0_0_20px_rgba(112,66,248,0.35)]">
          <SparklesIcon className="text-cyan-400 h-4 w-4 animate-spin-slow" />
          <span className="Welcome-text text-[12px] sm:text-[13px] font-mono tracking-wide">
            COMMUNICATION UPLINK // OPEN FOR OPPORTUNITIES
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping ml-1" />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-center mb-3">
          <span className="animate-gradient-text animate-text-glow">
            Let&apos;s Build Something
          </span>
          <br />
          <span className="text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            Extraordinary Together.
          </span>
        </h2>

        {/* Cyber Subtitle Meta Bar */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono text-cyan-300/80 mb-3">
          <span className="text-purple-400 font-bold">◈</span>
          <span>AVAILABLE FOR IMMEDIATE JOINING · FULL-TIME &amp; CONTRACT</span>
          <span className="text-purple-400 font-bold">◈</span>
        </div>

        <p className="text-gray-300 text-sm sm:text-base text-center max-w-2xl font-mono leading-relaxed">
          Have an open engineering role, a high-scale microservices challenge, or an innovative GenAI project?
          Reach out directly via email, phone, WhatsApp, or developer networks.
        </p>
      </div>

      {/* 3D Cyber Bento Grid (2x2 Layout + Master Bottom Strip) */}
      <div className="w-full space-y-6 max-w-6xl">
        {/* ROW 1: PRIMARY EMAIL (SPAN 7) + INSTANT CALL & WHATSAPP (SPAN 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          {/* BENTO CARD 1: PRIMARY EMAIL UPLINK (SPAN 7) */}
          <div className="lg:col-span-7 h-full">
            <ContactBentoCard
              glowColor="rgba(168, 85, 247, 0.45)"
              borderColor="#a855f7"
              delayIndex={0}
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between pb-4 border-b border-purple-500/20 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[11px] font-mono font-bold text-purple-300 uppercase tracking-wider">
                      [ 01 // OFFICIAL INBOX UPLINK ]
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    Active &bull; &lt; 2h Response
                  </span>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-5">
                  {/* Icon with Spinning Cyber Ring */}
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-900/40 to-[#030014] border border-purple-500/50 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.35)]">
                    <div className="absolute -inset-1.5 rounded-2xl border border-dashed border-cyan-400/40 animate-spin-slow pointer-events-none" />
                    <FaEnvelope className="w-8 h-8 text-purple-300 group-hover:text-cyan-300 transition-colors" />
                  </div>

                  {/* Title & Email Value */}
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                      Direct Inquiries &amp; Interview Schedules
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black font-mono text-cyan-300 group-hover:text-white transition-colors break-all tracking-tight drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                      shakyasagar166@gmail.com
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed mb-6">
                  Primary channel for technical interviews, job offers, and collaborative projects. Open for discussions regarding full-stack software development and AI engineering.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-3 px-5 rounded-2xl bg-purple-950/60 hover:bg-purple-800/60 border border-purple-500/40 hover:border-cyan-400 text-xs sm:text-sm font-mono font-bold text-white flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 shadow-md"
                >
                  {copied ? (
                    <>
                      <FaCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Email Copied to Clipboard! ✨</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="w-4 h-4 text-cyan-300" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href="mailto:shakyasagar166@gmail.com"
                  className="flex-1 py-3 px-5 rounded-2xl bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 bg-[length:200%_auto] hover:bg-right text-xs sm:text-sm font-mono font-black text-white flex items-center justify-center gap-2.5 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-95 border border-cyan-400/60"
                >
                  <FaPaperPlane className="w-3.5 h-3.5 text-cyan-200 animate-pulse" />
                  <span>Launch Mail Client ↗</span>
                </a>
              </div>
            </ContactBentoCard>
          </div>

          {/* BENTO CARD 2: INSTANT CALL & WHATSAPP (SPAN 5) */}
          <div className="lg:col-span-5 h-full">
            <ContactBentoCard
              glowColor="rgba(6, 182, 212, 0.45)"
              borderColor="#06b6d4"
              delayIndex={1}
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                      [ 02 // VOICE &amp; WHATSAPP ]
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                    10 AM – 10 PM IST
                  </span>
                </div>

                {/* Main Content Area */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Icon with Spinning Cyber Ring */}
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-900/40 to-[#030014] border border-cyan-500/50 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-purple-400 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.35)]">
                    <div className="absolute -inset-1 rounded-2xl border border-dashed border-purple-400/40 animate-spin-slow pointer-events-none" />
                    <FaPhone className="w-7 h-7 text-cyan-300 group-hover:text-purple-300 transition-colors" />
                  </div>

                  <div>
                    <div className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                      Instant Hotline
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black font-mono text-emerald-300 group-hover:text-white transition-colors tracking-tight drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]">
                      +91 9058605348
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed mb-6">
                  Available for direct recruiter voice screenings, quick phone discussions, and instant WhatsApp messaging.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://wa.me/919058605348?text=Hi%20Shivam%2C%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20an%20engineering%20opportunity!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-2xl bg-emerald-950/60 hover:bg-emerald-800/60 border border-emerald-500/40 hover:border-emerald-300 text-xs sm:text-sm font-mono font-bold text-white flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-sm"
                >
                  <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Chat 💬</span>
                </a>

                <a
                  href="tel:+919058605348"
                  className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-xs sm:text-sm font-mono font-black text-white flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] active:scale-95 border border-emerald-400/50"
                >
                  <FaPhone className="w-3.5 h-3.5 text-cyan-200" />
                  <span>Call Direct 📞</span>
                </a>
              </div>
            </ContactBentoCard>
          </div>
        </div>

        {/* ROW 2: MOBILITY & RELOCATION (SPAN 5) + VERIFIED DEVELOPER PROFILES (SPAN 7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          {/* BENTO CARD 3: MOBILITY & RELOCATION (SPAN 5) */}
          <div className="lg:col-span-5 h-full">
            <ContactBentoCard
              glowColor="rgba(236, 72, 153, 0.45)"
              borderColor="#ec4899"
              delayIndex={2}
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between pb-4 border-b border-pink-500/20 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                    <span className="text-[11px] font-mono font-bold text-pink-300 uppercase tracking-wider">
                      [ 03 // LOCATION &amp; MOBILITY ]
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-pink-300 bg-pink-950/60 px-2.5 py-0.5 rounded-full border border-pink-500/30">
                    Open to Relocate
                  </span>
                </div>

                {/* Main Content Area */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-900/40 to-[#030014] border border-pink-500/50 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_25px_rgba(236,72,153,0.35)]">
                    <div className="absolute -inset-1 rounded-2xl border border-dashed border-pink-400/40 animate-spin-slow pointer-events-none" />
                    <FaMapMarkerAlt className="w-7 h-7 text-pink-400 group-hover:text-cyan-300 transition-colors" />
                  </div>

                  <div>
                    <div className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                      Current Base
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-pink-300 transition-colors tracking-tight">
                      Ghaziabad (Delhi NCR)
                    </h3>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0a071e]/90 border border-pink-500/30 text-xs font-mono text-gray-200 mb-4 shadow-inner">
                  <div className="text-pink-300 font-bold mb-1">
                    Work Arrangement Flexibility:
                  </div>
                  <div>In-Office &bull; Hybrid &bull; 100% Remote</div>
                </div>
              </div>

              {/* Relocation Capsules */}
              <div className="pt-2">
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2">
                  Preferred Relocation Tech Hubs:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Bangalore 🚀",
                    "Pune 🚀",
                    "Hyderabad 🚀",
                    "Gurgaon / Noida 🚀",
                  ].map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-pink-950/60 text-pink-300 border border-pink-500/40 hover:scale-105 transition-transform cursor-default"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </ContactBentoCard>
          </div>

          {/* BENTO CARD 4: VERIFIED DEVELOPER PROFILES (SPAN 7) */}
          <div className="lg:col-span-7 h-full">
            <ContactBentoCard
              glowColor="rgba(245, 158, 11, 0.45)"
              borderColor="#f59e0b"
              delayIndex={3}
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between pb-4 border-b border-amber-500/20 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[11px] font-mono font-bold text-amber-300 uppercase tracking-wider">
                      [ 04 // VERIFIED PROFILES &amp; CODE ]
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                    Live Repos &bull; 250+ Solved
                  </span>
                </div>

                <div className="text-xs font-mono text-gray-300 mb-4">
                  Explore full-stack repositories, enterprise microservices architectures, and verified algorithmic benchmarks across developer platforms:
                </div>

                {/* 3 Interactive Cyber Profile Pods */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  {/* GitHub Pod */}
                  <a
                    href="https://github.com/shakyasagar166"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-[#0a071e]/90 border border-purple-500/40 hover:border-white transition-all duration-300 hover:scale-105 group/pod flex flex-col justify-between shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white mb-3 group-hover/pod:scale-110 transition-transform">
                        <FaGithub className="w-5 h-5" />
                      </div>
                      <div className="text-sm font-bold text-white group-hover/pod:text-cyan-300 transition-colors">
                        GitHub
                      </div>
                      <div className="text-[11px] font-mono text-gray-400 truncate">
                        @shakyasagar166
                      </div>
                    </div>
                    <div className="pt-3 text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                      <span>View Repos</span>
                      <FaExternalLinkAlt className="w-2.5 h-2.5" />
                    </div>
                  </a>

                  {/* LinkedIn Pod */}
                  <a
                    href="https://www.linkedin.com/in/shivam-shakya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-[#0a071e]/90 border border-[#0A66C2]/40 hover:border-[#0A66C2] transition-all duration-300 hover:scale-105 group/pod flex flex-col justify-between shadow-sm hover:shadow-[0_0_20px_rgba(10,102,194,0.35)]"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-[#0A66C2]/20 flex items-center justify-center text-[#0A66C2] mb-3 group-hover/pod:scale-110 transition-transform">
                        <FaLinkedin className="w-5 h-5" />
                      </div>
                      <div className="text-sm font-bold text-white group-hover/pod:text-[#0A66C2] transition-colors">
                        LinkedIn
                      </div>
                      <div className="text-[11px] font-mono text-gray-400 truncate">
                        in/shivam-shakya
                      </div>
                    </div>
                    <div className="pt-3 text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                      <span>Connect</span>
                      <FaExternalLinkAlt className="w-2.5 h-2.5" />
                    </div>
                  </a>

                  {/* LeetCode Pod */}
                  <a
                    href="https://leetcode.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-[#0a071e]/90 border border-amber-500/40 hover:border-amber-400 transition-all duration-300 hover:scale-105 group/pod flex flex-col justify-between shadow-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.35)]"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 mb-3 group-hover/pod:scale-110 transition-transform">
                        <SiLeetcode className="w-5 h-5" />
                      </div>
                      <div className="text-sm font-bold text-white group-hover/pod:text-amber-300 transition-colors">
                        LeetCode
                      </div>
                      <div className="text-[11px] font-mono text-amber-400 font-extrabold truncate">
                        250+ Solved
                      </div>
                    </div>
                    <div className="pt-3 text-[10px] font-mono text-amber-300 flex items-center gap-1">
                      <span>DSA Profile</span>
                      <FaExternalLinkAlt className="w-2.5 h-2.5" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pt-2 border-t border-amber-500/20">
                <span>Enterprise Java &bull; Generative AI &bull; Spring Boot</span>
                <span className="text-emerald-400 font-bold">● Actively Interviewing</span>
              </div>
            </ContactBentoCard>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MASTER FULL-WIDTH ACTION STRIP: FAST UPLINK DISPATCHER   */}
        {/* ======================================================== */}
        <div className="w-full p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-purple-950/70 via-[#0a071e]/95 to-cyan-950/70 border border-cyan-500/40 shadow-[0_0_35px_rgba(6,182,212,0.25)] backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono font-bold text-cyan-300">
              <FaBolt className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>READY TO CONTRIBUTE FROM DAY ONE</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-200 font-mono max-w-xl">
              Let&apos;s discuss how my full-stack engineering skills in Java, Spring Boot, React, and Generative AI can accelerate your product roadmap.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="mailto:shakyasagar166@gmail.com"
              className="py-3 px-6 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-xs sm:text-sm font-mono font-black text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.5)] border border-cyan-400/50"
            >
              <FaEnvelope className="w-3.5 h-3.5 text-cyan-200" />
              <span>Send Direct Email ✉</span>
            </a>

            <a
              href="https://wa.me/919058605348?text=Hi%20Shivam%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20engineering%20opportunity!"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-2xl bg-[#030014]/90 hover:bg-emerald-950/70 border border-emerald-500/50 hover:border-emerald-400 text-xs sm:text-sm font-mono font-bold text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
            >
              <FaWhatsapp className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Chat 💬</span>
            </a>

            <a
              href="tel:+919058605348"
              className="py-3 px-6 rounded-2xl bg-[#030014]/90 hover:bg-cyan-950/70 border border-cyan-500/50 hover:border-cyan-400 text-xs sm:text-sm font-mono font-bold text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
            >
              <FaPhone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call Direct 📞</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
