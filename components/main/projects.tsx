"use client";

import { ProjectCard } from "@/components/sub/project-card";
import { SparklesIcon } from "@heroicons/react/24/solid";

const DETAILED_PROJECTS = [
  {
    title: "AI Resume Builder & ATS Checker",
    badge: "React · Spring Boot · Groq AI",
    status: "LIVE ON VERCEL",
    liveDemo: "https://ai-resume-builder-pi-coral.vercel.app/",
    description:
      "Engineered an AI-powered resume builder and optimizer using React, Spring Boot, and Groq (Llama 3). Features automated 14-point ATS scoring, bullet-point polishing, and dynamic PDF generation; deployed on Render & Vercel using Docker.",
    image: "/projects/resume.png",
    link: "https://github.com/shakyasagar166",
    glowColor: "rgba(168, 85, 247, 0.45)",
    borderColor: "#a855f7",
    highlights: [
      "Groq AI (Llama 3) Content Optimization",
      "Automated 14-Point ATS Scoring Engine",
      "Dockerized Deployment on Render & Vercel",
    ],
    techTokens: [
      { text: "React 18", color: "text-cyan-300 bg-cyan-950/70 border-cyan-500/40" },
      { text: "Spring Boot", color: "text-emerald-300 bg-emerald-950/70 border-emerald-500/40" },
      { text: "Groq (Llama 3)", color: "text-purple-300 bg-purple-950/70 border-purple-500/40" },
      { text: "14-Point ATS", color: "text-amber-300 bg-amber-950/70 border-amber-500/40" },
      { text: "Docker", color: "text-blue-300 bg-blue-950/70 border-blue-500/40" },
      { text: "Vercel Live 🚀", color: "text-pink-300 bg-pink-950/70 border-pink-500/40" },
    ],
    stats: "⚡ Latency: <50ms · 14-Point ATS Scoring · 100% PDF Generation",
  },
  {
    title: "Food Delivery Application",
    badge: "React · Spring Boot · MySQL",
    status: "LIVE ON VERCEL",
    liveDemo: "https://food-delivery-java-fullstack-zlqd-taupe.vercel.app/",
    description:
      "Full-stack online food delivery platform with React frontend on Vercel and Spring Boot backend on Render connected to Aiven MySQL. Features customer & admin dashboards, menu management, order lifecycle, cart checkout, and an intelligent AI chatbot.",
    image: "/projects/food.png",
    link: "https://github.com/shakyasagar166/food-delivery-java-fullstack",
    glowColor: "rgba(249, 115, 22, 0.45)",
    borderColor: "#f97316",
    highlights: [
      "Spring Boot REST Backend Live on Render",
      "React 18 Dashboard Deployed on Vercel",
      "Aiven Cloud MySQL Cloud Architecture",
    ],
    techTokens: [
      { text: "React 18", color: "text-cyan-300 bg-cyan-950/70 border-cyan-500/40" },
      { text: "Spring Boot", color: "text-emerald-300 bg-emerald-950/70 border-emerald-500/40" },
      { text: "Aiven MySQL", color: "text-sky-300 bg-sky-950/70 border-sky-500/40" },
      { text: "Render Live", color: "text-purple-300 bg-purple-950/70 border-purple-500/40" },
      { text: "Vercel Live 🚀", color: "text-pink-300 bg-pink-950/70 border-pink-500/40" },
    ],
    stats: "⚡ Vercel Live + Render Live · Aiven Cloud DB · AI Assistant",
  },
  {
    title: "Library Management System",
    badge: "Java · Spring Boot · MySQL",
    status: "ENTERPRISE ARCHITECTURE",
    description:
      "Built an enterprise-grade library management backend with relational entity mappings for books, users, authors, and genres. Provides high-performance CRUD endpoints and transactional inventory management.",
    image: "/projects/library.png",
    link: "https://github.com/shakyasagar166",
    glowColor: "rgba(14, 165, 233, 0.45)",
    borderColor: "#0ea5e9",
    highlights: [
      "JPA Entity Mappings (Books & Authors)",
      "High-Performance Full CRUD Controllers",
      "Transactional Inventory Management",
    ],
    techTokens: [
      { text: "Java Core", color: "text-amber-300 bg-amber-950/70 border-amber-500/40" },
      { text: "Spring Data JPA", color: "text-emerald-300 bg-emerald-950/70 border-emerald-500/40" },
      { text: "MySQL Relational", color: "text-sky-300 bg-sky-950/70 border-sky-500/40" },
      { text: "Full CRUD", color: "text-teal-300 bg-teal-950/70 border-teal-500/40" },
      { text: "ACID Transactions", color: "text-indigo-300 bg-indigo-950/70 border-indigo-500/40" },
    ],
    stats: "⚡ ACID Compliant · Many-to-Many Relational Models · Sub-10ms Queries",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-24 px-4 sm:px-8 max-w-7xl mx-auto z-20 relative select-none"
    >
      {/* Background Cosmic Atmosphere Glowing Halos */}
      <div className="absolute top-1/3 -left-32 w-[600px] h-[400px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 -right-32 w-[600px] h-[400px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Header with Flowing Animated Gradient Text & Cyber Matrix Meta */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="Welcome-box py-[6px] px-[16px] border border-[#7042f88b] opacity-[0.9] flex items-center gap-2 rounded-full mb-4 bg-[#03001460] backdrop-blur-md shadow-[0_0_20px_rgba(112,66,248,0.3)]">
          <SparklesIcon className="text-cyan-400 h-4 w-4 animate-spin-slow" />
          <span className="Welcome-text text-[12px] sm:text-[13px] font-mono tracking-wide">
            PRODUCTION-GRADE ARCHITECTURES
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping ml-1" />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black animate-gradient-text animate-text-glow tracking-tight text-center">
          Featured Projects
        </h2>

        {/* Cyber Subtitle with Laser Indicator */}
        <div className="flex items-center justify-center gap-2 mt-3 text-xs sm:text-sm font-mono text-cyan-300/80">
          <span className="text-purple-400 font-bold">◈</span>
          <span>[ 03 DEPLOYED ARCHITECTURES // FULL-STACK JAVA & GENERATIVE AI ]</span>
          <span className="text-purple-400 font-bold">◈</span>
        </div>

        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mt-4 font-mono leading-relaxed">
          Real-world full-stack architectures integrating Java, Spring Boot, React, and Generative AI
        </p>
      </div>

      {/* 3D Holographic Project Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {DETAILED_PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            liveDemo={(project as any).liveDemo}
            badge={project.badge}
            status={project.status}
            highlights={project.highlights}
            glowColor={project.glowColor}
            borderColor={project.borderColor}
            index={i}
            stats={project.stats}
            techTokens={project.techTokens}
          />
        ))}
      </div>
    </section>
  );
};
