import { motion, type HTMLMotionProps } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

type PillProps = {
  variant?: 'primary' | 'outline';
  children: ReactNode;
  arrow?: boolean;
  onPhoto?: boolean;
} & Omit<HTMLMotionProps<'button'>, 'children'>;

export function Pill({
  variant = 'primary',
  children,
  arrow = true,
  onPhoto = false,
  className,
  ...rest
}: PillProps) {
  const variantClass =
    variant === 'primary'
      ? 'pill pill-primary'
      : `pill pill-outline ${onPhoto ? 'on-photo' : ''}`;

  return (
    <motion.button
      type="button"
      className={`${variantClass} ${className ?? ''}`.trim()}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      {...rest}
    >
      <span>{children}</span>
      {arrow && <ArrowUpRight strokeWidth={2} />}
    </motion.button>
  );
}
