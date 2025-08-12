'use client';

import BentoCard from '@/components/ui/bento-card';
import Hero from '@/components/ui/hero';
import InfiniteMarquee from '@/components/ui/infinite-marquee';
import Section from '@/components/ui/section';
import SkillsRow from '@/components/ui/skills-row';
import Timeline, { type TimelineItem } from '@/components/ui/timeline';

export default function Home() {
  const skills = [<SkillsRow key="row" />];

  const timeline: TimelineItem[] = [
    {
      title: 'Started coding',
      period: '2024-3 ~ 2024-6',
      description: 'Began exploring web frontend development.',
    },
    {
      title: 'First freelance project',
      period: '2024-7 ~ 2025-3',
      description:
        'Learning backend development and Delivered responsive websites.',
    },
    {
      title: 'AI Exploration',
      period: '2025-4 ~ Now',
      description: 'Expoloring and building AI products.',
    },
  ];

  // Inline projects data for simplicity
  const projects: { title: string; description?: string; href?: string }[] = [
    {
      title: 'MyBlogs',
      description: 'Vue + Springboot',
      href: 'http://blogs.sanyeyeye.xyz',
    },
    {
      title: 'MyWeb3D',
      description: 'Threejs + Nextjs + Tailwind',
      href: 'https://three.sanyeyeye.xyz',
    },
    {
      title: 'MyNotes',
      description: 'Using Nextra Template',
      href: 'https://notes.sanyeyeye.xyz',
    },
    {
      title: 'ChinaTravel',
      description: 'Langchain + Nextjs + Springboot',
      href: 'https://travel.sanyeyeye.xyz',
    },
  ];

  return (
    <main className="relative h-screen snap-y snap-mandatory overflow-y-auto bg-gradient-to-b from-[#0B1120] via-[#0B1324] to-[#0B182C] text-white">
      {/* Hero */}
      <Section id="hero" full center>
        <Hero />
      </Section>

      {/* Skills Marquee */}
      <Section
        id="skills"
        eyebrow="Skills"
        title="Toolbox"
        subtitle="A quick glance at my stack"
        align="center"
        full
        center
      >
        <InfiniteMarquee items={skills} speed={28} />
      </Section>

      {/* Projects Bento Grid */}
      <Section
        id="projects"
        eyebrow="Projects"
        title="Selected Work"
        subtitle="Some projects I've worked on"
        align="center"
        full
        center
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((p, i) => (
            <BentoCard
              key={i}
              title={p.title}
              description={p.description}
              href={p.href}
            />
          ))}
        </div>
      </Section>

      {/* About */}
      <Section
        id="about"
        eyebrow="About"
        title="Who I Am"
        subtitle="I build interactive web experiences"
        full
        center
      >
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm/relaxed text-neutral-200">
              As a full-stack developer, I bridge the gap between front-end and
              back-end development. My expertise includes building dynamic user
              interfaces with Vue/Next.js and developing resilient APIs with
              Spring/FastApi, delivering complete end-to-end solutions.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm/relaxed text-neutral-200">
              My current focus is on AI development. I am leveraging my
              full-stack foundation to build next-generation applications with
              technologies like LangGraph and LangChain. I am seeking to apply
              my skills to create intelligent and impactful AI-powered products.
            </p>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section id="timeline" eyebrow="Timeline" title="Journey" full center>
        <Timeline items={timeline} />
      </Section>
    </main>
  );
}
