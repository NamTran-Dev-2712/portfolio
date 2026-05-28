import { motion } from 'framer-motion'
import { Server, GitBranch, Terminal, MapPin, GraduationCap, Briefcase, Languages } from 'lucide-react'
import { personalInfo, featureCards, quickFacts } from '@/data/portfolio'
import { AnimatedSection, staggerContainer, fadeUpItem } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  GitBranch,
  Terminal,
  MapPin,
  GraduationCap,
  Briefcase,
  Languages,
}

const featureGradients = [
  'from-indigo-500/10 to-violet-500/5 border-indigo-500/20 dark:border-indigo-500/15',
  'from-cyan-500/10 to-blue-500/5 border-cyan-500/20 dark:border-cyan-500/15',
  'from-violet-500/10 to-indigo-500/5 border-violet-500/20 dark:border-violet-500/15',
]

const featureIconBg = [
  'bg-indigo-100 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400',
  'bg-cyan-100 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400',
  'bg-violet-100 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400',
]

export function About() {
  return (
    <section id="about" className="py-24 section-alt">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionTitle
            badge="About Me"
            title="Who I"
            highlight="Am"
            subtitle="A backend developer who thinks in systems, not just features."
          />
        </AnimatedSection>

        {/* Bio + Feature cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Bio */}
          <AnimatedSection direction="left">
            <div className="space-y-5">
              {personalInfo.bio.map((paragraph, i) => (
                <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}

              {/* Philosophy callout */}
              <blockquote className="mt-6 pl-4 border-l-2 border-indigo-500">
                <p className="text-indigo-600 dark:text-indigo-400 font-medium italic">
                  &ldquo;Great software is not just about working code — it should be maintainable,
                  extensible, and built for the long run.&rdquo;
                </p>
              </blockquote>
            </div>
          </AnimatedSection>

          {/* Feature cards */}
          <AnimatedSection direction="right">
            <div className="space-y-4">
              {featureCards.map((card, i) => {
                const Icon = iconMap[card.iconName]
                return (
                  <motion.div
                    key={card.title}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className={`p-5 rounded-2xl border bg-gradient-to-br ${featureGradients[i]} bg-white dark:bg-transparent transition-all duration-200`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl ${featureIconBg[i]}`}
                      >
                        {Icon && <Icon className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                          {card.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </AnimatedSection>
        </div>

        {/* Quick facts */}
        <AnimatedSection>
          <div className="border-t border-slate-200 dark:border-slate-800 pt-12">
            <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
              Quick Facts
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {quickFacts.map(fact => {
                const Icon = iconMap[fact.iconName]
                return (
                  <motion.div
                    key={fact.label}
                    variants={fadeUpItem}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {Icon && <Icon className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-500 mb-0.5 font-medium uppercase tracking-wide">
                        {fact.label}
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-200 font-medium leading-snug">
                        {fact.value}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
