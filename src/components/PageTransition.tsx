import { useEffect, useState, type ReactNode, type CSSProperties } from 'react';
import { animationConfig } from '../config';

type Props = { page: string; direction: number; children: ReactNode };
export default function PageTransition({ page, direction, children }: Props) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(false);
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, [page]);
  return (
    <section className={`page-transition ${show ? 'show' : ''}`} style={{ '--page-transition-ms': `${animationConfig.pageTransitionMs}ms`, '--direction': direction } as CSSProperties} aria-live="polite">
      {children}
    </section>
  );
}
