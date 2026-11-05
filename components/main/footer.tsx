import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#030014]/90 border-t border-[#7042f830] text-gray-300 shadow-2xl p-[30px] z-30 relative">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="w-full flex flex-row items-start justify-around flex-wrap gap-10 mb-12">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[180px] flex flex-col items-start justify-start space-y-3"
            >
              <h3 className="font-bold text-sm text-white tracking-wider uppercase font-mono border-b border-purple-500/40 pb-1.5 w-full">
                {column.title}
              </h3>
              <div className="space-y-2.5">
                {column.data.map(({ icon: Icon, name, link }) => (
                  <div key={`${column.title}-${name}`}>
                    {link.startsWith("http") || link.startsWith("mailto") || link.startsWith("tel") ? (
                      <Link
                        href={link}
                        target={link.startsWith("http") ? "_blank" : undefined}
                        rel={link.startsWith("http") ? "noreferrer noopener" : undefined}
                        className="flex flex-row items-center gap-2 text-xs text-gray-400 hover:text-cyan-400 transition"
                      >
                        {Icon && <Icon className="w-4 h-4 text-purple-400" />}
                        <span>{name}</span>
                      </Link>
                    ) : (
                      <div className="flex flex-row items-center gap-2 text-xs text-gray-400">
                        {Icon && <Icon className="w-4 h-4 text-purple-400" />}
                        <span>{name}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-800/80 w-full flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-400 gap-3">
          <div>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Shivam Shakya</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <span>B.Tech CSE &bull; NITRA Technical Campus</span>
            <span>&bull;</span>
            <span className="text-cyan-400">Full Stack & AI Engineer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
