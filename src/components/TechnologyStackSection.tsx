"use client";

import { useState } from "react";
import Image from "next/image";

export default function TechnologyStackSection() {
  const technologies = {
    frontend: {
      title: "Frontend Technologies",
      icon: "fas fa-paint-brush",
      techs: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#FFFFFF" },
        { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", color: "#4FC08D" },
        { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", color: "#DD0031" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
        { name: "SASS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", color: "#CC6699" },
        { name: "Material-UI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", color: "#0081CB" },
      ],
    },
    backend: {
      title: "Backend Technologies",
      icon: "fas fa-server",
      techs: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#FFFFFF" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", color: "#092E20" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "#777BB4" },
        { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg", color: "#FF2D20" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#ED8B00" },
        { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", color: "#239120" },
      ],
    },
    database: {
      title: "Database Solutions",
      icon: "fas fa-database",
      techs: [
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", color: "#DC382D" },
        { name: "Neon", logo: "https://neon.tech/favicon/favicon-32x32.png", color: "#00E5FF" },
        { name: "Supabase", logo: "https://supabase.com/favicon/favicon-32x32.png", color: "#3ECF8E" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#FFCA28" },
        { name: "DynamoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "#FF9900" },
      ],
    },
    mobileDevelopment: {
      title: "Mobile Development",
      icon: "fas fa-mobile-alt",
      techs: [
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "#02569B" },
        { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", color: "#FA7343" },
        { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", color: "#0095D5" },
        { name: "Ionic", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg", color: "#3880FF" },
        { name: "Xamarin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg", color: "#3498DB" },
        { name: "Cordova", logo: "https://cordova.apache.org/static/img/cordova_bot.png", color: "#E8E8E8" },
        { name: "Expo", logo: "https://github.com/expo.png", color: "#000020" },
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: "fas fa-cloud",
      techs: [
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "#FF9900" },
        { name: "Vercel", logo: "https://vercel.com/favicon.ico", color: "#FFFFFF" },
        { name: "Render", logo: "/images/render.png", color: "#46E3B7" },
        { name: "Netlify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", color: "#00C7B7" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
        { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", color: "#326CE5" },
        { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", color: "#0078D4" },
        { name: "G Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "#4285F4" },
      ],
    },
    security: {
      title: "Security & Authentication",
      icon: "fas fa-shield-alt",
      techs: [
        { name: "Clerk", logo: "https://clerk.com/favicon.ico", color: "#6366F1" },
        { name: "Auth0", logo: "https://cdn.auth0.com/website/new-homepage/dark-favicon.png", color: "#EB5424" },
        { name: "JWT", logo: "https://jwt.io/img/favicon/favicon-32x32.png", color: "#FFFFFF" },
        { name: "OAuth", logo: "https://oauth.net/images/oauth-logo-square.png", color: "#4285F4" },
        { name: "bcrypt", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#FF6B6B" },
        { name: "SSL/TLS", logo: "https://ssl.com/favicon.ico", color: "#00C851" },
        { name: "Firebase Auth", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#FFCA28" },
        { name: "Passport.js", logo: "https://www.passportjs.org/images/logo.svg", color: "#34D058" },
      ],
    },
    tools: {
      title: "Development Tools",
      icon: "fas fa-tools",
      techs: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#FFFFFF" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007ACC" },
        { name: "Webpack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg", color: "#8DD6F9" },
        { name: "Vite", logo: "https://vitejs.dev/logo.svg", color: "#646CFF" },
        { name: "ESLint", logo: "https://eslint.org/favicon.ico", color: "#4B32C3" },
        { name: "Prettier", logo: "https://prettier.io/icon.png", color: "#F7B93E" },
        { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", color: "#FF6C37" },
      ],
    },
  };

  const [activeTab, setActiveTab] = useState<keyof typeof technologies>("frontend");

  const tabItems: Array<{ key: keyof typeof technologies; label: string; icon: string }> = [
    { key: "frontend", label: "Frontend", icon: "fas fa-paint-brush" },
    { key: "backend", label: "Backend", icon: "fas fa-server" },
    { key: "database", label: "Database", icon: "fas fa-database" },
    { key: "mobileDevelopment", label: "Mobile", icon: "fas fa-mobile-alt" },
    { key: "cloud", label: "Cloud & DevOps", icon: "fas fa-cloud" },
    { key: "security", label: "Security", icon: "fas fa-shield-alt" },
    { key: "tools", label: "Tools", icon: "fas fa-tools" },
  ];

  return (
    <section className="py-20 tech-stack-section bg-[#060615]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Our Technology Stack
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="max-w-5xl w-full">
            <div className="flex flex-wrap justify-center gap-2">
              {tabItems.map((tab) => (
                <button
                  key={tab.key}
                  className={`tech-tab-btn flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-base font-semibold min-w-[140px] transition-all duration-300 border-2 ${
                    activeTab === tab.key
                      ? "bg-gradient-to-r from-[#f2c96c] to-[#ff8f00] text-black border-[#f2c96c] shadow-lg"
                      : "bg-transparent text-white border-[rgba(255,193,7,0.3)] hover:border-[#f2c96c] hover:bg-[rgba(255,193,7,0.1)]"
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <i className={tab.icon}></i>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex justify-center">
          <div className="w-full">
            <div className="tech-content-container bg-gradient-to-br from-[#1a1a3a] to-[#2a2a4a] rounded-3xl border-2 border-[rgba(255,193,7,0.3)] p-12 relative overflow-hidden min-h-[500px]">
              {/* Background Animation */}
              <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,193,7,0.03)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(102,126,234,0.03)_0%,transparent_50%)]"></div>

              {/* Header */}
              <div className="text-center mb-12 relative z-10">
                <div className="mb-6">
                  <i
                    className={`${technologies[activeTab].icon} text-6xl text-[#f2c96c]`}
                    style={{ textShadow: "0 0 20px rgba(255, 193, 7, 0.5)" }}
                  ></i>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {technologies[activeTab].title}
                </h3>
              </div>

              {/* Technology Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
                {technologies[activeTab].techs.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="tech-item bg-[rgba(255,255,255,0.02)] border-2 border-transparent rounded-2xl p-6 text-center transition-all duration-[400ms] cursor-pointer relative overflow-hidden group"
                    style={{
                      animation: `techItemFadeIn 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    {/* Hover Background Effect */}
                    <div
                      className="hover-bg absolute top-1/2 left-1/2 w-0 h-0 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(45deg, ${tech.color}20, transparent)`,
                      }}
                    ></div>

                    {/* Logo/Icon */}
                    <div className="mb-4 relative z-10">
                      <div className="tech-icon-wrapper inline-block">
                        <Image
                          src={tech.logo}
                          alt={`${tech.name} logo`}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-contain transition-all duration-300"
                          style={{
                            filter: `drop-shadow(0 4px 8px ${tech.color}40)`,
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            const fallbackIcon = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallbackIcon) {
                              fallbackIcon.style.display = "inline-block";
                            }
                          }}
                        />
                      </div>
                    </div>

                    {/* Name */}
                    <h5 className="tech-name text-white font-semibold text-lg relative z-10 transition-all duration-300">
                      {tech.name}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes techItemFadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .tech-tab-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
        }

        .tech-tab-btn.active {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 193, 7, 0.4);
        }

        /* Tech Item Hover Effects */
        .tech-item:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: var(--tech-color, #f2c96c);
          box-shadow: 0 15px 30px rgba(255, 193, 7, 0.2), 0 0 20px var(--tech-glow, rgba(255, 193, 7, 0.25));
          background: rgba(255, 255, 255, 0.05);
        }

        .tech-item:hover .hover-bg {
          width: 200px;
          height: 200px;
        }

        .tech-item:hover .tech-icon-wrapper img {
          transform: scale(1.2) rotateY(360deg);
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4))
            drop-shadow(0 0 20px rgba(255, 193, 7, 0.4));
        }

        .tech-item:hover .tech-name {
          color: #f2c96c;
          transform: scale(1.05);
        }

        /* Icon Glow Animation */
        @keyframes icon-glow {
          0%,
          100% {
            filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4))
              drop-shadow(0 0 20px rgba(255, 193, 7, 0.4));
          }
          50% {
            filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4))
              drop-shadow(0 0 30px rgba(255, 193, 7, 0.6))
              drop-shadow(0 0 40px rgba(255, 193, 7, 0.2));
          }
        }

        .tech-item:hover .tech-icon-wrapper img {
          animation: icon-glow 2s ease-in-out infinite;
        }

        /* Set CSS variables for each tech item dynamically */
        ${technologies[activeTab].techs
          .map(
            (tech, i) => `
          .tech-item:nth-child(${i + 1}) {
            --tech-color: ${tech.color};
            --tech-glow: ${tech.color}40;
          }
        `
          )
          .join("")}

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .tech-tab-btn {
            min-width: 120px !important;
            padding: 0.625rem 1rem !important;
            font-size: 0.9rem !important;
          }

          .tech-content-container {
            padding: 2rem !important;
          }

          .tech-item {
            padding: 1rem !important;
          }

          .tech-item img {
            width: 40px !important;
            height: 40px !important;
          }
        }

        @media (max-width: 576px) {
          .tech-tab-btn {
            flex: 0 0 calc(50% - 0.5rem);
            max-width: none !important;
          }

          .tech-item img {
            width: 36px !important;
            height: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}