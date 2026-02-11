import { supabase } from '@/lib/supabaseClient'
import { ProjectCard } from '@/components/ProjectCard'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Project } from '@/lib/types'

// Revalidate every hour, or use 0 for dynamic
export const revalidate = 0

export default async function Home() {
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')

  // Enhanced logging for debugging
  console.log('Supabase Query Result:', {
    projectsCount: projects?.length || 0,
    error: error?.message,
    errorDetails: error,
    projects: projects
  })

  if (error) {
    console.error('Error fetching projects:', error)
  }

  return (
    <>
      <div className="container mx-auto px-4 md:px-6">
        <section className="grid gap-8 py-24 md:grid-cols-2 md:items-center md:gap-12 md:py-32 lg:gap-16">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Building Digital <br className="hidden md:inline" />
              <span className="text-zinc-500">Excellence.</span>
            </h1>
            <p className="mt-6 max-w-[700px] text-lg text-zinc-600 dark:text-zinc-400 md:text-xl">
              I craft high-performance digital experiences with a focus on precision,
              aesthetics, and scalability.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md md:mx-0 md:ml-auto">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-200 shadow-xl dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-800">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent dark:from-zinc-950/40"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-zinc-900/5 dark:bg-zinc-50/5"></div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Selected Projects</h2>
          </div>

          {error ? (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-900 dark:bg-red-950/20 dark:text-red-200">
              <p>Failed to load projects. Please check configuration.</p>
              <p className="text-xs mt-1 opacity-75">{error.message}</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-xs">Error Details</summary>
                <pre className="text-xs mt-1 overflow-auto">{JSON.stringify(error, null, 2)}</pre>
              </details>
            </div>
          ) : !projects || projects.length === 0 ? (
            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-yellow-800 dark:border-yellow-900 dark:bg-yellow-950/20 dark:text-yellow-200">
              <p className="font-semibold">No projects found.</p>
              <p className="text-sm mt-2">Possible causes:</p>
              <ul className="text-sm mt-1 ml-4 list-disc">
                <li>The table is empty</li>
                <li>Row Level Security (RLS) is enabled without a public read policy</li>
                <li>The table name doesn't match (check if it's "projects")</li>
              </ul>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project: Project, index) => (
                <ProjectCard key={project.title || index} project={project} />
              ))}
            </div>
          )}
        </section>
      </div>

      <About />
      <Contact />
    </>
  )
}
