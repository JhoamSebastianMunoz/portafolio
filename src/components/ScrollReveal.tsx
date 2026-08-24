'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { scrollReveal } from '@/lib/motion';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const variants = scrollReveal(delay);

  return (
    <motion.div
      className={className}
      initial={variants.initial}
      whileInView={variants.whileInView}
      viewport={variants.viewport}
      transition={variants.transition}
    >
      {children}
    </motion.div>
  );
}