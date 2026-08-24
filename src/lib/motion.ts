export const EASE_SPRING = [0.16, 1, 0.3, 1] as const;
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

export const SPRING_SOFT = { type: 'spring', stiffness: 260, damping: 26 } as const;
export const SPRING_GENTLE = { type: 'spring', stiffness: 180, damping: 22 } as const;
export const SPRING_SNAPPY = { type: 'spring', stiffness: 350, damping: 30 } as const;

export const DURATION_FAST = 0.15;
export const DURATION_BASE = 0.25;
export const DURATION_SLOW = 0.4;
export const DURATION_ENTER = 0.6;

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
} as const;

export const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_SPRING } },
} as const;

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
} as const;

export const staggerItem = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: DURATION_ENTER, ease: EASE_SPRING },
  },
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_ENTER, ease: EASE_SPRING },
  },
} as const;

export const fadeUpBlur = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
  transition: { duration: DURATION_ENTER, ease: EASE_SPRING },
  viewport: { once: true, margin: '-60px' },
} as const;

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION_SLOW, ease: EASE_OUT_EXPO },
  },
} as const;

export const slideInRight = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION_ENTER, ease: EASE_SPRING },
  },
} as const;

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION_SLOW, ease: EASE_OUT_EXPO },
  },
} as const;

export const hoverLift = {
  y: -4,
  transition: { duration: DURATION_BASE, ease: EASE_OUT_EXPO },
} as const;

export const hoverGlow = {
  boxShadow: '0 0 32px -4px rgba(139, 92, 246, 0.35), 0 8px 32px -8px rgba(0, 0, 0, 0.5)',
  transition: { duration: DURATION_BASE, ease: EASE_OUT_EXPO },
} as const;

export const tapScale = { scale: 0.98, transition: { duration: DURATION_FAST } } as const;

export const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION_SLOW, ease: EASE_OUT_EXPO } },
  exit: { opacity: 0, transition: { duration: DURATION_BASE, ease: EASE_OUT_EXPO } },
} as const;

export const modalContent = {
  hidden: { opacity: 0, scale: 0.94, y: 16, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: DURATION_SLOW, ease: EASE_OUT_EXPO },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 16,
    filter: 'blur(4px)',
    transition: { duration: DURATION_BASE, ease: EASE_OUT_EXPO },
  },
} as const;

export const scrollReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(4px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: DURATION_ENTER, delay, ease: EASE_SPRING },
});

export const navLinkHover = {
  scale: 1,
  textShadow: '0 0 16px rgba(139, 92, 246, 0.5)',
  transition: { duration: DURATION_BASE, ease: EASE_OUT_EXPO },
} as const;

export const iconHover = {
  scale: 1.1,
  y: -2,
  transition: { type: 'spring', stiffness: 400, damping: 25 },
} as const;

export const iconTap = { scale: 0.92, transition: { duration: DURATION_FAST } } as const;

export const arrowDown = {
  animate: {
    y: [0, 8, 0],
  },
  transition: { duration: 2.5, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export const auroraDrift = {
  animate: {
    x: ['0%', '2%', '-1%', '1%', '0%'],
    y: ['0%', '-1%', '2%', '1%', '0%'],
    rotate: [0, 2, -1, 1, 0],
  },
  transition: { duration: 30, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94] as const },
};

export const gradientShift = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
  },
  transition: { duration: 8, repeat: Infinity, ease: 'linear' },
} as const;