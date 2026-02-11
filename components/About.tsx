import { Download } from "lucide-react"

export function About() {
    return (
        <section id="about" className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4 py-24 md:px-6">
                <h2 className="mb-12 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    About Me
                </h2>
                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                            I'm a passionate developer with expertise in building modern web applications.
                            With a focus on clean code, user experience, and performance, I create digital
                            solutions that make a difference.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                            My journey in software development has equipped me with a diverse skill set
                            spanning frontend frameworks, backend technologies, and cloud infrastructure.
                            I thrive on solving complex problems and turning ideas into reality.
                        </p>
                        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                            When I'm not coding, you'll find me exploring new technologies, contributing
                            to open-source projects, or sharing knowledge with the developer community.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
                            <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                                Skills & Expertise
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-md bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                        >
                            <Download className="mr-2 h-4 w-4" />
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
