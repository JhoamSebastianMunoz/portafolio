'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo, stats, techStack } from '@/lib/portfolio-data';
import ScrollReveal from './ScrollReveal';
import { hoverLift, tapScale } from '@/lib/motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-ink-950 relative overflow-hidden scroll-mt-16 border-y border-white/5">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-accent-500/5 to-transparent rounded-bl-full" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
              Sobre{' '}
              <span className="text-gradient bg-[length:200%_auto] animate-gradient-x">
                Mí
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-accent-300 mx-auto rounded-full" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.1}>
                <div className="glass-panel rounded-2xl p-8 md:p-10">
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {personalInfo.profile}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <motion.span
                      key={tech}
                      className="inline-flex items-center px-3 py-1.5 glass-panel text-slate-300 rounded-lg text-sm font-medium border border-white/5"
                      whileHover={{ ...hoverLift, borderColor: 'rgba(139, 92, 246, 0.5)', boxShadow: '0 0 16px -2px rgba(139, 92, 246, 0.2)' }}
                      whileTap={tapScale}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2">
              <ScrollReveal delay={0.1}>
                <Image
                  src="/images/profile/photo_jhoam_munoz.jpg"
                  alt={`Foto profesional de ${personalInfo.name}`}
                  width={1024}
                  height={1024}
                  className="w-full h-auto rounded-2xl border border-white/5 glass-panel shadow-xl object-cover mb-8"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </ScrollReveal>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <ScrollReveal key={stat.label} delay={0.1 + i * 0.1}>
                    <motion.div
                      className="glass-panel rounded-2xl p-6 text-center border border-white/5 relative overflow-hidden"
                      whileHover={{ ...hoverLift, boxShadow: '0 0 32px -4px rgba(139, 92, 246, 0.3), 0 12px 40px -12px rgba(0, 0, 0, 0.5)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-accent-300/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <div className="text-3xl md:text-4xl font-display font-bold mb-1 tracking-tight text-white">
                          {stat.value}
                        </div>
                        <div className="font-mono text-xs uppercase tracking-wider text-accent-400 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}