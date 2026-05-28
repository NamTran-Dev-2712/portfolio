import { motion } from 'framer-motion'
import { Github, ExternalLink, Calendar, User, CheckCircle2, Layers } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { TechBadge } from '@/components/ui/TechBadge'
import { GradientButton } from '@/components/ui/GradientButton'

const typeBadgeStyles: Record<string, string> = {
  indigo:
    'bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-400 dark:border-indigo-500/30',
  cyan: 'bg-cyan-50 text-cyan-700 border border-cyan-200 dark:bg-cyan-500/15 dark:text-cyan-400 dark:border-cyan-500/30',
  violet:
    'bg-violet-50 text-violet-700 border border-violet-200 dark:bg-violet-500/15 dark:text-violet-400 dark:border-violet-500/30',
}

export function Projects() {
  return (
    <section id="projects" className="py-24 section-alt">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionTitle
            badge="Featured Work"
            title="Projects I've"
            highlight="Built"
            subtitle="Real-world systems with production-grade architecture — not just tutorial projects."
          />
        </AnimatedSection>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative p-8 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 hover:border-indigo-400/40 dark:hover:border-indigo-500/30 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-500/5"
              >
                {/* Hover glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/3 to-violet-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                <div className="relative">
                  {/* Project header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                        {project.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${typeBadgeStyles[project.typeColor]}`}
                      >
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-5 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                      {project.timeline}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                      {project.role}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main content */}
                    <div className="lg:col-span-2 space-y-5">
                      {/* Objective */}
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.objective}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2.5">
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        {project.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Stack */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-3">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map(tech => (
                            <TechBadge key={tech} variant="stack">
                              {tech}
                            </TechBadge>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.github && (
                          <GradientButton
                            href={project.github}
                            variant="secondary"
                            size="sm"
                            external
                          >
                            <Github className="w-4 h-4" />
                            View GitHub
                          </GradientButton>
                        )}
                        {project.demo && (
                          <GradientButton href={project.demo} size="sm" external>
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </GradientButton>
                        )}
                      </div>
                    </div>

                    {/* Architecture highlights */}
                    {project.architectureHighlights && (
                      <div className="lg:col-span-1">
                        <div className="h-full p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                            Architecture
                          </h4>
                          <ul className="space-y-3">
                            {project.architectureHighlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-2 flex-shrink-0" />
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
                                  {highlight}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
