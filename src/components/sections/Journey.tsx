import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Target } from 'lucide-react'
import { timelineEntries } from '@/data/portfolio'
import { AnimatedSection, staggerContainer, fadeUpItem } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { TechBadge } from '@/components/ui/TechBadge'

const typeIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  education: GraduationCap,
}

export function Journey() {
  return (
    <section id="journey" className="py-24 section-alt">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionTitle
            badge="My Journey"
            title="Education &"
            highlight="Growth"
            subtitle="The foundation I'm building toward becoming a Software Engineer capable of designing complex systems."
          />
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {timelineEntries.map((entry, index) => {
              const Icon = typeIcon[entry.type] ?? GraduationCap
              return (
                <AnimatedSection key={entry.id} delay={index * 0.15}>
                  <div className="relative flex gap-6 sm:gap-8">
                    {/* Timeline dot */}
                    <div className="relative flex-shrink-0 hidden sm:flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg ${
                          entry.current
                            ? 'bg-gradient-to-br from-indigo-600 to-violet-600 shadow-indigo-500/30'
                            : 'bg-slate-200 dark:bg-slate-700'
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${entry.current ? 'text-white' : 'text-slate-500'}`}
                        />
                      </div>
                      {entry.current && (
                        <div className="mt-2 px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-500 text-xs font-medium whitespace-nowrap">
                          Current
                        </div>
                      )}
                    </div>

                    {/* Content card */}
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 shadow-sm"
                    >
                      {/* Mobile icon */}
                      <div className="sm:hidden flex items-center gap-3 mb-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            entry.current
                              ? 'bg-gradient-to-br from-indigo-600 to-violet-600'
                              : 'bg-slate-200 dark:bg-slate-700'
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 ${entry.current ? 'text-white' : 'text-slate-500'}`}
                          />
                        </div>
                        {entry.current && (
                          <span className="px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-500 text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                            {entry.institution}
                          </h3>
                          <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">
                            {entry.degree}
                          </p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-sm font-mono font-medium">
                          {entry.period}
                        </span>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-5">
                        <MapPin className="w-3.5 h-3.5" />
                        {entry.location}
                      </div>

                      {/* Focus areas */}
                      <div className="mb-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-3">
                          Learning Focus
                        </p>
                        <motion.div
                          variants={staggerContainer}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="flex flex-wrap gap-2"
                        >
                          {entry.focus.map(item => (
                            <motion.div key={item} variants={fadeUpItem}>
                              <TechBadge variant="featured">{item}</TechBadge>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>

                      {/* Goal */}
                      {entry.goal && (
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-500/8 border border-indigo-200/60 dark:border-indigo-500/20">
                          <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed">
                            <strong>Goal:</strong> {entry.goal}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
