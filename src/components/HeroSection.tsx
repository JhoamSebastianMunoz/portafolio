'use client';

import { motion } from 'framer-motion';
import { personalInfo, socialLinks, techStack } from '@/lib/portfolio-data';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
};

function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-purple-200 whitespace-nowrap">
      {name}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className=" pt-7 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.h1
            variants={itemVariants}
            className="pt-2 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-purple-200/80 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            React · TypeScript · Node.js · Power BI
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 text-sm text-gray-400"
          >
            <span className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-purple-400" />
              {personalInfo.location}
            </span>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-purple-300 transition-colors">
              <PhoneIcon className="w-4 h-4 text-purple-400" />
              {personalInfo.phone}
            </a>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-purple-300 transition-colors">
              <EnvelopeIcon className="w-4 h-4 text-purple-400" />
              {personalInfo.email}
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-purple-500/25"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Ver Proyectos
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
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
                className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
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
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Tecnologías</p>
            <div className="flex flex-wrap justify-center gap-2">
              {techStack.slice(0, 8).map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
              <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-purple-400/60">
                +{techStack.length - 8} más
              </span>
            </div>
          </motion.div>

          <motion.div
            className="mt-16"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDownIcon className="w-6 h-6 text-gray-500 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
