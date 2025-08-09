'use client';

import BentoCard from '@/components/ui/bento-card';
import Footer from '@/components/ui/footer';
import Hero from '@/components/ui/hero';
import InfiniteMarquee from '@/components/ui/infinite-marquee';
import Section from '@/components/ui/section';
import SkillsRow from '@/components/ui/skills-row';
import SocialLinks from '@/components/ui/social-links';
import Timeline, { type TimelineItem } from '@/components/ui/timeline';

export default function Home() {
  const githubUrl = 'https://github.com/4399SilverLionKing';

  const skills = [<SkillsRow key="row" />];

  const timeline: TimelineItem[] = [
    {
      title: 'Started coding',
      period: '2019',
      description: 'Began exploring web development.',
    },
    {
      title: 'First freelance project',
      period: '2021',
      description: 'Delivered a responsive website.',
    },
    {
      title: 'Frontend Engineer',
      period: '2023 - Now',
      description: 'Building delightful UIs with React/Next.js.',
    },
  ];

  // Inline projects data for simplicity
  const projects: { title: string; description?: string; href?: string }[] = [
    {
      title: 'Portfolio',
      description: 'Next.js + Tailwind + Motion',
      href: '#',
    },
    {
      title: 'UI Library',
      description: 'Composable, animated components',
      href: '#',
    },
    {
      title: 'GSAP Demos',
      description: 'Micro-interactions and scenes',
      href: '#',
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
              I’m Asta, a frontend developer passionate about creative UI and
              motion. I care about performance, polish, and crafting interfaces
              that feel alive.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm/relaxed text-neutral-200">
              Currently focused on React/Next.js, Tailwind, and motion/GSAP.
              Open to collaborations.
            </p>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section id="timeline" eyebrow="Timeline" title="Journey" full center>
        <Timeline items={timeline} />
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Contact" title="Get in touch" full center>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-neutral-300">
            Feel free to reach out via GitHub or email.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <SocialLinks githubUrl={githubUrl} />
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
