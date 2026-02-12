"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "../../../../components/ui/Reveal";
import "@/styles/toolstack.css";

type Tool = { name: string; icon: string; href?: string };
type Cat = { key: string; title: string; tools: Tool[] };

const PLACEHOLDER_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Crect fill='%23ddd' width='64' height='64'/%3E%3C/svg%3E";

const CATS: Cat[] = [
  {
    key: "frontend",
    title: "Frontend",
    tools: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
      { name: "JavaScript (ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-plain.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" },
      { name: "Svelte", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-plain.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
      { name: "SCSS / SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
      { name: "Material-UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg" },
      { name: "Styled Components", icon: "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/framer.svg" },
      { name: "GSAP", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/greensock.svg" },
      { name: "Webpack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg" },
      { name: "Babel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-plain.svg" },
      { name: "Parcel", icon: "https://www.vectorlogo.zone/logos/parceljs/parceljs-icon.svg" },
    ],
  },
  {
    key: "backend",
    title: "Backend",
    tools: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: ".NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-plain.svg" },
      { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
      { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-plain.svg" },
      { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      { name: "tRPC", icon: "https://trpc.io/img/logo.svg" },
      { name: "Socket.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
      { name: "OAuth2", icon: "https://oauth.net/images/oauth-2-sm.png" },
      { name: "Passport.js", icon: "https://www.passportjs.org/images/logo.svg" },
      { name: "bcrypt", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gnuprivacyguard.svg" },
    ],
  },
  {
    key: "database",
    title: "Database",
    tools: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" },
      { name: "Firebase Firestore", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain.svg" },
      { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
      { name: "Sequelize", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain.svg" },
      { name: "TypeORM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" },
    ],
  },
  {
    key: "hosting",
    title: "Hosting & Deployment",
    tools: [
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-plain.svg" },
      { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-plain.svg" },
      { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-plain.svg" },
      { name: "Render", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/render.svg" },
      { name: "DigitalOcean", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-plain.svg" },
      { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cloudflare.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "GitLab CI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-plain.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg" },
    ],
  },
  
  {
    key: "collaboration",
    title: "Version Control & Collaboration",
    tools: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-plain.svg" },
      { name: "Bitbucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
      { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-plain.svg" },
      { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
      { name: "Asana", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/asana.svg" },
      { name: "ClickUp", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/clickup.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
    ],
  },
  {
    key: "package",
    title: "Package Management",
    tools: [
      { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
      { name: "Yarn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-plain.svg" },
      { name: "pnpm", icon: "https://pnpm.io/img/pnpm-no-name-with-frame.svg" },
    ],
  },
  {
    key: "communication",
    title: "Communication & Email",
    tools: [
      { name: "Intercom", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/intercom.svg" },
      { name: "SendGrid", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sendgrid.svg" },
      { name: "Mailgun", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mailgun.svg" },
      { name: "Twilio", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twilio.svg" },
      { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-plain.svg" },
    ],
  },
];

export default function ToolsStack() {
  const [tab, setTab] = useState(0);
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
      e.preventDefault();
      setTab((prev) => {
        const dir = e.key === "ArrowLeft" ? -1 : 1;
        const next = (prev + dir + CATS.length) % CATS.length;
        btnRefs.current[next]?.focus();
        return next;
      });
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  const onTabClick = (i: number, e: React.MouseEvent<HTMLButtonElement>) => {
    setTab(i);
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--rx", `${e.clientX - rect.left}px`);
    target.style.setProperty("--ry", `${e.clientY - rect.top}px`);

    target.classList.remove("ts-ripple");
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    target.offsetHeight;
    target.classList.add("ts-ripple");
  };

  const current = CATS[tab];

  return (
    <section className="px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold">
          Web2 Technology <span className="text-[#f4cc6f]">Stack</span>
        </h2>

        {/* Tabs */}
        <div
          className="ts-tabs relative mt-8 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2 sm:gap-x-2"
          role="tablist"
          aria-label="Technology categories"
        >
          {CATS.map((c, i) => {
            const selected = i === tab;
            return (
              <button
                key={c.key}
                ref={(el) => {
                  if (el) btnRefs.current[i] = el;
                }}
                role="tab"
                aria-selected={selected}
                aria-controls={`tools-panel-${c.key}`}
                id={`tools-tab-${c.key}`}
                onClick={(e) => onTabClick(i, e)}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
                className={[
                  "ts-tab",
                  selected ? "ts-tab--active" : "",
                ].join(" ")}
              >
                {c.title}
                <span aria-hidden className="ts-ink" />
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
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {current.tools.map((t) => (
              <Reveal key={t.name} className="flex items-stretch justify-center">
                <div
                  className="ts-tile group relative block w-full rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:p-4 cursor-default"
                >
                  <span className="ts-tile-glow" aria-hidden />
                  <span className="relative z-[1] flex flex-col items-center">
                    <span className="ts-logo-wrap">
                      <img
                        src={t.icon}
                        alt={t.name}
                        className="ts-logo"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          img.src = PLACEHOLDER_ICON;
                        }}
                      />
                    </span>
                    <span className="mt-2 sm:mt-3 text-[10px] sm:text-xs lg:text-sm text-center leading-tight">{t.name}</span>
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