'use client';

import { motion } from 'framer-motion';
import { personalInfo, stats, techStack } from '@/lib/portfolio-data';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden scroll-mt-16">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-50 to-transparent rounded-bl-full" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Sobre{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                Mí
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.1}>
                <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {personalInfo.profile}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium border border-purple-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <ScrollReveal key={stat.label} delay={0.1 + i * 0.1}>
                    <motion.div
                      className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-center text-white"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-3xl md:text-4xl font-bold mb-1 tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-sm text-purple-200 font-medium">
                        {stat.label}
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
