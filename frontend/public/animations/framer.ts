export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeInUp = {
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

export const fadeUp = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};
