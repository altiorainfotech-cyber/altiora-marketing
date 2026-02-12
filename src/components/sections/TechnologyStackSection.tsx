"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Import your local images - adjust paths as needed
import dynamoDBImage from '@/assets/DynamoDB.svg';
import neonImage from '@/assets/neon.png';
import tailwindImage from '@/assets/tailwind.svg';
import laravelImage from '@/assets/laravel.png';
import postmanImage from '@/assets/postman.svg';

import type { StaticImageData } from 'next/image';

interface Technology {
    name: string;
    icon: string;
    color: string;
    logo: string | StaticImageData;
}

interface TechnologyCategory {
    title: string;
    icon: string;
    description: string;
    techs: Technology[];
}

interface Technologies {
    [key: string]: TechnologyCategory;
}

interface TabItem {
    key: string;
    label: string;
    icon: string;
}

const TechnologyStackSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('frontend');

    const technologies: Technologies = {
        frontend: {
            title: "Frontend Technologies",
            icon: "fas fa-paint-brush",
            description: "",
            techs: [
                { 
                    name: "React", 
                    icon: "fab fa-react", 
                    color: "#61DAFB", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                },
                { 
                    name: "Next.js", 
                    icon: "fas fa-chevron-right", 
                    color: "#000000", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                },
                { 
                    name: "Vue.js", 
                    icon: "fab fa-vuejs", 
                    color: "#4FC08D", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                },
                { 
                    name: "Angular", 
                    icon: "fab fa-angular", 
                    color: "#DD0031", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                },
                { 
                    name: "TypeScript", 
                    icon: "fas fa-code", 
                    color: "#3178C6", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                },
                { 
                    name: "Tailwind CSS", 
                    icon: "fas fa-palette", 
                    color: "#06B6D4", 
                    logo: tailwindImage
                },
                { 
                    name: "SASS", 
                    icon: "fab fa-sass", 
                    color: "#CC6699", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                },
                { 
                    name: "Material-UI", 
                    icon: "fas fa-layer-group", 
                    color: "#0081CB", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                }
            ]
        },
        backend: {
            title: "Backend Technologies",
            icon: "fas fa-server",
            description: "",
            techs: [
                { 
                    name: "Node.js", 
                    icon: "fab fa-node-js", 
                    color: "#339933", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                },
                { 
                    name: "Express.js", 
                    icon: "fas fa-route", 
                    color: "#000000", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                },
                { 
                    name: "Python", 
                    icon: "fab fa-python", 
                    color: "#3776AB", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                },
                { 
                    name: "Django", 
                    icon: "fas fa-cogs", 
                    color: "#092E20", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                },
                { 
                    name: "PHP", 
                    icon: "fab fa-php", 
                    color: "#777BB4", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                },
                { 
                    name: "Laravel", 
                    icon: "fas fa-gem", 
                    color: "#FF2D20", 
                    logo: laravelImage
                },
                { 
                    name: "Java", 
                    icon: "fab fa-java", 
                    color: "#ED8B00", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                },
                { 
                    name: "C#", 
                    icon: "fas fa-hashtag", 
                    color: "#239120", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                }
            ]
        },
        database: {
            title: "Database Solutions",
            icon: "fas fa-database",
            description: "",
            techs: [
                { 
                    name: "PostgreSQL", 
                    icon: "fas fa-elephant", 
                    color: "#336791", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                },
                { 
                    name: "MySQL", 
                    icon: "fas fa-database", 
                    color: "#4479A1", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                },
                { 
                    name: "MongoDB", 
                    icon: "fas fa-leaf", 
                    color: "#47A248", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                },
                { 
                    name: "Redis", 
                    icon: "fas fa-memory", 
                    color: "#DC382D", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
                },
                { 
                    name: "Neon", 
                    icon: "fas fa-bolt", 
                    color: "#00E5FF", 
                    logo: neonImage
                },
                { 
                    name: "Supabase", 
                    icon: "fas fa-fire", 
                    color: "#3ECF8E", 
                    logo: "https://supabase.com/favicon/favicon-32x32.png"
                },
                { 
                    name: "Firebase", 
                    icon: "fas fa-fire-alt", 
                    color: "#FFCA28", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                },
                { 
                    name: "DynamoDB", 
                    icon: "fas fa-stream", 
                    color: "#FF9900", 
                    logo: dynamoDBImage
                }
            ]
        },
        mobileDevelopment: {
            title: "Mobile Development",
            icon: "fas fa-mobile-alt",
            description: "",
            techs: [
                { 
                    name: "React Native", 
                    icon: "fab fa-react", 
                    color: "#61DAFB", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                },
                { 
                    name: "Flutter", 
                    icon: "fas fa-mobile", 
                    color: "#02569B", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                },
                { 
                    name: "Swift", 
                    icon: "fas fa-swift", 
                    color: "#FA7343", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
                },
                { 
                    name: "Kotlin", 
                    icon: "fas fa-k", 
                    color: "#0095D5", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
                },
                { 
                    name: "Ionic", 
                    icon: "fas fa-ionic", 
                    color: "#3880FF", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg"
                },
                { 
                    name: "Xamarin", 
                    icon: "fas fa-x", 
                    color: "#3498DB", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg"
                },
                { 
                    name: "Cordova", 
                    icon: "fas fa-code-branch", 
                    color: "#E8E8E8", 
                    logo: "https://cordova.apache.org/static/img/cordova_bot.png"
                },
                { 
                    name: "Expo", 
                    icon: "fas fa-rocket", 
                    color: "#000020", 
                    logo: "https://github.com/expo.png"
                }
            ]
        },
        cloud: {
            title: "Cloud & DevOps",
            icon: "fas fa-cloud",
            description: "",
            techs: [
                { 
                    name: "AWS", 
                    icon: "fab fa-aws", 
                    color: "#FF9900", 
                    logo: ""
                },
                { 
                    name: "Vercel", 
                    icon: "fas fa-triangle", 
                    color: "#000000", 
                    logo: "https://vercel.com/favicon.ico"
                },
                { 
                    name: "Render", 
                    icon: "fas fa-cube", 
                    color: "#46E3B7", 
                    logo: "https://render.com/favicon.ico"
                },
                { 
                    name: "Netlify", 
                    icon: "fas fa-rocket", 
                    color: "#00C7B7", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg"
                },
                { 
                    name: "Docker", 
                    icon: "fab fa-docker", 
                    color: "#2496ED", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                },
                { 
                    name: "Kubernetes", 
                    icon: "fas fa-dharmachakra", 
                    color: "#326CE5", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
                },
                { 
                    name: "Azure", 
                    icon: "fab fa-microsoft", 
                    color: "#0078D4", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
                },
                { 
                    name: "Google Cloud", 
                    icon: "fab fa-google", 
                    color: "#4285F4", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
                }
            ]
        },
        security: {
            title: "Security & Authentication",
            icon: "fas fa-shield-alt",
            description: "",
            techs: [
                { 
                    name: "Clerk", 
                    icon: "fas fa-user-shield", 
                    color: "#6366F1", 
                    logo: "https://clerk.com/favicon.ico"
                },
                { 
                    name: "Auth0", 
                    icon: "fas fa-key", 
                    color: "#EB5424", 
                    logo: "https://cdn.auth0.com/website/new-homepage/dark-favicon.png"
                },
                { 
                    name: "JWT", 
                    icon: "fas fa-lock", 
                    color: "#000000", 
                    logo: "https://jwt.io/img/favicon/favicon-32x32.png"
                },
                { 
                    name: "OAuth", 
                    icon: "fas fa-handshake", 
                    color: "#4285F4", 
                    logo: "https://oauth.net/images/oauth-logo-square.png"
                },
                { 
                    name: "bcrypt", 
                    icon: "fas fa-fingerprint", 
                    color: "#FF6B6B", 
                    logo: ""
                },
                { 
                    name: "SSL/TLS", 
                    icon: "fas fa-certificate", 
                    color: "#00C851", 
                    logo: "https://ssl.com/favicon.ico"
                },
                { 
                    name: "Firebase Auth", 
                    icon: "fas fa-fire", 
                    color: "#FFCA28", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                },
                { 
                    name: "Passport.js", 
                    icon: "fas fa-passport", 
                    color: "#34D058", 
                    logo: "https://www.passportjs.org/images/logo.svg"
                }
            ]
        },
        tools: {
            title: "Development Tools",
            icon: "fas fa-tools",
            description: "",
            techs: [
                { 
                    name: "Git", 
                    icon: "fab fa-git-alt", 
                    color: "#F05032", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                },
                { 
                    name: "GitHub", 
                    icon: "fab fa-github", 
                    color: "#181717", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                },
                { 
                    name: "VS Code", 
                    icon: "fas fa-code", 
                    color: "#007ACC", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                },
                { 
                    name: "Webpack", 
                    icon: "fas fa-box", 
                    color: "#8DD6F9", 
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                },
                { 
                    name: "Vite", 
                    icon: "fas fa-lightning-bolt", 
                    color: "#646CFF", 
                    logo: "https://vitejs.dev/logo.svg"
                },
                { 
                    name: "ESLint", 
                    icon: "fas fa-check-circle", 
                    color: "#4B32C3", 
                    logo: "https://eslint.org/favicon.ico"
                },
                { 
                    name: "Prettier", 
                    icon: "fas fa-magic", 
                    color: "#F7B93E", 
                    logo: "https://prettier.io/icon.png"
                },
                { 
                    name: "Postman", 
                    icon: "fas fa-paper-plane", 
                    color: "#FF6C37", 
                    logo: postmanImage
                }
            ]
        }
    };

    const tabItems: TabItem[] = [
        { key: 'frontend', label: 'Frontend', icon: 'fas fa-paint-brush' },
        { key: 'backend', label: 'Backend', icon: 'fas fa-server' },
        { key: 'database', label: 'Database', icon: 'fas fa-database' },
        { key: 'mobileDevelopment', label: 'Mobile', icon: 'fas fa-mobile-alt' },
        { key: 'cloud', label: 'Cloud & DevOps', icon: 'fas fa-cloud' },
        { key: 'security', label: 'Security', icon: 'fas fa-shield-alt' },
        { key: 'tools', label: 'Tools', icon: 'fas fa-tools' }
    ];

    return (
        <section className="py-16 px-6" style={{ backgroundColor: '#060615' }}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                        Our Technology Stack
                    </h2>
                  
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="grid grid-cols-3 gap-2 w-full max-w-sm md:flex md:flex-wrap md:justify-center md:gap-3 md:max-w-none">
                        {tabItems.map((tab) => (
                            <button
                                key={tab.key}
                                className={`tech-tab-btn ${activeTab === tab.key ? 'active' : ''} text-xs md:text-base px-2 py-2 md:px-6 md:py-3`}
                                onClick={() => setActiveTab(tab.key)}
                                style={{
                                    background: activeTab === tab.key 
                                        ? 'linear-gradient(135deg, #ffc107 0%, #ff8f00 100%)' 
                                        : 'transparent',
                                    border: `2px solid ${activeTab === tab.key ? '#ffc107' : 'rgba(255, 193, 7, 0.3)'}`,
                                    borderRadius: '12px',
                                    color: activeTab === tab.key ? '#000' : '#ffffff',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '4px'
                                }}
                                onMouseEnter={(e) => {
                                    if (activeTab !== tab.key) {
                                        e.currentTarget.style.borderColor = '#ffc107';
                                        e.currentTarget.style.backgroundColor = 'rgba(255, 193, 7, 0.1)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeTab !== tab.key) {
                                        e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.3)';
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }
                                }}
                            >
                                <i className={`${tab.icon} text-sm md:text-base`}></i>
                                <span className="hidden sm:inline md:inline">{tab.label}</span>
                                <span className="sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="w-full">
                    <div 
                        className="tech-content-container"
                        style={{
                            background: 'linear-gradient(135deg, #0a1445 0%, #0a1038 50%, #010c22 100%)',
                            borderRadius: '20px',
                            border: '2px solid rgba(255, 193, 7, 0.3)',
                            padding: '3rem',
                            position: 'relative',
                            overflow: 'hidden',
                            minHeight: '500px'
                        }}
                    >
                        {/* Background Animation */}
                        <div 
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: `radial-gradient(circle at 20% 80%, rgba(255, 193, 7, 0.03) 0%, transparent 50%),
                                            radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.03) 0%, transparent 50%)`,
                                pointerEvents: 'none',
                                zIndex: 0
                            }}
                        ></div>

                        {/* Header */}
                        <div className="text-center mb-12" style={{ position: 'relative', zIndex: 2 }}>
                            <h3 className="text-3xl font-bold text-white mb-3">
                                {technologies[activeTab].title}
                            </h3>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                {technologies[activeTab].description}
                            </p>
                        </div>

                        {/* Technology Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" style={{ position: 'relative', zIndex: 2 }}>
                            {technologies[activeTab].techs.map((tech, index) => (
                                <div key={tech.name} className="col-span-1">
                                    <div 
                                        className="tech-item"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.02)',
                                            border: '2px solid transparent',
                                            borderRadius: '15px',
                                            padding: '1.5rem',
                                            textAlign: 'center',
                                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                            cursor: 'pointer',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            animation: `techItemFadeIn 0.6s ease-out ${index * 0.1}s both`
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                            e.currentTarget.style.borderColor = tech.color;
                                            e.currentTarget.style.boxShadow = `0 15px 30px rgba(255, 193, 7, 0.2), 0 0 20px ${tech.color}40`;
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                            e.currentTarget.style.borderColor = 'transparent';
                                            e.currentTarget.style.boxShadow = 'none';
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                                        }}
                                    >
                                        {/* Hover Background Effect */}
                                        <div 
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                width: '0',
                                                height: '0',
                                                background: `linear-gradient(45deg, ${tech.color}20, transparent)`,
                                                borderRadius: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                transition: 'all 0.5s ease',
                                                zIndex: 1
                                            }}
                                            className="hover-bg"
                                        ></div>

                                        {/* Logo/Icon */}
                                        <div className="mb-3" style={{ position: 'relative', zIndex: 2 }}>
                                            {tech.logo && (typeof tech.logo === 'string' ? tech.logo.trim() !== '' : true) ? (
                                                <Image 
                                                    src={tech.logo}
                                                    alt={`${tech.name} logo`}
                                                    width={48}
                                                    height={48}
                                                    style={{
                                                        objectFit: 'contain',
                                                        transition: 'all 0.3s ease',
                                                        filter: `drop-shadow(0 4px 8px ${tech.color}40)`,
                                                        margin: '0 auto'
                                                    }}
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        const nextSibling = target.nextElementSibling as HTMLElement;
                                                        if (nextSibling) {
                                                            nextSibling.style.display = 'inline-block';
                                                        }
                                                    }}
                                                />
                                            ) : null}
                                            <i 
                                                className={tech.icon}
                                                style={{
                                                    fontSize: '2.5rem',
                                                    color: tech.color,
                                                    transition: 'all 0.3s ease',
                                                    filter: `drop-shadow(0 4px 8px ${tech.color}40)`,
                                                    display: tech.logo && (typeof tech.logo === 'string' ? tech.logo.trim() !== '' : true) ? 'none' : 'inline-block'
                                                }}
                                            ></i>
                                        </div>

                                        {/* Name */}
                                        <h5 
                                            className="text-white mb-0"
                                            style={{
                                                fontWeight: '600',
                                                fontSize: '1.1rem',
                                                position: 'relative',
                                                zIndex: 2,
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            {tech.name}
                                        </h5>
                                    </div>
                                </div>
                            ))}
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

                .tech-item:hover .hover-bg {
                    width: 200px !important;
                    height: 200px !important;
                }

                .tech-item:hover img {
                    transform: scale(1.2) rotateY(360deg);
                }

                .tech-item:hover i {
                    transform: scale(1.2) rotateY(360deg);
                }

                .tech-item:hover h5 {
                    color: #ffc107 !important;
                    transform: scale(1.05);
                }

                .tech-tab-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
                }

                .tech-tab-btn.active {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(255, 193, 7, 0.4);
                }

                @media (max-width: 768px) {
                    .tech-tab-btn {
                        min-width: 120px !important;
                        padding: 10px 16px !important;
                        font-size: 0.9rem !important;
                    }
                    
                    .tech-content-container {
                        padding: 2rem !important;
                    }
                    
                    .tech-item {
                        padding: 1rem !important;
                    }
                }

                @media (max-width: 576px) {
                    .tech-tab-btn {
                        width: 100% !important;
                        max-width: 200px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default TechnologyStackSection;