import { Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="border-t border-zinc-200 dark:border-zinc-800">
            <div className="container mx-auto px-4 py-24 md:px-6">
                <h2 className="mb-12 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    Get In Touch
                </h2>
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
                        I'm always open to discussing new projects, creative ideas, or opportunities
                        to be part of your vision. Feel free to reach out!
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
                        >
                            <Github className="h-5 w-5" />
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
                        >
                            <Linkedin className="h-5 w-5" />
                            LinkedIn
                        </a>
                        <a
                            href="mailto:your.email@example.com"
                            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                        >
                            <Mail className="h-5 w-5" />
                            Email Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
