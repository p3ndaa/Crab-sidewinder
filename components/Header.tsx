import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Portfolio
                    </span>
                </Link>
                <div className="flex items-center gap-4">
                    <nav className="hidden items-center gap-6 md:flex">
                        <Link
                            href="#projects"
                            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#about"
                            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                        >
                            About
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                        >
                            Contact
                        </Link>
                    </nav>
                    <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800" />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
