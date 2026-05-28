import { useTheme } from '@/hooks/useTheme'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { GitHubStats } from '@/components/sections/GitHubStats'
import { Journey } from '@/components/sections/Journey'
import { Contact } from '@/components/sections/Contact'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-navy text-slate-900 dark:text-slate-100">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubStats />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
