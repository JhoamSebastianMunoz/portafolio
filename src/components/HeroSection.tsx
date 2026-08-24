'use client';

import { motion } from 'framer-motion';
import { personalInfo, socialLinks, techStack } from '@/lib/portfolio-data';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import { containerVariants, itemVariants, arrowDown, auroraDrift, hoverLift, iconHover, iconTap, tapScale } from '@/lib/motion';

function TechBadge({ name }: { name: string }) {
  return (
    <motion.span
      className="inline-flex items-center px-3 py-1.5 glass-panel text-sm font-medium text-accent-200 whitespace-nowrap border border-white/5"
      whileHover={{ ...hoverLift, borderColor: 'rgba(139, 92, 246, 0.5)', boxShadow: '0 0 16px -2px rgba(139, 92, 246, 0.3)' }}
      whileTap={tapScale}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {name}
    </motion.span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink-950">
      {/* Grid Background */}
      <div className="grid-bg" aria-hidden="true" />

      {/* Aurora Blobs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
          animate={auroraDrift.animate}
          transition={auroraDrift.transition}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-300/10 rounded-full blur-3xl"
          animate={{
            transform: [
              'translate(0, 0) rotate(0deg)',
              'translate(-2%, 1%) rotate(-2deg)',
              'translate(1%, -2%) rotate(1deg)',
              'translate(-1%, -1%) rotate(-1deg)',
              'translate(0, 0) rotate(0deg)',
            ],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-accent-500/5 to-accent-300/5 rounded-full blur-3xl"
          animate={{
            transform: [
              'translate(-50%, -50%) scale(1) rotate(0deg)',
              'translate(-48%, -52%) scale(1.05) rotate(1deg)',
              'translate(-52%, -48%) scale(0.95) rotate(-1deg)',
              'translate(-50%, -50%) scale(1) rotate(0deg)',
            ],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs uppercase tracking-widest text-accent-400/80 mb-4"
          >
            {'// FULL STACK DEVELOPER'}
          </motion.p>

          {/* Name with animated gradient */}
          <motion.h1
            variants={itemVariants}
            className="pt-2 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6"
          >
            <span className="text-gradient bg-[length:200%_auto] animate-gradient-x">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-accent-400/60 max-w-2xl mx-auto mb-8 leading-relaxed font-mono text-sm"
          >
            React · TypeScript · Node.js · Power BI
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 text-sm text-slate-400"
          >
            <span className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-accent-400" />
              {personalInfo.location}
            </span>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-accent-300 transition-colors font-mono">
              <PhoneIcon className="w-4 h-4 text-accent-400" />
              {personalInfo.phone}
            </a>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-accent-300 transition-colors font-mono">
              <EnvelopeIcon className="w-4 h-4 text-accent-400" />
              {personalInfo.email}
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-accent-500 to-accent-300 text-white rounded-full font-semibold text-gradient bg-[length:200%_auto] animate-gradient-x shadow-lg shadow-accent-500/25"
              whileHover={{ ...hoverLift, boxShadow: '0 0 32px -4px rgba(139, 92, 246, 0.4), 0 12px 40px -12px rgba(0, 0, 0, 0.5)' }}
              whileTap={tapScale}
            >
              Ver Proyectos
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 glass-panel border border-white/5 text-white rounded-full font-semibold hover:border-accent-500/50 hover:bg-white/5 transition-all duration-300"
              whileHover={hoverLift}
              whileTap={tapScale}
            >
              Contactar
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-panel border border-white/5 rounded-full text-white hover:border-accent-500/30 hover:bg-white/5 transition-all duration-300"
                whileHover={iconHover}
                whileTap={iconTap}
              >
                {link.icon === 'github' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                )}
                {link.icon === 'linkedin' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                )}
                {link.icon === 'envelope' && (
                  <EnvelopeIcon className="w-5 h-5" />
                )}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">Tecnologías</p>
            <div className="flex flex-wrap justify-center gap-2">
              {techStack.slice(0, 8).map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-mono font-medium text-slate-500">
                +{techStack.length - 8} más
              </span>
            </div>
          </motion.div>

          <motion.div
            className="mt-16"
            animate={arrowDown.animate}
            transition={arrowDown.transition}
          >
            <ArrowDownIcon className="w-6 h-6 text-slate-500 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}