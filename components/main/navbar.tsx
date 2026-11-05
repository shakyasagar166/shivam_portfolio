"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { NAV_LINKS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("about-me");

  // 3D Tilt state for Navbar Island
  const [navRotateX, setNavRotateX] = useState(0);
  const [navRotateY, setNavRotateY] = useState(0);
  const [navHovered, setNavHovered] = useState(false);
  const [glareX, setGlareX] = useState(50);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      // Detect active section
      const sections = ["about-me", "skills", "experience", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = -((y - centerY) / centerY) * 6; // gentle 6deg 3D tilt
    const rY = ((x - centerX) / centerX) * 6;

    setNavRotateX(rX);
    setNavRotateY(rY);
    setGlareX((x / rect.width) * 100);
  };

  return (
    <>
      {/* 3D Cosmic Laser Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3.5px] z-[80] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 shadow-[0_0_15px_#00f0ff,0_0_30px_#7042f8] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating 3D Island Header */}
      <header className="fixed top-3 sm:top-5 left-0 w-full z-50 px-3 sm:px-6 pointer-events-none [perspective:1200px]">
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="max-w-6xl mx-auto pointer-events-auto"
        >
          {/* Main 3D Tilted Pill Container */}
          <div
            onMouseMove={handleNavMouseMove}
            onMouseEnter={() => setNavHovered(true)}
            onMouseLeave={() => {
              setNavRotateX(0);
              setNavRotateY(0);
              setNavHovered(false);
            }}
            style={{
              transform: `rotateX(${navRotateX}deg) rotateY(${navRotateY}deg) ${navHovered ? "scale3d(1.01, 1.01, 1.01)" : "scale3d(1, 1, 1)"}`,
              transition: navHovered
                ? "transform 0.1s ease-out, box-shadow 0.2s ease-out"
                : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease",
              transformStyle: "preserve-3d",
              boxShadow: navHovered
                ? "0 20px 45px -10px rgba(112,66,248,0.5), 0 0 35px 2px rgba(6,182,212,0.35)"
                : "0 15px 35px rgba(3,0,20,0.85), 0 0 25px rgba(112,66,248,0.25)",
            }}
            className="relative rounded-full bg-[#030014]/90 backdrop-blur-2xl border border-purple-500/60 px-4 sm:px-6 py-2.5 transition-colors duration-300 flex items-center justify-between overflow-hidden"
          >
            {/* Dynamic Light Sweep Glare across Island */}
            {navHovered && (
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100 z-10"
                style={{
                  background: `radial-gradient(circle 350px at ${glareX}% 50%, rgba(255, 255, 255, 0.12), transparent 70%)`,
                }}
              />
            )}

            {/* Continuous Running Neon Beam Border */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/30 pointer-events-none animate-pulse" />

            {/* Ambient dynamic glow underneath navbar */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600/30 via-cyan-500/30 to-pink-500/30 blur-xl -z-10 pointer-events-none" />

            {/* Left: Brand + 3D Gyroscopic Avatar */}
            <Link
              href="#about-me"
              className="flex items-center gap-3.5 group select-none relative z-20 [transform:translateZ(20px)]"
            >
              <div className="relative w-11 h-11 flex items-center justify-center">
                {/* Ring 1: Outer dashed purple orbit (spins clockwise) */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400/80 animate-spin-slow" />
                {/* Ring 2: Inner solid cyan orbit (spins counter-clockwise) */}
                <div
                  className="absolute inset-1 rounded-full border border-cyan-400/90"
                  style={{ animation: "spin 7s linear infinite reverse" }}
                />
                {/* Center Shivam Photo with breathing pulse */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-8 h-8 rounded-full overflow-hidden border border-[#030014] shadow-md"
                >
                  <Image
                    src="/shivam.jpg"
                    alt="Shivam Shakya Avatar"
                    fill
                    sizes="32px"
                    className="object-cover object-top group-hover:scale-115 transition-transform duration-500"
                  />
                </motion.div>
                {/* Live Online Green Beacon */}
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#030014] animate-ping" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#030014]" />
              </div>

              <div className="flex flex-col">
                <span className="font-black text-white tracking-wider text-xs sm:text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-400 transition-all">
                  SHIVAM SHAKYA
                </span>
                <span className="text-[9px] text-gray-300 font-mono tracking-tight hidden sm:flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Full Stack Java & AI Dev
                </span>
              </div>
            </Link>

            {/* Center: 3D Frosted Navigation Links with Active Glow Pill */}
            <nav className="hidden md:flex items-center gap-1.5 bg-[#030014]/70 p-1.5 rounded-full border border-purple-500/30 shadow-inner relative z-20 [transform:translateZ(20px)]">
              {NAV_LINKS.map((link) => {
                const sectionId = link.link.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={link.title}
                    href={link.link}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 shadow-[0_0_20px_rgba(6,182,212,0.6)] border border-cyan-400 scale-105"
                        : "text-gray-300 hover:text-white hover:bg-purple-950/50 hover:scale-105"
                    }`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Socials & 3D Shimmering "Hire Me" Button */}
            <div className="hidden lg:flex items-center gap-2.5 relative z-20 [transform:translateZ(20px)]">
              <Link
                href="https://github.com/shakyasagar166"
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 rounded-xl bg-[#030014]/80 text-gray-300 hover:text-white border border-purple-500/30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:scale-115 active:scale-95 transition-all duration-200"
                title="GitHub Profile"
              >
                <FaGithub className="h-4 w-4" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/shivam-shakya/"
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 rounded-xl bg-[#030014]/80 text-[#0A66C2] hover:text-white hover:bg-[#0A66C2]/20 border border-purple-500/30 hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.5)] hover:scale-115 active:scale-95 transition-all duration-200"
                title="LinkedIn Profile"
              >
                <FaLinkedin className="h-4 w-4" />
              </Link>

              <Link
                href="mailto:shakyasagar166@gmail.com"
                className="p-2 rounded-xl bg-[#030014]/80 text-emerald-400 hover:text-white hover:bg-emerald-950/30 border border-purple-500/30 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:scale-115 active:scale-95 transition-all duration-200"
                title="Email Shivam"
              >
                <FaEnvelope className="h-4 w-4" />
              </Link>

              {/* 3D Shimmering "Hire Me" Button with Continuous Pulse */}
              <motion.a
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                href="mailto:shakyasagar166@gmail.com"
                className="relative group overflow-hidden py-2 px-5 rounded-full text-xs font-black text-white shadow-[0_0_25px_rgba(112,66,248,0.7)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center gap-2 border border-purple-400/70"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 bg-[length:200%_auto] group-hover:bg-right transition-all duration-500" />
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                <FaPaperPlane className="w-3 h-3 relative z-10 text-cyan-200" />
                <span className="relative z-10 tracking-wider uppercase font-mono">
                  Hire Me
                </span>
              </motion.a>
            </div>

            {/* Hamburger Menu for Mobile */}
            <button
              className="md:hidden text-white focus:outline-none p-1.5 rounded-full bg-[#030014]/80 border border-purple-500/40 text-lg relative z-20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Dropdown Menu with 3D Slide Down */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 w-full bg-[#030014]/95 backdrop-blur-2xl border border-purple-500/60 rounded-3xl p-5 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-3 duration-300">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 px-4 rounded-xl text-sm font-semibold text-gray-200 hover:text-cyan-300 hover:bg-purple-950/40 border border-transparent hover:border-purple-500/30 transition-all"
                >
                  {link.title}
                </Link>
              ))}

              <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Link
                    href="https://github.com/shakyasagar166"
                    target="_blank"
                    className="p-2 rounded-lg bg-purple-950/40 text-gray-300"
                  >
                    <FaGithub className="w-4 h-4" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/shivam-shakya/"
                    target="_blank"
                    className="p-2 rounded-lg bg-purple-950/40 text-[#0A66C2]"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </Link>
                  <Link
                    href="mailto:shakyasagar166@gmail.com"
                    className="p-2 rounded-lg bg-purple-950/40 text-emerald-400"
                  >
                    <FaEnvelope className="w-4 h-4" />
                  </Link>
                </div>

                <a
                  href="mailto:shakyasagar166@gmail.com"
                  className="py-2 px-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-xs font-bold text-white shadow-md font-mono"
                >
                  Hire Me
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </header>
    </>
  );
};
