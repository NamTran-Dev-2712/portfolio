import { useState } from 'react'
import { Github, ExternalLink, AlertCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GradientButton } from '@/components/ui/GradientButton'
import { personalInfo } from '@/data/portfolio'

const GH_USER = 'NamTran-Dev-2712'
const STATS_BASE = 'https://github-readme-stats.vercel.app/api'

const statsUrl = `${STATS_BASE}?username=${GH_USER}&show_icons=true&hide_border=true&bg_color=00000000&title_color=6366f1&icon_color=06b6d4&text_color=94a3b8&ring_color=8b5cf6&count_private=true&include_all_commits=true`

const langsUrl = `${STATS_BASE}/top-langs/?username=${GH_USER}&layout=compact&hide_border=true&bg_color=00000000&title_color=6366f1&text_color=94a3b8`

function StatImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-600 py-8">
        <AlertCircle className="w-4 h-4" />
        <span className="text-sm">Stats unavailable</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      width={400}
      height={165}
      onError={() => setError(true)}
      className="w-full h-auto max-w-sm"
    />
  )
}

export function GitHubStats() {
  return (
    <section id="github" className="py-24">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionTitle
            badge="Open Source"
            title="GitHub"
            highlight="Activity"
            subtitle="Building in public, learning through shipping, and contributing to real codebases."
          />
        </AnimatedSection>

        {/* Stats cards */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="w-full max-w-sm p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 flex items-center justify-center">
              <StatImage src={statsUrl} alt="Nam Tran's GitHub stats" />
            </div>
            <div className="w-full max-w-xs p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 flex items-center justify-center">
              <StatImage src={langsUrl} alt="Nam Tran's top languages on GitHub" />
            </div>
          </div>
        </AnimatedSection>

        {/* Activity message */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 mb-6">
              <Github className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <span className="text-slate-700 dark:text-slate-300 font-mono text-sm">
                @{GH_USER}
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              I build in public. My repositories contain real-world system implementations — not
              just tutorials — including production deployments, CI/CD pipelines, and domain-driven
              architecture.
            </p>
          </div>
        </AnimatedSection>

        {/* Highlights */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            {[
              { label: 'Primary Language', value: 'C# / .NET' },
              { label: 'Deployment Style', value: 'Docker + GitHub Actions' },
              { label: 'Architecture', value: 'Clean Architecture' },
            ].map(item => (
              <div
                key={item.label}
                className="text-center p-4 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/40"
              >
                <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="font-semibold text-slate-800 dark:text-slate-200">{item.value}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="text-center">
          <GradientButton href={personalInfo.github} size="lg" external>
            <Github className="w-5 h-5" />
            Explore My GitHub
            <ExternalLink className="w-4 h-4" />
          </GradientButton>
        </AnimatedSection>
      </div>
    </section>
  )
}
