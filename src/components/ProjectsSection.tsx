'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/portfolio-data';
import { Project, TechnicalNotice } from '@/types/portfolio';
import {
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

function TechnicalNoticeBanner({ notice }: { notice: TechnicalNotice }) {
  const isWarning = notice.type === 'warning';
  return (
    <div className={`mb-6 p-4 rounded-xl border-l-4 ${isWarning ? 'bg-amber-50 border-amber-500' : 'bg-blue-50 border-blue-500'}`}>
      <div className="flex items-start gap-3">
        {isWarning ? (
          <ExclamationTriangleIcon className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        ) : (
          <InformationCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        )}
        <div>
          <h5 className={`font-semibold mb-1 ${isWarning ? 'text-amber-800' : 'text-blue-800'}`}>
            {notice.title}
          </h5>
          <p className={`text-sm ${isWarning ? 'text-amber-700' : 'text-blue-700'}`}>
            {notice.message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Proyectos de"
            highlight="Alto Impacto"
            subtitle="Aplicaciones web en producción con arquitectura moderna y resultados medibles"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {projects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 0.1}>
                  <motion.div
                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-purple-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -6 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full shrink-0 ml-4">
                          {project.period}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-5 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {project.impact.slice(0, 2).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <ChartBarIcon className="w-4 h-4 text-purple-600 mt-1 shrink-0" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs font-medium">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="px-6 md:px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                      <button className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-1.5">
                        Ver detalles
                        <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                      </button>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-500 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-500 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{selectedProject.title}</h3>
                    <p className="text-gray-500 text-sm">{selectedProject.period}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{selectedProject.description}</p>

                {selectedProject.technicalNotice && (
                  <TechnicalNoticeBanner notice={selectedProject.technicalNotice} />
                )}

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Impacto</h4>
                  <div className="space-y-2.5">
                    {selectedProject.impact.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2.5 shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Características</h4>
                  <div className="space-y-2.5">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Stack Tecnológico</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-4 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-gray-100">
                  {selectedProject.liveUrl && (
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transition-all text-center">
                      Ver Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all text-center">
                      Ver Código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
