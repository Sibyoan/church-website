import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  variant?: 'default' | 'glow' | 'scale';
  scrollAnimation?: 'fade' | 'scale' | 'slide-left' | 'slide-right';
  className?: string;
}

export default function AnimatedCard({ 
  children, 
  variant = 'default',
  scrollAnimation = 'fade',
  className = '' 
}: AnimatedCardProps) {
  const variantClasses = {
    default: 'card-hover',
    glow: 'card-hover-glow',
    scale: 'card-hover-scale'
  };

  const scrollClasses = {
    fade: 'scroll-fade-in',
    scale: 'scroll-fade-scale',
    'slide-left': 'scroll-slide-left',
    'slide-right': 'scroll-slide-right'
  };

  return (
    <div className={`${variantClasses[variant]} ${scrollClasses[scrollAnimation]} ${className}`}>
      {children}
    </div>
  );
}
