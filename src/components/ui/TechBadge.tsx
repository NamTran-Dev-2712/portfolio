import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const techBadgeVariants = cva(
  'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-200',
  {
    variants: {
      variant: {
        default:
          'bg-slate-100 text-slate-700 border border-slate-200 hover:border-indigo-400/60 hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:border-indigo-500/50 dark:hover:text-indigo-300',
        featured:
          'bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-500/30',
        cyan: 'bg-cyan-50 text-cyan-700 border border-cyan-200 dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-500/30',
        violet:
          'bg-violet-50 text-violet-700 border border-violet-200 dark:bg-violet-500/15 dark:text-violet-300 dark:border-violet-500/30',
        stack:
          'bg-slate-100 text-slate-600 border border-slate-200 text-xs dark:bg-slate-800/80 dark:text-slate-400 dark:border-slate-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface TechBadgeProps extends VariantProps<typeof techBadgeVariants> {
  children: React.ReactNode
  className?: string
}

export function TechBadge({ children, variant, className }: TechBadgeProps) {
  return (
    <span className={cn(techBadgeVariants({ variant }), className)}>
      {children}
    </span>
  )
}
