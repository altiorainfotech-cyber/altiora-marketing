"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "../ui/Reveal";
import "@/styles/toolstack.css";

type Tool = { name: string; icon: string; href?: string };
type Cat = { key: string; title: string; tools: Tool[] };

const CATS: Cat[] = [
  {
    key: "frontend",
    title: "Frontend",
    tools: [
      { name: "React", icon: "/icons/tools/react.svg" },
      { name: "Next.js", icon: "/icons/tools/nextjs.svg" },
      { name: "TypeScript", icon: "/icons/tools/typescript.svg" },
      { name: "Tailwind CSS", icon: "/icons/tools/tailwind.svg" },
      { name: "CSS3", icon: "/icons/tools/css3.svg" },
      { name: "HTML5", icon: "/icons/tools/html5.svg" },
    ],
  },
  {
    key: "backend",
    title: "Backend",
    tools: [
      { name: "Node.js", icon: "/icons/tools/nodejs.svg" },
      { name: "NestJS", icon: "/icons/tools/nestjs.svg" },
      { name: "Express", icon: "/icons/tools/express.svg" },
      { name: "Python", icon: "/icons/tools/python.svg" },
      { name: "Go", icon: "/icons/tools/go.svg" },
      { name: "Java", icon: "/icons/tools/java.svg" },
    ],
  },
  {
    key: "databases",
    title: "Databases",
    tools: [
      { name: "PostgreSQL", icon: "/icons/tools/postgres.svg" },
      { name: "MySQL", icon: "/icons/tools/mysql.svg" },
      { name: "MongoDB", icon: "/icons/tools/mongodb.svg" },
      { name: "Redis", icon: "/icons/tools/redis.svg" },
      { name: "SQLite", icon: "/icons/tools/sqlite.svg" },
      { name: "Elastic", icon: "/icons/tools/elastic.svg" },
    ],
  },
  {
    key: "mobile",
    title: "Mobile Development",
    tools: [
      { name: "React Native", icon: "/icons/tools/reactnative.svg" },
      { name: "Flutter", icon: "/icons/tools/flutter.svg" },
      { name: "Swift", icon: "/icons/tools/swift.svg" },
      { name: "Kotlin", icon: "/icons/tools/kotlin.svg" },
      { name: "Ionic", icon: "/icons/tools/ionic.svg" },
      { name: "Xamarin", icon: "/icons/tools/xamarin.svg" },
    ],
  },
  {
    key: "blockchain",
    title: "Blockchain",
    tools: [
      { name: "Solidity", icon: "/icons/tools/solidity.svg" },
      { name: "Hardhat", icon: "/icons/tools/hardhat.svg" },
      { name: "Foundry", icon: "/icons/tools/foundry.svg" },
      { name: "Ethereum", icon: "/icons/tools/ethereum.svg" },
      { name: "Linea", icon: "/icons/tools/linea.svg" },
      { name: "IPFS", icon: "/icons/tools/ipfs.svg" },
    ],
  },
  {
    key: "emerging",
    title: "Emerging Tech",
    tools: [
      { name: "Python AI", icon: "/icons/tools/ai-python.svg" },
      { name: "OpenAI", icon: "/icons/tools/openai.svg" },
      { name: "LangChain", icon: "/icons/tools/langchain.svg" },
      { name: "Vercel AI SDK", icon: "/icons/tools/vercelai.svg" },
      { name: "Supabase", icon: "/icons/tools/supabase.svg" },
      { name: "tRPC", icon: "/icons/tools/trpc.svg" },
    ],
  },
];

const PLACEHOLDER_ICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23666'%3E%3Crect width='24' height='24' rx='4'/%3E%3C/svg%3E";

export default function ToolsStack() {
  const [tab, setTab] = useState(0);
  const current = CATS[tab];

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
      e.preventDefault();
      setTab((prev) => {
        const dir = e.key === "ArrowLeft" ? -1 : 1;
        return (prev + dir + CATS.length) % CATS.length;
      });
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold">
          Tools <span className="text-brand">&amp; Tech Stack</span>
        </h2>

        {/* Tabs with golden active underline */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          role="tablist"
          aria-label="Technology categories"
        >
          {CATS.map((c, i) => {
            const selected = i === tab;
            return (
              <button
                key={c.key}
                role="tab"
                aria-selected={selected}
                aria-controls={`tools-panel-${c.key}`}
                id={`tools-tab-${c.key}`}
                onClick={() => setTab(i)}
                className={`relative pb-1 text-sm sm:text-base border-b-2 transition-colors duration-200
                  ${
                    selected
                      ? "text-[#f4cc6f] border-[#f4cc6f]"
                      : "text-slate-300 border-transparent"
                  }`}
              >
                {c.title}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          role="tabpanel"
          id={`tools-panel-${current.key}`}
          aria-labelledby={`tools-tab-${current.key}`}
          className="mt-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {current.tools.map((t) => (
              <Reveal
                key={t.name}
                className="flex items-stretch justify-center"
              >
                <div className="ts-tile group relative block w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <span className="ts-tile-glow" aria-hidden />
                  <span className="relative z-[1] flex flex-col items-center">
                    <span className="ts-logo-wrap">
                      <Image
                        src={t.icon}
                        alt={t.name}
                        fill
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          img.src = PLACEHOLDER_ICON;
                        }}
                        className="ts-logo"
                      />
                    </span>
                    <span className="mt-3 text-xs sm:text-sm text-center">
                      {t.name}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
