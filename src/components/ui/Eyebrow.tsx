import type { ReactNode } from 'react';

type EyebrowProps = {
  children: ReactNode;
  light?: boolean;
  noLine?: boolean;
  className?: string;
};

export function Eyebrow({ children, light = false, noLine = false, className = '' }: EyebrowProps) {
  const cls = ['eyebrow', light ? 'light' : '', noLine ? 'no-line' : '', className]
    .filter(Boolean)
    .join(' ');
  return <span className={cls}>{children}</span>;
}
