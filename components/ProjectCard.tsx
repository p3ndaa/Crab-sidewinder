import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Project } from "@/lib/types"

export function ProjectCard({ project }: { project: Project }) {
    // Handle tags as either string or array
    const tagsArray = Array.isArray(project.tags)
        ? project.tags
        : project.tags
            ? [project.tags]
            : []

    // Check if image_url is a valid absolute URL
    const isValidImageUrl = project.image_url && (
        project.image_url.startsWith('http://') ||
        project.image_url.startsWith('https://') ||
        project.image_url.startsWith('/')
    )

    return (
        <div className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/50">
            <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                {isValidImageUrl ? (
                    <Image
                        src={project.image_url}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="flex h-full flex-col items-center justify-center text-zinc-400">
                        <p className="text-sm">No Image</p>
                        {project.image_url && (
                            <p className="mt-1 text-xs opacity-60">Invalid URL: {project.image_url}</p>
                        )}
                    </div>
                )}
            </div>
            <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {project.description}
                </p>

                {tagsArray.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tagsArray.map((tag, index) => (
                            <span
                                key={`${tag}-${index}`}
                                className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="mt-6 flex items-center gap-4">
                    {project.project_link && (
                        <Link
                            href={project.project_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-medium text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400"
                        >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Project
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
