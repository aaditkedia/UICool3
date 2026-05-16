import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

type DisplayHeadlineProps = {
  children: string;
  as?: 'h1' | 'h2' | 'h3';
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
  trigger?: 'self' | 'parent';
};

export function DisplayHeadline({
  children,
  as: Tag = 'h2',
  align = 'left',
  className = '',
  light = false,
  trigger = 'self',
}: DisplayHeadlineProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let split: SplitType | null = null;
    let scrollTriggerInstance: ScrollTrigger | null = null;
    let resizeTimer: number | undefined;

    const applySplit = () => {
      // Clean any previous split + lingering inner spans
      if (split) {
        try {
          split.revert();
        } catch {
          /* no-op */
        }
        split = null;
      }
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
        scrollTriggerInstance = null;
      }

      split = new SplitType(el, { types: 'lines' });
      const lines = split.lines || [];
      lines.forEach((line) => {
        // Wrap line contents in an inner span for clip-up
        const inner = document.createElement('span');
        inner.style.display = 'inline-block';
        inner.style.willChange = 'transform';
        inner.innerHTML = line.innerHTML;
        line.innerHTML = '';
        line.appendChild(inner);
        line.style.overflow = 'hidden';
        line.style.display = 'block';
      });

      const innerSpans = el.querySelectorAll<HTMLElement>('.line > span');

      if (prefersReduced) {
        gsap.fromTo(
          innerSpans,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            scrollTrigger: {
              trigger: trigger === 'parent' ? (el.parentElement as HTMLElement) : el,
              start: 'top 85%',
              once: true,
            },
          },
        );
        return;
      }

      gsap.set(innerSpans, { yPercent: 110 });
      const tween = gsap.to(innerSpans, {
        yPercent: 0,
        duration: 1.1,
        ease: 'expo.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: trigger === 'parent' ? (el.parentElement as HTMLElement) : el,
          start: 'top 80%',
          once: true,
        },
      });
      scrollTriggerInstance = (tween.scrollTrigger as ScrollTrigger) || null;
    };

    const run = () => {
      // Wait for the display font to load so line breaks are correct
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          applySplit();
          ScrollTrigger.refresh();
        });
      } else {
        applySplit();
        ScrollTrigger.refresh();
      }
    };

    run();

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        applySplit();
        ScrollTrigger.refresh();
      }, 180);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.clearTimeout(resizeTimer);
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
      if (split) {
        try {
          split.revert();
        } catch {
          /* no-op */
        }
      }
    };
  }, [children, trigger]);

  const styleColor = light ? { color: '#fff' } : undefined;
  const styleAlign = { textAlign: align as 'left' | 'center' | 'right' };

  return (
    <Tag
      ref={ref}
      className={`display-headline ${className}`.trim()}
      style={{ ...styleAlign, ...styleColor }}
    >
      {children}
    </Tag>
  );
}
