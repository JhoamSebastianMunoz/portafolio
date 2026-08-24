'use client';

import { motion } from 'framer-motion';
import { education, certifications, languages } from '@/lib/portfolio-data';
import { AcademicCapIcon, BuildingOfficeIcon, LanguageIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';
import { hoverLift, tapScale } from '@/lib/motion';

const categoryColors: Record<string, string> = {
  Frontend: 'bg-blue-900/30 text-blue-300 border-blue-500/30',
  Backend: 'bg-emerald-900/30 text-emerald-300 border-emerald-500/30',
  'Bases de Datos': 'bg-purple-900/30 text-purple-300 border-purple-500/30',
  Herramientas: 'bg-amber-900/30 text-amber-300 border-amber-500/30',
  Metodologías: 'bg-rose-900/30 text-rose-300 border-rose-500/30',
};

const categoryLabels: Record<string, string> = {
  Frontend: 'Frontend',
  Backend: 'Backend',
  'Bases de Datos': 'Bases de Datos',
  Herramientas: 'Herramientas',
  Metodologías: 'Metodologías',
};

const certificationCategories = [...new Set(certifications.map(c => c.category).filter(Boolean))] as string[];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-ink-950 scroll-mt-16 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Formación"
            highlight="Profesional"
            subtitle="Educación formal, certificaciones y competencias complementarias"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <ScrollReveal>
                <div className="glass-panel rounded-2xl border border-white/5 p-6 md:p-8">
                  <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
                    <AcademicCapIcon className="w-6 h-6 text-accent-400" />
                    Educación Formal
                  </h3>
                  <div className="space-y-5">
                    {education.map((edu) => (
                      <div key={edu.id} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-300 rounded-xl flex items-center justify-center text-white shrink-0 mt-0.5">
                          <BuildingOfficeIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-white">{edu.title}</h4>
                          <p className="text-accent-400 text-sm font-medium">{edu.institution}</p>
                          <p className="text-slate-400 text-sm mt-0.5 font-mono">{edu.period} — {edu.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="glass-panel rounded-2xl border border-white/5 p-6 md:p-8">
                  <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
                    <LanguageIcon className="w-6 h-6 text-accent-300" />
                    Idiomas
                  </h3>
                  <div className="space-y-3">
                    {languages.map((lang) => (
                      <div key={lang.name} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                        <span className="font-medium text-white">{lang.name}</span>
                        <span className="text-sm text-slate-400 font-mono">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.15}>
              <div className="glass-panel rounded-2xl border border-white/5 p-6 md:p-8">
                <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-emerald-400" />
                  Certificaciones
                  <span className="font-mono text-sm font-normal text-slate-400 ml-1">({certifications.length})</span>
                </h3>
                <div className="space-y-6">
                  {certificationCategories.map((category) => (
                    <div key={category}>
                      <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                        {categoryLabels[category] || category}
                      </h4>
                      <div className="space-y-2">
                        {certifications
                          .filter(c => c.category === category)
                          .map((cert) => (
                            <motion.div
                              key={cert.id}
                              className={`px-3.5 py-2.5 rounded-xl border text-sm backdrop-blur-sm ${categoryColors[category || ''] || 'bg-white/5 text-slate-300 border-white/5'}`}
                              whileHover={{ ...hoverLift, borderColor: 'rgba(139, 92, 246, 0.5)' }}
                              whileTap={tapScale}
                              transition={{ duration: 0.15 }}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="min-w-0">
                                  <div className="font-medium text-white">{cert.name}</div>
                                  <div className="text-xs text-slate-400 mt-0.5 font-mono">
                                    {cert.issuer} — {cert.month && `${cert.month} `}{cert.year}
                                  </div>
                                </div>
                                {cert.status === 'in_progress' && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-900/30 text-amber-300 rounded-full text-xs font-medium shrink-0 border border-amber-500/30">
                                    <ClockIcon className="w-3 h-3" />
                                    En curso
                                  </span>
                                )}
                              </div>
                            </motion.div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}