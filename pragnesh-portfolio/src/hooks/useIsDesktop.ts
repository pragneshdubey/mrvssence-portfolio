import { useEffect, useState } from 'react';

export function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1024px)');
    setIsDesktop(query.matches);
    const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    query.addEventListener('change', listener);
    return () => query.removeEventListener('change', listener);
  }, []);

  return isDesktop;
}
