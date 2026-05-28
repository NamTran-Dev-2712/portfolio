import { motion } from 'framer-motion'
import * as Tabs from '@radix-ui/react-tabs'
import { Server, Database, Monitor, Terminal, Lightbulb } from 'lucide-react'
import { skillGroups } from '@/data/portfolio'
import { AnimatedSection, staggerContainer, fadeUpItem } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { TechBadge } from '@/components/ui/TechBadge'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Database,
  Monitor,
  Terminal,
  Lightbulb,
}

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionTitle
            badge="Skills & Tech"
            title="What I"
            highlight="Work With"
            subtitle="Technologies and tools I use to build robust, production-grade backend systems."
          />
        </AnimatedSection>

        <AnimatedSection>
          <Tabs.Root defaultValue="backend" className="w-full">
            {/* Tab list */}
            <Tabs.List
              className="flex flex-wrap gap-2 mb-10 justify-center"
              aria-label="Skill categories"
            >
              {skillGroups.map(group => {
                const Icon = iconMap[group.iconName]
                return (
                  <Tabs.Trigger
                    key={group.tabValue}
                    value={group.tabValue}
                    className={cn(
                      'flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border',
                      'text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent hover:border-indigo-400/50 dark:hover:border-indigo-500/40 hover:text-indigo-600 dark:hover:text-indigo-400',
                      'data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:border-indigo-600 data-[state=active]:shadow-md data-[state=active]:shadow-indigo-500/25'
                    )}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {group.category}
                  </Tabs.Trigger>
                )
              })}
            </Tabs.List>

            {/* Tab panels */}
            {skillGroups.map(group => (
              <Tabs.Content
                key={group.tabValue}
                value={group.tabValue}
                className="focus:outline-none"
              >
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto"
                >
                  {group.skills.map(skill => (
                    <motion.div key={skill.name} variants={fadeUpItem}>
                      <TechBadge
                        variant={skill.featured ? 'featured' : 'default'}
                        className="text-sm px-4 py-2"
                      >
                        {skill.name}
                      </TechBadge>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Tab description */}
                <div className="mt-8 text-center">
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    {group.tabValue === 'backend' &&
                      'Core backend skills — the foundation of everything I build.'}
                    {group.tabValue === 'database' &&
                      'Data storage, caching, and optimization strategies.'}
                    {group.tabValue === 'frontend' &&
                      'Frontend skills that help me ship full-stack features end-to-end.'}
                    {group.tabValue === 'devops' &&
                      'Shipping, automating, and operating production systems.'}
                    {group.tabValue === 'engineering' &&
                      'The thinking frameworks that shape how I design and build systems.'}
                  </p>
                </div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </AnimatedSection>

        {/* Stats bar */}
        <AnimatedSection delay={0.2}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '2+', label: 'Production Projects' },
              { value: '15+', label: 'Technologies Used' },
              { value: '100%', label: 'Clean Architecture' },
              { value: '0↓', label: 'Downtime Deployments' },
            ].map(stat => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50"
              >
                <p className="text-3xl font-extrabold gradient-text mb-2">{stat.value}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
