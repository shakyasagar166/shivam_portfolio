"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

// 7 Flagship Core Skills for Shivam Shakya
const CORE_SKILLS = [
  {
    name: "Java",
    image: "/skills/java.png",
    role: "Core & Enterprise",
    desc: "OOP · Multithreading · Collections · JVM",
    proficiency: "Primary Language",
    glow: "rgba(245, 158, 11, 0.4)",
    borderColor: "#f59e0b",
    tagColor: "text-amber-300 bg-amber-950/60 border-amber-500/40",
  },
  {
    name: "Spring Boot",
    image: "/skills/springboot.png",
    role: "Backend Architecture",
    desc: "Microservices · REST APIs · Spring Security · JPA",
    proficiency: "Core Framework",
    glow: "rgba(16, 185, 129, 0.4)",
    borderColor: "#10b981",
    tagColor: "text-emerald-300 bg-emerald-950/60 border-emerald-500/40",
  },
  {
    name: "React.js",
    image: "/skills/react.png",
    role: "Frontend Development",
    desc: "Component Architecture · Hooks · State Management",
    proficiency: "Full Stack UI",
    glow: "rgba(6, 182, 212, 0.4)",
    borderColor: "#06b6d4",
    tagColor: "text-cyan-300 bg-cyan-950/60 border-cyan-500/40",
  },
  {
    name: "Generative AI",
    image: "/skills/ai.png",
    role: "AI & LLM Integration",
    desc: "Groq AI · Llama 3 · Prompt Engineering · RAG",
    proficiency: "Specialization",
    glow: "rgba(168, 85, 247, 0.45)",
    borderColor: "#a855f7",
    tagColor: "text-purple-300 bg-purple-950/60 border-purple-500/40",
  },
  {
    name: "MySQL",
    image: "/skills/mysql.png",
    role: "Relational Database",
    desc: "Entity Mappings · Indexing · Hibernate · SQL",
    proficiency: "Database Core",
    glow: "rgba(14, 165, 233, 0.4)",
    borderColor: "#0ea5e9",
    tagColor: "text-sky-300 bg-sky-950/60 border-sky-500/40",
  },
  {
    name: "Docker",
    image: "/skills/docker.png",
    role: "DevOps & Containers",
    desc: "Containerization · Docker Compose · Render Deploy",
    proficiency: "DevOps Pipeline",
    glow: "rgba(59, 130, 246, 0.4)",
    borderColor: "#3b82f6",
    tagColor: "text-blue-300 bg-blue-950/60 border-blue-500/40",
  },
  {
    name: "Python",
    image: "/skills/python.png",
    role: "Algorithms & Scripting",
    desc: "Data Structures · LeetCode DSA · AI Pipelines",
    proficiency: "Problem Solving",
    glow: "rgba(234, 179, 8, 0.4)",
    borderColor: "#eab308",
    tagColor: "text-yellow-300 bg-yellow-950/60 border-yellow-500/40",
  },
];

// Custom 3D Animation for each Skill Image inside the card
const getSkillImageAnimation = (name: string) => {
  switch (name) {
    case "React.js":
      return {
        animate: { rotate: 360 },
        transition: { duration: 10, repeat: Infinity, ease: "linear" as const },
      };
    case "Java":
      return {
        animate: { y: [0, -6, 0], scale: [1, 1.08, 1], rotate: [0, -3, 3, 0] },
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
      };
    case "Spring Boot":
      return {
        animate: { scale: [1, 1.1, 1], rotate: [-5, 5, -5] },
        transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" as const },
      };
    case "Generative AI":
      return {
        animate: { scale: [1, 1.14, 1], rotate: [0, 4, -4, 0] },
        transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" as const },
      };
    case "Docker":
      return {
        animate: { y: [0, -7, 0], rotate: [-3, 3, -3] },
        transition: { duration: 3.8, repeat: Infinity, ease: "easeInOut" as const },
      };
    case "MySQL":
      return {
        animate: { y: [0, -6, 0], x: [0, 4, -4, 0] },
        transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const },
      };
    case "Python":
      return {
        animate: { rotate: [0, 7, -7, 0], scale: [1, 1.08, 1] },
        transition: { duration: 3.4, repeat: Infinity, ease: "easeInOut" as const },
      };
    default:
      return {
        animate: { y: [0, -5, 0] },
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
      };
  }
};

// Interactive 3D Skill Card Component
const Skill3DCard = ({
  skill,
  index,
}: {
  skill: (typeof CORE_SKILLS)[0];
  index: number;
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

    const rotX = -((y - centerY) / centerY) * 12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const floatDuration = 3.5 + (index % 3) * 0.5;
  const floatDelay = (index % 4) * 0.3;
  const imageAnim = getSkillImageAnimation(skill.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      animate={{
        y: [0, -8, 0],
      }}
      style={{
        animation: `floatUpDown ${floatDuration}s ease-in-out infinite ${floatDelay}s`,
      }}
      className="relative [perspective:1000px] select-none h-full"
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
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? "scale3d(1.04, 1.04, 1.04)" : "scale3d(1, 1, 1)"}`,
          transition: isHovered
            ? "transform 0.12s ease-out, box-shadow 0.2s ease-out"
            : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease",
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? `0 20px 40px -15px ${skill.glow}, 0 0 35px 2px ${skill.glow}`
            : "0 10px 25px -10px rgba(0,0,0,0.5)",
          borderColor: isHovered ? skill.borderColor : "rgba(112,66,248,0.35)",
        }}
        className="relative overflow-hidden rounded-3xl border bg-[#030014]/90 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between h-full group transition-colors duration-300"
      >
        {/* Holographic Cursor Glare */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100 z-10"
            style={{
              background: `radial-gradient(circle 260px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.16), transparent 70%)`,
            }}
          />
        )}

        {/* Ambient Corner Glow */}
        <div
          className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-30 group-hover:opacity-70 transition-opacity duration-500"
          style={{ background: skill.glow }}
        />

        {/* 3D Content with Pop (translateZ: 25px) */}
        <div className="relative z-20 [transform:translateZ(25px)] flex flex-col items-center text-center">
          {/* Logo Box with Spinning Cyber Ring & Animated Image */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#0a071e]/90 to-[#030014]/95 border border-purple-500/40 group-hover:border-white/60 flex items-center justify-center p-4 mb-4 shadow-lg group-hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-300 group-hover:scale-110">
            {/* Spinning Dashed Cyber Ring */}
            <div className="absolute -inset-1.5 rounded-2xl border border-dashed border-cyan-400/40 animate-spin-slow pointer-events-none" />

            {/* Pulsing Radial Background Aura */}
            <div
              className="absolute inset-1 rounded-2xl blur-lg opacity-40 group-hover:opacity-90 transition-opacity pointer-events-none animate-pulse"
              style={{ background: skill.glow }}
            />

            {/* FULLY ANIMATED IMAGE WITH 3D PHYSICS */}
            <motion.div
              animate={imageAnim.animate}
              transition={imageAnim.transition}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image
                src={skill.image}
                alt={skill.name}
                fill
                unoptimized
                sizes="96px"
                className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all"
              />
            </motion.div>
          </div>

          {/* Skill Title */}
          <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors mb-1 tracking-tight">
            {skill.name}
          </h3>

          {/* Role / Category */}
          <div className="text-xs sm:text-sm font-mono font-bold text-gray-200 mb-2">
            {skill.role}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed mb-4 max-w-[240px]">
            {skill.desc}
          </p>
        </div>

        {/* Bottom Tag */}
        <div className="relative z-20 [transform:translateZ(20px)] flex justify-center pt-3 border-t border-purple-500/20">
          <span
            className={`text-xs font-mono font-extrabold px-3.5 py-1.5 rounded-full border shadow-sm ${skill.tagColor}`}
          >
            {skill.proficiency}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center py-24 px-4 sm:px-8 max-w-7xl mx-auto z-20 relative select-none"
    >
      {/* Background Cosmic Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-600/15 via-cyan-500/15 to-pink-500/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Header Section with Animated Flowing Gradient */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="Welcome-box py-[6px] px-[14px] border border-[#7042f88b] opacity-[0.9] flex items-center gap-2 rounded-full mb-4 bg-[#03001460] backdrop-blur-sm">
          <SparklesIcon className="text-[#b49bff] h-4 w-4 animate-spin-slow" />
          <span className="Welcome-text text-[12px] sm:text-[13px] font-mono text-[#b49bff]">
            Core Technical Competencies
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black animate-gradient-text animate-text-glow tracking-tight text-center">
          Flagship Skills & Technologies
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mt-4 font-mono leading-relaxed">
          Specialized expertise in Java enterprise microservices, modern React interfaces, relational architectures, and Generative AI
        </p>
      </div>

      {/* 7 Flagship 3D Core Skills Layout: 4 on Top, 3 on Bottom */}
      <div className="w-full space-y-6">
        {/* Row 1: Top 4 Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {CORE_SKILLS.slice(0, 4).map((skill, index) => (
            <Skill3DCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Row 2: Bottom 3 Skills (Centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
          {CORE_SKILLS.slice(4).map((skill, index) => (
            <Skill3DCard key={skill.name} skill={skill} index={index + 4} />
          ))}
        </div>
      </div>

      {/* Video Background behind skills */}
      <div className="w-full h-full absolute inset-0 -z-20 pointer-events-none opacity-20">
        <video
          className="w-full h-full object-cover"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};
