// Intersection Observer for scroll-triggered animations
export const observeElements = () => {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Unobserve after animation to prevent re-triggering
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  // Observe all elements with scroll animation classes
  const scrollClasses = [
    '.scroll-fade-in',
    '.scroll-fade-scale',
    '.scroll-slide-left',
    '.scroll-slide-right'
  ];
  
  scrollClasses.forEach(className => {
    const elements = document.querySelectorAll(className);
    elements.forEach((el) => observer.observe(el));
  });

  return observer;
};

// Stagger animation delays for children
export const staggerChildren = (parentSelector: string, delayIncrement = 100) => {
  if (typeof window === 'undefined') return;

  const parent = document.querySelector(parentSelector);
  if (!parent) return;

  const children = parent.children;
  Array.from(children).forEach((child, index) => {
    (child as HTMLElement).style.animationDelay = `${index * delayIncrement}ms`;
  });
};

// Smooth scroll to element
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Animation variants for common patterns
export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleOnHoverVariant = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1]
    }
  }
};
