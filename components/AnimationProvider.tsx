'use client';

import { useEffect } from 'react';
import { observeElements } from '@/lib/animations';

export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize scroll animations
    const observer = observeElements();

    // Cleanup
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return <>{children}</>;
}
