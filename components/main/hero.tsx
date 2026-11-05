import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      {/* Background Cosmic Blackhole Video with Mobile Contrast Optimization */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="rotate-180 absolute -top-[420px] sm:-top-[380px] md:-top-[340px] left-0 w-full h-[900px] sm:h-full object-cover opacity-35 sm:opacity-55 md:opacity-85 brightness-75 md:brightness-95 -z-20 select-none pointer-events-none transition-opacity duration-700"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      {/* Deep Cosmic Dark Gradient Shields to Guarantee 100% Text Readability */}
      <div className="absolute inset-0 bg-[#030014]/65 sm:bg-[#030014]/30 pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#030014]/40 to-[#030014] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,0,20,0.3)_0%,rgba(3,0,20,0.92)_80%)] pointer-events-none -z-10" />

      <HeroContent />
    </div>
  );
};
