import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GradientButton } from '@/components/ui/GradientButton'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

type SubmitStatus = 'idle' | 'success' | 'error'

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    iconColor: 'text-indigo-500 dark:text-indigo-400',
    bgColor: 'bg-indigo-50 dark:bg-indigo-500/10',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    iconColor: 'text-cyan-500 dark:text-cyan-400',
    bgColor: 'bg-cyan-50 dark:bg-cyan-500/10',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
    iconColor: 'text-violet-500 dark:text-violet-400',
    bgColor: 'bg-violet-50 dark:bg-violet-500/10',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@NamTran-Dev-2712',
    href: personalInfo.github,
    iconColor: 'text-slate-600 dark:text-slate-400',
    bgColor: 'bg-slate-100 dark:bg-slate-700/30',
  },
]

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    try {
      const subject = encodeURIComponent(data.subject)
      const body = encodeURIComponent(
        `Hi Nam,\n\nName: ${data.name}\nEmail: ${data.email}\n\n${data.message}\n\nBest regards,\n${data.name}`
      )
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
      setSubmitStatus('success')
      reset()
    } catch {
      setSubmitStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto">
        <AnimatedSection>
          <SectionTitle
            badge="Get in Touch"
            title="Let's Build Something"
            highlight="Great Together"
            subtitle="I'm open to internships, junior roles, collaborations, and interesting conversations."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact cards */}
          <AnimatedSection direction="left">
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Whether you have a project in mind, want to discuss backend architecture, or just
                want to connect — I&apos;d love to hear from you. I respond within 24 hours.
              </p>

              {contactCards.map(card => {
                const Icon = card.icon
                const content = (
                  <div
                    className={cn(
                      'flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900',
                      card.href &&
                        'hover:border-indigo-400/50 dark:hover:border-indigo-500/30 transition-all duration-200 group cursor-pointer'
                    )}
                  >
                    <div
                      className={`flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl ${card.bgColor}`}
                    >
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-500 font-medium uppercase tracking-wide mb-0.5">
                        {card.label}
                      </p>
                      <p className="text-slate-800 dark:text-slate-200 font-medium text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {card.value}
                      </p>
                    </div>
                  </div>
                )

                if (card.href) {
                  return (
                    <a
                      key={card.label}
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {content}
                    </a>
                  )
                }
                return <div key={card.label}>{content}</div>
              })}
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection direction="right">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 space-y-5"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    {...register('name')}
                    className={cn(
                      'w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 transition-all duration-200 outline-none',
                      errors.name
                        ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                        : 'border-slate-300 dark:border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40'
                    )}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    {...register('email')}
                    className={cn(
                      'w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 transition-all duration-200 outline-none',
                      errors.email
                        ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                        : 'border-slate-300 dark:border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40'
                    )}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="What's this about?"
                  {...register('subject')}
                  className={cn(
                    'w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 transition-all duration-200 outline-none',
                    errors.subject
                      ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                      : 'border-slate-300 dark:border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40'
                  )}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or question..."
                  {...register('message')}
                  className={cn(
                    'w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 transition-all duration-200 outline-none resize-none',
                    errors.message
                      ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                      : 'border-slate-300 dark:border-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40'
                  )}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              {/* Status message */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400 text-sm">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  Your mail client has been opened. Send the email to complete.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  Something went wrong. Email me directly at {personalInfo.email}
                </div>
              )}

              <GradientButton
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                size="lg"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Preparing...' : 'Send Message'}
              </GradientButton>

              <p className="text-center text-xs text-slate-500 dark:text-slate-600">
                This will open your email client with the message pre-filled.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
