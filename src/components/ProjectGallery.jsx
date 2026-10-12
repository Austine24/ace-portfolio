
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Image as ImageIcon, X } from 'lucide-react'

const projects = [
  {
    id: 'cfms',
    title: 'AI-Based Complaint Management System',
    category: 'Academic Project',
    status: 'Local Project',
    description:
      'A digital complaint and feedback platform designed for UNIZIK students, with complaint tracking, administrative tools, AI-assisted categorization, priority detection, and sentiment analysis.',
    stack: ['Python', 'FastAPI', 'MySQL', 'NLP', 'JavaScript'],
    cover: '/images/projects/cfms/cfms-home.png',
    screenshots: [
      { src: '/images/projects/cfms/cfms-home.png', label: 'Student homepage' },
      { src: '/images/projects/cfms/cfms-student-dashboard.png', label: 'Student dashboard' },
      { src: '/images/projects/cfms/cfms-admin-dashboard.png', label: 'Admin dashboard' },
    ],
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: 'school-ms',
    title: 'School Management System',
    category: 'Web Application',
    status: 'In Development',
    description:
      'A school management platform concept for organizing student records, academic results, payments, and role-specific experiences for school management, teachers, and parents.',
    stack: ['Laravel', 'Blade', 'Tailwind CSS', 'Alpine.js', 'MySQL'],
    cover: '/images/projects/school-ms/school-home.png',
    screenshots: [
      { src: '/images/projects/school-ms/school-home.png', label: 'Homepage or login' },
      { src: '/images/projects/school-ms/school-dashboard.png', label: 'Management dashboard' },
      { src: '/images/projects/school-ms/school-students.png', label: 'Student records' },
    ],
    liveUrl: '',
    repoUrl: '',
  },
  {
    id: 'ngo',
    title: 'NGO Website',
    category: 'Client Project',
    status: 'Deployed',
    description:
      'A responsive public-facing website for a community-focused nonprofit, showcasing its mission, programs, stories, gallery, and ways to get involved.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    cover: '/images/projects/ngo/ngo-home.png',
    screenshots: [
      { src: '/images/projects/ngo/ngo-home.png', label: 'Homepage' },
      { src: '/images/projects/ngo/ngo-programs.png', label: 'Programs or about page' },
      { src: '/images/projects/ngo/ngo-gallery.png', label: 'Gallery' },
    ],
    liveUrl: 'http://sixtusaidnetworkinitiative.org/',
    repoUrl: '',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Website',
    category: 'Client Project',
    status: 'Deployed',
    description:
      'An online store with a product-focused storefront and product browsing experience, built to present a client’s products online.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    cover: '/images/projects/ecommerce/store-home.png',
    screenshots: [
      { src: '/images/projects/ecommerce/store-home.png', label: 'Storefront homepage' },
      { src: '/images/projects/ecommerce/store-products.png', label: 'Product listing' },
      { src: '/images/projects/ecommerce/store-detail.png', label: 'Product detail' },
    ],
    liveUrl: 'http://megawealth-stores.com/',
    repoUrl: '',
  },
]

function Screenshot({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  return failed ? (
    <div className={`flex min-h-48 flex-col items-center justify-center gap-3 bg-slate-800/70 p-6 text-center text-slate-400 ${className}`}>
      <ImageIcon size={30} />
      <span className="text-sm">{alt}</span>
      <span className="text-xs">Add the screenshot at its specified path</span>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  )
}

export default function ProjectGallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
            Selected work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Projects built to <span className="text-gradient">solve problems.</span>
          </h2>
          <p className="mt-4 leading-7 text-slate-400">
            A selection of academic work, web applications, and client projects.
            Open a project to explore its features and screenshots.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70"
            >
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="group relative block aspect-[16/10] w-full overflow-hidden bg-slate-800 text-left"
                aria-label={`View ${project.title} screenshots`}
              >
                <Screenshot
                  src={project.cover}
                  alt={`${project.title} cover screenshot`}
                  className="transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-slate-950/80 px-3 py-1 text-xs text-slate-200">
                  {project.status}
                </span>
                <span className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-blue-500 text-white transition group-hover:bg-blue-400">
                  <ArrowUpRight size={20} />
                </span>
              </button>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200"
                >
                  Explore case study <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelected(null)
          }}
        >
          <div className="mx-auto my-6 max-w-5xl rounded-2xl border border-white/10 bg-slate-900 p-5 sm:my-10 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                  {selected.category} · {selected.status}
                </p>
                <h3 id="project-dialog-title" className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  {selected.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close project details"
                className="rounded-full border border-white/10 p-2 text-slate-300 hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            <p className="mt-4 max-w-3xl leading-7 text-slate-400">
              {selected.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {selected.stack.map((tech) => (
                <span key={tech} className="rounded-md bg-blue-500/10 px-3 py-1.5 text-sm text-blue-200">
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="mt-9 text-lg font-semibold text-white">Project screenshots</h4>
            <div className="mt-4 grid gap-5 md:grid-cols-2">
              {selected.screenshots.map((shot) => (
                <figure key={shot.src} className="overflow-hidden rounded-xl border border-white/10 bg-slate-800">
                  <div className="aspect-video">
                    <Screenshot src={shot.src} alt={shot.label} />
                  </div>
                  <figcaption className="px-4 py-3 text-sm text-slate-300">
                    {shot.label}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {selected.liveUrl && (
                <a
                  href={selected.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-400"
                >
                  Visit live website <ExternalLink size={16} />
                </a>
              )}
              {selected.repoUrl && (
                <a
                  href={selected.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/5"
                >
                  View source code <ExternalLink size={16} />
                </a>
              )}
              {!selected.liveUrl && !selected.repoUrl && (
                <p className="text-sm text-slate-500">
                  Project links can be added in the projects configuration when ready.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
