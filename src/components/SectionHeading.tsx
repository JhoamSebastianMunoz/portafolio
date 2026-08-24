'use client';

import { motion } from 'framer-motion';
import { fadeUpBlur } from '@/lib/motion';

interface SectionHeadingProps {
  label: string;
  highlight?: string;
  subtitle?: string;
}

export default function SectionHeading({ label, highlight, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={fadeUpBlur.hidden}
      whileInView={fadeUpBlur.visible}
      viewport={fadeUpBlur.viewport}
      transition={fadeUpBlur.transition}
    >
      <div className="font-mono text-xs uppercase tracking-widest text-accent-400/60 mb-2">
        {'// ' + label.toUpperCase().replace(/\s+/g, '_')}
      </div>
      <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
        {highlight ? (
          <>
            {label.replace(highlight, '')}{' '}
            <span className="text-gradient bg-[length:200%_auto] animate-gradient-x">
              {highlight}
            </span>
          </>
        ) : (
          label
        )}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-accent-300 mx-auto rounded-full" />
      {subtitle && (
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto font-mono text-sm">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}