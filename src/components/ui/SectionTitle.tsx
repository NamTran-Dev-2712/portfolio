import { cn } from '@/lib/utils'

interface SectionTitleProps {
  badge?: string
  title: string
  highlight?: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('mb-16', centered && 'text-center', className)}>
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
        {title}
        {highlight && <span className="gradient-text"> {highlight}</span>}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-slate-500 dark:text-slate-400 text-lg',
            centered && 'max-w-2xl mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
