export interface Project {
    title: string
    description: string
    image_url: string
    project_link?: string
    tags?: string[] | string  // Support both array and string
}
