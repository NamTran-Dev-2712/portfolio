import { useState, useEffect } from 'react'
import { Code2, Github, Mail, Globe, ArrowUp } from 'lucide-react'
import { navLinks, socialLinks, personalInfo } from '@/data/portfolio'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Mail,
  Globe,
}

function scrollToSection(href: string) {
  const id = href.replace('#', '')
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 hover:-translate-y-1 transition-all duration-200"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                </div>
                <span className="font-bold text-lg text-slate-100">Nam Tran</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
                Backend .NET Developer building clean, scalable, and maintainable backend systems.
              </p>
              <div className="flex gap-2">
                {socialLinks.map(link => {
                  const Icon = iconMap[link.iconName]
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={link.label}
                      className="p-2 rounded-lg border border-slate-800 text-slate-500 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-200"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-semibold text-slate-100 mb-4 text-sm uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Built with */}
            <div>
              <h3 className="font-semibold text-slate-100 mb-4 text-sm uppercase tracking-wider">
                Contact
              </h3>
              <div className="space-y-2.5 text-sm text-slate-400 mb-6">
                <p>{personalInfo.email}</p>
                <p>Ho Chi Minh City, Vietnam</p>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Built with React, TypeScript,
                  <br />
                  Bun, Tailwind CSS, Framer Motion.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">
              © 2026 Nam Tran. All rights reserved.
            </p>
            <p className="text-xs text-slate-700">
              Crafted with care and system-design thinking.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
