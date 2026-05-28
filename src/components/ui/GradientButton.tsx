import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

interface GradientButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
  disabled?: boolean
  type?: 'button' | 'submit'
}

export function GradientButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  external,
  disabled,
  type = 'button',
}: GradientButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none',
    size === 'sm' && 'px-4 py-2 text-sm',
    size === 'md' && 'px-6 py-3 text-base',
    size === 'lg' && 'px-8 py-4 text-lg',
    variant === 'primary' &&
      'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 active:translate-y-0',
    variant === 'secondary' &&
      'border border-indigo-500/40 text-indigo-600 hover:border-indigo-500 hover:text-indigo-500 hover:bg-indigo-500/5 dark:text-indigo-400 dark:hover:text-indigo-300 dark:hover:border-indigo-400',
    variant === 'ghost' &&
      'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-white/5',
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses} disabled={disabled}>
      {children}
    </button>
  )
}
