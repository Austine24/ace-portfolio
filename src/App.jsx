
import ProjectGallery from './components/ProjectGallery'
import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Mail,
  Menu,
  ShieldCheck,
  X,
} from 'lucide-react'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const technologies = ['JavaScript', 'PHP', 'Laravel', 'Python', 'MySQL']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080d1a]/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
          aria-label="ACE.dev home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-black tracking-tight text-white shadow-lg shadow-blue-600/20 transition group-hover:bg-blue-500">
            A.
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            ace<span className="text-blue-400">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2.5 text-sm font-medium text-blue-300 transition hover:border-blue-400/60 hover:bg-blue-500/20 sm:flex"
        >
          Let's talk <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition hover:bg-white/5 md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/[0.07] bg-[#0b1222] px-5 py-5 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Let's talk <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  const [portraitLoaded, setPortraitLoaded] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  const headlines = [
  'Augustine Enemmoh.',
  'ACE.dev',
  'Software Developer.',
  'Cybersecurity Specialist.',
  ]

  const [headlineIndex, setHeadlineIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) return

    const interval = setInterval(() => {
      setHeadlineIndex((current) => (current + 1) % headlines.length)
    }, 2800)

    return () => clearInterval(interval)
  }, [prefersReducedMotion])

  const entrance = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, ease: 'easeOut' },
      }

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 hero-grid" />
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 top-24 -z-10 h-96 w-96 rounded-full bg-sky-500/[0.09] blur-[120px]" />

      <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12 lg:py-20">
        <motion.div
          {...entrance}
          className="order-2 max-w-2xl lg:order-1"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium tracking-wide text-emerald-300">
              Computer Science · Developer
            </span>
          </div>

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-blue-400">
            Hello, I'm
          </p>

          <div className="min-h-[116px] sm:min-h-[140px] lg:min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={headlineIndex}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="text-[2.65rem] font-bold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl"
              >
                {headlineIndex === 0 ? (
                  <>
                    Augustine
                    <span className="mt-1 block text-gradient">Enemmoh.</span>
                  </>
                ) : (
                  <span className="text-gradient">
                    {headlines[headlineIndex]}
                  </span>
                )}
              </motion.h1>
            </AnimatePresence>
          </div>

          <h2 className="mt-6 text-lg font-medium leading-relaxed text-slate-200 sm:text-xl">
            Software Developer{' '}
            <span className="text-blue-400">·</span> Full-Stack Engineer
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-400 sm:text-base sm:leading-8">
            I build modern web applications that solve real problems,
            combining practical engineering, thoughtful design, and a
            security-conscious mindset.
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[380px]:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              Explore my work <ArrowRight size={17} />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400/40 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              Let's connect <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs text-slate-500">Find me on</span>
            <span className="h-px w-7 bg-slate-700" />
            <a
              href="https://github.com/Austine24"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <span className="text-xs font-bold">GH</span>
            </a>
            <a
              href="https://www.linkedin.com/in/enemmohaugustine/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <span className="text-xs font-bold">in</span>
            </a>
            <a
              href="mailto:enemmohaugustine2004@gmail.com"
              aria-label="Send me an email"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <Mail size={19} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, scale: 0.94, y: 18 }
          }
          animate={
            prefersReducedMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: [0.94, 1.015, 1], y: [18, -3, 0] }
          }
          transition={{
            duration: prefersReducedMotion ? 0 : 1.1,
            delay: prefersReducedMotion ? 0 : 0.12,
            ease: 'easeOut',
          }}
          className="order-1 mx-auto w-full max-w-[340px] sm:max-w-[390px] lg:order-2 lg:max-w-[430px]"
        >
          <div className="relative mx-auto aspect-[0.88] w-full max-w-[390px]">
            <div className="absolute inset-[8%_5%_4%_9%] rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/20 via-[#101a30] to-sky-500/10 rotate-[-6deg]" />
            <div className="absolute inset-[4%_8%_8%_5%] rounded-[2rem] border border-white/10 bg-[#101a30]/70 rotate-[3deg]" />

            <div className="absolute inset-[1%_7%_6%_7%] overflow-hidden rounded-[1.8rem] border border-blue-300/20 bg-gradient-to-br from-[#152849] via-[#0d1730] to-[#080d1a] shadow-2xl shadow-blue-950/50">
              <div className="absolute inset-0 portrait-grid opacity-60" />
              <div className="absolute left-1/2 top-[42%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[70px]" />

              {portraitLoaded ? (
                <img
                  src="/images/augustine.png"
                  alt="Portrait of Augustine Enemmoh"
                  onError={() => setPortraitLoaded(false)}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-blue-300/30 bg-gradient-to-br from-blue-500/30 to-sky-400/5 shadow-2xl shadow-blue-500/10 sm:h-44 sm:w-44">
                    <div className="absolute inset-2 rounded-full border border-white/10" />
                    <span className="text-6xl font-bold tracking-tighter text-white sm:text-7xl">
                      AE
                    </span>
                  </div>
                  {/* <p className="mt-7 text-sm font-semibold text-white">
                    Your photo goes here
                  </p> */}
                  {/*<p className="mt-2 text-xs leading-5 text-slate-400">
                    Add your portrait to public/images/augustine.png
                  </p>*/}
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/75 to-transparent px-5 pb-5 pt-20 sm:px-7 sm:pb-7">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
                  The person behind the code
                </p>
                <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Augustine Enemmoh
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Building. Learning. Improving.
                </p>
              </div>
            </div>

            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, -7, 0] }
              }
              transition={{
                duration: 3.2,
                repeat: prefersReducedMotion ? 0 : Infinity,
                ease: 'easeInOut',
              }}
            >

              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                <Code2 size={19} />
              </span>
              <span>
                <span className="block text-xs font-semibold text-white">
                  Web Development
                </span>
                <span className="mt-1 block text-[10px] text-slate-400">
                  Building for the web
                </span>
              </span>
            </motion.div>

            <motion.div 
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, -7, 0] }
              }
              transition={{
                duration: 3.2,
                repeat: prefersReducedMotion ? 0 : Infinity,
                ease: 'easeInOut',
              }}
            >
                
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                <ShieldCheck size={19} />
              </span>
              <span>
                <span className="block text-xs font-semibold text-white">
                  Security-minded
                </span>
                <span className="mt-1 block text-[10px] text-slate-400">
                  Building with care
                </span>
              </span>
            </motion.div>

            <div className="absolute -bottom-1 left-[12%] flex items-center gap-2 rounded-full border border-white/10 bg-[#101a30]/95 px-3.5 py-2.5 shadow-xl shadow-black/20 backdrop-blur-xl sm:bottom-0 sm:left-[15%]">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="text-xs font-medium text-slate-200">
                Always learning
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="mx-auto mb-8 hidden w-fit items-center gap-2 text-xs text-slate-500 transition hover:text-blue-300 lg:flex"
      >
        Discover more <ArrowDown size={14} />
      </a>
    </section>
  )
}

function AboutPreview() {
  return (
    <section id="about" className="border-t border-white/[0.06] bg-[#0b1220]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
          A little about me
        </p>
        <div className="mt-4 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <h2 className="max-w-md text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Curious mind.
            <span className="text-gradient"> Practical builder.</span>
          </h2>
          <div>
            <p className="text-base leading-8 text-slate-400">
              I'm a Computer Science Graduate at Nnamdi Azikiwe University
              who enjoys turning ideas into useful digital products. My work
              spans web development, application security, and exploring how
              AI can help solve practical problems.
            </p>
            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
            >
              See what I'm building <ArrowDownRight size={17} />
            </a>
          </div>
        </div>

        <div id="skills" className="mt-12 flex flex-wrap gap-2.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-slate-300 transition hover:border-blue-400/30 hover:bg-blue-500/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsPreview() {
  return (
    <section id="projects" className="bg-[#080d1a]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Projects with a purpose.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            A selection of software, web development, and AI projects.
            We're going to add real screenshots and verified project links next.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="group rounded-2xl border border-white/[0.08] bg-[#101827] p-6 transition hover:-translate-y-1 hover:border-blue-400/30 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
              <Code2 size={23} />
            </div>
            <p className="mt-6 text-xs font-medium uppercase tracking-widest text-blue-300">
              AI · Web Application
            </p>
            <h3 className="mt-2 text-xl font-bold text-white">
              AI Complaint Management System
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              A university complaint and feedback platform designed to
              classify submissions, analyse sentiment, and help users track
              complaint progress.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Python', 'FastAPI', 'MySQL', 'NLP'].map((tech) => (
                <span key={tech} className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-xs text-slate-400">
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-300">
              Final-year project <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </p>
          </article>

          <article className="group rounded-2xl border border-white/[0.08] bg-[#101827] p-6 transition hover:-translate-y-1 hover:border-blue-400/30 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
              <ShieldCheck size={23} />
            </div>
            <p className="mt-6 text-xs font-medium uppercase tracking-widest text-sky-300">
              Education · Web Application
            </p>
            <h3 className="mt-2 text-xl font-bold text-white">
              School Management System
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              A Laravel-based school platform exploring the management of
              student records, academic results, administration, and payments.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'].map((tech) => (
                <span key={tech} className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-xs text-slate-400">
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-300">
              In development <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

function ContactPreview() {
  return (
    <section id="contact" className="border-t border-white/[0.06] bg-[#0b1220]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-600/15 via-[#101a30] to-sky-500/[0.07] p-7 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" />
          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Have a project in mind?
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Let's build something meaningful.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              I'm interested in software development opportunities,
              collaborative projects, and freelance work where technology can
              make a difference.
            </p>
            <a
              href="mailto:enemmohaugustine2004@gmail.com"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Get in touch <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#080d1a]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-center sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left lg:px-12">
        <a href="#home" className="text-sm font-bold text-white">
          ace<span className="text-blue-400">.dev</span>
        </a>
        <p className="text-xs text-slate-500">
          Designed and built by Augustine Enemmoh.
        </p>
        <a href="#home" className="text-xs text-slate-400 transition hover:text-white">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutPreview />
        <ProjectGallery />
        <ContactPreview />
      </main>
      <Footer />
    </>
  )
}
