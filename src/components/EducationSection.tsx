'use client';

import { motion } from 'framer-motion';
import { education, certifications, languages } from '@/lib/portfolio-data';
import { AcademicCapIcon, BuildingOfficeIcon, LanguageIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

const categoryColors: Record<string, string> = {
  Frontend: 'bg-blue-50 text-blue-700 border-blue-100',
  Backend: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Bases de Datos': 'bg-purple-50 text-purple-700 border-purple-100',
  Herramientas: 'bg-amber-50 text-amber-700 border-amber-100',
  Metodologías: 'bg-rose-50 text-rose-700 border-rose-100',
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
    <section id="education" className="py-24 bg-gray-50 scroll-mt-16">
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
                <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <AcademicCapIcon className="w-6 h-6 text-purple-600" />
                    Educación Formal
                  </h3>
                  <div className="space-y-5">
                    {education.map((edu) => (
                      <div key={edu.id} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white shrink-0 mt-0.5">
                          <BuildingOfficeIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{edu.title}</h4>
                          <p className="text-purple-600 text-sm font-medium">{edu.institution}</p>
                          <p className="text-gray-500 text-sm mt-0.5">{edu.period} — {edu.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <LanguageIcon className="w-6 h-6 text-blue-600" />
                    Idiomas
                  </h3>
                  <div className="space-y-3">
                    {languages.map((lang) => (
                      <div key={lang.name} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                        <span className="font-medium text-gray-900">{lang.name}</span>
                        <span className="text-sm text-gray-500">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.15}>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-emerald-600" />
                  Certificaciones
                  <span className="text-sm font-normal text-gray-400 ml-1">({certifications.length})</span>
                </h3>
                <div className="space-y-6">
                  {certificationCategories.map((category) => (
                    <div key={category}>
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2.5">
                        {categoryLabels[category] || category}
                      </h4>
                      <div className="space-y-2">
                        {certifications
                          .filter(c => c.category === category)
                          .map((cert) => (
                            <motion.div
                              key={cert.id}
                              className={`px-3.5 py-2.5 rounded-xl border text-sm ${categoryColors[category || ''] || 'bg-gray-50 text-gray-700 border-gray-100'}`}
                              whileHover={{ x: 3 }}
                              transition={{ duration: 0.15 }}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="min-w-0">
                                  <div className="font-medium text-gray-900">{cert.name}</div>
                                  <div className="text-xs text-gray-500 mt-0.5">
                                    {cert.issuer} — {cert.month && `${cert.month} `}{cert.year}
                                  </div>
                                </div>
                                {cert.status === 'in_progress' && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs font-medium shrink-0">
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
