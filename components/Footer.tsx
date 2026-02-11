export function Footer() {
    return (
        <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-6">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-zinc-600 dark:text-zinc-400 md:text-left">
                        Built with Next.js, Tailwind CSS & Supabase.
                    </p>
                </div>
                <p className="text-center text-sm text-zinc-600 dark:text-zinc-400 md:text-left">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    )
}
