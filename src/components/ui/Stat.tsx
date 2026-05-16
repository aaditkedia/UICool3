import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

type StatProps = {
  to: number;
  suffix?: string;
  label: string;
};

export function Stat({ to, suffix = '+', label }: StatProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setN(to);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const obj = { v: 0 };
          gsap.to(obj, {
            v: to,
            duration: 1.6,
            ease: 'power3.out',
            onUpdate: () => setN(Math.round(obj.v)),
          });
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);

    return () => io.disconnect();
  }, [to]);

  return (
    <div className="stat" ref={ref}>
      <div className="stat-num">
        {n}
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">
        <span className="dot" aria-hidden="true" />
        <span>{label}</span>
      </div>
    </div>
  );
}
