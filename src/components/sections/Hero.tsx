import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Globe, Download, ArrowRight, ChevronDown } from 'lucide-react'
import { personalInfo, socialLinks, typingRoles } from '@/data/portfolio'
import { GradientButton } from '@/components/ui/GradientButton'
import { CodeCard } from '@/components/ui/CodeCard'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Mail,
  Globe,
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  const [charIndex, setCharIndex] = useState(0)
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const currentRole = typingRoles[roleIndex] ?? ''
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setCharIndex(c => c + 1)
        setDisplayText(currentRole.slice(0, charIndex + 1))
      }, 75)
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex(c => c - 1)
        setDisplayText(currentRole.slice(0, charIndex - 1))
      }, 40)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex(i => (i + 1) % typingRoles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-600/8 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-violet-600/6 dark:bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Greeting badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <p className="text-slate-500 dark:text-slate-400 text-xl mb-2 font-medium">
                Hi, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold mb-4 leading-tight">
                <span className="gradient-text">Nam Tran</span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div variants={itemVariants} className="h-10 flex items-center mb-6">
              <span className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
                {displayText}
                <span className="inline-block w-0.5 h-6 bg-indigo-500 ml-1 animate-cursor-blink" />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
              <GradientButton onClick={() => scrollToSection('projects')} size="lg">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </GradientButton>
              <GradientButton href={personalInfo.cvUrl} variant="secondary" size="lg" external>
                <Download className="w-4 h-4" />
                Download CV
              </GradientButton>
              <GradientButton onClick={() => scrollToSection('contact')} variant="ghost" size="lg">
                Contact Me
              </GradientButton>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="text-sm text-slate-500 dark:text-slate-500 mr-1">Find me on</span>
              {socialLinks.map(link => {
                const Icon = iconMap[link.iconName]
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                    className="flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/5 transition-all duration-200"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right: avatar + code card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-col items-center gap-10 lg:items-end"
          >
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 blur-xl opacity-20 scale-110" />
              {/* Gradient ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500">
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden bg-slate-900 flex items-center justify-center">
                  {personalInfo.avatarUrl ? (
                    <img
                      src={personalInfo.avatarUrl}
                      alt="Nam Tran profile photo"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-600/80 to-violet-700/80 text-white text-5xl font-extrabold tracking-tighter">
                      NT
                    </div>
                  )}
                </div>
              </div>
              {/* Status dot */}
              <div className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-green-500 border-2 border-white dark:border-navy shadow-sm" />
            </div>

            {/* Code card */}
            <div className="w-full max-w-xs xl:max-w-sm">
              <CodeCard />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
