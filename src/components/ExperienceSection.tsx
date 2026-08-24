'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/portfolio-data';
import { CalendarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';
import { hoverLift } from '@/lib/motion';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-ink-950 scroll-mt-16 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Experiencia"
            highlight="Profesional"
            subtitle="Trayectoria construyendo productos digitales con impacto real"
          />

          <div className="relative">
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500 via-accent-300 to-transparent" />

            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <ScrollReveal key={exp.id} delay={idx * 0.15}>
                  <motion.div
                    className="relative pl-16 md:pl-20"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute left-[21px] md:left-[41px] top-1 w-3 h-3 bg-ink-950 border-2 border-accent-500 rounded-full" />

                    <motion.div
                      className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5"
                      whileHover={{ ...hoverLift, borderColor: 'rgba(139, 92, 246, 0.5)', boxShadow: '0 0 32px -4px rgba(139, 92, 246, 0.2), 0 12px 40px -12px rgba(0, 0, 0, 0.5)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-4 mb-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-300 rounded-xl flex items-center justify-center text-white shrink-0">
                          <BuildingOfficeIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-display font-bold text-white">{exp.position}</h3>
                          <p className="text-accent-400 font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-400 mt-3 mb-4 font-mono">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>

                      <p className="text-slate-300 mb-5 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2.5 mb-5">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-accent-300 rounded-full mt-2 shrink-0" />
                            <span className="text-sm text-slate-300">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 glass-panel text-slate-300 rounded-lg text-xs font-medium border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}