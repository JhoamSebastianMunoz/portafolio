'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  highlight?: string;
  subtitle?: string;
}

export default function SectionHeading({ label, highlight, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
        {label}{' '}
        {highlight && (
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            {highlight}
          </span>
        )}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
      {subtitle && (
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
